import { useEffect, useState } from "react";
import Graphic from "../Graphic";
import MetricCard from "../MetricCard";
import "./styles.css"

export default function Dashboard() {
    const [cpu, setCpuInfo] = useState(null)
    useEffect(() => {
        window.electronAPI.getCpuInfo().then(setCpuInfo)
        const interval = setInterval(() => {
            window.electronAPI.getCpuInfo().then(setCpuInfo)
        }, 5000)
        return () => clearInterval(interval)
    }, [])



    return (
        <div className="Dashboard">
            <h1>Monitor de Sistema</h1>
            <main>
                <MetricCard label="CPU" value={cpu.uso} sub="Utilização" />
                <MetricCard label="Memory" value="60%" sub="Utilização" />
                <MetricCard label="Disk" value="75%" sub="Utilização" />
                <MetricCard label="Network" value="90%" />
                <Graphic title="CPU" color="var(--chart-cpu)" />
                <Graphic title="Memory" color="var(--chart-mem)" />
                <Graphic title="Disk" color="var(--chart-disk)" />
                <Graphic title="Network" color="var(--chart-net)" />
            </main>
        </div>
    )
}