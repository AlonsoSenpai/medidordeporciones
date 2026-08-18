'use strict';

// ---------------------------------------------------------------------------
// Data model
// ---------------------------------------------------------------------------

const DISHES = [
  { id: 'arroz', name: 'Arroz graneado', unitLabel: 'plato de acompañamiento', unitLabelPl: 'platos de acompañamiento',
    tip: 'Regla base: 1 taza de arroz por 2 tazas de agua. Sofríe el arroz en el aceite antes de agregar el agua caliente.',
    steps: ['Sofríe el ajo picado y el arroz en el aceite hasta que el grano se vea perlado.', 'Agrega el agua caliente y la sal, revuelve una sola vez.', 'Tapa y cocina a fuego bajo 15 min sin destapar; reposa 5 min.'],
    ing: [
      { n: 'arroz', per: 0.5, u: 'taza', mode: 'frac', note: '≈ 90 g por persona' },
      { n: 'agua caliente', per: 1, u: 'taza', mode: 'frac', note: 'el doble del arroz' },
      { n: 'sal', per: 0.4, u: 'cdta', mode: 'frac' },
      { n: 'aceite', per: 0.5, u: 'cda', mode: 'frac' },
      { n: 'ajo', per: 0.5, u: 'diente', mode: 'frac', note: 'picado fino' } ] },

  { id: 'fideos', name: 'Fideos / tallarines', unitLabel: 'plato de fondo', unitLabelPl: 'platos de fondo',
    tip: 'Como referencia: 1 litro de agua y 1 cucharadita de sal por cada 100 g de fideos. Sala el agua sólo cuando hierva.',
    steps: ['Hierve el agua con la sal en una olla amplia.', 'Agrega los fideos y cocina según el paquete (8-10 min), revolviendo al inicio.', 'Cuela y mezcla de inmediato con la salsa o el aceite.'],
    ing: [
      { n: 'fideos', per: 100, u: 'g', mode: 'r10', note: '120 g si es plato único' },
      { n: 'agua', per: 1, u: 'litro', mode: 'frac' },
      { n: 'sal', per: 1, u: 'cdta', mode: 'frac' },
      { n: 'salsa de tomate', per: 0.75, u: 'taza', mode: 'frac' },
      { n: 'queso rallado', per: 2, u: 'cda', mode: 'frac' } ] },

  { id: 'cazuela', name: 'Cazuela de vacuno', unitLabel: 'plato hondo', unitLabelPl: 'platos hondos',
    tip: 'Cocina la carne primero a fuego bajo por 40 min; recién ahí entran las verduras, de la más firme a la más blanda.',
    steps: ['Dora la carne, cubre con el agua y cocina 40 min a fuego bajo.', 'Agrega papa, zapallo, choclo y zanahoria; cocina 20 min más.', 'Suma el arroz y cocina 15 min; ajusta la sal y agrega el cilantro al final.'],
    ing: [
      { n: 'carne de vacuno (asado o tapapecho)', per: 160, u: 'g', mode: 'r10', note: 'un trozo por persona' },
      { n: 'agua', per: 700, u: 'ml', mode: 'r50' },
      { n: 'papas medianas', per: 1, u: 'unidad', mode: 'int' },
      { n: 'zapallo', per: 120, u: 'g', mode: 'r10' },
      { n: 'choclo', per: 0.5, u: 'unidad', mode: 'frac', note: 'en trozos' },
      { n: 'zanahoria', per: 0.5, u: 'unidad', mode: 'frac' },
      { n: 'arroz', per: 1.5, u: 'cda', mode: 'frac', note: 'o un puñado de fideos' },
      { n: 'sal', per: 0.5, u: 'cdta', mode: 'frac' },
      { n: 'cilantro', per: 1, u: 'cda', mode: 'frac', note: 'picado, al servir' } ] },

  { id: 'completos', name: 'Completos', unitLabel: 'completo', unitLabelPl: 'completos',
    tip: 'Cuenta 1 completo por niño y 2 por adulto con hambre. La palta se muele con un poco de sal justo antes de armar.',
    steps: ['Calienta las vienesas en agua caliente sin hervir y tibia los panes.', 'Muele la palta con sal; pica el tomate en cubitos y escurre.', 'Arma: pan, vienesa, tomate, palta y mayonesa al final.'],
    ing: [
      { n: 'panes de completo', per: 1, u: 'unidad', mode: 'int' },
      { n: 'vienesas', per: 1, u: 'unidad', mode: 'int' },
      { n: 'palta', per: 0.5, u: 'unidad', mode: 'frac', note: 'grande, molida con sal' },
      { n: 'tomate', per: 0.75, u: 'unidad', mode: 'frac', note: 'en cubitos, escurrido' },
      { n: 'mayonesa', per: 2, u: 'cda', mode: 'frac' },
      { n: 'chucrut', per: 0.25, u: 'taza', mode: 'frac', note: 'opcional (versión alemán)' } ] },

  { id: 'churrascos', name: 'Churrascos / sándwich de carne', unitLabel: 'sándwich', unitLabelPl: 'sándwiches',
    tip: 'Corta la carne en láminas delgadas y séllala en sartén muy caliente, 1 minuto por lado, con sal recién puesta.',
    steps: ['Sella las láminas de carne en la plancha bien caliente, 1 min por lado.', 'Tuesta el pan y unta la palta molida.', 'Arma con carne, tomate, queso y mayonesa; sirve de inmediato.'],
    ing: [
      { n: 'pan frica o amasado', per: 1, u: 'unidad', mode: 'int' },
      { n: 'carne en láminas (posta o lomo)', per: 130, u: 'g', mode: 'r10' },
      { n: 'palta', per: 0.5, u: 'unidad', mode: 'frac' },
      { n: 'tomate', per: 0.5, u: 'unidad', mode: 'frac' },
      { n: 'queso laminado', per: 1, u: 'lámina', mode: 'int', note: 'para la versión chacarero/italiano' },
      { n: 'mayonesa', per: 1.5, u: 'cda', mode: 'frac' },
      { n: 'sal', per: 0.25, u: 'cdta', mode: 'frac' } ] },

  { id: 'pure', name: 'Puré de papas', unitLabel: 'porción de acompañamiento', unitLabelPl: 'porciones de acompañamiento',
    tip: 'Cuece las papas con cáscara y muélelas calientes: así el puré queda suave y no se pone elástico.',
    steps: ['Cuece las papas en agua con sal 20-25 min, hasta que entren fáciles con un cuchillo.', 'Muélelas calientes con la mantequilla.', 'Agrega la leche caliente de a poco hasta la textura que quieras y sala.'],
    ing: [
      { n: 'papas', per: 250, u: 'g', mode: 'r10' },
      { n: 'leche caliente', per: 60, u: 'ml', mode: 'r10' },
      { n: 'mantequilla', per: 15, u: 'g', mode: 'r5' },
      { n: 'sal', per: 0.4, u: 'cdta', mode: 'frac' } ] },

  { id: 'porotos', name: 'Porotos con riendas', unitLabel: 'plato hondo', unitLabelPl: 'platos hondos',
    tip: 'Remoja los porotos la noche anterior; si usas porotos de conserva, salta el remojo y reduce el agua a la mitad.',
    steps: ['Cuece los porotos remojados en el agua con el zapallo, 45-60 min.', 'Agrega el sofrito de cebolla, ajo y pimentón con el ají de color.', 'Suma los fideos y cocina 12 min más; la mezcla debe quedar espesa.'],
    ing: [
      { n: 'porotos secos', per: 80, u: 'g', mode: 'r10', note: 'remojados desde la noche anterior' },
      { n: 'agua', per: 600, u: 'ml', mode: 'r50' },
      { n: 'zapallo', per: 100, u: 'g', mode: 'r10' },
      { n: 'fideos (spaghetti quebrado)', per: 40, u: 'g', mode: 'r10' },
      { n: 'cebolla', per: 0.3, u: 'unidad', mode: 'frac' },
      { n: 'ají de color', per: 0.3, u: 'cdta', mode: 'frac' },
      { n: 'sal', per: 0.4, u: 'cdta', mode: 'frac' } ] },

  { id: 'ensalada', name: 'Ensalada chilena', unitLabel: 'porción', unitLabelPl: 'porciones',
    tip: 'Deja el tomate en pluma y la cebolla en agua fría con sal 10 minutos para quitarle el picor.',
    steps: ['Corta la cebolla en pluma fina y déjala 10 min en agua fría con sal.', 'Corta el tomate en gajos delgados.', 'Mezcla con aceite, sal y cilantro justo antes de servir.'],
    ing: [
      { n: 'tomates', per: 1, u: 'unidad', mode: 'frac' },
      { n: 'cebolla', per: 0.4, u: 'unidad', mode: 'frac' },
      { n: 'aceite', per: 1, u: 'cda', mode: 'frac' },
      { n: 'sal', per: 0.25, u: 'cdta', mode: 'frac' },
      { n: 'cilantro', per: 1, u: 'cda', mode: 'frac' } ] },

  { id: 'charquican', name: 'Charquicán', unitLabel: 'plato', unitLabelPl: 'platos',
    tip: 'Muele sólo la mitad de las verduras para que quede con textura; corona con un huevo frito por persona.',
    steps: ['Sofríe la carne molida con cebolla, ajo y ají de color.', 'Agrega papa y zapallo en cubos con agua justa; cocina 20 min tapado.', 'Muele parcialmente, suma el choclo y las arvejas, y sirve con huevo frito.'],
    ing: [
      { n: 'carne molida', per: 100, u: 'g', mode: 'r10' },
      { n: 'papas', per: 200, u: 'g', mode: 'r10' },
      { n: 'zapallo', per: 150, u: 'g', mode: 'r10' },
      { n: 'choclo desgranado', per: 0.3, u: 'taza', mode: 'frac' },
      { n: 'arvejas', per: 0.3, u: 'taza', mode: 'frac' },
      { n: 'cebolla', per: 0.3, u: 'unidad', mode: 'frac' },
      { n: 'huevo', per: 1, u: 'unidad', mode: 'int', note: 'frito, encima' },
      { n: 'sal', per: 0.4, u: 'cdta', mode: 'frac' } ] },

  { id: 'pollo', name: 'Pollo asado al horno', unitLabel: 'presa grande', unitLabelPl: 'presas grandes',
    tip: 'Calcula 2 presas por adulto si es plato único. Hornea 45-55 min a 200 °C, dando vuelta a la mitad.',
    steps: ['Adoba las presas con aceite, sal, ajo y merkén; deja 30 min.', 'Hornea a 200 °C sobre las papas en rodajas, 45-55 min.', 'Sube a 220 °C los últimos 8 min para dorar la piel.'],
    ing: [
      { n: 'presas de pollo', per: 1.5, u: 'unidad', mode: 'frac', note: 'trutro o pechuga' },
      { n: 'papas', per: 200, u: 'g', mode: 'r10', note: 'en rodajas, bajo el pollo' },
      { n: 'aceite', per: 1, u: 'cda', mode: 'frac' },
      { n: 'sal', per: 0.5, u: 'cdta', mode: 'frac' },
      { n: 'ajo', per: 0.5, u: 'diente', mode: 'frac' },
      { n: 'merkén o pimienta', per: 0.25, u: 'cdta', mode: 'frac' } ] }
];

