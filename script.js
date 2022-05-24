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
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    if (randomColorStatus) {
        this.style.background = rndCol;
        hiLiteText.style.color = rndCol;

    } else {
        this.style.background = `${baseColor.value}`;
    }
}

function mouseUpOnPixelDiv() {
    clickStatus = false;
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    if (randomColorStatus) {
        this.style.background = rndCol;
    } else {
        this.style.background = `${baseColor.value}`;
    }
}

function mouseOverPixelDiv() {
    if (clickStatus) {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        if (randomColorStatus) {
            this.style.background = rndCol;
            hiLiteText.style.color = rndCol;
        } else {
            this.style.background = `${baseColor.value}`;
        }
    } else return;
}

function mouseEnterCanvasHandler() {
    let divsWithinCanvas = document.querySelectorAll('div.added-to-row');
    divsWithinCanvas.forEach((pixelDiv) => {
        pixelDiv.addEventListener('mousedown', mouseDownOnPixelDiv);
        pixelDiv.addEventListener('mouseup', mouseUpOnPixelDiv);
        pixelDiv.addEventListener('mouseover', mouseOverPixelDiv);
    });
}

function mouseLeaveCanvasHandler() {
    clickStatus = false;
    divsWithinCanvas.forEach((pixelDiv) => {
        pixelDiv.removeEventListener('mousedown', mouseDownOnPixelDiv);
        pixelDiv.removeEventListener('mouseup', mouseUpOnPixelDiv);
        pixelDiv.removeEventListener('mouseover', mouseOverPixelDiv);
    });
}

function sizeNumberChangeHandler() {
    createDivsGrid(sizeInput.value);
    sizeLabel.textContent = `Size (squares per side): ${sizeInput.value} x ${sizeInput.value}`;
}

function baseColorChangeHandler() {
    hiLiteText.style.color = `${baseColor.value}`;
}

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function toggleRandomColor() {
    if (randomColorStatus === true) {
        randomColorStatus = false;
        randomColorPara.textContent = `Random Color is OFF`;

    } else {
        randomColorStatus = true;
        randomColorPara.textContent = `Random Color is ON`;
    }


}


const canvasContainerDiv = document.getElementById('canvas-container');
const webAppContainer = document.getElementById('web-app-container');
const lastCreatedDiv = document.createElement('div');
const sizeInput = document.getElementById('size');
const baseColor = document.querySelector('input#base');
const divsWithinCanvas = document.querySelectorAll('div.added-to-row');
const sizeLabel = document.getElementById('size-label');
const hiLiteText = document.querySelector('span.hl');
const randomColorButton = document.getElementById('random-color-btn');
const randomColorPara = document.getElementById('random-color-status');

let divPixelHeight = '21.875px';
let divPixelWidth = divPixelHeight;
let clickStatus = false;
let randomColorStatus = false;

canvasContainerDiv.addEventListener('mouseenter', mouseEnterCanvasHandler);
canvasContainerDiv.addEventListener('mouseleave', mouseLeaveCanvasHandler);
sizeInput.addEventListener('change', sizeNumberChangeHandler);
baseColor.addEventListener('input', baseColorChangeHandler);
randomColorButton.addEventListener('click', toggleRandomColor);
createDivsGrid(sizeInput.value);