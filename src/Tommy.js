import React, { useState } from "react";
import './App.css';

function Tommy({ user }) {
  const week1 = {
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
  const week2 = {
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
  const week3 = {
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
  const week4 = {
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
  const week5 = {
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


  const weekDates = [
    "Aug 14", "Aug 21", "Aug 28", "Sep 4", "Sep 11",
    "Sep 18", "Sep 25", "Oct 2", "Oct 9", "Oct 16",
    "Oct 23", "Oct 30", "Nov 6", "Nov 13", "Nov 20",
    "Nov 27", "Dec 4", "Dec 11", "Dec 18", "Dec 25",
    "Jan 1", "Jan 8", "Jan 15", "Jan 22", "Jan 29",
    "Feb 5", "Feb 12", "Feb 19", "Feb 26", "Mar 5",
    "Mar 12", "Mar 19", "Mar 26", "Apr 2", "Apr 9",
    "Apr 16", "Apr 23", "Apr 30", "May 7", "May 14",
    "May 21", "May 28", "Jun 4", "Jun 11", "Jun 18",
    "Jun 25", "Jul 2", "Jul 9", "Jul 16", "Jul 23",
    "Jul 30", "Aug 6", "Aug 13",
  ];
  
 
  const [weeks, setWeeks] = useState([week1, week2, week3, week4, week5]);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0); // Set to 0 initially

  const handleReservation = (day, time) => {
    const updatedWeeks = [...weeks];
    updatedWeeks[currentWeekIndex][day][time] = !updatedWeeks[currentWeekIndex][day][time];
    setWeeks(updatedWeeks);
  };

  const switchToWeek = (index) => {
    setCurrentWeekIndex(index);
  };
  // console.log(currentWeekIndex)
  // console.log(weekDates[currentWeekIndex] )
  return (
    <div className="tommy">
      <h1 style={{ marginTop: '0%' }}>{weekDates[currentWeekIndex] }</h1>
      <h2>Schedule</h2>
      <div>
        <button onClick={() => switchToWeek(0)}>{weekDates[0]}</button>
        <button onClick={() => switchToWeek(1)}>{weekDates[1]}</button>
        <button onClick={() => switchToWeek(2)}>{weekDates[2]}</button>
        <button onClick={() => switchToWeek(3)}>{weekDates[3]}</button>
        <button onClick={() => switchToWeek(4)}>{weekDates[4]}</button>
      </div>
      <table style={{ backgroundColor: '#282c34', color: 'white', minWidth: '100%',maxWidth:'100%' }}>
        <thead>
          <tr>
            <th className="schead">Time</th>
            {Object.keys(weeks[0]).map(day => <th className="schead" key={day}>{day}</th>)}
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
                    id='basement'
                    style={{
                
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
