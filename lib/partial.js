'use strict';

// FUNCTIONS //

var floor = Math.floor,
	pow = Math.pow;


// PARTIAL //

/**
* FUNCTION: partial( p )
*	Partially applies success probability `p` and returns a function for evaluating the cumulative distribution function (CDF) for a Geometric distribution.
*
* @param {Number} p - success probability
* @returns {Function} CDF
*/
function partial( p ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Geometric distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {
		if ( x < 0 ) {
			return 0;
		}
		if ( x === Number.POSITIVE_INFINITY ) {
			return 1;
		}
		x = floor( x );
		return 1 - pow( 1 - p, x + 1 );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
