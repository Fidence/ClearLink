import "./App.css";
import Footer from "./components/Footer";
import Clearlink from "./components/clearlink";
import Logos from "./components/logos";
import Perfect from "./components/perfect";
import Ready from "./components/ready";
import Shopify from "./components/shopify";
import Showcase from "./components/showcase";
function App() {
  return <div className="App">
  <div className="">
     <Showcase/>
   <Logos/>
   <Clearlink/>
   <Shopify/>
   <Ready/>
   <Perfect/>
   <Footer/>
  </div>
    </div>
}

export default App;
