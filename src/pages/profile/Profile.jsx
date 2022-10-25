import React from "react";
import { Link } from 'react-router-dom';
// import { Profile } from "../profile/Profile";
import fotoAkun from "../../assets/logo1.png";
import { ProfileWrapper, ProfileAbsen, FotoProfile } from './Profile.styled.js'

const Profile = () => (
    <ProfileWrapper>
        <>
            <h1>History Absensi</h1>
        </>
        <ProfileAbsen>
            <FotoProfile src={fotoAkun} />
            Selamat datang, Shabrina Rafika!
        </ProfileAbsen>
    </ProfileWrapper>
  
);

export default Profile;