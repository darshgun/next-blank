import { useEffect } from 'react';
import { Provider } from 'next-auth/client';
import 'styles/global.scss';

function App({ Component, pageProps }) {
  useEffect(() => {
    const body = document ? document.body : null;
    const window = window ? window : null;

    if (window && body) {
      const matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (matched) {
        console.log('Dark theme is preferred');
        body.classList.toggle('dark');
      }
    }
  }, []);

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
