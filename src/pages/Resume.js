import ResumeItem from "../components/ResumeItem";
import ResumeItem2 from "../components/ResumeItem2";
import NestedObj from "../components/NestedObj";
import { useState, useEffect } from "react";

const double = (t) => 2 * t;
const greetUser = (firstName) => (
  <h2 class="greeting">
    Yo, <em>{firstName}</em>
  </h2>
);
const fruitList = ["apple", "banana", "cantaloupe", "orange"];
let resumeData;

export default function Resume() {
  fetch("data.json")
    .then((result) => result.json())
    .then((responseData) => (resumeData = responseData));
  console.log("I was called again so I could re-render.");
  console.log(double(21));
  console.log(greetUser("Jane"));
  console.log(
    "FL",
    fruitList.map((fruit) => (
      <li>
        <span class="f">Fruit</span>: {fruit}
      </li>
    ))
  );
  const [count, setCount] = useState(0);
  return (
    <>
      {JSON.stringify(resumeData)}
      <button onClick={() => setCount(count + 1)}>
        You clicked me {count} times
      </button>
      {double(21)}
      {greetUser("Jane")}
      {greetUser("Joe")}
      {<h1>double(21)Alvaro Montoro</h1>}
      <ul>
        {fruitList.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
      NESTED: <NestedObj />
      <h1>Alvaro Montoro</h1>
      <p>
        Senior Software Engineer with strong experience creating high-quality,
        scalable, and high-performance web applications seeking front-end and
        full stack opportunities.
      </p>
      <h2>EXPERIENCE</h2>
      <ResumeItem
        name="athenahealth | Healthcare IT"
        dept="Member of Technical Staff"
        startDate="2017"
        endDate="2019"
        accomplishments={[
          "Developed widgets using React and Less to display patient information.",
          "Created design specifications, participated in design and code reviews.",
          "Worked on the design and initial development of a new platform to import medical documents.",
          "Developed a Kotlin micro-service to generate XML documents based on a government-compliant architecture (CCDA).",
        ]}
      />
      <ResumeItem
        name="General Motors | Cadillac.Com Team"
        dept="Web Developer"
        startDate={2015}
        endDate={2017}
      >
        <ul>
          <li>
            Developed new components for the award-winning website Cadillac.com
            and its mobile version.
          </li>
          <li>
            Worked with stakeholders to refine and negotiate product requirement
            specifications, functional specifications, and product vision and
            direction.
          </li>
          <li>
            Designed a web component that reduced page load speed by over 15%,
            improving SEO and accessibility, and saving authoring expenses.
          </li>
          <li>
            Organized and participated in events representing GM at volunteering
            opportunities and competitions.
          </li>
        </ul>
      </ResumeItem>
      <section>
        MicroAssist Information Technology and Services PHP Developer 2014 -
        2015 Designed and developed different web projects with a focus on
        accessibility, including new features and website enhancements. Created
        and integrated an automated mail system with 3rd party APIs. Developed
        and collaborated in the translation project of the ITTD website for the
        Texas Department of Public Safety.
      </section>
      <section>
        Hewlett-Packard Content & Digital Asset Management IT Engineer 2011 -
        2014 Developed two internal content management systems (related to HP’s
        products documentation) with over three million monthly visitors.
        Coordinated efforts with an overseas team, applying Agile methodologies
        to ensure on-time, on-spec project delivery. Improved different batch
        jobs performance, reducing execution time by over 50%, and eliminating
        downtime.
      </section>
    </>
  );
}
