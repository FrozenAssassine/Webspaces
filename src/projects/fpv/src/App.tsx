import MyDronePage from "./Components/MyDronePage/MyDronePage";
import TitlePage from "./Components/TitlePage/TitlePage";
import './index.css';

function App() {
  return (
    <div className='pages'>
      <TitlePage/>
      <MyDronePage/>
    </div>
  );
}

export default App;