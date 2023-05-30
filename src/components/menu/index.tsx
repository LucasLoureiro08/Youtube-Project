import { useNavigate } from "react-router-dom";
import { Container, MenuItem } from "./styles";
import { ButtomIcon } from "./styles";
// import HomeIcon from "../../assets/homepage.png"
// import Shorts from "../../assets/Shorts.png"
// import Subscribe from "../../assets/Subscribe.png"
// import Library from "../../assets/library.png"
import { House, Video, MonitorPlay, Book, ClockCounterClockwise, VideoCamera, Clock, ThumbsUp   } from "@phosphor-icons/react";


const items = 
[
    {label: "Inicio", icon:  <House size={25}  weight="fill"/>, alt: "home-icon", link: '/'},
    {label: "Shorts", icon: <Video size={25} weight="fill" />, alt: "shorts-icon", link: '/shorts'},
    {label: "Inscrições", icon: <MonitorPlay size={25} />, alt: "subscribe-icon", link: '/subscription'},
]


const items2 = [
    {label: "Biblioteca", icon: <Book size={25} />, alt: "library-icon", link: '/library'},
    {label: "Histórico", icon: <ClockCounterClockwise size={25} />, alt: "historic-icon", link: '/history'},
    {label: "Seus Vídeos", icon: <VideoCamera size={25} />, alt: "my-videos-icon", link: '/yourvideos'},
    {label: "Assistir mais Tarde", icon: <Clock size={25} />, alt: "watch-later-icon", link: '/watchlater'},
    {label: "Videos que Gostei", icon: <ThumbsUp size={25} />, alt: "videos-marked-with-thumbs-up-icon", link: '/likedvideos'},
]

interface IProps {
    openMenu: boolean;
}

function Menu({ openMenu }: IProps ) {

    const navigate = useNavigate();
    
    return (
        <Container openMenu = {openMenu}>
            {items.map((item) => (
                <MenuItem openMenu = {openMenu} onClick={() => navigate(item.link)} >
                 {item.icon}
                    <span>{item.label}</span>
                </MenuItem>
            ))}
            <hr
                style={{
                background: '#CCC',
                color: '#CCC',
                borderColor: '#CCC',
                width: '100%',
                }}
            />
             {items2.map((item) => (
                <MenuItem openMenu = {openMenu} onClick={() => navigate(item.link)} >
                 {item.icon}
                    <span>{item.label}</span>
                </MenuItem>
            ))}
            <hr
                style={{
                background: '#CCC',
                color: '#CCC',
                borderColor: '#CCC',
                width: '100%',
                }}
            />
            {/* {items2.map((item) => (
                <MenuItem openMenu = {openMenu} >
                <ButtomIcon alt={item.alt} src={ item.iconSrc } />
                    <span>{item.label}</span>
                </MenuItem>
            ))} */}

        </Container>
        
    )
}


export default Menu;