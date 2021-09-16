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
        <div id="user-card">
          <div className="user-intro">
            <span className="user-login">{user.login}</span>
            <br />
            <span className="user-name">{user.name}</span>
          </div>

          <img className="profile-img" src={user.avatar_url} />

          <div className="user-bio">
            <p>{user.bio}</p>
          </div>
        </div>
      )
    };
    renderUser()

  }, [user])


  return (
    <>
      {error ? <p role="alert">Could not find user data</p> : userData }
    
    </>
  );
}

export default UserCard;
