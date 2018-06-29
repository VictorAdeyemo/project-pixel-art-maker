//Created by Hellobuyer on 29-06-2018, ALCwithGoogle3.0 fe-group-38
// Select color input
// Select size input
var height, width, gridColor;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (e) {
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    e.preventDefault();
    makeGrid(height, width);

});


function makeGrid(x, y) {
    // Your code goes here!
    $('tr').remove();

      for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>');
        }
    }
    
    //the code below is an event listener that changes the background color of each cell with the selected color through a click action
    $('td').click(function modifyGridColor() {
        gridColor = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color:' + gridColor);
        }
    });
}
