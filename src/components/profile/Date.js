const Date = ({ date, day, dateString, selectedDate, handleClick }) => {
    return (
        <div
            className={`date ${dateString === selectedDate ? "highlight" : ""}`}
            onClick={handleClick}
        >
            <h1>{date}</h1>
            <h1>{day}</h1>
        </div>
    );
};

export default Date;