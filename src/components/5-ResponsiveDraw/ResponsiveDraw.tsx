import React, {useState} from 'react';

import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import Drawer from "@/components/5-ResponsiveDraw/Drawer/Drawer.tsx";

const ResponsiveDraw = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='container'>
      <div className='homeLinkDiv'>
        <Link to="/">Home</Link>
      </div>
      <button onClick={() => setOpen(prev => !prev)}>Open the Draw</button>

      <Drawer open={open}/>

    </div>
  );
};

export default ResponsiveDraw;

  