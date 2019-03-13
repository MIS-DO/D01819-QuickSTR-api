'use strict'
const quickSort = require('quick-srt');
module.exports.newProblem = function newProblem(req, res, next) {
  //console.log(JSON.stringify(req));
  var problemRequest = req.problem.value;
  
  //time
  var beginHR = process.hrtime()
  var begin = beginHR[0] * 1000000 + beginHR[1] / 1000;

  var solutionSortedArray = qsProblem(problemRequest.problem.unsortedArray);
   
  var endHR = process.hrtime()
  var end = endHR[0] * 1000000 + endHR[1] / 1000;

  var solutionSolvingTime = (end - begin) / 1000;

  problemRequest.solution = {
    sortedArray: solutionSortedArray,
    stats: {
      solvingTime: solutionSolvingTime
    }
  };

  res.send(problemRequest);
};

function qsProblem(sortedArray) {
      return (quickSort(sortedArray));
}

