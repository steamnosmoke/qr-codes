import { QRCodeSVG } from "qrcode.react";

export default function GgenerationHistory() {
  const generateArr = JSON.parse(localStorage.getItem("generate_data"));

  return (
    <>
      {generateArr ? (
        generateArr.map((el, i) => (
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
