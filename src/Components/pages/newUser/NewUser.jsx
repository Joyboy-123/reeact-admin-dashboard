import React from "react";
import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newUserItem">
          <label>Fullname</label>
          <input type="text" placeholder="John Smit" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="John@gamiil.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="number" placeholder="+91 1234567" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Assam | India" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input
              type="radio"
              placeholder=""
              name="gender"
              id="male"
              value="male"
            />
            <label for="male">Male</label>
            <input
              type="radio"
              placeholder=""
              name="gender"
              id="female"
              value="female"
            />
            <label for="Female">Female</label>
            <input
              type="radio"
              placeholder=""
              name="gender"
              id="others"
              value="others"
            />
            <label for="others">Otherss</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>{" "}
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
