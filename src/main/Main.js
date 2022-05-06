import { useState, useRef } from "react";
import LinkResult from "../linkresult/LinkResult";
import "./main.css";

const Main = () => {
  const [value, setValue] = useState(" ");
  const [shortLink, setShortLink] = useState(null);
  var inputField = useRef();
  var data;

  const handleClick = () => {
    if (value === " ") {
      inputField.current.style.border = "1px solid red";
      alert("please enter a link..");
    } else {
      const fetchData = async () => {
        try {
          let res = await fetch(
            `https://api.shrtco.de/v2/shorten?url=${value}`
          );

          data = await res.json();
          setShortLink(data.result.full_short_link);
        } catch (error) {
          alert("error : ", error);
        }
      };
      fetchData();
    }
  };

  return (
    <div>
      <div id="link">
        <input
          placeholder="Shorten a link here.."
          type="text"
          ref={inputField}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button onClick={handleClick}>Shorten it!</button>
        <LinkResult shortLink={shortLink} value={value} />
      </div>
    </div>
  );
};

export default Main;
