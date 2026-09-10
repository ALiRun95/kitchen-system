// Oshxona Operations & Sales Analytics Engine

// Initial State Data
let currentView = 'dashboard';
let cart = [];
let activeCategory = 'Barchasi';

// Sample Menu Data with SVG/Emoji Icon fallbacks
let menuData = [
  { id: 1, name: "Toshkent Palovi (Osh)", category: "Milliy Taomlar", price: 42000, available: true, icon: "🍲", color: "linear-gradient(135deg, #f59e0b, #d97706)", salesCount: 142 },
  { id: 2, name: "Qo'y Go'shtli Shashlik", category: "Kabablar", price: 28000, available: true, icon: "🍢", color: "linear-gradient(135deg, #ef4444, #b91c1c)", salesCount: 198 },
  { id: 3, name: "Uyg'ur Lag'moni", category: "Milliy Taomlar", price: 38000, available: true, icon: "🍜", color: "linear-gradient(135deg, #8b5cf6, #6d28d9)", salesCount: 84 },
  { id: 4, name: "Tandir Somsa (Go'shtli)", category: "Milliy Taomlar", price: 12000, available: true, icon: "🥟", color: "linear-gradient(135deg, #f97316, #c2410c)", salesCount: 310 },
  { id: 5, name: "Achichuk Salati", category: "Salatlar", price: 16000, available: true, icon: "🥗", color: "linear-gradient(135deg, #10b981, #047857)", salesCount: 115 },
  { id: 6, name: "Kola 1.5L / Qora Choy", category: "Ichimliklar", price: 14000, available: true, icon: "🥤", color: "linear-gradient(135deg, #3b82f6, #1d4ed8)", salesCount: 240 },
  { id: 7, name: "Mastava Sho'rba", category: "Sho'rbalar", price: 32000, available: true, icon: "🥣", color: "linear-gradient(135deg, #eab308, #a16207)", salesCount: 62 }
];

// Sample Active Orders
let orders = [
  {
    id: "#1084",
    table: "Stol #2",
    time: "10 min oldin",
    status: "new",
    items: [
      { name: "Toshkent Palovi (Osh)", qty: 2, price: 42000 },
      { name: "Achichuk Salati", qty: 1, price: 16000 },
      { name: "Kola 1.5L / Qora Choy", qty: 1, price: 14000 }
    ],
    total: 114000
  },
  {
    id: "#1083",
    table: "Stol #4",
    time: "18 min oldin",
    status: "cooking",
    items: [
      { name: "Qo'y Go'shtli Shashlik", qty: 4, price: 28000 },
      { name: "Tandir Somsa (Go'shtli)", qty: 3, price: 12000 }
    ],
    total: 148000
  },
  {
    id: "#1082",
    table: "VIP Stol",
    time: "24 min oldin",
    status: "ready",
    items: [
      { name: "Uyg'ur Lag'moni", qty: 2, price: 38000 },
      { name: "Achichuk Salati", qty: 2, price: 16000 }
    ],
    total: 108000
  },
  {
    id: "#1081",
    table: "Olib ketish",
    time: "40 min oldin",
    status: "delivered",
    items: [
      { name: "Toshkent Palovi (Osh)", qty: 3, price: 42000 }
    ],
    total: 126000
  }
];

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  startClock();
  renderTopDishes();
  renderKDSBoard();
  renderPosCategories();
  renderPosMenu();
  renderMenuManagement();
  drawSalesChart('today');
});

// Realtime Clock
function startClock() {
  const clockEl = document.getElementById('live-clock');
  function update() {
    const now = new Date();
    clockEl.innerText = now.toLocaleTimeString('uz-UZ');
  }
  update();
  setInterval(update, 1000);
}

// Navigation Switcher
function switchView(viewName) {
  currentView = viewName;
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));

  document.getElementById(`nav-${viewName}`).classList.add('active');
  document.getElementById(`view-${viewName}`).classList.add('active');

  const titles = {
    dashboard: "Sotuvlar Statistikasi va Analitika",
    kds: "Oshxona Buyurtmalar Doskasi (KDS)",
    pos: "Kassa va Yangi Buyurtma Olish",
    menu: "Taomlar Menyusi va Mavjudligi Boshqaruvi"
  };
  document.getElementById('page-title').innerText = titles[viewName];

  if (viewName === 'dashboard') {
    setTimeout(() => drawSalesChart('today'), 50);
  }
}

