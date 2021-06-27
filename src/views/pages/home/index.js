import { useEffect, useState } from "react";
import "./style.scss";
import firebase from "../../../configs/firebase_config";
import { useHistory, useParams } from "react-router";
import { Carousel } from "react-bootstrap";

const HomePage = () => {
  const [images, setImages] = useState([]);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    try {
      const ref = firebase.firestore().collection("core_images").doc(id);
      const snap = await ref.get();
      if (snap.exists) {
        const data = snap.data();
        const { image_urls } = data;

        if (image_urls) {
          setImages(image_urls);
        }
      } else {
        history.replace("/");
      }
    } catch (error) {
      console.log("Error!!!: Getting images", error);
      history.replace("/");
    }
  };

  return (
    <div className="sendman-home-page">
      <Carousel
        className="sendman-carousel"
        controls={false}
        indicators={images.length > 1}
        interval={3000000}
      >
        {images.map((e) => {
          return (
            <Carousel.Item>
              <div className="img-container">
                <img src={e} alt="" className="img" />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomePage;
