export const hexToRgb = (hex: string, alpha = 0) => {
  const r = Number.parseInt(hex.slice(1, 3), 16),
    g = Number.parseInt(hex.slice(3, 5), 16),
    b = Number.parseInt(hex.slice(5, 7), 16);

  return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgb(${r}, ${g}, ${b})`;
};

export const getHuefromHex = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255,
    g = parseInt(hex.slice(3, 5), 16) / 255,
    b = parseInt(hex.slice(5, 7), 16) / 255,
    min = Math.min(r, g, b),
    max = Math.max(r, g, b),
    delta = max - min;

  let hue = 0;
  if (delta === 0) {
    hue = 0;
  } else if (max === r) {
    hue = (g - b) / delta;
  } else if (max === g) {
    hue = 2 + (b - r) / delta;
  } else {
    hue = 4 + (r - g) / delta;
  }

  return (hue * 60 + 360) % 360;
};
