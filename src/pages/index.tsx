import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';

export default () => (
  <>
    <Helmet title="Home" />

    <Intro>
      Hi I'm Baily, a student at <Highlight>UB</Highlight>,&nbsp; and an SRE Intern at <Highlight>ACV Auctions</Highlight>,&nbsp;using <Highlight>Kubernetes</Highlight>, <Highlight>gRPC</Highlight>, <Highlight>GoLang</Highlight> and Swift 😃!
    </Intro>

    <BlockText
      heading="Who I am"
      description={(
        <>
          I'm a Senior studying CSE at the <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">University at Buffalo</a> and an SRE intern at <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">ACV Auctions</a>.
          My most recent side-project is Cachr and I really like making reliable and deployable systems. On the side, I like trying
          new restaurants and walking around the city!
        </>
      )}
    />
  </>
);
