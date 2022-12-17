const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
  fetch('https://api.countapi.xyz/update/oasistv/25296ec6-2cfb-431f-a8a5-c1b77df42542/?amount=1')
  .then(res => res.json())
  .then(res => {
	countEl.innerHTML = res.value;
  })
}