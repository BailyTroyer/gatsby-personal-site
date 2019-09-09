import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';

export default () => (
  <>
    <Helmet title="Welcome" />

    <Intro>
      Hi I'm Baily!
      I'm a student at <Highlight>UB</Highlight>,&nbsp; and a Software Engineer at <Highlight>ACV Auctions</Highlight>! My favorite tools and languages are <Highlight>Kubernetes</Highlight>, <Highlight>gRPC</Highlight>, <Highlight>Golang</Highlight> and <Highlight>Swift</Highlight>😃!
    </Intro>

    <BlockText
      heading="Who I am"
      description={(
        <>
          I'm a Senior studying CSE at the <a href="http://engineering.buffalo.edu/computer-science-engineering.html" target="_blank" rel="noopener noreferrer">University at Buffalo</a> and an Software Engineer at <a href="https://www.acvauctions.com/" target="_blank" rel="noopener noreferrer">ACV Auctions</a>.
          My most recent side-project is Cachr and I'm pushing myself to make posts on Medium. On the side, I like trying
          new restaurants and walking around the city!
        </>
      )}
    />
  </>
);
