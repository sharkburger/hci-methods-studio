(() => {
  const {readings, weeks} = window.COURSE;
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const byId = Object.fromEntries(readings.map(r => [r.id,r]));
  document.querySelector('#weeks').innerHTML = weeks.map((w,i)=>`<details class="week"><summary><span class="num">${String(i+1).padStart(2,'0')}</span><span class="week-title">${escape(w.title)}<small>${escape(w.en)}</small></span><span class="plus" aria-hidden="true">+</span></summary><div class="detail-content"><p>${escape(w.goal)}</p><div class="week-inner"><div><p class="detail-label">STUDIO PRACTICE</p><p>${escape(w.activity)}</p></div><div><p class="detail-label">READ & DISCUSS</p><ul>${w.readings.map(id=>`<li><a class="reading-jump" href="#reading-${id}">${escape(byId[id].title)}</a></li>`).join('')}</ul></div></div><p class="deliverable"><strong>Bring back:</strong> ${escape(w.deliverable)}</p></div></details>`).join('');
  document.querySelector('#readings').innerHTML = readings.map(r=>`<article class="reading" id="reading-${r.id}" data-category="${escape(r.category)}"><span class="reading-category">${escape(r.category)}</span><div><h3><a href="${escape(r.url)}">${escape(r.title)}</a></h3><p class="authors">${escape(r.authors)}</p><p>${escape(r.question)}</p><p class="exercise"><strong>Try this:</strong> ${escape(r.exercise)}</p></div><a class="reading-arrow" href="${escape(r.url)}" aria-label="Open ${escape(r.title)}">↗</a></article>`).join('');
  let category='All';
  const search=document.querySelector('#search');
  function filter(){
    let count=0;const query=search.value.trim().toLowerCase();
    readings.forEach(r=>{const show=(category==='All'||category===r.category)&&[r.title,r.authors,r.category,r.question].join(' ').toLowerCase().includes(query);document.getElementById(`reading-${r.id}`).hidden=!show;if(show)count++;});
    document.querySelector('#reading-count').textContent=count?`${count} of ${readings.length} readings`:'No readings match. Try another search or method.';
  }
  function selectCategory(next){category=next;document.querySelectorAll('.filter').forEach(b=>{const active=b.dataset.filter===category;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});}
  document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{selectCategory(b.dataset.filter);filter();}));
  search.addEventListener('input',filter);
  function revealLinkedReading(){if(location.hash.startsWith('#reading-')){selectCategory('All');search.value='';filter();requestAnimationFrame(()=>document.getElementById(location.hash.slice(1))?.scrollIntoView());}}
  window.addEventListener('hashchange',revealLinkedReading);
  filter();revealLinkedReading();
})();
