'use strict';

// FUNCTIONS //

var floor = Math.floor,
	pow = Math.pow;


// CDF //

/**
* FUNCTION: cdf( x, p )
*	Evaluates the cumulative distribution function (CDF) for a Geometric distribution with success probability `p` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} p - success probability
* @returns {Number} evaluated CDF
*/
function cdf( x, p ) {
	if ( x < 0 ) {
		return 0;
	}
	if ( x === Number.POSITIVE_INFINITY ) {
		return 1;
	}
	x = floor( x );
	return 1 - pow( 1 - p, x + 1 );
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
