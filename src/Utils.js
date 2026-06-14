export function getColorStatus(bytes) {
    return bytes > 80 ? "var(--status-crit)" : bytes > 50 ? "var(--status-warn)" : "var(--status-ok)"
}