import "./App.css";
import Experience from "./Experience";
import { useState,useRef, useLayoutEffect } from "react";
import Select from "./Select";
function App() {
  const [current, setCurrent] = useState(0);
  const changeModel = (selected: number) => setCurrent(selected);

  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);
  const section5Ref = useRef<HTMLDivElement>(null);
  const section6Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {

          if (entry.target === section1Ref.current) {
            changeModel(1);
          } else if (entry.target === section2Ref.current) {
            changeModel(1);
          } else if (entry.target === section3Ref.current) {
            changeModel(1);
          } else if (entry.target === section4Ref.current) {
            changeModel(1);
          } else if (entry.target === section5Ref.current) {
            changeModel(0);
          } else if (entry.target === section6Ref.current) {
            changeModel(0);

          }
        }
      });
    };

    const options = {
      root: null, // Use the viewport as the root element
      rootMargin: '0px', // Add margins if needed
      threshold: 0.5, // Percentage of the target element's visibility to trigger the callback
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (section1Ref.current) {
      observer.observe(section1Ref.current);
    }
    if (section2Ref.current) {
      observer.observe(section2Ref.current);
    }
    if (section3Ref.current) {
      observer.observe(section3Ref.current);
    }
    if (section4Ref.current) {
      observer.observe(section4Ref.current);
    }
    if (section5Ref.current) {
      observer.observe(section5Ref.current);
    }
    if (section6Ref.current) {
      observer.observe(section6Ref.current);
    }

    return () => {
      if (section1Ref.current) {
        observer.unobserve(section1Ref.current);
      }
      if (section2Ref.current) {
        observer.unobserve(section2Ref.current);
      }
      if (section3Ref.current) {
        observer.unobserve(section3Ref.current);
      }
      if (section4Ref.current) {
        observer.unobserve(section4Ref.current);
      }
      if (section5Ref.current) {
        observer.unobserve(section5Ref.current);
      }
      if (section6Ref.current) {
        observer.unobserve(section6Ref.current);
      }
    };
  }, []);
  return (<>
      <div className="rotation">
        <p>Please Rotate your device to see the Product</p>
      </div>
      <div className="loader">
        <p>WELCOME TO EXOGENOUS TECHNOLOGY</p>
        <p>Loading... Please wait</p>
        <div className="progress"></div>
      </div>
      <main className="mainContainer">
        <section   ref={section1Ref} className="section first">
          <div className="section--one--container1">
            <nav className="nav--bar">
              <div className="logo">
                <img
                  src="/etlogo.webp"
                  alt="etlogo"
                  className="logo"
                />
              </div>
              <Select count={3} changeNumber={changeModel} />
              <ul className="menu">
                <li>About</li>
                <li>Digital Solution</li>
                <li>Web Solution</li>
                <li>Enterprise Solution</li>
                <li>Offshore Team</li>
                <li>Contact</li>
              </ul>
            </nav>

            <h1>
              Where idea meets <span>Technology</span>
            </h1>
            {/* <h3>SHASHWAT</h3> */}
            <p>
              Unlock your business full potential with our integrated mareketing
              and software designed to drive growth and success
            </p>
          </div>
          <div className="section--one--container2">
            <div className="spec--wrapper">
              <div className="value--wrapper">
                <div className="value">Digital Solution</div>
              </div>
              <div className="name">
                Unlocking Digital Success: Tailored Solutions for Your Online
                Growth.
              </div>
              <div className="unit">
                <ul>
                  {" "}
                  <li>Branding</li>
                  <li>Content Marketing</li>
                  <li>Lead Generation</li>
                  <li>Traffic & Engagements</li>
                  <li>Conversion Optimization</li>
                  <li>Account Based Marketing</li>
                  {/* <li>Paid Advertisements</li> */}
                  {/* <li>Full Stack Marketing</li>
                  <li>Automate Sales & Marketing Team</li> */}
                </ul>
              </div>
            </div>
            <div className="spec--wrapper">
              <div className="value--wrapper">
                <div className="value">Web Solution</div>
              </div>
              <div className="name">
                Crafting Your Digital Identity: Innovative Web Solutions for
                Every Need.
              </div>
              <div className="unit">
                <ul>
                  {" "}
                  <li>Website Development</li>
                  <li>Website Speed Optimization</li>
                  <li>Website Migration</li>
                  <li>Website Updates & Security</li>
                </ul>
              </div>
            </div>
            <div className="spec--wrapper">
              <div className="value--wrapper">
                <div className="value">Enterprise Solution</div>
              </div>
              <div className="name">
                Elevate Your Business: Streamlined Enterprise Solutions for
                Success.
              </div>
              <div className="unit">
                <ul>
                  {" "}
                  <li>Custom Software</li>
                  <li>AWS Cloud</li>
                  <li>Azure Cloud</li>
                  <li>Data Analytics</li>
                </ul>
              </div>
            </div>

            <div className="spec--wrapper">
              <div className="value--wrapper">
                <div className="value">Content Marketing</div>
              </div>
              <div className="name">
                Igniting Engagement, Amplifying Reach: Your Content, Your Story,
                Your Success.
              </div>
              <div className="unit">
                <ul>
                  {" "}
                  <li>Blogs</li>
                  <li>Social Presence</li>
                  <li>Technical Assets</li>
                  <li>Web Content</li>
                  <li>Marketing Content</li>
                </ul>
              </div>
            </div>
            <div className="spec--wrapper">
              <div className="value--wrapper">
                <div className="value">App Development</div>
                {/* <div className="unit">details</div>  */}
              </div>
              <div className="name">
                Creating Innovative Mobile Experiences: Transform Your Ideas
                into Reality.
              </div>
              <div className="unit">
                <ul>
                  {" "}
                  <li>Native App Development</li>
                  <li>Cross-Platform App Development</li>
                  <li>UI/UX Design for Mobile Apps</li>
                  <li>Prototyping and Wireframing</li>
                  {/* <li>
                    Customized Solutions for iOS, Android, and Hybrid Apps
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section  ref={section2Ref}  className="section second">

          <div className="section--two--container1">
            <h1>LETS CONNECT</h1>
            <h1>TO BUILD.</h1>
            <h1>CREDIBILITY.</h1>
          </div>
          <span>Why?</span>
          <div className="section--two--container2">
            <div className="writing">
              In an ever-evolving digital landscape, businesses must harness the
              power of technology to thrive and stay ahead. At Exogenous
              Technology, we understand that one size does not fit all. That's
              why we specialize in delivering customized solutions that align
              perfectly with your unique digital and development needs. No two
              businesses are identical, and your digital solutions shouldn't be
              either. <br />We recognize that your challenges, objectives, and
              opportunities are distinctive. That's where our commitment to
              customization comes into play. <br />Our team of experts collaborates
              closely with you to understand your specific requirements,
              workflows, and goals. Whether you need Enterprise Software, Web
              Solutions, Digital Solutions or Offshore Team, we're here to
              ensure it's designed and built just for you.
            </div>
          </div>
          <p>LEVERAGE DIGITAL TECHNOLOGIES & TOOLS TO ENHANCE YOUR PROCESS</p>
       
   
        </section>

        <section   ref={section3Ref} className="section  third leftSide">
          <div className="section--three--container">
            <h1 className="title">WHY CHOOSE US</h1>

            <p className="detail">
              Choose us because we're not just problem-solvers but we're gap
              identifiers and solution creators. Our approach goes beyond
              addressing immediate challenges. We meticulously analyze your
              unique business landscape, pinpoint the gaps, and then craft
              tailor-made solutions. With us, you're not just resolving issues;
              you're future-proofing your success.
            </p>
            <h3 className="title">DISCOVER, ANALYSE, DEFINE & EXECUTE</h3>
            <div className="logos">
              <img src="/src/assets/images/clientLogo.webp" alt="Logo 1" />
              <img src="/src/assets/images/cl9.webp" alt="Logo 9" />
              <img src="/src/assets/images/cl4.png" alt="Logo 4" />
              <img src="/src/assets/images/cl5.webp" alt="Logo 5" />

              <img src="/src/assets/images/cl2.webp" alt="Logo 2" />
              <img src="/src/assets/images/cl3.png" alt="Logo 3" />

              <img src="/src/assets/images/cl6.webp" alt="Logo 6" />
              <img src="/src/assets/images/cl7.png" alt="Logo 7" />
              <img src="/src/assets/images/cl8.png" alt="Logo 8" />
              <img src="/src/assets/images/cl10.webp" alt="Logo 10" />
              <img src="/src/assets/images/cl12.webp" alt="Logo 12" />
              <img src="/src/assets/images/cl11.png" alt="Logo 11" />
            </div>
            <h1 className="title">WE WORKED WITH GLOBAL LARGEST BRANDS</h1>
          </div>
        </section>

        <section  ref={section4Ref}  className="section four rightSide">
          <div className="section--four--container">
            <h1 className="title">60% STRATEGY</h1>
            <p className="detail">
              A well-crafted strategy is the foundation for achieving long-term
              goals, adapting to change, and outmaneuvering competitors.
            </p>
            <h1 className="title">95% EXECUTION</h1>
            <p className="detail">
              A brilliant strategy alone is not enough; it's in the execution
              that success is truly achieved. Execution demands discipline,
              commitment, and a relentless focus on the details.
            </p>
            <h1 className="title">70% OPTIMIZATION</h1>
            <p className="detail">
              Optimization is the relentless pursuit of improvement, driven by
              data, analysis, and innovation. In business, optimization is the
              key to staying competitive and agile.
            </p>
            <Select count={3} changeNumber={changeModel} />
          </div>

        </section>

        <section   ref={section5Ref} className="section five rightSide  ">
          <div className="section--five--container">
            <h1 className="title">1000+</h1>
            <p className="detail">Project Completed</p>
            <h1 className="title">500+</h1>
            <p className="detail">Happy customers</p>
            <h1 className="title">3+</h1>
            <p className="detail">Years experience</p>
            <h1 className="title">5</h1>
            <p className="detail">Awards achievement</p>
            <h1 className="title">Lets connect to define the KPI</h1>
          </div>
        </section>
        <section   ref={section6Ref} className="section six leftSide  ">
          <div className="section--six--container">
            <h1 className="title">
              UNLOCK YOUR SUCCESS WITH OUR KPI-DRIVEN SOLUTION
            </h1>
            <p className="detail">
              Our KPI-driven solution is designed to help you achieve your
              business objectives efficiently and effectively.
            </p>
            <p className="detail">
              We understand the importance of measurable results, and that's why
              our approach is centered around Key Performance Indicators (KPIs).
            </p>
            <p className="detail">
              By focusing on the metrics that matter most to your organization,
              we ensure that every effort contributes directly to your success.
              Let's collaborate and turn your KPIs into reality.
            </p>
            <p className="detail">
              Get in touch with us today to learn more about how our KPI-driven
              solution can drive your business forward.
            </p>
            <h2 className="title2">Have a project in mind?</h2>
            <a href="tel:+91 790 3375 530" className="title">
              Lets make something great together!
            </a>
          </div>

          <footer>
            <p>© 2024 | All rights reserved by Exogenous Technology</p>
            <p>Build your own team with us.</p>
            <a href="tel:+91 790 3375 530">LETS TALK</a>
            <button className="button--footer">BACK TO TOP</button>
          </footer>
        </section>
      </main>

      <div className="canvas-container">
        <Experience current={current} />
      </div></>
  );
}

export default App;
