import Breadcrumbs from "../../components/Breadcrumbs";
import Checkboxes from "../../components/Checkboxes";
import DatasetIntro from "../../components/DatasetIntro";
import PhaseBanner from "../../components/PhaseBanner";
import Table from "../../components/misc/Table";
import { useRouter } from "next/router";

const checkIfExists = function (dataset) {
  if (dataset === "greenhouse-gas-emissions") {
    return true;
  } else {
    return false;
  }
};

export async function getServerSideProps(context) {
  const id = context.params.id;
  if (!checkIfExists(id)) {
    return { notFound: true };
  }
  const escapeForTurtle = (s) => s.replace(/(["'\\])/g, "\\$1");

  const query = `
    PREFIX dcat: <http://www.w3.org/ns/dcat#>
    SELECT *
    WHERE {
        <http://data.gov.uk/dataset/${escapeForTurtle(id)}> a  dcat:Dataset .
    }
    LIMIT 1
  `;
  const res = await fetch(
    `http://oxigraph:7878/query?query=${encodeURIComponent(query)}`,
  );
  const data = await res.json();
  return { props: { data } };
}

const dataset = {
  title: "Estimated territorial greenhouse gas emissions by gas, 2020",
  description:
    "This dataset provides estimates of greenhouse gas emissions by gas type for the United Kingdom from 1990 to 2020.",
  publisher: {
    label: "Department for Business, Energy & Industrial Strategy",
    href: "/government/organisations/department-for-business-energy-and-industrial-strategy",
  },
  issued: "2021-02-01T09:30:00",
  license: {
    label: "Open Government Licence v3.0",
    href: "https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/",
  },
};

const gas = [
  {
    id: "CO2",
    label: "CO2",
  },
  {
    id: "CH4",
    label: "CH4",
  },
  {
    id: "N2O",
    label: "N2O",
  },
  {
    id: "HFC",
    label: "HFC",
  },
  {
    id: "PFC",
    label: "PFC",
  },
  {
    id: "SF6",
    label: "SF6",
  },
  {
    id: "NF3",
    label: "NF3",
  },
];

const years = [
  {
    id: "1990",
    label: "1990",
  },
  {
    id: "1991",
    label: "1991",
  },
  {
    id: "1992",
    label: "1992",
  },
  {
    id: "1993",
    label: "1993",
  },
  {
    id: "1994",
    label: "1994",
  },
  {
    id: "1995",
    label: "1995",
  },
  {
    id: "1996",
    label: "1996",
  },
  {
    id: "1997",
    label: "1997",
  },
  {
    id: "1998",
    label: "1998",
  },
  {
    id: "1999",
    label: "1999",
  },
  {
    id: "2000",
    label: "2000",
  },
  {
    id: "2001",
    label: "2001",
  },
  {
    id: "2002",
    label: "2002",
  },
  {
    id: "2003",
    label: "2003",
  },
  {
    id: "2004",
    label: "2004",
  },
  {
    id: "2005",
    label: "2005",
  },
  {
    id: "2006",
    label: "2006",
  },
  {
    id: "2007",
    label: "2007",
  },
  {
    id: "2008",
    label: "2008",
  },
  {
    id: "2009",
    label: "2009",
  },
  {
    id: "2010",
    label: "2010",
  },
  {
    id: "2011",
    label: "2011",
  },
  {
    id: "2012",
    label: "2012",
  },
  {
    id: "2013",
    label: "2013",
  },
  {
    id: "2014",
    label: "2014",
  },
  {
    id: "2015",
    label: "2015",
  },
  {
    id: "2016",
    label: "2016",
  },
  {
    id: "2017",
    label: "2017",
  },
  {
    id: "2018",
    label: "2018",
  },
];

export default function Dataset(props) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="govuk-width-container">
      <PhaseBanner />
      <Breadcrumbs items={[{ text: "Home", href: "/" }]} />
      <main
        className="govuk-main-wrapper app-main-class"
        id="main-content"
        role="main"
      >
        <DatasetIntro {...dataset} />
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-third">
            <h2 className="govuk-heading-m">Refine Results</h2>
            <div className="govuk-form-group">
              <label className="govuk-label" htmlFor="sort">
                Sort by
              </label>
              <select className="govuk-select" id="sort" name="sort">
                <option value="gas">gas</option>
                <option value="gas_label">gas_label</option>
                <option value="year">year</option>
                <option value="emissions">emissions</option>
              </select>
            </div>
            <Checkboxes name="gas" title="gas" items={gas} />
            <Checkboxes name="year" title="year" items={years} />
          </div>
          <div className="govuk-grid-column-two-thirds">
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-one-half">
                <h2 className="govuk-heading-m">218 observations</h2>
              </div>
            </div>
            <Table />
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-one-half">
                <p className="govuk-caption-m">Showing observations 1 to 10</p>
              </div>
              <div className="govuk-grid-column-one-half govuk-!-text-align-right">
                <button className="govuk-button" data-module="govuk-button">
                  Show more observations
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="govuk-grid-row">
          <table className="govuk-table">
            <caption className="govuk-table__caption govuk-table__caption--m">
              Columns in this dataset
            </caption>
            <thead className="govuk-table__head">
              <tr className="govuk-table__row">
                <th scope="col" className="govuk-table__header">
                  Column name
                </th>
                <th scope="col" className="govuk-table__header">
                  Description
                </th>
                <th scope="col" className="govuk-table__header">
                  Data type
                </th>
              </tr>
            </thead>
            <tbody className="govuk-table__body">
              <tr className="govuk-table__row">
                <th scope="row" className="govuk-table__header">
                  gas
                </th>
                <td className="govuk-table__cell">
                  Chemical notation of the greenhouse gas
                </td>
                <td className="govuk-table__cell">string</td>
              </tr>
              <tr className="govuk-table__row">
                <th scope="row" className="govuk-table__header">
                  gas_label
                </th>
                <td className="govuk-table__cell">
                  Label of the greenhouse gas
                </td>
                <td className="govuk-table__cell">string</td>
              </tr>
              <tr className="govuk-table__row">
                <th scope="row" className="govuk-table__header">
                  year
                </th>
                <td className="govuk-table__cell">Year of the observation</td>
                <td className="govuk-table__cell">integer</td>
              </tr>
              <tr className="govuk-table__row">
                <th scope="row" className="govuk-table__header">
                  emissions
                </th>
                <td className="govuk-table__cell">
                  Emissions of the greenhouse gas
                </td>
                <td className="govuk-table__cell">decimal</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="govuk-grid-row">
          <table className="govuk-table">
            <caption className="govuk-table__caption govuk-table__caption--m">
              Additional metadata
            </caption>
            <tbody className="govuk-table__body">
              <tr className="govuk-table__row">
                <th scope="row" className="govuk-table__header">
                  Publisher
                </th>
                <td className="govuk-table__cell">
                  Department for Business, Energy and Industrial Strategy (
                  <a href="https://www.gov.uk/government/organisations/department-for-business-energy-and-industrial-strategy">
                    BEIS
                  </a>
                  )
                </td>
              </tr>
              <tr className="govuk-table__row">
                <th scope="row" className="govuk-table__header">
                  Geographical coverage
                </th>
                <td className="govuk-table__cell">
                  United Kingdom (
                  <a href="http://statistics.data.gov.uk/id/statistical-geography/K02000001">
                    K02000001
                  </a>
                  )
                </td>
              </tr>
              <tr className="govuk-table__row">
                <th scope="row" className="govuk-table__header">
                  Time period coverage
                </th>
                <td className="govuk-table__cell">
                  1st January 1990 to 1st January 2022
                </td>
              </tr>
              <tr className="govuk-table__row">
                <th scope="row" className="govuk-table__header">
                  License
                </th>
                <td className="govuk-table__cell">
                  Open Government License Version 3 (
                  <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/">
                    OGLv3
                  </a>
                  )
                </td>
              </tr>
              <tr className="govuk-table__row">
                <th scope="row" className="govuk-table__header">
                  Keywords
                </th>
                <td className="govuk-table__cell">
                  greenhouse, gas, emissions
                </td>
              </tr>
              <tr className="govuk-table__row">
                <th scope="row" className="govuk-table__header">
                  Themes
                </th>
                <td className="govuk-table__cell">
                  environment, climate change, emissions
                </td>
              </tr>
              <tr className="govuk-table__row">
                <th scope="row" className="govuk-table__header">
                  Contact
                </th>
                <td className="govuk-table__cell">
                  <a href="mailto:greenhousegas.statistics@beis.gov.uk">
                    greenhousegas.statistics@beis.gov.uk
                  </a>
                </td>
              </tr>
              <tr className="govuk-table__row">
                <th scope="row" className="govuk-table__header">
                  Published
                </th>
                <td className="govuk-table__cell">1 February 2022</td>
              </tr>
              <tr className="govuk-table__row">
                <th scope="row" className="govuk-table__header">
                  Modified
                </th>
                <td className="govuk-table__cell">30 June 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
