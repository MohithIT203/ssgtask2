import React, { useState } from "react";
import pic from './assets/bikeinspic.png';
import './bike1.css';
const carBrands = ["Audi", "BMW", "Tvs","Honda"];
const carModels = {
  Audi: ["A3", "A4", "A6", "Q3", "Q5"],
  BMW: ["X1", "X3", "X5", "3 Series", "5 Series"],
  Tvs: ["WEGO", "ZOOM", "BURGMAN", ""],
  Honda: ["CB-SHINE", "PASSION", "SPLENDOR"],
};
const years = Array.from({ length: 31 }, (_, i) => new Date().getFullYear() - i);
const variants = ["LXI", "VXI", "ZXI", "ZXI+"];
const rtos = ["MH-01", "MH-02", "KA-01", "KA-02", "DL-01", "TN-01", "UP-01"];

function BikeDropdowns() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedReg, setSelectedReg] = useState("");
  const [selectedManuf, setSelectedManuf] = useState("");
  const [selectedVar, setSelectedVar] = useState("");
  const [selectedRTO, setSelectedRTO] = useState("");

  return (
    <div className="bike1name">
      
      <h1>Enter your Bike details</h1>
      <div className="bike1box">
        <div className="bike1form-container">
          <div className="bike1left-column">
            {/* Car Brand */}
            <div className="bike1form-item">
              <label>Bike Brand</label>
              <select
                value={selectedBrand}
                onChange={(e) => {
                  setSelectedBrand(e.target.value);
                  setSelectedModel("");
                }}
              >
                <option value="" disabled>Select Bike Brand</option>
                {carBrands.map((brand, index) => (
                  <option key={index} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Model */}
            <div className="bike1form-item">
              <label>Model</label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                disabled={!selectedBrand}
              >
                <option value="" disabled>Select Bike Model</option>
                {selectedBrand && carModels[selectedBrand].map((model, index) => (
                  <option key={index} value={model}>{model}</option>
                ))}
              </select>
            </div>

            {/* CNG */}
            <div className="bike1form-item">
              <label>CNG</label>
              <input type="text" />
            </div>
          </div>

          <div className="bike1right-column">
            {/* Registration Year */}
            <div className="bike1form-item">
              <label>Registration Year</label>
              <select 
                value={selectedReg}
                onChange={(e) => setSelectedReg(e.target.value)}
              >
                <option value="" disabled>Select Registration Year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Manufacture Year */}
            <div className="bike1form-item">
              <label>Manufacture Year</label>
              <select 
                value={selectedManuf}
                onChange={(e) => setSelectedManuf(e.target.value)}
              >
                <option value="" disabled>Select Manufacture Year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Variant */}
            <div className="bike1form-item">
              <label>Select Variant</label>
              <select 
                value={selectedVar}
                onChange={(e) => setSelectedVar(e.target.value)}
              >
                <option value="" disabled>Select Variant</option>
                {variants.map((variant, index) => (
                  <option key={index} value={variant}>{variant}</option>
                ))}
              </select>
            </div>

            {/* RTO */}
            <div className="bike1form-item">
              <label>Select RTO</label>
              <select 
                value={selectedRTO}
                onChange={(e) => setSelectedRTO(e.target.value)}
              >
                <option value="" disabled>Select RTO</option>
                {rtos.map((rto, index) => (
                  <option key={index} value={rto}>{rto}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <button className="bike1next-button">Next</button>
        </div>
        <img src={pic} className="Bikeimg"></img>
<div>
      <form className="bike1content">
        <h1 className="bike1title">WHY BIKE INSURANCE</h1>
        <p className="content1bike1">
          <b>PROTECTION AGAINST LOSS: </b>Bike insurance safeguards against
          financial loss from accidents, theft, or damage to your vehicle.
        </p>
        <p className="content2bike1">
          <b>LIABIALITY COVERAGE: </b> Covers legal costs and damages if you're
          responsible for an accident that injures others or damages their
          property.
        </p>
        <p className="content3bike1">
          <b>COMPREHENSIVE AND COLLISION: </b>Comprehensive covers non-collision
          incidents (theft, vandalism), while collision covers damage from
          accidents.
        </p>
        <p className="content4bike1">
          <b>UNINSURED MOTORIST COVERAGE: </b>Protects you if you're involved in
          an accident with a driver who doesn’t have insurance.
        </p>
      </form>
      
      <form className="bike1quote">
        <b className="bike1quote1">compare and choose your insurance now</b>
        <button className="bike1quote_button">
          <b>GET QUOTE</b>
        </button>
      </form>
      </div>
      
    </div>
  );
}

export default BikeDropdowns;
