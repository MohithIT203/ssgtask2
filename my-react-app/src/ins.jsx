import React from 'react';

const InsuranceCard = () => {
  return (
    <div className="insurance-card">
      <div className="logo">
        <img src="https://www.sbilife.co.in/assets/images/logo.svg" alt="SBI Life Logo" />
      </div>
      <div className="details">
        <h3>Cashless hosp-252</h3>
        <p>No Room rent</p>
        <p>No limitation of claim</p>
        <p>Policy period - 5 yrs</p>
      </div>
      <div className="benefits">
        <p>Cover amount- 5 lakh</p>
        <p>Maturity amount- 7.5 lakh</p>
        <button className="premium">₹12,999/year</button>
        <p style={{ color: 'red' }}>5% discount for first year</p>
      </div>
      <button className="view-more">View More</button>
    </div>
  );
};

export default InsuranceCard;