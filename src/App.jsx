import { useRef } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Info from "./components/Info";
import Navbar from "./components/Navbar/Navbar";
import Vision from "./components/Vision";
function App() {
  const scrollRef = useRef(null);
  const executeScroll = () => scrollRef.current.scrollIntoView();
  const scrollRefVision = useRef(null);
  const executeScrollVision = () => {
    scrollRefVision.current.scrollIntoView();
  };
  const scrollRefFooter = useRef(null);
  const executeScrollFooter = () => {
    scrollRefFooter.current.scrollIntoView();
  };
  return (
    <>
      <Navbar
        executeScrollVision={executeScrollVision}
        executeScrollFooter={executeScrollFooter}
      />
      <Home executeScroll={executeScroll} />
      <Info refProp={scrollRef} />
      <Vision scrollRefVision={scrollRefVision} />
      <Footer scrollRefFooter={scrollRefFooter} />
    </>
  );
}

export default App;
