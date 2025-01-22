import React from 'react'

const AccordionExample: React.FC = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col gap-4'>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" defaultChecked />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse bg-base-200">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border-base-300 border">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccordionExample