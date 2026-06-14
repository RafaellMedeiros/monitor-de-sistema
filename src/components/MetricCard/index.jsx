import { getColorStatus } from "../../Utils"
import "./styles.css"

export default function MetricCard({ label, value, sub}) {
    const colorStatus = getColorStatus(parseFloat(value))



    return (
        <div className={"MetricCard"}>
            <div className="MetricCard__label">{label ? Number(label).toFixed(1) + "%" : "Carregando..."}</div>
            <div className="MetricCard__value" style={{ color: colorStatus }}>
                {value}
            </div>
            {sub && <div className="MetricCard__sub">{sub}</div>}
        </div>
    )
}