import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserImageDataService from "../services/user.service";
import App from "../pages/App";
import Page404 from "../pages/Page404";
import PageAllImages from "../pages/PageAllImages";

const Routing = () => {
  const [username, setUsername] = useState("username");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const { data } = await UserImageDataService.getUsername();
        setUsername(data.username);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsername();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App username={username} />} />
        <Route path="/all" element={<PageAllImages username={username} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
