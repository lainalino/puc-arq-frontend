import React from "react";
import styles from "./Header.module.css";

const ContentHeader = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.contentTitle}>Laina Lino</h2>
      <p className={styles.contentDescription}>
        I have worked as a Software Developer for the past 8 years, gaining valuable experience in the field. I am highly motivated and always eager to take on new challenges that allow me to contribute to the success of the team. I pride myself on being proactive and efficient in both my professional and personal endeavors. Throughout my career, I have had the opportunity to work on a variety of projects utilizing Microsoft technologies (.net, .net core, C#, SQL Server, ASP.Net) and other languages such as Angular, Vue.js (frontend). And for databases, I've worked with MySql, Oracle, MongoDB, Cosmos.
       </p>
    </div>
  );
};

export default ContentHeader;
