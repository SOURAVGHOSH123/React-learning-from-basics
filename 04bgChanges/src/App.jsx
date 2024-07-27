import { useState } from "react"

function App() {
  const [color, setcolor] = useState("silver")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-content-center bottom-12 insert-x-10 px-2" style={{ marginLeft: 200 }}>
          <div className="flex flex-wrap justify-content-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => { setcolor("red") }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >Red</button>
            <button onClick={() => { setcolor("green") }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >green</button>
            <button onClick={() => { setcolor("blue") }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >blue</button>
            <button onClick={() => { setcolor("yellow") }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >yellow</button>
            <button onClick={() => { setcolor("skyblue") }} className="outline-none px-2 py-3 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "skyblue" }}>SkyBlue</button>
          </div>
        </div >

      </div >
    </>
  )
}

export default App;