// Draw Sales Analytics Canvas Chart
function drawSalesChart(range) {
  const canvas = document.getElementById('salesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = 260;

  const width = canvas.width;
  const height = canvas.height;

  let points = [];
  let labels = [];

  if (range === 'today') {
    labels = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
    points = [320, 850, 1420, 980, 1650, 2100, 1250];
  } else if (range === 'week') {
    labels = ['Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan', 'Yak'];
    points = [3400, 4100, 3900, 4850, 6200, 7100, 6800];
  } else {
    labels = ['1-Hafta', '2-Hafta', '3-Hafta', '4-Hafta'];
    points = [24000, 28500, 31000, 36200];
  }

  const maxVal = Math.max(...points) * 1.2;

  ctx.clearRect(0, 0, width, height);

  // Background Grid Lines
  ctx.strokeStyle = '#262c3d';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = height - 40 - (i * (height - 70) / 4);
    ctx.beginPath();
    ctx.moveTo(40, y);
    ctx.lineTo(width - 20, y);
    ctx.stroke();
  }

  // Draw Area Gradient
  const stepX = (width - 70) / (points.length - 1);
  const getX = (index) => 40 + index * stepX;
  const getY = (val) => height - 40 - ((val / maxVal) * (height - 70));

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, 'rgba(245, 158, 11, 0.4)');
  gradient.addColorStop(1, 'rgba(245, 158, 11, 0.0)');

  ctx.beginPath();
  ctx.moveTo(getX(0), getY(points[0]));
  for (let i = 1; i < points.length; i++) {
    const cx = (getX(i - 1) + getX(i)) / 2;
    ctx.bezierCurveTo(cx, getY(points[i - 1]), cx, getY(points[i]), getX(i), getY(points[i]));
  }
  ctx.lineTo(getX(points.length - 1), height - 40);
  ctx.lineTo(getX(0), height - 40);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Draw Line
  ctx.beginPath();
  ctx.moveTo(getX(0), getY(points[0]));
  for (let i = 1; i < points.length; i++) {
    const cx = (getX(i - 1) + getX(i)) / 2;
    ctx.bezierCurveTo(cx, getY(points[i - 1]), cx, getY(points[i]), getX(i), getY(points[i]));
  }
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Draw Points & Labels
  labels.forEach((label, i) => {
    const x = getX(i);
    const y = getY(points[i]);

    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#f59e0b';
    ctx.fill();
    ctx.strokeStyle = '#0b0e14';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#9ca3af';
    ctx.fillText(label, x - 14, height - 15);
  });
}

function updateChartRange(range) {
  document.querySelectorAll('.filter-pills .pill').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  drawSalesChart(range);
}

// Render Top Dishes List
function renderTopDishes() {
  const container = document.getElementById('top-dishes-container');
  if (!container) return;
  
  const sorted = [...menuData].sort((a, b) => b.salesCount - a.salesCount).slice(0, 4);
  
  container.innerHTML = sorted.map((dish, idx) => `
    <div class="dish-rank-item">
      <div style="width: 48px; height: 48px; border-radius: 8px; background: ${dish.color}; display: flex; align-items: center; justify-content: center; font-size: 24px;">
        ${dish.icon}
      </div>
      <div class="dish-info">
        <h4>#${idx + 1} ${dish.name}</h4>
        <span>${dish.category}</span>
      </div>
      <div class="dish-sales">
        ${dish.salesCount} ta
        <div style="font-size: 11px; color: var(--text-muted); font-weight: 500;">sotildi</div>
      </div>
    </div>
  `).join('');
}

// Render Kitchen Display Board (KDS)
function renderKDSBoard() {
  const cols = {
    new: document.getElementById('kds-col-new'),
    cooking: document.getElementById('kds-col-cooking'),
    ready: document.getElementById('kds-col-ready'),
    delivered: document.getElementById('kds-col-delivered')
  };

  const counts = { new: 0, cooking: 0, ready: 0, delivered: 0 };

  Object.keys(cols).forEach(key => cols[key].innerHTML = '');

  orders.forEach(order => {
    counts[order.status]++;
    const cardHtml = `
      <div class="order-card">
        <div class="order-card-header">
          <div>
            <span class="order-id">${order.id}</span>
            <div class="order-meta">${order.time}</div>
          </div>
          <span class="order-table">${order.table}</span>
        </div>

        <div class="order-items-list">
          ${order.items.map(item => `
            <div class="order-item-row">
              <span><strong class="order-item-qty">${item.qty}x</strong> ${item.name}</span>
              <span class="order-item-price">${(item.price * item.qty).toLocaleString()} UZS</span>
            </div>
          `).join('')}
        </div>

        <div>
          ${getOrderActionButton(order.id, order.status)}
        </div>
      </div>
    `;
    cols[order.status].innerHTML += cardHtml;
  });

  document.getElementById('count-new').innerText = counts.new;
  document.getElementById('count-cooking').innerText = counts.cooking;
  document.getElementById('count-ready').innerText = counts.ready;
  document.getElementById('count-delivered').innerText = counts.delivered;
}

