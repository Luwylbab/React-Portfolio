// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <header className='header'>
      <h1>Lucas Babers</h1>
      <Nav />
    </header>
      <main className="mx-3">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
