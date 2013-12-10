Simmetrix = {};
Simmetrix.LongestSubstring = {

  similarity : function(str_, toCompare_) {
	  if (str_==null || toCompare_==null)
	    return 0;
	 
	  var compareTable = new Array(str_.length)
	  
	  for (var i = 0; i<str_.length; i++) {
	  	compareTable[i] = new Array(toCompare_);
	  }
	  
	  var maxLen = 0;
	  var maxLenPos = 0;
	 
	  for (var m = 0; m < str_.length; m++) 
	  {
	    for (var n = 0; n < toCompare_.length; n++) 
	    {
	      compareTable[m][n] = (str_.charAt(m) != toCompare_.charAt(n)) ? 0
	          : (((m == 0) || (n == 0)) ? 1
	              : compareTable[m - 1][n - 1] + 1);
	      if (compareTable[m][n] > maxLen) {
	      	maxLen = compareTable[m][n];
	      	maxLenPos = m-maxLen;
	      }
	    }
	  }
	  return maxLen;
	}
};
