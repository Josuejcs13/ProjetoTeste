type GreetingProps = {
  name: string
  age: number
  sex: string
}

const Greeting = ({ name, age, sex }: GreetingProps) => {
  const isMen = sex === "m"

  return (
    <div>
      {isMen ? (
        <p>
          O {name} tem {age} anos
        </p>
      ) : (
        <p>
          A {name} tem {age} anos
        </p>
      )}
    </div>
  )
}

export default Greeting
