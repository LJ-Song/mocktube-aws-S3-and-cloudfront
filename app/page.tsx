import Image from "next/image";
import {useState, useEffect} from 'react'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
          <h1 className="mb-3 text-2xl font-semibold">
            Welcome to MockTube
          </h1>
          
        
      

      <video width={800} height={500} controls loop autoPlay>
        <source 
        src="https://d20a5mf2t5y2xm.cloudfront.net/practice_aws-video.MOV" type="video/mp4"
        />
      </video>
    </main>
  );
}
