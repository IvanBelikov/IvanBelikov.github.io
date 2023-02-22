import React from 'react';

import styles from "./ErrorModalWindow.module.scss";

const ErrorModalWindow = ({header, body}) => {
  return (
    <div className={styles.error}>
      <h3 className={styles.header}>{header}</h3>
      <p>{body}</p>
    </div>
  );
};

export default ErrorModalWindow;