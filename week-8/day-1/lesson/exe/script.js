



function insertRow(){
    let outer = document.getElementById('sampleTable').firstElementChild;
    let row = outer.firstElementChild;
    const rowNum = outer.children.length;

    const newRow = row.cloneNode(true);
    newRow.firstElementChild.innerText = `Row ${rowNum+1} cell 1`;
    newRow.lastElementChild.innerText = `Row ${rowNum+1} cell 2`;
    outer.appendChild(newRow);
};
