
//Find button
let addRow = document.getElementById('addRow')
let index = 1;

//Click event for button
addRow.addEventListener('click', () => {

    //get text from textboxes
    let make = document.getElementById('make').value;
    let model = document.getElementById('model').value;

    //find table
    let table = document.getElementById('table');

    //add row to end position
    var row = table.insertRow(-1);

    //Add 2 columns to row
    var cellIndex = row.insertCell(0);
    var cellMake = row.insertCell(1);
    var cellModel = row.insertCell(2);

    // set Make and Model name to column cells
    cellIndex.innerHTML = index++;
    cellMake.innerHTML = make;
    cellModel.innerHTML = model;

});