const FRACS = [[0, ''], [0.25, '¼'], [0.333, '⅓'], [0.5, '½'], [0.667, '⅔'], [0.75, '¾'], [1, '1']];

// gramos que pesa 1 taza de cada ingrediente (medida rasa)
const GR_POR_TAZA = [
  ['arroz', 185], ['fideos', 100], ['harina', 120], ['azúcar', 200], ['sal', 290],
  ['porotos', 190], ['lenteja', 190], ['carne', 225], ['queso', 100], ['mantequilla', 227],
  ['zapallo', 140], ['papa', 150], ['arveja', 145], ['choclo', 165], ['cebolla', 160],
  ['aceite', 218], ['mayonesa', 230], ['leche', 245], ['agua', 240], ['salsa', 245], ['chucrut', 150]
];

// ingredientes que se cortan en vez de medirse a granel: peso de una pieza y cómo se corta
const CORTE = [
  ['zapallo', { g: 450, pieza: 'trozo', corte: 'rodaja de ~4 dedos de ancho, sin cáscara ni pepas' }],
  ['zanahoria', { g: 80, pieza: 'zanahoria', corte: 'mediana, en rodajas de 1 cm' }],
  ['carne de vacuno', { g: 160, pieza: 'trozo', corte: 'presa del tamaño de la palma de la mano' }],
  ['carne en láminas', { g: 65, pieza: 'lámina', corte: 'lámina delgada, del ancho del pan' }],
  ['papas', { g: 150, pieza: 'papa', corte: 'mediana, del tamaño de un puño chico' }],
  ['papa', { g: 150, pieza: 'papa', corte: 'mediana, del tamaño de un puño chico' }],
  ['tomate', { g: 120, pieza: 'tomate', corte: 'mediano; en gajos o cubitos de 1 cm' }],
  ['cebolla', { g: 160, pieza: 'cebolla', corte: 'mediana; en pluma fina o cubitos' }],
  ['choclo', { g: 250, pieza: 'choclo', corte: 'entero cortado en 3 rodelas' }],
  ['palta', { g: 250, pieza: 'palta', corte: 'grande; molida con un poco de sal' }],
  ['presas de pollo', { g: 250, pieza: 'presa', corte: 'trutro entero o media pechuga' }],
  ['pan', { g: 90, pieza: 'pan', corte: 'abierto por la mitad' }]
];

