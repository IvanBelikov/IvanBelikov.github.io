import React from 'react';

import styles from "./FormTextArea.module.scss";

const FormTextArea = ({children, ...props}) => {
  return (
    <textarea className={styles.textarea} {...props} >{children}</textarea>
  );
};

export default FormTextArea;