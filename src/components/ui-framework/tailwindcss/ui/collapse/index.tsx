import React from 'react'

const CollapseExample: React.FC = () => {
  return (
    <>
      <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">Click to open/close</summary>
        <div className="collapse-content">
          <p>content</p>
        </div>
      </details>
      <div className="bg-base-200 collapse">
        <input type="checkbox" className="peer" />
        <div
          className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Click me to show/hide content
        </div>
        <div
          className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>hello</p>
        </div>
      </div>
    </>
  )
}