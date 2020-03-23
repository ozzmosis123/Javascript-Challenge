// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");


tableData.forEach(function(sightings) {
    // console.log(sightings);
    var row = tbody.append("tr");

    Object.entries(sightings).forEach(function([key, value]) {
        // console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);

    var row = d3.select("tbody");
    row.html("");

    filteredData.forEach((filtered) => {
        // console.log(filtered);
        var row = tbody.append("tr");
        
        Object.entries(filtered).forEach(([key, value]) => {
            // console.log(value)
            row.append("td").text(value);
        });    
    });
});
