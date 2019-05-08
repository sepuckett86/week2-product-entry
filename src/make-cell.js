function makeNameCell(name) {
    const nameCell = document.createElement('td');
    const link = document.createElement('a');
    const searchParams = new URLSearchParams();
    searchParams.set('name', name);
    link.href = './product-detail.html?' + searchParams;
    link.textContent = name;
    nameCell.appendChild(link);
    return nameCell;
}

function makeTextCell(text) {
    const textCell = document.createElement('td');
    textCell.textContent = text;
    return textCell;
}

const makeCells = {
    makeNameCell: makeNameCell,
    makeTextCell: makeTextCell
};

export default makeCells;