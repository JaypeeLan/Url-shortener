import "./intro.css";
import logo from "../images/illustration-working.svg";

const Intro = () => {
  return (
    <section id="intro_section">
      <div id="intro_section_article">
        <h1>
          More than just <br /> shorter links
        </h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn"> Get Started</button>
      </div>

      <img src={logo} alt="illustration" />
    </section>
  );
};

export default Intro;
