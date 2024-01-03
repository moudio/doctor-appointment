import React, { useState } from "react";

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [date, setDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phoneNumber, date, selectedSlot });
        setName("");
        setPhoneNumber("");
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <h1>Your appointment with {doctorName}</h1>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="appointmentDate">Date of Appointment:</label>
                <input type="date" id="appointmentDate" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="timeSlot">Book a time slot:</label>
                <input type="time" id="timeSlot" value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)} required />
            </div>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default AppointmentForm;
