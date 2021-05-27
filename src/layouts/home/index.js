import Head from 'next/head';
import Template from 'layouts/templates/default';
import styles from './Home.module.scss';

export default function Home() {
  return (
    <Template contentsCentered>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Hero</h1>
        </div>
      </div>
    </Template>
  );
}
