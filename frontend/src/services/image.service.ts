import $api from '../http';
import IImageData from '../types/image.type';

class ImageDataService {
    getAll() {
        return $api.get<Array<IImageData>>('/all/');
    }
}

export default new ImageDataService();
