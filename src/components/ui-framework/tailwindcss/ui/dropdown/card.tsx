import React from 'react';

const CardDropdown: React.FC = () => {
  return (
    <div className="dropdown">
      <div className="btn m-1" role="button" tabIndex={0}>
        Click
      </div>
      <div
        className="dropdown-content card card-compact bg-primary text-primary-content z-[1] w-64 p-2 shadow"
        tabIndex={0}
      >
        <div className="card-body">
          <h3 className="card-title">Card title!</h3>
          <p>you can use any element as a dropdown.</p>
        </div>
      </div>
    </div>
  );
};

export default CardDropdown;
