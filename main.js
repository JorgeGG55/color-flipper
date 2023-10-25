import './style.css'

const COLOR_PALETTE = {
  '#EACBD2' : 'Mimi Pink',
  '#DFAEB4' : 'Tea rose (red)',
  '#DD9AC2' : 'Amaranth pink',
  '#B486AB' : 'African Violet',
  '#82667F' : 'Chinese Violet',
}

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker')

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option');
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  });
}

addOptionsToColorPicker();

document.addEventListener("DOMContentLoaded", () => {
  const colorPicker = document.getElementById("color-picker");
  const h2ColorName = document.querySelector(".block h2");
  const body = document.body;

  colorPicker.addEventListener("change", () => {
    const selectedColor = colorPicker.value;
    const colorName = COLOR_PALETTE[selectedColor];
    body.style.backgroundColor = selectedColor;
    h2ColorName.textContent = colorName ? `${colorName} | (${selectedColor})` : "-";
  });
});

