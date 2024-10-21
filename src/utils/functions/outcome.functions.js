const locale = "en-US";
const option = {
    $1: {
        maximumSignificantDigits: 12,
        useGrouping: false
    },
    $2: {
        maximumFractionDigits: 11,
        useGrouping: false
    }
};
const scheme = {
    $1: new Intl.NumberFormat(locale, option.$1),
    $2: new Intl.NumberFormat(locale, option.$2)
};

const powers = {
    integer: 12,
    decimal: -7
};

function preciseFunc({ stream }) {
    let result;
    let splits = stream.split(/[e]/);
    let digits = +splits[0];
    let factor = +splits[1];
    let signum = factor < 0 ? -1 : 1;
    let regexp = /\.?0+(?=e)/;
    
    stream = +stream;
    if (digits % 1 === 0 && signum > 0 || 
    	digits % 1 === 0 && signum < 0) {
        result = stream.toPrecision(1);
    }
    if (digits % 1 !== 0 && signum > 0) {
        result = stream.toPrecision(8);
    }
    if (digits % 1 !== 0 && signum < 0) {
    	if (factor >= -9) {
            result = stream.toPrecision(8);
        } else {
            result = stream.toPrecision(8);
        }
    }
    result = result.replace(regexp, "");
    return result;
}

function indicesFunc({ stream }) {
	let result;
	stream = stream.toExponential();
	result = stream.split(/[e]/)[1];
    return +result;
}

function outcomeFunc({ stream }) {
	let factor;
	let result;
    if (!isFinite(stream)) {
        return { value: "Math Error", error: true };
    }
    if (!isFinite(stream)) {
        return { value: "Sign Error", error: true };
    }
    
    factor = indicesFunc({ 
    	stream: parseFloat(stream)
    });
    if (Math.abs(stream) >= 1) {
        if (factor >= powers.integer) {
        	const number = parseFloat(stream);
        	result = preciseFunc({
            	stream: number.toExponential()
            });
        } else {
        	result = scheme.$1.format(stream);
        }
    } else {
        if (factor <= powers.decimal) {
        	const number = parseFloat(stream);
        	result = preciseFunc({
            	stream: number.toExponential()
            });
        } else {
        	result = scheme.$2.format(stream);
        }
    }
    return { value: result, error: false };
}

export default outcomeFunc;
