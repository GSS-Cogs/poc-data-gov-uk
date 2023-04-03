export default function Cookies() {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <h1 className="govuk-heading-l">Cookies</h1>
        <p className="govuk-body">
          Cookies are small files saved on your phone, tablet or computer when
          you visit a website.
        </p>
        <p className="govuk-body">
          We use cookies to make GOV.UK Notify work and collect information
          about how you use our service.
        </p>

        <h2 className="govuk-heading-m" id="essential-cookies">
          Essential cookies
        </h2>
        <p className="govuk-body">
          Essential cookies keep your information secure while you use Notify.
          We do not need to ask permission to use them.
        </p>
        <table className="govuk-table">
          <caption className="govuk-visually-hidden">Essential cookies</caption>
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th>Name</th>
              <th>Purpose</th>
              <th>Expires</th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">notify_admin_session</td>
              <td className="govuk-table__cell">Used to keep you signed in</td>
              <td className="govuk-table__cell">20 hours</td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">cookie_policy</td>
              <td className="govuk-table__cell">
                Saves your cookie consent settings
              </td>
              <td className="govuk-table__cell">1 year</td>
            </tr>
          </tbody>
        </table>

        <h2 className="govuk-heading-m" id="analytics-cookies">
          Analytics cookies (optional)
        </h2>
        <p className="govuk-body">
          With your permission, we use Google Analytics to collect data about
          how you use Notify. This information helps us to improve our service.
        </p>
        <p className="govuk-body">
          Google is not allowed to use or share our analytics data with anyone.
        </p>
        <p className="govuk-body">
          Google Analytics stores anonymised information about:
        </p>
        <ul className="govuk-list govuk-list--bullet">
          <li>how you got to GOV.UK Notify</li>
          <li>the pages you visit on Notify and how long you spend on them</li>
          <li>any errors you see while using Notify</li>
        </ul>
        <table className="govuk-table">
          <caption className="govuk-visually-hidden">
            Google Analytics cookies
          </caption>
          <thead className="govuk-table__head">
            <tr className="govuk-table__row">
              <th>Name</th>
              <th>Purpose</th>
              <th>Expires</th>
            </tr>
          </thead>
          <tbody className="govuk-table__body">
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">_ga</td>
              <td className="govuk-table__cell">
                Checks if you've visited Notify before. This helps us count how
                many people visit our site.
              </td>
              <td className="govuk-table__cell">2 years</td>
            </tr>
            <tr className="govuk-table__row">
              <td className="govuk-table__cell">_gid</td>
              <td className="govuk-table__cell">
                Checks if you've visited Notify before. This helps us count how
                many people visit our site.
              </td>
              <td className="govuk-table__cell">24 hours</td>
            </tr>
          </tbody>
        </table>
        <div className="cookie-settings__no-js">
          <h2 className="govuk-heading-s govuk-!-margin-top-6">
            Do you want to accept analytics cookies?
          </h2>
          <p className="govuk-body">
            We use Javascript to set our analytics cookies. Unfortunately
            Javascript is not running on your browser, so you cannot change your
            settings. You can try:
          </p>
          <ul className="govuk-list govuk-list--bullet">
            <li>reloading the page</li>
            <li>turning on Javascript in your browser</li>
          </ul>
        </div>
        <div className="cookie-settings__form-wrapper">
          <form data-notify-module="cookie-settings">
            <div className="govuk-form-group govuk-!-margin-top-6">
              <fieldset
                className="govuk-fieldset"
                aria-describedby="changed-name-hint"
              >
                <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
                  Do you want to accept analytics cookies?
                </legend>
                <div className="govuk-radios govuk-radios--inline">
                  <div className="govuk-radios__item">
                    <input
                      className="govuk-radios__input"
                      id="cookies-analytics-yes"
                      name="cookies-analytics"
                      type="radio"
                      value="on"
                    />
                    <label
                      className="govuk-label govuk-radios__label"
                      htmlFor="cookies-analytics-yes"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="govuk-radios__item">
                    <input
                      className="govuk-radios__input"
                      id="cookies-analytics-no"
                      name="cookies-analytics"
                      type="radio"
                      value="off"
                    />
                    <label
                      className="govuk-label govuk-radios__label"
                      htmlFor="cookies-analytics-no"
                    >
                      No
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <button className="govuk-button" data-module="govuk-button">
              Save cookie settings
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
