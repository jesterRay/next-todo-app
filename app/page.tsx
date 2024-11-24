"use client"
import Header from "@components/home/Header";
import { useEffect, useRef } from "react";

export default function Home() {

  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    const handleGlowMouseTracking = (event: MouseEvent)=>{
      if(glowRef.current){
        let size: any = glowRef.current.style.width;
        let mouseX = Math.max(event.clientX,Math.min(event.clientX,window.innerWidth - (size/2)));
        let mouseY = Math.max(event.clientY,Math.min(event.clientY,window.innerWidth - (size/2)));

        glowRef.current.style.left = `${mouseX}px`
        glowRef.current.style.top = `${mouseY}px`
      }
    }

    window.addEventListener('mousemove',handleGlowMouseTracking);
    
    return ()=>{
        window.removeEventListener('mousemove',handleGlowMouseTracking);
    }
  },[]);

  return (
    <div className=" max-w-[100vw] flex flex-col items-center lg:pt-[10rem] pt-[7rem]"> 
      <div ref={glowRef}
         style={{
          position: 'absolute',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 145, 255,0.8), rgba(0, 112, 198,0.5),transparent)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 1000,
        }}
      ></div>
      <Header/>
    </div>
  );
}
