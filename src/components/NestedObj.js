export default function NestedObj() {
  const theProps = {
    name: "athenahealth | Healthcare IT",
    dept: "Member of Technical Staff",
    startDate: "2017",
    endDate: "2019",
    children: {
      name: "athenahealth | Healthcare IT",
      dept: "Member of Technical Staff",
      startDate: "2017",
      endDate: "2019",
      children: {
        type: "ul",
        key: null,
        ref: null,
        props: {
          children: [
            {
              type: "li",
              key: null,
              ref: null,
              props: {
                children:
                  "Developed widgets using React and Less to display patient information."
              }
            },
            {
              type: "li",
              key: null,
              ref: null,
              props: {
                children:
                  "Created design specifications, participated in design and code reviews."
              }
            },
            {
              type: "li",
              key: null,
              ref: null,
              props: {
                children:
                  "Worked on the design and initial development of a new platform to import medical documents."
              }
            },
            {
              type: "li",
              key: null,
              ref: null,
              props: {
                children:
                  "Developed a Kotlin micro-service to generate XML documents based on a government-compliant architecture (CCDA)."
              }
            }
          ]
        }
      }
    }
  };

  return theProps.name;
}
