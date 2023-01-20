import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { Col, Card, Button, Image } from 'react-bootstrap';
import { useSnackbar } from 'notistack';

import { CopyToClipboard } from 'utils';

import styles from './ImageBlock.module.scss';

interface Props {
  name: string;
  url: string;
  id: number;
  isOwner: boolean;
  imageDeleted: Function;
}

const ImageBlock: React.FC<Props> = props => {
  const { enqueueSnackbar } = useSnackbar();

  const ImageClicked = () => {
    CopyToClipboard(props.url);
    enqueueSnackbar('URL copied to clipboard!', {
      variant: 'info'
    });
  };

  return (
    <Col id={'imageBlockId' + props.id}>
      <Card
        className={
          'animate__animated animate__fadeIn ratio ratio-1x1 ' +
          styles.imageCard
        }
      >
        <Image
          onClick={() => ImageClicked()}
          src={props.url}
          className={styles.imgBlock}
          id={props.id.toString()}
        />

        {props.isOwner && (
          <>
            <Button
              variant="outline-primary"
              id={props.id.toString()}
              className={'p-0 ' + styles.btnInform}
            >
              <InfoIcon />
            </Button>

            <Button
              variant="outline-danger"
              id={props.id.toString()}
              className={'p-0 ' + styles.btnRemove}
              onClick={() => props.imageDeleted(props.id)}
            >
              <DeleteIcon />
            </Button>
          </>
        )}
      </Card>
    </Col>
  );
};

export default ImageBlock;
