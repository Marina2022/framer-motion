import './App.css'
import Basics from "./components/Basics.tsx";
import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Index from "@/pages";
import First from "@/components/1-first/First.tsx";
import Drag from "@/components/2-Drag/Drag.tsx";
import AnimatePresence1 from "@/components/3-AnimatePresence/AnimatePresence.tsx";
import Stagger from "@/components/4-Stagger/Stagger.tsx";
import ResponsiveDraw from "@/components/5-ResponsiveDraw/ResponsiveDraw.tsx";
import ScrollTrigger from "@/components/6-ScrollTrigger/ScrollTrigger.tsx";
import ScrollScrubbing from "@/components/7-ScrollScrubbing/ScrollScrubbing.tsx";
import Whatever from "@/components/8-Whatever/Whatever.tsx";
import Sticky from "@/components/9-Sticky/Sticky.tsx";
import Layout from "@/components/10-Layout/Layout.tsx";
import LayoutTask from "@/components/11-LayoutTask/LayoutTask.tsx";


function App() {


  return (
    <BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
      <Routes>
        <Route path='/' index element={<Index/>}/>
        <Route path='/basics' element={<Basics/>}/>
        <Route path='/first' element={<First/>}/>
        <Route path='/Drag' element={<Drag/>}/>
        <Route path='/AnimatePresence' element={<AnimatePresence1/>}/>
        <Route path='/Stagger' element={<Stagger/>}/>
        <Route path='/ResponsiveDraw' element={<ResponsiveDraw/>}/>
        <Route path='/ScrollTrigger' element={<ScrollTrigger/>}/>
        <Route path='/ScrollScrubbing' element={<ScrollScrubbing/>}/>
        <Route path='/Whatever' element={<Whatever/>}/>
        <Route path='/Sticky' element={<Sticky/>}/>
        <Route path='/Layout' element={<Layout/>}/>
        <Route path='/LayoutTask' element={<LayoutTask/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
