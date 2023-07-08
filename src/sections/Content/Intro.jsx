import React from "react";
import { IntroWindow } from "../../components/IntroWindow";
import {
  IntroMakeTransactions,
  IntroCheckDebts,
  IntroCreateGroup,
} from "../../assets/image";

export const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-container">
        <IntroWindow header="Create group" img={IntroCreateGroup} num="1" />
        <IntroWindow
          header="Make transactions"
          img={IntroMakeTransactions}
          num="2"
        />
        <IntroWindow header="Check debts" img={IntroCheckDebts} num="3" />
      </div>
    </section>
  );
};
