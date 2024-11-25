import React from 'react';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
const First = () => {
  return (
    <div className='container'>
      <div className='homeLinkDiv'>
        <Link to="/">Home</Link>
      </div>
      First
    </div>
  );
};

export default First;