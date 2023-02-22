import React from 'react';

import styles from "./ItemInfo.module.scss";

const ItemInfo = ({sentiment, mouseCoords}) => {

  return (
    <span
      style={mouseCoords && {left: mouseCoords.x - 100, top: mouseCoords.y + 20}}
      className={styles.info}
    >
      <span>Polarity: {sentiment["polarity"]}</span>
      <span className={styles.type}>Type: {" "}
        <span className={styles[sentiment["type"]]}>{sentiment["type"]}</span>
      </span>
    </span>
  );
};

export default ItemInfo;