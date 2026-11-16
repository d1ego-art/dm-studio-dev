// dmstudio.dev — JS mínimo: menú móvil, filtros del portafolio, aparición y formulario.

// ----- menú móvil
const toggle = document.querySelector('.nav-toggle');
toggle?.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach((a) => a.addEventListener('click', () => {
  document.body.classList.remove('nav-open'); toggle?.setAttribute('aria-expanded', 'false');
}));

// ----- aparición al hacer scroll (sin JS o sin soporte, todo queda visible)
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
}

// ----- filtros del portafolio
document.querySelectorAll('[data-filters]').forEach((bar) => {
  const grid = document.querySelector(bar.dataset.filters);
  bar.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    bar.querySelectorAll('button').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    const f = b.dataset.filter;
    grid.querySelectorAll('[data-cat]').forEach((it) => {
      it.hidden = f !== '*' && it.dataset.cat !== f;
      it.classList.add('in');
    });
  });
});

// ----- formulario de contacto (Web3Forms, sin recargar)
document.querySelectorAll('form[data-web3forms]').forEach((form) => {
  const status = form.querySelector('.form-status');
  const btn = form.querySelector('[type="submit"]');
  const msg = (k) => form.dataset[k] || '';
  const set = (state, text) => { status.dataset.state = state; status.textContent = text; };
  const key = window.DM?.web3forms;
  if (!key) set('', msg('msgOff'));

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity() || !key) return;
    const data = new FormData(form);
    if (data.get('botcheck')) return; // honeypot
    data.set('access_key', key);
    btn.disabled = true; set('', msg('msgSending'));
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) { form.reset(); set('ok', msg('msgOk')); }
      else set('error', json.message || msg('msgError'));
    } catch {
      set('error', msg('msgOffline'));
    } finally {
      btn.disabled = false;
    }
  });
});
