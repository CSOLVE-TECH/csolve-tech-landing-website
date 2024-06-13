/* import logo from './logo.svg'; */
import './App.css';
import Footer from './footer/footer';
import About from './about/about';
import Header from './component/header/Header'

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
