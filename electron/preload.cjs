const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getSystemInfo: () => ipcRenderer.invoke('get-system-info'),
  getCpuInfo: () => ipcRenderer.invoke('get-cpu-info'),
  getMemoryInfo: () => ipcRenderer.invoke('get-memory-info'),
  getDiskInfo: () => ipcRenderer.invoke('get-disk-info'),
  getNetworkInfo: () => ipcRenderer.invoke('get-network-info'),
  getBatteryInfo: () => ipcRenderer.invoke('get-battery-info'),
  getGraphicsInfo: () => ipcRenderer.invoke('get-graphics-info'),
});
