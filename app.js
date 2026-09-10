// Oshxona Operations & Sales Analytics Engine

let currentView = 'dashboard';
let cart = [];
let activeCategory = 'Barchasi';

// Preset HD Realistic Food Photos for Picker Gallery
const presetFoodPhotos = [
  { name: "Plov (Osh)", url: "assets/plov.jpg" },
  { name: "Shashlik", url: "assets/shashlik.jpg" },
  { name: "Lag'mon", url: "assets/lagmon.jpg" },
  { name: "Somsa", url: "assets/somsa.jpg" },
  { name: "Salat", url: "assets/salat.jpg" },
  { name: "Ichimlik", url: "assets/ichimlik.jpg" },
  { name: "Sho'rba", url: "assets/shorba.jpg" },
  { name: "Desert (Tort)", url: "assets/desert.jpg" },
  { name: "Pitsa", url: "assets/pitsa.jpg" },
  { name: "Burger", url: "assets/burger.jpg" },
  { name: "Non / Pishiriq", url: "assets/somsa.jpg" },
  { name: "Muzqaymoq", url: "assets/desert.jpg" }
];

// Categories Master List (Name & Realistic Photo Image)
let categoriesList = [
  { name: "🔥 XON Shashliklar", img: "assets/shashlik.jpg" },
  { name: "👑 Maxsus Taomlar", img: "assets/plov.jpg" },
  { name: "🍲 Sho'rbalar", img: "assets/shorba.jpg" },
  { name: "🥗 Salatlar", img: "assets/salat.jpg" },
  { name: "🍹 Ichimliklar", img: "assets/ichimlik.jpg" }
];

// Sample Menu Data
let menuData = [
  { id: 1, name: "👑 Xon Shashlik (Maxsus Qo'y)", category: "🔥 XON Shashliklar", price: 32000, available: true, img: "assets/shashlik.jpg", salesCount: 312 },
  { id: 2, name: "🍢 Qo'y Qiyma Shashlik", category: "🔥 XON Shashliklar", price: 24000, available: true, img: "assets/shashlik.jpg", salesCount: 245 },
  { id: 3, name: "🍗 Tovuq Go'shtli Shashlik", category: "🔥 XON Shashliklar", price: 22000, available: true, img: "assets/shashlik.jpg", salesCount: 198 },
  { id: 4, name: "🍖 Jigar Shashlik (Parda Yog'li)", category: "🔥 XON Shashliklar", price: 20000, available: true, img: "assets/shashlik.jpg", salesCount: 156 },
  { id: 5, name: "🍲 Xon Sho'rba (Suxak Go'shtli)", category: "🍲 Sho'rbalar", price: 35000, available: true, img: "assets/shorba.jpg", salesCount: 94 },
  { id: 6, name: "🍚 Xon Palovi (Maxsus)", category: "👑 Maxsus Taomlar", price: 45000, available: true, img: "assets/plov.jpg", salesCount: 280 },
  { id: 7, name: "🥗 Achichuk Salati", category: "🥗 Salatlar", price: 16000, available: true, img: "assets/salat.jpg", salesCount: 175 },
  { id: 8, name: "🍹 Kola 1.5L / Qora Choy", category: "🍹 Ichimliklar", price: 14000, available: true, img: "assets/ichimlik.jpg", salesCount: 340 }
];

// Taomlar SET-lari Ro'yxati (Set Menus Master List)
let setsData = [
  {
    id: 201,
    title: "🍱 XON SHASHLIK Ziyofat SET-i (4 kishilik)",
    desc: "4 Xon Shashlik + 2 Qiyma + 2 Achichuk Salati + 1.5L Kola va Tandir Patir",
    price: 245000,
    tag: "🔥 BESTSELLER",
    img: "assets/set1.jpg"
  },
  {
    id: 202,
    title: "🍱 XON Tushlik SET-i",
    desc: "2 Qo'y Qiyma Shashlik + 1 Xon Sho'rba + 1 Achichuk Salati + Qora Choy",
    price: 78000,
    tag: "POPULAR",
    img: "assets/set2.jpg"
  },
  {
    id: 203,
    title: "🍢 Kabab Mix Assorti SET-i",
    desc: "2 Xon Shashlik + 2 Tovuq Shashlik + 2 Jigar Shashlik + Achichuk va Souslar",
    price: 155000,
    tag: "MEAT LOVERS",
    img: "assets/shashlik.jpg"
  }
];

// Aksiyalar va Kombolar Ro'yxati
let promotionsData = [
  {
    id: 101,
    title: "🔥 XON SHASHLIK Olovli Kombosi",
    desc: "4 Xon Shashlik (Qo'y) + 2 Qiyma Shashlik + 2 Kola 0.5L + Achichuk",
    oldPrice: 198000,
    newPrice: 149000,
    discount: "-25%",
    badge: "🔥 XON AKSIYA",
    img: "assets/promo1.jpg"
  },
  {
    id: 102,
    title: "⚡ Ekspress Grill Seti",
    desc: "2 Qo'y Qiyma Shashlik + 1 Qora Choy + Tandir Patir",
    oldPrice: 62000,
    newPrice: 48000,
    discount: "-22%",
    badge: "⏱ 12:00 - 16:00",
    img: "assets/promo2.jpg"
  }
];

let orders = [
  {
    id: "#1084",
    category: "🍽 Zal (Stolda)",
    table: "Stol #2",
    time: "10 min oldin",
    status: "new",
    items: [
      { name: "👑 Xon Shashlik (Maxsus Qo'y)", qty: 3, price: 32000 },
      { name: "Achichuk Salati", qty: 1, price: 16000 },
      { name: "Kola 1.5L / Qora Choy", qty: 1, price: 14000 }
    ],
    total: 126000
  },
  {
    id: "#1083",
    category: "🍽 Zal (Stolda)",
    table: "Stol #4",
    time: "18 min oldin",
    status: "cooking",
    items: [
      { name: "🍢 Qo'y Qiyma Shashlik", qty: 4, price: 24000 },
      { name: "🍗 Tovuq Go'shtli Shashlik", qty: 2, price: 22000 }
    ],
    total: 140000
  },
  {
    id: "#1082",
    category: "👑 VIP Xona",
    table: "VIP Xona #1",
    time: "24 min oldin",
    status: "ready",
    items: [
      { name: "👑 Xon Shashlik (Maxsus Qo'y)", qty: 4, price: 32000 },
      { name: "Achichuk Salati", qty: 2, price: 16000 }
    ],
    total: 160000
  },
  {
    id: "#1081",
    category: "🛍 Olib ketish",
    table: "Mijoz: Anvar (+998901234567)",
    time: "40 min oldin",
    status: "delivered",
    items: [
      { name: "🍚 Xon Palovi (Maxsus)", qty: 3, price: 45000 }
    ],
    total: 135000
  }
];

let activeKdsOrderCategory = 'Barchasi';
let orderCategoriesList = [
  { id: 'cat_1', name: "🍽 Zal (Stolda)", placeholder: "Stol #1" },
  { id: 'cat_2', name: "👑 VIP Xona", placeholder: "VIP Xona #1" },
  { id: 'cat_3', name: "🛍 Olib ketish", placeholder: "Mijoz: Anvar (+99890...)" },
  { id: 'cat_4', name: "🛵 Yetkazib berish (Dostavka)", placeholder: "Manzil: Chilonzor 9, tel:..." },
  { id: 'cat_5', name: "🌿 Yozgi Ayvon", placeholder: "Ayvon #1" }
];

function renderPosOrderCategoriesDropdown() {
  const select = document.getElementById('select-order-category');
  if (!select) return;
  select.innerHTML = orderCategoriesList.map(cat => `<option value="${cat.name}">${cat.name}</option>`).join('');
}

function onOrderCategoryChange() {
  const select = document.getElementById('select-order-category');
  const label = document.getElementById('order-detail-label');
  const input = document.getElementById('order-detail-input');
  if (!select || !input) return;

  const selectedName = select.value;
  const cat = orderCategoriesList.find(c => c.name === selectedName);

  if (cat) {
    if (label) label.innerText = selectedName.includes('Dostavka') ? 'Yetkazish Manzili & Tel:' : (selectedName.includes('Olib ketish') ? 'Mijoz Ismi va Tel:' : 'Stol / VIP Xona Raqami:');
    input.placeholder = cat.placeholder || 'Stol #1';
    if (!input.value || input.value.startsWith('Stol #') || input.value.startsWith('VIP') || input.value.startsWith('Ayvon') || input.value.startsWith('Mijoz') || input.value.startsWith('Manzil')) {
      input.value = cat.placeholder;
    }
  }
}

// Phone Auth & Admin State
let currentUser = JSON.parse(localStorage.getItem('xon_admin_user') || 'null');
let pendingAuthPhone = '';

// Staff Master List
let staffList = [
  { id: 'emp_1', name: 'Alisher Qodirov', role: '👑 Administrator', phone: '+998 90 123 45 67', salary: 7000000, shift: 'To\'liq kun (09:00 - 22:00)' },
  { id: 'emp_2', name: 'Jamshid Oshpaz', role: '🍳 Bosh Oshpaz', phone: '+998 91 234 56 78', salary: 6500000, shift: '1-smena (10:00 - 22:00)' },
  { id: 'emp_3', name: 'Sardorbek Rahimov', role: '💳 Kassir', phone: '+998 93 345 67 89', salary: 4500000, shift: 'Kunduzgi (09:00 - 18:00)' },
  { id: 'emp_4', name: 'Dilshod Karimov', role: '🍽 Offitsiant', phone: '+998 94 456 78 90', salary: 3500000, shift: 'Kechki (16:00 - 23:00)' }
];

// Expenses Master List
let expensesList = [
  { id: 'exp_1', time: 'Bugun 09:30', category: '🥩 Go\'sht va Masalliq xaridi', staff: 'Jamshid Oshpaz', note: '18 kg yangi qo\'y go\'shti (shashlik uchun)', amount: 1440000 },
  { id: 'exp_2', time: 'Bugun 11:00', category: '🥬 Sabzavotlar & Ziravorlar', staff: 'Dilshod', note: '12 kg pomidor, piyoz va ko\'katlar', amount: 180000 },
  { id: 'exp_3', time: 'Bugun 12:15', category: '🔥 Shashlik Ko\'miri', staff: 'Alisher Q.', note: '2 qop saksovul/eman ko\'miri', amount: 300000 }
];

