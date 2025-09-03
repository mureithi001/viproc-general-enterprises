import React from 'react';

const WaterRipples = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="ripple-container">
        <div className="ripple ripple-1"></div>
        <div className="ripple ripple-2"></div>
        <div className="ripple ripple-3"></div>
      </div>
    </div>
  );
};

export default WaterRipples;