import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Clever from './components/Clever/Clever'
import MoreControl from './components/MoreControl/MoreControl';
import Built from './components/Built/Built';
import Edtouch from './components/edtouch/Edtouch';
import Classroom from './components/Classroom/Classroom';
import Bluebg from './components/Bluebg/Bluebg';
import Subcribe from './components/Subscribe/Subcribe';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Clever />
      <MoreControl />
      <Built />
      <Edtouch />
      <Classroom />
      <Bluebg />
      <Subcribe />
      <Footer/>
    </div>
  );
}

export default App;
