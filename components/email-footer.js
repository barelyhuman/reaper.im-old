import Padding from './padding'

export default function EmailFooter () {
  return (
    <Padding y={2}>
      <blockquote>
        Have something you want me to write about or have a comment on one of my
        posts? You can send an email to&nbsp;
        <a href='mailto:ahoy@barelyhuman.dev'>ahoy@barelyhuman.dev</a>
      </blockquote>
    </Padding>
  )
}
