import http from "./http-csrf";
import IImageData, { IPostImageData } from "../types/image.type";

class UserImageDataService {
  getAll() {
    return http.get<Array<IImageData>>("/api/images/");
  }
  post(data: IPostImageData) {
    return http.post<IPostImageData>("/api/images/", JSON.stringify(data));
  }
}

export default new UserImageDataService();
