const MovieCard = () => {
    return (
        <>
            <article className="card">
                <div className="card-image relative">
                    <div className="image bg-emerald-600"></div>
                    <div className="card-icon absolute bg-[#F3F4F6]"></div>
                </div>
                <p className="release-date"></p>
                <h3 className="card-title">Stranger Things</h3>
                <div className="rating">
                    <p>IMDB 86.0 / 100</p>
                    <p>O 97%</p>
                </div>
                <p className="card-genre">Action, Adventure, Horror</p>
            </article>
        </>
    );
};
export default MovieCard;
