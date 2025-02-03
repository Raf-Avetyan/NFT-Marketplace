import { useState } from "react";
import "./StartOfWork.scss";
import StartOfWorkStep from "./StartOfWorkStep/StartOfWorkStep";

export default function StartOfWork() {
  const [workStartSteps, setWorkStartSteps] = useState([
    {
      id: 1,
      image: "/icons/Start-Of-Work_wallet.svg",
      title: "Setup Your wallet",
      text: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      id: 2,
      image: "/icons/Start-Of-Work_collection.svg",
      title: "Create Collection",
      text: "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      id: 3,
      image: "/icons/Start-Of-Work_earning.svg",
      title: "Start Earning",
      text: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ]);
  return (
    <section className="start-of-work">
      <div className="start-of-work__container">
        <div className="start-of-work__title">How it works</div>
        <div className="start-of-work__text">Find out how to get started</div>
        <div className="start-of-work__content content-start-of-work">
          {workStartSteps.map((step) => (
            <StartOfWorkStep key={step.id} image={step.image} title={step.title} text={step.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
