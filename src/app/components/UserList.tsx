'use client';
import React, { useEffect, useRef } from 'react';

const UserList = ({ usernames }) => {
  const columnRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const scroll = (ref) => {
      if (ref.current) {
        ref.current.scrollTop += 1;
        if (ref.current.scrollTop >= ref.current.scrollHeight / 2) {
          ref.current.scrollTop = 0;
        }
      }
    };

    const intervals = columnRefs.map((ref) => setInterval(() => scroll(ref), 50));

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
   <div className="user-list-container" style={{ display: 'flex', justifyContent: 'flex-end', height: '100vh', position: 'fixed', right: 0 }}>
   
      <div className="user-list" style={{ width: 'fit-content', overflow: 'hidden', display: 'flex', flexDirection: 'row-reverse' }}>
        {columnRefs.map((ref, columnIndex) => (
          <div key={columnIndex} className="column" style={{ overflow: 'hidden', flex: '1', marginRight: '10px' }} ref={ref}>
            {usernames.map((username, index) => {
              if (index % 3 === columnIndex) {
                return (
                  <div key={index} className="user" style={{ margin: '5px', padding: '15px', maxWidth: "200px", fontFamily: "Orbitron", fontSize: "18px"}}>{'@' + username}</div>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;