import "./App.css";
import alisha from "./images/alisha.jpg";
import ifwishescouldkill from "./images/ifwishescouldkill.png";
import wednesday from "./images/wednesday.png";
import sitaramam from "./images/sitaramam.png";
import businessproposal from "./images/businessproposal.png";
import theconjuring from "./images/theconjuring.png";
import repeatyear from "./images/365repeattheyear.png";
import { useState } from "react";

function App() {

  const [showRecommendationPage, setShowRecommendationPage] =
    useState(false);


  const [selectedInterests, setSelectedInterests] =
    useState([]);

    const [selectedShow, setSelectedShow] =
  useState(null);

  const interests = [
    "Murder Mystery",
    "Horror",
    "Romantic",
    "Family Drama",
    "Teen Drama",
    "Relax"
  ];

  const shows = [
  {
    title: "If Wishes Could Kill",
    genre: ["Horror", "Teen Drama"],
    image: ifwishescouldkill,
    description:
      "A Korean horror thriller about a mysterious wish-granting app where every wish comes with deadly consequences."
  },

  {
    title: "Wednesday",
    genre: ["Murder Mystery", "Teen Drama"],
    image: wednesday,
    description:
      "Wednesday Addams navigates life at Nevermore Academy while solving supernatural mysteries and uncovering dark secrets."
  },

  {
    title: "SitaRamam",
    genre: ["Romantic", "Family Drama"],
    image: sitaramam,
    description:
      "A beautiful romantic drama set against war and destiny, following the emotional journey of Ram and Sita."
  },

  {
    title: "The Conjuring",
    genre: ["Horror"],
    image: theconjuring,
    description:
      "Paranormal investigators Ed and Lorraine Warren face one of their most terrifying supernatural cases."
  },

  {
    title: "Business Proposal",
    genre: ["Relax"],
    image: businessproposal,
    description:
      "A lighthearted Korean romantic comedy filled with workplace humor, chaos, and adorable romance."
  },

  {
    title: "365: Repeat the Year",
    genre: ["Murder Mystery", "Family Drama"],
    image: repeatyear,
    description:
      "Ten people get the chance to reset their lives by one year, only to become trapped in mysterious deadly events."
  }
];

  const handleInterestClick = (interest) => {

    if (selectedInterests.includes(interest)) {

      setSelectedInterests(
        selectedInterests.filter(
          item => item !== interest
        )
      );

    } else {

      setSelectedInterests([
        ...selectedInterests,
        interest
      ]);

    }
  };

  const recommendedShows = shows.filter((show) =>
    show.genre.some((g) =>
      selectedInterests.includes(g)
    )
  );
if (selectedShow) {

  return (

    <div className="detail-page">

      <button
        className="back-btn"
        onClick={() => setSelectedShow(null)}
      >
        ← Back
      </button>

      <div className="detail-container">

        <img
          src={selectedShow.image}
          alt={selectedShow.title}
          className="detail-image"
        />

        <div className="detail-content">

          <h1 className="detail-title">
            {selectedShow.title}
          </h1>

          <p className="detail-description">
            {selectedShow.description}
          </p>

          <div className="detail-genres">

            {
              selectedShow.genre.map((g) => (

                <span
                  key={g}
                  className="genre-tag"
                >
                  {g}
                </span>

              ))
            }

          </div>

        </div>

      </div>

    </div>

  );
}
  if (!showRecommendationPage) {

    return (
      <div className="hero">

        <div className="overlay">

          <div className="content">

            <h1 className="netflix">
              Netflix
            </h1>

            <h2 className="recommendation">
              recommendation
            </h2>

            <h3 className="name">
              by Alisha Gorai ♡
            </h3>

            <p className="tagline">
              Find your next comfort show,
              movie obsession,
              or late-night binge ✨
            </p>

            <button
              className="start-btn"
              onClick={() =>
                setShowRecommendationPage(true)
              }
            >
              Get Started →
            </button>

          </div>

          <div className="image-section">
            <img
              src={alisha}
              alt="Alisha"
            />
          </div>

        </div>

      </div>
    );
  }

  return (

    <div className="recommend-page">

  <button
    className="back-home-btn"
    onClick={() =>
      setShowRecommendationPage(false)
    }
  >
    ← Back to Home
  </button>

      <h1 className="recommend-title">
        🎬 Choose Your Vibe
      </h1>

      <div className="button-container">

        {
          interests.map((interest) => (

            <button
              key={interest}
              onClick={() =>
                handleInterestClick(interest)
              }
              className={
                selectedInterests.includes(interest)
                  ? "genre-button selected"
                  : "genre-button"
              }
            >
              {interest}
            </button>

          ))
        }

      </div>

      <h2 className="show-heading">
        Recommended Shows 🍿
      </h2>

      <div className="shows-container">

        {
          recommendedShows.length > 0 ? (

            recommendedShows.map((show) => (

              <div
  key={show.title}
  className="show-card"
  onClick={() => setSelectedShow(show)}
>

                <h3>{show.title}</h3>

                <p>
                  {show.genre.join(", ")}
                </p>

              </div>

            ))

          ) : (

            <p>
              Select interests to get recommendations ✨
            </p>

          )
        }

      </div>

    </div>
  );
}

export default App;