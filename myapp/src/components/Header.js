import React from 'react';
function Header(props){
  let samarth=props.title;
  let shivang=props.title2;
   return(
    <div>
      <h1>{samarth}</h1>
      <p>{shivang}</p>
    </div>
   );
};
export default Header; 