import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Homescreen = () => {
  const { userData } = useSelector((state) => state.auth);

  return (
    <div className="screen">
      <div className="d-flex justify-content-center align-items-center">
        {userData ? (
          <Card className="cardupdate">
            <h1>We can start building a world here!</h1>
          </Card>
        ) : (
          <Card className="cardupdate p-4 m-4 rounded-full">
            <h4 className="d-flex flex-wrap">
              CRUD operation with JWT authentication using React Js for the Web
              and React Native for Android and IOS app , MongoDB as Database and
              Node js framework Express JS to create API
            </h4>
            <div className="d-flex justify-content-around homebutton">
              <div className="home-button">
                <Link to="/register">Register</Link>
              </div>
              <div className="home-button">
                <Link to="/login">Login</Link>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Homescreen;
