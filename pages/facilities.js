import React from 'react';
import Head from '../components/head'
import { WisdomMain, WisdomFacility } from 'gsa-ui'
import styled from 'styled-components'

export default () => (
  <div>
    <Head>
      <title>Wisdom</title>
    </Head>
    <WisdomMain>
      <WisdomFacility/>
    </WisdomMain>
  </div>
)
