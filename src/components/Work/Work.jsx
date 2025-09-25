import React from "react";
import "./work.css";

import works from "../../assets/work";

const work = () => {
  return (
    <div className="works">
      <div className="text">
        <h1 className="text-4xl ">Threads that tell story </h1>
        <p className="text-3xl">Stitching your style precision passion </p>
      </div>
      <div className="card-cont flex gap-10 ">
        {works.map((work, index) => {
          return (
            <div className="card hover:scale-105 duration-300">
              <div key={index} className="card bg-base-100 w-96 shadow-sm">
                <figure>
                  <img src={work.w_img} alt="Shoes" />
                </figure>
                <div className="card-body text-gray-500">
                  <h2 className="card-title  justify-center text-purple-500">
                    {work.w_name}
                  </h2>

                  <div className="card-actions justify-end"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default work;
