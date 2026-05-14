import { useState } from 'react';
import { WireframeNav } from '../common/WireframeNav';
import { WireframeFooter } from '../common/WireframeFooter';

export function NewsPage() {
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  if (selectedNews !== null) {
    return (
      <div className="wf">
        <WireframeNav currentPage="news" />

        {/* Page Title */}
        <div className="pgtitle">
          <div className="breadcrumb">HOME ＞ お知らせ ＞ お知らせ詳細</div>
          <div style={{ fontSize: '15px', letterSpacing: '.08em' }}>お知らせ詳細</div>
        </div>

        {/* News Detail */}
        <div className="sec">
          <div style={{ fontSize: '8px', color: 'var(--gr)', marginBottom: '8px' }}>2026.04.22</div>
          <div className="badge" style={{ marginBottom: '16px' }}>イベント</div>
          <div className="tl h" style={{ width: '70%', marginBottom: '20px' }}></div>
          <div className="ph" style={{ height: '200px', marginBottom: '20px' }}><span>お知らせ画像</span></div>
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
          <div className="btn" onClick={() => setSelectedNews(null)}>← お知らせ一覧に戻る</div>
        </div>

        <WireframeFooter />
      </div>
    );
  }

  return (
    <div className="wf">
      <WireframeNav currentPage="news" />

      {/* Page Title */}
      <div className="pgtitle">
        <div className="breadcrumb">HOME ＞ お知らせ</div>
        <div style={{ fontSize: '15px', letterSpacing: '.08em' }}>お知らせ</div>
      </div>

      {/* Category Filter */}
      <div className="sec" style={{ padding: '9px 18px', background: 'var(--bg)' }}>
        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
          <div className="badge" style={{ padding: '3px 9px', fontSize: '8px' }}>すべて</div>
          <div className="tag" style={{ padding: '3px 9px', fontSize: '8px' }}>お知らせ</div>
          <div className="tag" style={{ padding: '3px 9px', fontSize: '8px' }}>プレスリリース</div>
          <div className="tag" style={{ padding: '3px 9px', fontSize: '8px' }}>イベント・キャンペーン</div>
          <div className="tag" style={{ padding: '3px 9px', fontSize: '8px' }}>店舗情報</div>
        </div>
      </div>

      {/* News List */}
      <div className="sec">
        <div className="news-item" style={{ cursor: 'pointer' }} onClick={() => setSelectedNews(1)}>
          <div style={{ fontSize: '8px', color: 'var(--gr)', whiteSpace: 'nowrap' }}>2026.04.22</div>
          <div className="tag">イベント</div>
          <div style={{ flex: 1 }}>
            <div className="tl m" style={{ margin: 0 }}></div>
          </div>
        </div>
        <div className="news-item" style={{ cursor: 'pointer' }} onClick={() => setSelectedNews(2)}>
          <div style={{ fontSize: '8px', color: 'var(--gr)', whiteSpace: 'nowrap' }}>2026.04.15</div>
          <div className="tag">お知らせ</div>
          <div style={{ flex: 1 }}>
            <div className="tl f" style={{ margin: 0 }}></div>
          </div>
        </div>
        <div className="news-item" style={{ cursor: 'pointer' }} onClick={() => setSelectedNews(3)}>
          <div style={{ fontSize: '8px', color: 'var(--gr)', whiteSpace: 'nowrap' }}>2026.04.08</div>
          <div className="tag">店舗情報</div>
          <div style={{ flex: 1 }}>
            <div className="tl m" style={{ margin: 0 }}></div>
          </div>
        </div>
        <div className="news-item" style={{ borderBottom: 'none', cursor: 'pointer' }} onClick={() => setSelectedNews(4)}>
          <div style={{ fontSize: '8px', color: 'var(--gr)', whiteSpace: 'nowrap' }}>2026.03.25</div>
          <div className="tag">プレスリリース</div>
          <div style={{ flex: 1 }}>
            <div className="tl f" style={{ margin: 0 }}></div>
          </div>
        </div>
      </div>

      {/* Load More */}
      <div className="sec" style={{ textAlign: 'center', padding: '10px' }}>
        <div className="btn" style={{ marginTop: 0 }}>もっと見る</div>
      </div>

      <WireframeFooter />
    </div>
  );
}
