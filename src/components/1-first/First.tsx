import React from 'react';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import s from './First.module.scss'

const First = () => {
  return (
    <div className='container'>
      <div className='homeLinkDiv'>
        <Link to="/">Home</Link>
      </div>

      <div className={s.textDiv}>
        <motion.div
          drag
          animate={{
            opacity: [0, 1, 1, 1, 1, 1, 0],
            scaleX: [1, 1, 1.5, 1.5, 1.5, 1, 1],
            originX: 0,
            scaleY: [0.75, 0.75, 0.75, 1.5, 1.5, 1.5, 8],
            originY: 0
          }}
          transition={{
            duration: 3,
            repeat: 10,
            repeatDelay: 1
          }}
        >
          Ma
          Ra
        </motion.div>
      </div>


    </div>
  );
};

export default First;