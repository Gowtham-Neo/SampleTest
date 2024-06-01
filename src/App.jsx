import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Extracted component for logo links
const LogoLinks = () => (
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
      <img src={viteLogo} className="logo" alt="Learn more about Vite" />
    </a>
    <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
      <img src={reactLogo} className="logo react" alt="Learn more about React" />
    </a>
  </div>
);

function App() {
  const [clickCount, setClickCount] = useState(0);

  return (
    <main>
      <header>
        <LogoLinks />
        <h1>Vite + React</h1>
      </header>
      <section className="card">
        <button onClick={() => setClickCount(clickCount + 1)} aria-label="Increase count">
          count is {clickCount}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </section>
      <footer>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </footer>
    </main>
  );
}

export default App;
