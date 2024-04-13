import "./App.css"
import Footer from "./footer/footer"
import Header from "./header/header"
import Greeting from "./name/greeting"

function App() {
  const names = [
    {
      name: "Josué",
      age: 17,
      sex: "m",
    },
    {
      name: "Ana",
      age: 19,
      sex: "f",
    },
  ]

  return (
    <>
      <Header></Header>
      <div className="text">
        {names.map((user) => (
          <Greeting name={user.name} age={user.age} sex={user.sex} />
        ))}
      </div>
      <Footer/>
    </>
  )
}

export default App
