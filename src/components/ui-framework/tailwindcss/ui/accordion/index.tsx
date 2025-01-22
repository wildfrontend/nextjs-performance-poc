import React from 'react';

const AccordionExample: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="collapse bg-base-200">
          <input defaultChecked name="my-accordion-1" type="radio" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input name="my-accordion-1" type="radio" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input name="my-accordion-1" type="radio" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input defaultChecked name="my-accordion-4" type="radio" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input name="my-accordion-4" type="radio" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input name="my-accordion-4" type="radio" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionExample;
