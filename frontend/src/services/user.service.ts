import { AxiosResponse } from 'axios';

import $api from '../http';
import IImageData, { IPostImageData } from 'types/image.type';

export default class UserImageDataService {
  static async getAll(): Promise<AxiosResponse<Array<IImageData>>> {
    return $api.get<Array<IImageData>>('images/');
  }
  static async post(data: IPostImageData) {
    return $api.post<IImageData>('images/', data);
  }
  static async delete(id: number) {
    return $api.delete(`images/${id}`);
  }
}
