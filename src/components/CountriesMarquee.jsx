const ROW_ONE = [
  "Великобритания", "Германия", "Франция", "Чехия", "Дания", "Финляндия",
  "Испания", "Италия", "Греция", "Австрия", "Швейцария", "Норвегия",
];

const ROW_TWO = [
  "Турция", "ОАЭ", "Таиланд", "Египет", "Грузия", "Армения",
  "Черногория", "Кипр", "Болгария", "Венгрия", "Польша", "Хорватия",
];

function Row({ items, direction }) {
  // Дублируем список, чтобы прокрутка была бесшовной
  const doubled = [...items, ...items];
  return (
    <div className="marquee overflow-hidden border-y border-neutral-200 py-5">
      <div className={`marquee-track ${direction}`}>
        {doubled.map((country, i) => (
          <span
            key={i}
            className="px-7 text-2xl font-bold whitespace-nowrap text-neutral-900 md:text-3xl"
          >
            {country}
          </span>
        ))}
      </div>
    </div>
  );
}

function CountriesMarquee() {
  return (
    <section className="bg-white pb-20 md:pb-28">
      <Row items={ROW_ONE} direction="marquee-left" />
      <Row items={ROW_TWO} direction="marquee-right" />
    </section>
  );
}

export default CountriesMarquee;
