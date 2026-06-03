// Mobot website kit — app shell + demo modal
function DemoModal({ open, onClose }) {
  const [sent, setSent] = useState(false);
  useLucide();
  if (!open) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" style={{ position: 'relative' }} onClick={e => e.stopPropagation()}>
        <button className="btn btn-ghost modal-close" style={{ padding: 8, border: 0 }} onClick={onClose}>
          <Icon name="x" />
        </button>
        {!sent ? (
          <React.Fragment>
            <Eyebrow>Get started</Eyebrow>
            <h3>See the robots in action</h3>
            <p>Tell us where to reach you and we'll set up a live demo on real devices.</p>
            <label>Work email</label>
            <input placeholder="you@company.com" />
            <label>Company</label>
            <input placeholder="Acme Mobile" />
            <Button variant="primary" arrow onClick={() => setSent(true)}>Schedule a Demo</Button>
          </React.Fragment>
        ) : (
          <div style={{ textAlign: 'center', padding: '14px 0' }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--pass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <i data-lucide="check" className="lucide" style={{ color: 'var(--pass)', width: 26, height: 26 }}></i>
            </div>
            <h3>You're all set!</h3>
            <p style={{ marginBottom: 8 }}>Robot Testing…Commence! Our team will reach out shortly.</p>
            <Button variant="ghost" onClick={onClose}>Close</Button>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [demo, setDemo] = useState(false);
  const openDemo = () => setDemo(true);
  useLucide();
  return (
    <div className="mobot">
      <Nav onDemo={openDemo} />
      <Hero onDemo={openDemo} />
      <TrustBar />
      <Roles onDemo={openDemo} />
      <Cases />
      <Testimonials />
      <Footer onDemo={openDemo} />
      <DemoModal open={demo} onClose={() => setDemo(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
