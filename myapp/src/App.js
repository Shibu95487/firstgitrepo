import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header title="samarth apni joon hai" title2="shivang apni joon hai"></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
