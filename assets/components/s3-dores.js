document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S3 — DORES DO CLIENTE -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-[#F4F8F5]" id="s3" data-i="4">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Problemas identificados</span>
  </div>
  <div class="flex-1 flex flex-col pt-[88px] px-16 pb-6">
    <div>
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Diagnóstico</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-0">Os desafios do<br><em class="text-[#6EBF8B] not-italic">Social Mall.</em></h2>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-8 flex-1">

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Operação fragmentada</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Lojistas gerenciam catálogo, atendimento, divulgação e pedidos em ferramentas completamente desconectadas, gerando retrabalho e erros.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/><line x1="4" y1="20" x2="4.01" y2="20"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Indicações sem rastreabilidade</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Recomendações feitas pelo WhatsApp e redes sociais perdem autoria e atribuição, impossibilitando o pagamento correto de comissões.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Compra pouco conversacional</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Marketplaces tradicionais exigem que o usuário navegue sozinho. O comprador quer descobrir e comprar dentro do WhatsApp, sem migrar para a Web.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Comissões gerenciadas manualmente</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Calcular, reter, estornar e liberar comissões de vendas indicadas é feito à mão, sujeito a erros e sem auditoria confiável.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Logística descentralizada</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Cotação de frete, cálculo por dimensões, rastreio e atualização de pedido ficam espalhados entre transportadoras e sistemas externos sem integração.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Jornada invisível entre canais</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">A compra atravessa WhatsApp, Web e redes sociais sem rastreamento consistente de origem — a plataforma perde dados valiosos de conversão.</div>
      </div>

    </div>
  </div>
</section>
`);
