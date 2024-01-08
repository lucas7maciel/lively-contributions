
export class GlobalService {
  //styling properties
  static colors: object = {
    green: ['#161b22', '#0e4429', '#006d32', '#26a641', '#26a641'],
    yellow: ['#4d4a00', '#806e00', '#b3a300', '#e5c100', '#ffd700'],
    blue: ["#bfcfff", "#80c0ff", "#809fff", "#0040ff", "#002db3"],
    red: ['#ff9999', '#ff6666', '#ff3333', '#ff0000', '#cc0000'],
    //ajeitar essas 3
    black: ['#f5f5f5', '#d2d2d2', '#a8a8a8', '#7f7f7f', '#4c4c4c'],
    white: ['#ffffff', '#f2f2f2', '#e0e0e0', '#cccccc', '#b3b3b3'],
    purple: ['#f0f0ff', '#d9d9ff', '#b3a1ff', '#a366ff', '#7f37f0'],
  };

  static bg: object = {
    light: "#f5f5f5",
    dark: "#101414"
  }

  static animation: Array<string> = [
    "scale", "drop", "snake", "pacman", "spaceship"
  ]
}
//