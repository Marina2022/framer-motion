import React, {useState} from 'react';
import s from './Stagger.module.scss';
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import StaggerItem from "@/components/4-Stagger/StaggerItem/StaggerItem.tsx";

const items = ["Main", "About", "Contacts", "Goods"]
const Stagger = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className=''>
      <div className='homeLinkDiv'>
        <div>
          <Link to="/">Home</Link>
        </div>


        <button onClick={() => setOpen(prev => !prev)} className={s.toggle}>&times;</button>
        <motion.div
          className={s.leftPanel}
          variants={{
            open: {
              scaleX: 1,
              transition: {
                staggerChildren: 0.3
              }
            },
            closed: {
              scaleX: .2,
              transition: {
                staggerChildren: 0.1, // Задержка при закрытии, если нужно
                staggerDirection: -1, // Анимация в обратном порядке
                when: "afterChildren"
              },
            },
          }}

          initial="closed"  // не так оно и важно
          animate={open ? "open" : "closed"}
        >
          <ul>
            {
              items.map((item, i) => <StaggerItem key={i} item={item}/>)
            }
          </ul>
        </motion.div>
      </div>


      <motion.div
        variants={{
          start: {
            transition: {
              staggerChildren: 0.03,
              staggerDirection: -1
            }
          },
          current: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="start"
        animate={open ? "current" : "start"}
        className={s.staggerTwo}>

        <motion.div className={s.itemTwo} variants={{
          start: {y: 50}, current: {y: 0}
        }}>Hello
        </motion.div>
        <motion.div className={s.itemTwo} variants={{
          start: {y: 50}, current: {y: 0}
        }}>Marina
        </motion.div>
        <motion.div className={s.itemTwo} variants={{
          start: {y: 50}, current: {y: 0}
        }}>Is
        </motion.div>
        <motion.div className={s.itemTwo} variants={{
          start: {y: 50}, current: {y: 0}
        }}>So Goood
        </motion.div>
        <motion.div className={s.itemTwo} variants={{
          start: {y: 50}, current: {y: 0}
        }}>Hello
        </motion.div>       
      </motion.div>
    </div>
  );
};

export default Stagger;