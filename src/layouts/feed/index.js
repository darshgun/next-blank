import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useSession } from 'next-auth/client';
import classNames from 'classnames';
import { useWindowSize } from 'helpers';
import Template from 'layouts/templates/default';
import styles from './Feed.module.scss';

export default function Feed() {
  const [session] = useSession();
  /**
   * Thumbnail size calculation
   */
  const windowSize = useWindowSize();
  const [previewSize, setPreviewSize] = useState({ width: null, height: null });
  const feedGridRef = useRef();

  useEffect(() => {
    const feedGridColumns = windowSize.width > 768 ? 2 : 1;
    const feedGridGap = 24;
    const feedGridWidth =
      feedGridRef.current.clientWidth - feedGridGap * (feedGridColumns - 1);

    const previewWidth = feedGridWidth / feedGridColumns;
    const previewRatio = 74 / 52;
    setPreviewSize(() => ({
      width: `${previewWidth.toFixed(2)}px`,
      height: `${(previewWidth / previewRatio).toFixed(2)}px`,
    }));
  }, [windowSize]);

  return (
    <Template>
      <Head>
        <title>feed</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Feed</h1>
        </div>
        <div className={styles.feedGrid} ref={feedGridRef}>
          <Link href="#">
            <a>
              <article className={styles.feed}>
                <div className={styles.hover} />
                <div
                  style={{
                    ...previewSize,
                  }}
                  className={classNames(styles.postPreview)}
                >
                  {!session ? (
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19 13C19.34 13 19.67 13.04 20 13.09V10C20 8.9 19.11 8 18 8H17V6C17 3.24 14.76 1 12 1S7 3.24 7 6H9C9 4.34 10.34 3 12 3S15 4.34 15 6V8H6C4.89 8 4 8.9 4 10V20C4 21.1 4.89 22 6 22H13.81C13.3 21.12 13 20.1 13 19C13 15.69 15.69 13 19 13M12 17C10.9 17 10 16.11 10 15S10.9 13 12 13 14 13.9 14 15 13.11 17 12 17M22.5 17.25L17.75 22L15 19L16.16 17.84L17.75 19.43L21.34 15.84L22.5 17.25Z"
                      />
                    </svg>
                  )}
                  <img
                    src="https://via.placeholder.com/400x300"
                    alt="Alt"
                    {...previewSize}
                  />
                </div>
                <h2>Free illustrations</h2>
              </article>
            </a>
          </Link>
        </div>
      </div>
    </Template>
  );
}
