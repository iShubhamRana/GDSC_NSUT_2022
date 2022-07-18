import React from "react";

const EachMlTeamMember = ({ mlMember }) => {
  const name = mlMember.name;
  const img = mlMember.img;
  const des = mlMember.designation;
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

export default EachMlTeamMember;
