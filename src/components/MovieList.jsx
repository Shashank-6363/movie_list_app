import { useNavigate } from "react-router-dom";
import "./MovieList.css";

import demoImage from "../assets/d750e5dbbde00c6980a5053ff7b3ea31cbf35361.jpg";
import demoImage1 from "../assets/ad75f68eff3565aace5b28a31b97af500299868a.jpg";
import demoImage2 from "../assets/71b726c9bdb04893d9269540ca86da074296255e.jpg";

function MovieList() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // optional: clear auth/localStorage here
    navigate("/"); // or "/login"
  };

  return (
    <div className="movieListPage">
      {/* Header */}
      <div className="movieListHeader">
        <h3>My Movies</h3>
        <div id="plusSign">+</div>
      </div>

      {/* Logout */}
      <div className="logout" onClick={handleLogout}>
        Logout →
      </div>

      {/* Movie Cards */}
      <div className="movieCartList">
        {[demoImage, demoImage1, demoImage2, demoImage, demoImage1, demoImage2, demoImage, demoImage1].map(
          (img, index) => (
            <div className="movieCart" key={index}>
              <img className="movieImage" src={img} alt="Movie" />
              <div className="movieInfo">
                <p className="movieTitle">Movie {index + 1}</p>
                <p className="movieYear">2001</p>
              </div>
            </div>
          )
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <p>Prev</p>
        <div>1</div>
        <div>2</div>
        <p>Next</p>
      </div>

      {/* Bottom Waves */}
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

export default MovieList;
