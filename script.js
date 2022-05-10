const canvasContainerDiv = document.getElementById('canvas-container');
const webAppContainer = document.getElementById('web-app-container');
const lastCreatedDiv = document.createElement('div');
const textInput = document.getElementById('measurement-input');
const submitBtn = document.querySelector('button');

function createDivsRow(measurement) {
    for (let index = 0; index < +measurement; index++) {
        let divToBeAdded = document.createElement('div');
        divToBeAdded.classList.add('added-to-row');
        canvasContainerDiv.appendChild(divToBeAdded);
    }
}

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