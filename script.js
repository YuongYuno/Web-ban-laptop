
const IMG_MACBOOK = [
    "img/macbook-air-m1.jpg (2).jpg",
    "img/macbook-pro-14.jpg.jpg",
    "img/macbook-air-m2.jpg.jpg",
    "img/macbook-pro-16.jpg.jpg",
    "img/macbook-pro-13-m2.jpg.jpg"
];

const IMG_DELL = [
    "img/dell-xps-13.jpg.jpg",
    "img/dell-latitude-7420.jpg.jpg",
    "img/dell-inspiron-5430.jpg.jpg",
    "img/dell-precision-5550.jpg.jpg",
    "img/dell-xps-15.jpg.jpg"
];

const IMG_THINKPAD = [
    "img/thinkpad-x1-carbon-gen9.jpg.jpg",
    "img/thinkpad-t14-gen2.jpg.jpg",
    "img/thinkpad-x1-yoga-gen6.jpg.jpg",
    "img/thinkpad-p15v-gen2.jpg.jpg"
];

const IMG_GAMING = [
    "img/asus-rog-strix-g15.jpg.jpg",
    "img/acer-nitro-5.jpg.jpg",
    "img/lenovo-legion-5.jpg.png",
    "img/msi-katana-gf66.jpg.jpg",
    "img/gigabyte-g5.jpg.jpg"
];

const IMG_OFFICE = [
    "img/hp-envy-13.jpg.jpg",
    "img/hp-pavilion-15.jpg.jpg",
    "img/acer-swift-3.jpg.jpg",
    "img/asus-zenbook-14.jpg.jpg",
    "img/lg-gram-14.jpg.jpg"
];

const IMG_DOHOA = [
    "img/hp-zbook-studio-gen8.jpg.jpg",
    "img/asus-proart-studiobook-pro16.jpg.jpg",
    "img/dell-precision-7550.jpg.jpg",
    "img/thinkpad-p1-gen4.jpg.jpg"
];

const IMG_PHUKIEN = [
    "img/keyboard-logitech.jpg.jpg",
    "img/mouse-logitech-mx3s.jpg.jpg"
];

