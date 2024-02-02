export default function generateHSLAColor(hue, saturation, lightness, alpha) {
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
}