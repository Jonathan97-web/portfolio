import './App.css'
import Footer from './components/Footer'
import Avatar from './assets/images/Avatar.jpeg'

function App() {
  return (
    <div className='App'>
    <main>
      <section id='me-section'>
      <div id="me-card">
        <img id="me-image" src={Avatar}></img>
        <p>Jonathan Zakrisson</p>
        <p>Frontend Developer</p>
      </div>
      </section>
    </main>
    <Footer />
    </div>
  )
}

export default App
