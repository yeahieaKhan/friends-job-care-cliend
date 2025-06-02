import React, { useContext } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../contextApi/AuthContext";
import axios from "axios";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useContext(AuthContext);
  const handleJobApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    if (!linkedin || !github || !resume) {
      alert("Please fill in all fields.");
      return;
    }

    const application = {
      jobId,
      application: user.email,
      linkedin,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data); // res.data contains the response body
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleJobApply}
        className="fieldset bg-base-200 border-base-300 space-y-2 rounded-box my-30 mx-auto w-xs border p-4"
      >
        <legend className="fieldset-legend">Page details</legend>

        <label className="label">Linkdink Account</label>
        <input
          type="url"
          name="linkedin"
          className="input"
          placeholder="Linkdenk Account link"
        />

        <label className="label">Github Link</label>
        <input
          type="text"
          name="github"
          className="input"
          placeholder="Github link"
        />

        <label className="label">Resume</label>
        <input
          type="text"
          name="resume"
          className="input"
          placeholder="Enter your Resume link"
        />
        <button className="btn btn-secondary mt-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobApply;
