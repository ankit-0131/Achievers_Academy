import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import IELTSDetail from './pages/IELTSDetail';
import Results from './pages/Results';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
import DemoBooking from './pages/DemoBooking';
import FreeMockTest from './pages/FreeMockTest';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="ielts-detail" element={<IELTSDetail />} />
        <Route path="results" element={<Results />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/landing" element={<Landing />} />
      <Route path="/book-demo" element={<DemoBooking />} />
      <Route path="/free-mock-test" element={<FreeMockTest />} />
    </Routes>
  );
}

export default App;
