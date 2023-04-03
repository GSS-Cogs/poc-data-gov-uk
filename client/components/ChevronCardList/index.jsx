import ChevronCard from "../ChevronCard";

export default function ChevronCardList(props) {
  return (
    <div className="gem-c-cards">
      <ul className="gem-c-cards__list" data-track-count="cardList">
        {props.cards.map((card) => (
          <ChevronCard
            key={card.text}
            text={card.text}
            href={card.href}
            description={card.description}
          />
        ))}
      </ul>
    </div>
  );
}
