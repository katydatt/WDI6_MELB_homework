console.log('--PTV Journey Planner--');

var trainLines = [
  ['flinders street', 'richmond', 'east richmond', 'burnley', 'hawthorn', 'glenferrie'], //alamein
  ['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong', 'tooronga'], // glen
  ['southern cross', 'richmond', 'south yarra', 'prahran', 'windsor'], // sandy
]

var stationFinder = function(origin, destination) {

  // finds the origin line indices.
  var start1;
  var start2;
    for (var i = 0; i < trainLines.length; i ++) {
      for (var j = 0; j < trainLines[i].length; j ++) {
          if (trainLines [i][j] === origin) {
            start1 = [i];
            start2 = [j];
      }
    }
  }
  // finds the destination line indices.
  var end1;
  var end2;
    for (c = 0; c < trainLines.length; c ++) {
      for (var a = 0; a < trainLines[c].length; a ++) {
           if (trainLines [c][a] === destination) {
            end1 = [c];
            end2 = [a];
       }
     }
  }

  if (start1 == 0) {
    console.log('this statement works 0');
    var startingAlamein = trainLines.slice([start1, start2]);
  }
  else if (start1 == 1) {
    console.log('this statement works 1');
    var startingGlen = trainLines.slice([0,1][0,5]); //pushes whole bloody nested array in!
  }
  else if (start1 == 2) {
    console.log('this statement works 2');
    var startingSandy = trainLines.slice([start1, start2]);
  }

  //debugger
  console.log(start1);
  console.log(start2);
  console.log(end1);
  console.log(end2);
  console.log(startingAlamein);
  console.log(startingGlen);
  console.log(startingSandy);

}

stationFinder('melbourne central', 'melbourne central');


// finds the index of each richmond stop
var richmondChangePoint = function() {

var alameinChange;
  for (var i = 0; i < trainLines.length; i ++) {
    for (var r = 0; r < trainLines[0].length; r ++) {
      if (trainLines [0][r] === 'richmond') {
        var alameinChange = [0, r];
      };
    }
  }

  var glenChange;
  for (var a = 0; a < trainLines.length; a ++) {
    for (var c = 0; c < trainLines[1].length; c ++) {
      if (trainLines [1][c] === 'richmond') {
        var glenChange = [1, c];
      };
    }
  }

  var sandyChange;
  for (var s = 0; s < trainLines.length; s ++) {
    for (var d = 0; d < trainLines[2].length; d ++) {
      if (trainLines [2][d] === 'richmond') {
        var sandyChange = [2, d];
      };
    }
  }

  // debugger
  console.log('The index of Richmond on the Alamein line is: ' + alameinChange);
  console.log('The index of Richmond on the Glen Waverly line is: ' + glenChange);
  console.log('The index of Richmond on the Sandringham line is: ' + sandyChange);
}

var journeyPrinter = function() {
// slice first part of journey to Richmond (add to new array)
// for a flagstaff to windsor journey, array1 should return flagstaff to richmond
var alameinTest = ['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong', 'tooronga'];
var sandyTest = ['southern cross', 'richmond', 'south yarra', 'prahran', 'windsor'];
var array1 = alameinTest.slice(0, 3);
var array2 = sandyTest.slice(2, 4);

// then concatenate the two arrays, get the length, then print out.
var fullJourney = array1.concat(array2);
console.log('your stops are: ' + fullJourney);
console.log('you have: ' + fullJourney.length + ' stops in your journey');

}

// richmondChangePoint();
// journeyPrinter();
// console.log(trainLines);
