import { useCallback, useEffect, useState } from "react";
import {CDStyled} from "../styles/Elements.styels";


export default function UseCountdown(){
  const countDownDate = new Date("Apr 26, 2022 21:00:00").getTime();
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
      <CDStyled>{days} : {hours} : {minutes} : {seconds}</CDStyled>
    );
  }else{
    return(
      <CDStyled>😔You're late! Offer Expired!</CDStyled>
    );
  }

};

