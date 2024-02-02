 export default function tableMaking() {
  // Sample data for the table
var data = [
  { Name: 'John', Age: 25, City: 'New York' },
  { Name: 'Jane', Age: 30, City: 'Los Angeles' },
  { Name: 'Bob', Age: 22, City: 'Chicago' }
];

// Create the table and apply styling
function createTable(data) {
  var table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';

  var thead = table.createTHead();
  var tbody = table.createTBody();

  // Create header row and apply styling
  var headerRow = thead.insertRow();
  Object.keys(data[0]).forEach(function(key) {
    var th = document.createElement('th');
    th.textContent = key;
    th.style.border = '1px solid #000000';
    th.style.textAlign = 'left';
    th.style.padding = '8px';
    th.style.backgroundColor = '#f2f2f2';
    headerRow.appendChild(th);
  });

  // Create data rows and apply styling
  data.forEach(function(rowData) {
    var row = tbody.insertRow();
    Object.values(rowData).forEach(function(value) {
      var cell = row.insertCell();
      cell.textContent = value;
      cell.style.border = '1px solid #000000';
      cell.style.textAlign = 'left';
      cell.style.padding = '8px';
    });
  });

  return table;
}

// Get the div container
var tableContainer = document.getElementById('table-container');

// Create the table and append it to the div
var table = createTable(data);
tableContainer.appendChild(table);

}
