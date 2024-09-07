const elements = document.querySelectorAll('[id]');
import { dynamic_styles } from './dynamic-styles.js';
import { styles } from './styles.js';

const custom_tags = {};
const styleKeys = Object.keys(styles).sort();
const dynamicStyleKeys = Object.keys(dynamic_styles).sort();

let styleSearchCount = 0;
let dynamicStyleSearchCount = 0;
const styleCache = {};

(function() {
  function createComponent(styles, name) {
    custom_tags[name] = styles;
  }

  //WRITE YOUR CUSTOM COMPONENTS BELOW INSIDE OF THIS FUNCTION PLEASE!!!!!!!
  createComponent("background-gradient, opacity-50", "my-identifier");
})();

function binarySearch(array, key) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === key) {
      return mid;
    } else if (array[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    styleSearchCount++;
  }
  return -1;
}

const startTime = performance.now();

elements.forEach(element => {
  if (element.id in custom_tags) {
    element.id = custom_tags[element.id];
  }

  const stylesArray = element.id.split(',').map(style => style.trim());

  stylesArray.forEach(style => {
    if (style in custom_tags) {
      style = custom_tags[style];
    }

    style = style.replace(/ /g, '');
    let properties = style.split('(');
    let elementId = properties[0];
    let elementValue = properties[1] ? properties[1].split(')').join('') : null;

    if (elementId in styleCache) {
      const [property, value] = styleCache[elementId];
      element.style[property] = value;
    } else if (binarySearch(styleKeys, elementId) !== -1) {
      const [property, value] = styles[elementId];
      element.style[property] = value;
      styleCache[elementId] = [property, value];
    } else if (binarySearch(dynamicStyleKeys, elementId) !== -1) {
      dynamicStyleSearchCount++;
      const [property] = dynamic_styles[elementId];
      if (elementValue && !isNaN(elementValue)) {
        element.style[property] = `${elementValue}px`;
        styleCache[elementId] = [property, `${elementValue}px`];
      }
    }
  });
});

console.log(custom_tags);

const endTime = performance.now();

console.log(`Total style searches: ${styleSearchCount}`);
console.log(`Total dynamic style searches: ${dynamicStyleSearchCount}`);
console.log(`Execution time: ${endTime - startTime} milliseconds`);
