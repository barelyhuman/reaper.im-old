import { useEffect, useState } from 'react';
import cn from 'classnames';
import SearchInput from './search-input';
import { useRouter } from 'next/router';
import Mousetrap from 'mousetrap';

const OPTIONS = [
  'Home',
  'Blog',
  'Collections',
  'Work',
  'Contact',
  'Wallpapers',
  'Skills',
  'Github',
];

const NAVIGATIONKEYS = {
  'home':'/',
  'blog':'/blog',
  'collections':'/collections',
  'work':'/work',
  'contact':'/contact',
  'wallpapers':'/walls',
  'skills':'/skills',
  'github':'https://github.com/barelyhuman',
};

const GlobalSearch = ({ ...props }) => {
  const [visible, setVisibility] = useState(false);
  const router = useRouter();

  const searchWrapper = cn('global-search-wrapper', { show: visible });

  useEffect(() => {
    installKeyboard();
    return uninstallKeyboard;
  }, []);

  function installKeyboard() {
    console.log('Installing Keyboard Shortcuts');
    Mousetrap.bind('mod+k', function (e) {
      console.log('Exec Mod+k');
      setVisibility(true);
    });
  }

  function uninstallKeyboard() {
    Mousetrap.unbind('mod+k');
  }

  const handleSelection = (e) => {
    if (
      OPTIONS.map((item) => item.toLowerCase()).indexOf(e.toLowerCase()) > -1
    ) {
      const nextRoute = NAVIGATIONKEYS[e.toLowerCase()];
      setVisibility(false);
      router.push(nextRoute);
    }
  };

  const handleDismiss = () => {
    setVisibility(false);
  };

  return (
    <>
      <div className={searchWrapper}>
        <SearchInput
          show={visible}
          data={OPTIONS}
          onConfirm={handleSelection}
          onClose={handleDismiss}
        />
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
            background: #12121200;
            z-index: 1;
          }

          .global-search-wrapper.show {
            display: block;
          }
        `}
      </style>
    </>
  );
};

export default GlobalSearch;
