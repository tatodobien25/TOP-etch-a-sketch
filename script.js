'use strict'

function createDivsGrid(measurement) {
    removeAllChildNodes(canvasContainerDiv);
    for (let index = 0; index < +measurement; index++) {
        let rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');
        rowContainer.style.height = `${(350 / sizeInput.value)}px`;
        canvasContainerDiv.appendChild(rowContainer);
        for (let index = 0; index < measurement; index++) {
            let divToBeAdded = document.createElement('div');
            divToBeAdded.classList.add('added-to-row');
            divToBeAdded.style.height = `${(350 / sizeInput.value)}px`;
            divToBeAdded.style.width = `${(350 / sizeInput.value)}px`;
            rowContainer.appendChild(divToBeAdded);
        }
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function mouseDownOnPixelDiv() {
    clickStatus = true;
    this.style.background = 'darkblue';
}

function mouseUpOnPixelDiv() {
    clickStatus = false;
    this.style.background = 'darkblue';
}

function mouseOverPixelDiv() {
    if (clickStatus) {
        this.style.background = 'darkblue';
    } else return;
}

function mouseEnterCanvasHandler() {
    let divsWithinCanvas = document.querySelectorAll('div.added-to-row');
    divsWithinCanvas.forEach((pixelDiv) => {
        pixelDiv.addEventListener('mousedown', mouseDownOnPixelDiv);

    });
    divsWithinCanvas.forEach((pixelDiv) => {
        pixelDiv.addEventListener('mouseup', mouseUpOnPixelDiv);
    });

    divsWithinCanvas.forEach((pixelDiv) => {
        pixelDiv.addEventListener('mouseover', mouseOverPixelDiv);
    });
}

function mouseLeaveCanvasHandler() {
    clickStatus = false;
    divsWithinCanvas.forEach((pixelDiv) => {
        pixelDiv.removeEventListener('mousedown', mouseDownOnPixelDiv);

    });
    divsWithinCanvas.forEach((pixelDiv) => {
        pixelDiv.removeEventListener('mouseup', mouseUpOnPixelDiv);
    });

    divsWithinCanvas.forEach((pixelDiv) => {
        pixelDiv.removeEventListener('mouseover', mouseOverPixelDiv);
    });
}

function sizeNumberChangeHandler() {

    createDivsGrid(sizeInput.value);
}

const canvasContainerDiv = document.getElementById('canvas-container');
const webAppContainer = document.getElementById('web-app-container');
const lastCreatedDiv = document.createElement('div');
let divPixelHeight = '21.875px'
let divPixelWidth = divPixelHeight;
let clickStatus = false;
const sizeInput = document.getElementById('size');
const divsWithinCanvas = document.querySelectorAll('div.added-to-row');

createDivsGrid(sizeInput.value);
