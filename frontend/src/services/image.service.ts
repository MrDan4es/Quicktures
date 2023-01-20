import { AxiosResponse } from 'axios';

import $api from '../http';
import IImageData from '../types/image.type';

export default class ImageDataService {
  static async getAll(): Promise<AxiosResponse<Array<IImageData>>> {
    return $api.get<Array<IImageData>>('/all/');
  }
}
