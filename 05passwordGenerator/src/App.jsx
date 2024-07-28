import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  // useRef hook
  let passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "~@#$%^&*_-<>|/?"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  }
    , [length, numberAllowed, charAllowed, setpassword])  // dependencies, but setpassword is method

  const copypasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 10);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => { passwordGenerator() }
    , [length, charAllowed, numberAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 shadow-md'>
        <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full px-3 py-1'
            placeholder='password'
            ref={passwordRef}
            readOnly />
          <button
            onClick={copypasswordToClipboard}
            className='bg-blue-700 ouline-none px-2 py-0.5 text-white shrink-0'>Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input
              type="range"
              value={length}
              id="rangeInput"
              min={6}
              max={87}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label htmlFor='rangeInput' className='text-lg'>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type="checkbox"
              id="nameInput"
              className='pointer'
              onChange={(e) => { setnumberAllowed((prev) => !prev); }} />
            <label htmlFor='nameInput' className='text-lg'>Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type="checkbox"
              id="charInput"
              className='pointer'
              onChange={(e) => { setcharAllowed((prev) => !prev); }} />
            <label htmlFor='nameInput' className='text-lg'>Character</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
