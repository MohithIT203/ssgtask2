import React, { useState } from "react";
import './bike2.css';
function CarOptions() {
  const [selectedOptions, setSelectedOptions] = useState({
    planType: { comprehensive: false, thirdParty: false },
    benefits: { roadAssistance: false, engineProtection: false, zeroDepreciation: false, assistance: false },
    additionalCover: { paCover: false, driverCover: false, accessoriesCover: false },
  });

  const handleCheckboxChange = (section, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [section]: {
        ...prevOptions[section],
        [option]: !prevOptions[section][option],
      },
    }));
  };

  return (
    <div className="insurance-container">
        
      <h1 className="h1">choose your preferences</h1>
      <div className="insurance-content">
        {/* Left Column for Plan Type and Benefits */}
        <div className="left-column">
          <div className="insurance-section">
            <h3>Plan Type</h3>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.planType.comprehensive}
                  onChange={() => handleCheckboxChange("planType", "comprehensive")}
                />
                Comprehensive
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.planType.thirdParty}
                  onChange={() => handleCheckboxChange("planType", "thirdParty")}
                />
                Third Party
              </label>
            </div>
          </div>

          <div className="insurance-section">
            <h3>Benefits</h3>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.benefits.roadAssistance}
                  onChange={() => handleCheckboxChange("benefits", "roadAssistance")}
                />
                Road Assistance
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.benefits.engineProtection}
                  onChange={() => handleCheckboxChange("benefits", "engineProtection")}
                />
                Engine Protection
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.benefits.zeroDepreciation}
                  onChange={() => handleCheckboxChange("benefits", "zeroDepreciation")}
                />
                Zero Depreciation
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.benefits.assistance}
                  onChange={() => handleCheckboxChange("benefits", "assistance")}
                />
                Assistance
              </label>
            </div>
          </div>
        </div>

        {/* Right Column for Additional Cover */}
        <div className="right-column">
          <div className="insurance-section">
            <h3>Additional Cover</h3>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.additionalCover.paCover}
                  onChange={() => handleCheckboxChange("additionalCover", "paCover")}
                />
                Owner-Driver PA Cover
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.additionalCover.driverCover}
                  onChange={() => handleCheckboxChange("additionalCover", "driverCover")}
                />
                Paid Driver Cover
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.additionalCover.accessoriesCover}
                  onChange={() => handleCheckboxChange("additionalCover", "accessoriesCover")}
                />
                Accessories Cover
              </label>
            </div>
          </div>

          {/* Quote Button */}
          <button className="quote-button">Get Quote</button>
        </div>
        <div>
      <form className="content">
        <h1 className="title">WHY CAR INSURANCE</h1>
        <p className="content1">
          <b>PROTECTION AGAINST LOSS: </b>Car insurance safeguards against
          financial loss from accidents, theft, or damage to your vehicle.
        </p>
        <p className="content2">
          <b>LIABIALITY COVERAGE: </b> Covers legal costs and damages if you're
          responsible for an accident that injures others or damages their
          property.
        </p>
        <p className="content3">
          <b>COMPREHENSIVE AND COLLISION: </b>Comprehensive covers non-collision
          incidents (theft, vandalism), while collision covers damage from
          accidents.
        </p>
        <p className="content4">
          <b>UNINSURED MOTORIST COVERAGE: </b>Protects you if you're involved in
          an accident with a driver who doesn’t have insurance.
        </p>
      </form>

      <form className="quote">
        <b className="quote1">compare and choose your insurance now</b>
        <button className="quote_button">
          <b>GET QUOTE</b>
        </button>
      </form>
      </div>
      </div>
    </div>
  );
}

export default CarOptions;
