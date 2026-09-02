document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S1 — CAPA -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col" id="s1" data-i="0" style="background: linear-gradient(135deg, #060C07 0%, #0F1A11 30%, #163520 55%, #1A5C2E 78%, #1DB954 130%);">
  <div class="bg-grid"></div>
  <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse 50% 60% at 85% 55%, rgba(29,185,84,.18) 0%, transparent 65%);"></div>
  <!-- bar -->
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <a class="flex items-center no-underline" href="#">
      <img src="assets/images/logo.png" alt="Habii.tech" style="height:28px;width:auto;display:block;margin-left:30px">
    </a>
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-white/30">Proposta Comercial · 2026</span>
  </div>
  <!-- body -->
  <div class="relative z-[5] flex-1 grid grid-cols-2 gap-0 items-center pt-[88px] px-16 pb-8">
    <div>
      <div class="inline-flex items-center gap-[7px] bg-[rgba(29,185,84,.12)] border border-[rgba(29,185,84,.28)] text-[#1DB954] text-[11px] font-bold px-[14px] py-[6px] rounded-full tracking-[.08em] uppercase mb-7">
        <span class="w-[5px] h-[5px] bg-[#1DB954] rounded-full block"></span>Proposta Comercial · 2026
      </div>
      <h1 class="text-[clamp(52px,6vw,82px)] font-black leading-[.95] tracking-[-0.04em] text-white mb-6">Proposta<br><em class="text-[#1DB954] not-italic">Comercial</em><br><span class="text-white/20"> Social Mall</span></h1>
      <p class="text-[17px] text-white/45 leading-[1.72] max-w-[460px] mb-[52px]">Plataforma de <strong class="text/75 font-semibold">social commerce</strong> com Hubs comerciais, indicação rastreável, split de pagamento e logística integrada.</p>
    </div>
    <!-- Mockup image -->
    <div style="display:flex; justify-content:center; align-items:center; position:relative; z-index:5;">
      <img src="assets/images/mockup_social_small.png" alt="Social Mall mockup" style="width:100%; max-width:640px; display:block; filter:drop-shadow(0 28px 60px rgba(0,0,0,.6));">
    </div>
  </div>
</section>
`);
