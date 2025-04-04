import React from 'react';

const BadgeExample: React.FC = () => {
  return (
    <div className="flex gap-4">
      <div className="badge">default</div>
      <div className="badge badge-neutral">neutral</div>
      <div className="badge badge-primary">primary</div>
      <div className="badge badge-secondary">secondary</div>
      <div className="badge badge-accent">accent</div>
      <div className="badge badge-ghost">ghost</div>
    </div>
  );
};

export default BadgeExample;
