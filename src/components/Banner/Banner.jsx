import React from "react";
import bannerImg from "../../assets/images/user.png";
const Banner = () => {
  return (
    <div className=" bg-blue-50">
      <div className="flex justify-between items-center gap-4 max-w-6xl p-4 m-auto">
        <div className="space-y-6">
          <h2 className="md:text-6xl text-4xl font-bold">
            One Step Closer To Your{" "}
            <span className="text-blue-400">Dream Job</span>
          </h2>
          <p className="">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn bg-blue-600 text-white px-10 py-2">
            get started
          </button>
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
