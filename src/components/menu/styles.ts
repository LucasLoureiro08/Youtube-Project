import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu? '250px' : '100px'};
    height: calc(100vh - 55px);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: sticky;
    top: 55px;
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: 98%;
    min-height: ${({ openMenu }) => openMenu? '45px' : '70px'};
    border-radius: 10px;
    padding: 2px 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column'} ;
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu? 'none' : 'center'};
    span {
        margin-top: ${({ openMenu }) => openMenu? 'none' : '8px'};
        font-weight: ${({ openMenu }) => openMenu? '400' : '400'};
        margin-left: ${({ openMenu }) => openMenu? '20px' : 'none'};
        font-size: ${({ openMenu }) => openMenu? '16px' : '12px'};
    }
    cursor: pointer;
    :hover{
        background-color: #f2f2f2;
    }
`;

export const ButtomIcon = styled.img`
    width: 25px;
`;




