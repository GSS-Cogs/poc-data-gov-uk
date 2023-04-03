function DocumentListItem(props) {
  return (
    <li className="gem-c-document-list__item">
      <a
        className="gem-c-document-list__item-title gem-c-document-list__item-title--context govuk-link"
        href={props.href}
      >
        {props.title}
      </a>
      <span className="gem-c-document-list__item-context">Dataset</span>
      <p className="gem-c-document-list__item-description">
        {props.description}
      </p>

      <ul className="gem-c-document-list__item-metadata">
        <li className="gem-c-document-list__attribute">
          <time dateTime={props.issued}>{formatDate(props.issued)}</time>
        </li>
        <li className="gem-c-document-list__attribute">
          <time dateTime={props.issued}>{props.publisher.label}</time>
        </li>
      </ul>
    </li>
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
  };
  return d
    .toLocaleTimeString("en", options)
    .replace(",", "")
    .replace(/( AM| PM)/g, (m) => m.trim().toLowerCase());
}

export default function DocumentList(props) {
  return (
    <ul className="gem-c-document-list">
      {props.items.map((item) => {
        return <DocumentListItem {...item} />;
      })}
    </ul>
  );
}
