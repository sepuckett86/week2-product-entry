import instrumentApi from './instrument-api.js';
import makeCell from './make-cell.js';

const tableBody = document.getElementById('table-body');

const instruments = instrumentApi.getAll();

for(let i = 0; i < instruments.length; i++) {
    const instrument = instruments[i];
    const tr = document.createElement('tr');

    const nameCell = makeCell.makeNameCell(instrument.name);
    const priceCell = makeCell.makeTextCell(instrument.price);
    const familyCell = makeCell.makeTextCell(instrument.family);
    const conditionCell = makeCell.makeTextCell(instrument.condition);
    const qualityCell = makeCell.makeTextCell(instrument.quality);
    
    tr.appendChild(nameCell);
    tr.appendChild(priceCell);
    tr.appendChild(familyCell);
    tr.appendChild(conditionCell);
    tr.appendChild(qualityCell);

    tableBody.appendChild(tr);
}

