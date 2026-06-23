function Navbar() {
  const links = [
    { label: "Продукты", dropdown: true },
    { label: "Отзывы" },
    { label: "Партнерам" },
  ];

  return (
    <header className="flex items-center justify-between gap-6 px-6 py-5 md:px-10">
      {/* Логотип */}
      <a href="#" className="relative flex items-center gap-2 no-underline">
        <img
          src="/images/tick-icon.svg"
          alt=""
          className="pointer-events-none absolute -top-2.5 left-1.5 w-6 rotate-6"
        />
        <span className="text-lg font-semibold tracking-tight text-white">
          <span className="font-bold text-purple-brand">trip</span> страхование
        </span>
      </a>

      {/* Навигация */}
      <nav className="mx-auto hidden items-center gap-14 md:flex">
        {links.map((link) => (
          <a
            key={link.label}
            href="#"
            className="inline-flex items-center gap-1.5 text-[15px] font-medium text-neutral-100 transition-colors hover:text-white hover:opacity-85"
          >
            {link.label}
            {link.dropdown && (
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className="opacity-90"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </a>
        ))}
      </nav>

      {/* Кнопка «Скидки» */}
      <a
        href="#"
        className="inline-flex items-center gap-2 rounded-lg border border-white/70 bg-white/5 px-4.5 py-2.5 text-[15px] font-medium text-white no-underline transition-colors hover:border-white hover:bg-white/15"
      >
        <img src="/images/message-icon.svg" alt="" className="h-[18px] w-[18px]" />
        Скидки
      </a>
    </header>
  );
}

export default Navbar;
