import React from 'react';
import FormTextArea from "../../UI/TextAreas/FormTextArea";
import FormButton from "../../UI/Buttons/FormButton";

import styles from "./Form.module.scss";

const Form = ({text, setText, getStatistic}) => {

  return (
    <div className={styles.form}>
      <FormTextArea value={text} onChange={(e) => setText(e.target.value)} placeholder="Paste your text here."/>
      <div className={styles.sendButtonPlate}>
        <FormButton onClick={() => getStatistic(text)}>Check</FormButton>
      </div>
    </div>
  );

};

export default Form;