import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExerciceDetails from './components/Principales/ExerciceDetails';
import ExerciceList from './components/Principales/ExerciceList';
import Header from './pages/Header';
import Homepage from './pages/HomePage';
import Footer from './pages/Footer';
import FichePage from './components/Principales/Fiches';
import CourseDetail from './components/Principales/CourseDetails';
import CourseList from './components/Principales/CourseList';
import HomeBack from './pages/HomeBack';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/exercice/" element={<ExerciceList />} />
          <Route path="/exercice/:id" element={<ExerciceDetails />} />
          <Route path="/cours" element={<CourseList />} />
          <Route path="/cours/:id" element={<CourseDetail />} />
          <Route path='/fiche' element={<FichePage />} />
        </Routes>
      </div>
      <HomeBack/>
      <Footer />
    </Router>
  );
};

export default App;