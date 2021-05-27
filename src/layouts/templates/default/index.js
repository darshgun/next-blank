import classNames from 'classnames';
import Header from 'layouts/templates/partials/header';
import Footer from 'layouts/templates/partials/footer';
import styles from './Template.module.scss';

export default function Template({
  children,
  footer = true,
  contentsCentered,
}) {
  return (
    <div className={styles.template}>
      <Header />
      <div
        className={classNames(styles.content, {
          [styles.contentsCentered]: contentsCentered,
        })}
      >
        {children}
      </div>
      {footer && <Footer />}
    </div>
  );
}
