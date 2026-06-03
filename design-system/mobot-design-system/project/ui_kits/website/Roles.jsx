// Mobot website kit — role-based use-case tabs (interactive)
const ROLES = [
  { id: 'Engineering', h: 'Automate tasks and accelerate development with AI-driven automation',
    desc: "Engineering teams bogged down by manual processes and inefficiencies can't focus on innovation, leading to slow releases and technical debt.",
    benefits: [
      ['lightbulb', 'Focus on Innovation, Not Hotfixes', 'Catch issues before they reach your users so engineers can prioritize building features.'],
      ['bot', 'Reduce Engineering-Driven Testing', 'Engineers want to build, not be burdened by manual testing. Automate the un-automatable.'],
      ['rocket', 'Accelerate Release Cycles', "Don't let bugs delay releases. Ship faster by eliminating post-launch issues."],
    ] },
  { id: 'QA', h: 'Catch bugs before they reach your users and release with confidence',
    desc: 'QA teams overwhelmed by repetitive manual testing struggle to keep up with tight deadlines, leading to missed bugs and slower releases.',
    benefits: [
      ['target', 'Achieve 100% Test Coverage', 'Traditional automation is flaky and slow to set up. Mobot gets you to 100% coverage fast.'],
      ['zap', 'Eliminate Manual Testing', 'Repetitive tasks are error-prone and time-consuming. Our robots unlock QA speed and precision.'],
      ['sparkles', 'Automate the "Unautomatable"', 'Edge cases shouldn\u2019t be worrisome. Mobot automates scenarios where others fail.'],
    ] },
  { id: 'Product', h: 'Drive higher feature adoption and ensure a seamless user experience',
    desc: 'Product teams hindered by slow testing cycles miss market opportunities, resulting in delayed launches and lost growth.',
    benefits: [
      ['trending-up', 'Increase Feature Adoption', 'Deliver a consistent experience to drive feature usage and engagement.'],
      ['heart', 'Reduce User Churn', 'Bugs drive users away. Improve app stability to keep users engaged and loyal.'],
      ['shield', 'Protect Your Roadmap', 'Safeguard your release plans by identifying and resolving issues early.'],
    ] },
  { id: 'Marketing', h: 'Protect your brand and avoid campaign disruption across all channels',
    desc: 'Marketing teams dealing with broken campaign flows lose conversions and revenue, as buggy features lead to poor experiences.',
    benefits: [
      ['gem', 'Increase Customer LTV', 'Mobot ensures a seamless app experience to boost long-term retention and value.'],
      ['megaphone', 'Improve Campaign Performance', 'Mobot tests real-world conditions to ensure flawless execution across devices.'],
      ['dollar-sign', 'Minimize Revenue Loss', 'Keep mobile campaigns intact to drive more conversions and revenue.'],
    ] },
  { id: 'Support', h: 'Reduce support tickets by delivering stable, reliable features',
    desc: 'Support teams overwhelmed by unresolved app issues face higher ticket volumes, leading to frustrated users and churn.',
    benefits: [
      ['timer', 'Speed Up Issue Resolution', 'Improve app reliability to make bug reproduction faster and more efficient.'],
      ['repeat', 'Keep Users Coming Back', 'Deliver a smoother, more dependable experience to build trust.'],
      ['ticket', 'Reduce Ticket Volume', 'Catch bugs before they reach users to cut ticket volume and resolution time.'],
    ] },
];

function Roles({ onDemo }) {
  const [active, setActive] = useState('Engineering');
  useLucide();
  const r = ROLES.find(x => x.id === active);
  return (
    <section className="section">
      <Container>
        <div style={{ textAlign: 'center' }}>
          <Eyebrow>Unified automation for every team</Eyebrow>
          <h2 className="mb-h2" style={{ maxWidth: 760, margin: '14px auto 0' }}>
            Mobot's AI-Powered Mechanical Robots Connect Mobile Teams and Elevate Quality
          </h2>
        </div>
        <div className="roletabs">
          {ROLES.map(x => (
            <span key={x.id} className={'roletab' + (x.id === active ? ' active' : '')}
              onClick={() => setActive(x.id)}>{x.id}</span>
          ))}
        </div>
        <div className="role-panel">
          <div>
            <Eyebrow>Mobot for {r.id}</Eyebrow>
            <h3>{r.h}</h3>
            <div className="desc">{r.desc}</div>
            <Button variant="primary" arrow onClick={onDemo}>Schedule a Demo</Button>
          </div>
          <div>
            {r.benefits.map((b, i) => (
              <div className="benefit" key={i}>
                <div className="ico"><Icon name={b[0]} /></div>
                <div><h4>{b[1]}</h4><p>{b[2]}</p></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
Object.assign(window, { Roles });
