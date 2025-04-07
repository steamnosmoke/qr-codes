import { Route, Routes } from "react-router";
import QrCodeGenerator from "./QrCodeGenerator";
import QrCodeScanner from "./QrCodeScanner";
import Navigation from "./Navigation";
import ScanHistory from "./ScanHistory";
import GgenerationHistory from "./GenerationHistory";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/scan' element={<QrCodeScanner />} />
        <Route path='/generation' element={<QrCodeGenerator />} />
        <Route path="/scanhistory" element={<ScanHistory/>}/>
        <Route path="/generationhistory" element={<GgenerationHistory/>}/>
      </Routes>
    </div>
  );
}

export default App;
