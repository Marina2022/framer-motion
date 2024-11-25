import React, {useRef} from 'react';
import s from './ScrollTrigger.module.scss';
import {Link} from "react-router-dom";
import {motion, useInView} from "framer-motion";

const ScrollTrigger = () => {
  
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref)
  
  return (
    <div className='container'>
      <div className='homeLinkDiv'>
        <Link to="/">Home</Link>
      </div>
      <div className={s.spacer}></div>

      <motion.div
        initial={{
          x: 500
        }}

        transition={{
          duration: 1,
          type: 'spring'
        }}

        viewport={{
          amount: .999,
          margin: "0px 0px -50% 0px"
        }}

        // animate={{x: 500}}
        whileInView={{
          x: 0
        }}

        className={s.motionDiv}>
        ScrollTrigger
      </motion.div>
      <div className={s.spacerMini}>scroll down a little bit more</div>

      <motion.ul
        variants={{
          inView: {
            transition: {
              staggerChildren: 0.1
          }}, 
          outOfView: {
          }
        }}
        
        initial="outOfView"        
        whileInView="inView"
        
        viewport={{
         amount: 1 
        }          
      }
        
        className={s.list}>
        {
          [1, 2, 3, 4].map((item, i) => {
            return (
              <motion.li

                variants={{
                  inView: {
                    x: 0, opacity: 1
                  },
                  outOfView: {
                    x: -30, opacity: 0
                  }
                }}
                key={i} className={s.item}>{i + 1}</motion.li>
            )
          })
        }
      </motion.ul>
      
      <div className={s.spacerMini}>
        {isInView ? 'Да, видать' : 'Еще не видать'}
      </div>
      
      <div ref={ref} className={s.notMotionDiv}>Я даже не моушн див</div>


      <div className={s.spacer} ></div>
    </div>
  );
};

export default ScrollTrigger;