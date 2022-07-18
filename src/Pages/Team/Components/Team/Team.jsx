import React, { useEffect, useState } from "react";
import EachAppMembers from "../EachMembers/EachAppMembers";
import EachMembers from "../EachMembers/EachMembers";
import EachMlTeamMember from "../EachMembers/EachMlTeamMember";
import EachWebMember from "../EachMembers/EachWebMember";
import ParticleBackground from "../ParticleBackground";
import "./Team.css";

const Team = () => {
  const [coreMembers, setCoreMembers] = useState([]);
  useEffect(() => {
    fetch("coreTeam.json")
      .then((res) => res.json())
      .then((data) => setCoreMembers(data));
  }, []);
  const [webMembers, setWebMembers] = useState([]);
  useEffect(() => {
    fetch("webTeam.json")
      .then((res) => res.json())
      .then((data) => setWebMembers(data));
  }, []);
  const [appMembers, setAppMembers] = useState([]);
  useEffect(() => {
    fetch("androidTeam.json")
      .then((res) => res.json())
      .then((data) => setAppMembers(data));
  }, []);
  const [MLMembers, setMLMembers] = useState([]);
  useEffect(() => {
    fetch("mlTeam.json")
      .then((res) => res.json())
      .then((data) => setMLMembers(data));
  }, []);
  const [show, setShow] = useState(false);
  return (
    <div className="team-body">
      <h1 className="team-header">MEET THE SQUAD</h1>
      <div className="line"></div>
      <p className="team-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius
        officiis consequuntur libero provident perspiciatis Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Expedita, dolor quos libero
      </p>

      <h1 className="team-name">Core Team</h1>
      <div className="members">
        {show
          ? coreMembers.map((member) => (
              <EachMembers member={member}></EachMembers>
            ))
          : coreMembers
              .slice(0, 4)
              .map((member) => <EachMembers member={member}></EachMembers>)}
      </div>
      {show ? (
        <button className="show-button" onClick={() => setShow(false)}>
          Show less
        </button>
      ) : (
        <button className="show-button" onClick={() => setShow(true)}>
          Show All
        </button>
      )}

      <div>
        <h1 className="team-name">Web team:{webMembers.length}</h1>
        <div className="two-members">
          {webMembers.slice(0, 2).map((webMember) => (
            <EachWebMember webMember={webMember}></EachWebMember>
          ))}
        </div>
        <div className="members">
          {show
            ? webMembers.map((webMember) => (
                <EachWebMember webMember={webMember}></EachWebMember>
              ))
            : webMembers
                .slice(0, 4)
                .map((webMember) => (
                  <EachWebMember webMember={webMember}></EachWebMember>
                ))}
        </div>
        {show ? (
          <button className="show-button" onClick={() => setShow(false)}>
            Show less
          </button>
        ) : (
          <button className="show-button" onClick={() => setShow(true)}>
            Show All
          </button>
        )}
      </div>
      <div>
        <h1 className="team-name">Android Team</h1>
        <div className="two-members">
          {appMembers.slice(0, 2).map((appMember) => (
            <EachAppMembers appMember={appMember}></EachAppMembers>
          ))}
        </div>
        <div className="members">
          {show
            ? appMembers.map((appMember) => (
                <EachAppMembers appMember={appMember}></EachAppMembers>
              ))
            : webMembers
                .slice(0, 4)
                .map((appMember) => (
                  <EachAppMembers appMember={appMember}></EachAppMembers>
                ))}
        </div>
        {show ? (
          <button className="show-button" onClick={() => setShow(false)}>
            Show less
          </button>
        ) : (
          <button className="show-button" onClick={() => setShow(true)}>
            Show All
          </button>
        )}
      </div>
    </div>
  );
};

export default Team;
