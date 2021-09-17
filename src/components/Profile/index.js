import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";

function UserCard() {

  const user = useSelector((state) => state.result.user);
  const error = useSelector((state) => state.error);

  const [userData, setUserData] = useState()

  useEffect(() => {
    const renderUser = () => {

      setUserData(
        <div aria-label="user-information">
          <div className="user-intro">
            <span role="userLogin" className="user-login">{user.login}</span>
            <br />
            <span role="userName" className="user-name">{user.name}</span>
          </div>

          <img className="profile-img" src={user.avatar_url} alt="profile picture"/>

          <div className="user-bio">
            <p role="user-bio">{user.bio}</p>
          </div>
        </div>
      )
    };
    renderUser()
  }, [user])

  return (
    <>
      { error ? <p role="alert">Could not find user data</p> : userData }
    </>
  );
}

export default UserCard;
