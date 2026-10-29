import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  Armchair,
  Bike,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  Dumbbell,
  Laptop,
  Menu,
  MessageCircle,
  Moon,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Sun,
  Tag,
  X,
} from 'lucide-react'
import './App.css'

const listings = [
  {
    id: 1,
    title: 'Concepts of Physics, Vol. 1 & 2',
    category: 'Textbooks',
    price: 650,
    seller: 'quietcomma',
    listedAt: '2 hours ago',
    age: 2,
    image:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'A stack of books on a wooden table',
  },
  {
    id: 2,
    title: 'Casio fx-991EX Scientific Calculator',
    category: 'Electronics',
    price: 890,
    seller: 'orbitingmango',
    listedAt: '4 hours ago',
    age: 4,
    image:
      'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Scientific calculator',
  },
  {
    id: 3,
    title: 'Sony WH-CH720N Headphones',
    category: 'Electronics',
    price: 4200,
    seller: 'chaiandcode',
    listedAt: '6 hours ago',
    age: 6,
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Black over-ear headphones',
    sold: true,
  },
  {
    id: 4,
    title: 'Decathlon Riverside 120 Cycle',
    category: 'Cycles',
    price: 5800,
    seller: 'secondwind',
    listedAt: '8 hours ago',
    age: 8,
    image:
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Bicycle parked outdoors',
  },
  {
    id: 5,
    title: 'Organic Chemistry — Morrison & Boyd',
    category: 'Textbooks',
    price: 420,
    seller: 'paperplane_7',
    listedAt: 'Yesterday',
    age: 24,
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Open book with pages fanned out',
  },
  {
    id: 6,
    title: 'Yonex badminton racket with cover',
    category: 'Sports',
    price: 1250,
    seller: 'rallypoint',
    listedAt: 'Yesterday',
    age: 26,
    image:
      'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Badminton racket and shuttlecock',
  },
  {
    id: 7,
    title: 'Minimal study desk, solid wood',
    category: 'Furniture',
    price: 2400,
    seller: 'littleoak',
    listedAt: 'Yesterday',
    age: 28,
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Simple wooden desk in a bright room',
  },
  {
    id: 8,
    title: 'HP Pavilion 14, 8GB / 512GB SSD',
    category: 'Electronics',
    price: 28500,
    seller: 'pixelchai',
    listedAt: '2 days ago',
    age: 42,
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Laptop open on a desk',
  },
  {
    id: 9,
    title: 'Vector Mechanics for Engineers',
    category: 'Textbooks',
    price: 350,
    seller: 'bluepencil',
    listedAt: '2 days ago',
    age: 46,
    image:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Books arranged on a shelf',
  },
  {
    id: 10,
    title: 'Cosco football — barely used',
    category: 'Sports',
    price: 600,
    seller: 'goalgetter',
    listedAt: '3 days ago',
    age: 66,
    image:
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Football on a green field',
  },
  {
    id: 11,
    title: 'IKEA-style ergonomic desk chair',
    category: 'Furniture',
    price: 1800,
    seller: 'slowmornings',
    listedAt: '3 days ago',
    age: 72,
    image:
      'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Modern desk chair',
  },
  {
    id: 12,
    title: 'TI-30XS MultiView Calculator',
    category: 'Electronics',
    price: 700,
    seller: 'notanotherlab',
    listedAt: '4 days ago',
    age: 90,
    image:
      'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Calculator on a study desk',
  },
]

const categories = [
  { name: 'Textbooks', icon: BookOpen },
  { name: 'Electronics', icon: Laptop },
  { name: 'Cycles', icon: Bike },
  { name: 'Sports', icon: Dumbbell },
  { name: 'Furniture', icon: Armchair },
]

const navigation = [
  { name: 'Home', icon: ShoppingBag },
  { name: 'Messages', icon: MessageCircle },
  { name: 'Sell an Item', icon: Tag },
  { name: 'My Listings', icon: BookOpen },
  { name: 'My Buy Requests', icon: Clock3 },
]

function Logo() {
  return (
    <a
      className="flex shrink-0 items-center gap-2.5 rounded-lg text-gray-950 dark:text-white"
      href="#home"
      aria-label="Swaply home"
    >
      <span className="grid size-9 place-items-center rounded-xl bg-orange-500 text-white shadow-sm shadow-orange-500/20">
        <ShoppingBag size={19} strokeWidth={2.2} />
      </span>
      <span className="text-[21px] font-bold tracking-[-0.06em]">swaply</span>
    </a>
  )
}

