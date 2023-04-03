export default function CookieBannerAccepted() {
  return (
    <form method="POST">
      <div
        className="govuk-cookie-banner "
        data-nosnippet
        role="region"
        aria-label="Cookies on [name of service]"
      >
        <div className="govuk-cookie-banner__message govuk-width-container">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <div className="govuk-cookie-banner__content">
                <p className="govuk-body">
                  You’ve accepted additional cookies. You can{" "}
                  <a className="govuk-link" href="#">
                    change your cookie settings
                  </a>{" "}
                  at any time.
                </p>
              </div>
            </div>
          </div>

          <div className="govuk-button-group">
            <a
              href="#"
              role="button"
              draggable="false"
              className="govuk-button"
              data-module="govuk-button"
            >
              Hide cookie message
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}
