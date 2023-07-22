import React, { useState } from "react";
import './App.css';

function Tommy({ user }) {
  const initialSchedule = {
    Monday: {
      "3 PM": false,
      "4 PM": false,
      "5 PM": false,
      "6 PM": false,
      "7 PM": false,
    },
    Tuesday: {
      "3 PM": false,
      "4 PM": false,
      "5 PM": false,
      "6 PM": false,
      "7 PM": false,
    },
    Wednesday: {
      "3 PM": false,
      "4 PM": false,
      "5 PM": false,
      "6 PM": false,
      "7 PM": false,
    },
    Thursday: {
      "3 PM": false,
      "4 PM": false,
      "5 PM": false,
      "6 PM": false,
      "7 PM": false,
    },
    Friday: {
      "3 PM": false,
      "4 PM": false,
      "5 PM": false,
      "6 PM": false,
      "7 PM": false,
    },
  };

  const [weeks, setWeeks] = useState([initialSchedule, initialSchedule, initialSchedule, initialSchedule, initialSchedule]);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Set to 0 initially

  const handleReservation = (day, time) => {
    const updatedWeeks = [...weeks];
    updatedWeeks[currentWeekIndex][day][time] = !updatedWeeks[currentWeekIndex][day][time];
    setWeeks(updatedWeeks);
  };

  const switchToWeek = (index) => {
    setCurrentWeekIndex(index);
  };

  return (
    <div className="tommy">
      <h1 style={{ marginTop: '0%' }}>Week {currentWeekIndex + 1}</h1>
      <h2>Schedule</h2>
      <div>
        <button onClick={() => switchToWeek(0)}>Week 1</button>
        <button onClick={() => switchToWeek(1)}>Week 2</button>
        <button onClick={() => switchToWeek(2)}>Week 3</button>
        <button onClick={() => switchToWeek(3)}>Week 4</button>
        <button onClick={() => switchToWeek(4)}>Week 5</button>
      </div>
      <table style={{ backgroundColor: '#282c34', color: 'white', minWidth: '100%' }}>
        <thead>
          <tr>
            <th>Time</th>
            {Object.keys(weeks[0]).map(day => <th key={day}>{day}</th>)}
          </tr>
        </thead>
        <tbody>
          {Object.keys(weeks[0].Monday).map(time => (
            <tr key={time}>
              <td>{time}</td>
              {Object.keys(weeks[currentWeekIndex]).map(day => (
                <td key={`${day}-${time}`}>
                  <button
                    className={`reservation-button ${weeks[currentWeekIndex][day][time] ? 'reserved' : ''}`}
                    onClick={() => handleReservation(day, time)}
                    disabled={user && weeks[currentWeekIndex][day][time]}
                    style={{
                      padding: '20px',
                      backgroundColor: weeks[currentWeekIndex][day][time] ? 'red' : 'green',
                      color: 'white',
                    }}
                  >
                    {weeks[currentWeekIndex][day][time] ? 'Reserved' : 'Available'}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tommy;
