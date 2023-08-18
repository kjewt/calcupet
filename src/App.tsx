import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/assets/css/App.css'
import { Form } from './components/form'
import { Nav } from './components/Nav'
import { Title } from './components/title'
import { Booking } from './components/views/booking';
import { AddOffice } from './components/views/addOffice';

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Nav />
        <BrowserRouter>
          <section>
            <Title />
            <Routes>
              <Route path="/" element={<Form />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/addOffice" element={<AddOffice width="w-60" />} />

              {/* <Route path="/join" element={<Join />} />
            <Route path="/home" element={<Home />} />
            <Route path="/add" element={<AddAcount />} />
            <Route path="/complete" element={<TransferComplete />} />
            <Route path="/keypad" element={<Keypad />} />
            <Route path="/detail" element={<TransactionDetail />} />
            <Route path="/not-a-user" element={<NotAUser />} />
            <Route path="/*" element={<Navigate to="/" />} /> */}
            </Routes>
          </section>

        </BrowserRouter>
      </QueryClientProvider>
    </>
  )
}

export default App
