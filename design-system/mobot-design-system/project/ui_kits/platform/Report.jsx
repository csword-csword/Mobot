// Mobot platform kit — Test Report detail view
function Phone({ tap }) {
  return (
    <div className="scr">
      <div className="ph-top"></div>
      <div className="ph-b" style={{ top: 36 }}></div>
      <div className="ph-b" style={{ top: 52, right: 40 }}></div>
      <div className="ph-b" style={{ bottom: 56, width: 'auto' }}></div>
      <div className="ph-b" style={{ bottom: 38 }}></div>
      {tap && <div className="tap" style={{ top: tap[0], left: tap[1] }}></div>}
    </div>
  );
}

function ReportView({ run, onBack }) {
  const [tab, setTab] = useState('Steps');
  useLucide();
  const r = run || RUNS[0];
  const steps = [
    ['Launch app & dismiss ATT prompt', 'tap (208, 642)'],
    ['Tap "Checkout" in cart', 'tap (180, 540)'],
    ['Select Apple Pay', 'tap (212, 720)'],
    ['Confirm with side-button (biometric)', 'press ×2'],
  ];
  const tabs = ['Steps', 'Device logs', 'Network', 'Video'];
  return (
    <div className="page">
      <button className="btn btn-ghost" style={{ marginBottom: 16 }} onClick={onBack}><Icon name="arrow-left" />Back to runs</button>
      <div className="rep-head">
        <StatusBadge s={r[3]} />
        <h1>{r[0]}</h1>
      </div>
      <div className="rep-meta">
        <span><Icon name="smartphone" />{r[2]}</span>
        <span><Icon name="hash" />MB-20260603-0481</span>
        <span><Icon name="bot" />Robot R-07 · New York</span>
        <span><Icon name="clock" />Completed {r[4]} · 1m 24s</span>
        <span><Icon name="layers" />{r[1]}</span>
      </div>

      <div className="rep-grid">
        <div>
          <div className="tabs">
            {tabs.map(t => <span key={t} className={'tab' + (t === tab ? ' on' : '')} onClick={() => setTab(t)}>{t}</span>)}
          </div>
          {tab === 'Steps' && (
            <div className="steps">
              {steps.map((s, i) => (
                <div className="step" key={i}>
                  <div className="step-head">
                    <span className="n">{i + 1}</span>
                    <span className="t">{s[0]}</span>
                    <span className="a">{s[1]}</span>
                  </div>
                  <div className="step-body">
                    <div className="shot"><div className="cap">BASELINE</div><Phone /></div>
                    <div className="shot"><div className="cap">ROBOT RESULT</div><Phone tap={['50%', '46%']} /></div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {tab !== 'Steps' && (
            <div className="step" style={{ padding: '20px' }}>
              <div className="mb-mono" style={{ lineHeight: 1.9, color: 'var(--fg-2)', fontSize: 12.5 }}>
                {tab === 'Video' ? '▶  full-run capture · 1m24s · 1080×1920 · 30fps' : null}
                {tab === 'Network' && <React.Fragment>POST /v2/checkout/session → 200 · 412ms<br />GET /v2/wallet/applepay → 200 · 188ms<br />POST /v2/payment/confirm → 200 · 631ms</React.Fragment>}
                {tab === 'Device logs' && <React.Fragment>[17:42:01] AppDelegate didFinishLaunching<br />[17:42:03] PKPaymentAuthorizationViewController presented<br />[17:42:06] payment.status = success</React.Fragment>}
              </div>
            </div>
          )}
        </div>

        <div className="panel">
          <h4>CSM verification</h4>
          <div className="note">
            Robot completed all 14 actions. Apple Pay sheet rendered correctly; no visual diff vs baseline. Verified pass — safe to ship.
            <div className="by"><span className="av"></span>Maya Chen · verified {r[4]}</div>
          </div>
          <h4 style={{ marginTop: 22 }}>Artifacts</h4>
          <div className="artifact"><Icon name="image" />Screenshots <span className="sz">14</span></div>
          <div className="artifact"><Icon name="video" />Run recording <span className="sz">1m24s</span></div>
          <div className="artifact"><Icon name="file-text" />Device log <span className="sz">82 KB</span></div>
          <div className="artifact"><Icon name="activity" />Network HAR <span className="sz">31 KB</span></div>
          <h4 style={{ marginTop: 22 }}>Bugs ({r[5]})</h4>
          {r[5] === 0
            ? <div className="cell-sm" style={{ padding: '6px 0' }}>No bugs detected on this run. 🎉</div>
            : [...Array(r[5])].map((_, i) => (
              <div className="bug" key={i}>
                <span className="dot" style={{ background: i === 0 ? 'var(--fail)' : 'var(--warn)' }}></span>
                <div><div className="t">{i === 0 ? 'Deep link 404 on cold start' : 'Intermittent 2s delay'}</div>
                <div className="d">{i === 0 ? 'Jira MOB-2241 · created automatically' : 'Seen on 1 of 3 reruns'}</div></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { ReportView });
