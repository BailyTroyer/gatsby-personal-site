import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { BlockText } from 'components/block-text/BlockText';

export default () => (
  <>
    <Helmet title="About" />

    <Intro>
      About page
    </Intro>

    <BlockText
      heading="Who I am"
      description={(
        <>
          I'm a Senior studying CSE at the <a href="http://engineering.buffalo.edu/computer-science-engineering.html" target="_blank" rel="noopener noreferrer">University at Buffalo</a> and an SRE intern at <a href="https://www.acvauctions.com/" target="_blank" rel="noopener noreferrer">ACV Auctions</a>.
          My most recent side-project is Cachr and I really like making reliable and deployable systems. On the side, I like trying
          new restaurants and walking around the city!
        </>
      )}
    />
  </>
);
