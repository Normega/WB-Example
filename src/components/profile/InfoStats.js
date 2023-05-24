const InfoStats = ({ imgUrl, stat, category }) => {
    return (
        <div className="info-stats">
            <img src={imgUrl} alt="" />
            <div className="stats">
                <h1>{stat}</h1>
                <p>{category}</p>
            </div>
        </div>
    );
};

export default InfoStats;