import React, { useState } from "react";
import { Container, Tabs, Tab } from "./BottomStyle";
interface Props {}

const Bottom: React.FC<Props> = () => {
  const [active, setActive] = useState(0);
  const renderTabs = ["Info", "Cast", "Media", "Recommendations"].map(tab => (
    <Tab>x</Tab>
  ));

  return (
    <Container>
      <Tabs></Tabs>
    </Container>
  );
};

export default Bottom;
