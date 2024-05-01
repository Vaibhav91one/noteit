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
        typewriter.typeString("Supercharge your API knowledge 🚀")
        .pauseFor(5000)
        .deleteAll()
        .typeString("With the power of DVAPI")
        .pauseFor(5000)
        .start();
      }}
    />
  )
}

export default TypewriteTitle