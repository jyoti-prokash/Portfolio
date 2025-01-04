import { Cursor, useTypewriter } from "react-simple-typewriter";
const TypeScript = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Web Developer", "Creative Coder"],
    typeSpeed: 100,
    delaySpeed: 70,
    delaySpeed: 1500,
    loop: 0,
  });
  return (
    <div className="h-14 text-4xl font-bold py-10">
      <p className="text-[#4D4D4D]">
        I am a{" "}
        <span className="text-4xl bg-[#452683] text-white font-bold">
          {text}
          <Cursor cursorStyle="|" />
        </span>{" "}
      </p>
    </div>
  );
};

export default TypeScript;
