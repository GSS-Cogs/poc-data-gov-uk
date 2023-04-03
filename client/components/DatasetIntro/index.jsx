export default function DatasetIntro(props) {
  return (
    <>
      <span className="govuk-caption-l">Dataset</span>
      <h1 className="govuk-heading-l">{props.title}</h1>
      <span className="dataset-intro__shortMetadata">
        Published by{" "}
        <a className="govuk-link" href={props.publisher.href}>
          {props.publisher.label}
        </a>{" "}
        on {formatDate(props.issued)} under the{" "}
        <a className="govuk-link" href={props.license.href}>
          {props.license.label}
        </a>
        .
      </span>
      <p className="govuk-body-l">{props.description}</p>
      <a className="dataset-intro__link" href="#about">
        About this dataset
      </a>
      <a className="dataset-intro__link" href="#download">
        Download this dataset (CSV, 100kb)
      </a>
      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible"></hr>
    </>
  );
}

function formatDate(date) {
  const d = new Date(date);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return d
    .toLocaleTimeString("en-GB", options)
    .replace(",", "")
    .replace(/( am| pm)/g, (m) => m.trim().toLowerCase());
}
