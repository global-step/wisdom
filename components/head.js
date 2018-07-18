import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || 'GSA Wisdom Academy'}</title>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="apple-touch-icon" href="/static/apple-touch-icon.png" />
    <link rel="icon" href="/static/gsafavicon.ico" />
    <meta property="og:url" content='https://wisdom-academy.com/' />
    <meta property="og:title" content="GSA Wisdom Academy" />
    <meta property="og:description" content={props.description || defaultDescription} />
    <meta name="twitter:site" content='https://wisdom-academy.com/' />
    <meta name="twitter:card" content="summary_large_image" />
    {/* <meta name="twitter:image" content="https://cdn.gsacademy.com/Soltillo/home.jpg" /> */}
    {/* <meta property="og:image" content="https://cdn.gsacademy.com/Soltillo/home.jpg" /> */}
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:type" content="article" />
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
