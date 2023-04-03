// Adapted from https://github.com/alphagov/frontend/blob/main/app/views/homepage/_links_and_search.html.erb

import ListItem from "./ListItem";

export default function LinksAndSearch(props) {
  return (
    <section className="homepage-section homepage-section--links-and-search">
      <div className="govuk-width-container">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-half">
            <h2 className="gem-c-heading govuk-heading-m govuk-!-margin-bottom-4">
              Popular pages
            </h2>
            <ul className="homepage-most-viewed-list">
              {props.links.map((link) => (
                <ListItem href={link.href} key={link.text} text={link.text} />
              ))}
            </ul>
          </div>

          <div className="govuk-grid-column-one-half homepage-search">
            <form action="/search" method="get" role="search">
              <div className="gem-c-search govuk-!-display-none-print  govuk-!-margin-bottom-0 gem-c-search--large-on-mobile gem-c-search--on-white gem-c-search--separate-label">
                <h2 className="govuk-!-margin-0">
                  <label
                    htmlFor="search-main-88801d1a"
                    className="govuk-label govuk-label--m govuk-!-margin-bottom-4"
                  >
                    Search
                  </label>
                </h2>
                <div className="gem-c-search__item-wrapper">
                  <input
                    enterKeyHint="search"
                    className="gem-c-search__item gem-c-search__input js-class-toggle"
                    id="search-main-88801d1a"
                    name="q"
                    title="Search"
                    type="search"
                    defaultValue=""
                  />
                  <div className="gem-c-search__item gem-c-search__submit-wrapper">
                    <button
                      className="gem-c-search__submit"
                      type="submit"
                      enterKeyHint="search"
                    >
                      Search GOV.UK
                      <svg
                        className="gem-c-search__icon"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <circle
                          cx="12.0161"
                          cy="11.0161"
                          r="8.51613"
                          stroke="currentColor"
                          strokeWidth="3"
                        ></circle>
                        <line
                          x1="17.8668"
                          y1="17.3587"
                          x2="26.4475"
                          y2="25.9393"
                          stroke="currentColor"
                          strokeWidth="3"
                        ></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
