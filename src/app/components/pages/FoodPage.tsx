import { WireframeNav } from '../common/WireframeNav';
import { WireframeFooter } from '../common/WireframeFooter';

export function FoodPage() {
  return (
    <div className="wf">
      <WireframeNav currentPage="food" />

      {/* Page Title */}
      <div className="pgtitle">
        <div className="breadcrumb">HOME ＞ 美々卯のお料理</div>
        <div style={{ fontSize: '30px', letterSpacing: '.08em' }}>美々卯のお料理</div>
      </div>

      {/* Concept Section */}
      <div className="sec">
        <div className="sl"><span className="yl"></span>美々卯のこだわり</div>
        <div className="tl h" style={{ width: '60%' }}></div>
        <div className="tl f"></div>
        <div className="tl m"></div>
        <div className="tl s"></div>
        <div className="ph" style={{ height: '280px', marginTop: '20px' }}><span>こだわりビジュアル<br/>職人の手元・素材・調理風景</span></div>
        <div style={{ marginTop: '20px' }}>
          <div className="tl h" style={{ width: '70%' }}></div>
          <div className="tl f"></div>
          <div className="tl f"></div>
          <div className="tl m"></div>
          <div className="tl s"></div>
        </div>
      </div>

      {/* Quality & Ingredients */}
      <div className="sec" style={{ background: 'var(--bg)' }}>
        <div className="sl"><span className="yl"></span>店舗でも、お家でも、美々卯の味わいは変わりません</div>
        <div className="tl h" style={{ width: '65%' }}></div>
        <div className="tl f"></div>
        <div className="tl m"></div>
        <div className="tl s"></div>
        <div className="g3" style={{ marginTop: '24px' }}>
          <div className="card" style={{ overflow: 'hidden' }}>
            <div className="ph" style={{ height: '140px' }}><span>出汁へのこだわり</span></div>
            <div style={{ padding: '16px 20px' }}>
              <div className="tl h" style={{ width: '70%' }}></div>
              <div className="tl f"></div>
              <div className="tl m"></div>
            </div>
          </div>
          <div className="card" style={{ overflow: 'hidden' }}>
            <div className="ph" style={{ height: '140px' }}><span>素材へのこだわり</span></div>
            <div style={{ padding: '16px 20px' }}>
              <div className="tl h" style={{ width: '70%' }}></div>
              <div className="tl f"></div>
              <div className="tl m"></div>
            </div>
          </div>
          <div className="card" style={{ overflow: 'hidden' }}>
            <div className="ph" style={{ height: '140px' }}><span>商品開発の努力</span></div>
            <div style={{ padding: '16px 20px' }}>
              <div className="tl h" style={{ width: '70%' }}></div>
              <div className="tl f"></div>
              <div className="tl m"></div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '24px', background: 'var(--wh)', padding: '20px', border: '1px solid var(--bd)' }}>
          <div className="tl h" style={{ width: '75%' }}></div>
          <div className="tl f"></div>
          <div className="tl f"></div>
          <div className="tl m"></div>
          <div style={{ fontSize: '14px', color: 'var(--gr)', marginTop: '16px' }}>
            ※オンラインで提供する商品は、仕出しに近い品質を保つための商品開発を行っています
          </div>
        </div>
      </div>

      {/* Store Menu */}
      <div className="sec">
        <div className="sl"><span className="yl"></span>店舗でおたのしみいただけるメニュー</div>

        {/* Seasonal Menu */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '16px', letterSpacing: '.08em' }}>季節のお料理</div>
          <div className="g3">
            <div className="card" style={{ overflow: 'hidden' }}>
              <div className="ph" style={{ height: '160px' }}><span>春のお料理</span></div>
              <div style={{ padding: '12px 16px' }}>
                <div style={{ fontSize: '16px', fontWeight: 500 }}>春のお料理</div>
                <div style={{ fontSize: '14px', color: 'var(--gr)', marginTop: '4px' }}>3月〜5月</div>
              </div>
            </div>
            <div className="card" style={{ overflow: 'hidden' }}>
              <div className="ph" style={{ height: '160px' }}><span>夏のお料理</span></div>
              <div style={{ padding: '12px 16px' }}>
                <div style={{ fontSize: '16px', fontWeight: 500 }}>夏のお料理</div>
                <div style={{ fontSize: '14px', color: 'var(--gr)', marginTop: '4px' }}>6月〜8月</div>
              </div>
            </div>
            <div className="card" style={{ overflow: 'hidden' }}>
              <div className="ph" style={{ height: '160px' }}><span>秋のお料理</span></div>
              <div style={{ padding: '12px 16px' }}>
                <div style={{ fontSize: '16px', fontWeight: 500 }}>秋のお料理</div>
                <div style={{ fontSize: '14px', color: 'var(--gr)', marginTop: '4px' }}>9月〜11月</div>
              </div>
            </div>
            <div className="card" style={{ overflow: 'hidden' }}>
              <div className="ph" style={{ height: '160px' }}><span>冬のお料理</span></div>
              <div style={{ padding: '12px 16px' }}>
                <div style={{ fontSize: '16px', fontWeight: 500 }}>冬のお料理</div>
                <div style={{ fontSize: '14px', color: 'var(--gr)', marginTop: '4px' }}>12月〜2月</div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Menu */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '16px', letterSpacing: '.08em' }}>通年メニュー</div>
          <div className="card" style={{ overflow: 'hidden' }}>
            <div className="ph" style={{ height: '200px' }}><span>名物うどんすき</span></div>
            <div style={{ padding: '16px 20px' }}>
              <div style={{ fontSize: '18px', fontWeight: 500 }}>名物うどんすき</div>
              <div className="tl f" style={{ marginTop: '8px' }}></div>
              <div className="tl m"></div>
            </div>
          </div>
        </div>

        {/* Menu PDF Link */}
        <div style={{ background: 'var(--bg)', padding: '24px', textAlign: 'center', border: '1px solid var(--bd)' }}>
          <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '12px' }}>メニュー表（PDF）</div>
          <div className="tl m" style={{ margin: '0 auto 20px' }}></div>
          <div className="btn-y">メニュー表をダウンロード（PDF）</div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="sec" style={{ background: 'var(--bg)' }}>
        <div className="g2">
          <div style={{ background: 'var(--wh)', padding: '32px', textAlign: 'center', border: '1px solid var(--bd)' }}>
            <div className="sl" style={{ justifyContent: 'center' }}><span className="yl"></span>オンラインストア</div>
            <div className="tl h" style={{ width: '70%', margin: '0 auto 12px' }}></div>
            <div className="tl f" style={{ margin: '0 auto 4px' }}></div>
            <div className="tl m" style={{ margin: '0 auto 20px' }}></div>
            <div className="btn-y">オンラインストアへ →</div>
          </div>
          <div style={{ background: 'var(--wh)', padding: '32px', textAlign: 'center', border: '1px solid var(--bd)' }}>
            <div className="sl" style={{ justifyContent: 'center' }}><span className="yl"></span>店舗一覧</div>
            <div className="tl h" style={{ width: '70%', margin: '0 auto 12px' }}></div>
            <div className="tl f" style={{ margin: '0 auto 4px' }}></div>
            <div className="tl m" style={{ margin: '0 auto 20px' }}></div>
            <div className="btn">店舗一覧を見る →</div>
          </div>
        </div>
      </div>

      <WireframeFooter />
    </div>
  );
}
