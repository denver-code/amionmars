'use client';
import React, { useState } from 'react';
import {Input, Divider, Button, Link} from "@nextui-org/react";

const InputCheck = ({ newcomers, database }) => {
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState('');


  const handleSubmit = () => {
    if (newcomers.includes(inputValue)) {
      setStatus("You're on your way to Mars, Stellarian!");
    } else if (database.includes(inputValue)) {
      setStatus("You're already on Mars!");
    } else {
      setStatus("We don't know about your status yet! Make sure you subscribed on our Instagram page and wait until the next launch!");
    }
  };

  return (
    <div className="input-check flex justify-center flex-col m-auto h-screen">
      <p className='font-bold leading-7 sm:tracking-tight p-10' style={{fontSize: 47, fontFamily: "Orbitron"}}>Check if you're coming to Mars!</p>
      <Divider className='ml-10 mr-10'/>
         <div className='columns-2 p-10'>
           <Input
          className=' max-w-sm'
        placeholder="Instagram Username"
        value={inputValue}
        onValueChange={setInputValue}
            startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">@</span>
            </div>
          }
      />
      <Button onClick={handleSubmit} style={{fontFamily: "Orbitron", fontWeight: 600}}>Check Me!</Button>
         </div>
      {status ? <p className='ml-10' style={{fontSize: 20, fontFamily: "Orbitron"}}>{status}</p> : <p className='ml-10' style={{fontSize: 15, fontFamily: "Orbitron"}}>Please enter your Instagram username in the field above and click 'Check Me!' to get current status about your travel to Mars.</p>}

      <Link isBlock showAnchorIcon href="https://instagram.com/integrityofstellar" color="warning" className="ml-10 mt-10 max-w-fit">
        Instagram
      </Link>
    </div>
  );
};

export default InputCheck;