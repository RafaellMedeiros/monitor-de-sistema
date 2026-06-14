import { useEffect, useState } from "react";
import Graphic from "../Graphic";
import MetricCard from "../MetricCard";
import "./styles.css"

export default function Dashboard() {
    const [cpu, setCpuInfo] = useState(null)
    const [memory, setMemoryInfo] = useState(null)
    const [disk, setDiskInfo] = useState(null)
    const [battery, setBatteryInfo] = useState(null)



    useEffect(() => {
        window.electronAPI.getCpuInfo().then(setCpuInfo)
        window.electronAPI.getMemoryInfo().then(setMemoryInfo)
        window.electronAPI.getDiskInfo().then(setDiskInfo)
        window.electronAPI.getBatteryInfo().then(setBatteryInfo)

        const interval = setInterval(() => {
            window.electronAPI.getCpuInfo().then(setCpuInfo)
            window.electronAPI.getMemoryInfo().then(setMemoryInfo)
            window.electronAPI.getDiskInfo().then(setDiskInfo)
            window.electronAPI.getBatteryInfo().then(setBatteryInfo)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    


    return (
        <div className="Dashboard">
            <h1>Monitor de Sistema</h1>
            <main>
                <MetricCard label="CPU" value={cpu?.uso} sub="Utilização" />
                <MetricCard label="Memoria RAM" value={memory?.uso} sub="Utilização" />
                <MetricCard label="Disk" value={disk?.particoes[0]?.percentualUso} sub="Utilização" />
                <MetricCard label="Bateria" value={battery?.percentual} sub="Utilização" reverseColor={true} />
                <Graphic title="CPU" color="var(--chart-cpu)" />
                <Graphic title="Memory" color="var(--chart-mem)" />
                <Graphic title="Disk" color="var(--chart-disk)" />
                <Graphic title="Bateria" color="var(--chart-bat)" />
            </main>
        </div>
    )
}