import { outcomeFunc } from "../../utils";

const computeExpr = (param) => {
	const { operandX, operandY, operator } = param;
	let outcome;
	let failure;

	if (operandX === "" || isNaN(operandX) ||
		operandY === "" || isNaN(operandY)) {
		return { value: "", error: false };
	}
	
	switch (operator) {
		case "+":
			outcome = `${parseFloat(operandX) + parseFloat(operandY)}`;
			break;
		case "-":
			outcome = `${parseFloat(operandX) - parseFloat(operandY)}`;
			break;
		case "×":
			outcome = `${parseFloat(operandX) * parseFloat(operandY)}`;
			break;
		case "/":
			outcome = `${parseFloat(operandX) / parseFloat(operandY)}`;
			break;
		default:
			failure = "Invalid operation";
			return { value: failure, error: true };
	}
	if (isFinite(outcome) === false) {
		return { value: "Math Error", error: true };
	}
	return { value: outcome, error: false };
};

export default computeExpr;