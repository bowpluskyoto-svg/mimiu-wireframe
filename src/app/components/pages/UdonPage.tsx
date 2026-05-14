import { WireframeNav } from '../common/WireframeNav';
import { WireframeFooter } from '../common/WireframeFooter';

export function UdonPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="wf">
      <WireframeNav currentPage="udon" />

      {/* Anchor Navigation */}
      <div className="anc" style={{ background: 'var(--wh)' }}>
        <div className="ai cur" onClick={() => scrollToSection('section1')} style={{ fontSize: '12px' }}>① 体験の定義 ▼</div>
        <div className="ai" onClick={() => scrollToSection('section2')} style={{ fontSize: '12px' }}>② 生い立ち・歴史 ▼</div>
        <div className="ai" onClick={() => scrollToSection('section3')} style={{ fontSize: '12px' }}>③ 著名人・文献 ▼</div>
        <div className="ai" onClick={() => scrollToSection('section4')} style={{ fontSize: '12px' }}>④ こだわり：出汁 ▼</div>
        <div className="ai" onClick={() => scrollToSection('section5')} style={{ fontSize: '12px' }}>⑤ こだわり：素材・器 ▼</div>
        <div className="ai" onClick={() => scrollToSection('section6')} style={{ fontSize: '12px' }}>⑥ 食文化・大阪 ▼</div>
        <div className="ai" onClick={() => scrollToSection('section7')} style={{ fontSize: '12px' }}>⑦ 食べ方ガイド ▼</div>
        <div className="ai" onClick={() => scrollToSection('section8')} style={{ fontSize: '12px' }}>⑧ これから ▼</div>
      </div>

      {/* Hero Image */}
      <div className="ph" style={{ height: '400px' }}><span>うどんすき — フルビジュアル（鍋・食卓シーン）</span></div>

      {/* Section 1 */}
      <div id="section1" className="sec" style={{ padding: '40px 40px' }}>
        <div className="sl"><span className="yl"></span>① 体験の定義 <span className="ch">250〜300字</span></div>
        <div style={{ background: 'var(--img)', padding: '8px 12px', marginBottom: '16px', fontSize: '10px', lineHeight: 1.7, color: 'var(--gr)' }}>
          【導入一文 40〜60字】<div className="tl m" style={{ marginTop: '4px' }}></div>
        </div>
        <div className="tl h" style={{ width: '58%' }}></div>
        <div className="tl f"></div>
        <div className="tl m"></div>
        <div className="tl s"></div>
      </div>

      {/* Section 2 */}
      <div id="section2" className="row" style={{ borderBottom: '1px solid var(--bd)' }}>
        <div style={{ flex: 1, padding: '12px 18px' }}>
          <div className="sl"><span className="yl"></span>② 生い立ち・歴史 <span className="ch">800〜1000字</span></div>
          <div style={{ background: 'var(--img)', padding: '8px 12px', marginBottom: '12px', fontSize: '10px', lineHeight: 1.7, color: 'var(--gr)' }}>
            【導入一文 40〜60字】<div className="tl m" style={{ marginTop: '4px' }}></div>
          </div>
          <div className="tl h" style={{ width: '62%' }}></div>
          <div className="tl f"></div>
          <div className="tl f"></div>
          <div className="tl m"></div>
          <div style={{ height: '5px' }}></div>
          <div className="tl f"></div>
          <div className="tl m"></div>
        </div>
        <div className="ph" style={{ flex: '0 0 130px' }}><span>歴史写真</span></div>
      </div>

      {/* Section 3 */}
      <div id="section3" className="sec" style={{ background: 'var(--bg)', padding: '40px 40px' }}>
        <div className="sl"><span className="yl"></span>③ 著名人・文献エピソード <span className="ch">各200字×5〜8件</span></div>
        <div style={{ background: 'var(--img)', padding: '8px 12px', marginBottom: '16px', fontSize: '10px', lineHeight: 1.7, color: 'var(--gr)' }}>
          【導入一文 40〜60字】<div className="tl m" style={{ marginTop: '4px' }}></div>
        </div>
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto' }}>
          <div className="card" style={{ minWidth: '95px', padding: '7px', flexShrink: 0 }}>
            <div className="ph" style={{ height: '42px', marginBottom: '4px' }}><span>肖像</span></div>
            <div className="tl s"></div>
          </div>
          <div className="card" style={{ minWidth: '95px', padding: '7px', flexShrink: 0 }}>
            <div className="ph" style={{ height: '42px', marginBottom: '4px' }}><span>肖像</span></div>
            <div className="tl s"></div>
          </div>
          <div className="card" style={{ minWidth: '95px', padding: '7px', flexShrink: 0, border: '1px dashed var(--bd)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '7px', color: 'var(--gr)' }}>+3〜5件</span>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div id="section4" className="sec" style={{ padding: '40px 40px' }}>
        <div className="sl"><span className="yl"></span>④ こだわり：出汁 <span className="ch">600〜800字</span></div>
        <div style={{ background: 'var(--img)', padding: '8px 12px', marginBottom: '16px', fontSize: '10px', lineHeight: 1.7, color: 'var(--gr)' }}>
          【導入一文 40〜60字】<div className="tl m" style={{ marginTop: '4px' }}></div>
        </div>
        <div className="row" style={{ gap: '10px' }}>
          <div className="ph" style={{ flex: '0 0 110px', height: '80px' }}><span>利尻昆布・鰹節</span></div>
          <div style={{ flex: 1 }}>
            <div className="tl h" style={{ width: '68%' }}></div>
            <div className="tl f"></div>
            <div className="tl m"></div>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div id="section5" className="sec" style={{ background: 'var(--bg)', padding: '40px 40px' }}>
        <div className="sl"><span className="yl"></span>⑤ こだわり：素材・器 <span className="ch">300〜400字</span></div>
        <div style={{ background: 'var(--img)', padding: '8px 12px', marginBottom: '16px', fontSize: '10px', lineHeight: 1.7, color: 'var(--gr)' }}>
          【導入一文 40〜60字】<div className="tl m" style={{ marginTop: '4px' }}></div>
        </div>
        <div className="g3">
          <div className="card" style={{ padding: '7px' }}>
            <div className="ph" style={{ height: '48px', marginBottom: '4px' }}><span>素材</span></div>
            <div className="tl m"></div>
          </div>
          <div className="card" style={{ padding: '7px' }}>
            <div className="ph" style={{ height: '48px', marginBottom: '4px' }}><span>具材</span></div>
            <div className="tl m"></div>
          </div>
          <div className="card" style={{ padding: '7px' }}>
            <div className="ph" style={{ height: '48px', marginBottom: '4px' }}><span>器</span></div>
            <div className="tl m"></div>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div id="section6" className="sec" style={{ padding: '40px 40px' }}>
        <div className="sl"><span className="yl"></span>⑥ 食文化・大阪との関係 <span className="ch">600〜800字</span></div>
        <div style={{ background: 'var(--img)', padding: '8px 12px', marginBottom: '16px', fontSize: '10px', lineHeight: 1.7, color: 'var(--gr)' }}>
          【導入一文 40〜60字】<div className="tl m" style={{ marginTop: '4px' }}></div>
        </div>
        <div className="tl h" style={{ width: '62%' }}></div>
        <div className="tl f"></div>
        <div className="tl m"></div>
        <div className="tl s"></div>
      </div>

      {/* Section 7 */}
      <div id="section7" className="sec" style={{ background: 'var(--bg)', padding: '40px 40px' }}>
        <div className="sl"><span className="yl"></span>⑦ 食べ方ガイド <span className="ch">300字＋図解</span></div>
        <div style={{ background: 'var(--img)', padding: '8px 12px', marginBottom: '16px', fontSize: '10px', lineHeight: 1.7, color: 'var(--gr)' }}>
          【導入一文 40〜60字】<div className="tl m" style={{ marginTop: '4px' }}></div>
        </div>
        <div className="row" style={{ gap: '10px' }}>
          <div className="ph" style={{ flex: 1, height: '70px' }}><span>STEP図解</span></div>
          <div style={{ flex: 1 }}>
            <div className="tl m"></div>
            <div className="tl f" style={{ marginTop: '3px' }}></div>
            <div className="btn-y" style={{ display: 'block', textAlign: 'center', marginTop: '5px', fontSize: '7px' }}>EC → お取り寄せ</div>
          </div>
        </div>
      </div>

      {/* Section 8 */}
      <div id="section8" className="sec" style={{ padding: '40px 40px' }}>
        <div className="sl"><span className="yl"></span>⑧ これからのうどんすき <span className="ch">300〜400字</span></div>
        <div style={{ background: 'var(--img)', padding: '8px 12px', marginBottom: '16px', fontSize: '10px', lineHeight: 1.7, color: 'var(--gr)' }}>
          【導入一文 40〜60字】<div className="tl m" style={{ marginTop: '4px' }}></div>
        </div>
        <div className="tl h" style={{ width: '52%' }}></div>
        <div className="tl f"></div>
        <div className="tl m"></div>
        <div className="tl s"></div>
      </div>

      {/* CTA Section */}
      <div className="sec" style={{ borderTop: '2px solid var(--bd)', paddingTop: '32px', textAlign: 'center' }}>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div className="btn">店舗で体験する →</div>
          <div className="btn-y">オンラインストア →</div>
          <div className="btn">折々の手紙を読む →</div>
        </div>
      </div>

      <WireframeFooter />
    </div>
  );
}
