import React from "react";
import { teamInfo } from "../assets/Team/teamInfo";
import '../Styles/Team.css'
import { Eboard } from "../assets/Team/Eboard";

function Team(){
  return (
    <div className="team-page">
      <div className="title-team">
        <h1 className="title">Meet the E-board</h1>
      </div>

      {/* Co-presidents section */}
      <div className="team-section">
        {Eboard.filter(member => member.role.includes("Co-President")).map((Emember) => (
          <div className="member" key={Emember.id}>
            <img 
              src={Emember.picture} 
              alt={Emember.name} 
              className="member-img" 
            />
            <div className="member-info">
              <h3>{Emember.name}</h3>
              <div className="member-roles">
                {Emember.role.map((role, index) => (
                  <p key={index}>{role}</p>
                ))}
              </div>
            </div>
            <div className="member-links">
              <a href={Emember.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Eboard Section */}
      <div className="team-section">
        <div className="row-7">
          {Eboard.filter(member => !member.role.includes("Co-President"))
            .slice(0, 7) // First 7 members
            .map((Emember) => (
              <div className="member" key={Emember.id}>
                <img 
                  src={Emember.picture} 
                  alt={Emember.name} 
                  className="member-img" 
                />
                <div className="member-info">
                  <h3>{Emember.name}</h3>
                  <div className="member-roles">
                    {Emember.role.map((role, index) => (
                      <p key={index}>{role}</p>
                    ))}
                  </div>
                </div>
                <div className="member-links">
                  <a href={Emember.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
        </div>

        <div className="row-8">
          {Eboard.filter(member => !member.role.includes("Co-President"))
            .slice(7) // Remaining members starting from the 8th one
            .map((Emember) => (
              <div className="member" key={Emember.id}>
                <img 
                  src={Emember.picture} 
                  alt={Emember.name} 
                  className="member-img" 
                />
                <div className="member-info">
                  <h3>{Emember.name}</h3>
                  <div className="member-roles">
                    {Emember.role.map((role, index) => (
                      <p key={index}>{role}</p>
                    ))}
                  </div>
                </div>
                <div className="member-links">
                  <a href={Emember.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Web Dev Team Section */}
      <div className="title-team">
        <h2 className="title">Meet the Website Development Team</h2>
      </div>

      <div className="team-section">
        {teamInfo.map((WDmember) => (
          <div className="member" key={WDmember.id}>
            <img 
              src={WDmember.picture} 
              alt={WDmember.name} 
              className="member-img" 
            />
            <div className="member-info">
              <h3>{WDmember.name}</h3>
              <div className="member-roles">
                {WDmember.role.map((role, index) => (
                  <p key={index}>{role}</p>
                ))}
              </div>
            </div>
            <div className="member-links">
              <a href={WDmember.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
