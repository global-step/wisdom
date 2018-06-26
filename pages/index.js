import React from 'react';
import Head from '../components/head'
import { WisdomMain, WisdomHome } from 'gsa-ui'
import styled from 'styled-components'
import Page from '../components/Page'

export default () => (
  <Page>
    <Head>
      <title>Wisdom</title>
    </Head>
    <WisdomMain>
      <WisdomHome/>
    </WisdomMain>
  </Page>
)
