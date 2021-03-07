import { useEffect, useRef } from 'react';

export const UtterancesComments = () => {
  const elemRef = useRef();

  useEffect(() => {
    if (!elemRef || !elemRef.current) {
      return;
    }

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://utteranc.es/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';
    scriptElem.setAttribute('repo', 'barelyhuman/reaper.im');
    scriptElem.setAttribute('issue-term', 'og:title');
    scriptElem.setAttribute('label', 'comments-blog');
    scriptElem.setAttribute('theme', 'github-light');
    elemRef.current.appendChild(scriptElem);
  }, [elemRef]);

  return (
    <>
      <section ref={elemRef} />
    </>
  );
};
