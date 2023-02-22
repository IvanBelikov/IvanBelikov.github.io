import React, {useState} from 'react';

import styles from "./Analysis.module.scss";
import AnalysisItem from "../AnalysisItem";
import {v4} from "uuid";
import FormButton from "../../UI/Buttons/FormButton";

const Analysis = ({editText, analysis}) => {

  return (
    <div className={styles.analysis}>
      <h2>Result: <span className={`${styles[analysis.result.type]} ${styles.result}`}>{analysis.result.type}</span></h2>
      <p className={styles.polarity}>Polarity: {analysis.result["polarity"]}</p>
      <div className={styles.text}>
        <p>
          {analysis["sentences"].map((sentence) => (
              <AnalysisItem key={v4()} sentence={sentence}/>
            )
          )}
        </p>
      </div>
      <div className={styles.control}>
        <p className={styles.tip}>Tip: Click or hover on the sentence for more information.</p>
        <FormButton onClick={editText}>Edit</FormButton>
      </div>
    </div>
  );
};

export default Analysis;