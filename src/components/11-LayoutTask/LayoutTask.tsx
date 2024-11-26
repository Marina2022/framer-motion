import {useState} from 'react';
import {Link} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";
import s from './LayoutTask.module.scss'

const arr = ['Google', 'Amazon', 'Tesla', 'Microsoft', 'Apple', 'Facebook']

const LayoutTask = () => {

  const [opened, setOpened] = useState(false)

  return (
    
      <motion.div layout className='container'>
        <motion.div layout className='homeLinkDiv'>
          <Link to="/">Home</Link>
        </motion.div>

        <motion.div layout className={s.megaWrapper}>
          <AnimatePresence>
          <motion.div layout className={s.wrapper}>

            {
              opened && <motion.ul

                layout
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: .2
                    }
                  },
                  hidden: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}

                exit="hidden"
                initial="hidden"
                animate="visible"

                className={s.list}>
                {
                  arr.map((item, i) => {
                    return (
                      <motion.li
                        layout
                        variants={{
                          visible: {
                            y: 0,
                            opacity: 1
                          },
                          hidden: {
                            opacity: 0,
                            y: 20
                          }
                        }}
                        className={s.item}
                        key={i}>{item}</motion.li>
                    )
                  })
                }
              </motion.ul>
            }

            <motion.div layout="position"  className={s.additionalWrapper}>
              <motion.button  className={s.btn} onClick={() => setOpened(prev => !prev)}>Open</motion.button>
            </motion.div>

          </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    
  );
};

export default LayoutTask;