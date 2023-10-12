import React, { useEffect } from "react";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// import icon
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";

// import pict
import img from "../../Assets/img(1).jpeg";
import img2 from "../../Assets/img(2).jpeg";
import img3 from "../../Assets/img(3).jpeg";
import img4 from "../../Assets/img(4).jpeg";
import img5 from "../../Assets/img(5).jpeg";
import img6 from "../../Assets/img(6).jpeg";
import img7 from "../../Assets/img(7).jpeg";
import img8 from "../../Assets/img(8).jpeg";
import img9 from "../../Assets/img(9).jpeg";
import img10 from "../../Assets/imgP(11).jpeg";
import img11 from "../../Assets/imgP(12).jpeg";
import img12 from "../../Assets/imgP(13).jpeg";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Kawah Ijen",
    slug: "trip-ijen",
    location: "Banyuwangi",
    grade: "Amazing Blue Fire",
    fees: "$300",
    description:
      "Blue fire in Kawah Ijen is a mesmerizing natural phenomenon that occurs within the Ijen Volcano complex, located in East Java, Indonesia. Kawah Ijen is a volcanic crater that contains one of the largest acidic crater lakes in the world, known as Ijen Crater or Ijen Lake",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Pulau Merah",
    slug: "de-djawatan",
    location: "Banyuwangi",
    grade: "The Perfect Beach",
    fees: "$200",
    description:
      'Pulau Merah (Red Island) is a beautiful tourist destination located in Banyuwangi, East Java, Indonesia. The name "Pulau Merah" is derived from its red-colored sandy beach, which adds a unique charm to the island. Pulau Merah is situated approximately 60 kilometers from the center of Banyuwangi and can be reached in a travel time of around 1.5 - 2 hours from the city center.',
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Alas Purwo",
    slug: "tour-alas-purwo",
    location: "Banyuwangi",
    grade: "Wonderful Private Beach",
    fees: "$150",
    description:
      "Alas Purwo National Park is a protected area located in the eastern part of Java, Indonesia, specifically in the Banyuwangi Regency of East Java province. It is one of the oldest and most significant national parks in Indonesia, known for its rich biodiversity, unique ecosystems, and cultural significance.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "De Djawatan",
    location: "Banyuwangi",
    slug: "de-djawatan",
    grade: "Specially Forest",
    fees: "$150",
    description:
      "De Djawatan is a tourist destination that is actually a protected forest area owned by Perhutani. This tourist spot offers beautiful scenery with cool air, making it a safe and comfortable choice for tourists.",
  },
  {
    id: 5,
    imgSrc: img5,
    slug: "de-djawatan",
    destTitle: "GreenBay(Teluk Hijau)",
    location: "Banyuwangi",
    grade: "Perfecly Turquoise Water",
    fees: "$450",
    description:
      "Green Bay, also known as Teluk Hijau, is a stunning and hidden gem located in Banyuwangi, East Java, Indonesia. It is a secluded beach nestled amidst lush forests, making it a truly pristine and picturesque destination for nature lovers and adventure seekers.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Desa Osing",
    slug: "tour-kota-banyuwangi",
    location: "Banyuwangi",
    grade: "Traditional Arts and Culture",
    fees: "$450",
    description:
      "Desa Osing, or Osing Village, is a unique cultural village located in the regency of Banyuwangi, East Java, Indonesia. The village is inhabited by the Osing ethnic group, who have preserved their distinct culture, traditions, and way of life for generations.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Tabuhan Island",
    slug: "menjangan-tabuhan",
    location: "Banyuwangi",
    grade: "Snorkeling and Diving",
    fees: "$450",
    description:
      "Tabuhan Island, also known as Pulau Tabuhan, is a beautiful island located off the coast of Banyuwangi, East Java, Indonesia. It is a small, picturesque island that has become a popular destination for tourists seeking a serene and tropical escape.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Plengkung Beach",
    slug: "tour-alas-purwo",
    location: "Banyuwangi",
    grade: "Perfect Surfing Place",
    fees: "$450",
    description:
      "Plengkung Beach, also known as G-Land, is a famous beach located on the eastern tip of Java Island, in Banyuwangi, East Java, Indonesia. It is one of the world's best surf destinations and has attracted surfers from all over the globe. Plengkung Beach is renowned for its powerful and consistent waves, making it a surfer's paradise.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Baluran National Park",
    slug: "tour-baluran",
    location: "Banyuwangi",
    grade: "Amazing Flora and Fauna",
    fees: "$450",
    description:
      "Baluran National Park is a protected area located in East Java, Indonesia. It is often referred to as the African Savanna of Java due to its unique landscape, which resembles the savannas found in Africa. The park covers an area of approximately 25,000 hectares and is situated in the northeastern part of Java, near the town of Banyuwangi.",
  },
  {
    id: 10,
    imgSrc: img10,
    slug: "tour-kota-banyuwangi",
    destTitle: "Pendopo Banyuwangi",
    location: "Banyuwangi",
    grade: "Perfect City",
    fees: "$450",
    description:
      "Pendopo Banyuwangi is a cultural and historical landmark located in Banyuwangi Regency, East Java, Indonesia. A pendopo is a traditional Javanese architectural structure that serves as a gathering place, meeting hall, and cultural center. The Pendopo Banyuwangi is an important cultural and heritage site that showcases the region's traditional architecture, art, and history.",
  },
  {
    id: 11,
    imgSrc: img11,
    slug: "tour-kota-banyuwangi",
    destTitle: "Jagir Waterfall",
    location: "Banyuwangi",
    grade: "Perfect Waterfall",
    fees: "$450",
    description:
      "When visiting Jagir Waterfall, it's important to respect the natural environment and follow any guidelines set by local authorities to ensure the preservation of this natural gem. While it might not be as widely known as some of the more famous waterfalls in Indonesia, Jagir Waterfall offers a serene and immersive experience for those who appreciate the beauty of untouched nature.",
  },
  {
    id: 12,
    imgSrc: img12,
    slug: "tour-kota-banyuwangi",
    destTitle: "Boom Beach",
    location: "Banyuwangi",
    grade: "Perfect Beach",
    fees: "$450",
    description:
      "Located in the village of Mandar, Banyuwangi, Boom Beach was once an important port in Banyuwangi. This beach is located in the center of the town of Banyuwangi and it visited by many tourists, both from localÂ  and outside of Banyuwangi. This beach is typical a black sandy beach and it has an exotic background of Bali island. The visitors can enjoy the beach while enjoying the coconut in pedestrian line or enjoying horse riding or riding an ATV.",
  },
];

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="about container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          All Of Destinations
        </h3>
      </div>

      <div className="setContent grid">
        {Data.map(
          ({
            id,
            imgSrc,
            destTitle,
            location,
            grade,
            fees,
            description,
            slug,
          }) => {
            return (
              <div key={id} className="singleDestination">
                <div data-aos="fade-up" className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="des">
                    <p>{description}</p>
                  </div>

                  <Link to={`/Paket/${slug}`}>
                    <button className="btn flex">
                      DETAILS{" "}
                      <HiOutlineClipboardDocumentCheck className="icon" />
                    </button>
                  </Link>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default About;
