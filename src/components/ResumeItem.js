export default function ResumeItem({
  name,
  dept,
  position,
  startDate,
  endDate,
  accomplishments,
}) {
  return (
    <section>
      <h3>{name}</h3>
      <h4>
        {dept} <time>{startDate}</time> - <time>{endDate}</time>
      </h4>
      <ul>
        {accomplishments?.map((accomplishment) => (
          <li>{accomplishment}</li>
        ))}
      </ul>
    </section>
  );
}
