import { outcomeFunc } from "../../utils";

const computeExpr = (param) => {
	const { operandX, operandY, operator } = param;
	let outcome;
	let failure;
	
	if (operandX === "" || isNaN(operandX) ||
		operandY === "" || isNaN(operandY)) {
		return "";
		//return { value: "", error: false };
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
			return outcomeFunc({ stream: failure });
	}
	return outcomeFunc({ stream: outcome });
};

export default computeExpr;