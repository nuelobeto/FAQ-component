import React, { useState } from "react";
import box from "./assets/illustration-box-desktop.svg";
import woman from "./assets/illustration-woman-online-mobile.svg";

import Question from "./components/Question";
import Answer from "./components/Answer";
import { faq } from "./faq/faq";

function App() {
  const [faQ, setFaQ] = useState(faq);

  const handleToggle = (id) => {
    let update = faQ.map((obj) => {
      let open = obj.open;
      if (obj.id === id) {
        if (open === false) {
          open = true;
        } else if (open === true) {
          open = false;
        }
      }
      return {
        ...obj,
        open,
      };
    });

    setFaQ(update);
  };

  return (
    <>
      <main>
        <article>
          <div className="bg"></div>

          <div className="box">
            <img src={box} alt="" />
          </div>

          <div className="woman">
            <img src={woman} alt="" />
          </div>

          <div className="faq">
            <h1>FAQ</h1>
            {faQ.map((obj) => (
              <div key={obj.id}>
                <Question obj={obj} handleToggle={handleToggle} />
                <Answer obj={obj} />
              </div>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}

export default App;
