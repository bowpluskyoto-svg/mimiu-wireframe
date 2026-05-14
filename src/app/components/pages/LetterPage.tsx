import { WireframeNav } from '../common/WireframeNav';
import { WireframeFooter } from '../common/WireframeFooter';

export function LetterPage() {
  return (
    <div className="wf">
      <WireframeNav currentPage="letter" />

      {/* Concept Section */}
      <div className="sec" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '30px', letterSpacing: '.08em', fontWeight: 500, marginBottom: '16px' }}>コンテンツタイトル</div>
        <div className="tl h" style={{ width: '48%', margin: '0 auto' }}></div>
        <div className="tl f" style={{ margin: '0 auto 8px' }}></div>
        <div className="tl m" style={{ margin: '0 auto 16px' }}></div>
        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div className="wr">年6回（隔月）更新</div>
        </div>
      </div>

      {/* Annual Calendar */}
      <div className="sec" style={{ background: 'var(--bg)' }}>
        <div className="sl"><span className="yl"></span>年間カレンダー</div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '8px', minWidth: '600px' }}>
            <thead>
              <tr style={{ background: 'var(--wh)', borderBottom: '1px solid var(--bd)' }}>
                <th style={{ padding: '8px', textAlign: 'left', fontWeight: 600 }}>期間</th>
                <th style={{ padding: '8px', textAlign: 'left', fontWeight: 600 }}>テーマ</th>
                <th style={{ padding: '8px', textAlign: 'left', fontWeight: 600 }}>語り手例</th>
                <th style={{ padding: '8px', textAlign: 'left', fontWeight: 600 }}>EC接続</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--bd)' }}>
                <td style={{ padding: '8px' }}>9〜10月</td>
                <td style={{ padding: '8px' }}>ローンチ<br/>あたためる</td>
                <td style={{ padding: '8px' }}>フロアスタッフ／器の塗師／子連れの常連</td>
                <td style={{ padding: '8px' }}>土鍋セット・秋のだし</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--bd)' }}>
                <td style={{ padding: '8px' }}>11〜12月</td>
                <td style={{ padding: '8px' }}>食べてもらう</td>
                <td style={{ padding: '8px' }}>ギフト箱を詰める担当／20年同じ品を贈る客／受け取る側の常連</td>
                <td style={{ padding: '8px' }}>お歳暮・年末ギフト</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--bd)' }}>
                <td style={{ padding: '8px' }}>1〜2月</td>
                <td style={{ padding: '8px' }}>晴れの席</td>
                <td style={{ padding: '8px' }}>成人式に来た親子／正月の予約担当／三世代で通う常連</td>
                <td style={{ padding: '8px' }}>祝い膳セット・お年賀ギフト</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--bd)' }}>
                <td style={{ padding: '8px' }}>3〜4月</td>
                <td style={{ padding: '8px' }}>芽吹く</td>
                <td style={{ padding: '8px' }}>若手料理人／ベテラン料理人</td>
                <td style={{ padding: '8px' }}>春の手土産・新生活ギフト</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--bd)' }}>
                <td style={{ padding: '8px' }}>5〜6月</td>
                <td style={{ padding: '8px' }}>手塩にかける</td>
                <td style={{ padding: '8px' }}>出汁担当の料理人／megumi職人</td>
                <td style={{ padding: '8px' }}>手土産セット・ストレート出汁</td>
              </tr>
              <tr>
                <td style={{ padding: '8px' }}>7〜8月</td>
                <td style={{ padding: '8px' }}>記憶になる日</td>
                <td style={{ padding: '8px' }}>結婚記念の常連／エッセイに登場した美々卯の俯瞰</td>
                <td style={{ padding: '8px' }}>お中元・夏ギフト</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Article Detail */}
      <div className="sec" style={{ padding: '40px 40px', background: 'var(--bg)' }}>
        <div className="sl"><span className="yl"></span>手紙のタイトル</div>
        <span style={{ fontSize: '7px', color: 'var(--gr)' }}>2026.07</span>
        <div style={{ fontSize: '30px', fontWeight: 500, margin: '12px 0 24px', letterSpacing: '.08em' }}>変わっていく日々</div>

        {/* Thumbnail and Content */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
          <div className="ph" style={{ width: '160px', height: '120px', flexShrink: 0 }}><span>サムネイル</span></div>
          <div style={{ flex: 1 }}>
            <div className="tl f"></div>
            <div className="tl m"></div>
            <div className="tl s"></div>
          </div>
        </div>

        <div className="tl f"></div>
        <div className="tl f"></div>
        <div className="tl m"></div>
        <div className="tl s" style={{ marginBottom: '16px' }}></div>
        <div className="tl f"></div>
        <div className="tl f"></div>
        <div className="tl m"></div>
        <div className="tl s" style={{ marginBottom: '16px' }}></div>
        <div className="tl f"></div>
        <div className="tl m"></div>
        <div className="tl s" style={{ marginBottom: '24px' }}></div>

        {/* Related Links */}
        <div style={{ borderTop: '1px solid var(--bd)', paddingTop: '16px', marginTop: '24px' }}>
          <div style={{ fontSize: '12px', color: 'var(--gr)', marginBottom: '12px' }}>関連するキーワード</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <div className="tag" style={{ fontSize: '11px', cursor: 'pointer' }}>利尻昆布</div>
            <div className="tag" style={{ fontSize: '11px', cursor: 'pointer' }}>鰹節</div>
            <div className="tag" style={{ fontSize: '11px', cursor: 'pointer' }}>本店 megumi</div>
            <div className="tag" style={{ fontSize: '11px', cursor: 'pointer' }}>うどんすき</div>
            <div className="tag" style={{ fontSize: '11px', cursor: 'pointer' }}>夏ギフト</div>
            <div className="tag" style={{ fontSize: '11px', cursor: 'pointer' }}>お中元</div>
          </div>
        </div>

        {/* Letter List (Small) */}
        <div style={{ borderTop: '1px solid var(--bd)', paddingTop: '16px', marginTop: '20px' }}>
          <div style={{ fontSize: '12px', color: 'var(--gr)', marginBottom: '8px' }}>手紙一覧</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <div className="tag" style={{ fontSize: '11px', cursor: 'pointer' }}>7〜8月号</div>
            <div className="tag" style={{ fontSize: '11px', cursor: 'pointer' }}>9〜10月号</div>
            <div className="tag" style={{ fontSize: '11px', cursor: 'pointer' }}>11〜12月号</div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--bd)', marginTop: '20px', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
          <div className="btn">← 前の記事</div>
          <div className="btn-y">EC → 夏ギフト</div>
          <div className="btn">次の記事 →</div>
        </div>
      </div>

      <WireframeFooter />
    </div>
  );
}
