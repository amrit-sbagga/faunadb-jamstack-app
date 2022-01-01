import React, { useEffect, useState } from 'react';

// Grab all of the links
// display all of the links
// add delete and archive functionality
function App() {

  const loadLinks = async() => {
    const res = await fetch('/api/getLinks');
    const links = await res.json();
    console.log(links);
  }

  useEffect(() => {
    loadLinks();
  }, [])

  return (
    <div className="container py-5">
      <h1 className='text-center mb-5'>List O' Link</h1>
    </div>
  );
}

export default App;
