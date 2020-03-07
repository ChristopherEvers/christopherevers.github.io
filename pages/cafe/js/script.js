/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-loop-func */
/* eslint-disable guard-for-in */
const images = Array.prototype.slice.call(
  document.getElementsByTagName('img'),
  0,
);
images.shift();
const totalSection = document.getElementById('total');
let itemsAdded = document.createElement('option');
const orderSection = document.getElementById('order');
let image;
let item;
let totalCost = 0.0;

function clickChecker() {
  for (image of images) {
    image.addEventListener('click', function() {
      item = this.id.substring(10).slice(0, -9);
      console.log(item);
      switch (item) {
        case 'espresso':
          console.log('hit');
          totalCost = parseFloat(totalCost) + 1.95;
          itemsAdded = document.createElement('option');
          itemsAdded.appendChild(document.createTextNode('$1.95 - Espresso'));
          itemsAdded.value = 'espresso';
          orderSection.appendChild(itemsAdded);
          break;
        case 'latte':
          totalCost = parseFloat(totalCost) + 2.95;
          itemsAdded = document.createElement('option');
          itemsAdded.appendChild(document.createTextNode('$2.95 - Latte'));
          itemsAdded.value = 'latte';
          orderSection.appendChild(itemsAdded);
          break;
        case 'cappuccino':
          totalCost = parseFloat(totalCost) + 3.45;
          itemsAdded = document.createElement('option');
          itemsAdded.appendChild(document.createTextNode('$3.45 - Cappuccino'));
          itemsAdded.value = 'cappuccino';
          orderSection.appendChild(itemsAdded);
          break;
        case 'coffee':
          totalCost = parseFloat(totalCost) + 1.75;
          itemsAdded = document.createElement('option');
          itemsAdded.appendChild(document.createTextNode('$1.75 - Coffee'));
          itemsAdded.value = 'coffee';
          orderSection.appendChild(itemsAdded);
          break;
        case 'scone':
          totalCost = parseFloat(totalCost) + 1.95;
          itemsAdded = document.createElement('option');
          itemsAdded.appendChild(document.createTextNode('$1.95 - Scone'));
          itemsAdded.value = 'scone';
          orderSection.appendChild(itemsAdded);
          break;
        case 'biscotti':
          totalCost = parseFloat(totalCost) + 2.95;
          itemsAdded = document.createElement('option');
          itemsAdded.appendChild(document.createTextNode('$2.95 - Biscotti'));
          itemsAdded.value = 'biscotti';
          orderSection.appendChild(itemsAdded);
          break;
        default:
          break;
      }
      totalSection.innerHTML = `$${totalCost.toFixed(2)}`;
    });
  }
}
function hoverChecker() {
  for (image of images) {
    if (image.src !== 'images/logo.png') {
      image.addEventListener('mouseover', function() {
        this.src = this.id;
      });
      image.addEventListener('mouseout', function() {
        this.src = `${this.id.split('_')[0]}.jpg`; // remove everything after _ then add .jpg to the end to get to original image when mouseout
      });
    }
  }
}

function clearOrder() {
  document.getElementById('clear_order').addEventListener('click', function() {
    totalCost = 0.0;
    totalSection.innerHTML = `$${totalCost.toFixed(2)}`;
    document.getElementById('order').options.length = 0;
  });
}

clickChecker();
hoverChecker();
clearOrder();
