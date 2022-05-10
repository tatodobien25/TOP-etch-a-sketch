'use strict'

const canvasContainerDiv = document.getElementById('canvas-container');
const webAppContainer = document.getElementById('web-app-container');
const lastCreatedDiv = document.createElement('div');

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

createDivsGrid(16);
const divsWithinCanvas = Array.from(document.querySelectorAll('div.added-to-row'));
divsWithinCanvas.forEach((pixelDiv) => {
    pixelDiv.addEventListener('mouseover', function (e) {
        // console.log(e);
        if (e.buttons == 1) {
            pixelDiv.classList.add('black');
            console.log(e.fromElement.classList);
        }

    });

});
