import { useEffect, useState } from "react";
import UserImageDataService from "../services/user.service";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Header = () => {
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
    <Row
      className="align-items-center mt-1 pb-1 g-0"
      style={{ borderBottom: "1px solid #dee2e680" }}
    >
      <Button
        className="col-3 col-sm-2 p-0 overflow-hidden"
        style={{ lineHeight: 2, color: "gray" }}
        variant="text"
        size="small"
        href="/logout/"
        endIcon={<LogoutIcon />}
      >
        {username}
      </Button>

      <Link
        className="col text-center display-6"
        style={{ textDecoration: "none", color: "#4D7A0B" }}
        to="/"
      >
        QuickTures
      </Link>

      <Link
        className="col-3 col-sm-2 p-0 btn btn-outline-light"
        style={{ lineHeight: 2, color: "gray" }}
        to="/all"
      >
        All Images
      </Link>
    </Row>
  );
};

export default Header;
