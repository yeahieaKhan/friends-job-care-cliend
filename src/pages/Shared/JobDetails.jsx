import React from "react";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    applicationDeadline,
    category,
    company,
    company_logo,
    description,
    hr_name,
    jobType,
    location,
    requirements,
    responsibilities,
    salaryRange,
    status,
    title,
    _id,
  } = job;
  console.log(job);

  return (
    <div>
      <div className="md:w-4xl mx-auto bg-blue-950 ">
        <h2 className="text-center font-bold text-2xl py-10">
          Employment Info
        </h2>
        <div>
          <img src={company_logo} alt="" />
        </div>
        <div className="flex gap-20 justify-center p-10 space-y-2 border">
          <ul>
            <li>company</li>
            <li>Category</li>
            <li>Company name</li>
            <li>Company name</li>
            <li>Company name</li>
            <li>Company name</li>
          </ul>
          <ul>
            <li>{company}</li>
            <li>{category}</li>
            <li>Company name</li>
            <li>Company name</li>
            <li>Company name</li>
            <li>Company name</li>
          </ul>
          <button className="btn btn-secondary"> Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
