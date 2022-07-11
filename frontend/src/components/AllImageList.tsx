import React, { useState, useEffect } from "react";
import ImageBlock from "./ImageBlock";
import LinearProgress from "@mui/material/LinearProgress";
import Row from "react-bootstrap/Row";
import IImageData from "../types/image.type";
import ImageDataService from "../services/image.service";

const ImageList = () => {
  const [images, setImages] = useState<Array<IImageData>>([]);
  const [isLoaded, setIsLoaded] = useState(false);

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
            name={image.title}
            url={image.url}
            key={image.id}
            id={image.id}
          />
        ))
      ) : (
        <LinearProgress className="w-100" color="success" />
      )}
    </Row>
  );
};

export default ImageList;
