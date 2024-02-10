import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/assets/css/App.css'
import { Nav } from './components/nav'
import { Title } from './components/title'

import { Weight } from './pages/weight';
import { Age } from './pages/age';
import { Water } from './pages/water';
import { Feed } from './pages/feed';
import { Budget } from './pages/budget';

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Nav />
          <section>
            <Title />
            <Routes>
              <Route path="/" element={<Weight />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/water" element={<Water />} />
              <Route path="/age" element={<Age />} />
              <Route path="/budget" element={<Budget />} />
            </Routes>
          </section>

        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
