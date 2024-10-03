import './App.css'

function App() {
  // array
  let arr = [1,2,3,"hello"]

  // object
  let obj = {
    name:"raj",
    subject:"react"
  }

  // Destructing
  const {name,subject} = obj;
  console.log(name);
  console.log(subject);

  // Spread Operator
  let arr2 = [...arr,"spread"]
  console.log(arr2);
  
  // array of object
  let arr3 = [
    {name:"raj",subject:"react"},
    {name:"jay",subject:"js"},
    {name:"amit",subject:"html"},
    {name:"harsh",subject:"css"}
  ]

  return (
    <>
    <div>
      <h3>Array : {arr}</h3>
      <h3>Object : {obj.name} {obj.subject} </h3>
    </div>

    <div>
      <h1>Map Method on array</h1>
      {
        arr.map((e,i)=>{
          return <p key={e} > {e} </p>
        })
      }
    </div>

    <div className='container-card'>
      <h1>Map method on array of object </h1>
      {
        arr3.map((e,i)=>{
          return <div key={i} className='card-1'>
            <p>{e.name} : {e.subject}</p>
          </div>
        })
      }
    </div>
    </>
  )
}

export default App
