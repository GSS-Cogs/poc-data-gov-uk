export default function Checkboxes(props) {
  return (
    <div class="govuk-form-group">
      <fieldset class="govuk-fieldset" aria-describedby={`${props.name}-hint`}>
        <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
          <h3 class="govuk-fieldset__heading">{props.title}</h3>
        </legend>
        {props.hint ? (
          <div id={`${props.name}-hint`} class="govuk-hint">
            {props.hint}
          </div>
        ) : null}
        <div
          style={{
            position: "relative",
            "max-height": "200px",
            "overflow-y": "auto",
            "overflow-x": "hidden",
            padding: "5px 13px",
          }}
        >
          <div
            class="govuk-checkboxes govuk-checkboxes--small"
            data-module="govuk-checkboxes"
          >
            {props.items.map((item, index) => (
              <div class="govuk-checkboxes__item">
                <input
                  class="govuk-checkboxes__input"
                  id={`${item.id}`}
                  name={`${props.name}`}
                  type="checkbox"
                  value="carcasses"
                />
                <label
                  class="govuk-label govuk-checkboxes__label"
                  for={`${props.name}`}
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </fieldset>
    </div>
  );
}
