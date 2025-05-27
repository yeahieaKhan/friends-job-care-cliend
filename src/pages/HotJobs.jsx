import React, { useEffect, useState } from "react";
import JobsCards from "./Shared/JobsCards";

const HotJobs = () => {
  const [jobs, setJobs] = useState([""]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 py-20 md:max-w-7xl mx-auto overflow-x-hidden">
        {jobs?.map((job) => (
          <JobsCards job={job} key={job._id}></JobsCards>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
