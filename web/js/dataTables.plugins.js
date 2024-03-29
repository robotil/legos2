﻿//Sorting
//http://www.datatables.net/plug-ins/sorting

//Date (dd . mm[ . YYYY]) 
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"date-eu-pre": function ( date ) {
		if (date == '') date = '01.01.0001';
		var date = date.replace(" ", "");
		var eu_date = date.split('.');

		/*year (optional)*/
		if (eu_date[2]) {
			var year = eu_date[2];
		} else {
			var year = 0;
		}

		/*month*/
		var month = eu_date[1];
		if (month.length == 1) {
			month = 0+month;
		}

		/*day*/
		var day = eu_date[0];
		if (day.length == 1) {
			day = 0+day;
		}

		return (year + month + day) * 1;
	},

	"date-eu-asc": function ( a, b ) {
		return ((a < b) ? -1 : ((a > b) ? 1 : 0));
	},

	"date-eu-desc": function ( a, b ) {
		return ((a < b) ? 1 : ((a > b) ? -1 : 0));
	}
} );

//Date (dd.mm.YYY hh:ii:ss) 
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"date-time-eu-pre": function ( a ) {
		if (jQuery.trim(a) != '') {
			var frDatea = jQuery.trim(a).split(' ');
			var frTimea = frDatea[1].split(':');
			var frDatea2 = frDatea[0].split('.');
			var x = (frDatea2[2] + frDatea2[1] + frDatea2[0] + frTimea[0] + frTimea[1]) * 1;
		} else {
			var x = 10000000000000; // = l'an 1000 ...
		}

		return x;
	},

	"date-time-eu-asc": function ( a, b ) {
		return a - b;
	},

	"date-time-eu-desc": function ( a, b ) {
		return b - a;
	}
} );

//Formatted numbers 
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"formatted-num-pre": function ( a ) {
		a = (a==="-") ? 0 : a.replace( /[^\d\-\.]/g, "" );
		return parseFloat( a );
	},

	"formatted-num-asc": function ( a, b ) {
		return a - b;
	},

	"formatted-num-desc": function ( a, b ) {
		return b - a;
	}
} );

//Natural sorting 
/*
 * Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license
 * Author: Jim Palmer (based on chunking idea from Dave Koelle)
 * Contributors: Mike Grier (mgrier.com), Clint Priest, Kyle Adams, guillermo
 * See: http://js-naturalsort.googlecode.com/svn/trunk/naturalSort.js
 */
function naturalSort (a, b) {
	var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
	sre = /(^[ ]*|[ ]*$)/g,
	dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
	hre = /^0x[0-9a-f]+$/i,
	ore = /^0/,
	// convert all to strings and trim()
	x = a.toString().replace(sre, '') || '',
	y = b.toString().replace(sre, '') || '',
	// chunk/tokenize
	xN = x.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
	yN = y.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
	// numeric, hex or date detection
	xD = parseInt(x.match(hre)) || (xN.length != 1 && x.match(dre) && Date.parse(x)),
	yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null;
	// first try and sort Hex codes or Dates
	if (yD)
		if ( xD < yD ) return -1;
		else if ( xD > yD )  return 1;
	// natural sorting through split numeric strings and default strings
	for(var cLoc=0, numS=Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
		// find floats not starting with '0', string or 0 if not defined (Clint Priest)
		var oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
		var oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
		// handle numeric vs string comparison - number < string - (Kyle Adams)
		if (isNaN(oFxNcL) !== isNaN(oFyNcL)) return (isNaN(oFxNcL)) ? 1 : -1;
		// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
		else if (typeof oFxNcL !== typeof oFyNcL) {
			oFxNcL += '';
			oFyNcL += '';
		}
		if (oFxNcL < oFyNcL) return -1;
		if (oFxNcL > oFyNcL) return 1;
	}
	return 0;
}

jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"natural-asc": function ( a, b ) {
		return naturalSort(a,b);
	},

	"natural-desc": function ( a, b ) {
		return naturalSort(a,b) * -1;
	}
} );


//Percentage 
jQuery.extend( jQuery.fn.dataTableExt.oSort, {
	"percent-pre": function ( a ) {
		var x = (a == "-") ? 0 : a.replace( /%/, "" );
		return parseFloat( x );
	},

	"percent-asc": function ( a, b ) {
		return ((a < b) ? -1 : ((a > b) ? 1 : 0));
	},

	"percent-desc": function ( a, b ) {
		return ((a < b) ? 1 : ((a > b) ? -1 : 0));
	}
} );
