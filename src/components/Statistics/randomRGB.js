function getRandomColor() {
  let color = 70;

  function generateRgb() {
    color = Math.floor(Math.random() * (254 - 1) + 1);

    if (color < 70 || color > 200) {
      color = Math.floor(Math.random() * (254 - 1) + 1);

      if (color < 70 || color > 200) {
        color = Math.floor(Math.random() * (254 - 1) + 1);
      }
    }

    return color;
  }

  return `rgb(${generateRgb()}, ${generateRgb()}, ${generateRgb()})`;
}

export default getRandomColor;
