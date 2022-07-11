import React, { useState, useEffect } from "react";
import ImageBlock from "./ImageBlock";
import LinearProgress from "@mui/material/LinearProgress";
import Row from "react-bootstrap/Row";
import { IPostImageData } from "../types/image.type";
import UserImageDataService from "../services/user.service";

interface Props {
  images: IPostImageData[],
  setImages: React.Dispatch<React.SetStateAction<IPostImageData[]>>
}

const UserImageList = (props: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await UserImageDataService.getAll();
        props.setImages(data);
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
        props.images.map((image, index) => (
          <ImageBlock
            name={image.title}
            url={image.url}
            key={index}
            id={index}
          />
        ))
      ) : (
        <LinearProgress className="w-100" color="success" />
      )}
    </Row>
  );
};

export default UserImageList;
