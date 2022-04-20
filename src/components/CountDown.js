import { useCallback, useEffect, useState } from "react";
import {CDStyled, CdChildStyled, ExpiredStyled} from "../styles/Container.styles";


export default function UseCountdown(props){
  const countDownDate = new Date(props.cdDate).getTime();
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());
  
  const countTimer = useCallback(() => {
    setCountDown(countDownDate - new Date().getTime());
  }, [countDownDate]);

  useEffect(() => {
    const interval = setInterval(countTimer, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countTimer]);

  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  

  if(countDown > 0){
    return(
      <CDStyled>
        <CdChildStyled>{days} : {hours} : {minutes} : {seconds}</CdChildStyled>
      </CDStyled>
    );
  }else{
    return(
      <CDStyled><ExpiredStyled>😔You're late! This offer expired!</ExpiredStyled></CDStyled>
    );
  }

};

