import { captureFunc } from "../../utils";

const Screen = (props) => {
    const { state, dispatch } = props;
    const req = [
    	captureFunc(state.operandX), state.operator, 
        captureFunc(state.operandY),
    ];
    const res = [
        captureFunc(state.solution)
    ];
    const clr = state.conflict ? "tcm-400" : "inherit";
    return (
        <div className={`flex justify-end px-5 py-4 mb-3 text-4xl leading-10 text-inherit bg-bcm-300 rounded-md overflow-clip whitespace-nowrap`}>
            { 
            	state.solution ? res : 
            	state.operandX ? req :
            	state.operandY ? req : "0"
            }
        </div>
    );
}

export default Screen;