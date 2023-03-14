import React from "react";
import Img1 from "../assets/imgs/computer.jpg";
import { Users, Star, PlayCircle } from "react-feather";

const ClassNavItem = (props) => {
  switch (props.nav) {
    case "Instructor":
      return (
        <div className="text-dark mt-2">
          <h4 className="fw-bold my-2">Instructor</h4>
          <div className="d-flex flex-row align-items-center mb-3">
            <img
              className="rounded-circle me-4"
              style={{ width: "150px", height: "150px" }}
              src={Img1}
              alt="instructorImg"
            />
            <span className="d-flex flex-column">
              <h5 className="fw-bold text-dark">JAMES K. BALABLU</h5>
              <p>
                AWS Certified Cloud Practitioner,Solutions Architect,Developer
              </p>
              <span className="my-2">
                <Users size={"16px"} /> 31 Classes Taught
              </span>
              <span className="my-2">
                <Star size={"16px"} /> 4.7 Instructor Rating
              </span>
              <span className="my-2">
                <PlayCircle size={"16px"} /> 12 Courses
              </span>
            </span>
          </div>

          <p>
            JAMES K. BALABLU Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Labore repellat, enim omnis voluptatum eveniet, voluptatem
            obcaecati facilis eos rem libero repellendus exercitationem iure est
            ex! Sit possimus at culpa necessitatibus! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Labore repellat, enim omnis
            voluptatum eveniet, voluptatem obcaecati facilis eos rem libero
            repellendus exercitationem iure est ex! Sit possimus at culpa
            necessitatibus! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Labore repellat, enim omnis voluptatum eveniet, voluptatem
            obcaecati facilis eos rem libero repellendus exercitationem iure est
            ex! Sit possimus at culpa necessitatibus!
          </p>
        </div>
      );
      break;
    case "Class Recording":
      return <div>ClassNavItem</div>;
      break;
    case "Objective":
      return (
        <div className="text-dark mt-2">
          <h4 className="fw-bold">What you'll learn</h4>
          <ul style={{ listStyle: "" }}>
            <li>
              FULLY UPDATED FOR CLF-C01: Pass the AWS Certified Cloud
              Practitioner Certification
            </li>
            <li>Full Practice Exam with Explanations included!</li>
            <li>
              Learn the AWS Fundamentals (EC2, ELB, ASG, RDS, ElastiCache, S3)
            </li>
            <li>All 300+ slides available as downloadable PDF</li>
          </ul>
        </div>
      );
      break;
    default:
      return (
        <div className="text-dark mt-2">
          <h4 className="fw-bold">{props.data?.title}</h4>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            recusandae repudiandae quam saepe inventore vero rem accusantium
            minima delectus quibusdam ex ducimus quaerat reprehenderit, maxime
            libero! Saepe corrupti iste deleniti? Incidunt, nostrum. Deleniti,
            tenetur harum! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Error recusandae repudiandae quam saepe inventore vero rem
            accusantium minima delectus quibusdam ex ducimus quaerat
            reprehenderit, maxime libero! Saepe corrupti iste deleniti?
            Incidunt, nostrum. Deleniti, tenetur harum!
          </p>
        </div>
      );
      break;
  }
};

export default ClassNavItem;
