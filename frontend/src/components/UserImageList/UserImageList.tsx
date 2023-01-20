import React, { useState, useEffect } from 'react';
import ImageBlock from '../ImageBlock';
import LinearProgress from '@mui/material/LinearProgress';
import Row from 'react-bootstrap/Row';
import IImageData from '../../types/image.type';
import UserImageDataService from '../../services/user.service';
import { useSnackbar } from 'notistack';

interface Props {
    images: IImageData[];
    setImages: React.Dispatch<React.SetStateAction<IImageData[]>>;
}

const UserImageList = (props: Props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const deleteImage = (id: number) => {
        const deleteImageAPI = async () => {
            try {
                await UserImageDataService.delete(id);
                const element = document.getElementById(
                    `imageBlockId${id}`
                ) as HTMLElement;
                element.classList.add('animate__animated', 'animate__fadeOut');

                element.addEventListener('animationend', () => {
                    props.setImages((current) =>
                        current.filter((image) => {
                            return image.id !== id;
                        })
                    );
                });
                enqueueSnackbar('Image deleted!', {
                    variant: 'error'
                });
            } catch (error) {
                console.log(error);
            }
        };

        deleteImageAPI();
    };

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        imageDeleted={deleteImage}
                        isOwner={true}
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

export default UserImageList;