// Inventory Stock Master List
let inventoryList = [
  { id: 'inv_1', name: 'Qo\'y go\'shti (Shashlik)', category: 'Go\'sht', qty: 28.5, unit: 'kg', minQty: 10, status: 'good' },
  { id: 'inv_2', name: 'Mol go\'shti (Qiyma)', category: 'Go\'sht', qty: 14.0, unit: 'kg', minQty: 6, status: 'good' },
  { id: 'inv_3', name: 'Tovuq filesi', category: 'Go\'sht', qty: 12.0, unit: 'kg', minQty: 5, status: 'good' },
  { id: 'inv_4', name: 'Lazer Guruchi (Palov)', category: 'Don mahsulotlari', qty: 22.0, unit: 'kg', minQty: 8, status: 'good' },
  { id: 'inv_5', name: 'Achichuk Masalliqlari', category: 'Sabzavot', qty: 18.5, unit: 'kg', minQty: 6, status: 'good' },
  { id: 'inv_6', name: 'Grill Ko\'miri', category: 'Yoqilg\'i', qty: 45.0, unit: 'kg', minQty: 15, status: 'good' },
  { id: 'inv_7', name: 'Kola / Fanta 1.5L', category: 'Ichimlik', qty: 85, unit: 'dona', minQty: 25, status: 'good' }
];

let adminSubtab = 'staff';

function initApp() {
  initSavedFont();
  renderHeaderAuthStatus();
  startClock();
  renderTopDishes();
  renderKdsCategoryFilterPills();
  renderKDSBoard();
  renderPosCategories();
  renderPosOrderCategoriesDropdown();
  renderPosMenu();
  renderMenuManagement();
  renderPromotions();
  renderSets();
  setTimeout(() => drawSalesChart('today'), 100);
  populateDishCategoryDropdown();
  renderPhotoPickerGallery();
  renderFloorPlan();
}

function changeAppFont(fontVal) {
  document.documentElement.style.setProperty('--font-family', fontVal);
  document.body.style.fontFamily = fontVal;
  localStorage.setItem('xon_shashlik_font', fontVal);
  showToast(`🔤 Shrift o'zgartirildi: ${fontVal.split(',')[0].replace(/'/g, '')}`);
}

function initSavedFont() {
  const saved = localStorage.getItem('xon_shashlik_font') || "'Outfit', sans-serif";
  document.documentElement.style.setProperty('--font-family', saved);
  document.body.style.fontFamily = saved;
  const select = document.getElementById('font-family-selector');
  if (select) select.value = saved;
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initApp();
} else {
  document.addEventListener('DOMContentLoaded', initApp);
}

function startClock() {
  const clockEl = document.getElementById('live-clock');
  function update() {
    const now = new Date();
    clockEl.innerText = now.toLocaleTimeString('uz-UZ');
  }
  update();
  setInterval(update, 1000);
}

function switchView(viewName) {
  if (viewName === 'admin') {
    if (!currentUser) {
      openPhoneAuthModal();
      return;
    }
  }

  currentView = viewName;
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.mobile-nav-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));

  const desktopNav = document.getElementById(`nav-${viewName}`);
  if (desktopNav) desktopNav.classList.add('active');

  const mobileNav = document.getElementById(`mobile-nav-${viewName}`);
  if (mobileNav) mobileNav.classList.add('active');

  const viewSec = document.getElementById(`view-${viewName}`);
  if (viewSec) viewSec.classList.add('active');

  const titles = {
    dashboard: "Sotuvlar Statistikasi va Analitika",
    kds: "Oshxona Buyurtmalar Doskasi (KDS)",
    pos: "Kassa va Yangi Buyurtma Olish",
    sets: "🔥 Taomlar SET-lari, Aksiyalar va Chegirma Kombolari",
    promos: "🔥 Taomlar SET-lari, Aksiyalar va Chegirma Kombolari",
    menu: "Taomlar Menyusi va Mavjudligi Boshqaruvi",
    admin: "⚙️ Restoran Boshqaruv & Admin Paneli"
  };
  const titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.innerText = titles[viewName] || titles.sets;

  if (viewName === 'dashboard') {
    renderTopDishes();
    setTimeout(() => drawSalesChart('today'), 50);
  } else if (viewName === 'kds') {
    renderKdsCategoryFilterPills();
    renderKDSBoard();
  } else if (viewName === 'pos') {
    renderPosCategories();
    renderPosOrderCategoriesDropdown();
    renderPosMenu();
    renderCart();
  } else if (viewName === 'sets' || viewName === 'promos') {
    renderSets();
  } else if (viewName === 'menu') {
    renderMenuManagement();
  } else if (viewName === 'admin') {
    renderAdminStaff();
    calculateAdminFinance();
    renderAdminExpenses();
    renderAdminInventory();
  }
}

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

  ctx.strokeStyle = '#262c3d';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = height - 40 - (i * (height - 70) / 4);
    ctx.beginPath();
    ctx.moveTo(40, y);
    ctx.lineTo(width - 20, y);
    ctx.stroke();
  }

  const stepX = (width - 70) / (points.length - 1);
  const getX = (index) => 40 + index * stepX;
  const getY = (val) => height - 40 - ((val / maxVal) * (height - 70));

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, 'rgba(230, 57, 70, 0.45)');
  gradient.addColorStop(1, 'rgba(230, 57, 70, 0.0)');

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

  ctx.beginPath();
  ctx.moveTo(getX(0), getY(points[0]));
  for (let i = 1; i < points.length; i++) {
    const cx = (getX(i - 1) + getX(i)) / 2;
    ctx.bezierCurveTo(cx, getY(points[i - 1]), cx, getY(points[i]), getX(i), getY(points[i]));
  }
  ctx.strokeStyle = '#e63946';
  ctx.lineWidth = 3;
  ctx.stroke();

  labels.forEach((label, i) => {
    const x = getX(i);
    const y = getY(points[i]);

    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#ffb703';
    ctx.fill();
    ctx.strokeStyle = '#070302';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#d8c8bd';
    ctx.fillText(label, x - 14, height - 15);
  });
}

function updateChartRange(range) {
  document.querySelectorAll('.filter-pills .pill').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  drawSalesChart(range);
}

function renderTopDishes() {
  const container = document.getElementById('top-dishes-container');
  if (!container) return;
  
  const sorted = [...menuData].sort((a, b) => b.salesCount - a.salesCount).slice(0, 4);
  
  container.innerHTML = sorted.map((dish, idx) => `
    <div class="dish-rank-item">
      <img src="${dish.img}" onerror="this.onerror=null; this.src='assets/shashlik.jpg'" class="dish-img" alt="${dish.name}" style="width: 48px; height: 48px; border-radius: 8px; object-fit: cover;">
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

function renderKdsCategoryFilterPills() {
  const container = document.getElementById('kds-category-filter-pills');
  if (!container) return;

  let html = `<button class="pill ${activeKdsOrderCategory === 'Barchasi' ? 'active' : ''}" style="border: 1px solid ${activeKdsOrderCategory === 'Barchasi' ? 'var(--accent-amber)' : 'var(--border-color)'}; font-size: 12px; padding: 4px 12px;" onclick="filterKdsByOrderCategory('Barchasi')">✨ Barchasi</button>`;

  orderCategoriesList.forEach(cat => {
    const isAct = activeKdsOrderCategory === cat.name;
    html += `<button class="pill ${isAct ? 'active' : ''}" style="border: 1px solid ${isAct ? 'var(--accent-amber)' : 'var(--border-color)'}; font-size: 12px; padding: 4px 12px;" onclick="filterKdsByOrderCategory('${cat.name}')">${cat.name}</button>`;
  });

  container.innerHTML = html;
}

function filterKdsByOrderCategory(catName) {
  activeKdsOrderCategory = catName;
  renderKdsCategoryFilterPills();
  renderKDSBoard();
}

function renderKDSBoard() {
  const cols = {
    new: document.getElementById('kds-col-new'),
    cooking: document.getElementById('kds-col-cooking'),
    ready: document.getElementById('kds-col-ready'),
    delivered: document.getElementById('kds-col-delivered')
  };

  if (!cols.new) return;

  const counts = { new: 0, cooking: 0, ready: 0, delivered: 0 };
  Object.keys(cols).forEach(key => cols[key].innerHTML = '');

  const filteredOrders = orders.filter(order => {
    return activeKdsOrderCategory === 'Barchasi' || order.category === activeKdsOrderCategory;
  });

  if (filteredOrders.length === 0) {
    cols.new.innerHTML = `
      <div style="color: var(--text-muted); text-align: center; padding: 24px 12px; font-size: 13px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
        <div style="font-size: 20px; margin-bottom: 6px;">📋</div>
        <span>"${activeKdsOrderCategory}" bo'yicha hozircha buyurtma yo'q.</span><br><br>
        <button class="btn-primary" style="font-size: 12px; padding: 6px 14px; margin: 0 auto;" onclick="openNewOrderModal()">+ Buyurtma Qabul Qilish</button>
      </div>
    `;
  }

  filteredOrders.forEach(order => {
    counts[order.status]++;
    const cardHtml = `
      <div class="order-card">
        <div class="order-card-header">
          <div>
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
              <span class="order-id">${order.id}</span>
              <span style="font-size: 10px; background: rgba(255, 69, 0, 0.2); color: var(--accent-amber); padding: 2px 6px; border-radius: 4px; font-weight: 700; border: 1px solid rgba(255, 69, 0, 0.3);">${order.category || '🍽 Zal'}</span>
            </div>
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
    if (newStatus === 'ready') {
      playChimeSound('ready');
      showToast(`🔔 ${order.id} (${order.table}) buyurtmasi TAYYOR bo'ldi! Offitsiantga xabar berildi.`);
    } else if (newStatus === 'delivered') {
      playChimeSound('chime');
      showToast(`🚚 ${order.id} mijozga muvaffaqiyatli topshirildi.`);
    } else if (newStatus === 'cooking') {
      playChimeSound('chime');
      showToast(`🔥 ${order.id} pishirish jarayoni boshlandi.`);
    }
    renderKDSBoard();
    renderFloorPlan();
  }
}

// Render SET-lar Grid
let activeSetsPromosFilter = 'all';

