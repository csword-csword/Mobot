// Mobot platform kit — shell (sidebar + topbar) + helpers
const { useState, useEffect } = React;
function useLucide() { useEffect(() => { if (window.lucide) window.lucide.createIcons(); }); }
function Icon({ name, className = '', style }) {
  return <i data-lucide={name} className={'lucide ' + className} style={style}></i>;
}

function Sidebar({ view }) {
  const nav = [
    ['Dashboard', 'layout-dashboard', 'dashboard'],
    ['Test Runs', 'play-circle', 'runs'],
    ['Devices', 'smartphone', 'devices'],
    ['Bugs', 'bug', 'bugs'],
    ['Integrations', 'plug', 'integrations'],
  ];
  return (
    <aside className="side">
      <img className="side-logo" src="../../assets/mobot-logo-white.png" alt="Mobot" />
      <div className="side-sec">Workspace</div>
      {nav.map(n => (
        <div key={n[2]} className={'navitem' + ((view === 'runs' || view === 'report') && n[2] === 'runs' ? ' active' : (view === n[2] ? ' active' : ''))}>
          <Icon name={n[1]} />{n[0]}
        </div>
      ))}
      <div className="side-sec">Account</div>
      <div className="navitem"><Icon name="settings" />Settings</div>
      <div className="navitem"><Icon name="life-buoy" />Support</div>
      <div className="side-foot">
        <div className="av"></div>
        <div><div className="nm">Maya Chen</div><div className="rl">Your CSM</div></div>
      </div>
    </aside>
  );
}

function Topbar({ crumb }) {
  useLucide();
  return (
    <div className="topbar">
      <div className="crumb">{crumb}</div>
      <div className="search"><Icon name="search" />Search test runs, devices…</div>
      <div className="env"><span className="dot"></span>Production · v4.12.0</div>
    </div>
  );
}
Object.assign(window, { useLucide, Icon, Sidebar, Topbar });
