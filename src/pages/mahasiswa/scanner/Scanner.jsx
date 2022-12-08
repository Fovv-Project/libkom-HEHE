import React from 'react';
// import Scanner from "react-webcam-qr-scanner";
import { ScannerWrapper } from "./Scanner.style";
import { backIcon, flashIcon } from "../../../assets/images";
import QRcode from "../../../components/scannerQR/index.js";
import { Link } from "react-router-dom"

const Scanners = () => (
  
  <ScannerWrapper>
    <div className="qr-screen">
      <div className="scan-option">
        <Link className="backIcon" to="/profile">
          <img src={backIcon} alt="backIcon" />
        </Link>
        <button className="flashIcon">
          <img src={flashIcon} alt="flashIcon" />
        </button>
      </div>
      <div className='QRCodeWrapper'>
        <QRcode/>
      </div>
    </div>
    <p>Scan barcode pada pintu Ruang Baca untuk melakukan absensi</p>
  </ScannerWrapper>

);

export default Scanners;