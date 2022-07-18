import React from "react";

const EachAppMembers = ({ appMember }) => {
  const name = appMember.name;
  const img = appMember.img;
  const des = appMember.designation;
  return (
    <div>
      <div className="member">
        <img width="220px" src={img} alt="" />
        <h3 className="name">{name}</h3>
        <h4 className="des">{des}</h4>
        <div></div>
      </div>
    </div>
  );
};

export default EachAppMembers;
