import React, { useState, useEffect } from "react";
import ImageBlock from "./ImageBlock/ImageBlock";
import LinearProgress from "@mui/material/LinearProgress";
import Row from "react-bootstrap/Row";
import IImageData from "../types/image.type";
import ImageDataService from "../services/image.service";

const ImageList = () => {
  const [images, setImages] = useState<Array<IImageData>>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const deleteImage = (id: number) => {
    const element = document.getElementById(`imageBlockId${id}`) as HTMLElement;
    element.classList.add("animate__animated", "animate__fadeOut");

    element.addEventListener("animationend", () => {
      setImages((current) =>
        current.filter((image) => {
          return image.id !== id;
        })
      );
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await ImageDataService.getAll();
        setImages(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoaded(true);
    };

    fetchData();
  }, []);

  return (
    <Row
      xs={2}
      sm={3}
      md={4}
      lg={5}
      xl={6}
      className="g-1 align-items-center mt-1"
    >
      {isLoaded ? (
        images.map((image) => (
          <ImageBlock
            imageDeleted={deleteImage}
            name={image.title}
            url={image.url}
            key={image.id}
            id={image.id}
            isOwner={false}
          />
        ))
      ) : (
        <LinearProgress className="w-100" color="success" />
      )}
    </Row>
  );
};

export default ImageList;
