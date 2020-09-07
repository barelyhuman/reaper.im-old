import Padding from './padding'

export default function EmailFooter () {
  return (
    <p className='card-border'>
      <Padding all={2}>
        Have something you want me to write about or have a comment on one of my
        posts? You can send an email to&nbsp;
        <a href='mailto:ahoy@barelyhuman.dev'>ahoy@barelyhuman.dev</a>
      </Padding>
    </p>
  )
}
