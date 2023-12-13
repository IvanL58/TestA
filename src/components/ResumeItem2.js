export default function ResumeItem2(propsA) {
  console.log(propsA);
  return (
    <section>
      <h3>{propsA.name}</h3>
      <h4>
        {propsA.dept} <time>{startDate}</time> - <time>{endDate}</time>
      </h4>
      {children}
    </section>
  );
}
