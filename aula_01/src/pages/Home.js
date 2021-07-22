import React, { useEffect, useState } from "react";
import "../styles/pages/Home.scss";

function Home() {
  const [username, setUsername] = useState("EmanuelOliveh");
  const [user, setUser] = useState({ name: username });

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((error) => console.error(error));
  }, [username]);

  return (
    <div className="home_container">
      <div className="title">
        <h1>How About You?</h1>
      </div>
      <div className="profile">
        <div className="profile_container">
          {user.avatar_url && (
            <a
              href={`https://github.com/${username}`}
              className="toProfile"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="profile_image"
                src={user.avatar_url}
                alt="avatar"
              />
            </a>
          )}

          <div className="info">
            <div className="profile_item">
              <p className="properite">Name:</p>
              <p className="value">{user.name ?? ""}</p>
            </div>

            <div className="profile_item">
              <p className="properite">Location:</p>
              <p className="value">{user.location ?? ""}</p>
            </div>

            <div className="profile_item">
              <p className="properite">Company:</p>
              <p className="value">{user.company ?? "E-mail não disponível"}</p>
            </div>

            <div className="profile_item description">
              <p className="properite">Bio:</p>
              <p className="value">{user.bio ?? ""}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="findUser">
        <label>Username:</label>
        <input
          type="text"
          className="findUser_input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default Home;
