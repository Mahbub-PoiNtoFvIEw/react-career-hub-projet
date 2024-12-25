import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/LocalStorage";
import AppliedJobDetails from "../AppliedJobDetails/AppliedJobDetails";

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([])
    const jobs = useLoaderData();

    const handleJobsFilter =filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs);
        }
    }
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setDisplayJobs(jobsApplied)
      setAppliedJobs(jobsApplied);
    }
  }, []);

//   console.log(appliedJobs)
  return (
    <div>
      <div className="bg-blue-50 py-16 text-center">
        <h2 className="text-4xl font-bold">Applied Jobs : {appliedJobs.length}</h2>
      </div>
      <div className="max-w-6xl m-auto">
        <div className="dropdown my-4">
            <div tabIndex={0} role="button" className="btn px-16 text-center">Click</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
            </ul>
        </div>
        {
            displayJobs.map(appliedJob => <AppliedJobDetails key={appliedJob.id} appliedJob={appliedJob}></AppliedJobDetails>)
        }
      </div>
    </div>
  );
};

export default AppliedJobs;
