import {
  Home,
  X,
  Book,
  Briefcase,
  CreditCard,
  UserCheck,
  Bell,
  Settings,
  Bookmark,
  Youtube,
} from "react-feather";
import React, { useEffect, useState } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";
import $ from "jquery";
import axios from "axios";

class Nav extends React.Component {
  constructor() {
    super();

    axios
      .get(
        "https://reworkacademy.co/app/v2/students/" +
          localStorage.getItem("userId")
      )
      .then((res) => {
        this.setState({ userData: res.data });
        if (res.data.course) {
          this.setState({ courseData: res.data.course });
          this.setState({ duration: res.data.course.duration });
        }
      });

    this.state = {
      userData: {},
      courseData: {},
      duration: "",
    };
  }
  render(props) {
    const sideBarClick = () => {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");

      $("#wrapper").removeClass("page-wrapper");
      $("#wrapper").addClass("mobile-wrapper");
      $(".sidebar").addClass("mobile-sidebar");

      if ($(".sidebar").hasClass("toggled")) {
        $(".sidebar").hide();
        $(".collapse").hide();
      } else {
        $(".sidebar").show();
        $(".collapse").show();
      }
    };
    if ($(window).width() < 968 && !$(".sidebar").hasClass("toggled")) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");

      $("#wrapper").removeClass("page-wrapper");
      $("#wrapper").addClass("mobile-wrapper");
      $(".sidebar").addClass("mobile-sidebar");

      if ($(".sidebar").hasClass("toggled")) {
        $(".sidebar").hide();
        $(".collapse").hide();
      } else {
        $(".sidebar").show();
        $(".collapse").show();
      }
    }

    let navs = [
      {
        id: 1,
        name: "Assessments",
        icon: <Bookmark size={18} />,
        link: "/dashboard",
        has_sub: false,
        sub_link: null,
        notice: 0,
      },
      {
        id: 2,
        name: "Live Classes",
        icon: <Youtube size={18} />,
        link: "/live-classes",
        has_sub: false,
        sub_link: "/module-details-",
        notice: 0,
      },
      {
        id: 3,
        name: "Projects",
        icon: <Briefcase size={18} />,
        link: "/modules",
        has_sub: false,
        sub_link: "/module-details-",
        notice: 0,
      },
      // {
      //   id: 3,
      //   name: "Assignments",
      //   icon: <Briefcase size={18} />,
      //   link: "/assignments",
      //   sub_link: "/assignment-details-",
      //   has_sub: false,
      //   notice: 0,
      // },
      // {
      //   id: 4,
      //   name: "Projects",
      //   icon: <Briefcase size={18} />,
      //   link: "/projects",
      //   has_sub: false,
      //   sub_link: "/project-details-",
      //   notice: 0,
      // },

      // {
      //   id: 5,
      //   name: "Payments",
      //   icon: <Book size={18} />,
      //   link: "/payment",
      //   sub_link: "/receipt-",
      //   has_sub: false,
      //   notice: 0,
      // },
      // {
      //   id: 6,
      //   name: "Attendance",
      //   icon: <UserCheck size={18} />,
      //   link: "/attendance",
      //   has_sub: false,
      //   sub_link: null,
      //   notice: 0,
      // },
      // {
      //   id: 7,
      //   name: "Notification",
      //   icon: <Bell size={18} />,
      //   link: "/notification",
      //   has_sub: false,
      //   sub_link: null,
      //   notice: 0,
      // },
      // {
      //   id: 8,
      //   name: "Settings",
      //   icon: <Settings size={18} />,
      //   link: "/Settings",
      //   has_sub: true,
      // },
    ];

    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
        ref="sidebar"
      >
        <div
          className="sidebar-brand d-flex align-items-center justify-content-between"
          to="#"
        >
          <div className="bg-white"></div>
          <div className="d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon  ">
              <Link to="/dashboard">
                {" "}
                <img src="assets/img/logo.png" alt="" />
              </Link>
            </div>
            <div className="sidebar-brand-text mx-1">
              <Link to="/dashboard" className="text-black">
                Rework Portal
              </Link>
            </div>
          </div>
          <button className="rounded-circle border-0 " id="sidebarToggle">
            <X size={18} onClick={sideBarClick} />
          </button>
        </div>

        <Link className="sidebar-profile" to="/profile">
          <img src="assets/img/profile-default.png" alt="" />
          <div className="user-details text-center">
            <h4 className="name-text">
              {this.state.userData.first_name} {this.state.userData.last_name}
            </h4>
            <h6 className="email-text">{this.state.userData.email}</h6>
            <h6 className="email-text">{this.state.userData.phone}</h6>

            <div className="d-flex">
              {props?.entry? (
                <>
                  <div className="col">
                    <h3 className="">
                      {this.state.duration != ""
                        ? this.state.duration.replace("months", "")
                        : ""}
                    </h3>
                    <small>Months</small>
                  </div>
                  <div className="col">
                    <div className="vertical-divider"></div>
                  </div>
                  <div className="col">
                    <h3 className="">{this.state.courseData.lectures}</h3>
                    <small>Modules</small>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </Link>

        {navs.map((e) => {
          if (window.location.pathname == "/entryview") {
            return <div></div>;
          }
          if (e.name == "Settings") {
            return (
              <>
                <hr className="sidebar-divider" />
                <li
                  className={`nav-item ${
                    window.location.pathname == "/profile" ||
                    window.location.pathname == "/password"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    className="nav-link collapsed"
                    to="#"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    <Settings size={18} />
                    <span>Settings</span>
                  </Link>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionSidebar"
                  >
                    <div className="bg-white py-2 collapse-inner rounded">
                      <Link className="collapse-item" to="/profile">
                        Profile
                      </Link>
                      <Link className="collapse-item" to="/password">
                        Password
                      </Link>
                    </div>
                  </div>
                </li>
              </>
            );
          }

          return (
            <li
              className={`nav-item ${
                window.location.pathname == e.link ||
                window.location.pathname.includes(e.sub_link)
                  ? "active"
                  : ""
              }`}
            >
              <Link className="nav-link" to={e.link}>
                {e.icon}
                <span>{e.name}</span>{" "}
                {e.notice > 0 ? (
                  <span className="nav-notice">{e.notice}</span>
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Nav;