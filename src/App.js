import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';

function App() {

  const [categories] = useState([
    {name: 'About Me'},
    { name: 'Portfolio', description: 'Select projects developed by Brad Kuhne...' },
    { name: 'Resume', description: 'Downloadable resume for Brad Kuhne...' },
    {name: 'Contact', description: 'Let me know if you have any questions or would like me to reach out to you.'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      >
      </Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
