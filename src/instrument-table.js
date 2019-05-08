import instrumentApi from './instrument-api.js';
import makeCell from './make-cell.js';

const tableBody = document.getElementById('table-body');

const instruments = instrumentApi.getAll();
if(instruments.length !== 0) {
    for(let i = 0; i < instruments.length; i++) {

        const instrument = instruments[i];
        const tr = document.createElement('tr');
    
        const nameCell = makeCell.makeNameCell(instrument.name);
        const priceCell = makeCell.makeTextCell(instrument.price);
        priceCell.textContent = '$ ' + priceCell.textContent;
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
} else {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = 'You have no instruments stored.';
    td.colSpan = '5';
    td.className = 'border-around';
    tr.appendChild(td);
    tableBody.appendChild(tr);
}