const allProducts = [
  {id:1, name:"Apple MacBook Air M1 2020 8GB/256GB Likenew", price:14500000, oldPrice:17500000, category:"macbook", badge:"Hot", img:IMG_MACBOOK[0], stock:5},
  {id:2, name:"Apple MacBook Pro 14 M1 Pro 2021 16GB/512GB Gray", price:28900000, oldPrice:32000000, category:"macbook", badge:"Sale 10%", img:IMG_MACBOOK[1], stock:3},
  {id:3, name:"Apple MacBook Air M2 2022 8GB/256GB Midnight", price:21500000, oldPrice:24500000, category:"macbook", badge:"Mới", img:IMG_MACBOOK[2], stock:4},
  {id:4, name:"Apple MacBook Pro 16 M2 Max 32GB/1TB Silver", price:45000000, oldPrice:49000000, category:"macbook", badge:"Cao cấp", img:IMG_MACBOOK[3], stock:2},
  {id:5, name:"Apple MacBook Pro 13 M2 2022 16GB/512GB Space Gray", price:25900000, oldPrice:29000000, category:"macbook", badge:"Mới", img:IMG_MACBOOK[4], stock:3},
  {id:6, name:"Dell XPS 13 9310 i7-1165G7 / 16GB / 512GB 4K Touch", price:18900000, oldPrice:22000000, category:"dell", badge:"Sale 15%", img:IMG_DELL[0], stock:4},
  {id:7, name:"Dell Latitude 7420 Core i5 1145G7 / 16GB / 256GB", price:11500000, oldPrice:14000000, category:"dell", badge:"Bền bỉ", img:IMG_DELL[1], stock:7},
  {id:8, name:"Dell Inspiron 5430 i5 1335P / 16GB / 512GB SSD", price:15200000, oldPrice:17500000, category:"dell", badge:"Mới", img:IMG_DELL[2], stock:5},
  {id:9, name:"Dell Precision 5550 Workstation i7 / 32GB / Quadro", price:23000000, oldPrice:27000000, category:"dell", badge:"Đồ họa", img:IMG_DELL[3], stock:2},
  {id:10, name:"Dell XPS 15 9520 i7 12700H / 16GB / 512GB RTX 3050Ti", price:29500000, oldPrice:34000000, category:"dell", badge:"Cao cấp", img:IMG_DELL[4], stock:3},
  {id:11, name:"Lenovo ThinkPad X1 Carbon Gen 9 i7 / 16GB / 512GB", price:16800000, oldPrice:19500000, category:"thinkpad", badge:"Doanh nhân", img:IMG_THINKPAD[0], stock:6},
  {id:12, name:"Lenovo ThinkPad T14 Gen 2 Ryzen 5 Pro / 16GB", price:12800000, oldPrice:15000000, category:"thinkpad", badge:"Sale", img:IMG_THINKPAD[1], stock:5},
  {id:13, name:"Lenovo ThinkPad X1 Yoga Gen 6 Xoay gập 360 độ", price:19500000, oldPrice:23000000, category:"thinkpad", badge:"Hot", img:IMG_THINKPAD[2], stock:3},
  {id:14, name:"Lenovo ThinkPad P15v Gen 2 Workstation i7 / 16GB / T600", price:18500000, oldPrice:21500000, category:"thinkpad", badge:"Đồ họa", img:IMG_THINKPAD[3], stock:4},
  {id:15, name:"Asus ROG Strix G15 RTX 3060 Ryzen 7 5800H / 16GB", price:21500000, oldPrice:25000000, category:"gaming", badge:"Gaming", img:IMG_GAMING[0], stock:4},
  {id:16, name:"Acer Nitro 5 Tiger RTX 3050 i5 12500H / 16GB", price:16500000, oldPrice:19000000, category:"gaming", badge:"Sale 13%", img:IMG_GAMING[1], stock:6},
  {id:17, name:"Lenovo Legion 5 RTX 3070 Ryzen 7 5800H / 16GB", price:25500000, oldPrice:29000000, category:"gaming", badge:"Hot", img:IMG_GAMING[2], stock:3},
  {id:18, name:"MSI Katana GF66 RTX 3050Ti i7 11800H / 16GB", price:17200000, oldPrice:20000000, category:"gaming", badge:"Sale", img:IMG_GAMING[3], stock:5},
  {id:19, name:"Gigabyte G5 KF RTX 4060 i5 12500H / 16GB / 512GB", price:22900000, oldPrice:26000000, category:"gaming", badge:"Mới", img:IMG_GAMING[4], stock:3},
  {id:20, name:"HP Envy 13 i5 Gen 11 / 8GB / 256GB SSD Thin Light", price:11200000, oldPrice:13500000, category:"vanphong", badge:"Mỏng nhẹ", img:IMG_OFFICE[0], stock:8},
  {id:21, name:"HP Pavilion 15 i5 1235U / 16GB / 512GB SSD", price:12500000, oldPrice:14800000, category:"vanphong", badge:"Sale", img:IMG_OFFICE[1], stock:6},
  {id:22, name:"Acer Swift 3 OLED i5 1240P / 16GB / 512GB", price:13800000, oldPrice:16500000, category:"vanphong", badge:"Mới", img:IMG_OFFICE[2], stock:4},
  {id:23, name:"Asus Zenbook 14 OLED i5 1340P / 16GB / 512GB", price:17800000, oldPrice:20500000, category:"vanphong", badge:"Hot", img:IMG_OFFICE[3], stock:5},
  {id:24, name:"LG Gram 14 2022 i5 1240P / 16GB / 512GB siêu nhẹ 999g", price:19200000, oldPrice:22500000, category:"vanphong", badge:"Siêu nhẹ", img:IMG_OFFICE[4], stock:4},
  {id:25, name:"HP ZBook Studio G8 i7 11800H / 32GB / RTX A3000", price:28000000, oldPrice:33000000, category:"dohoa", badge:"Workstation", img:IMG_DOHOA[0], stock:2},
  {id:26, name:"Asus ProArt StudioBook 16 OLED i7 / 32GB / RTX 3060", price:31500000, oldPrice:36000000, category:"dohoa", badge:"Đồ họa", img:IMG_DOHOA[1], stock:2},
  {id:27, name:"Dell Precision 7550 i7 10850H / 32GB / T2000", price:24500000, oldPrice:28500000, category:"dohoa", badge:"Đồ họa", img:IMG_DOHOA[2], stock:3},
  {id:28, name:"Lenovo ThinkPad P1 Gen 4 Xeon / 32GB / RTX A2000", price:27500000, oldPrice:32000000, category:"dohoa", badge:"Workstation", img:IMG_DOHOA[3], stock:2},
  {id:29, name: "Bàn phím cơ không dây Logitech MX Mechanical", price:2800000, oldPrice:3500000, category: "phukien", badge: "Phụ kiện", img: IMG_PHUKIEN[0], stock: 10},
  {id:30, name: "Chuột không dây Logitech MX Master 3S", price:2100000, oldPrice:2600000, category: "phukien", badge: "Hot", img: IMG_PHUKIEN[1], stock: 15}
];

