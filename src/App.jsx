import { Route, Routes } from 'react-router-dom';
import './App.css';
import ScrollToTop from './hooks/ScrollToTop';
import Home from './pages/Home';
import Footer from './common/Footer';
import Artist from './pages/Artist';
import ArtistProfile from './components/Artist/ArtistProfile';
import Lafred from './components/Artist/Lafred';
import Media from './pages/Media';
import News from './pages/News';
import NewsDetails from './components/News/NewsDetails';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Release from './pages/Release';

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artist />} />
        <Route path="/artist/:id" element={<ArtistProfile />} />
        <Route path="/Lafred" element={<Lafred />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/media" element={<Media />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/release" element={<Release />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
