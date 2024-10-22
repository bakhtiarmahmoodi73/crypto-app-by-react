import styles from "./Layout.module.css";

function Layout({children}) {
  return <>
  <header className={styles.header}>
    <h1>Crypto App</h1>
    <p><a href="https://google.com">google</a> | react.js</p>
  </header>
  {children}
  <footer className={styles.footer}>
    <p>Developed by Bakhtiar Mahmoodi</p>
  </footer>
  </>;
}

export default Layout;
