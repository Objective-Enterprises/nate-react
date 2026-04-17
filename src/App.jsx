// The page needs to show:
// - Hello Dorothy!
// - Hello Zelda!
// - Hello Tallulah!

import Hello from "./Hello"

export default function App () {
  return (
    <>
      <Hello person="Dorothy" />
      <Hello person="Zelda" />
      <Hello person="Tallulah" />
    </>
  )
}
