import travelImg from "../img/tv.jpg";
import {CardContainer, ContentContainer,UpperSection, MidSection, ButtonContainer} from "../styles/Container.styles";
import {Title, Para, Img} from "../styles/Elements.styels";
import UseCountdown from "./CountDown";

export default function Holiday(){
    return(
        <CardContainer>
            <ContentContainer>
                <UpperSection>
                    <Title color="#ffffff">Exclusive Holiday !</Title>
                    <UseCountdown />
                </UpperSection>
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