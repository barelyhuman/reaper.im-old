import cn from 'classnames'
import Mousetrap from 'mousetrap'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import checklistsConfigs from 'static-db/checklists-collection.json'
import searchConfig from 'static-db/search-config'
import { Autocomplete } from './autocomplete'

const OPTIONS = searchConfig.OPTIONS

const NAVIGATIONKEYS = searchConfig.NAVIGATIONKEYS

checklistsConfigs.forEach((item) => {
  OPTIONS.push(item.title)
  NAVIGATIONKEYS[item.title.toLowerCase()] = item.link
})

const GlobalSearch = ({ ...props }) => {
  const [visible, setVisibility] = useState(false)
  const router = useRouter()

  const searchWrapper = cn('global-search-wrapper', { show: visible })

  useEffect(() => {
    installKeyboard()
    return uninstallKeyboard
  }, [])

  function installKeyboard () {
    console.log('Installing Keyboard Shortcuts')
    Mousetrap.bind('mod+k', function (e) {
      console.log('Exec Mod+k')
      setVisibility(true)
    })
  }

  function uninstallKeyboard () {
    Mousetrap.unbind('mod+k')
  }

  const handleSelection = (e) => {
    if (
      OPTIONS.map((item) => item.toLowerCase()).indexOf(e.toLowerCase()) > -1
    ) {
      const nextRoute = NAVIGATIONKEYS[e.toLowerCase()]
      router.push(nextRoute)
      setTimeout(() => {
        setVisibility(false)
      }, 250)
    }
  }

  const handleDismiss = () => {
    setVisibility(false)
  }

  return (
    <>
      <div className={searchWrapper}>
        {visible ? (
          <Autocomplete
            menuItems={OPTIONS.map((item) => ({
              label: item,
              value: item.toLowerCase()
            }))}
            onSelect={(item) => {
              handleSelection(item.value)
            }}
            onClose={() => {
              setVisibility(false)
            }}
          />
        ) : null}
      </div>
      <style jsx>
        {`
          .global-search-wrapper {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 1;
          }

          .global-search-wrapper.show {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #12121255;
          }
        `}
      </style>
    </>
  )
}

export default GlobalSearch
