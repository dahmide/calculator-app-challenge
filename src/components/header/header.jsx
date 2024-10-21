import { reducerCase } from "../../utils";
import Switch from "../switch/switch";

const Header = (props) => {
    const { state, dispatch } = props;
    return (
        <div className="flex items-center justify-between mb-3">
            <div className="text-idx">Calc</div>
            <div className="flex items-center gap-x-5">
                THEME
                <Switch
                    schemeID={state.schemeID}
                    onChange={() => dispatch({ type: reducerCase.THEME })}
                />
            </div>
        </div>
    );
}

export default Header;