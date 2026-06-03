// Mobot website kit — case-study stat cards + testimonials
const CASES = [
  ['30%+', 'Increase in QA efficiency at Citizen — 10M+ active users, 600 test cases automated weekly.'],
  ['20h+', 'Manual testing eliminated weekly at the #1 US Neobank, with 2100% more device coverage.'],
  ['$150k', 'In recovered revenue at Rappi by preventing losses from failed marketing flows.'],
  ['4.2 → 4.8', 'App Store rating increase at Sandboxx, reaching a 99.9% crash-free rate.'],
  ['600+', 'Deep link issues resolved for a Top 10 social network across 50+ channels weekly.'],
  ['1–2 wks', 'To replicate an Android smoke suite that took Homebase 4–6 months in-house.'],
];
const QUOTES = [
  ['Mobot is amazing! Great partner to make sure we don\u2019t have any surprises when we release new versions of our SDK. ', 'This has been a huge game changer for our mobile team.', 'Lewis Chung', 'Engineering Manager, Persona'],
  ['Can\u2019t say enough about how much better I feel with each release now that Mobot is part of the pipeline. ', 'Our stability rating for iOS is now at 100%.', 'Swamy R.', 'CTO / COO, Sandboxx'],
];

function Cases() {
  useLucide();
  return (
    <section className="section" style={{ background: 'var(--gray-50)' }}>
      <Container>
        <div style={{ textAlign: 'center', marginBottom: 42 }}>
          <Eyebrow>The numbers don't lie</Eyebrow>
          <h2 className="mb-h2" style={{ margin: '14px 0 0' }}>See the Impact of Mobot</h2>
        </div>
        <div className="grid-3">
          {CASES.map((c, i) => (
            <div className="statcard" key={i}>
              <div className="num">{c[0]}</div>
              <div className="cap">{c[1]}</div>
              <div className="co">Read case study <Icon name="arrow-right" /></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section">
      <Container>
        <div className="tgrid">
          {QUOTES.map((q, i) => (
            <div className="quote" key={i}>
              <div className="stars">★★★★★</div>
              <p><b>{q[0]}</b>{q[1]}</p>
              <div className="who">
                <div className="av"></div>
                <div><div className="nm">{q[2]}</div><div className="rl">{q[3]}</div></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { Cases, Testimonials });
