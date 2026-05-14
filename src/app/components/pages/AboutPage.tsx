import { useState } from 'react';
import { WireframeNav } from '../common/WireframeNav';
import { WireframeFooter } from '../common/WireframeFooter';

export function AboutPage() {
  const [selectedInitiative, setSelectedInitiative] = useState<number | null>(null);

  if (selectedInitiative !== null) {
    return (
      <div className="wf">
        <WireframeNav currentPage="about" />

        {/* Page Title */}
        <div className="pgtitle">
          <div className="breadcrumb">HOME ＞ 美々卯について ＞ 取り組み詳細</div>
          <div style={{ fontSize: '30px', letterSpacing: '.08em' }}>取り組み詳細</div>
        </div>

        {/* Initiative Detail 1 */}
        <div className="sec">
          <div className="sl"><span className="yl"></span>産地・生産者との連携</div>
          <div className="ph" style={{ height: '200px', marginBottom: '20px' }}><span>産地との関係ビジュアル</span></div>
          <div className="tl h" style={{ width: '60%', marginBottom: '20px' }}></div>
          <div className="tl f"></div>
          <div className="tl f"></div>
          <div className="tl m"></div>
          <div className="tl s" style={{ marginBottom: '16px' }}></div>
          <div className="tl f"></div>
          <div className="tl m"></div>
          <div className="tl s"></div>
        </div>

        {/* Initiative Detail 2 */}
        <div className="sec" style={{ background: 'var(--bg)' }}>
          <div className="sl"><span className="yl"></span>食文化・伝統の継承</div>
          <div className="ph" style={{ height: '200px', marginBottom: '20px' }}><span>食文化の継承ビジュアル</span></div>
          <div className="tl h" style={{ width: '60%', marginBottom: '20px' }}></div>
          <div className="tl f"></div>
          <div className="tl f"></div>
          <div className="tl m"></div>
          <div className="tl s" style={{ marginBottom: '16px' }}></div>
          <div className="tl f"></div>
          <div className="tl m"></div>
          <div className="tl s"></div>
        </div>

        {/* Back Button */}
        <div className="sec" style={{ textAlign: 'center', padding: '20px' }}>
          <div className="btn" onClick={() => setSelectedInitiative(null)}>← 美々卯についてに戻る</div>
        </div>

        <WireframeFooter />
      </div>
    );
  }

  return (
    <div className="wf">
      <WireframeNav currentPage="about" />

      {/* Page Title */}
      <div className="pgtitle">
        <div className="breadcrumb">HOME ＞ 美々卯について</div>
        <div style={{ fontSize: '30px', letterSpacing: '.08em' }}>美々卯について</div>
      </div>

      {/* President Message */}
      <div className="row" style={{ borderBottom: '1px solid var(--bd)' }}>
        <div style={{ flex: 1, padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="sl"><span className="yl"></span>社長メッセージ</div>
          <div className="tl h" style={{ width: '62%' }}></div>
          <div className="tl f"></div>
          <div className="tl m"></div>
          <div className="tl s"></div>
          <div style={{ fontSize: '8px', color: 'var(--gr)', marginTop: '8px' }}>代表取締役社長　江口公浩</div>
        </div>
        <div className="ph" style={{ flex: '0 0 150px' }}><span>社長写真<br/>縦位置</span></div>
      </div>

      {/* MVV Section */}
      <div className="sec" style={{ background: 'var(--bg)' }}>
        <div className="sl"><span className="yl"></span>ミッション・ビジョン・バリュー</div>
        <div className="g3">
          <div className="card" style={{ padding: '9px', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', color: 'var(--yw)', marginBottom: '3px' }}>◎</div>
            <div style={{ fontSize: '8px', fontWeight: 700, marginBottom: '3px' }}>ミッション（仮）</div>
            <div style={{ fontSize: '9px', lineHeight: 1.6, marginTop: '6px' }}>大阪の食文化を、食卓を通じて次の世代へ渡す。</div>
          </div>
          <div className="card" style={{ padding: '9px', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', color: 'var(--yw)', marginBottom: '3px' }}>◎</div>
            <div style={{ fontSize: '8px', fontWeight: 700, marginBottom: '3px' }}>ビジョン（仮）</div>
            <div style={{ fontSize: '9px', lineHeight: 1.6, marginTop: '6px' }}>うどんすきが、日本の食の記憶になる。</div>
          </div>
          <div className="card" style={{ padding: '9px', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', color: 'var(--yw)', marginBottom: '3px' }}>◎</div>
            <div style={{ fontSize: '8px', fontWeight: 700, marginBottom: '3px' }}>バリュー（仮）</div>
            <div style={{ fontSize: '9px', lineHeight: 1.6, marginTop: '6px' }}>手塩にかける／素材への確信／人の間をあたためる</div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="sec">
        <div className="sl"><span className="yl"></span>沿革</div>
        <div className="timeline-item">
          <div className="tl-year">1925</div>
          <div className="tl-body">
            <div style={{ fontSize: '8px', fontWeight: 600, marginBottom: '2px' }}>耳卯楼として創業</div>
            <div className="tl f"></div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="tl-year">1949</div>
          <div className="tl-body">
            <div style={{ fontSize: '8px', fontWeight: 600, marginBottom: '2px' }}>美々卯に屋号変更、うどんすき考案</div>
            <div className="tl f"></div>
          </div>
        </div>
        <div className="timeline-item" style={{ borderBottom: 'none' }}>
          <div className="tl-year" style={{ background: 'var(--yw)', color: 'var(--bk)' }}>2025</div>
          <div className="tl-body">
            <div style={{ fontSize: '8px', fontWeight: 600, marginBottom: '2px' }}>創業101周年</div>
            <div className="tl f"></div>
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="sec" style={{ background: 'var(--bg)' }}>
        <div className="sl"><span className="yl"></span>会社概要</div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '8px' }}>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--bd)' }}>
              <td style={{ padding: '5px 8px 5px 0', color: 'var(--gr)', width: '28%' }}>会社名</td>
              <td style={{ padding: '5px 0' }}>株式会社美々卯</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--bd)' }}>
              <td style={{ padding: '5px 8px 5px 0', color: 'var(--gr)' }}>代表者</td>
              <td style={{ padding: '5px 0' }}>代表取締役社長　江口公浩</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--bd)' }}>
              <td style={{ padding: '5px 8px 5px 0', color: 'var(--gr)' }}>創業</td>
              <td style={{ padding: '5px 0' }}>1925年（大正14年）</td>
            </tr>
            <tr>
              <td style={{ padding: '5px 8px 5px 0', color: 'var(--gr)' }}>事業内容</td>
              <td style={{ padding: '5px 0' }}>飲食業・食品販売業</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Initiatives Section */}
      <div className="sec">
        <div className="sl"><span className="yl"></span>取り組み</div>
        <div className="g2">
          <div className="card" style={{ padding: '9px', cursor: 'pointer' }} onClick={() => setSelectedInitiative(1)}>
            <div className="ph" style={{ height: '55px', marginBottom: '6px' }}><span>産地との関係</span></div>
            <div style={{ fontSize: '8px', fontWeight: 600, marginBottom: '3px' }}>産地・生産者との連携</div>
            <div className="tl f"></div>
            <div className="tl m"></div>
          </div>
          <div className="card" style={{ padding: '9px', cursor: 'pointer' }} onClick={() => setSelectedInitiative(2)}>
            <div className="ph" style={{ height: '55px', marginBottom: '6px' }}><span>食文化の継承</span></div>
            <div style={{ fontSize: '8px', fontWeight: 600, marginBottom: '3px' }}>食文化・伝統の継承</div>
            <div className="tl f"></div>
            <div className="tl m"></div>
          </div>
        </div>
      </div>

      <WireframeFooter />
    </div>
  );
}
