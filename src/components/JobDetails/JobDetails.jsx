import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import moneyIcon from "../../assets/icons/money.png";
import calenderIcon from "../../assets/icons/calendar.png";
import phoneIcon from "../../assets/icons/phone.png";
import emailIcon from "../../assets/icons/email.png";
import locationIcon from "../../assets/icons/location2.png";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "../../utility/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => idInt === job.id);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  const handleApplyJob =()=>{
    saveJobApplication(idInt)
    toast('You have applied successfully..!')
  }
  return (
    <div>
      <div className="bg-blue-50 py-16 text-center">
        <h2 className="text-4xl font-bold">Jod Details</h2>
      </div>
      <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto my-10">
        <div className="col-span-3 space-y-6">
          <h2 className="">
            <span className="font-bold">job Description : </span>{" "}
            {job_description}
          </h2>
          <h2>
            <span className="font-bold">job Responsibility : </span>
            {job_responsibility}
          </h2>
          <h2 className="flex flex-col gap-3">
            <span className="font-bold">Education requirement : </span>
            {educational_requirements}
          </h2>
          <h2 className="flex flex-col gap-3">
            <span className="font-bold">Experience : </span>
            {experiences}
          </h2>
        </div>
        <div className="col-span-2">
          <div className="bg-blue-50 rounded-l-xl p-4">
            <div className="mb-4 space-y-3">
              <h1 className="border-b-[.5px] border-dotted border-slate-400 pb-2 font-bold mb-4">
                Jod Details
              </h1>
              <p className="flex items-center gap-2">
                <img className="w-4 h-4" src={moneyIcon} alt="" />{" "}
                <span className="font-bold">Salary </span> : {salary} (per
                month)
              </p>
              <p className="flex items-center gap-2">
                <img className="w-4 h-4" src={calenderIcon} alt="" />{" "}
                <span className="font-bold">Job Title </span> : {job_title}
              </p>
            </div>
            <div className="mb-4 space-y-3">
              <h1 className="border-b-[.5px] border-dotted border-slate-400 pb-2 font-bold mb-4">
                Contact Information
              </h1>
              <p className="flex items-center gap-2">
                <img className="w-4 h-4" src={phoneIcon} alt="" />{" "}
                <span className="font-bold">Phone </span> : {contact_information.phone}
              </p>
              <p className="flex items-center gap-2">
                <img className="w-4 h-4" src={emailIcon} alt="" />{" "}
                <span className="font-bold">Email </span> : {contact_information.email}
              </p>
              <p className="flex gap-2">
                <img className="w-4 h-4 mt-1" src={locationIcon} alt="" />{" "}
                <span className="font-bold">Address </span> : {contact_information.address}
              </p>
            </div>
          </div>
          <button onClick={handleApplyJob} className="btn mt-4 bg-blue-500 text-white font-bold w-full px-8 py-1">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
