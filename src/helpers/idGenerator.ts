export function generateId(): string {
  const letters = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  let id = "";

  for (let i = 0; i <= 24; i++) {
    const characterChooser = Math.floor(Math.random() * 2);
    if (characterChooser === 0) {
      id = id + Math.floor(Math.random() * 10).toString();
    } else {
      id = id + letters[Math.floor(Math.random() * letters.length)];
    }
  }
  return id.toString();
}
