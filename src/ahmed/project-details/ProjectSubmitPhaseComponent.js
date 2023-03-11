import axios from "axios";
import React, { useState, useContext } from "react";
import { SyncLoader } from "react-spinners";
import { Storage } from "../../context/Store";

function ProjectSubmitPhaseComponent(props) {

  let store = useContext(Storage);
  let [file, setFile] = useState("");
  let [success, setSuccess] = useState("");

  let [ae_user_ID, ae_setUser_ID] = store.ae_User_ID;
  let baseUrl = store.URL;

  let [isLoading, setIsLoading] = useState(false);
  let [uploadStatus, setUploadStatus] = useState(false);
  let [proof, setProof] = useState("");
  let [projectFile, setProjectFile] = useState({});

  console.log(props.assessment);
  const handleChange = (e) => {
    let file = e.target.files[0].name;
    console.log(file);
    setProof(e.target.files[0].name);
    setProjectFile(e.target.files[0]);
    console.log(file);
    setUploadStatus(true);
  };

  let uploadFile = () => {
    setIsLoading(true)
    let url = baseUrl + "/assessments/submit";
    console.log(url); 

    const formData = new FormData();
    formData.append("resource", projectFile);
    formData.append("assessment_id", props.assessment);
    formData.append("phase_id", props.phaseId);
    formData.append("user_id", ae_user_ID);

    axios.postForm(url, formData).then((res) => {
      console.log(res.data);
      if(res.data.type!=="SUCCESS"){
        alert(res.data.msg)
      }else{
        alert("Project Uploaded Successfully")
        window.location.reload()
      }
      setIsLoading(false)
    }).catch((err) => { console.log(err); setIsLoading(false); alert("An error occured while uploading the project file, please try again") })

    
  };

  return (
    <>
      <div style={{ display: props.showSubmit }}>
        <p className="mx-5">{success}</p>
        <span
          className="mx-5"
          id="submit-count-ah"
          style={{ color: props.color }}
        >
          submission ({props.currentSubmission}/{props.maxSubmission})
        </span>{" "}
        <br></br>
        <div className="phase-upload-ah m-3 py-2">
          <section>
            <label for={"phaseUpload" + props.index}>
              <svg
                width="40"
                height="30"
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.375 29.125V20.875H26.875L20 12.625L13.125 20.875H18.625V29.125H11.75V29.0563C11.519 29.07 11.299 29.125 11.0625 29.125C8.32746 29.125 5.70443 28.0385 3.77046 26.1045C1.83649 24.1706 0.75 21.5475 0.75 18.8125C0.75 13.5215 4.75125 9.2095 9.8855 8.61825C10.3356 6.26506 11.5917 4.14227 13.4377 2.615C15.2837 1.08773 17.6041 0.251452 20 0.25C22.3962 0.251341 24.717 1.08752 26.5635 2.61475C28.4099 4.14198 29.6665 6.26483 30.1173 8.61825C35.2515 9.2095 39.2473 13.5215 39.2473 18.8125C39.2473 21.5475 38.1608 24.1706 36.2268 26.1045C34.2928 28.0385 31.6698 29.125 28.9348 29.125C28.7038 29.125 28.481 29.07 28.2473 29.0563V29.125H21.375Z"
                  fill="#474747"
                />
              </svg>
              <p>  {proof === "" ? `Upload zipped file for ${props.phaseNo ?? ""}` : proof}</p>
            </label>
            <input
              className="phaseUpload"
              id={"phaseUpload" + props.index}
              type="file"
              disabled={props.disableBtn}
              name="resource"
              value={file}
              onChange={handleChange}
            />
          </section>

        </div>
        <div className="text-center">
          <button
            disabled={props.disableBtn}
            id="submitPhaseBtn"
            class="btn btn-primary btn-icon-split shadow px-5 py-2"
            onClick={() => uploadFile()}
          >
            {isLoading ? <SyncLoader color="white" size={8} /> : `Submit Phase ${props.phaseNo ?? ""}`}
          </button>
        </div>
      </div>
    </>
  );
}

export default ProjectSubmitPhaseComponent;