function corteDe(nombre) {
  const n = nombre.toLowerCase();
  for (const [k, v] of CORTE) if (n.indexOf(k) >= 0) return v;
  return null;
}

function grPorTaza(nombre) {
  const n = nombre.toLowerCase();
  for (const [k, v] of GR_POR_TAZA) if (n.indexOf(k) >= 0) return v;
  return null;
}

function plural(u, n) {
  if (n === 1) return u;
  const map = { taza: 'tazas', cdta: 'cdtas', cda: 'cdas', unidad: 'unidades', litro: 'litros', lámina: 'láminas', diente: 'dientes',
    trozo: 'trozos', papa: 'papas', tomate: 'tomates', cebolla: 'cebollas', choclo: 'choclos', palta: 'paltas',
    zanahoria: 'zanahorias', presa: 'presas', pan: 'panes' };
  return map[u] || u;
}

function fmtFrac(v, u) {
  const whole = Math.floor(v + 1e-6);
  const rest = v - whole;
  let best = FRACS[0];
  for (const f of FRACS) if (Math.abs(f[0] - rest) < Math.abs(best[0] - rest)) best = f;
  let n = whole, frac = best[1];
  if (best[0] === 1) { n = whole + 1; frac = ''; }
  const num = (n === 0 && !frac) ? '0' : (frac ? (n === 0 ? frac : n + ' ' + frac) : String(n));
  const approx = n + (best[0] === 1 ? 0 : best[0]);
  return num + ' ' + plural(u, approx <= 1 ? 1 : 2);
}

