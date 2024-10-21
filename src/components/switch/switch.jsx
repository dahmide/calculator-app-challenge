const Switch = (props) => {
    const { schemeID, onChange } = props;
    return (
        <div className="select-none">
            <div className="flex justify-between px-1">
                <span className="text-sm">1</span>
                <span className="text-sm">2</span>
                <span className="text-sm">3</span>
            </div>
            <input 
                type="checkbox"
                name="checkbox"
                role="switch"
                data-mode={schemeID}
                className="appearance-none w-[55px] h-[20px] bg-bcm-200 rounded-full select-none before:content-[''] before:flex before:rounded-full before:bg-bck-200 before:transition-transform before:duration-[500ms] before:ease-in before:translate-x-[0] dark:before:translate-x-[0] data-[mode=night]:before:trabslate-x-[0] data-[mode=light]:before:translate-x-[17.5px] data-[mode=other]:before:translate-x-[35px] before:w-[calc(20px_*_0.6)] before:h-[calc(20px_*_0.6)] before:m-[calc(20px_*_0.2)]"
                value={schemeID}
                onChange={onChange}
            />
        </div>
    );
}

export default Switch;