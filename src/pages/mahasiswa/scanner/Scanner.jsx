import React from "react";
import Scanner from "react-webcam-qr-scanner";
import { ScannerWrapper } from "./Scanner.style";
import { backIcon, flashIcon } from "../../../assets";
import { Link } from "react-router-dom"

const Scanners = () => (
  <ScannerWrapper>
    <div className="qr-screen">
      {/* <h1>ded</h1> */}
      <div className="scan-option">
        <Link className="backIcon" to="/profile">
          <img src={backIcon} alt="backIcon" />
        </Link>
        <button className="flashIcon">
          <img src={flashIcon} alt="flashIcon" />
        </button>
      </div>
    </div>
    <p>Scan barcode pada pintu Ruang Baca untuk melakukan absensi</p>
  </ScannerWrapper>
  // const handleDecode = (result) => {
  //   console.log(result);
  // } 

  // const handleScannerLoad = (mode) => {
  //   console.log(mode);
  // }

  // return (
  //   <Scanner 
  //     className="some-classname"
  //     onDecode={handleDecode}
  //     onScannerLoad={handleScannerLoad}
  //     constraints={{ 
  //       audio: false, 
  //       video: { 
  //         facingMode: "environment" 
  //       } 
  //     }}
  //     captureSize={{ width: 1280, height: 720 }}
  //   />
  // );
);

export default Scanners;