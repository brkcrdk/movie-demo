import React, { useState } from "react";
import { Container, Tabs, Tab, Content } from "./BottomStyle";
import Credits from "./Credits/Credits";
import Detail from "./Overview/Overview";
import Similar from "./Similar/Similar";
import { Cast, MovieInfo } from "../../../../store/serverTypes";
interface Props {
  overview: string;
  cast: Cast[];
  similar: MovieInfo[];
}

const Bottom: React.FC<Props> = ({ overview, cast, similar }) => {
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
      <Content active={active === 2}>
        <Similar similar={similar} />
      </Content>
    </Container>
  );
};

export default Bottom;
