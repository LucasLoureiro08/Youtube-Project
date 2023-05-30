import { Container, ImageBanner, TitleContainer, ChannelImage, TextContainer, Title, TextCard } from "./styles";

function VideoComponent() {

    
    
    return (
        <Container>
           
           <ImageBanner src="https://media.wizards.com/2017/images/daily/41mztsnrdm.jpg" />
           <TitleContainer>
                <ChannelImage>
                    LL
                </ChannelImage>
                <TextContainer>
                    <Title>
                        Como jogar Magic: The Gathering
                    </Title>
                    <TextCard>
                        Magic: The Gathering
                    </TextCard>
                    <TextCard>
                        110 milhões de visualizações - 1 mês atrás
                    </TextCard>
                </TextContainer>
           </TitleContainer>

        </Container>
        
    )
}


export default VideoComponent;