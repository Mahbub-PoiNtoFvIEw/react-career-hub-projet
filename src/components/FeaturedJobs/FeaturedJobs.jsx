import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="max-w-6xl m-auto">
      <div className="text-center mb-4 space-y-3">
        <h2 className="text-4xl font-bold">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 justify-between  items-center p-4">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={`${dataLength === jobs.length && 'hidden'} text-center my-6`}>
        <button 
        onClick={()=> setDataLength(jobs.length)}
        className="btn bg-blue-500 text-white font-bold px-16 py-1">
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