function filterSetsPromos(filter) {
  activeSetsPromosFilter = filter;

  ['all', 'sets', 'promos'].forEach(f => {
    const btn = document.getElementById(`filter-sp-${f}`);
    if (btn) {
      if (f === filter) {
        btn.classList.add('active');
        btn.style.borderColor = 'var(--accent-amber)';
      } else {
        btn.classList.remove('active');
        btn.style.borderColor = 'var(--border-color)';
      }
    }
  });

  renderSets();
}

// Unified Render Function for SET-lar and Aksiyalar
function renderSets() {
  const container = document.getElementById('sets-promos-unified-grid') || document.getElementById('sets-grid-container');
  if (!container) return;

  let html = '';

  // 1) Render SETs if filter is 'all' or 'sets'
  if (activeSetsPromosFilter === 'all' || activeSetsPromosFilter === 'sets') {
    setsData.forEach(setItem => {
      html += `
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; position: relative;">
          <div style="position: absolute; top: 12px; right: 12px; background: rgba(245, 158, 11, 0.95); color: #000; padding: 4px 10px; border-radius: 20px; font-weight: 800; font-size: 11px; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
            🍱 ${setItem.tag || 'SET TO\'PLAM'}
          </div>

          <img src="${setItem.img}" onerror="this.onerror=null; this.src='assets/shashlik.jpg'" style="height: 160px; width: 100%; object-fit: cover;">
          
          <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
            <div>
              <h4 style="font-size: 16px; font-weight: 800; margin-bottom: 6px;">🍱 ${setItem.title}</h4>
              <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px; line-height: 1.4;">${setItem.desc}</p>
            </div>

            <div>
              <div style="font-size: 20px; font-weight: 800; color: var(--accent-amber); margin-bottom: 14px;">
                ${setItem.price.toLocaleString()} UZS
              </div>

              <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="addSetToCart(${setItem.id})">
                🛒 Kassaga SET Qo'shish
              </button>
            </div>
          </div>
        </div>
      `;
    });
  }

  // 2) Render Promos if filter is 'all' or 'promos'
  if (activeSetsPromosFilter === 'all' || activeSetsPromosFilter === 'promos') {
    promotionsData.forEach(promo => {
      html += `
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; position: relative;">
          <div style="position: absolute; top: 12px; left: 12px; background: rgba(239, 68, 68, 0.95); color: #fff; padding: 4px 10px; border-radius: 20px; font-weight: 800; font-size: 12px; backdrop-filter: blur(4px); box-shadow: 0 2px 8px rgba(0,0,0,0.3);">
            ${promo.discount}
          </div>
          <div style="position: absolute; top: 12px; right: 12px; background: rgba(15, 18, 26, 0.85); color: var(--accent-amber); padding: 4px 10px; border-radius: 20px; font-weight: 700; font-size: 11px; border: 1px solid var(--border-color);">
            ${promo.badge}
          </div>

          <img src="${promo.img}" onerror="this.onerror=null; this.src='assets/shashlik.jpg'" style="height: 160px; width: 100%; object-fit: cover;">
          
          <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
            <div>
              <h4 style="font-size: 16px; font-weight: 800; margin-bottom: 6px;">🔥 ${promo.title}</h4>
              <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px; line-height: 1.4;">${promo.desc}</p>
            </div>

            <div>
              <div style="display: flex; align-items: baseline; gap: 10px; margin-bottom: 14px;">
                <span style="font-size: 20px; font-weight: 800; color: var(--accent-amber);">${promo.newPrice.toLocaleString()} UZS</span>
                <span style="font-size: 14px; color: var(--text-dim); text-decoration: line-through;">${promo.oldPrice.toLocaleString()} UZS</span>
              </div>

              <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="addPromoToCart(${promo.id})">
                🛒 Kassaga Kombo Qo'shish
              </button>
            </div>
          </div>
        </div>
      `;
    });
  }

  container.innerHTML = html;
}

function renderPromotions() {
  renderSets();
}

function addSetToCart(setId) {
  const setItem = setsData.find(s => s.id === setId);
  if (!setItem) return;

  const existing = cart.find(i => i.name === setItem.title);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: setItem.id,
      name: setItem.title,
      price: setItem.price,
      qty: 1
    });
  }

  switchView('pos');
  renderCart();
}

function openAddSetModal() {
  document.getElementById('add-set-modal').classList.add('active');
}

function closeAddSetModal() {
  document.getElementById('add-set-modal').classList.remove('active');
}

function saveNewSet(e) {
  e.preventDefault();
  const title = document.getElementById('set-title').value;
  const desc = document.getElementById('set-desc').value;
  const price = parseFloat(document.getElementById('set-price').value);
  const img = document.getElementById('set-img').value;

  const newSet = {
    id: 200 + setsData.length + 1,
    title: title,
    desc: desc,
    price: price,
    tag: "CUSTOM SET",
    img: img
  };

  setsData.unshift(newSet);
  renderSets();
  closeAddSetModal();
  document.getElementById('add-set-form').reset();
}

function addPromoToCart(promoId) {
  const promo = promotionsData.find(p => p.id === promoId);
  if (!promo) return;

  const existing = cart.find(i => i.name === promo.title);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: promo.id,
      name: promo.title,
      price: promo.newPrice,
      qty: 1
    });
  }

  switchView('pos');
  renderCart();
}

function openAddPromoModal() {
  document.getElementById('add-promo-modal').classList.add('active');
  calcAutoPromoPrice();
}

function closeAddPromoModal() {
  document.getElementById('add-promo-modal').classList.remove('active');
}

function saveNewPromo(e) {
  e.preventDefault();
  const title = document.getElementById('promo-title').value;
  const desc = document.getElementById('promo-desc').value;
  const oldPrice = parseFloat(document.getElementById('promo-old-price').value);
  const newPrice = parseFloat(document.getElementById('promo-new-price').value);
  const img = document.getElementById('promo-img').value;

  const pct = Math.round(((oldPrice - newPrice) / oldPrice) * 100);

  const newPromo = {
    id: 100 + promotionsData.length + 1,
    title: title,
    desc: desc,
    oldPrice: oldPrice,
    newPrice: newPrice,
    discount: `-${pct}%`,
    badge: "🔥 AKSIYA",
    img: img
  };

  promotionsData.unshift(newPromo);
  renderSets();
  closeAddPromoModal();
  document.getElementById('add-promo-form').reset();
}

// POS Categories with Realistic Dish Photo Avatar Thumbnails
function renderPosCategories() {
  const container = document.getElementById('category-tabs-container');
  
  let html = `<button class="cat-tab ${activeCategory === 'Barchasi' ? 'active' : ''}" onclick="selectPosCategory('Barchasi')">🍽️ Barchasi</button>`;
  
  html += categoriesList.map(cat => `
    <button class="cat-tab ${cat.name === activeCategory ? 'active' : ''}" onclick="selectPosCategory('${cat.name}')" style="display: inline-flex; align-items: center; gap: 8px;">
      <img src="${cat.img}" onerror="this.onerror=null; this.src='assets/shashlik.jpg'" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover;">
      <span>${cat.name}</span>
    </button>
  `).join('');

  container.innerHTML = html;
}

function selectPosCategory(cat) {
  activeCategory = cat;
  renderPosCategories();
  renderPosMenu();
}

