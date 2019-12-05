import React, { useState } from "react";
import { Tab, Tabs, Content } from "./ActorStyle";
interface Props {}
//TODO: Add tabs to here..
const Actors: React.FC<Props> = () => {
  const [active, setActive] = useState(0);
  const handleTab = (index: number) => {
    if (active !== index) setActive(index);
  };

  const numbers = [1, 2, 3, 4];
  return (
    <div>
      <Tabs>
        {numbers.map((number, key) => (
          <Tab
            active={active === key}
            key={key}
            onClick={() => {
              handleTab(key);
            }}
          >{`Tab ${number}`}</Tab>
        ))}
      </Tabs>

      {numbers.map((number, key) => (
        <Content active={active === key}>Actor {number}</Content>
      ))}
    </div>
  );
};

export default Actors;
