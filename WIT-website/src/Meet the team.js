import React from 'react';

const MeetTheTeam = () => {
  const profileData = [
    {
      name: "Rane Dy",
      role: "Project Manager, Co-lead, Web Developer",
      icon: "path/to/dummy-icon.png", // Replace with actual icon path
      linkedin: "https://www.linkedin.com/in/your-linkedin-url" // Placeholder link
    },
    {
      name: "Amal Latif",
      role: "Co-lead, Web Developer",
      icon: "path/to/dummy-icon.png", // Replace with actual icon path
      linkedin: "https://www.linkedin.com/in/your-linkedin-url" // Placeholder link
    },
    {
      name: "Ruchitha Gande",
      role: "Web Developer, UI/UX Designer",
      icon: "path/to/dummy-icon.png", // Replace with actual icon path
      linkedin: "https://www.linkedin.com/in/your-linkedin-url" // Placeholder link
    },
    {
      name: "Melissa Gio",
      role: "Web Developer, UI/UX Designer",
      icon: "path/to/dummy-icon.png", // Replace with actual icon path
      linkedin: "https://www.linkedin.com/in/your-linkedin-url" // Placeholder link
    },
    {
      name: "Shuvashree Basnet",
      role: "UI/UX Designer",
      icon: "path/to/dummy-icon.png", // Replace with actual icon path
      linkedin: "https://www.linkedin.com/in/your-linkedin-url" // Placeholder link
    }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Meet Our Team</h1>
      <div style={styles.teamMembers}>
        {profileData.map((member, index) => (
          <div key={index} style={styles.teamMember}>
            <img 
              src={member.icon} 
              alt={member.name} 
              style={styles.profileIcon} 
            />
            <h2 style={styles.name}>{member.name}</h2>
            <p style={styles.role}>{member.role}</p>
            <a 
              href={member.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.linkedinButton}
            >
              LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    color: '#c197d2',
    marginBottom: '30px'
  },
  teamMembers: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px'
  },
  teamMember: {
    backgroundColor: '#c197d2',
    borderRadius: '10px',
    padding: '20px',
    width: '250px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
  },
  profileIcon: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  name: {
    color: 'white',
    margin: '10px 0'
  },
  role: {
    color: '#f0f0f0',
    fontSize: '14px',
    marginBottom: '15px'
  },
  linkedinButton: {
    display: 'inline-block',
    backgroundColor: 'white',
    color: '#c197d2',
    padding: '10px 15px',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease'
  }
};

export default MeetTheTeam;