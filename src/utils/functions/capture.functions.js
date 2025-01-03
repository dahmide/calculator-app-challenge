import { hasFraction } from "../../utils";
const locale = "en-US";
const option = {
	$1: {},
    $2: {
        maximumSignificantDigits: 12,
        //useGrouping: false
    },
    $3: {
        maximumFractionDigits: 11,
        //useGrouping: false
    }
};
const scheme = {
    $1: new Intl.NumberFormat(locale, option.$1),
    $2: new Intl.NumberFormat(locale, option.$2),
    $3: new Intl.NumberFormat(locale, option.$3),
};

const powers = {
    integer: 12,
    decimal: -7
};

function captureFunc(params) {
	const { value, index } = params;
	if (index && value) {
		return correctFunc(value);
	} else {
		return patternFunc(value);
	}
}

function correctFunc(number) {
	let factor;
	let expons;
	let result;
	
	number = +number;
	factor = indicesFunc(number);
	if (Math.abs(number) > 1) {
		if (factor >= powers.integer) {
			expons = number.toExponential();
			result = preciseFunc(expons);
		} else {
			result = scheme.$2.format(number);
		}
	} else {
		if (factor <= powers.decimal) {
			expons = number.toExponential();
			result = preciseFunc(expons);
		} else {
			result = scheme.$3.format(number);
		}
	}
	return result;
}

function patternFunc(number) {
	let values;
	let xValue;
	let yValue;
	let result;
	
	if (number === "" || number.includes("e")) { return number; }
	if (isNaN(number) || Math.abs(number) < 1) { return number; }
	
	values = number.split(".");
	xValue = values[0];
	yValue = values[1];
	
	if (hasFraction(number)) {
		result = scheme.$1.format(xValue);
		result = result + "." + yValue;
	} else {
		result = scheme.$1.format(xValue);
	}
	return result;
}

function indicesFunc(number) {
	let result;
	number = number.toExponential();
	result = number.split(/[e]/)[1];
    return +result;
}

function preciseFunc(number) {
    let result;
    let splits = number.split(/[e]/);
    let digits = +splits[0];
    let factor = +splits[1];
    let signum = factor < 0 ? -1 : 1;
    let regexp = /\.?0+(?=e)/;
    
    number = +number;
    if (digits % 1 === 0 && signum > 0 || 
    	digits % 1 === 0 && signum < 0) {
        result = number.toPrecision(1);
    }
    if (digits % 1 !== 0 && signum > 0) {
        result = number.toPrecision(8);
    }
    if (digits % 1 !== 0 && signum < 0) {
    	if (factor >= -9) {
            result = number.toPrecision(8);
        } else {
            result = number.toPrecision(8);
        }
    }
    result = result.replace(regexp, "");
    return result;
}

export default captureFunc;