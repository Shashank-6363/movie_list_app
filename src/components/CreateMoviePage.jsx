import {useNavigate} from "react-router-dom";
import {useState} from "react";
import "./CreateMoviePage.css";

function CreateMoviePage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const handleCancel = () => {
    navigate("/movielist"); // back to movie list
  };

 const handleSubmit = () => {
  // 👉 Directly navigate to Edit page
  navigate("/edit-movie", {
    state: {
      title,
      year,
    },
  });
};


  return (
    <div className="moviePage">
      <h2 id="headingNewMovie">Create a new movie</h2>

      <div className="createMovieContent">
        {/* LEFT */}
        <div className="imageDragBox">
          <div className="dragInner">
            <p className="icon">📥</p>
            <p>Drop an image here</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="formSection">
          <input
            className="movieInput"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="movieInput"
            type="text"
            placeholder="Publishing year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />

          <div className="buttonGroup">
            <button id="cancelButton" onClick={handleCancel}>
              Cancel
            </button>

            <button id="submitButton" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="vector">
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="wave wave1"
        >
          <path
            d="M0 100 
         C360 0, 720 200, 1080 100
         C1440 0, 1800 200, 2160 100
         V200 H0 Z"
            fill="rgba(229, 229, 229, 0.13)"
          />
        </svg>

        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="wave wave2"
        >
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

export default CreateMoviePage;
