import Link from 'next/link'

const HLink = ({ link, children }) => {
  const isHttps = link.indexOf('http') > -1 || link.indexOf('https') > -1
  if (isHttps) {
    return <a href={link}>{children}</a>
  }
  return (
    <Link href={link}>
      <a>{children}</a>
    </Link>
  )
}

export default HLink
