const getDatabase = (param) => {
    const { key } = param;
    return localStorage.getItem(
        key
    );
};

const setDatabase = (param) => {
    const { key, value } = param;
    localStorage.setItem(
        key,
        value
    );
};

export { getDatabase, setDatabase };