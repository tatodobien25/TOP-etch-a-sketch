'use strict'

const canvasContainerDiv = document.getElementById('canvas-container');
const webAppContainer = document.getElementById('web-app-container');
const lastCreatedDiv = document.createElement('div');
let clickStatus = false;

function createDivsGrid(measurement) {
    for (let index = 0; index < +measurement; index++) {
        let rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');
        canvasContainerDiv.appendChild(rowContainer);
        for (let index = 0; index < measurement; index++) {
            let divToBeAdded = document.createElement('div');
            divToBeAdded.classList.add('added-to-row');
            rowContainer.appendChild(divToBeAdded);

        }
    }
}

function mouseDownOnPixelDiv() {
    console.log(this);

    clickStatus = true;
    console.log(clickStatus);
    this.style.background = 'darkblue';
}

function mouseUpOnPixelDiv() {
    clickStatus = false;
    console.log(clickStatus);
    this.style.background = 'darkblue';

}

function mouseOverPixelDiv() {
    if (clickStatus) {
        this.style.background = 'darkblue';
    } else return;
}

function mouseEnterCanvasHandler() {
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
createDivsGrid(16);
const divsWithinCanvas = Array.from(document.querySelectorAll('div.added-to-row'));



