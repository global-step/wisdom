import React from 'react';
import Head from '../components/head'
import { WisdomMain, WisdomVisits } from 'gsa-ui'
import styled from 'styled-components'

export default () => (
  <div>
    <Head>
      <title>Wisdom</title>
    </Head>
    <WisdomMain>
      <WisdomVisits/>
    </WisdomMain>
  </div>
)

