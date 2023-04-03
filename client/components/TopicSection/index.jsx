import BigNumber from "../BigNumber";
import ChevronCardList from "../ChevronCardList";

const cards = [
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

export default function TopicSection(props) {
  return (
    <section>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-full govuk-grid-column-one-quarter-from-desktop">
          <BigNumber
            className="gem-c-big-number--blue"
            value={cards.length}
            label="topics"
          />
        </div>
        <div className="govuk-grid-column-full govuk-grid-column-three-quarters-from-desktop">
          <ChevronCardList cards={cards} />
        </div>
      </div>
    </section>
  );
}
