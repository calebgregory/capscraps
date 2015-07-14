// our cost function, J, which accepts a hypothetical
// vector theta, which in this case has two values,
// and returns the cost of this hypothesis, or
// 1/(2*m) * [sum of the square errors for each datum].
//
// analogous to J = 1/(2*m) * sum(sqErr) in Octave.
"use strict";

function J(data, theta) {

  var jsArr = [];
  data.forEach(function (el) {
    var datum = [1, el.x, el.y];
    jsArr.push(datum);
  });

  var hypotheses = [];
  jsArr.forEach(function (el) {
    hypotheses.push(theta[0] * el[0] + theta[1] * el[1]);
  });

  var sqErr = [];
  jsArr.forEach(function (el, i) {
    var err = hypotheses[i] - el[2];
    sqErr.push(Math.pow(err, 2));
  });

  var sumSqErr = sqErr.reduce(function (prev, curr) {
    return prev + curr;
  });

  var m = jsArr.length;
  var J = 1 / (2 * m) * sumSqErr;
  return J;
};

// analogous to repeat until convergence: {
//   theta = oldtheta - alpha * delta;
// }, where
// delta = (1/m) * (X' * (X * oldtheta - oldtheta))
function gradientDescent(data, alpha, theta) {

  // takes each datum in our data set, represented as a
  // row in our matrix, adds a value (x_0 = 1) to each row,
  // and pushes the row onto the matrix jsArr, short for
  // javaScriptArray.
  var jsArr = [];
  data.forEach(function (el) {
    var datum = [1, el.x, el.y];
    jsArr.push(datum);
  });

  // hypotheses = X * theta
  var hypotheses = [];
  jsArr.forEach(function (el) {
    hypotheses.push(theta[0] * el[0] + theta[1] * el[1]);
  });

  // difference = hypotheses - y
  var errs = [];
  jsArr.forEach(function (el, i) {
    var err = hypotheses[i] - el[2];
    errs.push(err);
  });

  // X', or the transposition of X
  var xtrans = [[], []];
  jsArr.forEach(function (el) {
    xtrans[0].push(el[0]);
    xtrans[1].push(el[1]);
  });

  // delta = (1/m) * (X' * difference)
  var delta = [];
  xtrans.forEach(function (row) {
    var deltaVal = 0;
    errs.forEach(function (el, i) {
      deltaVal += el * row[i];
    });
    var m = jsArr.length;
    delta.push(deltaVal / m);
  });

  var newtheta = [];
  theta.forEach(function (el, i) {
    newtheta.push(theta[i] - alpha * delta[i]);
  });

  return newtheta;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9qcy9mdW5jdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFNQSxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUMsS0FBSyxFQUFFOztBQUVyQixNQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixNQUFJLENBQUMsT0FBTyxDQUFDLFVBQVMsRUFBRSxFQUFFO0FBQ3hCLFFBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzFCLFNBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7R0FDbkIsQ0FBQyxDQUFDOztBQUVILE1BQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUNwQixPQUFLLENBQUMsT0FBTyxDQUFDLFVBQVMsRUFBRSxFQUFFO0FBQ3pCLGNBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDbEQsQ0FBQyxDQUFDOztBQUVILE1BQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNmLE9BQUssQ0FBQyxPQUFPLENBQUMsVUFBUyxFQUFFLEVBQUMsQ0FBQyxFQUFFO0FBQzNCLFFBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsU0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBQzdCLENBQUMsQ0FBQTs7QUFFRixNQUFJLFFBQVEsR0FBRyxLQUFLLENBQ2pCLE1BQU0sQ0FBQyxVQUFTLElBQUksRUFBQyxJQUFJLEVBQUU7QUFDMUIsV0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDO0dBQ3RCLENBQUMsQ0FBQzs7QUFFSCxNQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ3JCLE1BQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBLEFBQUMsR0FBRyxRQUFRLENBQUM7QUFDL0IsU0FBTyxDQUFDLENBQUM7Q0FDVixDQUFDOzs7Ozs7QUFNRixTQUFTLGVBQWUsQ0FBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBRTs7Ozs7O0FBTXpDLE1BQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNmLE1BQUksQ0FBQyxPQUFPLENBQUMsVUFBUyxFQUFFLEVBQUU7QUFDeEIsUUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsU0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUNuQixDQUFDLENBQUM7OztBQUdILE1BQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUNwQixPQUFLLENBQUMsT0FBTyxDQUFDLFVBQVMsRUFBRSxFQUFFO0FBQ3pCLGNBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDbEQsQ0FBQyxDQUFDOzs7QUFHSCxNQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZCxPQUFLLENBQUMsT0FBTyxDQUFDLFVBQVMsRUFBRSxFQUFDLENBQUMsRUFBRTtBQUMzQixRQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLFFBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDaEIsQ0FBQyxDQUFDOzs7QUFHSCxNQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztBQUNyQixPQUFLLENBQUMsT0FBTyxDQUFDLFVBQVMsRUFBRSxFQUFFO0FBQ3pCLFVBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEIsVUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUN2QixDQUFDLENBQUM7OztBQUdILE1BQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNmLFFBQU0sQ0FBQyxPQUFPLENBQUMsVUFBUyxHQUFHLEVBQUU7QUFDM0IsUUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLFFBQUksQ0FBQyxPQUFPLENBQUMsVUFBUyxFQUFFLEVBQUMsQ0FBQyxFQUFFO0FBQzFCLGNBQVEsSUFBSSxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3ZCLENBQUMsQ0FBQztBQUNILFFBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDckIsU0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7R0FDMUIsQ0FBQyxDQUFDOztBQUVILE1BQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixPQUFLLENBQUMsT0FBTyxDQUFDLFVBQVMsRUFBRSxFQUFDLENBQUMsRUFBRTtBQUMzQixZQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7R0FDMUMsQ0FBQyxDQUFDOztBQUVILFNBQU8sUUFBUSxDQUFDO0NBQ2pCLENBQUMiLCJmaWxlIjoic3JjL2pzL2Z1bmN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG91ciBjb3N0IGZ1bmN0aW9uLCBKLCB3aGljaCBhY2NlcHRzIGEgaHlwb3RoZXRpY2FsXG4vLyB2ZWN0b3IgdGhldGEsIHdoaWNoIGluIHRoaXMgY2FzZSBoYXMgdHdvIHZhbHVlcyxcbi8vIGFuZCByZXR1cm5zIHRoZSBjb3N0IG9mIHRoaXMgaHlwb3RoZXNpcywgb3Jcbi8vIDEvKDIqbSkgKiBbc3VtIG9mIHRoZSBzcXVhcmUgZXJyb3JzIGZvciBlYWNoIGRhdHVtXS5cbi8vXG4vLyBhbmFsb2dvdXMgdG8gSiA9IDEvKDIqbSkgKiBzdW0oc3FFcnIpIGluIE9jdGF2ZS5cbmZ1bmN0aW9uIEooZGF0YSx0aGV0YSkge1xuXG4gIHZhciBqc0FyciA9IFtdO1xuICBkYXRhLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICB2YXIgZGF0dW0gPSBbMSxlbC54LGVsLnldO1xuICAgIGpzQXJyLnB1c2goZGF0dW0pO1xuICB9KTtcblxuICB2YXIgaHlwb3RoZXNlcyA9IFtdO1xuICBqc0Fyci5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgaHlwb3RoZXNlcy5wdXNoKHRoZXRhWzBdKmVsWzBdICsgdGhldGFbMV0qZWxbMV0pO1xuICB9KTtcblxuICB2YXIgc3FFcnIgPSBbXTtcbiAganNBcnIuZm9yRWFjaChmdW5jdGlvbihlbCxpKSB7XG4gICAgdmFyIGVyciA9IGh5cG90aGVzZXNbaV0gLSBlbFsyXTtcbiAgICBzcUVyci5wdXNoKE1hdGgucG93KGVyciwyKSk7XG4gIH0pXG5cbiAgdmFyIHN1bVNxRXJyID0gc3FFcnJcbiAgICAucmVkdWNlKGZ1bmN0aW9uKHByZXYsY3Vycikge1xuICAgICAgcmV0dXJuIHByZXYgKyBjdXJyO1xuICB9KTtcblxuICB2YXIgbSA9IGpzQXJyLmxlbmd0aDtcbiAgdmFyIEogPSAxIC8gKDIgKiBtKSAqIHN1bVNxRXJyO1xuICByZXR1cm4gSjtcbn07XG5cbi8vIGFuYWxvZ291cyB0byByZXBlYXQgdW50aWwgY29udmVyZ2VuY2U6IHtcbi8vICAgdGhldGEgPSBvbGR0aGV0YSAtIGFscGhhICogZGVsdGE7XG4vLyB9LCB3aGVyZVxuLy8gZGVsdGEgPSAoMS9tKSAqIChYJyAqIChYICogb2xkdGhldGEgLSBvbGR0aGV0YSkpXG5mdW5jdGlvbiBncmFkaWVudERlc2NlbnQoZGF0YSxhbHBoYSx0aGV0YSkge1xuXG4gIC8vIHRha2VzIGVhY2ggZGF0dW0gaW4gb3VyIGRhdGEgc2V0LCByZXByZXNlbnRlZCBhcyBhXG4gIC8vIHJvdyBpbiBvdXIgbWF0cml4LCBhZGRzIGEgdmFsdWUgKHhfMCA9IDEpIHRvIGVhY2ggcm93LFxuICAvLyBhbmQgcHVzaGVzIHRoZSByb3cgb250byB0aGUgbWF0cml4IGpzQXJyLCBzaG9ydCBmb3JcbiAgLy8gamF2YVNjcmlwdEFycmF5LlxuICB2YXIganNBcnIgPSBbXTtcbiAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgdmFyIGRhdHVtID0gWzEsZWwueCxlbC55XTtcbiAgICBqc0Fyci5wdXNoKGRhdHVtKTtcbiAgfSk7XG5cbiAgLy8gaHlwb3RoZXNlcyA9IFggKiB0aGV0YVxuICB2YXIgaHlwb3RoZXNlcyA9IFtdO1xuICBqc0Fyci5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgaHlwb3RoZXNlcy5wdXNoKHRoZXRhWzBdKmVsWzBdICsgdGhldGFbMV0qZWxbMV0pO1xuICB9KTtcblxuICAvLyBkaWZmZXJlbmNlID0gaHlwb3RoZXNlcyAtIHlcbiAgdmFyIGVycnMgPSBbXTtcbiAganNBcnIuZm9yRWFjaChmdW5jdGlvbihlbCxpKSB7XG4gICAgdmFyIGVyciA9IGh5cG90aGVzZXNbaV0gLSBlbFsyXTtcbiAgICBlcnJzLnB1c2goZXJyKTtcbiAgfSk7XG5cbiAgLy8gWCcsIG9yIHRoZSB0cmFuc3Bvc2l0aW9uIG9mIFhcbiAgdmFyIHh0cmFucyA9IFtbXSxbXV07XG4gIGpzQXJyLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICB4dHJhbnNbMF0ucHVzaChlbFswXSk7XG4gICAgeHRyYW5zWzFdLnB1c2goZWxbMV0pO1xuICB9KTtcblxuICAvLyBkZWx0YSA9ICgxL20pICogKFgnICogZGlmZmVyZW5jZSlcbiAgdmFyIGRlbHRhID0gW107XG4gIHh0cmFucy5mb3JFYWNoKGZ1bmN0aW9uKHJvdykge1xuICAgIHZhciBkZWx0YVZhbCA9IDA7XG4gICAgZXJycy5mb3JFYWNoKGZ1bmN0aW9uKGVsLGkpIHtcbiAgICAgIGRlbHRhVmFsICs9IGVsKnJvd1tpXTtcbiAgICB9KTtcbiAgICB2YXIgbSA9IGpzQXJyLmxlbmd0aDtcbiAgICBkZWx0YS5wdXNoKGRlbHRhVmFsIC8gbSk7XG4gIH0pO1xuXG4gIHZhciBuZXd0aGV0YSA9IFtdO1xuICB0aGV0YS5mb3JFYWNoKGZ1bmN0aW9uKGVsLGkpIHtcbiAgICBuZXd0aGV0YS5wdXNoKHRoZXRhW2ldIC0gYWxwaGEqZGVsdGFbaV0pO1xuICB9KTtcblxuICByZXR1cm4gbmV3dGhldGE7XG59O1xuIl19