function getOrderActionButton(id, status) {
  if (status === 'new') {
    return `<button class="btn-action-status btn-start-cook" onclick="changeOrderStatus('${id}', 'cooking')">🔥 Pishirishni Boshlash</button>`;
  } else if (status === 'cooking') {
    return `<button class="btn-action-status btn-ready-serve" onclick="changeOrderStatus('${id}', 'ready')">✅ Tayyor (Offitsiantga)</button>`;
  } else if (status === 'ready') {
    return `<button class="btn-action-status btn-finish-order" onclick="changeOrderStatus('${id}', 'delivered')">🚚 Mijozga Berish</button>`;
  } else {
    return `<div style="font-size: 12px; color: var(--text-dim); text-align: center;">✓ Yakunlangan</div>`;
  }
}

function changeOrderStatus(orderId, newStatus) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = newStatus;
    renderKDSBoard();
  }
}

// POS Categories & Menu Rendering
function renderPosCategories() {
  const container = document.getElementById('category-tabs-container');
  const categories = ['Barchasi', ...new Set(menuData.map(d => d.category))];

  container.innerHTML = categories.map(cat => `
    <button class="cat-tab ${cat === activeCategory ? 'active' : ''}" onclick="selectPosCategory('${cat}')">
      ${cat}
    </button>
  `).join('');
}

function selectPosCategory(cat) {
  activeCategory = cat;
  renderPosCategories();
  renderPosMenu();
}

function renderPosMenu() {
  const container = document.getElementById('pos-menu-grid');
  const searchVal = document.getElementById('pos-search')?.value.toLowerCase() || '';

  const filtered = menuData.filter(dish => {
    const matchesCat = activeCategory === 'Barchasi' || dish.category === activeCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchVal);
    return matchesCat && matchesSearch;
  });

  container.innerHTML = filtered.map(dish => `
    <div class="menu-card" onclick="addToCart(${dish.id})">
      <div style="height: 110px; width: 100%; background: ${dish.color}; display: flex; align-items: center; justify-content: center; font-size: 48px;">
        ${dish.icon}
      </div>
      <div class="menu-card-body">
        <div class="menu-card-title">${dish.name}</div>
        <div class="menu-card-price">${dish.price.toLocaleString()} UZS</div>
      </div>
    </div>
  `).join('');
}

function filterPosMenu() {
  renderPosMenu();
}

// Cart Functions
function addToCart(dishId) {
  const dish = menuData.find(d => d.id === dishId);
  if (!dish || !dish.available) return;

  const existing = cart.find(item => item.id === dishId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...dish, qty: 1 });
  }

  renderCart();
}

function updateCartQty(dishId, delta) {
  const item = cart.find(i => i.id === dishId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== dishId);
  }
  renderCart();
}