function Header({ darkMode, onQueryChange, onToggleTheme, onNavigate, query }) {
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-white/90 backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/85">
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="relative mx-auto hidden w-full max-w-[560px] sm:block">
          <Search
            size={18}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
          />
          <input
            aria-label="Search listings"
            className="h-11 w-full rounded-xl border border-stone-200 bg-stone-50/80 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-stone-400 focus:border-orange-300 focus:bg-white focus:ring-4 focus:ring-orange-100/70 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-orange-500/60 dark:focus:bg-gray-900 dark:focus:ring-orange-500/10"
            id="listing-search"
            placeholder="Search textbooks, cycles, and more..."
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
          />
          <kbd className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-stone-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-stone-400 lg:block dark:border-gray-700 dark:bg-gray-800">
            /
          </kbd>
        </div>
        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:ml-0 sm:gap-2">
          <button
            aria-label="Messages (placeholder)"
            className="icon-button"
            onClick={() => onNavigate('Messages')}
            type="button"
          >
            <MessageCircle size={19} />
            <span className="absolute right-[7px] top-[7px] size-1.5 rounded-full bg-orange-500 ring-2 ring-white dark:ring-gray-950" />
          </button>
          <button
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            className="icon-button"
            onClick={onToggleTheme}
            type="button"
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <div className="relative ml-1">
            <button
              aria-expanded={profileOpen}
              aria-haspopup="menu"
              aria-label="Open profile menu"
              className="flex items-center gap-1.5 rounded-full p-1 transition hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-orange-500 dark:hover:bg-gray-800"
              onClick={() => setProfileOpen(!profileOpen)}
              type="button"
            >
              <span className="grid size-8 place-items-center rounded-full bg-orange-100 text-xs font-semibold text-orange-700 dark:bg-orange-500/15 dark:text-orange-300">
                SC
              </span>
              <ChevronDown className="hidden text-stone-400 sm:block" size={14} />
            </button>
            {profileOpen && (
              <div
                className="absolute right-0 top-12 z-40 w-52 rounded-2xl border border-stone-200 bg-white p-2 shadow-xl shadow-stone-900/10 dark:border-gray-800 dark:bg-gray-900"
                role="menu"
              >
                <div className="border-b border-stone-100 px-3 py-2.5 dark:border-gray-800">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    campus_student
                  </p>
                  <p className="mt-0.5 text-xs text-stone-500">Campus account preview</p>
                </div>
                <button
                  className="mt-1 w-full rounded-lg px-3 py-2 text-left text-sm text-stone-600 transition hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-gray-800"
                  onClick={() => {
                    setProfileOpen(false)
                    onNavigate('My Listings')
                  }}
                  role="menuitem"
                  type="button"
                >
                  My listings
                </button>
                <button
                  className="w-full rounded-lg px-3 py-2 text-left text-sm text-stone-600 transition hover:bg-stone-50 dark:text-stone-300 dark:hover:bg-gray-800"
                  onClick={() => setProfileOpen(false)}
                  role="menuitem"
                  type="button"
                >
                  Close menu
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-stone-100 px-4 pb-3 pt-2 sm:hidden dark:border-gray-800">
        <div className="relative">
          <Search
            size={17}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400"
          />
          <input
            aria-label="Search listings"
            className="h-10 w-full rounded-xl border border-stone-200 bg-stone-50 pl-10 pr-3 text-sm text-gray-900 outline-none transition placeholder:text-stone-400 focus:border-orange-300 focus:ring-4 focus:ring-orange-100/70 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-orange-500/60 dark:focus:ring-orange-500/10"
            id="listing-search-mobile"
            placeholder="Search campus listings..."
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
          />
        </div>
      </div>
    </header>
  )
}

function Sidebar({
  activeCategory,
  activeNavigation,
  mobileOpen,
  onCategoryChange,
  onClose,
  onNavigate,
}) {
  return (
    <>
      {mobileOpen && (
        <button
          aria-label="Close navigation"
          className="fixed inset-0 z-30 bg-gray-950/35 backdrop-blur-[2px] md:hidden"
          onClick={onClose}
          type="button"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-[280px] border-r border-stone-200 bg-white px-4 pb-6 pt-5 transition-transform duration-200 md:sticky md:top-[68px] md:z-10 md:block md:h-[calc(100vh-68px)] md:w-[236px] md:shrink-0 md:translate-x-0 md:border-r-0 md:bg-transparent md:px-0 md:pt-8 dark:border-gray-800 dark:bg-gray-950 md:dark:bg-transparent ${
          mobileOpen
            ? 'translate-x-0'
            : 'mobile-sidebar-closed -translate-x-full md:translate-x-0'
        }`}
      >
        <div className="mb-7 flex items-center justify-between md:hidden">
          <Logo />
          <button
            aria-label="Close navigation"
            className="icon-button"
            onClick={onClose}
            type="button"
          >
            <X size={19} />
          </button>
        </div>
        <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-stone-400">
          Menu
        </p>
        <nav aria-label="Main navigation" className="space-y-1">
          {navigation.map(({ name, icon: Icon }) => {
            const active = name === activeNavigation
            return (
              <button
                aria-current={active ? 'page' : undefined}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium transition ${
                  active
                    ? 'bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300'
                    : 'text-stone-600 hover:bg-stone-100 hover:text-gray-950 dark:text-stone-400 dark:hover:bg-gray-900 dark:hover:text-white'
                }`}
                key={name}
                onClick={() => {
                  onNavigate(name)
                  onClose()
                }}
                type="button"
              >
                <Icon size={17} strokeWidth={active ? 2.2 : 1.8} />
                {name}
              </button>
            )
          })}
        </nav>
        <div className="my-6 border-t border-stone-200 dark:border-gray-800" />
        <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.16em] text-stone-400">
          Browse by category
        </p>
        <nav aria-label="Product categories" className="space-y-1">
          <button
            aria-current={activeCategory === 'All Items' ? 'page' : undefined}
            className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium transition ${
              activeCategory === 'All Items'
                ? 'bg-stone-100 text-gray-950 dark:bg-gray-800 dark:text-white'
                : 'text-stone-600 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-gray-900'
            }`}
            onClick={() => {
              onCategoryChange('All Items')
              onClose()
            }}
            type="button"
          >
            <ShoppingBag size={17} strokeWidth={1.8} />
            All Items
          </button>
          {categories.map(({ name, icon: Icon }) => (
            <button
              aria-current={activeCategory === name ? 'page' : undefined}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium transition ${
                activeCategory === name
                  ? 'bg-stone-100 text-gray-950 dark:bg-gray-800 dark:text-white'
                  : 'text-stone-600 hover:bg-stone-100 dark:text-stone-400 dark:hover:bg-gray-900'
              }`}
              key={name}
              onClick={() => {
                onCategoryChange(name)
                onClose()
              }}
              type="button"
            >
              <Icon size={17} strokeWidth={1.8} />
              {name}
            </button>
          ))}
        </nav>
        <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50/70 p-4 dark:border-orange-500/10 dark:bg-orange-500/[0.06]">
          <p className="text-xs font-semibold text-gray-900 dark:text-white">
            Made for your campus
          </p>
          <p className="mt-1.5 text-xs leading-5 text-stone-500 dark:text-stone-400">
            Good stuff finds a second life right here.
          </p>
        </div>
      </aside>
    </>
  )
}

