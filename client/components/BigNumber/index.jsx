// Adapted from https://github.com/alphagov/govuk_publishing_components/blob/main/app/views/govuk_publishing_components/components/_big_number.html.erb

export default function BigNumber(props) {
  return (
    <div
      className={
        props.className
          ? `gem-c-big-number govuk-!-margin-bottom-6 ${props.className}`
          : "gem-c-big-number govuk-!-margin-bottom-6"
      }
    >
      {props.href ? (
        <a href={props.href}>
          <span className="gem-c-big-number__value">{props.value}</span>
          <span className="govuk-visually-hidden">&nbsp;</span>
          <span className="gem-c-big-number__label">{props.label}</span>
        </a>
      ) : (
        <>
          <span className="gem-c-big-number__value">{props.value}</span>
          <span className="govuk-visually-hidden">&nbsp;</span>
          <span className="gem-c-big-number__label">{props.label}</span>
        </>
      )}
    </div>
  );
}
