import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import { RouterProvider } from 'react-router';
import MainLayout from './components/MainLayout';
import About from './pages/About';
import Home from './components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />
}

export default App