function ListingCard({ listing }) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-2xl border border-stone-200/80 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-lg hover:shadow-stone-900/[0.06] dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 dark:hover:shadow-black/20">
      <div className="product-image-wrap relative aspect-[1.28/1] overflow-hidden bg-stone-100 dark:bg-gray-800">
        <img
          alt={listing.imageAlt}
          className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.035] ${
            listing.sold ? 'saturate-[0.7]' : ''
          }`}
          loading="lazy"
          src={listing.image}
        />
        {listing.sold && (
          <span className="absolute left-3 top-3 rounded-full bg-gray-950/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-sm">
            Sold
          </span>
        )}
        <span className="absolute bottom-3 right-3 rounded-lg bg-white/90 px-2.5 py-1.5 text-sm font-bold tracking-tight text-gray-950 shadow-sm backdrop-blur-sm dark:bg-gray-950/85 dark:text-white">
          ₹{listing.price.toLocaleString('en-IN')}
        </span>
      </div>
      <div className="p-3.5 sm:p-4">
        <p className="truncate text-[10px] font-semibold uppercase tracking-[0.13em] text-orange-600 dark:text-orange-400">
          {listing.category}
        </p>
        <h2 className="mt-1.5 line-clamp-2 min-h-[2.75rem] text-[13px] font-semibold leading-[1.4] tracking-[-0.015em] text-gray-900 dark:text-gray-100">
          {listing.title}
        </h2>
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-stone-100 pt-3 dark:border-gray-800">
          <span className="flex min-w-0 items-center gap-1.5 truncate text-[11px] text-stone-500 dark:text-stone-400">
            <span className="grid size-[22px] shrink-0 place-items-center rounded-full bg-stone-100 text-[9px] font-bold uppercase text-stone-500 dark:bg-gray-800 dark:text-stone-300">
              {listing.seller.slice(0, 1)}
            </span>
            <span className="truncate">@{listing.seller}</span>
          </span>
          <span className="shrink-0 text-[10px] text-stone-400">{listing.listedAt}</span>
        </div>
      </div>
    </article>
  )
}

function EmptyResults({ query, onClear }) {
  return (
    <div className="col-span-full flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-stone-300 px-6 text-center dark:border-gray-700">
      <span className="grid size-12 place-items-center rounded-2xl bg-stone-100 text-stone-500 dark:bg-gray-800 dark:text-stone-300">
        <Search size={20} />
      </span>
      <h2 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
        No listings found
      </h2>
      <p className="mt-1.5 max-w-sm text-sm text-stone-500 dark:text-stone-400">
        We couldn&apos;t find anything matching “{query}”. Try another search or browse all items.
      </p>
      <button
        className="mt-4 rounded-lg px-3 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-50 dark:text-orange-400 dark:hover:bg-orange-500/10"
        onClick={onClear}
        type="button"
      >
        Clear search
      </button>
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(
    () => window.localStorage.getItem('swaply-theme') === 'dark',
  )
  const [activeCategory, setActiveCategory] = useState('All Items')
  const [activeNavigation, setActiveNavigation] = useState('Home')
  const [sortOrder, setSortOrder] = useState('newest')
  const [query, setQuery] = useState('')
  const [notice, setNotice] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    window.localStorage.setItem('swaply-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const visibleListings = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const filtered = listings.filter((listing) => {
      const matchesCategory =
        activeCategory === 'All Items' || listing.category === activeCategory
      const matchesQuery =
        !normalizedQuery ||
        `${listing.title} ${listing.category} ${listing.seller}`
          .toLowerCase()
          .includes(normalizedQuery)
      return matchesCategory && matchesQuery
    })

    return filtered.sort((first, second) => {
      if (sortOrder === 'price-low') return first.price - second.price
      if (sortOrder === 'price-high') return second.price - first.price
      return first.age - second.age
    })
  }, [activeCategory, query, sortOrder])

  const handleNavigate = (name) => {
    setActiveNavigation(name)
    if (name === 'Home') {
      setNotice('')
      setActiveCategory('All Items')
      return
    }
    setNotice(`${name} is a preview only and isn’t connected yet.`)
  }

  const clearSearch = () => {
    setQuery('')
  }

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-gray-900 antialiased transition-colors dark:bg-[#111827] dark:text-gray-100">
      <Header
        darkMode={darkMode}
        onQueryChange={setQuery}
        onNavigate={handleNavigate}
        onToggleTheme={() => setDarkMode((current) => !current)}
        query={query}
      />
      <div className="mx-auto flex max-w-[1440px] gap-7 px-4 sm:px-6 lg:gap-10 lg:px-8">
        <Sidebar
          activeCategory={activeCategory}
          activeNavigation={activeNavigation}
          mobileOpen={mobileMenuOpen}
          onCategoryChange={(category) => {
            setActiveCategory(category)
            setActiveNavigation('Home')
            setNotice('')
          }}
          onClose={() => setMobileMenuOpen(false)}
          onNavigate={handleNavigate}
        />
        <main className="min-w-0 flex-1 pb-16 pt-5 sm:pt-7 md:pt-8" id="home">
          <div className="mb-5 flex items-center gap-2 md:hidden">
            <button
              aria-expanded={mobileMenuOpen}
              aria-label="Open navigation"
              className="icon-button -ml-2"
              onClick={() => setMobileMenuOpen(true)}
              type="button"
            >
              <Menu size={19} />
            </button>
            <span className="text-xs text-stone-500 dark:text-stone-400">
              Browse your campus marketplace
            </span>
          </div>
          <section className="promo-banner relative mb-7 overflow-hidden rounded-2xl bg-[#F97316] px-5 py-5 text-white sm:mb-8 sm:px-7 sm:py-6">
            <div className="relative z-10 max-w-[560px]">
              <p className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-orange-50/80">
                <span className="size-1.5 rounded-full bg-white/90" />
                Your campus marketplace
              </p>
              <h1 className="text-xl font-semibold tracking-[-0.035em] sm:text-[25px]">
                Good finds are closer than you think.
              </h1>
              <p className="mt-1.5 text-xs leading-5 text-orange-50/90 sm:text-sm">
                Pass it on, find your next favourite. Buy. Sell. Repeat.
              </p>
            </div>
            <div className="pointer-events-none absolute -right-4 -top-16 size-56 rounded-full border border-white/15 sm:right-14 sm:size-64" />
            <div className="pointer-events-none absolute right-[5.5rem] -top-6 hidden size-40 rounded-full border border-white/15 sm:block" />
            <div className="pointer-events-none absolute bottom-[-4.5rem] right-[22%] hidden size-28 rounded-full bg-white/[0.08] sm:block" />
          </section>

          {notice && (
            <div
              className="mb-5 flex items-center justify-between gap-3 rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-900 dark:border-orange-500/20 dark:bg-orange-500/[0.08] dark:text-orange-200"
              role="status"
            >
              <span>{notice}</span>
              <button
                aria-label="Dismiss message"
                className="rounded-md p-1 transition hover:bg-orange-100 dark:hover:bg-orange-500/10"
                onClick={() => setNotice('')}
                type="button"
              >
                <X size={16} />
              </button>
            </div>
          )}

          <div className="mb-5 flex flex-wrap items-end justify-between gap-3 sm:mb-6">
            <div>
              <p className="mb-1 text-[11px] font-medium text-stone-500 dark:text-stone-400">
                Find something useful. Give something a second life.
              </p>
              <div className="flex items-center gap-2.5">
                <h2 className="text-[22px] font-semibold tracking-[-0.04em] text-gray-950 dark:text-white sm:text-[26px]">
                  {activeCategory}
                </h2>
                <span className="rounded-full bg-stone-100 px-2 py-0.5 text-[10px] font-semibold text-stone-500 dark:bg-gray-800 dark:text-stone-400">
                  {visibleListings.length}
                </span>
              </div>
            </div>
            <label className="flex h-9 items-center gap-2 rounded-lg border border-stone-200 bg-white px-2.5 text-stone-500 shadow-sm shadow-stone-900/[0.02] dark:border-gray-800 dark:bg-gray-900 dark:text-stone-400">
              <SlidersHorizontal size={14} />
              <span className="text-xs">Sort:</span>
              <select
                aria-label="Sort listings"
                className="cursor-pointer border-0 bg-transparent pr-1 text-xs font-semibold text-gray-800 outline-none dark:text-gray-200"
                onChange={(event) => setSortOrder(event.target.value)}
                value={sortOrder}
              >
                <option value="newest">Newest first</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
              </select>
            </label>
          </div>

          <div className="mb-5 flex items-center justify-between border-b border-stone-200 pb-3 dark:border-gray-800">
            <p className="text-xs text-stone-500 dark:text-stone-400">
              {query.trim()
                ? `Results for “${query.trim()}”`
                : 'Fresh listings from around campus'}
            </p>
            <span className="hidden items-center gap-1 text-[10px] font-medium text-stone-400 sm:flex">
              <Check size={12} />
              Campus community
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {visibleListings.length > 0 ? (
              visibleListings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))
            ) : (
              <EmptyResults
                onClear={() => {
                  clearSearch()
                  setActiveCategory('All Items')
                }}
                query={query.trim() || activeCategory}
              />
            )}
          </div>
          {visibleListings.length > 0 && (
            <div className="mt-10 flex justify-center">
              <p className="flex items-center gap-1.5 text-xs text-stone-400">
                You&apos;re all caught up <ArrowRight size={13} />
              </p>
            </div>
          )}
          <footer className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-stone-200 pt-5 text-[11px] text-stone-400 sm:flex-row dark:border-gray-800">
            <p>Swaply · Buy. Sell. Repeat.</p>
            <p>Made for campus, shared with care.</p>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
