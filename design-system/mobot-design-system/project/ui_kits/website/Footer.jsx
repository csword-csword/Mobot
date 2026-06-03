// Mobot website kit — CTA banner + footer
function Footer({ onDemo }) {
  useLucide();
  const cols = [
    ['Product', ['Mobot Managed', 'Mobot Live', 'Mobot Insights', 'Integrations', 'Pricing']],
    ['Learn', ['Blog', 'Resources', 'FAQ', 'How it works']],
    ['Company', ['About', 'Careers', 'Press', 'Adopt a Robot 🤖']],
  ];
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <div className="cta">
            <div className="cta-glow"></div>
            <h2>Ready to Transform Your Workflow with AI-Powered Robotics?</h2>
            <p>Mobot automates the unautomatable, connecting digital tools with real-world tasks to deliver unmatched precision and efficiency.</p>
            <Button variant="grad" size="lg" arrow onClick={onDemo}>Schedule a Demo</Button>
          </div>
        </Container>
      </section>
      <footer className="footer">
        <Container>
          <div className="footer-grid">
            <div>
              <Logo variant="white" className="footer-logo" />
              <p style={{ fontSize: 14.5, lineHeight: 1.6, maxWidth: 260, margin: 0 }}>
                Robot-powered QA-as-a-service. Real robots, real devices, real coverage.
              </p>
            </div>
            {cols.map((c, i) => (
              <div key={i}>
                <h5>{c[0]}</h5>
                <ul>{c[1].map((l, j) => <li key={j}>{l}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
            <span>New York, NY · © Mobot. All rights reserved.</span>
            <span style={{ display: 'flex', gap: 18 }}><span>Cookie Policy</span><span>Privacy Policy</span></span>
          </div>
        </Container>
      </footer>
    </React.Fragment>
  );
}
Object.assign(window, { Footer });
