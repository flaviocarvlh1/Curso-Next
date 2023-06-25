import styles from "./navbar.module.css";

function Navbar( { children }) {

    return ( 
        <div>
            <div className={styles.header}>Header</div> 
      
            {children}

      </div>
    )
}

export default Navbar