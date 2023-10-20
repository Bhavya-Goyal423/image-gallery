import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import InputBox from "./components/InputBox/InputBox";
import ImageList from "./components/ImageList/ImageList";
import { useValue } from "./CustomContext";
import { useEffect } from "react";

function App() {
  const { isDarkMode } = useValue();

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "#f8f9fa";
      console.log("Dark");
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      console.log("Light");
    }
  }, [isDarkMode]);

  return (
    <div className="wrapper">
      <Navbar />
      <InputBox />
      <ImageList />
    </div>
  );
}

export default App;
