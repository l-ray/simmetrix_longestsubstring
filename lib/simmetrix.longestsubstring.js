(function (global, module) {

    if ('undefined' == typeof module) {
        var module = { exports: {} }
            ,exports = module.exports
    }

    /**
     * Exports.
     */
    module.exports = smLongestSubstring();

    function smLongestSubstring() {
        return {

            version : '0.0.1',

            similarity : function(a, b) {
                if (a == undefined || b == undefined) {
                      return 0;
                }
                var c = this._notNormalisedSimilarity(a, b);
                return (c / Math.max(a.length, b.length));
            },

            _notNormalisedSimilarity : function(str_, toCompare_) {
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
            };

            if ('undefined' != typeof window) {
                window.smLevenshtein = module.exports;
            }

        })(
            this
            , 'undefined' != typeof module ? module : {}
            , 'undefined' != typeof exports ? exports : {}
        );
