// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through each object in the array to create correct number of table rows
tableData.forEach(function(sightings) {
    // console.log(sightings);
    var row = tbody.append("tr");

    // Loop through the key and values of each object to append the empty table data cells
    Object.entries(sightings).forEach(function([key, value]) {
        // console.log(key, value);

        // add the empty table data cells followed by the actual text for each cell
        var cell = row.append("td");
        cell.text(value);
    });
});

// assign the button id to a variable
var button = d3.select("#filter-btn");

// function that will record the click from the button on the input form
button.on("click", function() {
    var inputElement = d3.select("#datetime");

    // selects what it typed in the form 
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    //filters the date or city
    if (inputValue != "") {
        var filteredData = tableData.filter(date => date.datetime === inputValue);
        console.log(filteredData);
    }
    else {
        var inputElement = d3.select("#city");
        var inputValue = inputElement.property("value");
        var filteredData = tableData.filter(city => city.city === inputValue);
        console.log(filteredData);
    }
    
    //clears the form before adding the new filtered data
    var row = d3.select("tbody");
    row.html("");

    //loops the objects of the filtered data and appends the empty table rows
    filteredData.forEach((filtered) => {
        // console.log(filtered);
        var row = tbody.append("tr");
        
        // loops key and values of filtered data and appends table data cells along with the text
        Object.entries(filtered).forEach(([key, value]) => {
            // console.log(value)
            row.append("td").text(value);
        });    
    });
});
