import {useState} from 'react';
import s from './Layout.module.scss';
import {Link} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";

const Layout = () => {

  const [large, setLarge] = useState(false)

  const [sent, setSent] = useState(false)
  const [turned, setTurned] = useState(false)
  const [added, setAdded] = useState(false)
  const [show, setShow] = useState(false)

  const sendHandler = () => {
    setSent(prev => !prev)
    console.log('lll')
  }


  return (
    <div className='container'>
      <div className='homeLinkDiv'>
        <Link to="/">Home</Link>
      </div>
      <button onClick={() => setLarge(prev => !prev)}>click</button>


      <div>
        <motion.div
          transition={{ease: "linear"}}
          layout="size" className={s.hehe} style={{flexDirection: large ? 'row' : 'column'}}>
          <motion.div layout className={s.item}>1</motion.div>
          <motion.div layout className={s.item}>2</motion.div>
          <motion.div layout className={s.item}>3</motion.div>
          <motion.div layout className={s.item}>4</motion.div>
        </motion.div>
      </div>

      <motion.div layout className={s.info}>{sent ? 'sent' : 'not sent'}</motion.div>
      <motion.form
        layout
        className={s.form}>
        <input className={s.input} type="text"/>
        <motion.button
          layout
          type="button"
          style={{width: sent ? "calc(100% - 20px)" : "80px", borderRadius: 20}}
          onClick={sendHandler}
          className={s.btn}>
          <motion.span layout style={{width: 20}}>hhh</motion.span>
        </motion.button>
      </motion.form>

      <motion.div layout className={s.musicWrapper} style={{flexDirection: turned ? 'column' : 'row'}}>
        <motion.div layout className={s.round}></motion.div>
        <motion.div layout className={s.text} style={{fontSize: turned ? 20 : 10}}>
          <div>Interstellar</div>
          <div>Zimmer Heinz</div>
        </motion.div>
      </motion.div>
      <motion.div layout>
        <button onClick={() => setTurned(prev => !prev)} className={s.turnBtn}>Turn it!</button>
      </motion.div>

      {/*Добавляем ребенка*/}

      <motion.div className={s.parent} style={{borderRadius: 20}}>

        <motion.div layout className={s.hello}>Hello hello</motion.div>
        <AnimatePresence>
          {
            added && <motion.div
              layout
              initial={{scaleY: 0}}
              animate={{scaleY: 1}}
              transition={{ease: 'linear', duration: .5}}
              style={{transformOrigin: "top left"}}

              className={s.too}>
              <motion.span
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: .3}}

              >
                я тоже человек
              </motion.span>

            </motion.div>
          }
        </AnimatePresence>
        <motion.button onClick={() => setAdded(prev => !prev)}>Добавь же меня</motion.button>
      </motion.div>


      {/*Задачка*/}


      <div className={s.megaWrapper}>
        <motion.div layout className={s.wrapperList}>

          <motion.div
            initial={{height: 0}}
            animate={{height: show ? 'auto' : 0}}
            style={{
              overflow: 'hidden',
              position: 'relative', // Устанавливаем position: relative или absolute
              minHeight: show ? 'auto' : 0, // Убедитесь, что минимальная высота корректно регулируется
          
          }}

          >
            <AnimatePresence>
              {show && <motion.ul
                transition={{duration: 1}}
                // layout
                className={s.listlist}
                style={{borderRadius: 32}}

                variants={{
                  show: {
                    transition: {staggerChildren: 0.03}
                  },
                  hide: {

                    transition: {staggerChildren: 0.03, when: "afterChildren"}
                  }
                }}

                initial="hide"
                animate="show"
                exit="hide"
              >

                {
                  ['Google', 'Amazon', 'Tesla', 'Microsoft', 'Apple', 'Facebook'].map((item, index) => {
                    return (
                      <motion.li
                        // layout
                        key={index}
                        variants={{
                          show: {
                            opacity: 1,
                            y: 0
                          },
                          hide: {
                            opacity: 0,
                            y: 20
                          }
                        }}

                      >{item}</motion.li>
                    )
                  })
                }

              </motion.ul>
              }
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      <motion.button className={s.btnLast} layout onClick={() => setShow(prev => !prev)}>Show
      </motion.button>


    </div>
  );
};

export default Layout;