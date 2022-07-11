import http from "./http-common";
import IImageData from "../types/image.type";

class ImageDataService {
  getAll() {
    return http.get<Array<IImageData>>("/api/all/");
  }
}

export default new ImageDataService();
