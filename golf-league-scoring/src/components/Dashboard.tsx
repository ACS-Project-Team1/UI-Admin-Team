import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  // Dummy data for demonstration
  const monthlyData = [
    { label: "Jan", value: 65 },
    { label: "Feb", value: 59 },
    { label: "Mar", value: 80 },
    { label: "Apr", value: 81 },
    { label: "May", value: 56 },
  ];

  const weeklyScores = [
    { week: "Week 1", score: 40 },
    { week: "Week 2", score: 45 },
    { week: "Week 3", score: 38 },
    { week: "Week 4", score: 50 },
    { week: "Week 5", score: 55 },
  ];

  const teamParticipation = [
    { team: "Team A", value: 12 },
    { team: "Team B", value: 15 },
    { team: "Team C", value: 8 },
    { team: "Team D", value: 20 },
  ];

  // Maximum value calculations
  const maxMonthlyValue = Math.max(...monthlyData.map(d => d.value));
  const maxWeeklyScore = Math.max(...weeklyScores.map(s => s.score));
  
  // Pie chart calculations
  const totalParticipation = teamParticipation.reduce((acc, team) => acc + team.value, 0);
  let startAngle = 0;
  
  return (
    <div className="dashboard">
      <h2>Monthly Registrations</h2>
      <svg width="600" height="400" className="chart">
        {monthlyData.map((d, index) => (
          <g transform={`translate(${index * 100}, 0)`} key={d.label}>
            <rect
              x="10"
              y={400 - (d.value / maxMonthlyValue) * 350}
              width="80"
              height={(d.value / maxMonthlyValue) * 350}
              fill="teal"
            />
            <text x="50" y="390" textAnchor="middle">{d.label}</text>
            <text x="50" y={385 - (d.value / maxMonthlyValue) * 350} textAnchor="middle" fill="white">{d.value}</text>
          </g>
        ))}
      </svg>

      <h2>Weekly League Scores</h2>
      <svg width="600" height="400" className="chart">
        <polyline
          fill="none"
          stroke="blue"
          strokeWidth="3"
          points={weeklyScores.map((s, index) => `${index * 120},${400 - (s.score / maxWeeklyScore) * 350}`).join(" ")}
        />
        {weeklyScores.map((s, index) => (
          <text key={s.week} x={index * 120} y="390" textAnchor="middle">{s.week}</text>
        ))}
      </svg>

      <h2>Team Participation</h2>
      <svg width="600" height="400" className="chart" viewBox="0 0 32 32">
        {teamParticipation.map((team, index) => {
          const radius = 15.91549430918954; // Circumference for SVG circle
          const teamValue = (team.value / totalParticipation) * 100;
          const x = 16 + radius * Math.cos(2 * Math.PI * startAngle);
          const y = 16 + radius * Math.sin(2 * Math.PI * startAngle);
          startAngle += team.value / totalParticipation;
          return (
            <circle key={team.team} r={radius} cx="16" cy="16" fill="transparent" stroke={["red", "green", "blue", "yellow"][index]} strokeWidth="32" strokeDasharray={`${teamValue} ${100 - teamValue}`} transform={`rotate(-90 ${x} ${y})`} />
          );
        })}
      </svg>
    </div>
  );
};

export default Dashboard;
