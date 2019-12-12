import React, { useState } from "react";
import { Container, Tabs, Tab, Content } from "./BottomStyle";
import Detail from "./Overview/Overview";
import Media from "./Media/Media";
import { ImageProps, VideoProps } from "../../../../store/serverTypes";
interface Props {
  overview: string;
  backdrops: ImageProps[];
  posters: ImageProps[];
  videos: VideoProps[];
}

const Bottom: React.FC<Props> = ({ overview, backdrops, posters, videos }) => {
  const [active, setActive] = useState(0);

  const handleTab = (index: number) => {
    if (active !== index) setActive(index);
  };
  const renderTabs = ["Overview", "Cast", "Media", "Recommendations"].map(
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
        <Media videos={videos} backdrops={backdrops} posters={posters} />
      </Content>
    </Container>
  );
};

export default Bottom;
