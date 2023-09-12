// "use client";
import React from "react";

function DefaultLayout({ title = null, children }) {
  return (
    <main>
      <head>
        <title>The Captains's Log</title>
        <script src='https://cdn.tailwindcss.com'></script>
      </head>

      <body className='flex flex-col items-center'>
        <nav className='flex justify-between border-b-2 p-4 mb-8'>
          <h1 className='font-bold text-3xl text-[#09507C]'>
            <a href='/'>The Captain's Log</a>
          </h1>
          <a
            href='/logs/new'
            className='shadow shadow-[#09507C]  rounded-lg p-2 font-bold hover:bg-black hover:text-white'
          >
            Create New Log
          </a>
        </nav>

        <div className='w-[1100px]'>
          <h2>{title}</h2>
          {children}
        </div>
      </body>
    </main>
  );
}

export default DefaultLayout;
