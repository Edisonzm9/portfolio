import React from 'react';

function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>This is the homepage of my professional portfolio.</p>
      <MyButton />
    </div>
    
    
  );

 
}

function MyButton() {
    return (
      <button>Soy un botón</button>
    );
  }
  

export default Home;
