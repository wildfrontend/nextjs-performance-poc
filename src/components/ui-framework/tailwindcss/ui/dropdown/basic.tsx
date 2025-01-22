import React from 'react';

const BasicDropdown: React.FC = () => {
  return (
    <div className="dropdown">
      <div className="btn m-1" role="button" tabIndex={0}>
        Click
      </div>
      <ul
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        tabIndex={0}
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default BasicDropdown;
