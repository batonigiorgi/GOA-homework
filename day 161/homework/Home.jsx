import cards from "./cardsData";
import Card from "./Card";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}
