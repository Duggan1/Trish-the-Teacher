import React, { useState } from "react";
import './App.css';

function Tommy({ user }) {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const timeSlots = ['3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];

  const [schedule, setSchedule] = useState(
    daysOfWeek.reduce((acc, day) => {
      const daySlots = timeSlots.map(time => ({ day, time, reserved: false }));
      return [...acc, ...daySlots];
    }, [])
  );

  const handleReservation = (day, time) => {
    const updatedSchedule = schedule.map(slot =>
      slot.day === day && slot.time === time ? { ...slot, reserved: !slot.reserved } : slot
    );
    setSchedule(updatedSchedule);
  };

  return (
    <div className="tommy">
      <h1 style={{ marginTop: '0%' }}>3</h1>
      <h2>Content coming soon!</h2>
      <h2>Schedule:</h2>
      <div className="schedule">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              {daysOfWeek.map(day => <th key={day}>{day}</th>)}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map(time => (
              <tr key={time}>
                <td>{time}</td>
                {daysOfWeek.map(day => {
                  const slot = schedule.find(slot => slot.day === day && slot.time === time);
                  return (
                    <td key={`${day}-${time}`}>
                      <div style={{ display: 'inline-block', marginBottom: '5%' }} className="custom-checkbox">
                        <input
                          type='checkbox'
                          checked={slot.reserved}
                          onChange={() => handleReservation(day, time)}
                          disabled={user && slot.reserved}
                        />
                        <label style={{}} htmlFor={`${day}-${time}`}>
                          <div
                            className={`status-switch ${slot.reserved ? 'checked' : ''}`}
                            data-unchecked="Available"
                            data-checked="Reserved"
                          ></div>
                        </label>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tommy;

