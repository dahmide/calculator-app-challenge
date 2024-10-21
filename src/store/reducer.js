import { reducerCase, mergeDigits, hasFraction, computeExpr } from "../utils";
import { setDatabase } from "../services/LocalStorage/LocalStorage.service.js";

const SYMBOLS = {
    ADD: "+",
    SUB: "-",
    MUL: "*",
    DIV: "/",
    DOT: ".",
    ZRO: "0",
    NIL: "",
};
const { ADD, SUB, MUL, DIV, DOT, ZRO, NIL } = SYMBOLS;
const reducer = (state, event) => {
    switch (event.type) {
        case reducerCase.DIGIT: {
            const cDigit = event.number;
            const pDigit = state.operandY;
            const result = state.solution;
            const issued = state.conflict;
            
            if (issued) {
            	return {
            		...state
            	};
            }
            
            if (result) {
            	const cValue = cDigit === "." ? "0." : cDigit;
            	return {
            		...state,
            		operandY: cValue,
            		operandX: "",
            		operator: "",
            		solution: "",
            		conflict: ""
            	};
            }
            
            if (!isNaN(cDigit) && pDigit === ZRO) {
                return {
                    ...state,
                    operandY: mergeDigits({
                        curr: cDigit
                    })
                };
            }
            
           if (cDigit === DOT && pDigit === NIL ||
        	   cDigit === DOT && pDigit === SUB) {
                const nValue = `${pDigit}0`;
                return {
                    ...state,
                    operandY: mergeDigits({
                        curr: cDigit,
                        prev: nValue
                    })
                };
            }
            
            const isDigitCheck_1 = pDigit === "0" ? true : pDigit === "-0" ? true : false;
            if (cDigit === ZRO && isDigitCheck_1) {
                return {
                    ...state
                };
            }
            
            const isDigitCheck_2 = hasFraction(pDigit);
            if (cDigit === DOT && isDigitCheck_2) {
                return {
                    ...state
                };
            }

            return {
                ...state,
                operandY: mergeDigits({
                    curr: cDigit,
                    prev: pDigit
                })
            };
        }
        case reducerCase.SIGNS: {
            const cOpers = event.symbol;
            const pOpers = state.operator;
            const cDigit = state.operandY;
            const pDigit = state.operandX;
            const result = state.solution;
            const issued = state.conflict;
            
            if (issued) {
            	return {
            		...state
            	};
            }
            
            if (result) {
            	const length = result.length - 1;
            	return {
            		...state,
            		solution: "",
            		conflict: "",
            		operandY: "",
            		operandX: result,
            		operator: cOpers,
            		location: length,
            	};
            }
            
            if (cDigit === SUB && cOpers === SUB) {
            	return {
            		...state,
            		operandY: cOpers
            	};
            }
            
            if (cDigit === SUB && pOpers !== NIL) {
            	return {
            		...state,
            		operator: cOpers,
            		operandY: ""
            	};
            }
            
            if (pDigit !== NIL && cDigit !== NIL) {
            	const result = computeExpr({
            		operandX: pDigit,
            		operandY: cDigit,
            		operator: pOpers,
            	});
            	console.log(result);
            	const status = result.error;
            	const answer = result.value;
            	const length = result.value.length - 1;
            	return {
            		...state,
            		operator: status ? "" : cOpers,
            		operandX: status ? "" : answer,
            		operandY: "",
            		solution: status ? answer : "",
            		conflict: status ? status : "",
            		location: status ? "" : length
            	};
            }
            
            if (pOpers === ADD && cOpers === SUB || 
            	pOpers === SUB && cOpers === SUB) {
            	return {
            		...state,
            		operator: cOpers
            	};
            }
            
            if (cDigit === NIL && cOpers === SUB) {
            	return {
            		...state,
            		operandY: cOpers
            	};
            }
            
            if (cDigit === NIL && pOpers !== NIL) {
            	return {
            		...state,
            		operator: cOpers
            	};
            }
            
            if (cDigit === NIL && pOpers === NIL) {
            	return {
            		...state
            	};
            }
            
            if (cDigit === SUB && pOpers === NIL) {
            	return {
            		...state
            	};
            }
            
            return {
                ...state,
                operator: cOpers,
                operandX: cDigit,
                operandY: pDigit
            };
        }
        case reducerCase.ERASE: {
            const cOpers = state.operator;
            const cDigit = state.operandY;
            const pDigit = state.operandX;
            const result = state.solution;
            const issued = state.conflict;
            const cursor = state.location;

            const sliced = cDigit.slice(0, cDigit.length - 1);
            
            if (issued) {
            	return {
            		...state,
            		operandX: "",
            		operandY: "",
            		operator: "",
            		solution: "",
            		conflict: "",
            	};
            }
            
            if (result) {
            	return {
            		...state,
            		solution: "",
            		conflict: "",
            		operandY: sliced
            	};
            }
            
            const len = cDigit.length - 1;
            if (cursor === len && cOpers === NIL) {
            	return {
            		...state,
            		location: "",
            		operandY: "",
            	};
            }
            
            if (cDigit === NIL && cOpers !== NIL) {
                return {
                    ...state,
                    operator: cDigit,
                    operandX: cDigit,
                    operandY: pDigit
                };
            }

            return {
                ...state,
                operandY: sliced
            };
        }
        case reducerCase.RESET: {
            return {
                ...state,
                operandX: "",
                operandY: "",
                operator: "",
                solution: "",
                conflict: ""
            };
        }
        case reducerCase.EQUAL: {
            const pDigit = state.operandX;
            const cDigit = state.operandY;
            const cOpers = state.operator;

            const result = computeExpr({
                operandX: pDigit,
                operandY: cDigit,
                operator: cOpers
            });

            return {
                ...state,
                solution: result.value || "",
                conflict: result.error || ""
            };
        }
        case reducerCase.FETCH: {
            const serial = event.schemeID;
            return {
                ...state,
                schemeID: serial
            };
        }
        case reducerCase.THEME: {
            const serial = state.schemeID;
            let selected;
            if (serial === "night") {
                selected = "light";
            }
            if (serial === "light") {
                selected = "other";
            }
            if (serial === "other") {
                selected = "night";
            }

            setDatabase({
                key: "theme",
                value: selected
            });
            return {
                ...state,
                schemeID: selected
            };
        }
    }
};

export default reducer;
