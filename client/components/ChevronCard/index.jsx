// Adapted from https://github.com/alphagov/frontend/blob/main/app/views/homepage/_chevron_card.html.erb

export default function ChevronCard(props) {
  return (
    <li className="chevron-card">
      <div className="chevron-card__wrapper">
        <h3 className="gem-c-heading govuk-heading-s govuk-!-margin-bottom-2">
          <a className="govuk-link chevron-card__link" href={props.href}>
            {props.text}
          </a>
        </h3>
        <p className="govuk-body chevron-card__description">
          {props.description}
        </p>
      </div>
    </li>
  );
}
