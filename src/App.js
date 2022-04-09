import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Section from './components/Section'

function App() {

  const [categories] = useState([
    { name: 'About Me', description: 'Brad Kuhne'},
    { name: 'Portfolio', description: 'Select projects developed by Brad Kuhne...' },
    { name: 'Resume', description: 'Downloadable resume for Brad Kuhne...' },
    { name: 'Contact', description: 'Let me know if you have any questions or would like me to reach out to you.'}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  console.log("This is the current categrory: ", currentCategory);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      >
      </Nav>
      <main>
            <Section currentCategory = {currentCategory }> </Section>
      </main>
    </div>
  );
}

export default App;
