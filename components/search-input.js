export default class HoloComplete extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      holoStartValue: '',
      holoEndValue: ''
    }

    this.escFunction = this.escFunction.bind(this)
    this.sendCloseEvent = this.sendCloseEvent.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this.escFunction, false)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.escFunction, false)
  }

  escFunction (e) {
    if (e.keyCode === 27) {
      this.sendCloseEvent()
    }
  }

  sendCloseEvent () {
    if (this.props.onClose && typeof this.props.onClose === 'function') {
      this.props.onClose()
    }
  }

  handleInputChange (e) {
    const { value } = e.target

    if (e.keyCode === 13) {
      this.props.onConfirm(value)
    }

    const suggestions = this.props.data.filter((item) =>
      item.toLowerCase().startsWith(value.toLowerCase())
    )

    if (suggestions.length) {
      const casedSuggestion = suggestions[0]
        .toLowerCase()
        .replace(value.toLowerCase(), value)
      const sliceFirst = casedSuggestion.slice(0, value.length)
      const sliceEnd = casedSuggestion.slice(value.length)
      this.setState({
        holoStartValue: sliceFirst,
        holoEndValue: sliceEnd
      })
    } else {
      this.setState({
        holoStartValue: value,
        holoEndValue: ''
      })
    }

    if (!value) {
      this.setState({
        holoStartValue: '',
        holoEndValue: ''
      })
    }
  }

  render () {
    const { holoStartValue, holoEndValue } = this.state
    const { show } = this.props
    return (
      <>
        {show ? (
          <div
            className='autocomplete-wrapper'
            onClick={this.sendCloseEvent}
          >
            <div className='autocomplete white-theme'>
              <div
                className='autocomplete-background'
                data-autocomplete={holoEndValue}
              >
                {holoStartValue}
              </div>
              <input
                type='text'
                className='autocomplete-input'
                autoFocus
                placeholder='Search'
                onKeyUp={(e) => this.handleInputChange(e)}
              />
            </div>
          </div>
        ) : null}
        <style jsx>
          {`
            .autocomplete-wrapper {
              height: 100vh;
              width: 100vw;
              position: fixed;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              background: transparent; 
            }

            .autocomplete {
              position: absolute;
              box-sizing: border-box;
              width: 550px;
              padding: 10px;
              height: 60px;
              border: none;
              top: 35%;
              left: 50%;
              transform: translate(-50%, -50%);
            }

            .autocomplete-background {
              font-family: sans-serif;
              display: inline-block;
              position: absolute;
              color: transparent;
            }

            .autocomplete-background::after {
              content: attr(data-autocomplete);
              color: #dee3e3;
            }

            .autocomplete-input {
              background: transparent;
              position: absolute;
              color: #5c6b6b;
              border: none;
              outline: none;
            }

            .autocomplete-input,
            .autocomplete-background,
            .autocomplete-background::after {
              font-family: sans-serif;
              font-weight: 300;
              font-size: 35px;
              box-sizing: border-box;
              background-color: transparent;
              border: none;
              padding: 0;
              font-size: 34px;
              line-height: 40px;
              outline: none;
            }

            .autocomplete.black-theme {
              background: black;
              border-radius: 6px;
              box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.12);
            }

            .autocomplete.black-theme .autocomplete-input {
              color: white;
            }

            .autocomplete.black-theme .autocomplete-background::after {
              color: #555;
            }

            .autocomplete.bordered-theme {
              background: #fff;
              border-radius: 6px;
              border: 2px solid #333;
            }

            .autocomplete.bordered-theme .autocomplete-input {
              color: #333;
            }

            .autocomplete.bordered-theme .autocomplete-background::after {
              color: #888;
            }


            .autocomplete.white-theme {
              background: white;
              border: 1px solid #ddd;
              border-radius: 6px;
              box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.12);
            }

            .autocomplete.white-theme .autocomplete-input {
              color: black;
            }

            .autocomplete.white-theme .autocomplete-background::after {
              color: #555;
            }

          `}
        </style>
      </>
    )
  }
}
