import React from "react";
import locationIcon from "../../assets/icons/Location2.png";
import moneyIcon from "../../assets/icons/money.png";

const AppliedJobDetails = ({ appliedJob }) => {
  const {
    logo,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
    job_title,
  } = appliedJob;
  return (
    <div className="border border-slate-300 my-6 p-6 rounded-2xl">
      <div className="flex gap-4">
        <div className="bg-slate-100 px-6 py-10 text-center rounded-xl">
          <img className="w-24" src={logo} alt="" />
        </div>
        <div className="md:flex w-full justify-between items-center gap-4">
          <div className="space-y-3 flex-grow">
            <h2 className="font-bold">{job_title}</h2>
            <p>{company_name}</p>
            <div className="flex gap-6">
                <p className="px-4 py-1 border-[.5px] border-slate-300 rounded-md">
                {remote_or_onsite}
                </p>
                <p className="px-4 py-1 border-[.5px] border-slate-300 rounded-md">
                {job_type}
                </p>
            </div>
            <div className="flex gap-6">
                <p className="flex gap-1">
                <img className="w-6" src={locationIcon} alt="" />{" "}
                <span>{location}</span>
                </p>
                <p className="flex gap-1">
                <img className="w-6" src={moneyIcon} alt="" />{" "}
                <span>{salary}</span>
                </p>
            </div>
          </div>
            <div className="justify-end">
                <button className="btn bg-blue-500 text-white font-bold px-8 py-1 mt-2">
                    View Details
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobDetails;
