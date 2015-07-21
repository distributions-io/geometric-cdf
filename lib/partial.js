'use strict';

// FUNCTIONS //


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

	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
