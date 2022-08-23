import Link from "next/link";
import { useEffect, useState } from "react";

export default function Breeds() {
    const [data, setData] = useState(null)
    useEffect(function () {
        setData("loading");
        const baseURL = "https://api.api-ninjas.com";
        const path = "/v1/cats?name=";
        const breedName = "bengal";
        const config = `headers: {"X-Api-Key", "jk8POg2JZg7aeAk9+yAdZA==KlU5iC7SSW8URpDF"}`
        const endPoint = baseURL + path + breedName;
        fetch(endPoint + config)
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

                    </div>
                )
            })

    }, [])
}



export default function GitHub() {
    const [data, setData] = useState(null);
    useEffect(function () {
        setData("loading");
        const params = `?sort=updated&order=desc&per_page=100`;
        fetch(`https://api.github.com/users/ga-wolf/repos${params}`)
            .then(function (res) {
                return res.json();
            })
            .then(function (info) {
                setData(info);
            });
    }, []);
    let markup = null;
    if (data === null) {
        markup = (
            <div>
                <h3>No data to show</h3>
            </div>
        );
    } else if (data === "loading") {
        markup = (
            <div>
                <h3>Data Loading...</h3>
            </div>
        );
    } else {
        const repoMarkup = data.map(function (repo) {
            return (
                <a
                    href={repo.html_url}
                    key={repo.id}
                    rel="noreferrer"
                    className="repo"
                    target="_blank"
                >
                    <h4>{repo.name}</h4>
                </a>
            );
        });
        markup = (
            <div>
                <h3>All Repositories</h3>
                <div className="repos">{repoMarkup}</div>
            </div>
        );
    }
    return (
        <div>
            <h2>GitHub</h2>
            {markup}
        </div>
    );
}
