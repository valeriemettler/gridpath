//Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
//How many such routes are there through a 20×20 grid?
debugger;
var grid_path = function(dimen) {
    // var g = '<div class="box"></div>';
    // $('#x').html(g);
    //r = right
    //d = down
    var possible_outputs_array = [];
    possible_outputs_array = "rd".repeat(dimen).split('');
    console.log(possible_outputs_array);


};

var test = function(){
  var dimension = [
    2,

  ];
  grid_path(dimension);
}
test();
