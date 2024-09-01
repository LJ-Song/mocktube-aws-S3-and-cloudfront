import Image from "next/image";
import {useState, useEffect} from 'react'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <h1 className="mb-3 text-2xl font-semibold">
            Welcome to MockTube
          </h1>
      <div className="flex-row">
      
      
        <h2 className="mb-3 font-semibold">
          A Musical Day at Newbury Street
        </h2>
      <video width={400} height={200} controls>
        <source 
        src="https://d20a5mf2t5y2xm.cloudfront.net/practice_aws-video.MOV" type="video/mp4"
        />
      </video>
      
      
      </div>
          


      
    </main>
  );
}
