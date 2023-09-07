// 'use client'
import React from "react";

function DefaultLayout({ title = null, children }) {
  return (
    <main>
      <head>
        <title>The Captains's Log</title>
        <script src='https://cdn.tailwindcss.com'></script>
      </head>

      <body className='flex flex-col items-center'>
      <h1 className='font-bold text-3xl text-[#09507C] mb-8'>The Captain's Log</h1>

        <h1>{title}</h1>
        {children}
      </body>
    </main>
  );
}

export default DefaultLayout;
