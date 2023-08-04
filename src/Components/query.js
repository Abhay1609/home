
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Query = () => {
  const cardStyle = {
    maxWidth: '60rem',
    fontWeight: 'bold',
    fontSize: '16px',
  };

  const [role, setRole] = useState("");
  const [resume, setResume] = useState(null);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click");

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("role", role);

    axios.post("http://13.235.142.31:8000/queryviewapi/", formData)
      .then(() => {
        history("/");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className="border border-5" id="brd">
      <div className="mb-3">
        <h3 htmlFor="exampleFormControlTextarea1" className="form-label" id="mmr">
          Why should you be hired for this role?
        </h3>
        <textarea
          className="form-control"
          rows="3"
          id="mml"
          style={cardStyle}
          onChange={(e) => setRole(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <h3 htmlFor="formFile" className="form-label">Resume</h3>
        <input
          className="form-control"
          type="file"
          id="mml"
          style={cardStyle}
          onChange={(e) => setResume(e.target.files[0])}
        />
      </div>
      <button type="button" className="btn btn-primary" id="btn" onClick={handleSubmit}>
        Apply Now
      </button>
    </div>
  );
};

export default Query;
