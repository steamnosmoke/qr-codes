import { QRCodeSVG } from "qrcode.react";

export default function ScanHistory() {
  const scanArr = JSON.parse(localStorage.getItem("scan_data"));

  return (
    <>
      {scanArr ? (
        scanArr.map((el, i) => (
          <div>
            <p key={i}>{`${i + 1}) ${el}`}</p>
            <QRCodeSVG className='qr' value={el} />
          </div>
        ))
      ) : (
        <p>История пуста</p>
      )}
    </>
  );
}
