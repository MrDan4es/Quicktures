import UserImageDataService from '../../services/user.service';
import IImageData from '../../types/image.type';
import { useSnackbar } from 'notistack';

const DeleteImageAPI = (
    id: number,
    setImages: React.Dispatch<React.SetStateAction<IImageData[]>>
) => {
    const { enqueueSnackbar } = useSnackbar();

    const deleteImageAPI = async () => {
        try {
            await UserImageDataService.delete(id);
            const element = document.getElementById(
                `imageBlockId${id}`
            ) as HTMLElement;
            element.classList.add('animate__animated', 'animate__fadeOut');

            element.addEventListener('animationend', () => {
                setImages((current) =>
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

export default DeleteImageAPI;
