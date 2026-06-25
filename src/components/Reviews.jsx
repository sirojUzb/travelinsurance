import { useRef, useState } from "react";

const REVIEW_TEXT =
  "Много лет пользуюсь, предпочитаю другим компаниям! Оперативный чат, посмотрим как будет дальше! Пока все отлично)";

const REVIEWS = [
  { name: "Василий Петров", date: "05/02/2023", text: REVIEW_TEXT },
  { name: "Анна Смирнова", date: "05/02/2023", text: REVIEW_TEXT },
  { name: "Игорь Кузнецов", date: "05/02/2023", text: REVIEW_TEXT },
  { name: "Елена Соколова", date: "05/02/2023", text: REVIEW_TEXT },
  { name: "Дмитрий Орлов", date: "05/02/2023", text: REVIEW_TEXT },
  { name: "Мария Волкова", date: "05/02/2023", text: REVIEW_TEXT },
  { name: "Сергей Морозов", date: "05/02/2023", text: REVIEW_TEXT },
  { name: "Ольга Новикова", date: "05/02/2023", text: REVIEW_TEXT },
];

const DOTS = 4;

function Reviews() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = max > 0 ? el.scrollLeft / max : 0;
    setActive(Math.round(ratio * (DOTS - 1)));
  };

  const goToDot = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: (max * i) / (DOTS - 1), behavior: "smooth" });
  };

  return (
    <section className="bg-white pb-20 md:pb-28">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-neutral-900 md:text-[28px]">
          Отзывы
        </h2>

        {/* Карусель */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {REVIEWS.map((review, i) => (
            <article
              key={i}
              className="flex w-[280px] shrink-0 snap-start flex-col rounded-xl bg-purple-brand/8 p-5"
            >
              {/* Звёзды + дата */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex gap-0.5 text-[15px] text-yellow-400">
                  {"★★★★★".split("").map((s, j) => (
                    <span key={j}>{s}</span>
                  ))}
                </div>
                <span className="text-xs text-neutral-400">{review.date}</span>
              </div>

              {/* Текст */}
              <p className="mb-5 flex-1 text-[13px] leading-relaxed text-neutral-600">
                {review.text}
              </p>

              {/* Автор */}
              <div className="flex items-center gap-2.5">
                <img
                  src="/images/feedback-photo.png"
                  alt={review.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-[13px] font-medium text-neutral-800">
                  {review.name}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Индикатор-точки */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {Array.from({ length: DOTS }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goToDot(i)}
              aria-label={`Слайд ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                active === i
                  ? "w-4 bg-purple-brand"
                  : "w-1.5 bg-purple-brand/30 hover:bg-purple-brand/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
