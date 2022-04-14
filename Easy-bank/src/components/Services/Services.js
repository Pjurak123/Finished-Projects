import React from "react";
import { service } from "./Service";
import "./Services.css";

function Services() {
  return (
    <div className="service-container">
      <div className="why-container">
        <h2 className="why_h2">Why choose Easybank?</h2>
        <p className="why_p">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="service-row">
        {service.map((service, index) => {
          return (
            <div key={index} className="service">
              <img
                src={service.img}
                alt="service-images"
                className="service-image"
              />
              <h3>{service.serviceTitle}</h3>
              <p>{service.serviceParagraph}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
