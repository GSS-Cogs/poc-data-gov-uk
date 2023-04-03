import Breadcrumbs from "../../components/Breadcrumbs";
import Checkboxes from "../../components/Checkboxes";
import DocumentList from "../../components/DocumentList";
import PhaseBanner from "../../components/PhaseBanner";
import SearchBar from "../../components/Search";

const organisations = [
  {
    id: "https://www.gov.uk/government/organisations/department-for-business-energy-and-industrial-strategy",
    label: "Department for Business, Energy & Industrial Strategy",
  },
  {
    id: "https://www.gov.uk/government/organisations/department-for-business-and-trade",
    label: "Department for Business and Trade",
  },
  {
    id: "https://www.gov.uk/government/organisations/office-for-national-statistics",
    label: "Office for National Statistics",
  },
  {
    id: "https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs",
    label: "Department for Environment, Food & Rural Affairs",
  },
];

const themes = [
  {
    text: "Business, trade and international development",
    href: "/themes/business-trade-and-international-development",
    description:
      "Statistics on company size, location, turnover, UK abd international trade, and research and development.",
  },
  {
    text: "Children, education and skills",
    href: "/themes/children-education-and-skills",
    description:
      "Statistics on education stages, teachers, learners, and looked after children.",
  },
  {
    text: "Crime and security",
    href: "/themes/crime-and-security",
    description:
      "Statistics on crime, policing, justice systems, and national security.",
  },
  {
    text: "Economy",
    href: "/themes/environment",
    description:
      "Statistics on public funding, spending, and devolved nations & regions.",
  },
  {
    text: "Health and social care",
    href: "/themes/health-and-social-care",
    description:
      "Statistics on UK population health and health and social care in England, Wales, Scotland & Northern Ireland.",
  },
  {
    text: "Housing, planning and local services",
    href: "/themes/housing-planning-and-local-services",
    description:
      "Statistics on house building, homelessness, land use and development, and local authority planning.",
  },
  {
    text: "Labour market and welfare",
    href: "/themes/labour-market-and-welfare",
    description:
      "Statistics on work, jobs, employment patterns, earnings, and benefits.",
  },
  {
    text: "Population and society",
    href: "/themes/population-and-society",
    description:
      "Statistics on population size, spread, births, deaths and migration, and people's lifestyles and culture.",
  },
  {
    text: "Transport, environment and climate change",
    href: "/themes/transport-environment-and-climate-change",
    description:
      "Statistics on transport, food, farming, natural environment, energy, fuel poverty, and climate change.",
  },
];

const datasets = [
  {
    title: "Estimated territorial greenhouse gas emissions by gas, 2020",
    description:
      "This dataset provides estimates of greenhouse gas emissions by gas type for the United Kingdom from 1990 to 2020.",
    href: "/dataset/greenhouse-gas-emissions",
    publisher: {
      label: "Department for Business, Energy & Industrial Strategy",
      href: "/government/organisations/department-for-business-energy-and-industrial-strategy",
    },
    issued: "2021-02-01T09:30:00",
    license: {
      label: "Open Government Licence v3.0",
      href: "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/",
    },
  },
  {
    title: "Life expectancy by local authority and sex",
    description: "",
    href: "/dataset/life-expectancy-by-region-sex-and-time",
    publisher: {
      label: "Office for National Statistics",
      href: "/government/organisations/office-for-national-statistics",
    },
    issued: "2021-02-01T09:30:00",
    license: {
      label: "Open Government Licence v3.0",
      href: "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/",
    },
  },
];

export default function Search(props) {
  return (
    <div className="govuk-width-container">
      <PhaseBanner />
      <Breadcrumbs items={[{ text: "Home", href: "/" }]} />
      <main
        className="govuk-main-wrapper app-main-class"
        id="main-content"
        role="main"
      >
        <span className="govuk-caption-l">Data explorer</span>
        <h1 className="govuk-heading-l">Find datasets and statistics</h1>
        <SearchBar />
        <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible"></hr>
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-third">
            <h2 className="govuk-heading-m">Refine Results</h2>
            <div className="govuk-form-group">
              <label className="govuk-label" htmlFor="sort">
                Sort by
              </label>
              <select className="govuk-select" id="sort" name="sort">
                <option value="most_viewed">Most viewed</option>
                <option value="relevance">Relevance</option>
                <option value="updated_newest">Updated (newest)</option>
                <option value="updated_oldest">Updated (oldest)</option>
              </select>
            </div>
            <Checkboxes
              name="organisations"
              title="Organisations"
              items={organisations}
            />
          </div>
          <div className="govuk-grid-column-two-thirds">
            <div className="govuk-grid-row">
              <h2 className="govuk-heading-m">
                Showing 1 to {datasets.length < 10 ? datasets.length : 10} of{" "}
                {datasets.length} results
              </h2>
              <DocumentList items={datasets} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
