import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const products = [
  {id:1,name:'Áo thun Essential',category:'Thời trang',price:189000,old:249000,tag:'BÁN CHẠY',emoji:'👕',tone:'sand',desc:'Cotton mềm mại, thoáng mát, dễ phối đồ.'},
  {id:2,name:'Tai nghe Studio Mini',category:'Công nghệ',price:459000,old:599000,tag:'-23%',emoji:'🎧',tone:'lavender',desc:'Âm thanh rõ nét, thiết kế gọn nhẹ.'},
  {id:3,name:'Bình giữ nhiệt 500ml',category:'Gia dụng',price:159000,old:199000,tag:'MỚI',emoji:'🧴',tone:'mint',desc:'Giữ nóng và lạnh, chất liệu thép không gỉ.'},
  {id:4,name:'Túi tote Everyday',category:'Phụ kiện',price:129000,old:169000,tag:'YÊU THÍCH',emoji:'👜',tone:'peach',desc:'Tối giản, rộng rãi cho mọi hoạt động.'},
  {id:5,name:'Đèn bàn tối giản',category:'Gia dụng',price:329000,old:399000,tag:'-18%',emoji:'💡',tone:'blue',desc:'Ánh sáng dịu, phù hợp góc học tập.'},
  {id:6,name:'Đồng hồ Classic',category:'Phụ kiện',price:690000,old:850000,tag:'CAO CẤP',emoji:'⌚',tone:'rose',desc:'Kiểu dáng thanh lịch, dây đeo êm tay.'},
  {id:7,name:'Balo Daily Go',category:'Thời trang',price:389000,old:459000,tag:'BÁN CHẠY',emoji:'🎒',tone:'mint',desc:'Nhiều ngăn tiện dụng, phù hợp đi học và đi làm.'},
  {id:8,name:'Loa Bluetooth Pocket',category:'Công nghệ',price:520000,old:650000,tag:'-20%',emoji:'🔊',tone:'sand',desc:'Âm thanh sống động trong thiết kế nhỏ gọn.'}
];
const money = n => new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND',maximumFractionDigits:0}).format(n);
function App(){
 const [cart,setCart]=useState({});
 const [category,setCategory]=useState('Tất cả');
 const [search,setSearch]=useState('');
 const [sort,setSort]=useState('featured');
 const [cartOpen,setCartOpen]=useState(false);
 const [notice,setNotice]=useState('');
 const [checkout,setCheckout]=useState(false);
 const [customer,setCustomer]=useState({name:'',phone:'',address:''});
 const [mobileMenu,setMobileMenu]=useState(false);
 const categories=['Tất cả','Thời trang','Công nghệ','Gia dụng','Phụ kiện'];
 const filtered=useMemo(()=>{
  let list=products.filter(p=>(category==='Tất cả'||p.category===category)&&p.name.toLowerCase().includes(search.toLowerCase()));
  if(sort==='low') list.sort((a,b)=>a.price-b.price);
  if(sort==='high') list.sort((a,b)=>b.price-a.price);
  return list;
 },[category,search,sort]);
 const count=Object.values(cart).reduce((a,b)=>a+b,0);
 const total=products.reduce((sum,p)=>sum+p.price*(cart[p.id]||0),0);
 const add=p=>{setCart(old=>({...old,[p.id]:(old[p.id]||0)+1}));setNotice('Đã thêm '+p.name+' vào giỏ hàng');setTimeout(()=>setNotice(''),2200)};
 const change=(id,delta)=>setCart(old=>{const next={...old,[id]:Math.max(0,(old[id]||0)+delta)};if(!next[id])delete next[id];return next});
 const submitOrder=e=>{e.preventDefault();setCheckout(false);setCart({});setCustomer({name:'',phone:'',address:''});setCartOpen(false);setNotice('Đặt hàng demo thành công! Cảm ơn bạn ❤️');setTimeout(()=>setNotice(''),3500)};
 return <div className="site">
  <div className="top-strip">✨ Ưu đãi chào mừng — Miễn phí vận chuyển cho đơn từ 500.000đ</div>
  <header className="header"><a className="logo" href="#"><span className="logo-mark">M</span> MỘC<span>STORE</span></a>
   <nav className={mobileMenu?'nav show':'nav'}>{['Trang chủ','Sản phẩm','Giới thiệu','Liên hệ'].map((x,i)=><a key={x} href={i===1?'#products':'#'} onClick={()=>setMobileMenu(false)}>{x}</a>)}</nav>
   <div className="header-actions"><label className="search"><span>⌕</span><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Tìm sản phẩm..."/></label><button className="cart-btn" onClick={()=>setCartOpen(true)}>Giỏ hàng <span>{count}</span></button><button className="hamb" onClick={()=>setMobileMenu(!mobileMenu)}>☰</button></div>
  </header>
  <main>
   <section className="hero"><div className="hero-copy"><span className="eyebrow">BỘ SƯU TẬP MỚI 2026</span><h1>Mua sắm vui.<br/><em>Sống chất riêng.</em></h1><p>Những món đồ tinh tế cho cuộc sống mỗi ngày. Chọn điều bạn thích, để Mộc lo phần còn lại.</p><a href="#products" className="primary-link">Khám phá ngay <span>↗</span></a><div className="hero-meta"><span>✓ Sản phẩm chọn lọc</span><span>✓ Đổi trả dễ dàng</span></div></div><div className="hero-art"><div className="hero-circle"></div><div className="hero-product p1">👜</div><div className="hero-product p2">🎧</div><div className="hero-product p3">👕</div><div className="hero-sticker">GOOD<br/>THINGS<br/><b>INSIDE ✳</b></div><div className="hero-caption">THE EVERYDAY EDIT <span>№ 026</span></div></div></section>
   <section className="benefits"><div><b>🚚 Giao hàng toàn quốc</b><small>Nhận hàng trong 2–5 ngày</small></div><div><b>↩ Đổi trả trong 7 ngày</b><small>An tâm mua sắm</small></div><div><b>♡ Thanh toán an toàn</b><small>Bảo mật thông tin đơn hàng</small></div><div><b>☏ Hỗ trợ tận tâm</b><small>Luôn sẵn sàng giúp bạn</small></div></section>
   <section className="products-section" id="products"><div className="section-top"><div><span className="eyebrow">LỰA CHỌN CỦA BẠN</span><h2>Sản phẩm nổi bật<span>.</span></h2><p>Những món đồ được yêu thích trong tuần này.</p></div><select value={sort} onChange={e=>setSort(e.target.value)}><option value="featured">Sắp xếp: Nổi bật</option><option value="low">Giá: Thấp đến cao</option><option value="high">Giá: Cao đến thấp</option></select></div>
    <div className="filters">{categories.map(c=><button key={c} className={category===c?'active':''} onClick={()=>setCategory(c)}>{c}</button>)}</div>
    <div className="product-grid">{filtered.map(p=><article className="product-card" key={p.id}><div className={'product-image '+p.tone}><span className="product-tag">{p.tag}</span><span className="product-emoji">{p.emoji}</span><button className="heart" aria-label="Yêu thích">♡</button></div><div className="product-info"><small>{p.category}</small><h3>{p.name}</h3><p>{p.desc}</p><div className="product-bottom"><div><b>{money(p.price)}</b><del>{money(p.old)}</del></div><button onClick={()=>add(p)} aria-label={'Thêm '+p.name}>＋</button></div></div></article>)}</div>
    {filtered.length===0&&<div className="empty">Không tìm thấy sản phẩm phù hợp. Thử từ khóa khác nhé!</div>}
   </section>
   <section className="newsletter"><div><span className="eyebrow">ĐỪNG BỎ LỠ</span><h2>Điều hay ho, gửi đến bạn.</h2><p>Đăng ký nhận tin để cập nhật sản phẩm mới và ưu đãi.</p></div><form onSubmit={e=>{e.preventDefault();setNotice('Cảm ơn bạn đã đăng ký nhận tin!');e.target.reset();setTimeout(()=>setNotice(''),2500)}}><input type="email" placeholder="Email của bạn" required/><button>Đăng ký →</button></form></section>
  </main>
  <footer><a className="logo" href="#"><span className="logo-mark">M</span> MỘC<span>STORE</span></a><p>Chọn điều bạn thích. Sống theo cách của bạn.</p><small>© 2026 Mộc Store. Website demo bán hàng.</small></footer>
  {notice&&<div className="toast">{notice}</div>}
  {cartOpen&&<div className="overlay" onMouseDown={e=>{if(e.target===e.currentTarget){setCartOpen(false);setCheckout(false)}}}><aside className="cart-drawer"><div className="drawer-head"><div><span className="eyebrow">ĐƠN HÀNG CỦA BẠN</span><h2>{checkout?'Thông tin giao hàng':'Giỏ hàng'} ({count})</h2></div><button onClick={()=>{setCartOpen(false);setCheckout(false)}}>✕</button></div>
   {!checkout?<>{count===0?<div className="empty-cart"><span>🛍️</span><h3>Giỏ hàng đang trống</h3><p>Hãy chọn vài món đồ bạn yêu thích nhé.</p><button className="checkout-btn" onClick={()=>setCartOpen(false)}>Tiếp tục mua sắm</button></div>:<><div className="cart-items">{products.filter(p=>cart[p.id]).map(p=><div className="cart-item" key={p.id}><div className={'mini-product '+p.tone}>{p.emoji}</div><div className="cart-item-info"><b>{p.name}</b><small>{money(p.price)}</small><div className="qty"><button onClick={()=>change(p.id,-1)}>−</button><span>{cart[p.id]}</span><button onClick={()=>change(p.id,1)}>＋</button></div></div><strong>{money(p.price*cart[p.id])}</strong></div>)}</div><div className="cart-summary"><div><span>Tạm tính</span><b>{money(total)}</b></div><div><span>Phí vận chuyển</span><b>{total>=500000?'Miễn phí':'30.000₫'}</b></div><div className="total"><span>Tổng cộng</span><b>{money(total+(total>=500000?0:30000))}</b></div><button className="checkout-btn" onClick={()=>setCheckout(true)}>Tiến hành đặt hàng →</button><p className="demo-note">* Thanh toán đang ở chế độ demo, chưa thu tiền thật.</p></div></>}</>:<form className="checkout-form" onSubmit={submitOrder}><label>Họ và tên<input required value={customer.name} onChange={e=>setCustomer({...customer,name:e.target.value})} placeholder="Nguyễn Văn A"/></label><label>Số điện thoại<input required pattern="[0-9+ ]{9,15}" value={customer.phone} onChange={e=>setCustomer({...customer,phone:e.target.value})} placeholder="09xxxxxxxx"/></label><label>Địa chỉ nhận hàng<textarea required value={customer.address} onChange={e=>setCustomer({...customer,address:e.target.value})} placeholder="Số nhà, đường, phường/xã..."/></label><div className="checkout-total"><span>Tổng thanh toán</span><b>{money(total+(total>=500000?0:30000))}</b></div><button className="checkout-btn">Xác nhận đơn hàng demo</button><button type="button" className="back-btn" onClick={()=>setCheckout(false)}>← Quay lại giỏ hàng</button></form>}
  </aside></div>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
