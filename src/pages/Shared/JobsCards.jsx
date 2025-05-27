import React from "react";
import { Link } from "react-router";

const JobsCards = ({ job }) => {
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
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="flex gap-2">
          <figure>
            <img src={company_logo} alt="Shoes" />
          </figure>
          <div>
            <h2 className="font-bold text-2xl"> {company}</h2>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{status}</div>
          </h2>
          <p></p>
          <p>{description}</p>
          <div className="card-actions ">
            {job &&
              requirements?.map((skills) => (
                <div className="btn btn-outline  btn-secondary text-white">
                  {skills}
                </div>
              ))}
          </div>
          <div className="card-actions mt-2 justify-end">
            <Link to={`/jobDetails/${_id}`}>
              {" "}
              <button className="btn  btn-secondary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCards;
