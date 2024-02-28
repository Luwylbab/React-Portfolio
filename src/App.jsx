// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  return (
    <>
      <header className='header'>
        <h1>Lucas Babers</h1>
        <Nav />
      </header>
      <main className="mx-3">
        <Outlet />
      </main>
      <footer style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href='https://github.com/Luwylbab' style={{ marginRight: '10px' }}>GitHub</a>
        <a href='https://www.linkedin.com/in/lucas-babers-1aa0862ab/' style={{ marginLeft: '10px' }}>LinkedIn</a>
      </footer>
    </>
  );
}

export default App;
