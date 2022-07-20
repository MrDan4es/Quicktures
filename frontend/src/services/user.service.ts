import $api from '../http';
import IImageData, { IPostImageData } from '../types/image.type';

class UserImageDataService {
    getAll() {
        return $api.get<Array<IImageData>>('images/');
    }
    post(data: IPostImageData) {
        return $api.post<IImageData>('images/', JSON.stringify(data));
    }
    delete(id: number) {
        return $api.delete(`images/${id}`);
    }
}

export default new UserImageDataService();
