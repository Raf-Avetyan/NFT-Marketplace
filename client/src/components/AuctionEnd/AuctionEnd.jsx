import "./AuctionEnd.scss";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

const EyeIcon = "/icons/Eye.svg";

const date = new Date("06 17 2024, 13:00");
const now = Date.now();

export default function AuctionEnd() {
  const diff = date - now;

  const prevSeconds = Math.trunc((diff / 1000) % 60);
  const prevMinutes = Math.trunc(diff / 1000 / 60) % 60;
  const prevHours = Math.trunc(diff / 1000 / 60 / 60);

  const [time, setTime] = useState([prevHours, prevMinutes, prevSeconds]); // [hours, minutes, seconds]
  const [hours, minutes, seconds] = time;

  useEffect(() => {
    let id;

    if (diff > 0) {
      id = setInterval(() => {
        setTime((prevTime) => {
          const [hours, minutes, seconds] = prevTime;

          if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(id);
            return [0, 0, 0];
          }

          let newHours = hours;
          let newMinutes = minutes;
          let newSeconds = seconds;

          if (seconds === 0) {
            if (minutes === 0) {
              newHours = hours === 0 ? 0 : hours - 1;
              newMinutes = 59;
            } else {
              newMinutes = minutes - 1;
            }
            newSeconds = 59;
          } else {
            newSeconds = seconds - 1;
          }

          return [newHours, newMinutes, newSeconds];
        });
      }, 1000);
    } else {
      setTime([0, 0, 0]);
      return;
    }

    return () => clearInterval(id);
  }, []);

  return (
    <section className="auction-end">
      <div className="auction-end__container">
        <div className="auction-end__content">
          <div className="auction-end__left left-auction-end">
            <div className="left-auction-end__author">
              <img src="/icons/Avatars/Avatar7.svg" alt="" />
              <span>Shroomie</span>
            </div>
            <div className="auction-end__title">Magic Mashrooms</div>
            <Button src={EyeIcon} className="auction-end__btn primary-btn">
              See NFT
            </Button>
          </div>
          <div className="auction-end__time time-auction-end">
            <div className="time-auction-end__title">Auction ends in:</div>
            <div className="time-auction-end__tense tense-time-auction-end">
              <div className="tense-time-auction-end__hours tense-time-auction-end__time">
                <span>{hours < 10 ? "0" + hours : hours}</span>
              </div>
              <span className="tense-time-auction-end__symbol">:</span>
              <div className="tense-time-auction-end__minutes tense-time-auction-end__time">
                <span>{minutes < 10 ? "0" + minutes : minutes}</span>
              </div>
              <span className="tense-time-auction-end__symbol">:</span>
              <div className="tense-time-auction-end__seconds tense-time-auction-end__time">
                <span>{seconds < 10 ? "0" + seconds : seconds}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
