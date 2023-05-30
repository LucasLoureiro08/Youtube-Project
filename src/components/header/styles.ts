import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 55px;
    background-color: #ffff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    position: -webkit-sticky;
`;

export const LogoContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const ButtomContainer = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin: ${({ margin }) => margin? margin : 0 };
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
        background-color: #f2f2f2;
    }
`;

export const ButtomIcon = styled.img`
    width: 1.2rem;
`;

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButtom = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

`;

export const HeaderButtom = styled.div`
    width: 200px;
    display: flex;
`;