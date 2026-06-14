export function getColorStatus( value, reverse = false) {

    if (reverse) {
        return value > 80 ? "var(--status-ok)" : value > 50 ? "var(--status-warn)" : "var(--status-crit)"
    }

    return value > 80 ? "var(--status-crit)" : value > 50 ? "var(--status-warn)" : "var(--status-ok)"
}