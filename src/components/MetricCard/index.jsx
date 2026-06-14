import { getColorStatus } from "../../Utils"
import "./styles.css"

export default function MetricCard({ label, value, sub, reverseColor = false }) {
    const colorStatus = getColorStatus(parseFloat(value), reverseColor)

    return (
        <div className={"MetricCard"}>
            <div className="MetricCard__label">{label}</div>
            <div className="MetricCard__value" style={{ color: colorStatus }}>
                {value ? Number(value).toFixed(1) + "%" : "Carregando..."}
            </div>
            {sub && <div className="MetricCard__sub">{sub}</div>}
        </div>
    )
}