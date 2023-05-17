import { array1, array2 } from "./dataSectionHome";

export default function SectionHome() {
  return (
    <section id="section-home">
      <article id="article-bio">
        <p>Hi there. My name is Trae Zeeofor ...my pseudonym anyway; lols.</p>
        <p>
          From a career background in Sales, I’m attempting a transition to{" "}
          <span>Tech(Front End Web Development)</span>.
        </p>
        <p>
          I've been learning to code from a plethora of resources, with
          interesting results.
        </p>
        <p>
          My current Tech stack/roadmap is based around JavaScript, React and
          Next.js.
        </p>
        <p>
          Eight of my most <span>noticeable projects</span> which are currently
          public on my Github are listed below.
        </p>
        <p>
          For all enquiries you may DM me on{" "}
          <span>
            <a href="https://twitter.com/trae_z" target="_blank">
              Twitter
            </a>
          </span>{" "}
          or{" "}
          <span>
            <a href="https://www.linkedin.com/in/traez/" target="_blank">
              LinkedIn
            </a>
          </span>
          .
        </p>
        <p>
          Please feel free to click the link at the top right corner for some
          fun <span>API magic</span>.
        </p>
      </article>
      <menu>
        <nav>
          {array1.map((item, index) => (
            <div className="projects" key={index}>
              <div className="project-id">
                <h2>{item.name}</h2>
                <img
                  src="./images/project-icon.png"
                  className="project-icon"
                  alt=""
                />
              </div>
              <h3>{item.info}</h3>
              <div className="project-links">
                <img
                  src="./images/github-icon.png"
                  className="github-icon"
                  alt=""
                />
                <h4>
                  <a href={item.repo} target="_blank">
                    Visit Repository
                  </a>
                </h4>
                <h4>
                  <a href={item.live} target="_blank">
                    Live Site
                  </a>
                </h4>
              </div>
            </div>
          ))}
        </nav>
        <nav>
          {array2.map((item, index) => (
            <div className="projects" key={index}>
              <div className="project-id">
                <h2>{item.name}</h2>
                <img
                  src="./images/project-icon.png"
                  className="project-icon"
                  alt=""
                />
              </div>
              <h3>{item.info}</h3>
              <div className="project-links">
                <img
                  src="./images/github-icon.png"
                  className="github-icon"
                  alt=""
                />
                <h4>
                  <a href={item.repo} target="_blank">
                    Visit Repository
                  </a>
                </h4>
                <h4>
                  <a href={item.live} target="_blank">
                    Live Site
                  </a>
                </h4>
              </div>
            </div>
          ))}
        </nav>
      </menu>
    </section>
  );
}

/*
Sample
*/
