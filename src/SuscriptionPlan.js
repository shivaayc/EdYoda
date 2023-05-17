import React, { useState } from 'react';

const SubscriptionPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
  };

  const handleProceedToPay = () => {
    // Logic to handle payment
    console.log('Proceeding to pay:', selectedPlan);
  };

  return (
    <div className="card my-5">
      <div className="card-body">
        <h3>Select your subscription plan</h3>
        <div className={`card my-3 `}>
          <div className="card-body bg-secondary text-white">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="subscriptionPlan"
                value="plan1"
                checked={selectedPlan === 'plan'}
                disabled
                onChange={handlePlanChange}
              />
              <label className="form-check-label" htmlFor="subscriptionPlan1">
                12 Months Subscription
              </label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p>Total: ₹99</p>
              <p>₹8/mo</p>
            </div>
          </div>
        </div>
        <div className={`card my-3 ${selectedPlan === 'plan1' ? 'bg-success text-white' : ''}`}>
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="subscriptionPlan1"
                value="plan1"
                checked={selectedPlan === 'plan1'}
                onChange={handlePlanChange}
              />
              <label className="form-check-label" htmlFor="subscriptionPlan1">
                12 Months Subscription
              </label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p>Total: ₹99</p>
              <p>₹8/mo</p>
            </div>
          </div>
        </div>

        <div className={`card my-3 ${selectedPlan === 'plan2' ? 'bg-success text-white' : ''}`}>
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="subscriptionPlan2"
                value="plan2"
                checked={selectedPlan === 'plan2'}
                onChange={handlePlanChange}
              />
              <label className="form-check-label" htmlFor="subscriptionPlan2">
                6 Months Subscription
              </label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p>Total: ₹179</p>
              <p>₹15/mo</p>
            </div>
          </div>
        </div>

        <div className={`card my-3 ${selectedPlan === 'plan3' ? 'bg-success text-white' : ''}`}>
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="subscriptionPlan3"
                value="plan3"
                checked={selectedPlan === 'plan3'}
                onChange={handlePlanChange}
              />
              <label className="form-check-label" htmlFor="subscriptionPlan3">
                3 Months Subscription
              </label>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p>Total: ₹89</p>
              <p>₹33/mo</p>
            </div>
          </div>
        </div>

        <p>Subscription Fee: ₹18,500</p>
        <div className='alert alert-danger'>
          <p>Limited time offer: - ₹18,401</p>
          <p><svg width="25" height="25" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.6667 17.3333V37.3333L48 47.6666L50.6667 43.6666L35.6667 34.6666V17.3333H30.6667ZM60.6667 34V54H67.3334V34H60.6667ZM60.6667 60.6666V67.3333H67.3334V60.6666H60.6667ZM54 60.6666C48.3334 65 41.6667 67.3333 34 67.3333C15.6667 67.3333 0.666687 52.3333 0.666687 34C0.666687 15.6666 15.6667 0.666626 34 0.666626C50 0.666626 63.6667 12 66.6667 27.3333H59.6667C56.6667 16 46.3334 7.33329 34 7.33329C19.3334 7.33329 7.33335 19.3333 7.33335 34C7.33335 48.6666 19.3334 60.6666 34 60.6666C42 60.6666 49 57 54 51.6666V60.6666Z" fill="white"/>
</svg>
Offer valid till 25th March 2023</p>
        </div>
        <p>Total (Incl. of 18% GST): ₹149</p>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button className="btn btn-light border-danger" style={{ width: '48%', fontSize: '0.875em', padding: '0.5em 2em', boxShadow: 'none' }} onClick={() => console.log('Cancelled')}>
            Cancel
          </button>
          <button className="btn btn-success" style={{ width: '48%', fontSize: '0.625em', padding: '0.5em 2em', boxShadow: 'none' }} onClick={handleProceedToPay}>
            Proceed to Pay
          </button>
          
        </div>
      </div>
    </div>
    
  );
};

export default SubscriptionPlan;
