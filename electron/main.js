import {app, BrowserWindow, ipcMain} from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import si from 'systeminformation';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (!app.isPackaged) {
  process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';
}

ipcMain.handle('get-system-info', () => {
  return {
    plataforma: process.platform,
    versaoNode: process.versions.node,
    versaoElectron: process.versions.electron,
  };
});

ipcMain.handle('get-cpu-info', async () => {
  const [load, temp, cpu] = await Promise.all([
    si.currentLoad(),
    si.cpuTemperature(),
    si.cpu(),
  ]);

  return {
    uso: load.currentLoad,
    usoPorNucleo: load.cpus.map((nucleo) => nucleo.load),
    temperatura: temp.main,
    velocidade: cpu.speed,
    nucleos: cpu.cores,
    modelo: `${cpu.manufacturer} ${cpu.brand}`,
  };
});

ipcMain.handle('get-memory-info', async () => {
  const mem = await si.mem();

  return {
    total: mem.total,
    usada: mem.active,
    livre: mem.available,
    swapTotal: mem.swaptotal,
    swapUsada: mem.swapused,
  };
});

ipcMain.handle('get-disk-info', async () => {
  const [layout, io] = await Promise.all([
    si.fsSize(),
    si.disksIO(),
  ]);

  return {
    particoes: layout.map((disco) => ({
      dispositivo: disco.fs,
      tipo: disco.type,
      total: disco.size,
      usado: disco.used,
      disponivel: disco.available,
      percentualUso: disco.use,
    })),
    leituraPorSegundo: io.rIO_sec,
    escritaPorSegundo: io.wIO_sec,
  };
});

ipcMain.handle('get-network-info', async () => {
  const stats = await si.networkStats();

  return stats.map((interfaceRede) => ({
    interface: interfaceRede.iface,
    download: interfaceRede.rx_sec,
    upload: interfaceRede.tx_sec,
  }));
});

ipcMain.handle('get-battery-info', async () => {
  const battery = await si.battery();

  return {
    temBateria: battery.hasBattery,
    percentual: battery.percent,
    carregando: battery.isCharging,
    ciclos: battery.cycleCount,
  };
});

ipcMain.handle('get-graphics-info', async () => {
  const graphics = await si.graphics();

  return graphics.controllers.map((controlador) => ({
    modelo: controlador.model,
    vram: controlador.vram,
    usoGpu: controlador.utilizationGpu,
    temperatura: controlador.temperatureGpu,
  }));
});

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1600,
    height: 1000,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.cjs'),
    }
  })

  const isDev = !app.isPackaged;
  if (isDev) {
    win.loadURL('http://localhost:5173');
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});