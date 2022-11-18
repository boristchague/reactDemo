
import SongComponent from "./SongComponent";
import ArtistComponent from "./ArtistComponent";
import AlbumComponent from "./AlbumComponent";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (

      <div className="App">

          <BrowserRouter>
            <Routes>
              <Route>
                <Route path="/" element={<SongComponent />} />
                <Route path="/song" element={<SongComponent />} />
                <Route path="/artist" element={<ArtistComponent />} />
                <Route path="/album" element={<AlbumComponent />} />
              </Route>
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
