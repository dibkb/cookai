import { useRef } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Info from "./components/Info";
import Vision from "./components/Vision";
function App() {
  const scrollRef = useRef(null);
  const executeScroll = () => scrollRef.current.scrollIntoView();
  return (
    <>
      <Home executeScroll={executeScroll} />
      <Info refProp={scrollRef} />
      <Vision />
      <Footer />
    </>
  );
}

export default App;
