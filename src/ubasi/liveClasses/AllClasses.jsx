import React from "react";
import { Clock } from "react-feather";
import { Link } from "react-router-dom";
import { classes } from "../assets/dummy/data";

const AllClasses = () => {
  return (
    <div className="">
      <div>
        <span className="d-flex flex-column text-dark fw-bold">
          Countdown To Project
          <p className="text-secondary">8 days, 4 hours, 12 minutes</p>
        </span>
        <span></span>
      </div>
      <div className="row g-3">
        {classes?.map((data, index) => (
          <Link to={`${index}`} key={index} state={data} className="col-12 col-md-6 col-lg-4">
            <div className="card position-relative">
              <span
                className={`${
                  data?.status === "completed"
                    ? "bg-success"
                    : data?.status === "upcoming"
                    ? "bg-warning"
                    : "bg-danger"
                } text-white position-absolute top-0 start-0 p-1`}
                style={{borderTopLeftRadius:"5px"}}
              >
                {data?.status}
              </span>
              <img
                // style={{ width: "95%", height: "auto", objectFit: "contain" }}
                className="rounded-top"
                src={data?.img}
                alt="classImg"
              />
              <div className="card-body">
                <h5 className="fw-bold text-dark">{data?.title}</h5>
                <span className="text-secondary d-flex align-items-center">
                    <Clock size={"16px"}/>{data?.date}{" "}{data?.start}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;