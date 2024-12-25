import React from "react";
import locationIcon from "../../assets/icons/Location2.png";
import moneyIcon from "../../assets/icons/money.png";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="border-[.5px] border-slate-300 rounded-xl p-6 space-y-3">
      <div>
        <img className="w-32 mb-6" src={logo} alt="" />
        <h2 className="font-bold">{job_title}</h2>
        <p>{company_name}</p>
      </div>
      <div className="flex gap-4">
        <p className="px-4 py-1 border-[.5px] border-slate-300 rounded-md">
          {remote_or_onsite}
        </p>
        <p className="px-4 py-1 border-[.5px] border-slate-300 rounded-md">
          {job_type}
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <p className="flex gap-1">
          <img className="w-6" src={locationIcon} alt="" />{" "}
          <span>{location}</span>
        </p>
        <p className="flex gap-1">
          <img className="w-6" src={moneyIcon} alt="" /> <span>{salary}</span>
        </p>
      </div>
      <div>
        <Link to={`/job/${id}`}>
          <button className="btn bg-blue-500 text-white font-bold px-8 py-1">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Job;
