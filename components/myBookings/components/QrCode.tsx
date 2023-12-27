import React,{FC} from 'react';
import QRCode from 'qrcode.react';
interface props{
    value?:any
}

const QRCodeGenerator:FC<props> = ({ value }) => {
  return (
    <div >
      <QRCode value={value} size={80}  />
    </div>
  );
};

export default QRCodeGenerator;
