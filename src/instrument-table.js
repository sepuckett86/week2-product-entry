import instrumentApi from './instrument-api.js';

const tableBody = document.getElementById('table-body');

const instruments = instrumentApi.getAll();

for(let i = 0; i < instruments.length; i++) {
    const instrument = instruments[i];
    const tr = document.createElement('tr');

    const nameCell = makeNameCell(instrument);
    tr.appendChild(nameCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = instrument.price;
    tr.appendChild(priceCell);

    const familyCell = document.createElement('td');
    familyCell.textContent = instrument.family;
    tr.appendChild(familyCell);

    const conditionCell = document.createElement('td');
    conditionCell.textContent = instrument.condition;
    tr.appendChild(conditionCell);

    const qualityCell = document.createElement('td');
    qualityCell.textContent = instrument.quality;
    tr.appendChild(qualityCell);

    tableBody.appendChild(tr);
}

function makeNameCell(instrument) {
    const nameCell = document.createElement('td');
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();
    searchParams.set('name', instrument.name);
    link.href = './product-detail.html?' + searchParams;
    link.textContent = instrument.name;
    nameCell.appendChild(link);
    return nameCell;
}