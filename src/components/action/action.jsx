import { reducerCase } from "../../utils";
import Button from "../button/button";

const Action = (props) => {
    const { state, dispatch } = props;
    return (
        <div className="bg-bcm-200 grid grid-cols-4 auto-rows-[40px] gap-4 p-5 rounded-md [&>button:nth-child(17)]:col-span-2 [&>button:nth-child(18)]:col-span-2">
            <Button 
                title="7"
                click={(e) => dispatch({ type: reducerCase.DIGIT, number: e.target.textContent })} 
            />
            <Button 
                title="8" 
                click={(e) => dispatch({ type: reducerCase.DIGIT, number: e.target.textContent })} 
            />
            <Button 
                title="9" 
                click={(e) => dispatch({ type: reducerCase.DIGIT, number: e.target.textContent })} 
            />
            <Button 
                title="DEL" 
                order="1"
                click={(e) => dispatch({ type: reducerCase.ERASE, target: e.target.textContent })} 
            />
            <Button 
                title="6" 
                click={(e) => dispatch({ type: reducerCase.DIGIT, number: e.target.textContent })} 
            />
            <Button 
                title="5" 
                click={(e) => dispatch({ type: reducerCase.DIGIT, number: e.target.textContent })} 
            />
            <Button 
                title="4" 
                click={(e) => dispatch({ type: reducerCase.DIGIT, number: e.target.textContent })} 
            />
            <Button 
                title="+" 
                click={(e) => dispatch({ type: reducerCase.SIGNS, symbol: e.target.textContent })} 
            />
            <Button 
                title="3" 
                click={(e) => dispatch({ type: reducerCase.DIGIT, number: e.target.textContent })} 
            />
            <Button 
                title="2" 
                click={(e) => dispatch({ type: reducerCase.DIGIT, number: e.target.textContent })} 
            />
            <Button 
                title="1" 
                click={(e) => dispatch({ type: reducerCase.DIGIT, number: e.target.textContent })} 
            />
            <Button 
                title="-" 
                click={(e) => dispatch({ type: reducerCase.SIGNS, symbol: e.target.textContent })} 
            />
            <Button 
                title="." 
                click={(e) => dispatch({ type: reducerCase.DIGIT, number: e.target.textContent })} 
            />
            <Button 
                title="0" 
                click={(e) => dispatch({ type: reducerCase.DIGIT, number: e.target.textContent })} 
            />
            <Button 
                title="/" 
                click={(e) => dispatch({ type: reducerCase.SIGNS, symbol: e.target.textContent })} 
            />
            <Button 
                title="×" 
                click={(e) => dispatch({ type: reducerCase.SIGNS, symbol: e.target.textContent })} 
            />
            <Button 
                title="RESET" 
                order="1"
                click={(e) => dispatch({ type: reducerCase.RESET, target: e.target.textContent })} 
            />
            <Button 
                title="=" 
                order="2"
                click={(e) => dispatch({ type: reducerCase.EQUAL, target: e.target.textContent })} 
            />
        </div>
    );
}

export default Action;