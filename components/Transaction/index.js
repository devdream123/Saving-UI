import React from "react";
import styles from "./Transaction.module.scss";
import { convertToDollar } from "./utils/convertToDollar";

export const Transaction = ({
  id,
  name,
  icon,
  currentSavedCents,
  goalTarget,
}) => (
  <div className={styles.transactionContainer}>
    <div className={styles.titleContainer}>
      <p className={styles.title}>{name}</p>
      <p className={styles.icon}>{icon}</p>
    </div>
    {!goalTarget && <p>{convertToDollar(currentSavedCents)}</p>}
    {goalTarget && (
      <>
        <p>{goalTarget.date}</p>
        <div className={styles.progressBarContainer}>
          <progress
            id="file"
            max={goalTarget.amountCents}
            value={currentSavedCents}
          />
          <div className={styles.progressBarLabelContainer}>
            <p>{convertToDollar(currentSavedCents)}</p>
            <p>{convertToDollar(goalTarget.amountCents)}</p>
          </div>
        </div>
      </>
    )}
  </div>
);
