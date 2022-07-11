import http from "./http-csrf";
import IImageData, { IPostImageData } from "../types/image.type";

class UserImageDataService {
  getAll() {
    return http.get<Array<IImageData>>("/api/images/");
  }
  post(data: IPostImageData) {
    return http.post<IImageData>("/api/images/", JSON.stringify(data));
  }
  delete(id: number) {
    return http.delete(`/api/images/${id}`);
  }
}

export default new UserImageDataService();
