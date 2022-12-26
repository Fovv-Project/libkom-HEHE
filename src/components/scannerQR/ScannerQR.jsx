import React, { useState, useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

const QRcode = () => {
  const qrcodeRegionId = "html5qr-code-full-region";
  const [camera, setCamera] = useState("");
  const [device, setdevice] = useState();

  useEffect(() => {
    // This method will trigger user permissions
    Html5Qrcode.getCameras().then(devices => {
      /**
         * devices would be an array of objects of type:
         *
         * { id: "id", label: "label" }
         *
         *  */
      console.log(devices);
      if (devices && devices.length) {
        setdevice(devices);
        // var cameraId = devices[0].id;

        setCamera(devices[0].id);
        // .. use this to start scanning.
      }
    }).catch(err => {
      // handle err
      console.log(err);
    });
  }, []);

  useEffect(() => {
    const createConfig = () => {
      const config = {
        fps: 10,
        qrbox: 240,
        aspectRatio: 1.777778,
      };
      return config;
    };

    const onScanSuccess = () => {
      console.log("success");
    };

    const onScanFailure = () => {
      console.log("failure");
    };

    const config = createConfig();
    const html5QrcodeScanner = new Html5Qrcode(qrcodeRegionId);
    if (camera === "") {
      return;
    }
    html5QrcodeScanner.start(camera, config, onScanSuccess, onScanFailure);

    return () => {
      html5QrcodeScanner.clear().catch(error => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };

  }, [camera]);

  return (
    <>
      <div id={qrcodeRegionId}  />
    </>
  );
};

export default QRcode;
