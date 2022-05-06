import "./statistics.css";
import img_1 from "../images/icon-brand-recognition.svg";
import img_2 from "../images/icon-detailed-records.svg";
import img_3 from "../images/icon-fully-customizable.svg";
const Statistics = () => {
  return (
    <div id="statistics">
      <h1>Advanced Statistics</h1>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div id="stats">
        <div className="statistics_details">
          <div className="imgWrapper">
            <img src={img_1} alt="brand" />
          </div>

          <h2>Brand Recognition</h2>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        {/* ------------------------- */}

        <div className="statistics_details">
          <div className="imgWrapper">
            <img src={img_2} alt="Records" />
          </div>
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        {/* ----------------------- */}

        <div className="statistics_details">
          <div className="imgWrapper">
            <img src={img_3} alt="Customizable" />
          </div>
          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
