document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S4b — MOCKUP / SOLUÇÃO VISUAL -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s4b" data-i="6">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">A solução · Social Mall</span>
  </div>
  <div class="flex-1 grid grid-cols-2 gap-0 pt-20 overflow-hidden">
    <!-- left -->
    <div class="s4b-left px-14 py-12 flex flex-col justify-center border-r border-[#DDE8E2]">
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Prévia do produto</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-5">Um ecossistema<br><em class="text-[#6EBF8B] not-italic">de social commerce.</em></h2>
      <p class="text-[16px] text-[#5C6E64] leading-[1.78] mb-[18px]">Plataforma de social commerce orientada a comunidades comerciais (Hubs), onde toda a jornada — descoberta, indicação, compra e rastreio — acontece na Web, com atribuição e comissão automáticas.</p>
      <div class="flex flex-col gap-3 mt-7">
        <div class="s4b-feature flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Links e QR Codes rastreáveis</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Atribuição preservada entre canais até a conversão</div>
          </div>
        </div>
        <div class="s4b-feature flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Split e comissões automáticas</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Repasse ao indicador liberado sem intervenção manual</div>
          </div>
        </div>
      </div>
    </div>
    <!-- right -->
    <div class="s4b-right flex items-center justify-center relative overflow-hidden" style="background:linear-gradient(160deg,#F0FDF4 0%,#DCFCE7 100%);">
      <img src="assets/images/mockup_social_small.png" alt="Mockup Social Mall" class="max-h-full max-w-full object-contain" style="height:100%;width:auto;">
    </div>
  </div>
</section>
`);
