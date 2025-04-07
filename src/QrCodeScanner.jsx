import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

export default function QrCodeScanner() {
  const [scanData, setScanData] = useState("");
  const OnScanQr = (result) => {
    setScanData(result[0].rawValue);
    const locArr = JSON.parse(localStorage.getItem("scan_data")) || [];
    localStorage.setItem(
      "scan_data",
      JSON.stringify([...locArr, result[0].rawValue])
    );
  };
  const scanComponents = {
    audio: false,
    finder: false,
  };
  const scanStyle = {
    container: { width: 350 },
  };
  return (
    <>
      <Scanner
        onScan={OnScanQr}
        components={scanComponents}
        styles={scanStyle}
      />
      {scanData && <p>{scanData}</p>}
    </>
  );
}
