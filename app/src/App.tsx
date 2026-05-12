import { Routes, Route } from 'react-router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Home from '@/pages/Home'
import Nosotros from '@/pages/Nosotros'
import Servicios from '@/pages/Servicios'
import Productos from '@/pages/Productos'
import Contacto from '@/pages/Contacto'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0]">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
