// Mobot website kit — hero with robot mark in a glowing visual
function Hero({ onDemo }) {
  useLucide();
  return (
    <header className="hero">
      <Container>
        <div className="hero-grid">
          <div>
            <Eyebrow onDark>QA-as-a-service · real devices</Eyebrow>
            <h1>Hire a Robot Fleet for Manual Testing</h1>
            <p>Scale your mobile coverage with a new type of AI-enabled service that combines real mechanical robots, physical devices, and quality experts.</p>
            <div className="hero-cta">
              <Button variant="grad" size="lg" arrow onClick={onDemo}>Schedule a Demo</Button>
              <Button variant="ghost-light" size="lg">Explore Use Cases</Button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-glow"></div>
            <img src="../../assets/mobot-icon-white.png" style={{ width: '46%', position: 'relative', zIndex: 1 }} alt="" />
          </div>
        </div>
      </Container>
    </header>
  );
}
Object.assign(window, { Hero });
