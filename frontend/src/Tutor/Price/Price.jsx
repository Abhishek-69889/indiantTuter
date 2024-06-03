import React from 'react';
import './Price.css';

function Price() {
  return (
    <div className="container">
      <div className="header">
        <img src="/Logo.png" alt="Logo" />
        <h1>INDIAN TUTOR EXPERT</h1>
      </div>
      <div className="plans">
        <div className="plan basic">
          <h2>BASIC</h2>
          <h3>₹ 2000</h3>
          <p>One - Time Payment</p>
          <button>Select</button>
          <ul>
            <li>Contact View: 10</li>
            <li>Validity: 90 Days</li>
            <li>Notification: SMS & Email</li>
            <li>15 Minutes Early: ❌</li>
            <li>Parents Can Contact: ❌</li>
          </ul>
          <button className="buy-button">BUY</button>
        </div>
        <div className="plan advance">
          <h2>ADVANCE</h2>
          <h3>₹ 3000</h3>
          <p>One - Time Payment</p>
          <button>Select</button>
          <ul>
            <li>Contact View: 20</li>
            <li>Validity: 150 Days</li>
            <li>Notification: SMS & Email</li>
            <li>15 Minutes Early: ☑</li>
            <li>Parents Can Contact: ❌</li>
          </ul>
          <button className="buy-button">BUY</button>
        </div>
        <div className="plan pro">
          <h2>PRO</h2>
          <h3>₹ 5000</h3>
          <p>One-Time Payment</p>
          <button>Select</button>
          <ul>
            <li>Contact View: 30</li>
            <li>Validity: 180 Days</li>
            <li>Notification: SMS & Email</li>
            <li>15 Minutes Early: ☑</li>
            <li>Parents Can Contact: ☑</li>
          </ul>
          <button className="buy-button">BUY</button>
        </div>
      </div>
    </div>
  );
}

export default Price;