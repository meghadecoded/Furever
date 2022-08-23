import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "/styles/Breeds.module.css";

export default function Breeds() {
  const [data, setData] = useState(null);

  useEffect(function () {
    setData("loading");
    const baseURL = "https://api.api-ninjas.com";
    const path = "/v1/cats?name=";
    const breedName = "bengal";
    const endPoint = baseURL + path + breedName;
    console.log(endPoint);
    fetch(endPoint, {
      headers: { "X-Api-Key": "jk8POg2JZg7aeAk9+yAdZA==KlU5iC7SSW8URpDF" },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (info) {
        setData(info);
      })
      .catch(function (e) {
        return (
          <div>
            <h2>Sorry - couldn't find that breed!</h2>
            <h3>Did you make a typo or is there a new breed?</h3>
          </div>
        );
      });
  }, []);

  if (data === null) {
    return (
      <div>
        <h3>Hasn't loaded yet!</h3>
      </div>
    );
  } else if (data === "loading") {
    return (
      <div>
        <h3>Data Loading...</h3>
      </div>
    );
  } else {
    const catBreed = data[0].name;
    const origin = data[0].origin;
    const imageURL = data[0].image_link;
    const bodyWeight = `${data[0].min_weight} - ${data[0].max_weight} pounds`;
    const lifeExpectancy = `${data[0].min_life_expectancy} - ${data[0].max_life_expectancy} years`;
    return (
      <div>
        <h3>
          {catBreed} are a wonderful breed originally from {origin}. Weighing
          between {bodyWeight}, {catBreed} have a life expectancy of{" "}
          {lifeExpectancy}.
        </h3>
        <img src={imageURL} className={styles.breedimg} />
        <p>
          <Link href={`/breeds/${catBreed}`}>
            <a
              style={{
                color: "#f35815",
              }}
            >
              Read more about {catBreed}
            </a>
          </Link>
        </p>
      </div>
    );
  }
}
