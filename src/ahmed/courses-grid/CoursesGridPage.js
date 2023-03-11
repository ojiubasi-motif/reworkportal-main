import React, { useEffect, useState, useContext } from "react";
import Footer from "../../template/Footer";
import Nav from "../../template/Nav";
import Topbar from "../../template/Topbar";
import CoursesGridComponent from "./CoursesGridComponent";
import '../assets/css/course-grid.css';
import LoadingMsg from "../../components/LoadingMsg";
import { Storage } from "../../context/Store";

function CoursesGridPage() {
    let store = useContext(Storage);
    let [baseUrl] = store.URL;
    let [courses, setCourses] = useState([]);
    let [completedCourses, setCompletedCourses] = useState([]);

    useEffect(() => {
        loadPendingCourses();
        loadCompletedCourses();
        getUSer();
        getUSer2();
    }, []);

    let [ae_user_ID, ae_setUser_ID] = store.ae_User_ID;

    let loadPendingCourses = () => {
        let url = baseUrl + "/students/" + ae_user_ID + "/courses";
        console.log(url);
        fetch(url)
            .then((e) => e.json())
            .then((res) => setCourses(res.modules))
    };

    let loadCompletedCourses = () => {
        let url = baseUrl + "/students/" + ae_user_ID + "/courses";
        fetch(url)
            .then((e) => e.json())
            .then((res) => setCompletedCourses(res.completed))
    };

    let getUSer = () => {
        let url = baseUrl + "/students/" + ae_user_ID + "/info"
        fetch(url)
            .then((e) => e.json())
            .then((res) =>
                localStorage.setItem("userBatch", res.batch.name)
            );
    };
    
    let getUSer2 = () => {
        let url = baseUrl + "/students/" + ae_user_ID + "/info"
        fetch(url)
            .then((e) => e.json())
            .then((res) =>
                localStorage.setItem("userSlot", res.batch.session)
            );
    };

    return <>
        <div id="wrapper" className="page-wrapper">
            <Nav />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Topbar pageName="Assigned Modules" />

                    <div className="container-fluid">
                        {courses.length === 0 ?
                            <LoadingMsg  /> :
                            <div>
                                <div className="row">
                                    <div className="course-scroll-ah">
                                        {courses.map((e, i) => {
                                            let progressDisplay;
                                            let startDisplay;
                                            if (e.status === "CURRENT") {
                                                startDisplay = "none"
                                            } else {
                                                progressDisplay = 'none'
                                            }
                                            return (
                                                <div class="col-lg-3 col-md-6 col-12">
                                                    <div class="card mb-4">
                                                        <CoursesGridComponent
                                                            key={e.id}
                                                            alias={e.alias}
                                                            img={e.img}
                                                            title={e.module}
                                                            presentModule={e.topics_completed}
                                                            totalModule={e.topics_total}
                                                            progress={e.progress}
                                                            duration={e.duration}
                                                            endDate={e.estimated_end_date}
                                                            startDate={e.start_date}
                                                            status={e.status}
                                                            progressDisplay={progressDisplay}
                                                            startDisplay={startDisplay}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>

                                <div className="course-completed-ah mx-2">
                                    <div className="row">
                                        <h4>Completed Modules</h4>
                                    </div>
                                    <div className="row">
                                        {completedCourses.length == 0 ?
                                            <h3 className="text-center">No Completed Module</h3> :
                                            completedCourses.map((e, i) => {
                                                return (
                                                    <div class="col-lg-3 col-md-6 col-12">
                                                        <div class="card mb-4">
                                                            <CoursesGridComponent
                                                                key={e.id}
                                                                alias={e.alias}
                                                                img={e.img}
                                                                title={e.name}
                                                                presentModule={e.topics_completed}
                                                                totalModule={e.topics_total}
                                                                progress={e.progress}
                                                                duration={e.duration}
                                                                endDate={e.estimated_end_date}
                                                                startDate={e.start_date}
                                                                status={e.status}
                                                                startDisplay={"none"}
                                                            />
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                    </div>
                                </div>
                            </div>
                        }



                    </div>
                </div>

                <Footer />
            </div>
        </div>
    </>
}

export default CoursesGridPage;
