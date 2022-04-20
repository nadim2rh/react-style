import travelImg from "../img/tv.jpg";
import {CardContainer, ContentContainer,UpperSection, MidSection, ButtonContainer, ToogleContainer} from "../styles/Container.styles";
import {Title, Para, Img, CheckBoxWrapper, CheckBox, CheckBoxLabel} from "../styles/Elements.styels";
import UseCountdown from "./CountDown";

export default function Holiday({changeTheme, themeButtonText}){
    return(
        <CardContainer>
            <ContentContainer>
                <UpperSection>
                    <Title>Exclusive Holiday !</Title>
                    <UseCountdown cdDate="Apr 25, 2022 21:00:00"/>
                </UpperSection>
                <MidSection>
                    <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna. Dignissim sodales ut eu. Sed id semper risus in hendrerit gravida rutrum quisque non. Pretium vulputate sapien nec sagittis aliqua arcu. Ante in nibh mauris cursus.</Para>
                    <Img alt="travel" src={travelImg} width="300px"/>
                </MidSection>
                <ButtonContainer>
                    <a href="#">Send Inquiry</a>
                    <a href="#">Book Now</a>
                    <ToogleContainer>
                        <p>{themeButtonText}</p>
                        <CheckBoxWrapper>
                            <CheckBox id="checkbox" type="checkbox" onClick={changeTheme}/>
                            <CheckBoxLabel htmlFor="checkbox" />
                        </CheckBoxWrapper>
                    </ToogleContainer>
                </ButtonContainer>
            </ContentContainer>
        </CardContainer>
    );
};