function format(ing, total) {
  if (ing.mode === 'int') { const v = Math.max(1, Math.round(total)); return v + ' ' + plural(ing.u, v); }
  if (ing.mode === 'r5') return (Math.max(5, Math.round(total / 5) * 5)) + ' ' + ing.u;
  if (ing.mode === 'r10') return (Math.max(10, Math.round(total / 10) * 10)) + ' ' + ing.u;
  if (ing.mode === 'r50') {
    if (total >= 1000) return (Math.round(total / 100) / 10) + ' litros';
    return (Math.max(50, Math.round(total / 50) * 50)) + ' ' + ing.u;
  }
  return fmtFrac(total, ing.u);
}

// traduce la cantidad a la otra medida: g/ml <-> tazas y cucharadas
function translate(ing, total) {
  const gpt = grPorTaza(ing.n);
  const c = corteDe(ing.n);
  if (c) {
    if (ing.u === 'g') {
      const piezas = total / c.g;
      const cant = piezas < 0.45 ? 'menos de ' + fmtFrac(0.5, c.pieza) : fmtFrac(piezas, c.pieza);
      return '≈ ' + cant + ' · ' + c.corte;
    }
    if (ing.u === 'unidad' || ing.u === 'lámina') {
      return '≈ ' + Math.round((total * c.g) / 10) * 10 + ' g · ' + c.corte;
    }
  }
  if (ing.u === 'g' && gpt) {
    const tazas = total / gpt;
    if (tazas < 0.2) return '≈ ' + Math.max(1, Math.round(tazas * 16)) + ' cdas';
    return '≈ ' + fmtFrac(tazas, 'taza');
  }
  if (ing.u === 'ml' || ing.u === 'litro') {
    const ml = ing.u === 'litro' ? total * 1000 : total;
    if (ml < 60) return '≈ ' + Math.max(1, Math.round(ml / 15)) + ' cdas';
    return '≈ ' + fmtFrac(ml / 240, 'taza');
  }
  if (ing.u === 'taza' && gpt) return '≈ ' + Math.round((total * gpt) / 5) * 5 + ' g' + (gpt >= 240 ? ' / ml' : '');
  if (ing.u === 'cda' || ing.u === 'cdta') {
    const ml = total * (ing.u === 'cda' ? 15 : 5);
    const liquido = /aceite|agua|leche|salsa|mayonesa|vinagre|jugo/.test(ing.n.toLowerCase());
    if (gpt && !liquido) {
      const g = (total * gpt) / (ing.u === 'cda' ? 16 : 48);
      return '≈ ' + (g < 10 ? Math.round(g * 10) / 10 : Math.round(g / 5) * 5) + ' g';
    }
    return '≈ ' + Math.round(ml) + ' ml';
  }
  return '';
}

