const getDateAndMonth = dateString => {
    const dateArray = dateString.split("-");
    const date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
    const options = { weekday: "short", month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options).split(",");

    return [formattedDate[0].trim(), formattedDate[1].trim()];
};

export default getDateAndMonth;
