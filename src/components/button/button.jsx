const Button = (props) => {
    const { click, title, order } = props;
    let style;
    
    switch (order) {
        case "1": {
            style = "bg-bck-100 text-tcm-200 shadow-sck-100";
            break;
        }
        case "2": {
            style = "bg-bck-200 text-tcm-300 shadow-sck-200";
            break;
        }
        default: {
            style = "bg-bck-300 text-tcm-100 shadow-sck-300";
            break;
        }
    }
    
    return (
        <button className={`${style} text-copy rounded-md select-none shadow-[0_3px_0_0] active:shadow-[0_2px_0_0] active:shadow-none active:translate-y-1 hover:brightness-125`} onClick={click}>
            {title}
        </button>
    );
}
export default Button;