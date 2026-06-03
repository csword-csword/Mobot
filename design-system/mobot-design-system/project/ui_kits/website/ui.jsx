// Mobot website kit — shared UI primitives
const { useState, useEffect, useRef } = React;

// Re-render lucide icons after React commits
function useLucide(dep) {
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
}
function Icon({ name, className = '' }) {
  return <i data-lucide={name} className={'lucide ' + className}></i>;
}

function Container({ children, style }) {
  return <div className="container" style={style}>{children}</div>;
}

function Eyebrow({ children, onDark }) {
  return <div className={'eyebrow' + (onDark ? ' on-dark' : '')}>{children}</div>;
}

function Button({ variant = 'primary', size, arrow, children, onClick }) {
  return (
    <button className={`btn btn-${variant}${size === 'lg' ? ' btn-lg' : ''}`} onClick={onClick}>
      {children}{arrow && <Icon name="arrow-right" />}
    </button>
  );
}

function Logo({ variant = 'white', className = 'nav-logo' }) {
  return <img className={className} src={`../../assets/mobot-logo-${variant}.png`} alt="Mobot" />;
}

// horizontally scrolling customer marquee
function TrustBar({ label = 'Trusted by mobile teams at' }) {
  const names = ['Rappi', 'Citizen', 'Persona', 'Sandboxx', 'Homebase', 'Step', 'KOHO', 'Branch', 'Mapbox', 'Vivint'];
  const row = [...names, ...names];
  return (
    <div className="trust">
      <Container>
        <div className="trust-label">{label}</div>
        <div className="marquee">
          <div className="marquee-track">
            {row.map((n, i) => <span className="cust" key={i}>{n}</span>)}
          </div>
        </div>
      </Container>
    </div>
  );
}

Object.assign(window, { useLucide, Icon, Container, Eyebrow, Button, Logo, TrustBar });
