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
        width: 8rem;
        height: 1.725rem;
        font-size: 0.625rem;
        border-style: none;
        border-radius: 0.5rem;
        background-color: ${Colors.Mustard};
        box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    }

    .history{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 1.25rem 0.625rem;
    }

    .history-recap{
        width: 23rem;
        height: 2.4rem;
        background-color: ${Colors.Nude};
        font-size: 0.875rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.625rem;
        margin: 0.625rem;
        box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    }
`;
