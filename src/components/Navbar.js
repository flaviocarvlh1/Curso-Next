import Link from "next/link";

import styles from "./navbar.module.css";




function Navbar({ children, title }) {

  return (

    <div>

      <div className={styles.header}>

        <h2>{title}</h2>

        <div className={styles.navItem}>

          <Link href={'/course'}>Courses</Link>

          <Link href={'/teachers'}>Teachers</Link>

          <Link href={'/students'}>Students</Link>

          <Link href={'/students'}>Students</Link>

          <Link href={'/students'}>Students</Link>

        </div>

        <p>Logo</p>

      </div>

      {children}

    </div>

  );

}




export default Navbar;