let currentFilter = 'all';
let currentSort   = 'default';
let displayCount  = 8;
let currentProduct = null;
let modalQty      = 1;

let cart  = [];
let total = 0;

function badgeClass(badge) {
  if (badge.includes('Mới') || badge.includes('Mỏng') || badge.includes('Siêu nhẹ')) return 'new-badge';
  if (badge.includes('Sale') || badge.includes('Hot')) return 'sale-badge';
  if (badge.includes('Gaming') || badge.includes('Cao cấp') || badge.includes('Đồ họa') || badge.includes('Workstation')) return 'voucher-badge';
  return 'new-badge';
}

function createProductCard(p) {
  const oldP = p.oldPrice ? `<span class="price-old">${p.oldPrice.toLocaleString('vi-VN')}đ</span>` : '';
  return `
    <div class="product" data-category="${p.category}" data-price="${p.price}" onclick="openProductModal(${p.id})" style="cursor:pointer;">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" style="object-fit:cover;height:220px;width:100%;">
        <span class="badge-product ${badgeClass(p.badge)}">${p.badge}</span>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="product-price">
          <span class="price-now">${p.price.toLocaleString('vi-VN')}đ</span>
          ${oldP}
        </div>
        <button class="btn-cart" onclick="event.stopPropagation(); addToCart('${p.name.replace(/'/g,"\\'")}', ${p.price})">🛒 Thêm vào giỏ</button>
      </div>
    </div>`;
}

function renderProducts() {
  let list = [...allProducts];

  if (currentFilter !== 'all') {
    list = list.filter(p => p.category === currentFilter);
  }

  if (currentSort === 'asc')  list.sort((a,b) => a.price - b.price);
  if (currentSort === 'desc') list.sort((a,b) => b.price - a.price);

  const shown = list.slice(0, displayCount);
  const grid = document.getElementById('productGrid') || document.getElementById('product-grid');
  if (grid) {
    grid.innerHTML = shown.map(createProductCard).join('');
  }

  const btn = document.querySelector('.btn-xem-them');
  if (btn) btn.style.display = list.length > displayCount ? 'inline-block' : 'none';
}

function filter(cat) {
  currentFilter = cat;
  displayCount  = 8;
  renderProducts();
  const sec = document.querySelector('.products-section');
  if (sec) sec.scrollIntoView({behavior:'smooth'});
}

function sortProducts(val) {
  currentSort = val;
  renderProducts();
}

function xemThem() {
  displayCount += 8;
  renderProducts();
}
function searchProduct() {
  const searchInput = document.getElementById('search') || document.getElementById('search-input');
  const q = (searchInput ? searchInput.value : '').toLowerCase().trim();
  if (!q) { currentFilter = 'all'; renderProducts(); return; }

  const grid = document.getElementById('productGrid') || document.getElementById('product-grid');
  const results = allProducts.filter(p => p.name.toLowerCase().includes(q));
  if (!results.length) { alert('Không tìm thấy laptop phù hợp!'); return; }

  if (grid) grid.innerHTML = results.map(createProductCard).join('');
  const xemThemBtn = document.querySelector('.btn-xem-them');
  if (xemThemBtn) xemThemBtn.style.display = 'none';
}