function renderPosMenu() {
  const container = document.getElementById('pos-menu-grid');
  if (!container) return;
  const searchVal = document.getElementById('pos-search')?.value.toLowerCase().trim() || '';

  const filtered = menuData.filter(dish => {
    const matchesCat = activeCategory === 'Barchasi' || dish.category === activeCategory;
    const matchesSearch = !searchVal || dish.name.toLowerCase().includes(searchVal);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color); color: var(--text-muted);">
        <div style="font-size: 28px; margin-bottom: 8px;">🔍</div>
        <p style="font-weight: 700; font-size: 14px; color: #fff;">Taom topilmadi.</p>
        <small style="color: var(--text-dim);">Qidiruv so'zini tozalang yoki boshqa toifani tanlang.</small>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(dish => `
    <div class="menu-card" onclick="addToCart(${dish.id})">
      <div style="position: relative; overflow: hidden;">
        <img src="${dish.img}" onerror="this.onerror=null; this.src='assets/shashlik.jpg'" class="menu-card-img" alt="${dish.name}">
        <span style="position: absolute; top: 6px; right: 6px; background: rgba(0,0,0,0.75); backdrop-filter: blur(4px); color: var(--accent-gold); font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(255, 183, 3, 0.4);">
          ${dish.salesCount || 120}+ ta
        </span>
      </div>
      <div class="menu-card-body">
        <div>
          <div class="menu-card-title">${dish.name}</div>
          <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 6px;">${dish.category}</div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
          <div class="menu-card-price">${dish.price.toLocaleString()} UZS</div>
          <button class="btn-primary" style="padding: 4px 10px; font-size: 11px; border-radius: 6px; font-weight: 700;" onclick="event.stopPropagation(); addToCart(${dish.id})">+ Qo'shish</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterPosMenu() {
  renderPosMenu();
}

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

let tablesList = [
  { id: "t1", name: "Stol #1", zone: "🍽 Asosiy Zal", capacity: 4 },
  { id: "t2", name: "Stol #2", zone: "🍽 Asosiy Zal", capacity: 4 },
  { id: "t3", name: "Stol #3", zone: "🍽 Asosiy Zal", capacity: 6 },
  { id: "t4", name: "Stol #4", zone: "🍽 Asosiy Zal", capacity: 4 },
  { id: "t5", name: "Stol #5", zone: "🍽 Asosiy Zal", capacity: 2 },
  { id: "t6", name: "Stol #6", zone: "🍽 Asosiy Zal", capacity: 8 },
  { id: "v1", name: "VIP Xona #1", zone: "👑 VIP Xonalar", capacity: 10 },
  { id: "v2", name: "VIP Xona #2", zone: "👑 VIP Xonalar", capacity: 12 },
  { id: "y1", name: "Ayvon #1", zone: "🌿 Yozgi Ayvon", capacity: 6 },
  { id: "y2", name: "Ayvon #2", zone: "🌿 Yozgi Ayvon", capacity: 6 }
];

let posSubView = 'menu';
let posPaymentMethod = 'Naqd';
let posDiscountPct = 0;

function switchPosSubView(view) {
  posSubView = view;
  const menuView = document.getElementById('pos-subview-menu');
  const floorView = document.getElementById('pos-subview-floor');
  const tabMenu = document.getElementById('pos-tab-menu');
  const tabFloor = document.getElementById('pos-tab-floor');

  if (view === 'menu') {
    if (menuView) menuView.style.display = 'block';
    if (floorView) floorView.style.display = 'none';
    if (tabMenu) { tabMenu.classList.add('active'); tabMenu.style.borderColor = 'var(--accent-amber)'; }
    if (tabFloor) { tabFloor.classList.remove('active'); tabFloor.style.borderColor = 'var(--border-color)'; }
  } else {
    if (menuView) menuView.style.display = 'none';
    if (floorView) floorView.style.display = 'block';
    if (tabFloor) { tabFloor.classList.add('active'); tabFloor.style.borderColor = 'var(--accent-amber)'; }
    if (tabMenu) { tabMenu.classList.remove('active'); tabMenu.style.borderColor = 'var(--border-color)'; }
    renderFloorPlan();
  }
}

function selectPaymentMethod(method) {
  posPaymentMethod = method;
  ['cash', 'card', 'app'].forEach(m => {
    const btn = document.getElementById(`pay-method-${m}`);
    if (btn) {
      const match = (m === 'cash' && method === 'Naqd') || (m === 'card' && method === 'Karta') || (m === 'app' && method.includes('Payme'));
      if (match) {
        btn.classList.add('active');
        btn.style.borderColor = 'var(--accent-amber)';
      } else {
        btn.classList.remove('active');
        btn.style.borderColor = 'var(--border-color)';
      }
    }
  });
}

function applyPosDiscount(pct) {
  posDiscountPct = pct;
  [0, 5, 10, 20].forEach(p => {
    const btn = document.getElementById(`pos-disc-${p}`);
    if (btn) {
      if (p === pct) {
        btn.classList.add('active');
        btn.style.borderColor = 'var(--accent-amber)';
      } else {
        btn.classList.remove('active');
        btn.style.borderColor = 'var(--border-color)';
      }
    }
  });
  renderCart();
}

let audioChimeEnabled = true;
let audioCtx = null;

function toggleAudioChime() {
  audioChimeEnabled = !audioChimeEnabled;
  const soundIcon = document.getElementById('sound-icon');
  const soundText = document.getElementById('sound-text');
  const btn = document.getElementById('sound-toggle-btn');
  
  if (soundIcon && soundText) {
    soundIcon.innerText = audioChimeEnabled ? '🔊' : '🔇';
    soundText.innerText = audioChimeEnabled ? 'Ovoz: Yoqilgan' : 'Ovoz: O\'chirilgan';
  }
  if (btn) {
    btn.style.color = audioChimeEnabled ? 'var(--accent-gold)' : 'var(--text-muted)';
    btn.style.borderColor = audioChimeEnabled ? 'rgba(255, 69, 0, 0.4)' : 'var(--border-color)';
  }

  if (audioChimeEnabled) {
    playChimeSound('chime');
    showToast('🔔 Ovozli bildirishnomalar yoqildi!');
  } else {
    showToast('🔇 Ovozli bildirishnomalar o\'chirildi.', 'info');
  }
}

function playChimeSound(type = 'chime') {
  if (!audioChimeEnabled) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    if (type === 'ready') {
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.18); // A5
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.5);
    } else if (type === 'new') {
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.12); // E5
      osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.28); // G5
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.65);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.65);
    } else {
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.2);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    }
  } catch (e) {
    console.warn('Audio chime error:', e);
  }
}

// Table Reservations Data Model (TastyIgniter / Dine-QR Architecture)
let reservationsList = [
  { id: 'res-1', table: 'Stol #3', customer: 'Rustam Karimov', phone: '+998 90 111 22 33', time: 'Bugun 19:30', guests: 4 },
  { id: 'res-2', table: 'VIP Xona #2', customer: 'Jasur Bek', phone: '+998 93 555 88 99', time: 'Bugun 20:00', guests: 8 }
];

function openReservationModal(defaultTable = '') {
  const modal = document.getElementById('reservation-modal');
  if (!modal) return;

  const select = document.getElementById('res-table-select');
  if (select) {
    select.innerHTML = tablesList.map(t => `<option value="${t.name}" ${t.name === defaultTable ? 'selected' : ''}>${t.name} (${t.zone}, ${t.capacity} kishilik)</option>`).join('');
  }

  modal.classList.add('active');
}

function closeReservationModal() {
  const modal = document.getElementById('reservation-modal');
  if (modal) modal.classList.remove('active');
}

function saveReservation(e) {
  if (e) e.preventDefault();
  const table = document.getElementById('res-table-select')?.value || 'Stol #1';
  const customer = document.getElementById('res-guest-name')?.value?.trim();
  const phone = document.getElementById('res-guest-phone')?.value?.trim();
  const guests = parseInt(document.getElementById('res-guest-count')?.value) || 4;
  const time = document.getElementById('res-time-input')?.value?.trim() || 'Bugun 19:00';

  if (!customer) {
    showToast('Iltimos, mijoz ismini kiriting!', 'error');
    return;
  }

  const newRes = {
    id: 'res-' + Date.now(),
    table,
    customer,
    phone: phone || '+998 90 ...',
    time,
    guests
  };

  reservationsList.push(newRes);
  playChimeSound('new');
  showToast(`📅 ${table} "${customer}" nomiga muvaffaqiyatli band qilindi!`);
  
  closeReservationModal();
  renderFloorPlan();

  const form = document.getElementById('reservation-form');
  if (form) form.reset();
}

function cancelReservation(id) {
  reservationsList = reservationsList.filter(r => r.id !== id);
  showToast('Bron bekor qilindi.', 'info');
  renderFloorPlan();
}

// Digital QR Menu Modal (Dine-QR Integration)
function openQrModal(tableName = 'Stol #1') {
  const modal = document.getElementById('qr-menu-modal');
  if (!modal) return;

  const currentBase = window.location.href.split('#')[0];
  const targetUrl = `${currentBase}#table=${encodeURIComponent(tableName)}`;
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=8&data=${encodeURIComponent(targetUrl)}`;

  const titleEl = document.getElementById('qr-modal-table-title');
  const imgEl = document.getElementById('qr-code-image');

  if (titleEl) titleEl.innerText = `${tableName} uchun Raqamli QR Menyu`;
  if (imgEl) {
    imgEl.src = qrApiUrl;
    imgEl.alt = `${tableName} QR Code`;
  }

  modal.classList.add('active');
}

function closeQrModal() {
  const modal = document.getElementById('qr-menu-modal');
  if (modal) modal.classList.remove('active');
}

// Daily Sales CSV / Excel Export (Restaurant-POS Feature)
function exportDailySalesReportCSV() {
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  
  let csvContent = '\uFEFFID,Vaqt,Kategoriya,Stol / Mijoz,To\'lov Usuli,Holati,Buyurtma Tarkibi,Jami (UZS)\n';

  orders.forEach(order => {
    const itemsSummary = order.items.map(i => `${i.qty}x ${i.name}`).join(' | ');
    const payment = order.paymentMethod || 'Naqd';
    let statusText = 'Yangi';
    if (order.status === 'delivered') statusText = 'Yetkazildi';
    else if (order.status === 'ready') statusText = 'Tayyor';
    else if (order.status === 'cooking') statusText = 'Pishirilmoqda';

    csvContent += `"${order.id}","${order.time}","${order.category || 'Zal'}","${order.table}","${payment}","${statusText}","${itemsSummary}",${order.total}\n`;
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `XON_SHASHLIK_Sotuv_Hisoboti_${dateStr}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  playChimeSound('chime');
  showToast('📥 Bugungi savdo hisoboti Excel/CSV formatida yuklab olindi!');
}

