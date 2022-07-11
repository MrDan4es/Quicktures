import React from "react";
import { Col, Card, Button, Image } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import styles from "./ImageBlock.module.scss";
import CopyToClipboard from "../utils/CopyToClipboard";
import { useSnackbar } from "notistack";

interface Props {
  name: string;
  url: string;
  id: number;
  imageDeleted: Function;
}

const ImageBlock = (props: Props) => {
  const { enqueueSnackbar } = useSnackbar();

  const ImageClicked = () => {
    CopyToClipboard(props.url);
    enqueueSnackbar("URL copied to clipboard!", {
      variant: "info",
    });
  };

  return (
    <Col id={props.name}>
      <Card className={"ratio ratio-1x1 " + styles.imageCard}>
        <Image
          onClick={() => ImageClicked()}
          src={props.url}
          className={styles.imgBlock}
          id={props.id.toString()}
        />

        <Button
          variant="outline-primary"
          id={props.id.toString()}
          className={"p-0 " + styles.btnInform}
        >
          <InfoIcon />
        </Button>

        <Button
          variant="outline-danger"
          id={props.id.toString()}
          className={"p-0 " + styles.btnRemove}
          onClick={() => props.imageDeleted(props.id)}
        >
          <DeleteIcon />
        </Button>
      </Card>
    </Col>
  );
};

export default ImageBlock;
