const getDateString = () => {
    const date = new Date();
    return date.toISOString().slice(0, 10);
};

export default getDateString;
