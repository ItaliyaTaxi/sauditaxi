import Link from "next/link";

/**
 * Long-form SEO content block for the homepage. Covers the full service range
 * (airport, city, hotel, intercity, Umrah/Hajj, business, family, chauffeur)
 * with contextual internal links to city, airport, route, and service pages.
 * Written for readers first: clear subheadings, short paragraphs, ~1,300 words.
 */

// Inline contextual link — subtle styling so the prose stays readable.
function L({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-medium text-navy underline decoration-gold/40 underline-offset-2 transition-colors hover:text-gold hover:decoration-gold"
    >
      {children}
    </Link>
  );
}

export function HomeSeoContent() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="home-seo-heading">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2
            id="home-seo-heading"
            className="text-2xl font-bold tracking-tight text-navy sm:text-3xl"
          >
            Private Taxi &amp; Airport Transfer Service in Saudi Arabia
          </h2>
          <p className="mt-3 text-muted-foreground">
            Comfortable, fixed-price transfers for every kind of journey across the
            Kingdom — from a quick airport pickup to a full pilgrim itinerary.
          </p>
        </div>

        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            Travelling around Saudi Arabia is easiest with a private car and a driver
            who knows the roads. We provide reliable{" "}
            <L href="/airport-transfers">Saudi Arabia airport transfers</L>, everyday{" "}
            <L href="/city-transfers">private taxi services</L>, long-distance{" "}
            <L href="/intercity-transfers">intercity transfers</L>, and dedicated{" "}
            <L href="/umrah-taxi-service">Umrah transportation</L> in one place. Every
            trip is booked with a price agreed in advance — no meters, no surge
            pricing, and no surprises when you arrive. Whether you are landing in{" "}
            <L href="/taxi-service/riyadh">Riyadh</L>, beginning Umrah from{" "}
            <L href="/taxi-service/jeddah">Jeddah</L>, or crossing between cities, you
            can{" "}
            <L href="/get-quote">request a fixed-price quote</L> in under a minute.
          </p>

          <div>
            <h3 className="text-lg font-bold text-navy">
              Airport pickup &amp; meet-and-greet at every Saudi airport
            </h3>
            <p className="mt-2">
              Our{" "}
              <L href="/airport-transfers">airport pickup service</L> covers all the
              major gateways, including{" "}
              <L href="/airport-transfer/jeddah-airport">Jeddah King Abdulaziz Airport (JED)</L>,{" "}
              <L href="/airport-transfer/riyadh-airport">Riyadh King Khalid Airport (RUH)</L>,{" "}
              <L href="/airport-transfer/madinah-airport">Madinah Prince Mohammad Airport (MED)</L>, and{" "}
              <L href="/airport-transfer/dammam-airport">Dammam King Fahd Airport (DMM)</L>.
              We track your flight in real time, so an early or delayed arrival never
              costs you the ride. Your driver waits in the arrivals hall with a name
              board — a proper <strong>airport meet &amp; greet</strong> — helps with
              your luggage, and drives you straight to your hotel or onward
              destination. The most requested transfer of all is the{" "}
              <L href="/routes/jeddah-to-makkah">Jeddah Airport to Makkah taxi</L>,
              which takes pilgrims directly to their hotel near the Haram.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-navy">
              Private taxi &amp; city transfers
            </h3>
            <p className="mt-2">
              Beyond the airport, our{" "}
              <L href="/city-transfers">city taxi service</L> handles hotel pickups,
              meetings, shopping trips, and full-day hire in every major city. We serve{" "}
              <L href="/taxi-service/riyadh">Riyadh</L>,{" "}
              <L href="/taxi-service/jeddah">Jeddah</L>,{" "}
              <L href="/taxi-service/makkah">Makkah</L>,{" "}
              <L href="/taxi-service/madinah">Madinah</L>,{" "}
              <L href="/taxi-service/dammam">Dammam</L>,{" "}
              <L href="/taxi-service/taif">Taif</L>,{" "}
              <L href="/taxi-service/yanbu">Yanbu</L>, and{" "}
              <L href="/taxi-service/khobar">Al Khobar</L>, plus many more towns across
              the Kingdom. Each city has its own page with local landmarks, popular
              routes, and the vehicle options available, so you always know what to
              expect before you travel.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-navy">Hotel transfers</h3>
            <p className="mt-2">
              Door-to-door{" "}
              <L href="/services/hotel-transfers">hotel transfers</L> connect airports,
              hotels, and homes without the wait of a shared ride. They are especially
              popular with pilgrims moving between accommodation in{" "}
              <L href="/taxi-service/makkah">Makkah</L> and{" "}
              <L href="/taxi-service/madinah">Madinah</L>, and with tourists changing
              cities mid-trip. Tell us your hotel name and arrival time and we handle
              the timing around check-in and check-out.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-navy">
              Intercity transfers across the Kingdom
            </h3>
            <p className="mt-2">
              For longer journeys, our{" "}
              <L href="/intercity-transfers">intercity transfer service</L> gives you a
              private vehicle door-to-door, with rest-stop flexibility on the longer
              legs. Popular routes include{" "}
              <L href="/routes/riyadh-to-dammam">Riyadh to Dammam</L>,{" "}
              <L href="/routes/jeddah-to-taif">Jeddah to Taif</L>,{" "}
              <L href="/routes/riyadh-to-alula">Riyadh to AlUla</L>, and{" "}
              <L href="/routes/madinah-to-alula">Madinah to AlUla</L>. If your travels
              take you further afield, we also run{" "}
              <L href="/border-transfers">cross-border transfers</L> over the King Fahd
              Causeway on the{" "}
              <L href="/routes/khobar-to-bahrain">Khobar to Bahrain</L> route and to
              other Gulf crossings.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-navy">
              Umrah &amp; Hajj transportation
            </h3>
            <p className="mt-2">
              We specialise in the pilgrim journey. Our{" "}
              <L href="/umrah-taxi-service">Umrah taxi service</L> covers airport
              meet-and-greet, hotel transfers near the Haram, the{" "}
              <L href="/routes/makkah-to-madinah">Makkah to Madinah</L> and{" "}
              <L href="/routes/madinah-to-makkah">Madinah to Makkah</L> legs, and miqat
              stops for entering ihram. During the season, our{" "}
              <L href="/hajj-transport-service">Hajj transport service</L> provides vans
              and minibuses sized for groups, while our{" "}
              <L href="/ziyarat-taxi-service">Ziyarat taxi service</L> takes you to the
              historic Islamic sites in both holy cities at your own pace. Families and
              elderly pilgrims travel comfortably, with room for luggage and Zamzam.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-navy">
              Business &amp; family travel
            </h3>
            <p className="mt-2">
              For business travellers, a private chauffeur means arriving on time and
              relaxed — whether it is a single airport run in{" "}
              <L href="/taxi-service/riyadh">Riyadh</L> or a full day of meetings with
              the same driver and vehicle. Corporate and project accounts are welcome
              in the Eastern Province too, across{" "}
              <L href="/taxi-service/dammam">Dammam</L> and{" "}
              <L href="/taxi-service/khobar">Al Khobar</L>. For families, our larger
              SUVs, vans, and minibuses keep everyone together with their luggage, with
              child seats available on request — ideal for sightseeing trips like{" "}
              <L href="/routes/jeddah-to-taif">Jeddah to Taif</L> in the cool mountain
              highlands.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-navy">
              Choosing the right vehicle
            </h3>
            <p className="mt-2">
              Different journeys call for different vehicles, so we offer a full
              range. Economy and comfort cars suit solo travellers and couples on
              short city hops; business sedans add extra space and presence for
              corporate trips; and SUVs, vans, and minibuses carry families and groups
              with all their luggage. Pilgrims travelling with elderly relatives or
              children often prefer a spacious van for the{" "}
              <L href="/routes/makkah-to-madinah">Makkah to Madinah</L> leg, where
              comfort matters most on the long highway. When you{" "}
              <L href="/get-quote">request a quote</L>, just tell us your group size
              and luggage and we will recommend the most suitable, cost-effective
              option for your trip.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-navy">
              Simple booking and honest, fixed pricing
            </h3>
            <p className="mt-2">
              Booking takes a minute and needs no app or account. Send your pickup,
              drop-off, date, time, and passenger count through our{" "}
              <L href="/get-quote">quote form</L> or on WhatsApp, and we reply with a
              single fixed price for the whole vehicle — not per passenger. That price
              is agreed before you travel, so there are no meters, no peak-time
              surges, and no hidden fees on arrival. There is no prepayment either:
              most travellers simply pay the driver on the day in cash or by card.
              Flight tracking and free wait time are included on every{" "}
              <L href="/airport-transfers">airport transfer</L>, and you can change or
              cancel with reasonable notice at no charge. It is private transport made
              predictable, whether you are booking a single ride or a multi-day
              itinerary.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-navy">
              Popular journeys &amp; seasonal travel
            </h3>
            <p className="mt-2">
              Some routes are in demand all year. Pilgrims book the{" "}
              <L href="/routes/jeddah-to-makkah">Jeddah to Makkah</L> and{" "}
              <L href="/routes/jeddah-to-madinah">Jeddah to Madinah</L> transfers around
              the clock, while tourists favour the scenic{" "}
              <L href="/routes/jeddah-to-taif">Jeddah to Taif</L> mountain run and the
              long desert drive from{" "}
              <L href="/routes/riyadh-to-alula">Riyadh to AlUla</L>. Demand peaks during
              Ramadan and the Hajj season, so we strongly recommend pre-booking your{" "}
              <L href="/umrah-taxi-service">Umrah transport</L> and{" "}
              <L href="/hajj-transport-service">Hajj transport</L> well in advance to
              secure a vehicle and lock in your price. Business travel stays steady
              year-round across <L href="/taxi-service/riyadh">Riyadh</L> and the
              Eastern Province, where many clients keep the same driver for several
              days at a fixed daily rate.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-navy">
              Professional chauffeur services
            </h3>
            <p className="mt-2">
              Every transfer is driven by an experienced, vetted chauffeur who knows
              the cities, the highways, and the holy sites. Vehicles are clean,
              modern, and licensed, and you can choose the class that suits your trip —
              from economy and comfort cars to business sedans and premium vans. Browse
              our{" "}
              <L href="/services">full range of transfer services</L>, read practical
              tips on the <L href="/blog">travel blog</L>, or simply{" "}
              <L href="/get-quote">send your trip details</L> for a fixed quote on
              WhatsApp. From a quick{" "}
              <L href="/airport-transfer/madinah-airport">Madinah airport pickup</L> to
              a cross-Kingdom drive, we make getting around Saudi Arabia simple,
              comfortable, and predictable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
