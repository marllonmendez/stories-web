import Header from '@/pages/Header'
import Hero from '@/pages/Hero'
import About from '@/pages/About'

function App() {
  return (
    <main className="w-full">
      <div className="custom-gradient h-screen flex flex-col">
        <Header />
        <Hero />
      </div>
      <About />
    </main>
  )
}

export default App
