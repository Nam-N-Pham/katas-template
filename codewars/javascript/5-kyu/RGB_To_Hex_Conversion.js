function rgb(r, g, b) {
  const hexConv = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  r < 0 ? (r = 0) : r <= 255 ? (r = r) : (r = 255);
  g < 0 ? (g = 0) : g <= 255 ? (g = g) : (g = 255);
  b < 0 ? (b = 0) : b <= 255 ? (b = b) : (b = 255);

  const rHex = hexConv[Math.floor(r / 16)] + hexConv[r % 16];
  const gHex = hexConv[Math.floor(g / 16)] + hexConv[g % 16];
  const bHex = hexConv[Math.floor(b / 16)] + hexConv[b % 16];

  return rHex + gHex + bHex;
}
