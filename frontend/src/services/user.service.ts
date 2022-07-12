import http from "./http-csrf";
import IImageData, { IPostImageData, IUsername } from "../types/image.type";

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
  getUsername() {
    return http.get<IUsername>(`/api/user/`);
  }
}

export default new UserImageDataService();
