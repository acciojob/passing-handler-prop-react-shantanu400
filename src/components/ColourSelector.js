import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background,className,key,label } = config;
  return (
    <button className={className} data-testid={key} onClick={() => selectNextBackground({background: config.background})}>
     {label}
    </button>
  )
}
export default ColourSelector;
