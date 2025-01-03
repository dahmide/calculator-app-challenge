import { captureFunc } from "../../utils";

const Screen = (props) => {
    const { state, dispatch } = props;
    const index = state.observer;
    const entry = [
    	captureFunc({ value: state.operandX, index: index === "1" }), 
    	state.operator, 
        captureFunc({ value: state.operandY, index: index === "2" }),
    ];
    const total = [
        captureFunc({ value: state.solution, index: index === "3" })
    ];
    //const color = state.conflict ? "tcm-400" : "inherit";
    return (
        <div className={`flex justify-end px-5 py-4 mb-3 text-4xl leading-10 text-inherit bg-bcm-300 rounded-md overflow-clip whitespace-nowrap`}>
            { 
            	state.solution ? total : 
            	state.operandX ? entry :
            	state.operandY ? entry : "0"
            }
        </div>
    );
}

export default Screen;