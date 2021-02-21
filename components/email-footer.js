import Padding from './padding';

export default function EmailFooter() {
  return (
    <Padding y={2}>
      <blockquote>
        Have something you want me to write about or have a comment on one of my
        posts? You can send an email to&nbsp;
        <a href="mailto:ahoy@barelyhuman.dev">ahoy@barelyhuman.dev</a>
      </blockquote>
      <br />
      <div>
        <p align="center">If you do like the content and/or tools.</p>
        <div align="center">
          <a href="https://www.buymeacoffee.com/barelyhuman">
            <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=barelyhuman&button_colour=000000&font_colour=ffffff&font_family=Inter&outline_colour=ffffff&coffee_colour=FFDD00" />
          </a>
        </div>
      </div>
    </Padding>
  );
}