function openProductModal(id) {
  const p = allProducts.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  modalQty = 1;

  const mainImg = document.getElementById('pd-main-img');
  const nameEl = document.getElementById('pd-name');
  const priceNow = document.getElementById('pd-price-now');
  const priceOld = document.getElementById('pd-price-old');
  const stockInfo = document.getElementById('pd-stock-info');
  const qtyVal = document.getElementById('pd-qty-val');

  if (mainImg) mainImg.src = p.img;
  if (nameEl) nameEl.textContent = p.name;
  if (priceNow) priceNow.textContent = p.price.toLocaleString('vi-VN') + 'đ';
  if (priceOld) priceOld.textContent = p.oldPrice ? p.oldPrice.toLocaleString('vi-VN') + 'đ' : '';
  if (stockInfo) stockInfo.textContent = p.stock + ' máy có sẵn tại cửa hàng';
  if (qtyVal) qtyVal.textContent = 1;

  const btnCart = document.getElementById('pd-btn-cart');
  const btnBuy = document.getElementById('pd-btn-buy');
  if (btnCart) btnCart.onclick = () => { addToCart(p.name, p.price); closeProductModal(); };
  if (btnBuy) btnBuy.onclick  = () => { addToCart(p.name, p.price); closeProductModal(); showCart(); };

  const modal = document.getElementById('product-detail-modal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeProductModal() {
  const modal = document.getElementById('product-detail-modal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

function changeQty(delta) {
  if (!currentProduct) return;
  modalQty = Math.max(1, Math.min(currentProduct.stock, modalQty + delta));
  const qtyVal = document.getElementById('pd-qty-val');
  if (qtyVal) qtyVal.textContent = modalQty;
}

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.textContent = cart.length;
  showToast('✅ Đã thêm "' + name + '" vào giỏ hàng');
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.textContent = cart.length;
  renderCart();
}

function renderCart() {
  const list = document.getElementById('cartItems');
  const totalEl = document.getElementById('totalPrice');
  if (!list) return;

  list.innerHTML = cart.map((item, i) => `
    <li style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid rgba(200,146,42,0.15);">
      <span style="font-size:13px; max-width: 170px;">${item.name}</span>
      <span style="display:flex;align-items:center;gap:8px;">
        <span style="color:#c8922a;font-weight:bold;">${item.price.toLocaleString('vi-VN')}đ</span>
        <button onclick="removeItem(${i})" style="background:none;border:1px solid #c8922a;color:#c8922a;border-radius:4px;padding:2px 6px;cursor:pointer;font-size:11px;">Xóa</button>
      </span>
    </li>`).join('');
  if (totalEl) totalEl.textContent = total.toLocaleString('vi-VN');
}

function showCart() {
  renderCart();
  const cartBox = document.getElementById('cartBox');
  if (cartBox) cartBox.style.display = 'block';
}

function closeCart() {
  const cartBox = document.getElementById('cartBox');
  if (cartBox) cartBox.style.display = 'none';
}

function checkout() {
  if (!cart.length) { alert('Giỏ hàng trống!'); return; }
  const isLogin = localStorage.getItem('isLogin') || localStorage.getItem('sh_current');
  if (!isLogin) {
    if (confirm('Vui lòng đăng nhập để đặt hàng. Đăng nhập ngay?')) openAuth('login');
    return;
  }
  showToast('🎉 Đặt hàng laptop thành công! Nhân viên sẽ gọi xác nhận trong 15 phút.');
  cart = []; total = 0;
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.textContent = 0;
  renderCart();
  closeCart();
}

function showToast(msg) {
  let toast = document.getElementById('sh-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'sh-toast';
    toast.style.cssText = 'position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:#1c1208;color:#e8c060;padding:12px 26px;border-radius:30px;font-size:13.5px;font-weight:bold;z-index:99999;border:1px solid rgba(200,146,42,0.4);box-shadow:0 4px 20px rgba(0,0,0,0.6);transition:opacity 0.4s;pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

let authMode = 'register';

function openAuth(mode) {
  authMode = mode;
  const modal = document.getElementById('auth-modal');
  if (modal) modal.style.display = 'flex';
  updateAuthUI();
}

function closeAuth() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.style.display = 'none';
}

function updateAuthUI() {
  const isReg = authMode === 'register';
  const title = document.getElementById('auth-title');
  const nameField = document.getElementById('reg-name-field');
  const termsGroup = document.getElementById('terms-group');
  const btnAction = document.getElementById('btn-action');
  const toggleText = document.getElementById('toggle-text');

  if (title) title.textContent = isReg ? 'Đăng ký tài khoản' : 'Đăng nhập hệ thống';
  if (nameField) nameField.style.display = isReg ? 'block' : 'none';
  if (termsGroup) termsGroup.style.display = isReg ? 'flex' : 'none';
  if (btnAction) btnAction.textContent = isReg ? 'Đăng ký' : 'Đăng nhập';
  if (toggleText) toggleText.textContent = isReg ? 'Đã có tài khoản?' : 'Chưa có tài khoản?';
}

function toggleAuth() {
  authMode = authMode === 'register' ? 'login' : 'register';
  updateAuthUI();
}

function handleAuth() {
  const emailInput = document.getElementById('auth-email');
  const passInput = document.getElementById('auth-pass');
  const email = emailInput ? emailInput.value.trim() : '';
  const pass  = passInput ? passInput.value.trim() : '';
  const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!emailOK)        { alert('Email không hợp lệ!'); return; }
  if (pass.length < 6) { alert('Mật khẩu phải từ 6 ký tự!'); return; }

  if (authMode === 'register') {
    const nameInput = document.getElementById('auth-name');
    const termsInput = document.getElementById('terms');
    const name  = nameInput ? nameInput.value.trim() : '';
    const terms = termsInput ? termsInput.checked : false;

    if (!name)  { alert('Vui lòng nhập tên của bạn!'); return; }
    if (!terms) { alert('Vui lòng đồng ý với điều khoản bảo hành!'); return; }

    const users = JSON.parse(localStorage.getItem('sh_users') || '[]');
    if (users.find(u => u.email === email)) { alert('Email này đã được đăng ký!'); return; }

    users.push({ name, email, pass });
    localStorage.setItem('sh_users', JSON.stringify(users));
    localStorage.setItem('sh_current', JSON.stringify({ name, email }));
    localStorage.setItem('isLogin', 'true');
    showToast('🎉 Đăng ký thành công! Chào mừng ' + name);
    closeAuth();
    updateHeaderUser(name);
  } else {
    const users = JSON.parse(localStorage.getItem('sh_users') || '[]');
    const user  = users.find(u => u.email === email && u.pass === pass);
    if (!user) { alert('Email hoặc mật khẩu không đúng!'); return; }

    localStorage.setItem('sh_current', JSON.stringify({ name: user.name, email }));
    localStorage.setItem('isLogin', 'true');
    showToast('👋 Đăng nhập thành công! Chào ' + user.name);
    closeAuth();
    updateHeaderUser(user.name);
  }
}

function updateHeaderUser(name) {
  document.querySelectorAll('.header-action-item').forEach(b => {
    const txt = b.textContent || b.innerText;
    if (txt.includes('Đăng nhập')) {
      b.innerHTML = `<span class="action-icon">👤</span><span>${name}</span>`;
      b.onclick = () => {
        if (confirm('Bạn muốn đăng xuất khỏi tài khoản?')) {
          localStorage.removeItem('sh_current');
          localStorage.removeItem('isLogin');
          location.reload();
        }
      };
    }
  });
}

function subscribeEmail() {
  const inp = document.getElementById('subscribe-email');
  const email = inp ? inp.value.trim() : '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ Vui lòng nhập email hợp lệ!');
    return;
  }

  const list = JSON.parse(localStorage.getItem('sh_subscribers') || '[]');
  if (list.includes(email)) { showToast('✅ Email này đã đăng ký nhận bản tin rồi!'); return; }

  list.push(email);
  localStorage.setItem('sh_subscribers', JSON.stringify(list));
  if (inp) inp.value = '';
  showToast('✈️ Đăng ký nhận bảng giá laptop thành công!');
}

