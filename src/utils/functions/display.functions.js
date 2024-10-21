const mergeDigits = (param) => {
    const { prev, curr } = param;
    return `${prev || ""}${curr || ""}`;
};

export default mergeDigits;
