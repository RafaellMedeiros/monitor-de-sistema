import React from "react";

/**
 * Sparkline — compact live line/area chart driven by a number array.
 * Renders into a fixed 200×56 viewBox stretched to fill its container,
 * exactly like the dashboard tiles. Pass one or two series.
 */
export function Sparkline({
  data = [],
  data2 = null,
  color = "var(--chart-cpu)",
  color2 = "var(--chart-mem)",
  fill = "var(--chart-cpu-fill)",
  max = "auto",
  grid = true,
  height = 56,
  style = {},
}) {
  const W = 200, H = 56;
  const peak =
    max === "auto"
      ? Math.max(1, ...data, ...(data2 || [])) * 1.15
      : max;

  const toPath = (arr) => {
    if (!arr || arr.length < 2) return { l: "", a: "" };
    const pts = arr.map((v, i) => {
      const x = (i / (arr.length - 1)) * W;
      const y = H - 2 - (Math.min(v, peak) / peak) * (H - 6);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    const l = "M" + pts.join(" L");
    return { l, a: `${l} L${W},${H} L0,${H} Z` };
  };

  const a = toPath(data);
  const b = toPath(data2);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      style={{ width: "100%", height: `${height}px`, display: "block", ...style }}
    >
      {grid &&
        [14, 28, 42].map((y) => (
          <line key={y} x1="0" y1={y} x2={W} y2={y} stroke="var(--border)" strokeWidth="0.5" />
        ))}
      {fill && <path d={a.a} fill={fill} />}
      <path d={a.l} fill="none" stroke={color} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      {data2 && (
        <path d={b.l} fill="none" stroke={color2} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      )}
    </svg>
  );
}
