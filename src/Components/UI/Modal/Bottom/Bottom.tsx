import React, { useState } from "react";
import { Container, Tabs, Tab, Content } from "./BottomStyle";
import Credits from "./Credits/Credits";
import Detail from "./Overview/Overview";
import { Cast } from "../../../../store/serverTypes";
interface Props {
  overview: string;
  cast: Cast[];
}

const Bottom: React.FC<Props> = ({ overview, cast }) => {
  const [active, setActive] = useState(0);

  const handleTab = (index: number) => {
    if (active !== index) setActive(index);
  };
  const renderTabs = ["Overview", "Cast", "Similar Movies"].map(
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
      <Content active={active === 0}>
        <Detail overview={overview} />
      </Content>
      <Content active={active === 1}>
        <Credits cast={cast} />
      </Content>
    </Container>
  );
};

export default Bottom;
