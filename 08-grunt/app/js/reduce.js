(function(myApp){
	myApp.reduce = function(arr, iteratee) {
	  var index = 0,
	    length = arr.length,
	    memo = arr[index];

	  index += 1;
	  for(; index < length; index += 1){
	    memo = iteratee(memo, arr[index]);
	  }
	  return memo;
	};
})(document.myApp || (document.myApp = {}));