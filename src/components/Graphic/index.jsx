import { useEffect, useState } from "react"
import { AreaChart, Area, ResponsiveContainer, YAxis } from "recharts"
import './styles.css'
import { getColorStatus } from "../../Utils"

const MAX_POINTS = 100
const UPDATE_INTERVAL = 1000

function nextValue(previous) {
    const drift = (Math.random() - 0.5) * 12
    return Math.min(100, Math.max(0, previous + drift))
}

export default function Graphic({ title = "CPU", unit = "%", color = "var(--chart-cpu)" }) {
    const [data, setData] = useState(() => {
        const initial = Math.random() * 100
        return Array.from({ length: MAX_POINTS }, () => ({ value: initial }))
    })

    useEffect(() => {
        const id = setInterval(() => {
            setData((prev) => [...prev.slice(1), { value: nextValue(prev[prev.length - 1].value) }])
        }, UPDATE_INTERVAL)

        return () => clearInterval(id)
    }, [])

    const current = data[data.length - 1].value

    const colorStatus = getColorStatus(current)

    return (
        <div className="Graphic">
            <div className="Graphic__header">
                <h3>{title}</h3>
                <span className="Graphic__value" style={{ color: colorStatus }}>
                    {current.toFixed(1)}{unit}
                </span>
            </div>
            <div className="Graphic__chart">
                <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={data}>
                        <YAxis hide domain={[0, 100]} />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke={color}
                            fill={color}
                            fillOpacity={0.15}
                            strokeWidth={2}
                            isAnimationActive={false}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}