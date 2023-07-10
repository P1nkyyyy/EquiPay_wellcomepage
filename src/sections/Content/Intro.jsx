import React from "react";
import { IntroWindow } from "../../components/IntroWindow";
import {
  IntroMakeTransactions,
  IntroCheckDebts,
  IntroCreateGroup,
} from "../../assets/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const Intro = () => {
  const { ref, inView: elementIsVisible, entry } = useInView({ threshold: 1 });

  const [currentSelected, setCurrentSelected] = useState(1);

  useEffect(() => {
    if (elementIsVisible) {
      const interval = setInterval(() => {
        setCurrentSelected((prevSelected) => {
          if (prevSelected === 4) {
            return 1;
          } else {
            return prevSelected + 1;
          }
        });
      }, 2000);
      return () => {
        clearInterval(interval);
        setCurrentSelected(1);
      };
    }
  }, [elementIsVisible]);
  return (
    <section ref={ref} className="intro">
      <div className="intro-container">
        <IntroWindow
          header="Create group"
          img={IntroCreateGroup}
          num="1"
          class={currentSelected === 1 ? "selected" : ""}
        />
        <IntroWindow
          header="Make transactions"
          img={IntroMakeTransactions}
          num="2"
          class={currentSelected === 2 ? "selected" : ""}
        />
        <IntroWindow
          header="Check debts"
          img={IntroCheckDebts}
          num="3"
          class={currentSelected === 3 ? "selected" : ""}
        />
      </div>
    </section>
  );
};
