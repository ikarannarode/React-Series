import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setpassword] = useState("");


  // useRef hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZaabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setpassword(pass)

  },
    [length, numberAllowed, charAllowed, setpassword])


  const copyPasswordToClipboard = useCallback(() => {
    const btn = document.querySelector('#copy-btn');
    // passwordRef.current?.setSelectionRange(1, 5)
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

    btn.innerHTML = "Copied"
    setTimeout(() => {
      btn.innerHTML = "Copy"
    }, 1000);
  }, [password])




  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <h1>Password generator</h1>
      <div className="w-full max-w-md rounded-lg px-4 my-8 py-4 text-orange-500 shadow-md mx-auto bg-gray-700">
        <h1 className='text-center text-2xl my-3'>Password generator</h1>
        <div className="flex rounded-xl overflow-hidden mb-4">
          <input type="text" name="" id="" value={password} className='outline-none py-3 px-3 w-full' placeholder='Password' readOnly />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipboard}

            id='copy-btn'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
              ref={passwordRef}
            />
            <label>Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              id='numberInput'
              defaultChecked={numberAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor='numberInput'>Characters</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor='characterInput'>Numbers</label>
          </div>



        </div>
      </div>
    </>
  )
}

export default App