const policies = {
  'dat-hang': {
    title: '📋 Hướng Dẫn Mua Laptop',
    content: `
      <p><b>Bước 1:</b> Lựa chọn mẫu laptop hoặc linh kiện phù hợp với nhu cầu và nhấn <b>"Thêm vào giỏ"</b>.</p>
      <p><b>Bước 2:</b> Kiểm tra giỏ hàng và điền thông tin nhận máy chính xác.</p>
      <p><b>Bước 3:</b> Chọn phương thức thanh toán trực tiếp hoặc qua chuyển khoản ngân hàng.</p>
      <p><b>Bước 4:</b> Nhận hàng, test máy trực tiếp với kỹ thuật viên.</p>
      <p style="color:#c8922a;margin-top:12px;">📞 Hỗ trợ tư vấn nhanh: <b>0928 613 686</b> (Huỳnh Chí Công)</p>`
  },
  'doi-tra': {
    title: '🔄 Chính Sách Bảo Hành & Đổi Trả',
    content: `
      <p><b>Thời gian bảo hành:</b> Phần cứng từ <b>6 đến 12 tháng</b>, 1 đổi 1 trong 30 ngày đầu nếu phát sinh lỗi phần cứng nghiêm trọng.</p>
      <p><b>Điều kiện đổi trả:</b></p>
      <ul style="margin-left:20px;line-height:2;">
        <li>Máy còn nguyên tem bảo hành của cửa hàng.</li>
        <li>Không bị rơi vỡ, vào nước hoặc tác động ngoại lực.</li>
      </ul>
      <p style="color:#c8922a;margin-top:12px;">📞 Hotline Kỹ thuật / Zalo: <b>0928 613 686</b></p>`
  },
  'bao-mat': {
    title: '🔒 Chính Sách Bảo Mật Thông Tin',
    content: `
      <p>Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân và dữ liệu lịch sử mua hàng của quý khách.</p>
      <ul style="margin-left:20px;line-height:2;">
        <li>Không tiết lộ thông tin khách hàng cho bên thứ ba.</li>
        <li>Bảo mật lịch sử bảo hành linh kiện và thiết bị.</li>
      </ul>`
  },
  'dieu-khoan': {
    title: '📜 Điều Khoản Sử Dụng',
    content: `
      <p>Khách hàng khi mua sắm tại hệ thống Laptop Secondhand cần tuân thủ các quy định về kiểm tra ngoại hình máy và ký biên bản nhận bàn giao thiết bị đầy đủ.</p>
      <p style="color:#c8922a;margin-top:12px;">© 2026 Laptop Secondhand. All rights reserved.</p>`
  }
};

function openPolicy(key) {
  const pol = policies[key];
  if (!pol) return;
  const titleEl = document.getElementById('policy-title');
  const bodyEl = document.getElementById('policy-body');
  const modal = document.getElementById('policy-modal');

  if (titleEl) titleEl.textContent = pol.title;
  if (bodyEl) bodyEl.innerHTML = pol.content;
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closePolicy() {
  const modal = document.getElementById('policy-modal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
}

let slideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots   = document.querySelectorAll('.dot');
  if (!slides.length) return;
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
  if (dots[slideIndex]) dots[slideIndex].classList.add('active');
}

function changeSlide(n) { showSlide(slideIndex + n); }
function goSlide(n)     { showSlide(n); }

window.addEventListener('DOMContentLoaded', () => {
  renderProducts();

  const cur = JSON.parse(localStorage.getItem('sh_current') || 'null');
  if (cur) updateHeaderUser(cur.name);

  const searchEl = document.getElementById('search') || document.getElementById('search-input');
  if (searchEl) searchEl.addEventListener('keypress', e => { if (e.key === 'Enter') searchProduct(); });

  showSlide(0);
  setInterval(() => changeSlide(1), 5000);
});