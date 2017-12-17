/*getting defualt color selector using jquery*/
var selectedColor = $('#colorPicker').val();

//preventing reloading of the page of the submit button 
$('#sizePicker').click(function (event) {
    event.preventDefault();
    makeGrid();
})
/*makeGrid() function for drawing the grid based on the user input */
function makeGrid() {
    $('#pixel_canvas').empty();

    /*grid dimensions based on the user input*/
    var tableRow = $('#input_height').val();
    var tableColumns = $('#input_width').val();

    for (var c = 0; c < tableRow; c++) {
        var tableRows = '<tr>';
        var columns = '';
        for (var r = 0; r < tableColumns; r++) {
            columns += '<td></td>';
        }
        tableRows += columns;
        tableRows += '</tr>';
        $('#pixel_canvas').append(tableRows);
    }
    /*calling color gro*/
    colorCell();
}
/*function for drawing the grid */
$('#makeGrid').click(function (e) {
    makeGrid();
})
function colorCell() {
    /*Add click events to each <td> element in the #pixel_canvas table. On click, color the cell with the value of selectedColor.*/
    $("#pixel_canvas  td").on("click", function () {
        $(this).css("background", selectedColor);
    });
}
/*checking the change of color from the pallet*/
$('#colorPicker').change(function () {
    selectedColor = $(this).val()
})