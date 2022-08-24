import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div>
      <h2>About Us</h2>
      <p>
        Furever is a platform for you to find your furry friend a forever home.
      </p>
      <h3>Our Inspirations</h3>
      <img
        src="images/arya.jpg"
        alt="Our first cat Arya"
        label="Arya"
        id="ourcats"
        className={styles.ourcats}
      />
      <img
        src="images/mafia.jpg"
        alt="Our second cat Mafia"
        label="Mafia"
        id="ourcats"
        className={styles.ourcats}
      />
    </div>
  );
}
