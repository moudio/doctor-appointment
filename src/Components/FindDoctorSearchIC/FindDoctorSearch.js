import React, { useState } from "react";
import "./FindDoctorSearch.css";
import doctorsImg from "../../img/doctors.png";
import stethoscope from "../../img/stethoscope.png";
import { useNavigate } from "react-router-dom";
const initSpeciality = ["Dentist", "Gynecologist/obstetrician", "General Physician", "Dermatologist", "Ear-nose-throat (ent) Specialist", "Homeopath"];

const FindDoctorSearchIC = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState("");
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();
    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/instant-consultation?speciality=${speciality}`);
        window.location.reload();
    };
    return (
        <div className="finddoctor">
            <center>
                <h1>Find your next doctor and consult instantly</h1>
                <div>
                    {" "}
                    <img className="doctorsIcon" src={doctorsImg} alt="" />
                    {/* <i style={{ color: "#000000", fontSize: "20rem" }} className="fa fa-user-md"></i> */}
                </div>{" "}
                <div className="home-search-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className="doctor-search-box">
                        {/* <p>Perform a search to see the results.</p> */}

                        <input
                            type="text"
                            className="search-doctor-input-box"
                            placeholder="Search doctors, clinics, hospitals, etc."
                            onFocus={() => setDoctorResultHidden(false)}
                            onBlur={() => setDoctorResultHidden(true)}
                            value={searchDoctor}
                            onChange={(e) => setSearchDoctor(e.target.value)}
                        />

                        <div className="findiconimg">
                            <img className="findIcon" src={process.env.PUBLIC_URL + "/images/search.svg"} alt="" />

                            <i className="fa fa-search"></i>
                        </div>
                        <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {specialities.map((speciality) => (
                                <div className="search-doctor-result-item" key={speciality} onMouseDown={() => handleDoctorSelect(speciality)}>
                                    <span>
                                        <img src={stethoscope} alt="" style={{ height: "20px", width: "20px" }} width="20" />
                                    </span>
                                    <span>{speciality}</span>
                                    <span>SPECIALITY</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default FindDoctorSearchIC;
