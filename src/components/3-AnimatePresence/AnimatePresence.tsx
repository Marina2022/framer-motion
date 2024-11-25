import  {useState} from 'react';
import s from './AnimatePresence.module.scss';

import {Link} from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";

const AnimatePresence1 = () => {

  const [visible, setVisible] = useState(true)

  return (
    <div className='container'>
      <div className='homeLinkDiv'>
        <Link to="/">Home</Link>
      </div>

      <button onClick={() => setVisible(prev => !prev)}>Toggle</button>

      <AnimatePresence initial={false}>

        {
          visible && (
            <motion.div
              exit={{scale: .9, opacity: 0}}
              initial={{scale: .9, opacity: 0}}
              animate={{scale: 1, opacity: 1}}
              transition={{
                ease: "easeOut"
              }}
              className={s.card}>
              AnimatePresence
            </motion.div>
          )
        }
      </AnimatePresence>


    </div>
  );
};

export default AnimatePresence1;