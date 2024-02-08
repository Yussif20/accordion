import { useState } from "react";
import data from "./Data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const selectHandler = (currId) => {
    setSelected(currId === selected ? null : currId);
  };

  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.id} className="bg-orange-100 p-6 m-10 rounded">
            <p>{item.question}</p>
            <button onClick={() => selectHandler(item.id)}>+</button>
            {selected === item.id && <p>{item.answer}</p>}
          </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
