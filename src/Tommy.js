import React, { useState } from "react";
import './App.css';

function Tommy({ user }) {
  // Define a function to generate the week objects
  const generateWeek = () => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const hours = ["3 PM", "4 PM", "5 PM", "6 PM", "7 PM"];

    const week = {};

    for (const day of days) {
      week[day] = {};
      for (const hour of hours) {
        week[day][hour] = false;
      }
    }

    return week;
  };

  // Create an array to hold the week objects for all 52 weeks
  const allWeeks = Array.from({ length: 52 }, () => generateWeek());

  const weekDates = [
    "August 14", "August 21", "August 28", "September 4", "September 11",
    "September 18", "September 25", "October 2", "October 9", "October 16",
    "October 23", "October 30", "November 6", "November 13", "November 20",
    "November 27", "December 4", "December 11", "December 18", "December 25",
    "January 1", "January 8", "January 15", "January 22", "January 29",
    "February 5", "February 12", "February 19", "February 26", "March 5",
    "March 12", "March 19", "March 26", "April 2", "April 9",
    "April 16", "April 23", "April 30", "May 7", "May 14",
    "May 21", "May 28", "June 4", "June 11", "June 18",
    "June 25", "July 2", "July 9", "July 16", "July 23",
    "July 30", "August 6", 
  ];
  const weekDays = [
    // August
    ["Aug 14", "Aug 15", "Aug 16", "Aug 17", "Aug 18"],
    // August 21 to August 25
    ["Aug 21", "Aug 22", "Aug 23", "Aug 24", "Aug 25"],
    // August 28 to September 1
    ["Aug 28", "Aug 29", "Aug 30", "Aug 31", "Sep 1"],
    // September 4 to September 8
    ["Sep 4", "Sep 5", "Sep 6", "Sep 7", "Sep 8"],
    // September 11 to September 15
    ["Sep 11", "Sep 12", "Sep 13", "Sep 14", "Sep 15"],
    // September 18 to September 22
    ["Sep 18", "Sep 19", "Sep 20", "Sep 21", "Sep 22"],
    // September 25 to September 29
    ["Sep 25", "Sep 26", "Sep 27", "Sep 28", "Sep 29"],
    // October 2 to October 6
    ["Oct 2", "Oct 3", "Oct 4", "Oct 5", "Oct 6"],
    // October 9 to October 13
    ["Oct 9", "Oct 10", "Oct 11", "Oct 12", "Oct 13"],
    // October 16 to October 20
    ["Oct 16", "Oct 17", "Oct 18", "Oct 19", "Oct 20"],
    // October 23 to October 27
    ["Oct 23", "Oct 24", "Oct 25", "Oct 26", "Oct 27"],
    // October 30 to November 3
    ["Oct 30", "Oct 31", "Nov 1", "Nov 2", "Nov 3"],
    // November 6 to November 10
    ["Nov 6", "Nov 7", "Nov 8", "Nov 9", "Nov 10"],
    // November 13 to November 17
    ["Nov 13", "Nov 14", "Nov 15", "Nov 16", "Nov 17"],
    // November 20 to November 24
    ["Nov 20", "Nov 21", "Nov 22", "Nov 23", "Nov 24"],
    // November 27 to December 1
    ["Nov 27", "Nov 28", "Nov 29", "Nov 30", "Dec 1"],
    // December 4 to December 8
    ["Dec 4", "Dec 5", "Dec 6", "Dec 7", "Dec 8"],
    // December 11 to December 15
    ["Dec 11", "Dec 12", "Dec 13", "Dec 14", "Dec 15"],
    // December 18 to December 22
    ["Dec 18", "Dec 19", "Dec 20", "Dec 21", "Dec 22"],
    // December 25 to December 29
    ["Dec 25", "Dec 26", "Dec 27", "Dec 28", "Dec 29"],
    // January 1 to January 5
    ["Jan 1", "Jan 2", "Jan 3", "Jan 4", "Jan 5"],
    // January 8 to January 12
    ["Jan 8", "Jan 9", "Jan 10", "Jan 11", "Jan 12"],
    // January 15 to January 19
    ["Jan 15", "Jan 16", "Jan 17", "Jan 18", "Jan 19"],
    // January 22 to January 26
    ["Jan 22", "Jan 23", "Jan 24", "Jan 25", "Jan 26"],
    // January 29 to February 2
    ["Jan 29", "Jan 30", "Jan 31", "Feb 1", "Feb 2"],
    // February 5 to February 9
    ["Feb 5", "Feb 6", "Feb 7", "Feb 8", "Feb 9"],
    // February 12 to February 16
    ["Feb 12", "Feb 13", "Feb 14", "Feb 15", "Feb 16"],
    // February 19 to February 23
    ["Feb 19", "Feb 20", "Feb 21", "Feb 22", "Feb 23"],
    // February 26 to March 2
    ["Feb 26", "Feb 27", "Feb 28", "Mar 1", "Mar 2"],
    // March 5 to March 9
    ["Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9"],
    // March 12 to March 16
    ["Mar 12", "Mar 13", "Mar 14", "Mar 15", "Mar 16"],
    // March 19 to March 23
    ["Mar 19", "Mar 20", "Mar 21", "Mar 22", "Mar 23"],
    // March 26 to March 30
    ["Mar 26", "Mar 27", "Mar 28", "Mar 29", "Mar 30"],
    // April 2 to April 6
    ["Apr 2", "Apr 3", "Apr 4", "Apr 5", "Apr 6"],
    // April 9 to April 13
    ["Apr 9", "Apr 10", "Apr 11", "Apr 12", "Apr 13"],
    // April 16 to April 20
    ["Apr 16", "Apr 17", "Apr 18", "Apr 19", "Apr 20"],
    // April 23 to April 27
    ["Apr 23", "Apr 24", "Apr 25", "Apr 26", "Apr 27"],
    // April 30 to May 4
    ["Apr 30", "May 1", "May 2", "May 3", "May 4"],
    // May 7 to May 11
    ["May 7", "May 8", "May 9", "May 10", "May 11"],
    // May 14 to May 18
    ["May 14", "May 15", "May 16", "May 17", "May 18"],
    // May 21 to May 25
    ["May 21", "May 22", "May 23", "May 24", "May 25"],
    // May 28 to June 1
    ["May 28", "May 29", "May 30", "May 31", "Jun 1"],
    // June 4 to June 8
    ["Jun 4", "Jun 5", "Jun 6", "Jun 7", "Jun 8"],
    // June 11 to June 15
    ["Jun 11", "Jun 12", "Jun 13", "Jun 14", "Jun 15"],
    // June 18 to June 22
    ["Jun 18", "Jun 19", "Jun 20", "Jun 21", "Jun 22"],
    // June 25 to June 29
    ["Jun 25", "Jun 26", "Jun 27", "Jun 28", "Jun 29"],
    // July 2 to July 6
    ["Jul 2", "Jul 3", "Jul 4", "Jul 5", "Jul 6"],
    // July 9 to July 13
    ["Jul 9", "Jul 10", "Jul 11", "Jul 12", "Jul 13"],
    // July 16 to July 20
    ["Jul 16", "Jul 17", "Jul 18", "Jul 19", "Jul 20"],
    // July 23 to July 27
    ["Jul 23", "Jul 24", "Jul 25", "Jul 26", "Jul 27"],
    // July 30 to August 3
    ["Jul 30", "Jul 31", "Aug 1", "Aug 2", "Aug 3"],
    ["Aug 6", "Aug 7", "Aug 8", "Aug 9", "Aug 10"],
  
    

  ];
  
  
  
  
 
  const [weeks, setWeeks] = useState(allWeeks);
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
      
      <h2 style={{ marginTop: '0%',backgroundColor:'gold',color:'black' }}>Click to schedule below</h2>
      <select style={{width:'50%', }} className="arrows" value={currentWeekIndex} onChange={(e) => switchToWeek(parseInt(e.target.value))}>
      {weekDates.map((date, index) => (
        <option key={index} value={index}>{date}</option>
      ))}
    </select>
    <h1 style={{ marginBottom: '0%',backgroundColor:'darkgreen',color:'white' }}>{weekDates[currentWeekIndex].slice(0,-2)}</h1>
    
      <table style={{ backgroundColor: '#282c34', color: 'white', minWidth: '100%',maxWidth:'100%' }}>
        <thead>
        <tr>
          <td></td>
          {weekDays[currentWeekIndex].map((weekday, index) => (
            <td key={index}>{weekday}</td>
          ))}
        </tr>
          <tr>
            <th className="schead">Time</th>
            {Object.keys(weeks[0]).map(day => <th className="schead" key={day}>{day}<p></p></th>)}
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