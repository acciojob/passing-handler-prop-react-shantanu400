// import React, { useState } from "react"

// export default function Selection(props){
//   const { applyColor } = props;
//   const [style, setStyle] = useState({background: ""});

//   const handleClick = () => {
//     applyColor(setStyle);
//   };

//   return(
//     <div className="fix-box" style={style} onClick={handleClick}>
//       selection
//     </div>
//   )
// }

import React, { useState } from 'react';
 
const Selection = ({ applyColor }) => {
    const [style, setStyle] = useState({ background: "" });;
 
    const handleClick = () => {
      applyColor(setStyle);
    };
 
 
 
  return (
    <div className="fix-box" style={style} onClick={handleClick}>
      Selection
    </div>
 
  );
};
 
 
export default Selection;