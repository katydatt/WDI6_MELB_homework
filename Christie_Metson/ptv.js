console.log('PTV');

// Write a JS program that works out display the journey when you give it an origin and destination.

var trainLines2 = [
  ['flinders street', 'richmond', 'east richmond', 'burnley', 'hawthorn', 'glenferrie'],
  ['flagstaff', 'melbourne central', 'parliament', 'richmond', 'kooyong', 'tooronga'],
  ['southern cross', 'richmond', 'south yarra', 'prahran', 'windsor'],
]

// finds the co-ordinates of a stop.
var stationFinderArray = function(origin, destination) {

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
  console.log(start);
  console.log(end);
}

stationFinderArray('flagstaff', 'windsor');

// figure out value of richmond of each line.
// splice the array on each line to know as an index where to travel to get to the correct station.


// var printStopNames = function(origin, destination) {
//
//   // hardcoding in alamein line for now.
//   for (var index = 0; index < trainLines.alamein.length; index ++) {
//     var originIndex = trainLines.alamein.indexOf(origin);
//     var destinationIndex = trainLines.alamein.indexOf(destination);
//   }
//
//   var printStopNames = []
//
//   for (var c = originIndex; c <= destinationIndex; c ++) {
//       printStopNames.push(trainLines.alamein[c]);
//   }
//   console.log('Here are your stops: ' + printStopNames);
// }
