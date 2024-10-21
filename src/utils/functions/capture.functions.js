import { hasFraction } from "../../utils";
const locale = "en-US";
const option = {};

const scheme = new Intl.NumberFormat(
	locale, 
	option
);

function captureFunc(number) {
	let values;
	let xValue;
	let yValue;
	let result;
	
	if (number === "" || number.includes("e")) {
		return number;
	}
	if (isNaN(number) || Math.abs(number) < 1) {
		return number;
	}
	
	values = number.split(".");
	xValue = values[0];
	yValue = values[1];
	
	if (hasFraction(number)) {
		result = scheme.format(xValue);
		result = result + "." + yValue;
	} else {
		result = scheme.format(xValue);
	}
	return result;
}

export default captureFunc;