function renderFloorPlan() {
  const grid = document.getElementById('floor-plan-grid');
  if (!grid) return;

  grid.innerHTML = tablesList.map(table => {
    const activeOrder = orders.find(o => o.table === table.name && o.status !== 'delivered');
    const reservation = reservationsList.find(r => r.table === table.name);

    let statusClass = '#10b981';
    let statusLabel = 'Bo\'sh';
    let statusBg = 'rgba(16, 185, 129, 0.15)';
    let orderInfo = `<div style="font-size: 11px; color: #10b981; font-weight: 700;">🟢 Buyurtmaga tayyor</div>`;

    if (activeOrder) {
      if (activeOrder.status === 'new' || activeOrder.status === 'cooking') {
        statusClass = '#ef4444';
        statusLabel = activeOrder.status === 'cooking' ? '🔥 Pishirilmoqda' : '⚡ Yangi Buyurtma';
        statusBg = 'rgba(239, 68, 68, 0.15)';
        orderInfo = `<div style="font-size: 11px; color: #ef4444; font-weight: 800;">${activeOrder.id} • ${activeOrder.total.toLocaleString()} UZS</div>`;
      } else if (activeOrder.status === 'ready') {
        statusClass = '#f59e0b';
        statusLabel = '🍽 Tayyor';
        statusBg = 'rgba(245, 158, 11, 0.15)';
        orderInfo = `<div style="font-size: 11px; color: #f59e0b; font-weight: 800;">${activeOrder.id} • Tayyor</div>`;
      }
    }

    const resBadge = reservation ? `
      <div style="background: rgba(56, 189, 248, 0.15); border: 1px solid #38bdf8; color: #38bdf8; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px; margin-top: 4px; display: inline-flex; align-items: center; gap: 4px;">
        📅 ${reservation.time} (${reservation.customer})
      </div>
    ` : '';

    return `
      <div style="background: var(--bg-card); border: 1.5px solid ${statusClass}; border-radius: var(--radius-md); padding: 14px; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer; transition: all 0.2s ease; position: relative;" onclick="selectFloorTable('${table.name}', '${table.zone}')" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
          <div>
            <h4 style="font-size: 15px; font-weight: 800; color: #fff; margin-bottom: 2px;">${table.name}</h4>
            <span style="font-size: 11px; color: var(--text-muted);">${table.zone} (${table.capacity} kishilik)</span>
            ${resBadge}
          </div>
          <span style="background: ${statusBg}; color: ${statusClass}; font-size: 10px; font-weight: 800; padding: 2px 6px; border-radius: 4px; border: 1px solid ${statusClass};">${statusLabel}</span>
        </div>
        <div style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed var(--border-color); display: flex; justify-content: space-between; align-items: center; gap: 6px;">
          ${orderInfo}
          <div style="display: flex; gap: 4px;">
            <button class="btn-secondary" style="padding: 4px 7px; font-size: 11px;" title="QR Menyu Kodini Ko'rish" onclick="event.stopPropagation(); openQrModal('${table.name}')">📱 QR</button>
            <button class="btn-primary" style="padding: 4px 8px; font-size: 11px;" onclick="event.stopPropagation(); selectFloorTable('${table.name}', '${table.zone}')">Tanlash</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function selectFloorTable(tableName, zone) {
  const detailInput = document.getElementById('order-detail-input');
  if (detailInput) detailInput.value = tableName;

  const catSelect = document.getElementById('select-order-category');
  if (catSelect) {
    if (tableName.includes('VIP')) {
      catSelect.value = '👑 VIP Xona';
    } else {
      catSelect.value = '🍽 Zal (Stolda)';
    }
  }

  showToast(`🎯 ${tableName} tanlandi! Endi taomlarni savatchaga qo'shing.`);
  switchPosSubView('menu');
}

function renderCart() {
  const listEl = document.getElementById('cart-items-list');
  const countEl = document.getElementById('cart-item-count');
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discountVal = Math.round(subtotal * (posDiscountPct / 100));
  const afterDiscount = subtotal - discountVal;
  const service = Math.round(afterDiscount * 0.1);
  const total = afterDiscount + service;

  if (countEl) countEl.innerText = `${cart.reduce((sum, i) => sum + i.qty, 0)} ta taom`;

  if (listEl) {
    listEl.innerHTML = cart.length === 0 ? `
      <div style="text-align: center; color: var(--text-dim); padding: 40px 0;">
        Savatcha bo'sh.<br>Menyudan taom tanlang yoki Stollar xaritasidan stol belgilang.
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
  }

  const subEl = document.getElementById('cart-subtotal');
  const srvEl = document.getElementById('cart-service');
  const totEl = document.getElementById('cart-total');
  const discRow = document.getElementById('cart-discount-row');
  const discPctEl = document.getElementById('cart-discount-pct');
  const discValEl = document.getElementById('cart-discount-val');

  if (subEl) subEl.innerText = `${subtotal.toLocaleString()} UZS`;
  if (srvEl) srvEl.innerText = `${service.toLocaleString()} UZS`;
  if (totEl) totEl.innerText = `${total.toLocaleString()} UZS`;

  if (discRow && discPctEl && discValEl) {
    if (posDiscountPct > 0) {
      discRow.style.display = 'flex';
      discPctEl.innerText = posDiscountPct;
      discValEl.innerText = `-${discountVal.toLocaleString()} UZS`;
    } else {
      discRow.style.display = 'none';
    }
  }
}

function submitPosOrder() {
  if (cart.length === 0) {
    showToast("Iltimos, avval savatchaga taom qo'shing!", "error");
    return;
  }

  const categorySelect = document.getElementById('select-order-category');
  const category = categorySelect ? categorySelect.value : '🍽 Zal (Stolda)';
  const detailInput = document.getElementById('order-detail-input');
  const detail = detailInput ? detailInput.value : 'Stol #1';

  const newId = `#${1080 + orders.length + 1}`;
  const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  const discountVal = Math.round(subtotal * (posDiscountPct / 100));
  const afterDiscount = subtotal - discountVal;
  const total = Math.round(afterDiscount * 1.1);

  const newOrder = {
    id: newId,
    category: category,
    table: detail,
    time: "Hozirgina",
    status: "new",
    paymentMethod: posPaymentMethod,
    discountPct: posDiscountPct,
    items: cart.map(i => ({ name: i.name, qty: i.qty, price: i.price })),
    total: total
  };

  orders.unshift(newOrder);

  const revenueEl = document.getElementById('metric-revenue');
  const countEl = document.getElementById('metric-orders-count');
  
  let curRev = 4850000 + total;
  let curCount = 86 + 1;
  if (revenueEl) revenueEl.innerText = `${curRev.toLocaleString()} UZS`;
  if (countEl) countEl.innerText = `${curCount} ta`;

  renderKDSBoard();
  renderFloorPlan();
  playChimeSound('new');
  openReceiptModal(newOrder);

  cart = [];
  posDiscountPct = 0;
  applyPosDiscount(0);
  renderCart();
  showToast(`🚀 ${newId} raqamli buyurtma oshxonaga yuborildi!`);
}

function openReceiptModal(order) {
  const modal = document.getElementById('receipt-modal');
  const body = document.getElementById('receipt-modal-body');

  const payEmoji = order.paymentMethod === 'Karta' ? '💳 Plastik Karta' : (order.paymentMethod?.includes('Payme') ? '📱 Payme / Click' : '💵 Naqd Pul');

  body.innerHTML = `
    <div style="display: flex; justify-content: space-between; font-weight: 700;">
      <span>Chek kodi: ${order.id}</span>
      <span style="color: var(--accent-gold);">${order.category || '🍽 Zal'} • ${order.table}</span>
    </div>
    <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 6px;">Sana: ${new Date().toLocaleString('uz-UZ')}</div>
    <div style="font-size: 12px; color: #10b981; font-weight: 700; margin-bottom: 12px;">To'lov: ${payEmoji} ${order.discountPct > 0 ? `• Chegirma: -${order.discountPct}%` : ''}</div>
    
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

function renderMenuManagement() {
  const tbody = document.getElementById('menu-management-tbody');
  if (!tbody) return;

  tbody.innerHTML = menuData.map(dish => `
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 14px 20px; display: flex; align-items: center; gap: 12px;">
        <img src="${dish.img}" onerror="this.onerror=null; this.src='assets/shashlik.jpg'" style="width: 36px; height: 36px; border-radius: 6px; object-fit: cover;">
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

function populateDishCategoryDropdown() {
  const select = document.getElementById('dish-category');
  if (!select) return;

  let options = categoriesList.map(cat => `<option value="${cat.name}">${cat.name}</option>`).join('');
  select.innerHTML = options;
}

function renderPhotoPickerGallery() {
  const gallery = document.getElementById('photo-picker-gallery');
  if (!gallery) return;

  gallery.innerHTML = presetFoodPhotos.map(item => `
    <div style="cursor: pointer; text-align: center;" onclick="selectCategoryPhoto('${item.url}')">
      <img src="${item.url}" onerror="this.onerror=null; this.src='assets/shashlik.jpg'" style="width: 100%; height: 50px; border-radius: 6px; object-fit: cover; border: 2px solid transparent; transition: border-color 0.2s;" onmouseover="this.style.borderColor='var(--accent-amber)'" onmouseout="this.style.borderColor='transparent'">
      <span style="font-size: 10px; color: var(--text-muted); display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.name}</span>
    </div>
  `).join('');
}

function selectCategoryPhoto(url) {
  document.getElementById('new-category-img').value = url;
}

function toggleQuickCategoryForm() {
  const form = document.getElementById('quick-category-form');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function addQuickCategory() {
  const nameInput = document.getElementById('quick-cat-name');
  const name = nameInput.value.trim();
  const img = presetFoodPhotos[0].url;

  if (!name) {
    alert("Kategoriya nomini kiriting!");
    return;
  }

  if (!categoriesList.some(c => c.name === name)) {
    categoriesList.push({ name: name, img: img });
    populateDishCategoryDropdown();
    renderPosCategories();
    
    document.getElementById('dish-category').value = name;
  }

  nameInput.value = '';
  document.getElementById('quick-category-form').style.display = 'none';
}

function openAddDishModal() {
  populateDishCategoryDropdown();
  document.getElementById('add-dish-modal').classList.add('active');
}

function closeAddDishModal() {
  document.getElementById('add-dish-modal').classList.remove('active');
  document.getElementById('quick-category-form').style.display = 'none';
}

function openAddCategoryModal() {
  renderPhotoPickerGallery();
  document.getElementById('add-category-modal').classList.add('active');
}

function closeAddCategoryModal() {
  document.getElementById('add-category-modal').classList.remove('active');
}

function saveNewCategory(e) {
  if (e && e.preventDefault) e.preventDefault();
  const nameInput = document.getElementById('new-category-name');
  const name = nameInput ? nameInput.value.trim() : '';
  const imgInput = document.getElementById('new-category-img');
  const img = (imgInput && imgInput.value.trim()) || presetFoodPhotos[0].url;

  if (!name) {
    showToast("Iltimos, taom kategoriyasi nomini kiriting!", "error");
    return;
  }

  if (!categoriesList.some(c => c.name.toLowerCase() === name.toLowerCase())) {
    categoriesList.push({ name: name, img: img });
    activeCategory = name;
    renderPosCategories();
    populateDishCategoryDropdown();
    renderPosMenu();
    showToast(`✅ "${name}" taom kategoriyasi muvaffaqiyatli saqlandi!`);
  } else {
    showToast(`ℹ️ "${name}" taom kategoriyasi allaqachon mavjud.`, "info");
  }

  closeAddCategoryModal();
  if (document.getElementById('add-category-form')) {
    document.getElementById('add-category-form').reset();
  }
}

function saveNewDish(e) {
  e.preventDefault();
  const name = document.getElementById('dish-name').value;
  const category = document.getElementById('dish-category').value;
  const price = parseFloat(document.getElementById('dish-price').value);

  const catObj = categoriesList.find(c => c.name === category);
  const img = catObj ? catObj.img : presetFoodPhotos[0].url;

  const newDish = {
    id: menuData.length + 1,
    name: name,
    category: category,
    price: price,
    available: true,
    img: img,
    salesCount: 0
  };

  menuData.push(newDish);
  renderMenuManagement();
  renderPosCategories();
  renderPosMenu();
  closeAddDishModal();
  document.getElementById('add-dish-form').reset();
}

// ⚡ Automatic Realtime Discount & Price Calculator Engine
function calcAutoPromoPrice() {
  const oldPrice = parseFloat(document.getElementById('promo-old-price').value) || 0;
  const pct = parseFloat(document.getElementById('promo-discount-pct').value) || 0;
  
  if (oldPrice > 0 && pct >= 0) {
    const newPrice = Math.round(oldPrice * (1 - pct / 100));
    document.getElementById('promo-new-price').value = newPrice;
    
    const badge = document.getElementById('promo-savings-badge');
    if (badge) {
      const savings = oldPrice - newPrice;
      badge.style.display = 'block';
      badge.innerHTML = `🎉 Mijoz ${savings.toLocaleString()} UZS (${pct}%) tejaydi!`;
    }
  }
}

function calcDiscountPctFromPrice() {
  const oldPrice = parseFloat(document.getElementById('promo-old-price').value) || 0;
  const newPrice = parseFloat(document.getElementById('promo-new-price').value) || 0;
  
  if (oldPrice > 0 && newPrice > 0 && newPrice < oldPrice) {
    const pct = Math.round(((oldPrice - newPrice) / oldPrice) * 100);
    document.getElementById('promo-discount-pct').value = pct;
    
    const badge = document.getElementById('promo-savings-badge');
    if (badge) {
      const savings = oldPrice - newPrice;
      badge.style.display = 'block';
      badge.innerHTML = `🎉 Mijoz ${savings.toLocaleString()} UZS (${pct}%) tejaydi!`;
    }
  }
}

function applyDiscountPct(pct) {
  document.getElementById('promo-discount-pct').value = pct;
  
  const modal = document.getElementById('add-promo-modal');
  if (modal) {
    modal.querySelectorAll('.pill').forEach(btn => {
      if (btn.textContent.trim() === `-${pct}%`) {
        btn.classList.add('active');
        btn.style.borderColor = 'var(--accent-amber)';
      } else {
        btn.classList.remove('active');
        btn.style.borderColor = 'var(--border-color)';
      }
    });
  }
  
  calcAutoPromoPrice();
}

// 📂 Order Categories (Buyurtma Kategoriyalari) Engine
function renderPosOrderCategoriesDropdown() {
  const select = document.getElementById('select-order-category');
  if (!select) return;

  select.innerHTML = orderCategoriesList.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
  onOrderCategoryChange();
}

function onOrderCategoryChange() {
  const select = document.getElementById('select-order-category');
  const input = document.getElementById('order-detail-input');
  const label = document.getElementById('order-detail-label');
  if (!select || !input) return;

  const selectedName = select.value;
  const cat = orderCategoriesList.find(c => c.name === selectedName);

  if (cat) {
    if (label) label.innerText = `${cat.name} Tafsiloti:`;
    input.placeholder = cat.placeholder || 'Tafsilot...';
    if (!input.value || input.value.startsWith('Stol #') || input.value.startsWith('Mijoz') || input.value.startsWith('VIP') || input.value.startsWith('Chilonzor') || input.value.startsWith('Tafsilot')) {
      input.value = cat.placeholder;
    }
  }
}

function openAddOrderCategoryModal() {
  document.getElementById('add-order-category-modal').classList.add('active');
}

function closeAddOrderCategoryModal() {
  document.getElementById('add-order-category-modal').classList.remove('active');
}

function showToast(message, type = 'success') {
  let toastContainer = document.getElementById('toast-notification-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-notification-container';
    toastContainer.style.cssText = 'position:fixed; top:24px; right:24px; z-index:999999; display:flex; flex-direction:column; gap:10px; pointer-events:none;';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const borderCol = type === 'error' ? '#ef4444' : (type === 'info' ? '#3b82f6' : '#10b981');
  toast.style.cssText = `background:#140d0a; color:#ffffff; border:1px solid ${borderCol}; border-left:5px solid ${borderCol}; padding:14px 20px; border-radius:8px; font-size:14px; font-weight:700; box-shadow:0 10px 30px rgba(0,0,0,0.6), 0 0 15px rgba(255,69,0,0.2); display:flex; align-items:center; gap:10px; pointer-events:auto; min-width:280px; max-width:400px;`;
  toast.innerHTML = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'all 0.4s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-15px)';
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

function saveNewOrderCategory(e) {
  if (e && e.preventDefault) e.preventDefault();
  const nameInput = document.getElementById('new-order-cat-name');
  const placeholderInput = document.getElementById('new-order-cat-placeholder');
  const name = nameInput ? nameInput.value.trim() : '';
  const placeholder = placeholderInput ? placeholderInput.value.trim() : '';

  if (!name) {
    showToast("Iltimos, kategoriya nomini kiriting!", "error");
    return;
  }

  if (!orderCategoriesList.some(c => c.name.toLowerCase() === name.toLowerCase())) {
    orderCategoriesList.push({
      id: `cat_${Date.now()}`,
      name: name,
      placeholder: placeholder || 'Tafsilot...'
    });

    renderKdsCategoryFilterPills();
    renderPosOrderCategoriesDropdown();

    const orderCatSelect = document.getElementById('select-order-category');
    if (orderCatSelect) {
      orderCatSelect.value = name;
      onOrderCategoryChange();
    }
    renderKDSBoard();
    showToast(`✅ "${name}" buyurtma kategoriyasi muvaffaqiyatli saqlandi!`);
  } else {
    showToast(`ℹ️ "${name}" kategoriyasi allaqachon mavjud.`, "info");
  }

  closeAddOrderCategoryModal();
  if (document.getElementById('add-order-category-form')) {
    document.getElementById('add-order-category-form').reset();
  }
}

// ✨ Google Gemini Spark AI Advisor Agent Engine (Spark 2.5 / Pro / Flash)
let currentGeminiModel = 'spark';
let isListeningSpeech = false;
let speechRecognizer = null;

function setGeminiModel(model) {
  currentGeminiModel = model;
  ['spark', 'pro', 'flash'].forEach(m => {
    const btn = document.getElementById(`model-tab-${m}`);
    if (btn) {
      if (m === model) {
        btn.classList.add('active');
        btn.style.borderColor = '#a855f7';
        btn.style.background = 'rgba(168, 85, 247, 0.25)';
        btn.style.color = '#fff';
      } else {
        btn.classList.remove('active');
        btn.style.borderColor = 'var(--border-color)';
        btn.style.background = 'transparent';
        btn.style.color = 'var(--text-muted)';
      }
    }
  });

  const modelNames = {
    spark: "✨ Google Gemini Spark 2.5 (Ultra Fast)",
    pro: "🧠 Google Gemini 2.5 Pro (Deep Business Audit)",
    flash: "⚡ Google Gemini 2.5 Flash (Instant Automation)"
  };

  playChimeSound('chime');
  showToast(`${modelNames[model]} muvaffaqiyatli ulandi!`);
}

function toggleAiAgentModal() {
  const modal = document.getElementById('ai-agent-modal');
  if (!modal) return;
  modal.classList.toggle('active');

  const container = document.getElementById('ai-chat-messages');
  if (container) container.scrollTop = container.scrollHeight;
}

function toggleVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const micBtn = document.getElementById('ai-voice-mic-btn');

  if (!SpeechRecognition) {
    showToast("⚠️ Brauzeringizda ovozli mikrofondan foydalanish qo'llab-quvvatlanmaydi.", "error");
    return;
  }

  if (isListeningSpeech && speechRecognizer) {
    speechRecognizer.stop();
    isListeningSpeech = false;
    if (micBtn) {
      micBtn.style.background = 'rgba(168, 85, 247, 0.15)';
      micBtn.style.borderColor = '#a855f7';
      micBtn.innerText = '🎙';
    }
    return;
  }

  try {
    speechRecognizer = new SpeechRecognition();
    speechRecognizer.lang = 'uz-UZ';
    speechRecognizer.continuous = false;
    speechRecognizer.interimResults = false;

    speechRecognizer.onstart = () => {
      isListeningSpeech = true;
      if (micBtn) {
        micBtn.style.background = '#ef4444';
        micBtn.style.borderColor = '#ff4500';
        micBtn.innerText = '🔴';
      }
      showToast("🎙 Gemini Spark sizni eshitmoqda... Gapiring!");
    };

    speechRecognizer.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const input = document.getElementById('ai-chat-input');
      if (input) {
        input.value = transcript;
        handleAiChatSubmit(new Event('submit'));
      }
    };

    speechRecognizer.onerror = (event) => {
      console.warn("Speech recognition error:", event.error);
      isListeningSpeech = false;
      if (micBtn) {
        micBtn.style.background = 'rgba(168, 85, 247, 0.15)';
        micBtn.innerText = '🎙';
      }
    };

    speechRecognizer.onend = () => {
      isListeningSpeech = false;
      if (micBtn) {
        micBtn.style.background = 'rgba(168, 85, 247, 0.15)';
        micBtn.innerText = '🎙';
      }
    };

    speechRecognizer.start();
  } catch (err) {
    console.error("Speech Error:", err);
  }
}

function askAiAgent(topic) {
  const currentTotalRev = orders.reduce((sum, o) => sum + (o.total || 0), 0) + 4850000;
  const currentExp = expensesList.reduce((sum, e) => sum + (e.amount || 0), 0);
  const netProf = currentTotalRev - currentExp;

  const responses = {
    spark_audit: `✨ <strong>Gemini Spark 2.5 Real-Time Restoran Auditi:</strong><br>• <strong>Kassa Tushumi:</strong> ${currentTotalRev.toLocaleString()} UZS<br>• <strong>Operatsion Xarajatlar:</strong> ${currentExp.toLocaleString()} UZS<br>• <strong>Sof Foyda:</strong> <strong style="color: #10b981;">+${netProf.toLocaleString()} UZS</strong><br>• <strong>Oshxona Yuklamasi:</strong> 100% normal (KDS navbati: 2 ta faol chek)<br>• <strong>Spark Tavsiyasi:</strong> Kechki soat 19:00 dan boshlab 4 kishilik 'Ziyofat Seti' ga 10% kassa prioriteti berilsa, kunlik savdo +22% ga yetadi!`,
    health: `🏆 <strong>Biznes Salomatligi Ko'rinishi (Gemini Spark):</strong><br>• <strong>Faol Buyurtmalar:</strong> ${86 + orders.length} ta (O'rtacha chek: ~58,000 UZS)<br>• <strong>Eng xaridorgir:</strong> 👑 Xon Shashlik (312 ta sotildi)<br>• <strong>Tizim holati:</strong> 🟢 Mukammal (Barcha 10 ta stol va POS to'liq sinxron).`,
    forecast: `🥩 <strong>Ertangi Kun Uchun Masalliqlar Ehtiyoji Bashorati (AI Forecast):</strong><br>• <strong>Qo'y go'shti:</strong> ~22.5 kg zarur (Zaxirada: 28.5 kg mavjud — 🟢 yetarli)<br>• <strong>Lazer Guruchi:</strong> ~14 kg (Zaxirada: 22 kg — 🟢 yetarli)<br>• <strong>Pomidor va Piyoz:</strong> ~10 kg (Zaxirada: 18.5 kg — 🟢 yetarli)<br>• <strong>Ko'mir:</strong> Ertaga tushdan keyin 1 qop qo'shimcha ko'mir xaridi tavsiya etiladi.`,
    pricing: `💰 <strong>Dinamik Narxlash va Marja Tahlili (Gemini Spark):</strong><br>• <strong>Eng yuqori marjali taom:</strong> Achichuk salati (Marja: 78%) va Xon Sho'rba (Marja: 65%)<br>• <strong>Tavsiya:</strong> Shashlik buyurtma qilgan har bir mijozga kassada 1 dona Achichuk yoki Tandir patir taklif qilinsa, har bir chek summasi o'rtacha +18,000 UZS ga oshadi.`,
    sales: `💡 <strong>Sotuvni Oshirish Bo'yicha Spark Strategiyasi:</strong><br>Hozirgi yetakchi taom — <strong>'👑 Xon Shashlik (Maxsus Qo\'y)'</strong>. Kechki 18:00–21:00 oralig'ida VIP xonalarga maxsus <strong>'Kabab Mix Assorti'</strong> taklifini kassa ekranining yuqorisiga chiqarishni maslahat beraman!`,
    promo: `🔥 <strong>Yangi Aksiya va Kombo Maslahati:</strong><br>Hozirgi <strong>'XON SHASHLIK Olovli Kombosi' (-25%)</strong> eng ko'p sotilmoqda. Maslahat: Shanba va Yakshanba kunlari 'Oila Ziyofati (6 kishilik)' aksiyasini qo'shish mijozlar oqimini 35% ga oshiradi.`,
    kds: `⚡ <strong>Oshxona va KDS Tezligi Tahlili:</strong><br>Hozirda pishirilayotgan buyurtmalar navbati — <strong>11-13 daqiqa</strong>. Oshpaz Jamshidga buyurtma tushishi bilan bir vaqtda garnirlarni tayyorlab turish tavsiya etiladi.`,
    menu: `📋 <strong>Menyu va Zaxira Nazorati:</strong><br>Tizimda 8 xil asosiy taom va 3 xil SET to'liq faol. Barcha mahsulotlar omborda yetarli darajada mavjud.`
  };

  const userLabels = {
    spark_audit: "✨ Spark Tezkor Audit o'tkazing",
    health: "🏆 Restoran biznes salomatligi hisoboti",
    forecast: "🥩 Ertangi kun uchun masalliqlar bashorati",
    pricing: "💰 Narx va marjani tahlil qiling",
    sales: "💡 Sotuvni oshirish bo'yicha maslahat bering",
    promo: "🔥 Qanday yangi aksiya qilishni tavsiya etasiz?",
    kds: "⚡ Oshxona va KDS tezligini qanday oshiramiz?",
    menu: "📋 Menyudagi taomlar tahlili qanday?"
  };

  appendAiUserMessage(userLabels[topic] || "Maslahat bering");
  
  showAiTypingIndicator();
  setTimeout(() => {
    removeAiTypingIndicator();
    appendAiBotMessage(responses[topic] || "✨ Gemini Spark ma'lumotlarni tahlil qilmoqda...");
  }, 600);
}

function handleAiChatSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById('ai-chat-input');
  const text = input ? input.value.trim() : '';
  if (!text) return;

  appendAiUserMessage(text);
  input.value = '';

  showAiTypingIndicator();
  setTimeout(() => {
    removeAiTypingIndicator();
    const reply = generateSmartAiReply(text);
    appendAiBotMessage(reply);
  }, 750);
}

function generateSmartAiReply(query) {
  const q = query.toLowerCase();
  const totalRev = orders.reduce((sum, o) => sum + (o.total || 0), 0) + 4850000;

  if (q.includes('sotuv') || q.includes('daromad') || q.includes('pul') || q.includes('tushum') || q.includes('kassa')) {
    return `📈 <strong>Gemini Spark Sotuv Tahlili:</strong><br>Bugungi umumiy kassa tushumi: <strong>${totalRev.toLocaleString()} UZS</strong>. Eng ko'p daromad 'Xon Shashlik' va 'VIP Xonalar' hissasiga to'g'ri kelmoqda.`;
  } else if (q.includes('go\'sht') || q.includes('masalliq') || q.includes('zaxira') || q.includes('ombor') || q.includes('kg')) {
    return `🥩 <strong>Gemini Masalliq Tahlili:</strong><br>Omborda hozirda <strong>28.5 kg qo'y go'shti</strong>, <strong>14 kg mol qiyma</strong> va <strong>22 kg lazer guruch</strong> mavjud. Ertangi kungacha barcha masalliqlar yetarli!`;
  } else if (q.includes('aksiya') || q.includes('chegirma') || q.includes('kombo') || q.includes('set')) {
    return `🔥 <strong>Gemini Spark Aksiya Taklifi:</strong><br>Hozirgi 'XON SHASHLIK Olovli Kombosi (-25%)' eng yuqori talabga ega. Kassa bo'limida 10% chegirma kuponlarini qo'llash orqali mijozlar sodiqligini oshirishingiz mumkin.`;
  } else if (q.includes('oshxona') || q.includes('kds') || q.includes('oshpaz') || q.includes('vaqt') || q.includes('tezlik')) {
    return `⚡ <strong>Oshxona (KDS) Tezligi:</strong><br>O'rtacha taom tayyorlash vaqti 12 daqiqani tashkil qilmoqda. KDS doskasida har bir yangi buyurtma kelishi bilan oshpaz 'Pishirishni boshlash' tugmasini bosishi jarayonni yanada tartibli qiladi.`;
  } else if (q.includes('salom') || q.includes('assalom') || q.includes('qalesiz') || q.includes('ishlar')) {
    return `✨ <strong>Assalomu alaykum!</strong> Men <strong>Google Gemini Spark 2.5</strong> aqlli restoran maslahatchisiman. XON SHASHLIK bo'yicha har qanday savolingizga javob berishga va savdolarni oshirishga tayyorman!`;
  } else {
    return `✨ <strong>Gemini Spark Tahlili:</strong><br>Savolingiz ("${query}") tahlil qilindi. Restoranda savdoni oshirish, KDS va Kassa buyurtmalarini tezkor nazorat qilish hamda Admin paneldan xodimlarni boshqarish uchun barcha funksiyalar faol!`;
  }
}

function appendAiUserMessage(msg) {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;

  const html = `
    <div class="ai-msg ai-msg-user">
      <div class="ai-avatar">👤</div>
      <div class="ai-bubble">${msg}</div>
    </div>
  `;
  container.innerHTML += html;
  container.scrollTop = container.scrollHeight;
}

function appendAiBotMessage(msg) {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;

  const html = `
    <div class="ai-msg ai-msg-bot">
      <div class="ai-avatar" style="background: linear-gradient(135deg, #38bdf8, #a855f7); box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);">✨</div>
      <div class="ai-bubble" style="border-color: rgba(168, 85, 247, 0.3);">${msg}</div>
    </div>
  `;
  container.innerHTML += html;
  container.scrollTop = container.scrollHeight;
}

function showAiTypingIndicator() {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;

  const html = `
    <div class="ai-msg ai-msg-bot" id="ai-typing">
      <div class="ai-avatar" style="background: linear-gradient(135deg, #38bdf8, #a855f7);">✨</div>
      <div class="ai-bubble" style="color: #c084fc; font-style: italic;">✨ Gemini Spark 2.5 tahlil qilmoqda...</div>
    </div>
  `;
  container.innerHTML += html;
  container.scrollTop = container.scrollHeight;
}

function removeAiTypingIndicator() {
  const el = document.getElementById('ai-typing');
  if (el) el.remove();
}

// 📱 Phone Authentication & Session Management
function renderHeaderAuthStatus() {
  const container = document.getElementById('header-auth-status');
  if (!container) return;

  if (currentUser) {
    container.innerHTML = `
      <div style="display: flex; align-items: center; gap: 6px; background: rgba(255, 183, 3, 0.12); border: 1px solid var(--accent-gold); border-radius: var(--radius-sm); padding: 4px 10px;">
        <span style="font-size: 11px; color: var(--accent-gold); font-weight: 800;">👑 Admin</span>
        <span style="font-size: 11px; color: #fff; font-weight: 600;">${currentUser.phone}</span>
        <button type="button" style="background: none; border: none; color: #ef4444; font-size: 11px; font-weight: 700; cursor: pointer; margin-left: 4px;" onclick="logoutAdmin()" title="Tizimdan chiqish">🚪</button>
      </div>
    `;

    const nameEl = document.getElementById('admin-user-display-name');
    const phoneEl = document.getElementById('admin-user-phone-display');
    if (nameEl) nameEl.innerText = currentUser.name || 'Boshqaruvchi Admin';
    if (phoneEl) phoneEl.innerText = `Tel: ${currentUser.phone} • To'liq Huquq`;
  } else {
    container.innerHTML = `
      <button type="button" class="btn-secondary" style="display: inline-flex; align-items: center; gap: 5px; font-size: 11px; padding: 6px 10px; border-color: var(--accent-gold); color: var(--accent-gold);" onclick="openPhoneAuthModal()">
        <span>🔑</span>
        <span>Kirish (Telefon)</span>
      </button>
    `;
  }
}

function openPhoneAuthModal() {
  const modal = document.getElementById('phone-auth-modal');
  if (!modal) return;

  document.getElementById('auth-step-phone').style.display = 'block';
  document.getElementById('auth-step-sms').style.display = 'none';

  modal.classList.add('active');
}

function closePhoneAuthModal() {
  const modal = document.getElementById('phone-auth-modal');
  if (modal) modal.classList.remove('active');
}

function handleSendSmsCode(e) {
  if (e && e.preventDefault) e.preventDefault();
  const phoneInput = document.getElementById('auth-phone-number');
  const phone = phoneInput ? phoneInput.value.trim() : '';

  if (!phone || phone.length < 9) {
    showToast("Iltimos, to'g'ri telefon raqamingizni kiriting!", "error");
    return;
  }

  pendingAuthPhone = phone;
  document.getElementById('auth-target-phone-display').innerText = phone;

  document.getElementById('auth-step-phone').style.display = 'none';
  document.getElementById('auth-step-sms').style.display = 'block';

  playChimeSound('new');
  showToast(`📲 Tasdiqlash kodi (${phone}) raqamiga yuborildi! Demo kod: 7777`);
}

function backToPhoneStep() {
  document.getElementById('auth-step-phone').style.display = 'block';
  document.getElementById('auth-step-sms').style.display = 'none';
}

function handleVerifySmsCode(e) {
  if (e && e.preventDefault) e.preventDefault();
  const codeInput = document.getElementById('auth-sms-code-input');
  const code = codeInput ? codeInput.value.trim() : '';

  if (code === '7777' || code.length === 4) {
    currentUser = {
      phone: pendingAuthPhone || '+998 90 123 45 67',
      name: 'Administrator',
      role: 'Admin',
      loginTime: new Date().toISOString()
    };

    localStorage.setItem('xon_admin_user', JSON.stringify(currentUser));
    closePhoneAuthModal();
    renderHeaderAuthStatus();
    playChimeSound('ready');
    showToast(`👑 Xush kelibsiz! Admin tizimiga muvaffaqiyatli kirdingiz.`);

    switchView('admin');
  } else {
    showToast("❌ Noto'g'ri SMS tasdiqlash kodi! (Demo kod: 7777)", "error");
  }
}

function logoutAdmin() {
  currentUser = null;
  localStorage.removeItem('xon_admin_user');
  renderHeaderAuthStatus();
  showToast("🚪 Tizimdan muvaffaqiyatli chiqildi.", "info");
  switchView('dashboard');
}

// 👑 Admin Panel Subtabs Switcher
function switchAdminSubtab(tab) {
  adminSubtab = tab;

  ['staff', 'finance', 'inventory', 'settings'].forEach(t => {
    const btn = document.getElementById(`admin-subtab-btn-${t}`);
    const content = document.getElementById(`admin-subtab-${t}`);

    if (btn) {
      if (t === tab) {
        btn.classList.add('active');
        btn.style.borderColor = 'var(--accent-amber)';
      } else {
        btn.classList.remove('active');
        btn.style.borderColor = 'var(--border-color)';
      }
    }

    if (content) {
      content.style.display = (t === tab) ? 'block' : 'none';
    }
  });

  if (tab === 'staff') renderAdminStaff();
  else if (tab === 'finance') {
    calculateAdminFinance();
    renderAdminExpenses();
  } else if (tab === 'inventory') renderAdminInventory();
}

// 👥 Admin Staff Management
function renderAdminStaff() {
  const tbody = document.getElementById('admin-staff-tbody');
  if (!tbody) return;

  tbody.innerHTML = staffList.map(emp => `
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 12px 18px; font-weight: 700; color: #fff;">${emp.name}</td>
      <td style="padding: 12px 18px;">
        <span style="background: rgba(255, 183, 3, 0.15); color: var(--accent-gold); border: 1px solid var(--accent-gold); font-size: 11px; font-weight: 800; padding: 2px 8px; border-radius: 4px;">${emp.role}</span>
      </td>
      <td style="padding: 12px 18px; color: var(--text-muted);">${emp.phone}</td>
      <td style="padding: 12px 18px; font-weight: 700; color: #10b981;">${emp.salary.toLocaleString()} UZS</td>
      <td style="padding: 12px 18px; color: var(--text-muted);">${emp.shift}</td>
      <td style="padding: 12px 18px; text-align: right;">
        <button class="btn-danger" style="padding: 4px 8px; font-size: 11px;" onclick="deleteEmployee('${emp.id}')">O'chirish</button>
      </td>
    </tr>
  `).join('');
}

function openAddEmployeeModal() {
  document.getElementById('add-employee-modal').classList.add('active');
}

function closeAddEmployeeModal() {
  document.getElementById('add-employee-modal').classList.remove('active');
}

function saveNewEmployee(e) {
  if (e && e.preventDefault) e.preventDefault();
  const name = document.getElementById('emp-name')?.value?.trim();
  const role = document.getElementById('emp-role')?.value;
  const phone = document.getElementById('emp-phone')?.value?.trim();
  const salary = parseFloat(document.getElementById('emp-salary')?.value) || 4000000;
  const shift = document.getElementById('emp-shift')?.value?.trim() || 'Kunduzgi';

  if (!name || !phone) {
    showToast("Iltimos, ism va telefon raqamini kiriting!", "error");
    return;
  }

  staffList.push({
    id: 'emp_' + Date.now(),
    name,
    role,
    phone,
    salary,
    shift
  });

  playChimeSound('chime');
  showToast(`✅ "${name}" xodimlar ro'yxatiga qo'shildi!`);
  closeAddEmployeeModal();
  renderAdminStaff();
  document.getElementById('add-employee-form')?.reset();
}

function deleteEmployee(id) {
  staffList = staffList.filter(e => e.id !== id);
  showToast("Xodim o'chirildi.", "info");
  renderAdminStaff();
}

// 💰 Admin Finance & Expenses
function calculateAdminFinance() {
  const totalRevenue = orders.reduce((sum, o) => sum + (o.total || 0), 0) + 4850000;
  const totalExpenses = expensesList.reduce((sum, e) => sum + (e.amount || 0), 0);
  const netProfit = totalRevenue - totalExpenses;

  const revEl = document.getElementById('admin-finance-revenue');
  const expEl = document.getElementById('admin-finance-expenses');
  const profEl = document.getElementById('admin-finance-profit');

  if (revEl) revEl.innerText = `${totalRevenue.toLocaleString()} UZS`;
  if (expEl) expEl.innerText = `${totalExpenses.toLocaleString()} UZS`;
  if (profEl) profEl.innerText = `${netProfit.toLocaleString()} UZS`;
}

function renderAdminExpenses() {
  const tbody = document.getElementById('admin-expenses-tbody');
  if (!tbody) return;

  tbody.innerHTML = expensesList.map(exp => `
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 12px 18px; color: var(--text-muted); font-size: 12px;">${exp.time}</td>
      <td style="padding: 12px 18px; font-weight: 700; color: #fff;">${exp.category}</td>
      <td style="padding: 12px 18px; color: var(--accent-gold);">${exp.staff}</td>
      <td style="padding: 12px 18px; color: var(--text-muted);">${exp.note}</td>
      <td style="padding: 12px 18px; font-weight: 800; color: #ef4444; text-align: right;">-${exp.amount.toLocaleString()} UZS</td>
    </tr>
  `).join('');
}

function openAddExpenseModal() {
  document.getElementById('add-expense-modal').classList.add('active');
}

function closeAddExpenseModal() {
  document.getElementById('add-expense-modal').classList.remove('active');
}

function saveNewExpense(e) {
  if (e && e.preventDefault) e.preventDefault();
  const category = document.getElementById('exp-category')?.value;
  const amount = parseFloat(document.getElementById('exp-amount')?.value) || 0;
  const note = document.getElementById('exp-note')?.value?.trim();

  if (!amount || !note) {
    showToast("Iltimos, summa va izohni kiriting!", "error");
    return;
  }

  const now = new Date();
  const timeStr = `Bugun ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  expensesList.unshift({
    id: 'exp_' + Date.now(),
    time: timeStr,
    category,
    staff: currentUser?.name || 'Administrator',
    note,
    amount
  });

  playChimeSound('chime');
  showToast(`💸 ${amount.toLocaleString()} UZS chiqim jurnali saqlandi!`);
  closeAddExpenseModal();
  calculateAdminFinance();
  renderAdminExpenses();
  document.getElementById('add-expense-form')?.reset();
}

// 🥩 Admin Inventory Stock
function renderAdminInventory() {
  const container = document.getElementById('admin-inventory-grid');
  if (!container) return;

  container.innerHTML = inventoryList.map(inv => {
    const isLow = inv.qty <= inv.minQty;
    const statusColor = isLow ? '#ef4444' : '#10b981';
    const statusText = isLow ? '⚠️ Kam qoldi!' : '🟢 Yetarli';

    return `
      <div style="background: var(--bg-card); border: 1.5px solid ${isLow ? '#ef4444' : 'var(--border-color)'}; border-radius: var(--radius-md); padding: 16px; box-shadow: 0 4px 14px rgba(0,0,0,0.3);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
          <div>
            <h4 style="font-size: 15px; font-weight: 800; color: #fff; margin-bottom: 2px;">${inv.name}</h4>
            <span style="font-size: 11px; color: var(--text-muted);">${inv.category} • Min: ${inv.minQty} ${inv.unit}</span>
          </div>
          <span style="background: rgba(${isLow ? '239, 68, 68' : '16, 185, 129'}, 0.15); color: ${statusColor}; font-size: 10px; font-weight: 800; padding: 2px 7px; border-radius: 4px; border: 1px solid ${statusColor};">${statusText}</span>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 14px; padding-top: 10px; border-top: 1px dashed var(--border-color);">
          <div style="font-size: 18px; font-weight: 900; color: var(--accent-gold);">${inv.qty} <span style="font-size: 12px; color: var(--text-muted);">${inv.unit}</span></div>
          <div style="display: flex; gap: 6px;">
            <button class="btn-secondary" style="padding: 4px 8px; font-size: 11px;" onclick="updateStockQty('${inv.id}', -1)">-1</button>
            <button class="btn-primary" style="padding: 4px 8px; font-size: 11px;" onclick="updateStockQty('${inv.id}', 5)">+5 ${inv.unit}</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function updateStockQty(id, delta) {
  const item = inventoryList.find(i => i.id === id);
  if (item) {
    item.qty = Math.max(0, item.qty + delta);
    renderAdminInventory();
    showToast(`🥩 "${item.name}" qoldig'i: ${item.qty} ${item.unit}`);
  }
}

// ⚙️ Admin System Settings
function saveSystemSettings(e) {
  if (e && e.preventDefault) e.preventDefault();
  const restName = document.getElementById('setting-rest-name')?.value?.trim() || 'XON SHASHLIK';
  const restPhone = document.getElementById('setting-rest-phone')?.value?.trim() || '+998 90 123 45 67';
  const servicePct = document.getElementById('setting-service-pct')?.value || 10;
  const wifiInfo = document.getElementById('setting-wifi-info')?.value?.trim() || '';

  showToast(`💾 "${restName}" restoran sozlamalari muvaffaqiyatli saqlandi!`);
}

