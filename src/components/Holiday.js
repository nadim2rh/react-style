import travelImg from "../img/tv.jpg";
import {CardContainer, ContentContainer, MidSection, ButtonContainer} from "../styles/Container.styles";
import {H1, Para, Img} from "../styles/Elements.styels";

export default function Holiday(){
    return(
        <CardContainer>
            <ContentContainer>
                <H1 color="#ffffff">Exclusive Holiday</H1>
                <MidSection>
                    <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna. Dignissim sodales ut eu. Sed id semper risus in hendrerit gravida rutrum quisque non. Pretium vulputate sapien nec sagittis aliqua arcu. Ante in nibh mauris cursus.</Para>
                    <Img alt="travel" src={travelImg} width="300px"/>
                </MidSection>
                <ButtonContainer>
                    <a href="#">Send Inquiry</a>
                    <a href="#">Book Now</a>
                </ButtonContainer>
            </ContentContainer>
        </CardContainer>
    );
};