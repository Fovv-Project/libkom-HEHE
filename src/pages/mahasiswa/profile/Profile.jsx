import React from "react";
import { Link } from 'react-router-dom';
import { ProfileWrapper } from './Profile.style.js'
import { photoProfile } from "../../../assets/images";

const Profile = () => (
    <ProfileWrapper>
        <div className="header-sementara">
            <h1>History Absensi</h1>
        </ div>
        <div className="profile-absen">
            <img alt="PhotoProfile" className="photo-profile" src={photoProfile} />
            <div className="absen">
                <p>Selamat datang, Shabrina Rafika!</p>
                <p>09021281924049</p>
                <div className="absenQR-section">
                    <button className="absen-QR" type="button">
                        <Link to="/scanner">Absen dulu, yuk!</Link>
                    </button>
                </div>
            </div>
        </ div>
        <div className="history">
            <div className="history-recap">
                <p>29 - 09 - 2022</p>
                <p>Masuk : 10.00.01</p>
            </div>
            <div className="history-recap">
                <p>29 - 09 - 2022</p>
                <p>Masuk : 10.00.01</p>
            </div>
        </div>
        <div className="Footer">
        </div>
    </ProfileWrapper>
  
);

export default Profile;