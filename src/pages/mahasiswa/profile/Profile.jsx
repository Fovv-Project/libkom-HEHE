import React from "react";
import { Link } from "react-router-dom";
import { ProfileWrapper } from "./Profile.style.js";
import { photoProfile, barcodeIcon } from "../../../assets/images";

const Profile = () => (
  <ProfileWrapper>
    <div className="header-sementara">
      <h1>--</h1>
    </div>
    <div className="profile-absen">
      <img alt="PhotoProfile" className="photo-profile" src={photoProfile} />
      <div className="absen">
        <p>Selamat datang, Shabrina Rafika!</p>
        <p>09021281924049</p>
        <div className="absenQR-section">
          <div className="absen-QR">
            <Link to="/scanner">Absen dulu, yuk!</Link>
            <img alt="barcodeIcon" className="barcodeIcon" src={barcodeIcon} />
          </div>
        </div>
      </div>
    </div>
    <div className="history-peminjaman">
      <div className="title">
        <p>Peminjaman</p>
      </div>
      <div className="riwayat-peminjaman">
        <img alt="PhotoProfile" className="book-photo" src={photoProfile} />
        <table className="riwayat-recap">
          <tr>
            <td>Judul</td>
            <td>:</td>
            <td>xxx</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>:</td>
            <td>xxx</td>
          </tr>
          <tr>
            <td>Tenggat Waktu</td>
            <td>:</td>
            <td>Senin, 21 November 2022 </td>
          </tr>
        </table>
      </div>
      <div className="riwayat-peminjaman">
        <img alt="PhotoProfile" className="book-photo" src={photoProfile} />
        <table className="riwayat-recap">
          <tr>
            <td>Judul</td>
            <td>:</td>
            <td>xxx</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>:</td>
            <td>xxx</td>
          </tr>
          <tr>
            <td>Tenggat Waktu</td>
            <td>:</td>
            <td>Senin, 21 November 2022 </td>
          </tr>
        </table>
      </div>
      <button className="riwayat-button" type="button">
        <Link to="/profile">Riwayat Peminjaman</Link>
      </button>
    </div>
    <div className="history-absen">
      <div className="title">
        <p>Absen</p>
      </div>
      <div className="history-recap">
        <p>29 - 09 - 2022</p>
        <p>Masuk : 10.00.01</p>
      </div>
      <div className="history-recap">
        <p>29 - 09 - 2022</p>
        <p>Masuk : 10.00.01</p>
      </div>
      <button className="riwayat-button" type="button">
        <Link to="/profile">Riwayat Absen</Link>
      </button>
    </div>
    <div className="Footer"></div>
  </ProfileWrapper>
);

export default Profile;
