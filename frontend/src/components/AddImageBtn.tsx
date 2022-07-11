import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import "./styles/AddImageBtn.scss";
import { Button as BootstrapBtn, Modal, Form } from "react-bootstrap";
import UploadIcon from "@mui/icons-material/Upload";
import CheckImage from "./utils/CheckImage";
import { IPostImageData } from "../types/image.type";
import UserImageDataService from "../services/user.service";

interface Props {
  images: IPostImageData[],
  setImages: React.Dispatch<React.SetStateAction<IPostImageData[]>>
}

const AddImageBtn = (props: Props) => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const uploadClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as Element;
    target.classList.add("disabled");
    CheckImage(
      url,
      () => {
        var d = new Date();
        var strDate =
          d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();

        const fetchData = async () => {
          try {
            const { data } = await UserImageDataService.post({
              title: title.trim() || strDate,
              url: url,
            });
            handleClose();
            props.setImages([{title: data. title, url: data.url}, ...props.images])
          } catch (error) {
            alert("ERROR");
            console.log(error);
          }
        };

        fetchData();
      },
      () => {
        setValidated(true);
        alert("Failed to save URL");
      }
    );
    target.classList.remove("disabled");
  };

  const closeModal = () => {
    handleClose();
    setValidated(false);
  };

  return (
    <>
      <Button
        className="col-12 mt-2 p-0 addImageBtn"
        variant="text"
        onClick={handleShow}
      >
        <AddCircleOutlineIcon sx={{ fontSize: 40 }} color="success" />
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="search"
                placeholder="Image Title"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTitle(e.target.value)
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Control
                type="search"
                placeholder="https://www.example.com/image.png *"
                autoFocus
                required
                className={validated ? "is-invalid" : ""}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUrl(e.target.value)
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <BootstrapBtn variant="success" onClick={uploadClicked}>
            <UploadIcon />
          </BootstrapBtn>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddImageBtn;
