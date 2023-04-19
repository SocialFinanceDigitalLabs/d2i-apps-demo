import React from "react";
import { RiGithubFill } from "react-icons/ri";
import sampleAppManifests from "../sample-app-manifests.json"; // This file is generated by bin/gen-sample-app-manifests-json.ts at build time.
import { Link } from "react-router-dom";
import { useSampleAppId, URL_SEARCH_KEY_SAMPLE_APP_ID } from "../router";
import classNames from "classnames";
import logo from "../logo.png";
import styles from "./index.module.scss";

interface SampleAppMenuProps {}
function SampleAppMenu(props: SampleAppMenuProps) {
  const currentSampleAppId = useSampleAppId();

  return (
    <div className={styles.container}>
      <Link to="/">
        <img src={logo} alt="stlite sharing logo" className={styles.logo} />
      </Link>
      <h2 className={styles.heading}>PATCh</h2>
      <h5 className={styles.subHeading}>available apps</h5>
      <ol className={styles.list}>
        {sampleAppManifests.map((sampleAppManifest) => (
          <Link
            key={sampleAppManifest.id}
            to={{
              search: `${URL_SEARCH_KEY_SAMPLE_APP_ID}=${sampleAppManifest.id}`,
            }}
          >
            <li
              className={classNames(styles.listItem, {
                [styles.active]: currentSampleAppId === sampleAppManifest.id,
              })}
            >
              {sampleAppManifest.title}
            </li>
          </Link>
        ))}
      </ol>
      <div className={styles.footer}>
        <a
          href="https://github.com/SocialFinanceDigitalLabs/d2i-apps-demo"
          target="_blank"
          rel="noreferrer"
          className={styles.githubIconLink}
        >
          <RiGithubFill />
        </a>
      </div>
    </div>
  );
}

export default SampleAppMenu;
