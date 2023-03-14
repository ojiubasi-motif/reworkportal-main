import React,{useState} from "react";
import { useParams, useLocation, NavLink } from "react-router-dom";
import ClassNavItem from './ClassNavItem'

const ClassDetails = () => {
  // const {classId} = useParams();
  const [classNav, setNav] = useState('Description');
  const location = useLocation();

  return (
    <div className="">
      <div>
        <span className="d-flex flex-column text-dark fw-bold">
          Countdown To Project
          <p
            className="text-secondary fw-normal"
            style={{ padding: "0", margin: "0" }}
          >
            8 days, 4 hours, 12 minutes
          </p>
        </span>
        <span></span>
      </div>

      <div className="card">
        <img
          className="rounded-top"
          style={{ height: "300px", objectFit: "cover" }}
          src={location?.state?.img}
          alt="classImgBarner"
        />

        <div className="card-body  px-3 pt-3" style={{ height: "auto"}}>
          {/* ====================== */}

          <div className="row d-flex justify-content-between border-bottom pb-2">
            <span className="col-lg-6 text-dark d-flex align-items-center justify-content-between">
              <h6 className="text-dark fs-6 fw-bold d-flex">
                Date:
                <p className="text-secondary fw-normal p-0">
                  Tue {location?.state?.date}-{location?.state?.start} GMT
                </p>
              </h6>

              <h6 className="text-dark fs-6 fw-bold d-flex">
                Duration:
                <p className="text-secondary fw-normal p-0">
                  {location?.state?.duration}
                </p>
              </h6>

              <h6 className="text-dark fs-6 fw-bold d-flex">
                Class Size:<p className="text-secondary fw-normal p-0">12</p>
              </h6>
            </span>
            <span className="col-lg-4 d-flex align-items-center justify-content-between">
              <button
                type="button"
                className="btn btn-sm btn-light text-success px-4"
              >
                Class Enrolled
              </button>
              <button type="button" className="btn btn-sm btn-primary px-4">
                Enrolled for Class
              </button>
            </span>
          </div>
          {/* =================== */}

          <div className="row d-flex justify-content-between border-bottom p-1">
          <span className="col-lg-7 text-dark d-flex align-items-center justify-content-between">
              <h6 className="text-dark fs-6 fw-bold d-flex align-items-center">
                Venue:
                <p className="fw-normal p-0">
                  https://meet.google.com/zix-rrjw-pfq
                </p>
              </h6>

              <h6 className="text-dark fs-6 fw-bold d-flex align-items-center">
              Instructor:
                <p className="fw-normal p-0">
                James Kaku
                </p>
              </h6>

            </span>

            <span className="col-lg-3"/>
          </div>

          {/* ==================== */}
          <div className="d-flex justify-content-between p-1 px-4">
             { ["Description", "Objective","Instructor","Class Recording"].map((data,index)=>(
                <button className={`btn btn-light ${classNav === data?"text-primary fw-bold":""}`} key={index} onClick={()=>setNav(data)}>{data}</button>
              ))}
          
          </div>

{/*======================  */}
        <ClassNavItem nav={classNav} data={location?.state}/>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
