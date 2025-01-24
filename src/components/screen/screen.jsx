import { pointerCase, captureFunc } from "../../utils";

const Screen = (props) => {
    const { state } = props;
    const watch = {
        operandX: state.tracking === pointerCase.operandX,
        operandY: state.tracking === pointerCase.operandY,
        solution: state.tracking === pointerCase.solution,
    };
    const input = [
    	captureFunc({ value: state.operandX, watch: watch.operandX }), 
    	state.operator, 
        captureFunc({ value: state.operandY, watch: watch.operandY }),
    ];
    const total = [
        captureFunc({ value: state.solution, watch: watch.solution })
    ];
    return (
        <div className={`flex items-center justify-end h-20 px-5 py-4 mb-3 text-4xl leading-10 text-inherit bg-bcm-300 rounded-md overflow-clip whitespace-nowrap`}>
            { 
            	state.solution ? total : 
            	state.operandX ? input :
            	state.operandY ? input : ""
            }
        </div>
    );
}

export default Screen;