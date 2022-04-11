import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Section from './components/Section';
import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