function renderCart() {
  const listEl = document.getElementById('cart-items-list');
  const countEl = document.getElementById('cart-item-count');
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const service = subtotal * 0.1;
  const total = subtotal + service;

  countEl.innerText = `${cart.reduce((sum, i) => sum + i.qty, 0)} ta taom`;

  listEl.innerHTML = cart.length === 0 ? `
    <div style="text-align: center; color: var(--text-dim); padding: 40px 0;">
      Savatcha bo'sh.<br>Menyudan taom tanlang.
    </div>
  ` : cart.map(item => `
    <div class="cart-item">
      <div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price.toLocaleString()} UZS</div>
      </div>
      <div class="cart-qty-ctrl">
        <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
        <span style="font-weight: 700; font-size: 13px;">${item.qty}</span>
        <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');

  document.getElementById('cart-subtotal').innerText = `${subtotal.toLocaleString()} UZS`;
  document.getElementById('cart-service').innerText = `${service.toLocaleString()} UZS`;
  document.getElementById('cart-total').innerText = `${total.toLocaleString()} UZS`;
}

function submitPosOrder() {
  if (cart.length === 0) {
    alert("Iltimos, avval savatchaga taom qo'shing!");
    return;
  }

  const table = document.getElementById('select-table').value;
  const newId = `#${1080 + orders.length + 1}`;
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const total = subtotal * 1.1;

  const newOrder = {
    id: newId,
    table: table,
    time: "Hozirgina",
    status: "new",
    items: cart.map(i => ({ name: i.name, qty: i.qty, price: i.price })),
    total: total
  };

  orders.unshift(newOrder);

  // Update Metrics
  const revenueEl = document.getElementById('metric-revenue');
  const countEl = document.getElementById('metric-orders-count');
  
  let curRev = 4850000 + total;
  let curCount = 86 + 1;
  revenueEl.innerText = `${curRev.toLocaleString()} UZS`;
  countEl.innerText = `${curCount} ta`;

  renderKDSBoard();
  openReceiptModal(newOrder);

  cart = [];
  renderCart();
}

// Receipt Modal
function openReceiptModal(order) {
  const modal = document.getElementById('receipt-modal');
  const body = document.getElementById('receipt-modal-body');

  body.innerHTML = `
    <div style="display: flex; justify-content: space-between; font-weight: 700;">
      <span>Chek kodi: ${order.id}</span>
      <span>${order.table}</span>
    </div>
    <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px;">Sana: ${new Date().toLocaleString('uz-UZ')}</div>
    
    <div style="border-top: 1px dashed var(--border-color); padding-top: 10px;">
      ${order.items.map(item => `
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
          <span>${item.qty}x ${item.name}</span>
          <span>${(item.price * item.qty).toLocaleString()} UZS</span>
        </div>
      `).join('')}
    </div>

    <div style="border-top: 1px dashed var(--border-color); margin-top: 10px; padding-top: 10px; font-weight: 800; font-size: 16px; display: flex; justify-content: space-between; color: var(--accent-amber);">
      <span>JAMI TO'LOV:</span>
      <span>${order.total.toLocaleString()} UZS</span>
    </div>
  `;

  modal.classList.add('active');
}

function closeReceiptModal() {
  document.getElementById('receipt-modal').classList.remove('active');
}

function printReceipt() {
  window.print();
}

function openNewOrderModal() {
  switchView('pos');
}

// Menu & Stock Management Table
function renderMenuManagement() {
  const tbody = document.getElementById('menu-management-tbody');
  if (!tbody) return;

  tbody.innerHTML = menuData.map(dish => `
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 14px 20px; display: flex; align-items: center; gap: 12px;">
        <div style="width: 36px; height: 36px; border-radius: 6px; background: ${dish.color}; display: flex; align-items: center; justify-content: center; font-size: 18px;">
          ${dish.icon}
        </div>
        <strong>${dish.name}</strong>
      </td>
      <td style="padding: 14px 20px; color: var(--text-muted);">${dish.category}</td>
      <td style="padding: 14px 20px; font-weight: 700; color: var(--accent-amber);">${dish.price.toLocaleString()} UZS</td>
      <td style="padding: 14px 20px;">
        <span style="padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 700; background: ${dish.available ? 'var(--status-ready-bg)' : 'var(--status-delivered-bg)'}; color: ${dish.available ? 'var(--status-ready)' : 'var(--text-muted)'};">
          ${dish.available ? 'Mavjud' : 'Tugagan'}
        </span>
      </td>
      <td style="padding: 14px 20px; text-align: right;">
        <button class="btn-secondary" onclick="toggleDishAvailability(${dish.id})">
          ${dish.available ? 'Tugadi deb belgilash' : 'Mavjud qilish'}
        </button>
      </td>
    </tr>
  `).join('');
}

function toggleDishAvailability(id) {
  const dish = menuData.find(d => d.id === id);
  if (dish) {
    dish.available = !dish.available;
    renderMenuManagement();
    renderPosMenu();
  }
}

function openAddDishModal() {
  document.getElementById('add-dish-modal').classList.add('active');
}

function closeAddDishModal() {
  document.getElementById('add-dish-modal').classList.remove('active');
}

function saveNewDish(e) {
  e.preventDefault();
  const name = document.getElementById('dish-name').value;
  const category = document.getElementById('dish-category').value;
  const price = parseFloat(document.getElementById('dish-price').value);

  const icons = {
    "Milliy Taomlar": "🍲",
    "Kabablar": "🍢",
    "Sho'rbalar": "🥣",
    "Salatlar": "🥗",
    "Ichimliklar": "🥤"
  };

  const newDish = {
    id: menuData.length + 1,
    name: name,
    category: category,
    price: price,
    available: true,
    icon: icons[category] || "🍽️",
    color: "linear-gradient(135deg, #f59e0b, #d97706)",
    salesCount: 0
  };

  menuData.push(newDish);
  renderMenuManagement();
  renderPosCategories();
  renderPosMenu();
  closeAddDishModal();
  document.getElementById('add-dish-form').reset();
}
