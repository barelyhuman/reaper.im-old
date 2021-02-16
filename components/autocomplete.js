import cx from 'classnames'
import { Fragment, useState, default as React, useRef } from 'react'
import PropTypes from 'prop-types'

export const Autocomplete = ({
  onClose = () => {},
  onSelect = () => {},
  menuItems = []
}) => {
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [filtered, setFiltered] = useState(menuItems)

  const inputRef = useRef(null)
  const selectedElementRef = useRef(null)

  const handleMenuItemClick = (menuItem) => {
    onSelect(menuItem)
  }

  const wrapperClasses = cx('wrapper', { open })

  const handleChange = (e) => {
    setValue(e.target.value)
    if (!e.target.value.length) {
      setFiltered(menuItems)
    } else {
      setFiltered(
        menuItems.filter((item) =>
          item.label.toLowerCase().includes(e.target.value.toLowerCase())
        )
      )
    }
  }

  const scrollToSelected = (dir) => {
    if (selectedElementRef && selectedElementRef.current) {
      const el = selectedElementRef.current
      const parentElement = selectedElementRef.current.parentElement
      const parentYPosition = parentElement.scrollTop
      const parentTop = parentElement.getBoundingClientRect().top

      const parentBottom = parentElement.getBoundingClientRect().bottom
      const elTop = el.getBoundingClientRect().top
      const elBottom = el.getBoundingClientRect().bottom

      if (
        elTop > parentTop &&
        elBottom < parentBottom &&
        elTop < parentBottom &&
        elBottom > parentTop
      ) {
      } else {
        if (dir > 0) {
          parentElement.scrollTo({
            top: parentYPosition + (elBottom - elTop),
            behaviour: 'smooth'
          })
        } else {
          parentElement.scrollTo({
            top: parentYPosition - (elBottom - elTop),
            behaviour: 'smooth'
          })
        }
      }
      // if (false) {
      //   console.log('In view');
      // } else {
      //   this.selectedElementRef.current.scrollIntoView();
      // }
    }
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      onSelect && onSelect(filtered[selectedIndex])
    }

    if (e.keyCode === 27) {
      onClose && onClose()
    }

    // Up Arrow
    if (e.keyCode === 38 && selectedIndex - 1 >= 0) {
      setSelectedIndex(selectedIndex - 1)
      setTimeout(() => {
        scrollToSelected(-1)
      }, 100)
    }

    // Down Arrow
    if (e.keyCode === 40 && selectedIndex + 1 < filtered.length) {
      setSelectedIndex(selectedIndex + 1)
      setTimeout(() => {
        scrollToSelected(1)
      }, 100)
    }

    if (!filtered[selectedIndex]) {
      setSelectedIndex(0)
    }
  }

  return (
    <>
      <div className='autocomplete outer-wrapper'>
        <div className={wrapperClasses}>
          <div
            className='menu-button'
            onClick={() => {
              inputRef.current && inputRef.current.focus()
            }}
          >
            <div className='menu-input'>
              <input
                ref={inputRef}
                autoFocus
                value={value}
                onKeyDown={handleKeyPress}
                onChange={handleChange}
              />
            </div>
            <div className='icon-wrapper'>
              <div className='rectangle rectangle1' />
              <div className='rectangle rectangle2' />
            </div>
          </div>
          <div className='menu'>
            {filtered.map((item, index) => {
              const isActive = selectedIndex === index
              const cn = cx('menu-item', { active: isActive })
              return (
                <Fragment key={item.value}>
                  <div
                    className={cn}
                    ref={isActive ? selectedElementRef : null}
                    onClick={() => handleMenuItemClick(item)}
                  >
                    <div className='menu-item-icon'>{item.icon}</div>
                    <div className='menu-item-text'>{item.label}</div>
                  </div>
                </Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

Autocomplete.propTypes = {
  menuItems: PropTypes.array,
  open: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string
}
