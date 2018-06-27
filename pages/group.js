import React from 'react';
import Head from '../components/head'
import { WisdomMain, WisdomGroup } from 'gsa-ui'
import styled from 'styled-components'

export default () => (
  <div>
    <Head>
      <title>Wisdom</title>
    </Head>
    <WisdomMain>
      <WisdomGroup/>
    </WisdomMain>
  </div>
)

