import React, { useEffect, useState } from "react";
import axios from "axios";

const style = {
  bg: `h-screen w-screen p-4`,
  container: `max-w-[500px] mt-[10rem] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-normal text-center text-slate-100 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `rounded-xl p-2 sm:ml-[8rem] text-[18px] font-bold ml-[3rem] mt-[2rem] bg-purple-500 text-slate-100 `,
  count: `text-center p-2`,
  paragraph: `text-center font-bold text-2xl text-slate-100 p-2 mt-[2rem]`,
};

function App() {
  const [quotes, setQuotes] = useState("");

  useEffect(() => {
    onClick();
  }, []);

  const onClick = () => {
    axios.get(`https://api.adviceslip.com/advice`).then((res) => {
      setQuotes(res.data.slip.advice);
    });
  };

  return (
    <div className={`app ${style.bg}`}>
      <div className={`container ${style.container}`}>
        <h1 className={style.heading}>
          Advice Quote Generator
        </h1>
        <button className={style.button} onClick={onClick}>
          Click To Generate Quote
        </button>
        <p className={style.paragraph}>"{quotes}"</p>
      </div>
    </div>
  );
}

export default App;
