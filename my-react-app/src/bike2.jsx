import React, { useState } from "react";
import pic from './assets/bikeinspic.png';
import './bike2.css'

function BikeOptions() {
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

  const handleQuoteClick = () => {
    // Handle the quote logic here, e.g., send the selected options to an API or log them
    console.log("Selected Options: ", selectedOptions);
  };

  return (
    <div className="bike2insurance-container">
      <h1 className="bike2h1">Choose Your Preferences</h1>
      <div className="bike2insurance-content">
        <div className="bike2left-column">
          <div className="bike2insurance-section">
            <h3>Plan Type</h3>
            <div className="bike2checkbox-group">
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

          <div className="bike2insurance-section">
            <h3>Benefits</h3>
            <div className="bike2checkbox-group">
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

        <div className="bike2right-column">
          <div className="bike2insurance-section">
            <h3>Additional Cover</h3>
            <div className="bike2checkbox-group">
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
          <button className="bike2quote-button" onClick={handleQuoteClick}>Get Quote</button>
        </div>
      </div>

      <div className="bike2Content">
        <h1 className="bike2title">Why Bike Insurance</h1>
        <p className="content1bike2">
          <b>Protection Against Loss:</b> Bike insurance safeguards against financial loss from accidents, theft, or damage to your vehicle.
        </p>
        <p className="content2bike2">
          <b>Liability Coverage:</b> Covers legal costs and damages if you're responsible for an accident that injures others or damages their property.
        </p>
        <p className="content3bike2">
          <b>Comprehensive and Collision:</b> Comprehensive covers non-collision incidents (theft, vandalism), while collision covers damage from accidents.
        </p>
        <p className="content4bike2">
          <b>Uninsured Motorist Coverage:</b> Protects you if you're involved in an accident with a driver who doesn’t have insurance.
        </p>
      </div>

      <form className="Quote">
        <b className="Quote1">Compare and choose your insurance now</b>
        <button type="button" className="Quote_button" onClick={handleQuoteClick}>
          <b>GET QUOTE</b>
        </button>
      </form>
      
      <img src={pic} alt="Bike Insurance" className="Bikeimg2" />
    </div>
  );
}

export default BikeOptions;
