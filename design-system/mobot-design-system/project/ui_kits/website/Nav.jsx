// Mobot website kit — sticky nav with announcement bar + mobile menu
function Nav({ onDemo }) {
  const [open, setOpen] = useState(false);
  useLucide();
  return (
    <React.Fragment>
      <div className="announce">
        <span className="pill">🚀 New</span>
        Introducing Mobot Live — self-service robot testing on 300+ devices
        <Icon name="arrow-right" />
      </div>
      <nav className="nav">
        <Container>
          <div className="nav-inner">
            <Logo variant="navy" />
            <div className="nav-links">
              <span className="nav-link">Products <Icon name="chevron-down" /></span>
              <span className="nav-link">Use Cases <Icon name="chevron-down" /></span>
              <span className="nav-link">Why Mobot</span>
              <span className="nav-link">Pricing</span>
              <span className="nav-link">Customers</span>
            </div>
            <div className="nav-right">
              <span className="nav-login">Login</span>
              <Button variant="primary" arrow onClick={onDemo}>Schedule a Demo</Button>
            </div>
          </div>
        </Container>
      </nav>
    </React.Fragment>
  );
}
Object.assign(window, { Nav });