// ---------------------------------------------------------------------------
// UI wiring
// ---------------------------------------------------------------------------

const state = { dishId: '', people: 1, result: null };

const dishSelect = document.getElementById('dish-select');
const peopleInput = document.getElementById('people-input');
const btnDec = document.getElementById('btn-dec');
const btnInc = document.getElementById('btn-inc');
const btnCalc = document.getElementById('btn-calc');
const resultsEl = document.getElementById('results');
const resultTitleEl = document.getElementById('result-title');
const resultSubtitleEl = document.getElementById('result-subtitle');
const ingGridEl = document.getElementById('ing-grid');
const tipEl = document.getElementById('tip');
const stepsListEl = document.getElementById('steps-list');

const placeholderOpt = document.createElement('option');
placeholderOpt.value = '';
placeholderOpt.textContent = 'Selecciona la comida';
placeholderOpt.disabled = true;
placeholderOpt.selected = true;
dishSelect.appendChild(placeholderOpt);

for (const d of DISHES) {
  const opt = document.createElement('option');
  opt.value = d.id;
  opt.textContent = d.name;
  dishSelect.appendChild(opt);
}
const preselect = document.body.dataset.preselectDish;
if (preselect && DISHES.some(d => d.id === preselect)) {
  state.dishId = preselect;
}
dishSelect.value = state.dishId;
peopleInput.value = state.people;

function clampPeople(v) {
  if (isNaN(v)) return '';
  return Math.min(200, Math.max(1, v));
}

function render() {
  if (!state.result) {
    resultsEl.classList.remove('visible');
    return;
  }

  const rDish = DISHES.find(d => d.id === state.result.dishId) || DISHES[0];
  const people = state.result.people;

  resultTitleEl.textContent = rDish.name;
  resultSubtitleEl.textContent = people === 1
    ? 'para 1 persona · 1 ' + rDish.unitLabel
    : 'para ' + people + ' personas · ' + people + ' ' + (rDish.unitLabelPl || rDish.unitLabel);

  ingGridEl.innerHTML = '';
  for (const ing of rDish.ing) {
    const total = ing.per * people;
    const card = document.createElement('div');
    card.className = 'ing-card';

    const qty = document.createElement('span');
    qty.className = 'ing-qty';
    qty.textContent = format(ing, total);

    const info = document.createElement('span');
    info.className = 'ing-info';

    const name = document.createElement('span');
    name.className = 'ing-name';
    name.textContent = ing.n;
    info.appendChild(name);

    if (ing.note) {
      const note = document.createElement('span');
      note.className = 'ing-note';
      note.textContent = ing.note;
      info.appendChild(note);
    }

    const alt = document.createElement('span');
    alt.className = 'ing-alt';
    alt.textContent = translate(ing, total);
    info.appendChild(alt);

    card.appendChild(qty);
    card.appendChild(info);
    ingGridEl.appendChild(card);
  }

  tipEl.textContent = rDish.tip;

  stepsListEl.innerHTML = '';
  rDish.steps.forEach((text, i) => {
    const row = document.createElement('div');
    row.className = 'step-row';

    const n = document.createElement('span');
    n.className = 'step-n';
    n.textContent = String(i + 1);

    const t = document.createElement('span');
    t.className = 'step-text';
    t.textContent = text;

    row.appendChild(n);
    row.appendChild(t);
    stepsListEl.appendChild(row);
  });

  resultsEl.classList.add('visible');
}

function calcNow() {
  if (!state.dishId) return;
  const p = clampPeople(parseInt(peopleInput.value, 10)) || 1;
  state.people = p;
  peopleInput.value = p;
  state.result = { dishId: state.dishId, people: p };
  render();
}

dishSelect.addEventListener('change', () => {
  state.dishId = dishSelect.value;
  if (state.result) calcNow();
});

peopleInput.addEventListener('change', () => {
  const v = clampPeople(parseInt(peopleInput.value, 10));
  state.people = v;
  peopleInput.value = v;
});

btnDec.addEventListener('click', () => {
  const v = Math.max(1, (parseInt(peopleInput.value, 10) || 2) - 1);
  peopleInput.value = v;
  state.people = v;
});

btnInc.addEventListener('click', () => {
  const v = Math.min(200, (parseInt(peopleInput.value, 10) || 0) + 1);
  peopleInput.value = v;
  state.people = v;
});

btnCalc.addEventListener('click', calcNow);

if (preselect && state.dishId) calcNow();
