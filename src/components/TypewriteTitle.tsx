"use client"

import TypewriterComponent from "typewriter-effect"

type Props = {}

const TypewriteTitle = (props: Props) => {
  return (
    <TypewriterComponent
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter.typeString("Supercharged Productivity")
        .pauseFor(1000)
        .deleteAll()
        .typeString("With the power of AI ")
        .pauseFor(1000)
        .start();
      }}
    />
  )
}

export default TypewriteTitle