import React from "react";
import { RiShareCircleLine } from "react-icons/ri";
import styles from "./PublishButton.module.scss";

interface SaveButtonProps {
  onClick: () => void;
}
function PublishButton(props: SaveButtonProps) {
  return (
    <button className={styles.button}>
      <RiShareCircleLine className={styles.icon} />
      Publish to the repository of apps
    </button>
  );
}

export default PublishButton;
