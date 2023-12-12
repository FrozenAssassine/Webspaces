import MyDronePage from "./Components/MyDronePage/MyDronePage";
import TitlePage from "./Components/TitlePage/TitlePage";
import VideosPage from "./Components/VideosPage/VideosPage";
import './index.css';

function App() {
  return (
    <div className='pages'>
      <TitlePage/>
      <MyDronePage/>
      <VideosPage/>
    </div>
  );
}

export default App;