"use client"

import Image from 'next/image';

export default function Home() {

  return (
    <div className="bg-[#FFF4DF] h-screen pl-14 pt-20">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/frontendtask-28265.appspot.com/o/Astrix%20Logo.png?alt=media&token=a4ae2282-507b-4b00-8989-629a25bc2f9a"
        width={406}
        height={400}
        alt="logo"
      />
      <div className="flex justify-center items-center mt-5">
        <div className="screen">
         {/* HERO SCREEN */}
        </div>
      </div>
    </div>
  );
}
