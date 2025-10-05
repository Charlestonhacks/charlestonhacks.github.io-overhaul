export function BoardMembers() {
  const boardMembers = [
    {
      name: 'Board Member Name',
      role: 'President',
      bio: 'Brief bio about this board member and their contributions to CharlestonHacks.',
      image: '/images/placeholder-avatar.png',
    },
    // Add more board members here
  ];

  return (
    <div className="content-page">
      <div className="content-header">
        <h1>Board Members</h1>
        <p className="subtitle">Meet the team leading CharlestonHacks</p>
      </div>

      <div className="content-body">
        <div className="board-grid">
          {boardMembers.map((member, index) => (
            <div key={index} className="board-card">
              <div className="board-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="board-info">
                <h3>{member.name}</h3>
                <p className="board-role">{member.role}</p>
                <p className="board-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="join-board">
          <h2>Interested in Joining?</h2>
          <p>
            We're always looking for passionate individuals to help lead CharlestonHacks.
            If you're interested in joining our board, please reach out to us.
          </p>
          <a href="mailto:hello@charlestonhacks.com" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
