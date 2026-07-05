
let orders = JSON.parse(localStorage.getItem('orders')||'[]');
let current=null;

function calc(){
const w=+weight.value;
const t=+time.value;
const e=+price.value;

const material=w*0.02;
const elec=t*0.12*e;
const total=material+elec+0.5;
const sale=w*0.05;

current={name:name.value,weight:w,total,sale,profit:sale-total};

res.innerHTML=`Себестоимость: ${total.toFixed(2)} €<br>Прибыль: ${current.profit.toFixed(2)} €`;
}

function save(){
if(!current)return;
orders.push(current);
localStorage.setItem('orders',JSON.stringify(orders));
render();
}

function render(){
history.innerHTML=orders.map(o=>`<div>${o.name} | ${o.weight}g | ${o.profit.toFixed(2)}€</div>`).join('');
}

function show(t){
document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));
document.getElementById(t).classList.add('active');
if(t==='history')render();
}
render();
