import "./EmptyMovie.css";

function EmptyMovie() {
  return (
    <div className="addMovieList">
      <div className="addMovieContainer">
        <h1 id="emptyMovieHeading">Your movie list is empty</h1>
        <button className="addNewMovie">Add a new Movie</button>
      </div>

      {/* Waves at the bottom */}
      <div className="vector">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="wave wave1">
          <path
            d="M0 100 
               C360 0, 720 200, 1080 100
               C1440 0, 1800 200, 2160 100
               V200 H0 Z"
            fill="rgba(229, 229, 229, 0.13)"
          />
        </svg>

        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="wave wave2">
          <path
            d="M0 100 
               C360 200, 720 0, 1080 100
               C1440 200, 1800 0, 2160 100
               V200 H0 Z"
            fill="rgba(32, 223, 127, 0.09)"
          />
        </svg>
      </div>
    </div>
  );
}

export default EmptyMovie;
