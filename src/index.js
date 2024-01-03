import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import Navigation from "./Components/Navigation/Navigation";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "instant-consultation",
        element: <InstantConsultation />,
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Navigation />
        <RouterProvider router={router} />
        {/* <App /> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
