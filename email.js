/* ===== SPAM-RESISTANT EMAIL =====
   The address never appears in the HTML. Each button carries the two
   halves of it written BACKWARDS:

     <button class="email-reveal" data-u="sj" data-h="moc.orotnasessej">

   Clicking assembles the real address and swaps the button for a normal
   mailto link. Spam harvesters read the raw HTML looking for
   "something@something.com" and don't click buttons, so they never see it.

   To change the address, reverse each half: user "js" -> "sj",
   domain "jessesantoro.com" -> "moc.orotnasessej".                        */

document.querySelectorAll('.email-reveal').forEach(btn => {
  btn.addEventListener('click', () => {
    const flip = s => s.split('').reverse().join('');
    const address = flip(btn.dataset.u) + '@' + flip(btn.dataset.h);

    const link = document.createElement('a');
    link.href = 'mailto:' + address;
    link.textContent = (btn.dataset.prefix || '') + address;
    link.className = btn.className.replace('email-reveal', 'email-revealed');

    btn.replaceWith(link);
    link.focus();
  });
});
