import React from "react";
import { RiGithubFill } from "react-icons/ri";
import sampleAppManifests from "../sample-app-manifests.json"; // This file is generated by bin/gen-sample-app-manifests-json.ts at build time.
import { Link } from "react-router-dom";
import { URL_SEARCH_KEY_SAMPLE_APP_ID } from "../router";
import logo from "../logo.png";
import styles from "./index.module.scss";

import { embedAppDataToUrl } from "@stlite/sharing-common";
import { loadSampleAppData } from "../sample-app";

console.log("sampleAppManifests", sampleAppManifests);
const SHARING_APP_URL =
  process.env.REACT_APP_SHARING_APP_URL ?? "http://localhost:3000/";
// sampleAppManifests[0].id
const goToApp = (appId: string) => {
  loadSampleAppData(appId).then((appData) => {
    console.log(appData);
    const appUrl = embedAppDataToUrl(SHARING_APP_URL, appData);
    window.open(appUrl, "_blank", "noreferrer");
  });
};
function Gallery() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="stlite sharing logo" className={styles.logo} />
      <h2 className={styles.heading}>PATCh</h2>
      <h5 className={styles.heading}>Open an app or edit the source code</h5>
      <ol className={styles.list}>
        {sampleAppManifests.map((sampleAppManifest) => (
          <li className={styles.listItem}>
            <b>{sampleAppManifest.title}</b>

            <span
              className={styles.button}
              key={sampleAppManifest.id}
              onClick={() => goToApp(sampleAppManifest.id)}
            >
              open
            </span>
            <Link
              className={styles.button}
              key={sampleAppManifest.id}
              target="_blank"
              to={{
                pathname: "editor",
                search: `${URL_SEARCH_KEY_SAMPLE_APP_ID}=${sampleAppManifest.id}`,
              }}
            >
              edit
            </Link>
          </li>
        ))}
      </ol>
      <div>
        <Link
          className={styles.button}
          to={{
            pathname: "editor",
          }}
        >
          go to editor
        </Link>
      </div>
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

export default Gallery;