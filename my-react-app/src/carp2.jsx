import React, { useState } from "react";
import "./carp2.css";

function InsuranceOptions() {
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
      </div>
    </div>
  );
}

export default InsuranceOptions;
