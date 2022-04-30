import './style.css';

import React from 'react';

function MiniCardComponent({
  className,
  title,
  value,
}: {
  className: string;
  title: string;
  value: { name: string; number: number }[];
}) {
  const composedClassName = ["container", className].join(" ");
  return (
    <div className={composedClassName}>
      <p className="title">{title}</p>
      <hr />
      {value.map((item) => (
        <p className="value" key={item.name}>
          {item.name}: {item.number}
        </p>
      ))}
    </div>
  );
}

export default MiniCardComponent;
