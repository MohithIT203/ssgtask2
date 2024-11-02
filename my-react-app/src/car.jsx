import React, { useState } from "react";
import './Car.css'
const carBrands = ["Audi", "BMW", "Chevrolet", "Ford", "Honda", "Hyundai", "Toyota", "Volkswagen"];
const carModels = {
  Audi: ["A3", "A4", "A6", "Q3", "Q5"],
  BMW: ["X1", "X3", "X5", "3 Series", "5 Series"],
  Chevrolet: ["Spark", "Beat", "Cruze", "Tavera"],
  Ford: ["Fiesta", "EcoSport", "Endeavour"],
  Honda: ["Civic", "Accord", "CR-V"],
  Hyundai: ["i10", "i20", "Creta", "Tucson"],
  Toyota: ["Corolla", "Camry", "Fortuner"],
  Volkswagen: ["Polo", "Vento", "Tiguan"]
};
const years = Array.from({ length: 31 }, (_, i) => new Date().getFullYear() - i);
const variants = ["Standard", "Deluxe", "Sports", "Limited"];
const rtos = ["MH-01", "MH-02", "KA-01", "KA-02", "DL-01", "TN-01", "UP-01"];

function CarDropdowns() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedReg, setSelectedReg] = useState("");
  const [selectedManuf, setSelectedManuf] = useState("");
  const [selectedVar, setSelectedVar] = useState("");
  const [selectedRTO, setSelectedRTO] = useState("");

  return (
    <div className="dropdown-form">
      {/* Car Brand Dropdown */}
      <select
        value={selectedBrand}
        onChange={(e) => {
          setSelectedBrand(e.target.value);
          setSelectedModel("");
        }}
        className="car-brand-dropdown"
      >
        <option value="" disabled>Select Car Brand</option>
        {carBrands.map((brand, index) => (
          <option key={index} value={brand}>{brand}</option>
        ))}
      </select>

      {/* Car Model Dropdown */}
      <select
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
        className="car-model-dropdown"
        disabled={!selectedBrand}
      >
        <option value="" disabled>Select Car Model</option>
        {selectedBrand && carModels[selectedBrand].map((model, index) => (
          <option key={index} value={model}>{model}</option>
        ))}
      </select>

      {/* Registration Year Dropdown */}
      <select 
        value={selectedReg}
        onChange={(e) => setSelectedReg(e.target.value)}
        className="reg-year-dropdown"
      >
        <option value="" disabled>Select Registration Year</option>
        {years.map((year, index) => (
          <option key={index} value={year}>{year}</option>
        ))}
      </select>

      {/* Manufacture Year Dropdown */}
      <select 
        value={selectedManuf}
        onChange={(e) => setSelectedManuf(e.target.value)}
        className="manuf-year-dropdown"
      >
        <option value="" disabled>Select Manufacture Year</option>
        {years.map((year, index) => (
          <option key={index} value={year}>{year}</option>
        ))}
      </select>

      {/* Variant Dropdown */}
      <select 
        value={selectedVar}
        onChange={(e) => setSelectedVar(e.target.value)}
        className="variant-dropdown"
      >
        <option value="" disabled>Select Variant</option>
        {variants.map((variant, index) => (
          <option key={index} value={variant}>{variant}</option>
        ))}
      </select>

      {/* RTO Dropdown */}
      <select 
        value={selectedRTO}
        onChange={(e) => setSelectedRTO(e.target.value)}
        className="rto-dropdown"
      >
        <option value="" disabled>Select RTO</option>
        {rtos.map((rto, index) => (
          <option key={index} value={rto}>{rto}</option>
        ))}
      </select>
    </div>
  );
}

export default CarDropdowns;
