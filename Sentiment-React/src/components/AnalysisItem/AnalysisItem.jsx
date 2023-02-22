import React, {useState} from 'react';

import styles from "./AnalysisItem.module.scss";
import ItemInfo from "../ItemInfo";

const AnalysisItem = ({sentence}) => {
  const [mouseCoords, setMouseCoords] = useState(null);

  return (
    <span
      onMouseMove={(e) => setMouseCoords({x: e.clientX, y: e.clientY})}
      className={`${styles[sentence["sentiment"].type]} ${styles.item}`}
    >
      {sentence.sentence}
      <span className={styles.itemInfo}>
        <ItemInfo mouseCoords={mouseCoords} sentiment={sentence.sentiment}/>
      </span>
    </span>
  );
};

export default AnalysisItem;