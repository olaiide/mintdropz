import React, { Fragment } from "react";
import styles from "./Header.module.css";
import Logo from '../../assets/Logo.svg';
import Active from "../../assets/Polygon.svg";
const Header = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div>
            <img src={Logo} alt='mintdropz-logo' />
          </div>
          <div>
            <ul className={styles.ul}>
              <li className={styles.list}>
                Home{" "}
                <span className={styles.active}>
                  <img src={Active} alt='active' />
                </span>
              </li>
              <li className={styles.list}>Features</li>
              <li className={styles.list}>Roadmap</li>
              <li className={styles.list}>Team</li>
              <li className={styles.list}>
                <button className={styles.button}>Join our Discord</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
