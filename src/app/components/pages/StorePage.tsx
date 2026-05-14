import { WireframeNav } from '../common/WireframeNav';
import { WireframeFooter } from '../common/WireframeFooter';

export function StorePage() {
  return (
    <div className="wf">
      <WireframeNav currentPage="stores" />

      {/* Page Title */}
      <div className="pgtitle">
        <div className="breadcrumb">HOME ＞ 店舗</div>
        <div style={{ fontSize: '30px', letterSpacing: '.08em' }}>店舗</div>
      </div>

      {/* Store Intro */}
      <div className="sec">
        <div className="sl"><span className="yl"></span>全国の美々卯</div>
        <div className="tl h" style={{ width: '55%' }}></div>
        <div className="tl f"></div>
        <div className="tl m"></div>
        <div className="tl s"></div>
        <div className="ph" style={{ height: '260px', marginTop: '20px' }}><span>店舗イメージビジュアル<br/>本店外観や店内の雰囲気</span></div>
      </div>

      {/* Store List */}
      <div className="sec" style={{ background: 'var(--bg)' }}>
        <div className="sl"><span className="yl"></span>店舗一覧 <span className="wr">11店舗</span></div>
        <div className="g2">
          <div className="card" style={{ display: 'flex', overflow: 'hidden' }}>
            <div className="ph" style={{ width: '150px', flexShrink: 0, height: '130px' }}><span>写真</span></div>
            <div style={{ padding: '14px 20px' }}>
              <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '4px' }}>本店 megumi</div>
              <div style={{ fontSize: '14px', color: 'var(--gr)' }}>大阪市中央区南船場</div>
              <div style={{ fontSize: '14px', color: 'var(--gr)' }}>11:30〜22:00</div>
              <div className="btn" style={{ fontSize: '14px', padding: '6px 16px', marginTop: '8px' }}>詳細 →</div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', overflow: 'hidden' }}>
            <div className="ph" style={{ width: '150px', flexShrink: 0, height: '130px' }}><span>写真</span></div>
            <div style={{ padding: '14px 20px' }}>
              <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '4px' }}>なんば店</div>
              <div style={{ fontSize: '14px', color: 'var(--gr)' }}>大阪市中央区道頓堀</div>
              <div style={{ fontSize: '14px', color: 'var(--gr)' }}>11:30〜22:00</div>
              <div className="btn" style={{ fontSize: '14px', padding: '6px 16px', marginTop: '8px' }}>詳細 →</div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', overflow: 'hidden' }}>
            <div className="ph" style={{ width: '150px', flexShrink: 0, height: '130px' }}><span>写真</span></div>
            <div style={{ padding: '14px 20px' }}>
              <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '4px' }}>心斎橋店</div>
              <div style={{ fontSize: '14px', color: 'var(--gr)' }}>大阪市中央区心斎橋筋</div>
              <div style={{ fontSize: '14px', color: 'var(--gr)' }}>11:30〜21:30</div>
              <div className="btn" style={{ fontSize: '14px', padding: '6px 16px', marginTop: '8px' }}>詳細 →</div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', overflow: 'hidden' }}>
            <div className="ph" style={{ width: '150px', flexShrink: 0, height: '130px' }}><span>写真</span></div>
            <div style={{ padding: '14px 20px' }}>
              <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '4px' }}>梅田店</div>
              <div style={{ fontSize: '14px', color: 'var(--gr)' }}>大阪市北区梅田</div>
              <div style={{ fontSize: '14px', color: 'var(--gr)' }}>11:00〜22:00</div>
              <div className="btn" style={{ fontSize: '14px', padding: '6px 16px', marginTop: '8px' }}>詳細 →</div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', overflow: 'hidden' }}>
            <div className="ph" style={{ width: '150px', flexShrink: 0, height: '130px' }}><span>写真</span></div>
            <div style={{ padding: '14px 20px' }}>
              <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '4px' }}>天王寺店</div>
              <div style={{ fontSize: '14px', color: 'var(--gr)' }}>大阪市天王寺区</div>
              <div style={{ fontSize: '14px', color: 'var(--gr)' }}>11:00〜21:30</div>
              <div className="btn" style={{ fontSize: '14px', padding: '6px 16px', marginTop: '8px' }}>詳細 →</div>
            </div>
          </div>
          <div className="card" style={{ display: 'flex', overflow: 'hidden' }}>
            <div className="ph" style={{ width: '150px', flexShrink: 0, height: '130px' }}><span>写真</span></div>
            <div style={{ padding: '14px 20px' }}>
              <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '4px' }}>京都店</div>
              <div style={{ fontSize: '14px', color: 'var(--gr)' }}>京都市下京区</div>
              <div style={{ fontSize: '14px', color: 'var(--gr)' }}>11:30〜21:30</div>
              <div className="btn" style={{ fontSize: '14px', padding: '6px 16px', marginTop: '8px' }}>詳細 →</div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="sec">
        <div className="sl"><span className="yl"></span>店舗マップ</div>
        <div className="ph" style={{ height: '320px' }}><span>Google Maps 埋め込み<br/>全店舗のピン表示</span></div>
      </div>

      {/* FAQ Section */}
      <div className="sec" style={{ background: 'var(--bg)' }}>
        <div className="sl"><span className="yl"></span>よくある質問</div>
        <div className="accord">
          <div className="accord-h">
            <span>ご予約はできますか？</span>
            <span style={{ color: 'var(--gr)' }}>+</span>
          </div>
        </div>
        <div className="accord">
          <div className="accord-h">
            <span>個室のご用意はありますか？</span>
            <span style={{ color: 'var(--gr)' }}>+</span>
          </div>
        </div>
        <div className="accord">
          <div className="accord-h">
            <span>お子様メニューはありますか？</span>
            <span style={{ color: 'var(--gr)' }}>+</span>
          </div>
        </div>
        <div className="accord">
          <div className="accord-h">
            <span>アレルギー対応はしていますか？</span>
            <span style={{ color: 'var(--gr)' }}>+</span>
          </div>
        </div>
      </div>

      <WireframeFooter />
    </div>
  );
}
