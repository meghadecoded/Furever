import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "/styles/Breeds.module.css";

export default function Breed() {
  const router = useRouter();
  const { breeds } = router.query;
  let [data, setData] = useState(null);

  function fetchBreedData() {
    setData("loading");
    const baseURL = "https://api.api-ninjas.com";
    const path = "/v1/cats?name=";
    const breedName = breeds;
    const endPoint = baseURL + path + breedName;

    fetch(endPoint, {
      headers: { "X-Api-Key": "jk8POg2JZg7aeAk9+yAdZA==KlU5iC7SSW8URpDF" },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (info) {
        setData(info);
      })
      .catch((e) => {
        <div>
          <h2>Sorry - couldnt find that breed!</h2>
          <h3>Did you make a typo or is there a new breed?</h3>
        </div>;
      });
  }

  useEffect(fetchBreedData, []);

  if (data === null || undefined) {
    debugger;
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  } else if (data === "loading") {
    return (
      <div>
        <h3>Data Loading...</h3>
      </div>
    );
  } else {
    let catBreed = data[0].name;
    let origin = data[0].origin;
    let imageURL = data[0].image_link;
    let bodyWeight = `${data[0].min_weight} - ${data[0].max_weight} pounds`;
    let lifeExpectancy = `${data[0].min_life_expectancy} - ${data[0].max_life_expectancy} years`;
    let shedding = data[0].shedding;
    let affectionate = data[0].family_friendly;
    let playfulness = data[0].playfulness;
    let grooming = data[0].grooming;
    let childFriendly = data[0].children_friendly;
    return (
      <div>
        <h3>
          {catBreed} are a wonderful breed originally from {origin}. Weighing
          between {bodyWeight}, {catBreed} have a life expectancy of{" "}
          {lifeExpectancy}.
        </h3>
        <img src={imageURL} className={styles.breedimg} />
        <h4>
          On a scale of 0-5 this how they rate in the following categories.
        </h4>
        <ul>
          <li>
            <b>Shedding: </b>
            {shedding}
          </li>
          <li>
            <b>Affectionate: </b>
            {affectionate}
          </li>
          <li>
            <b>Playfulness: </b>
            {playfulness}
          </li>
          <li>
            <b>Grooming Needed: </b>
            {grooming}
          </li>
          <li>
            <b>Friendly with Children: </b>
            {childFriendly}
          </li>
        </ul>
      </div>
    );
  }
}
