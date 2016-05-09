
var train = {

  Alamein: ['Flinders Street','Richmond','East Richmond','Burnley','Hawthorn','Glenferrie'],

  GlenWaverly: ['Flagstaff','Melbourne Central','Parliament','Richmond','Kooyong','Tooranga'],

  Sandringham: ['Southern Cross','Richmond','South Yarra','Prahran','Windsor']

  };

var richmond = "Richmond";
var directionArrows = " ----> "
var stopsTo = 0;
var stopsBack = 0;
var trainTo;
var trainBack;

      var sameTrain = function () {
        var origin = document.getElementById('firstStop').value;
        var destination = document.getElementById('finalStop').value;
        for (var i = 0; i < train.Alamein.length; i ++) {

            if (origin === train.Alamein[i]) {
              var getIndex = train.Alamein.indexOf(origin);
              var destinationIndex = train.Alamein.indexOf(destination);
                  if (getIndex > destinationIndex) {
                    var reverse = train.Alamein.reverse();
                    var getIndex = reverse.indexOf(origin);
                    var destinationIndex = reverse.indexOf(destination);
                    var final = reverse.slice(getIndex, destinationIndex + 1);
                    var stops = destinationIndex - getIndex;
                    var display =final.join(directionArrows);
                    document.getElementById("journey").innerHTML = display;
                    document.getElementById('stops').innerHTML = stops + ' stop(s)';
                    document.getElementById('nameHere').innerHTML =  'Start at ' + origin + ' on the Alamein Line and continue until ' + destination;
                    return final;

                  } else {
                    var final = train.Alamein.slice(getIndex, destinationIndex + 1);
                    var stops = destinationIndex - getIndex;
                    var display =final.join(directionArrows);
                    document.getElementById("journey").innerHTML = display;
                    document.getElementById('stops').innerHTML = stops + ' stop(s)';
                    document.getElementById('nameHere').innerHTML = 'Start at ' + origin + ' on the Alamein Line and continue until ' + destination;
                    return final;
                    }
                  } else if (origin === train.GlenWaverly[i]) {
                    var getIndex = train.GlenWaverly.indexOf(origin);
                    var destinationIndex = train.GlenWaverly.indexOf(destination);
                      if (getIndex > destinationIndex) {
                        var reverse = train.GlenWaverly.reverse();
                        var getIndex = reverse.indexOf(origin);
                        var destinationIndex = reverse.indexOf(destination);
                        var final = reverse.slice(getIndex, destinationIndex + 1);
                        var stops = destinationIndex - getIndex;
                        var display =final.join(directionArrows);
                        document.getElementById("journey").innerHTML = display;
                        document.getElementById('stops').innerHTML = stops + ' stop(s)';
                        document.getElementById('nameHere').innerHTML = 'Start at ' + origin + ' on the Glen Waverly Line and continue until ' + destination;
                        return final;

                    } else {
                      var final = train.GlenWaverly.slice(getIndex, destinationIndex + 1);
                      var stops = destinationIndex - getIndex;
                      var display =final.join(directionArrows);
                      document.getElementById("journey").innerHTML = display;
                      document.getElementById('stops').innerHTML = stops + ' stop(s)';
                      document.getElementById('nameHere').innerHTML = 'Start at ' + origin + ' on the Glen Waverly Line and continue until ' + destination;
                      return final;
                    }
                  } else if (origin === train.Sandringham[i]) {
                    var getIndex = train.Sandringham.indexOf(origin);
                    var destinationIndex = train.Sandringham.indexOf(destination);
                      if (getIndex > destinationIndex) {
                        var reverse = train.Sandringham.reverse();
                        var getIndex = reverse.indexOf(origin);
                        var destinationIndex = reverse.indexOf(destination);
                        var final = reverse.slice(getIndex, destinationIndex + 1);
                        var stops = destinationIndex - getIndex;
                        var display =final.join(directionArrows);
                        document.getElementById("journey").innerHTML = display;
                        document.getElementById('stops').innerHTML = stops + ' stop(s)';
                        document.getElementById('nameHere').innerHTML = 'Start at ' + origin + ' on the Sandringham Line and continue until ' + destination;
                        return final;
                      } else {
                        var final = train.Sandringham.slice(getIndex, destinationIndex + 1);
                        var stops = destinationIndex - getIndex;
                        var display =final.join(directionArrows);
                        document.getElementById("journey").innerHTML = display;
                        document.getElementById('stops').innerHTML = stops + ' stop(s)';
                        document.getElementById('nameHere').innerHTML = 'Start at ' + origin + ' on the Sandringham Line and continue until ' + destination;
                        return final;
                      }
                    }
                  }
                }


        var runJourney = function () {
          var origin = document.getElementById('firstStop').value;
          var destination = document.getElementById('finalStop').value;
          var toRichmond = function () {
            for (var i = 0; i < train.Alamein.length; i ++) {

              if (origin === train.Alamein[i]) {
                var getIndex = train.Alamein.indexOf(origin);
                var richmondIndex = train.Alamein.indexOf(richmond);

                  if(getIndex > richmondIndex) {
                    var reverse = train.Alamein.reverse();
                    var getIndex = reverse.indexOf(origin);
                    var richmondIndex = reverse.indexOf(richmond);
                    var final = reverse.slice(getIndex, richmondIndex + 1);
                    stopsTo = richmondIndex - getIndex;
                    trainTo = "Alamein";
                    var display =final.join(directionArrows);             document.getElementById("journey").innerHTML = display;
                    return {final,stopsTo};
                  } else if (getIndex < richmondIndex) {
                    var richmondIndex = train.Alamein.indexOf(richmond);
                    var final = train.Alamein.slice(getIndex, richmondIndex + 1);
                    stopsTo = richmondIndex - getIndex;
                    trainTo = "Alamein";
                    var display =final.join(directionArrows);
                    document.getElementById("journey").innerHTML = display;
                    return {final,stopsTo};
                  }
              } else if (origin === train.GlenWaverly[i]) {
                var getIndex = train.GlenWaverly.indexOf(origin);
                var richmondIndex = train.GlenWaverly.indexOf(richmond);

                  if(getIndex > richmondIndex) {
                    var reverse = train.GlenWaverly.reverse();
                    var getIndex = reverse.indexOf(origin);
                    var richmondIndex = reverse.indexOf(richmond);
                    var final = reverse.slice(getIndex, richmondIndex + 1);
                    stopsTo = richmondIndex - getIndex;
                    trainTo = "Glen Waverly";
                    var display =final.join(directionArrows);
                    document.getElementById("journey").innerHTML = display;
                    return {final,stopsTo};
                  } else if (getIndex < richmondIndex) {
                    var richmondIndex = train.GlenWaverly.indexOf(richmond);
                    var final = train.GlenWaverly.slice(getIndex, richmondIndex + 1);
                    stopsTo = richmondIndex - getIndex;
                    trainTo = "Glen Waverly";
                    var display =final.join(directionArrows);
                    document.getElementById("journey").innerHTML = display;
                    return {final,stopsTo};
                  }
              } else if (origin === train.Sandringham[i]) {
                var getIndex = train.Sandringham.indexOf(origin);
                var richmondIndex = train.Sandringham.indexOf(richmond);

                  if(getIndex > richmondIndex) {
                    var reverse = train.Sandringham.reverse();
                    var getIndex = reverse.indexOf(origin);
                    var richmondIndex = reverse.indexOf(richmond);
                    var final = reverse.slice(getIndex, richmondIndex + 1);
                    stopsTo = richmondIndex - getIndex;
                    trainTo = "Sandringham";
                    var display =final.join(directionArrows);
                    document.getElementById("journey").innerHTML = display;
                    return {final,stopsTo};
                  } else if (getIndex < richmondIndex) {
                    var richmondIndex = train.Sandringham.indexOf(richmond);
                    var final = train.Sandringham.slice(getIndex, richmondIndex + 1);
                    stopsTo = richmondIndex - getIndex;
                    trainTo = "Sandringham";
                    var display =final.join(directionArrows);
                    document.getElementById("journey").innerHTML = display;
                    return {final,stopsTo};
                }
            }
          }
        }

      var richmondToFinal = function () {
        for (var i = 0; i < train.Alamein.length; i ++) {
          // console.log(train.Alamein[i]);

          if (destination === train.Alamein[i]) {
            var getIndex = train.Alamein.indexOf(destination);
            var richmondIndex = train.Alamein.indexOf(richmond);

              if(getIndex > richmondIndex) {
                var reverse = train.Alamein.reverse();
                var getIndex = reverse.indexOf(destination);
                var richmondIndex = reverse.indexOf(richmond);
                var final = reverse.slice(getIndex, richmondIndex);
                stopsBack = richmondIndex - getIndex;
                trainBack = "Alamein";
                var display = final.reverse();
                var finalDisplay = display.join(directionArrows);
                document.getElementById("journeyBack").innerHTML = ' ----> ' + finalDisplay;
                return display;
              } else if (getIndex < richmondIndex) {
                var richmondIndex = train.Alamein.indexOf(richmond);
                var final = train.Alamein.slice(getIndex, richmondIndex);
                stopsBack = richmondIndex - getIndex;
                trainBack = "Alamein";
                var display = final.reverse();
                var finalDisplay = display.join(directionArrows);
                document.getElementById("journeyBack").innerHTML = ' ----> ' + finalDisplay;
                return display;
              }
          } else if (destination === train.GlenWaverly[i]) {
            var getIndex = train.GlenWaverly.indexOf(destination);
            var richmondIndex = train.GlenWaverly.indexOf(richmond);

              if(getIndex > richmondIndex) {
                var reverse = train.GlenWaverly.reverse();
                var getIndex = reverse.indexOf(destination);
                var richmondIndex = reverse.indexOf(richmond);
                var final = reverse.slice(getIndex, richmondIndex);
                var display = final.reverse();
                stopsBack = richmondIndex - getIndex;
                trainBack = "Glen Waverly";
                var finalDisplay = display.join(directionArrows);
                document.getElementById("journeyBack").innerHTML = ' ----> ' + finalDisplay;
                return display;
              } else if (getIndex < richmondIndex) {
                var richmondIndex = train.GlenWaverly.indexOf(richmond);
                var final = train.GlenWaverly.slice(getIndex, richmondIndex);
                var display = final.reverse();
                stopsBack = richmondIndex - getIndex;
                trainBack = "Glen Waverly";
                var finalDisplay = display.join(directionArrows);
                document.getElementById("journeyBack").innerHTML = ' ----> ' + finalDisplay;
                return display;
              }
          } else if (destination === train.Sandringham[i]) {
            var getIndex = train.Sandringham.indexOf(destination);
            var richmondIndex = train.Sandringham.indexOf(richmond);

              if(getIndex > richmondIndex) {
                var reverse = train.Sandringham.reverse();
                var getIndex = reverse.indexOf(destination);
                var richmondIndex = reverse.indexOf(richmond);
                var final = reverse.slice(getIndex, richmondIndex);
                var display = final.reverse();
                stopsBack = richmondIndex - getIndex;
                trainBack = "Sandringham";
                var finalDisplay = display.join(directionArrows);
                document.getElementById("journeyBack").innerHTML = ' ----> ' + finalDisplay;
                return display;
              } else if (getIndex < richmondIndex) {
                var richmondIndex = train.Sandringham.indexOf(richmond);
                var final = train.Sandringham.slice(getIndex, richmondIndex);
                var display = final.reverse();
                stopsBack = richmondIndex - getIndex;
                trainBack = "Sandringham";
                var finalDisplay = display.join(directionArrows);
                document.getElementById("journeyBack").innerHTML = ' ----> ' + finalDisplay;
                return display;
              }
          }
        }
      }
      toRichmond();
      richmondToFinal();
      var totalStop = stopsTo + stopsBack;
      document.getElementById('nameHere').innerHTML = 'Start at ' + origin + ' on the ' + trainTo + ' Line and get off at Richmond station to change on to the ' + trainBack + ' Line to get to ' + destination;
      document.getElementById('stops').innerHTML = totalStop + ' stops ';
    }


    var sameStop = function () {
      var origin = document.getElementById('firstStop').value;
      var destination = document.getElementById('finalStop').value;
      var getIndex = train.Alamein.indexOf(origin);
      var getIndexGlen = train.GlenWaverly.indexOf(origin);
      var getIndexSandy = train.Sandringham.indexOf(origin);

      var destinationIndex = train.Alamein.indexOf(destination);
      var destinationIndexGlen = train.GlenWaverly.indexOf(destination);
      var destinationIndexSandy = train.Sandringham.indexOf(destination);

      if (origin === destination) {
        document.getElementById("nameHere").innerHTML = "You are at the same stop. Please try again";
        document.getElementById('journey').innerHTML = origin;
      } else if ((origin === train.Alamein[getIndex] && destination === train.Alamein[destinationIndex]) || (origin === train.GlenWaverly[getIndexGlen] && destination === train.GlenWaverly[destinationIndexGlen]) || (origin === train.Sandringham[getIndexSandy] && destination === train.Sandringham[destinationIndexSandy])){
        sameTrain();
      } else {
        runJourney();
      }
    }

    var buttonator = document.getElementById('myButton');
    buttonator.addEventListener('click', sameStop);
