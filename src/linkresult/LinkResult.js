import { useRef } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import "./linkresult.css";

const LinkResult = ({ shortLink, value }) => {
  const linkResultButton = useRef();
  var handleClick = () => {
    linkResultButton.current.textContent = "Copied!";
    linkResultButton.current.style.backgroundColor = "hsl(257, 27%, 26%)";
    linkResultButton.current.style.color = "#fff";

    setTimeout(function () {
      linkResultButton.current.textContent = "Copy";
      linkResultButton.current.style.backgroundColor = "hsl(180, 66%, 49%)";
    }, 5000);
  };
  return (
    <>
      {shortLink && (
        <div id="linkResult">
          <p>{shortLink}</p>
          <CopyToClipboard text={shortLink}>
            <button
              className="linkResultButton"
              ref={linkResultButton}
              onClick={handleClick}
            >
              Copy
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
