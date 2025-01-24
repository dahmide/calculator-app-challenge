import { reducerCase } from "../../utils";
import Switch from "../switch/switch";

const Header = (props) => {
    const { state, dispatch } = props;
    return (
        <div className="flex items-center justify-between mb-3">
            <div className="text-3xl sm:text-2xl">calc</div>
            <div className="text-sm tracking-[1px] flex items-end gap-x-5">
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