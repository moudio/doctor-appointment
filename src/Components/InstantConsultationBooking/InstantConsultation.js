import React, { useCallback, useEffect, useState } from "react";
import "./InstantConsultation.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import FindDoctorSearchIC from "../FindDoctorSearchIC/FindDoctorSearch";
import DoctorCardIC from "./DoctorCardIC/DoctorCardIC";

const InstantConsultation = () => {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    const getDoctorsDetails = useCallback(() => {
        fetch("https://api.npoint.io/9a5543d36f1460da2f63")
            .then((res) => res.json())
            .then((data) => {
                if (searchParams.get("speciality")) {
                    // window.reload()
                    const filtered = data.filter((doctor) => doctor.speciality.toLowerCase() === searchParams.get("speciality").toLowerCase());

                    setFilteredDoctors(filtered);

                    setIsSearched(true);
                    window.reload();
                } else {
                    setFilteredDoctors([]);
                    setIsSearched(false);
                }
                setDoctors(data);
            })
            .catch((err) => console.log(err));
    }, [searchParams]);

    const handleSearch = (searchText) => {
        if (searchText === "") {
            setFilteredDoctors([]);
            setIsSearched(false);
        } else {
            const filtered = doctors.filter((doctor) =>
                //
                doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredDoctors(filtered);
            setIsSearched(true);
            window.location.reload();
        }
    };
    const navigate = useNavigate();
    useEffect(() => {
        getDoctorsDetails();
        // const authtoken = sessionStorage.getItem("auth-token");
        // if (!authtoken) {
        //     navigate("/login");
        // }
    }, [searchParams, getDoctorsDetails]);

    return (
        <div className="centered">
            <div className="searchpage-container">
                <FindDoctorSearchIC onSearch={handleSearch} />
                <div className="search-results-container">
                    {isSearched ? (
                        <div className="centered">
                            <h2>
                                {filteredDoctors.length} doctors are available {searchParams.get("location")}
                            </h2>
                            <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                            {filteredDoctors.length > 0 ? filteredDoctors.map((doctor) => <DoctorCardIC className="doctorcard" {...doctor} key={doctor.name} />) : <p>No doctors found.</p>}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </div>
    );
};

export default InstantConsultation;
