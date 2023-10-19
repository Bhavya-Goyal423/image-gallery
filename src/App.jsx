import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import InputBox from "./components/InputBox/InputBox";
import ImageList from "./components/ImageList/ImageList";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <InputBox />
      <ImageList />
    </div>
  );
}

export default App;
