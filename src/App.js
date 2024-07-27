import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Image1b } from './components/Image1b';
import { Image2b } from './components/Image2b.jsx';
import { Image3b } from './components/Image3b.jsx';
import { Image4b } from './components/Image4b.jsx';
import { Image5b } from './components/Image5b.jsx';
import { Image6b } from './components/Image6b.jsx';
import { Image7b } from './components/Image7b.jsx';
import { Navigation } from './components/Navigation';
import ChipBackground from './components/ChipBackground.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <h1 id="title" className='text-center my-3'>NyxGallery</h1>
        </div>
        <div id='main-img-container' className='container'>
          <Routes>
            <Route path="/image1" element={<Image1b className='image-size' />} />
            <Route path="/image2" element={<Image2b className='image-size' />} />
            <Route path="/image3" element={<Image3b className='image-size' />} />
            <Route path="/image4" element={<Image4b className='image-size' />} />
            <Route path="/image5" element={<Image5b className='image-size' />} />
            <Route path="/image6" element={<Image6b className='image-size' />} />
            <Route path="/image7" element={<Image7b className='image-size' />} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
