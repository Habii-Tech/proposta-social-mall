document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S4 — ESCOPO -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s4" data-i="5">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Escopo · Social Mall</span>
  </div>
  <div class="flex-1 flex flex-col pt-[88px] px-16 pb-6">
    <div class="mb-8 flex items-end justify-between gap-8">
      <div>
        <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">O que vamos construir</div>
        <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-0">Escopo<br><em class="text-[#6EBF8B] not-italic">do projeto.</em></h2>
      </div>
      <p class="text-[15px] text-[#5C6E64] max-w-[400px] leading-[1.65] pb-1 flex-shrink-0">Ecossistema completo de <strong class="text-[#1F2B23] font-semibold">social commerce</strong>: plataforma base, experiência multicanal e motor financeiro com split e comissões automáticas.</p>
    </div>
    <div class="flex-1 grid gap-4" style="grid-template-columns: repeat(3,1fr);">

      <!-- Plataforma & Usuários -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[26px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">Plataforma & Usuários</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">6 módulos</div>
          </div>
        </div>
        <div class="px-7 py-[22px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Login, cadastro e recuperação de senha</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Gestão de Empresas e usuários internos</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Gestão de Hubs (identidade, regras, comissão)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Gestão de Produtos (catálogo, estoque, frete)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Administração, permissionamento e papéis</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium leading-[1.35]">Notificações e comunicação transacional</div>
        </div>
      </div>

      <!-- Social Commerce -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[26px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">Social Commerce</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">5 módulos</div>
          </div>
        </div>
        <div class="px-7 py-[22px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Busca, compra e pedido via chat</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Associação e indicação com vínculo à Hub</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Social Sharing com cartões e deep links</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Vitrine Web e página pública da Hub</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium leading-[1.35]">QR Code para venda presencial rastreável</div>
        </div>
      </div>

      <!-- Transacional & Financeiro -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[26px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">Transacional & Financeiro</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">5 módulos</div>
          </div>
        </div>
        <div class="px-7 py-[22px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Carrinho e checkout com validação de frete</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Logística integrada com transportadoras</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Gestão de pedidos e rastreamento de entrega</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Pagamentos, split e comissões automáticas</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium leading-[1.35]">Financeiro: repasses, retenções e estornos</div>
        </div>
      </div>

    </div>
  </div>
</section>
`);
