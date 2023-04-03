export default function ListItem(props) {
  return (
    <li>
      <a
        className="govuk-link homepage-most-viewed-list__item"
        href={props.href}
      >
        {props.text}
      </a>
    </li>
  );
}
