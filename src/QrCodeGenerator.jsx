import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import "./QrCodeGenerator.scss";

export default function QrCodeGenerator() {
  const [val, setVal] = useState("");
  const [valQr, setValQr] = useState("");

  const onChangeInput = (event) => {
    setVal(event.target.value);
    setValQr("");
  };

  const onClickButton = () => {
    setValQr(val);
    const locArr = JSON.parse(localStorage.getItem("generate_data")) || [];
    localStorage.setItem(
      "generate_data",
      JSON.stringify([...locArr, val])
    );
  };

  const onClickInput = () => {
    setVal("");
    setValQr("");
  };

  return (
    <>
      <div className='wrapper'>
        {valQr && <QRCodeSVG className='qr' value={valQr} />}
        <input
          className='qrInput'
          type='text'
          value={val}
          onChange={onChangeInput}
          onClick={onClickInput}
        />
        <button className='qrButton' type='button' onClick={onClickButton}>
          Сгенерировать QR
        </button>
      </div>
    </>
  );
}
