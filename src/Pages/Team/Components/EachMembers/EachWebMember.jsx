import React from "react";

const EachWebMember = ({ webMember }) => {
  const name = webMember.name;
  const img = webMember.img;
  const des = webMember.designation;
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

export default EachWebMember;
