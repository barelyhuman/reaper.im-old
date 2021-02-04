import React, { createRef } from 'react';
import cn from 'classnames';

export default class HoloComplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      holoStartValue: '',
      holoEndValue: '',
      selectedIndex: 0,
      allSuggestions: [],
    };

    this.selectedElementRef = createRef();

    this.escFunction = this.escFunction.bind(this);
    this.sendCloseEvent = this.handleSendCloseEvent.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  escFunction(e) {
    if (e.keyCode === 27) {
      this.handleSendCloseEvent();
    }
  }

  handleSendCloseEvent() {
    if (
      this.props &&
      this.props.onClose &&
      typeof this.props.onClose === 'function'
    ) {
      this.props.onClose();
    }
  }

  handleKeyPress(e) {
    const { selectedIndex, allSuggestions } = this.state;

    // Up Arrow
    if (e.keyCode === 38 && selectedIndex - 1 >= 0) {
      this.setState({ selectedIndex: selectedIndex - 1 });
      setTimeout(() => {
        this.scrollToSelected(-1);
      }, 100);
    }

    // Down Arrow
    if (e.keyCode === 40 && selectedIndex + 1 < allSuggestions.length) {
      console.log(selectedIndex);
      this.setState({ selectedIndex: selectedIndex + 1 });
      setTimeout(() => {
        this.scrollToSelected(1);
      }, 100);
    }
  }

  scrollToSelected(dir) {
    if (this.selectedElementRef && this.selectedElementRef.current) {
      const el = this.selectedElementRef.current;
      const parentYPosition = this.selectedElementRef.current.parentElement
        .scrollTop;
      const parentTop = this.selectedElementRef.current.parentElement.getBoundingClientRect()
        .top;
      const parentBottom = this.selectedElementRef.current.parentElement.getBoundingClientRect()
        .bottom;
      const elTop = el.getBoundingClientRect().top;
      const elBottom = el.getBoundingClientRect().bottom;

      console.log({
        parentYPosition,
      });

      if (
        elTop > parentTop &&
        elBottom < parentBottom &&
        elTop < parentBottom &&
        elBottom > parentTop
      ) {
      } else {
        if (dir > 0) {
          this.selectedElementRef.current.parentElement.scrollTo({
            top: parentYPosition + (elBottom - elTop),
            behaviour: 'smooth',
          });
        } else {
          this.selectedElementRef.current.parentElement.scrollTo({
            top: parentYPosition - (elBottom - elTop),
            behaviour: 'smooth',
          });
        }
      }
      // if (false) {
      //   console.log('In view');
      // } else {
      //   this.selectedElementRef.current.scrollIntoView();
      // }
    }
  }

  handleInputChange(e) {
    const { value } = e.target;

    const suggestions = this.props.data.filter((item) =>
      item.toLowerCase().startsWith(value.toLowerCase())
    );

    if (suggestions.length) {
      const casedSuggestion = suggestions[0]
        .toLowerCase()
        .replace(value.toLowerCase(), value);
      const sliceFirst = casedSuggestion.slice(0, value.length);
      const sliceEnd = casedSuggestion.slice(value.length);
      this.setState({
        holoStartValue: sliceFirst,
        holoEndValue: sliceEnd,
        allSuggestions: suggestions,
      });
    } else {
      this.setState({
        holoStartValue: value,
        holoEndValue: '',
      });
    }

    if (e.keyCode === 13) {
      const valueExists = suggestions.find((item) => item === value);
      if (valueExists) {
        this.props.onConfirm(value);
      } else {
        this.props.onConfirm(suggestions[this.state.selectedIndex || 0]);
      }
    }

    if (!value) {
      this.setState({
        holoStartValue: '',
        holoEndValue: '',
      });
    }
  }

  render() {
    const { holoStartValue, holoEndValue, selectedIndex } = this.state;
    const { show } = this.props;
    return (
      <>
        {show ? (
          <div
            className="autocomplete-wrapper"
            onClick={this.handleSendCloseEvent}
          >
            <div className="autocomplete">
              <div
                className="autocomplete-background"
                data-autocomplete={holoEndValue}
              >
                {holoStartValue}
              </div>
              <input
                type="text"
                className="autocomplete-input"
                autoFocus
                placeholder="Search"
                onKeyDown={(e) => this.handleKeyPress(e)}
                onKeyUp={(e) => this.handleInputChange(e)}
              />
            </div>
            <div className="autocomplete-suggestions">
              {this.state.allSuggestions.map((item, index) => {
                const active = selectedIndex === index;
                const classNames = cn('chevron-right', {
                  active,
                  hidden: !active,
                });
                return (
                  <React.Fragment key={`suggestion-${item}-${index}`}>
                    <div
                      className="suggestion-list-item flex align-center"
                      ref={active ? this.selectedElementRef : null}
                    >
                      <i className={classNames}></i>
                      {item}
                    </div>
                  </React.Fragment>
                );
              })}
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
              background: white;
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

            .autocomplete-suggestions {
              position: absolute;
              top: 40%;
              width: 550px;
              left: 50%;
              max-height: 350px;
              transform: translateX(-50%);
              overflow: hidden;
            }

            .autocomplete-suggestions .suggestion-list-item {
              font-size: 30px;
              color: #333;
              padding: 16px 8px;
              border-bottom: 1px solid #eee;
            }

            .chevron-right {
              box-sizing: border-box;
              position: relative;
              display: block;
              transform: scale(var(--ggs, 1));
              width: 20px;
              height: 20px;
              border: 2px solid transparent;
              border-radius: 100px;
              opacity: 0;
              transition: 250ms opacity ease-in;
            }

            .chevron-right.active {
              opacity: 1;
            }

            .chevron-right::after {
              content: '';
              display: block;
              box-sizing: border-box;
              position: absolute;
              width: 14px;
              height: 14px;
              border-bottom: 4px solid;
              border-right: 4px solid;
              transform: rotate(-45deg);
              right: 6px;
              top: 4px;
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
    );
  }
}
