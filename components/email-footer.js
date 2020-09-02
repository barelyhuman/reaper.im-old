import Spacer from './Spacer'

export default function EmailFooter () {
  return (
    <p className='card-border'>
      <Spacer y={2} />
      <Spacer y={2} x={1} inline />
      Have something you want me to write about or have a comment on one of my
      posts? You can send an email to&nbsp;
      <a href='mailto:ahoy@barelyhuman.dev'>ahoy@barleyhuman.dev</a>
      <Spacer y={2} x={1} />
    </p>
  )
}
