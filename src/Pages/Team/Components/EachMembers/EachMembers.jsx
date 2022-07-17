import React from "react";
import "./EachMembers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EachMembers = ({ member, webMember }) => {
  const name = member.name;
  const img = member.img;
  const des = member.designation;

  return (
    <div className="member">
      <img width="220px" src={img} alt="" />
      <h3 className="name">{name}</h3>
      <h4 className="des">{des}</h4>
      <div></div>
    </div>
  );
};

export default EachMembers;
