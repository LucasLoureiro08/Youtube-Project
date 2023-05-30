import { Container, 
        LogoContainer, 
        ButtomContainer, 
        SearchContainer, SearchInputContainer,
        SearchInput,
        SearchButtom,
        HeaderButtom
        } from "./styles";
import { ButtomIcon } from "./styles";
import HamburguerIcon from '../../assets/hamburguer.png'
import Logo from "../../assets/logo.png"
import Lupa from "../../assets/search.png"
import MicIcon from "../../assets/microphone.png"
import CameraIcon from "../../assets/video.png"
import NotificationIcon from "../../assets/sino.png"

interface IProps {
    openMenu: boolean,
    setOpenMenu: (openMenu: boolean) => void;
}

function Header( { openMenu, setOpenMenu }: IProps) {
    return (
        <div>
            <Container>
                <LogoContainer>
                    <ButtomContainer onClick={() => setOpenMenu(!openMenu)} margin="0 10px 0 0">
                        <ButtomIcon alt="Sidebar Menu Buttom " src={ HamburguerIcon } />
                    </ButtomContainer>
                    <img 
                    style={{width: '100px'}} 
                    alt="Youtube Logo"
                    src= { Logo } />
                </LogoContainer>

                <SearchContainer>
                    <SearchInputContainer>
                        <SearchInput placeholder="Pesquisar"/>
                    </SearchInputContainer>
                    
                    <SearchButtom>
                        <ButtomIcon alt="Magnifying glass icon" src={ Lupa }/>
                    </SearchButtom>
                    <ButtomContainer margin='0 0 0 10px'>
                        <ButtomIcon alt="Sidebar Menu Buttom " src={ MicIcon } />
                    </ButtomContainer>
                </SearchContainer>

                <HeaderButtom>
                    <ButtomContainer margin='0 0 0 10px'>
                        <ButtomIcon alt="Sidebar Menu Buttom " src={ CameraIcon } />
                    </ButtomContainer>
                    <ButtomContainer margin='0 0 0 10px'>
                        <ButtomIcon alt="Sidebar Menu Buttom " src={ NotificationIcon } />
                    </ButtomContainer>
                    <ButtomContainer margin='0 0 0 10px'>
                        <strong>L</strong>
                    </ButtomContainer>
                </HeaderButtom>

            </Container>


        </div>
    )
}

export default Header;