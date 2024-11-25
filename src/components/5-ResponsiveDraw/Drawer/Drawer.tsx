import React from 'react';
import s from './Drawer.module.scss';
import {Link} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";

const Drawer = ({open}) => {
  return (
    <AnimatePresence>
      {
        open && (
          <motion.div
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            initial={{"--xxx": "-100%", "--yyy": "100%" } as any}

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            animate={{"--xxx": "0%", "--yyy": "0%"} as any}

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            exit={{"--xxx": "-100%", "--yyy": "100%"} as any}  
            
            transition={{
              type: "spring"
            }}
            
            className={s.drawer}>
            Drawer
          </motion.div>
        )
      }

    </AnimatePresence>
  );
};

export default Drawer;