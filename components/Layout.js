export default function Layout(props) {
  return (
    <section>
      {props.children}
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
          }

          html,
          body {
            font-family: 'Exo 2', sans-serif;
            background: #fff;
          }

          section {
            overflow-y: auto;
            position: relative;
            min-height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          section .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            max-width: 90%;
          }

          ul {
            box-sizing: border-box;
            padding: 25px;
            text-align: left;
            list-style-type: none;
          }

          ul li,
          ul li a {
            text-decoration: none;
            line-height: 20px;
            font-size: 14px;
            color: #999;
            padding: 8px 0px;
          }

          ul li a:hover {
            color: black;
            cursor: pointer;
          }

          a {
            color: #999;
          }

          a:hover {
            color: #000;
          }

          .flex {
            display: flex;
          }

          .flex-col {
            flex-direction: column;
          }

          .align-center {
            align-items: center;
          }

          .card-border {
            border: 1px solid #999;
            border-radius: 5px;
            min-width: 250px !important;
            max-width: 100%;
          }

          .button {
            -webkit-appearance: none;
            position: relative;
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            text-transform: uppercase;
            text-align: center;
            white-space: nowrap;
            min-width: 135px;
            height: 32px;
            font-weight: 500;
            font-size: 12px;
            -ms-flex-negative: 0;
            flex-shrink: 0;
            color: rgb(255, 255, 255);
            background-color: rgb(37, 41, 46);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor: pointer;
            text-decoration: none;
            padding: 0px 16px;
            border-radius: 4px;
            border-width: 2px;
            border-style: solid;
            border-color: #000;
            -o-border-image: initial;
            border-image: initial;
            -webkit-transition: all 0.2s ease 0s;
            -o-transition: all 0.2s ease 0s;
            transition: all 0.2s ease 0s;
            overflow: hidden;
            outline: none;
          }

          .button:hover {
            background: white;
            color: black;
          }

          .action-link {
            color: #999;
            font-size: 14px;
            font-weight: 400;
            text-decoration: none;
          }

          .action-link:hover {
            color: black;
            cursor: pointer;
          }

          .font-size-50 {
            font-size: 50px;
          }

          .font-size-30 {
            font-size: 30px;
          }

          .font-size-15 {
            font-size: 15px;
          }

          .margin-sm {
            margin: 8px;
          }

          .margin-bottom-sm {
            margin-bottom: 8px;
          }

          .margin-top-sm {
            margin-top: 8px;
          }

          .margin-md {
            margin: 16px;
          }

          .margin-lg {
            margin: 32px;
          }

          .margin-left-auto {
            margin-left: auto;
          }

          .tagline {
            text-align: center;
            color: #999;
          }

          .align-start {
            align-self: flex-start;
          }

          .align-end {
            align-self: flex-end;
          }

          .min-width-150-px {
            min-width: 150px;
          }

          .padding-25-px {
            padding: 25px;
          }

          .max-width-500-px {
            max-width: 500px;
          }

          .dark-gray {
            color: #333;
          }

          .line-height-20-px {
            line-height: 20px;
            font-size: 14px;
          }

          .button.back-button {
            border: 0;
            background: white;
            color: black;
            min-width: auto;
            border-radius: 0;
            padding: 0px;
            color: #999;
          }

          .button.back-button::before {
            content: '<';
          }

          .button.back-button:hover {
            color: black;
            cursor: pointer;
          }

          .just-space-between {
            justify-content: space-between;
          }

          .just-center {
            justify-content: center;
          }

          .flex-wrap {
            flex-wrap: wrap;
          }

          .text-center {
            text-align: center;
          }

          .button.black.outline-btn {
            border: 2px solid rgba(12, 12, 13, 0.1);
            background: white;
            color: #666;
          }

          .button.black.outline-btn:hover {
            border-color: black;
            color: #000;
          }

          .accent {
            color: #50a586;
          }
        `}
      </style>
    </section>
  );
}
