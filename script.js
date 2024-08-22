const controles = document.querySelector("#controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

controles.addEventListener("change", handleChange);

const handlStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "px";
  },
};
function handleChange(event) {
  console.log(event);
  const name = event.target.name;
  const value = event.target.value;
  if (handlStyle[name]) {
    handlStyle[name](value);
  } else {
    console.warn(`Método ${name} não encontrado em handlStyle.`);
  }
  console.log(name, value);
  showCss();
  saveValues(name, value);
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((item) => {
    console.log(controles.elements[item]);
    if (controles.elements[item]) {
      controles.elements[item].value = localStorage[item];
      handlStyle[item](localStorage[item]);
    }
  });
  showCss();
  console.log(properties);
}
setValues();

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}
