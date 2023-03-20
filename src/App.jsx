import { useRef } from "react";
import Home from "./components/Home/Home";
import Info from "./components/Info";
import Navbar from "./components/Navbar/Navbar";
import Vision from "./components/Vision";
function App() {
  const scrollRef = useRef(null);
  const executeScroll = () => scrollRef.current.scrollIntoView();
  return (
    <>
      <Navbar />
      <Home executeScroll={executeScroll} />
      <Info refProp={scrollRef} />
      <Vision />
    </>
  );
}

export default App;
