import React, { useEffect, useState } from "react";
import { DASHBOARD_DATA } from "./statisticsData";
import { Container } from "./styles";
import Header from "sharedComponents/Header";

const Statistics = ({}) => {
  return (
    <Container>
      <Header />
      {DASHBOARD_DATA.map((iframe) => (
        <div>
          <iframe
            src={iframe.src}
            title={iframe.title}
            frameborder={iframe.frameBorder}
            width={iframe.width}
            height={iframe.height}
            allowTransparency={iframe.tranparency ? "allowtransparency" : ""}
          ></iframe>
        </div>
      ))}
    </Container>
  );
};

export default Statistics;
