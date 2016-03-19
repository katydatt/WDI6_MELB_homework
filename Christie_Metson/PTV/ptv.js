console.log('--PTV Journey Planner--');

// Write a JS program that works out display the journey when you give it an origin and destination.

var trainLines2 = [
  ['flinders street', 'richmond', 'east richmond', 'burnley', 'hawthorn', 'glenferrie'],
  ['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong', 'tooronga'],
  ['southern cross', 'richmond', 'south yarra', 'prahran', 'windsor'],
]

// finds the co-ordinates of a stop.
var stationFinder = function(origin, destination) {

  // finds the origin co-ordinates.
  var start;
    for (var i = 0; i < trainLines2.length; i ++) {
      for (var j = 0; j < trainLines2[i].length; j ++) {
          if (trainLines2 [i][j] === origin) {
            start = [i, j];
      }
    }
  }
  // finds the destination co-ordinates
  var end;
    for (c = 0; c < trainLines2.length; c ++) {
      for (var a = 0; a < trainLines2[c].length; a ++) {
           if (trainLines2 [c][a] === destination) {
            end = [c, a];
       }
     }
  }
  //debugger
  console.log('The origin stop index is: ' + start);
  console.log('The destination stop index is: ' + end);
}

// finds the index of each richmond stop
var richmondChangePoint = function() {

var alameinChange;
  for (var i = 0; i < trainLines2.length; i ++) {
    for (var r = 0; r < trainLines2[0].length; r ++) {
      if (trainLines2 [0][r] === 'richmond') {
        var alameinChange = [0, r];
      };
    }
  }

  var glenChange;
  for (var a = 0; a < trainLines2.length; a ++) {
    for (var c = 0; c < trainLines2[1].length; c ++) {
      if (trainLines2 [1][c] === 'richmond') {
        var glenChange = [1, c];
      };
    }
  }

  var sandyChange;
  for (var s = 0; s < trainLines2.length; s ++) {
    for (var d = 0; d < trainLines2[2].length; d ++) {
      if (trainLines2 [2][d] === 'richmond') {
        var sandyChange = [2, d];
      };
    }
  }

  // debugger
  console.log('The index of Richmond on the Alamein line is: ' + alameinChange);
  console.log('The index of Richmond on the Glen Waverly line is: ' + glenChange);
  console.log('The index of Richmond on the Sandringham line is: ' + sandyChange);
}

// splice arrays of each line so that they can be re-joined to make a user's full journey
var arraySplicer = function() {



}

// prints out a user's journey to the console
var printStopNames = function() {

  // print stop names by pushing them in to a new array to print out.
  // could be joined to the array splitter function?
}

stationFinder('flagstaff', 'windsor');
richmondChangePoint();
