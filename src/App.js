/* import logo from './logo.svg'; */
import './App.css';
import Footer from './component/Footer';
import About from './pages/About';
import Header from './component/Header'

function App() {
  return (
    <div className="App">
      <main>
      <Header />
      </main>
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
