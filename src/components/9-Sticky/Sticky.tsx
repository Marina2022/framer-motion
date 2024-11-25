import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import s from './Sticky.module.scss';
import {useMotionValueEvent, useScroll, useTransform, motion } from "framer-motion";

const Sticky = () => {

  const scrollableRef = useRef(null)
  const stickyContainerRef = useRef(null)

  const {scrollYProgress} = useScroll({
    container: scrollableRef,
    target: stickyContainerRef,
    offset: ["start start", "end 50%"]
  })

  const xPos = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0, 600])

  const [value, setValue] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', (val: number) => setValue(val))

  return (
    <div className="container">
      <div className="homeLinkDiv">
        <Link to="/">Home</Link>
      </div>

      <div className={s.fixed}>{value}</div>


      <div ref={scrollableRef} className={s.scrollable}>
        <div ref={stickyContainerRef} className={s.stickyContainer}>
          <div className={s.spacerMini}></div>
          <div className={s.spacerMini}></div>
          <div className={s.stickyDiv}>stickyDiv

            <motion.div
              style={{x: xPos}}

              className={s.innerAnime}></motion.div>
          </div>
        </div>
        <div className={s.spacerMini}></div>
        <div className={s.spacerMini}></div>
      </div>
    </div>
  );
};

export default Sticky;
