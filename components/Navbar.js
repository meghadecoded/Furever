import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { supabase } from "../utils/supabase";

const Navbar = ({ session }) => {
  return (
    <div className={styles.container}>
      <div>
        <p className={styles.title}>Furever</p>
      </div>
      {session?.user ? (
        <ul className={styles.navContent}>
          <Link href="/">
            <li className={styles.name}>Home</li>
          </Link>
          <Link href="/animals">
            <li className={styles.name}>Find Pets</li>
          </Link>
          <Link href="/breeds">
            <li className={styles.name}>Cat Breeds</li>
          </Link>

          <button
            className={styles.buttons}
            onClick={() => supabase.auth.signOut()}
          >
            Logout
          </button>
          <Link href="/create">
            <button className={styles.buttons}>Add Pet for Adoption</button>
          </Link>
        </ul>
      ) : (
        <ul className={styles.navContent}>
          <Link href="/login">
            <li className={styles.buttons}>Login</li>
          </Link>
          <Link href="/signup">
            <li className={styles.buttons}>Signup</li>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
