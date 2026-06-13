import MetricCard from "../MetricCard";
import "./styles.css"

export default function Dashboard() {
    return (
        <div className="Dashboard">
            <h1>Monitor de Sistema</h1>
            <main>
                <MetricCard />
                <MetricCard />
                <MetricCard />
                <MetricCard />
                <MetricCard className='graphic'/>
                <MetricCard className='graphic'/>
            </main>
        </div>
    )
}