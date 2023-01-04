import styled from "styled-components";
import Colors from "../../../styles/colors";

export const ProfileWrapper = styled.section`
    background: ${Colors.Primary};
    text-align: center;
    padding: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .profile-absen {
        display: flex;
        flex-direction: row;
        background: ${Colors.Brown} ;
        color: ${Colors.White};
        width: 23rem;
        height: 7rem;
        font-size: 0.75rem;
        margin: auto;
        padding: 1rem 2rem;
        box-shadow: 5px 8px 8px rgba(0, 0, 0, 0.25);
    }

    .photo-profile {
        width: 4.625rem;
        height: 4.625rem;
    }

    .barcodeIcon {
        width: 1rem;
        margin-left: 1rem;
    }

    .absen {
        margin-left: 2rem;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .absen p {
        display: flex;
        align-items: flex-start;
    }

    .absenQR-section {
        display: flex;
        justify-content: end;
    }

    .absen-QR {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 8rem;
        text-align: center;
        padding: 0.25rem;
        font-size: 0.625rem;
        font-weight: 500;
        border-style: none;
        border-radius: 0.5rem;
        background-color: ${Colors.Mustard};
        box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    }

    .title {
        font-size: 1.25rem;
        font-weight: 600;
        text-align: start;
    }

    .riwayat-peminjaman {
        display: flex;
        width: 23rem;
        background-color: ${Colors.Nude};
        font-size: 0.75rem;
        padding: 0.625rem;
        margin-top: 0.625rem;
        margin-bottom: 0.625rem;
        box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    }
    .book-photo {
        width: 4rem;
        height: 4rem;
        border-radius: 0.25rem;
        margin-right: 1rem;
    }

    .riwayat-recap{
        text-align: start;
    }

    .history-peminjaman {
        margin: 3rem 0rem;
    }
    .history-absen, .history-peminjaman {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .history-recap {
        width: 23rem;
        height: 2.4rem;
        background-color: ${Colors.Nude};
        font-size: 0.875rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.625rem;
        margin-top: 0.625rem;
        margin-bottom: 0.625rem;
        box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    }

    .riwayat-button {
        background-color: ${Colors.Mustard};
        box-shadow: 4px 7px 6px rgba(0, 0, 0, 0.25);
        border-radius: 0.25px;
        border-color: ${Colors.Mustard};
        width: 10rem;
        height: 2rem;
        color: black;
        font-weight: bolder;
        font-size: 0.75rem;
        font-weight: 500;
    }
`;
