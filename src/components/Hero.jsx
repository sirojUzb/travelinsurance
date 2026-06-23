import { useState } from "react";
import Navbar from "./Navbar.jsx";

function Hero() {
  const [place, setPlace] = useState("");
  const [dateFrom, setDateFrom] = useState("05.03.2023");
  const [dateTo, setDateTo] = useState("05.03.2023");
  const [people, setPeople] = useState("1 человек");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ place, dateFrom, dateTo, people });
  };

  return (
    <section
      className="relative flex min-h-[640px] flex-col overflow-hidden rounded-2xl bg-cover bg-center
        before:absolute before:inset-0 before:bg-gradient-to-b
        before:from-black/45 before:via-black/25 before:to-black/45"
      style={{ backgroundImage: "url('/images/main-img.jpg')" }}
    >
      {/* Навигация поверх фона */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Контент */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-16 text-center">
        <h1 className="mb-2.5 text-3xl font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:text-[38px]">
          Страхование путешественников
        </h1>
        <p className="mb-8 text-lg font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)] md:text-[19px]">
          Полис, который действительно работает
        </p>

        {/* Поиск */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] md:flex-row md:items-stretch"
        >
          <div className="flex flex-[1.4] items-center gap-2.5 px-4 py-4">
            <input
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              placeholder="Куда едем?"
              className="w-full border-none bg-transparent text-[15px] text-neutral-800 outline-none placeholder:text-neutral-400"
            />
          </div>

          <div className="flex flex-1 items-center gap-2.5 border-t border-neutral-200 px-4 py-4 md:border-t-0 md:border-l">
            <img src="/images/calendar-icon.svg" alt="" className="h-5 w-5 shrink-0" />
            <input
              type="text"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className="w-full border-none bg-transparent text-[15px] text-neutral-800 outline-none"
            />
          </div>

          <div className="flex flex-1 items-center gap-2.5 border-t border-neutral-200 px-4 py-4 md:border-t-0 md:border-l">
            <img src="/images/calendar-icon.svg" alt="" className="h-5 w-5 shrink-0" />
            <input
              type="text"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className="w-full border-none bg-transparent text-[15px] text-neutral-800 outline-none"
            />
          </div>

          <div className="flex flex-[0.9] items-center border-t border-neutral-200 px-4 py-4 md:border-t-0 md:border-l">
            <select
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              className="w-full cursor-pointer appearance-none border-none bg-transparent bg-[right_center] bg-no-repeat pr-5 text-[15px] text-neutral-800 outline-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'><path d='M1 1L5 5L9 1' stroke='%235200D9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
              }}
            >
              <option>1 человек</option>
              <option>2 человека</option>
              <option>3 человека</option>
              <option>4 человека</option>
            </select>
          </div>
        </form>

        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-6 cursor-pointer rounded-lg bg-purple-brand px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-purple-brand-dark active:translate-y-px"
        >
          Узнать стоимость
        </button>
      </div>
    </section>
  );
}

export default Hero;
