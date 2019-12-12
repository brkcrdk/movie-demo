import React, { useState } from "react";
import { Container, Tabs, Tab, Content } from "./BottomStyle";
interface Props {}

const Bottom: React.FC<Props> = () => {
  const [active, setActive] = useState(0);

  const handleTab = (index: number) => {
    if (active !== index) setActive(index);
  };
  const renderTabs = ["Info", "Cast", "Media", "Recommendations"].map(
    (tab, index) => (
      <Tab
        active={active === index}
        onClick={() => {
          handleTab(index);
        }}
      >
        {tab}
      </Tab>
    )
  );
  return (
    <Container>
      <Tabs>{renderTabs}</Tabs>
      <Content active={active === 0}>content 0</Content>
    </Container>
  );
};

export default Bottom;
