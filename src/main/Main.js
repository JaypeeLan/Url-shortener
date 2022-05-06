import { useState, useRef } from "react";
import LinkResult from "../linkresult/LinkResult";
import "./main.css";

const Main = () => {
  const [value, setValue] = useState(" ");
  const [shortLink, setShortLink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  var inputField = useRef();
  var data;

  const handleClick = () => {
    if (value === " ") {
      inputField.current.style.border = "1px solid red";
      alert("please enter a link..");
    } else {
      setIsLoading(true);
      const fetchData = async () => {
        try {
          let res = await fetch(
            `https://api.shrtco.de/v2/shorten?url=${value}`
          );
          if (!res.ok === true) {
            throw new Error("Please try again!");
          }
          data = await res.json();
          setShortLink(data.result.full_short_link);
          setIsLoading(false);
          setErrorMsg("");
        } catch (err) {
          setIsLoading(false);
          setErrorMsg(`Error : ${err.message}`);
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
        <p style={{ color: "red" }}>{errorMsg}</p>
        {isLoading && <p style={{ color: "#fff" }}> Please wait...</p>}
        <LinkResult shortLink={shortLink} value={value} />
      </div>
    </div>
  );
};

export default Main;
