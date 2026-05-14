import { WireframeNav } from '../common/WireframeNav';
import { WireframeFooter } from '../common/WireframeFooter';

export function TopPage() {
  return (
    <div className="wf">
      <WireframeNav />

      {/* Hero Section - Photo/Illustration */}
      <div className="ph" style={{ height: '520px', position: 'relative' }}>
        <span style={{ fontSize: '18px', lineHeight: 1.8 }}>
          【 ヒーロービジュアル 】<br/>
          撮影 or イラスト<br/>
          折々の手紙 今号ビジュアルと共通素材
        </span>
        <div style={{ position: 'absolute', bottom: '32px', left: '36px', zIndex: 2 }}>
          <div style={{ fontSize: '14px', letterSpacing: '.18em', color: 'rgba(255,255,255,.5)', marginBottom: '6px' }}>MIMIU</div>
          <div style={{ fontSize: '24px', letterSpacing: '.1em', color: 'white', fontWeight: 500 }}>━━ キャッチコピー ━━</div>
        </div>
        <div style={{ position: 'absolute', bottom: '32px', right: '36px', zIndex: 2, textAlign: 'right' }}>
          <div style={{ fontSize: '12px', letterSpacing: '.12em', color: 'rgba(255,255,255,.5)', marginBottom: '6px' }}>NOW PUBLISHING</div>
          <div style={{ background: 'rgba(107,107,107,.85)', border: '1px solid rgba(212,184,42,.7)', padding: '12px 20px', display: 'inline-block', textAlign: 'left' }}>
            <div style={{ fontSize: '12px', letterSpacing: '.1em', color: 'var(--yw)', marginBottom: '4px' }}>美々卯 折々の手紙 ／ 7〜8月号</div>
            <div style={{ fontSize: '20px', color: 'white', fontWeight: 500 }}>記憶に残る日</div>
          </div>
        </div>
      </div>

      {/* Hero Band */}
      <div className="hero-band">
        <div className="hero-band-text">「 季節をひとつ、手紙に託して。 」</div>
      </div>
      {/* 注記：ここに入るテキストがサイトの第一印象を決定する。ライターへの発注において最優先箇所と明示すること。凡庸な一文は入れない。 */}

      {/* News Section - Simple List */}
      <div className="sec">
        <div className="sl"><span className="yl"></span>お知らせ</div>
        <div className="news-item-simple" style={{ fontSize: '12px' }}>
          <span className="date">2026.04.22</span>
          <span className="tag">お知らせ</span>
          <span>ゴールデンウィーク期間の営業時間について</span>
        </div>
        <div className="news-item-simple" style={{ fontSize: '12px' }}>
          <span className="date">2026.04.15</span>
          <span className="tag">メディア</span>
          <span>雑誌「和食LOVERS」に本店megumiが掲載されました</span>
        </div>
        <div className="news-item-simple" style={{ fontSize: '12px' }}>
          <span className="date">2026.04.08</span>
          <span className="tag">お料理</span>
          <span>初夏の会席料理のご案内を開始いたしました</span>
        </div>
        <div style={{ textAlign: 'right', marginTop: '20px' }}>
          <div className="btn">お知らせ一覧 →</div>
        </div>
      </div>

      {/* Udon Feature */}
      <div className="row" style={{ borderBottom: '1px solid var(--bd)' }}>
        <div className="ph" style={{ flex: 1.3, height: '180px' }}><span>名物うどんすきビジュアル</span></div>
        <div style={{ flex: 1, padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="sl"><span className="yl"></span>名物うどんすき</div>
          <div className="tl h"></div>
          <div className="tl f"></div>
          <div className="tl m"></div>
          <div className="tl s" style={{ marginBottom: '8px' }}></div>
          <div className="btn">うどんすきについて →</div>
        </div>
      </div>

      {/* About Section */}
      <div className="sec" style={{ textAlign: 'center', background: 'var(--bg)' }}>
        <div className="sl" style={{ justifyContent: 'center' }}><span className="yl"></span>美々卯について</div>
        <div className="tl h" style={{ width: '32%', margin: '0 auto 8px' }}></div>
        <div className="tl f" style={{ width: '76%', margin: '0 auto 3px' }}></div>
        <div className="tl m" style={{ margin: '0 auto 3px' }}></div>
        <div className="tl s" style={{ margin: '0 auto 10px' }}></div>
        <div className="btn">美々卯について →</div>
      </div>

      {/* Food Section */}
      <div className="sec" style={{ background: 'var(--bg)' }}>
        <div className="sl"><span className="yl"></span>美々卯のお料理</div>
        <div className="tl h" style={{ width: '60%' }}></div>
        <div className="tl f"></div>
        <div className="tl m"></div>
        <div className="tl s" style={{ marginBottom: '20px' }}></div>
        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '8px' }}>
          <div className="card" style={{ overflow: 'hidden', flex: '0 0 280px' }}>
            <div className="ph" style={{ height: '140px' }}><span>季節のお料理</span></div>
            <div style={{ padding: '12px 16px' }}>
              <div style={{ fontSize: '16px', fontWeight: 500 }}>季節のお料理</div>
              <div style={{ fontSize: '14px', color: 'var(--gr)', marginTop: '4px' }}>旬の食材を使った四季折々の献立</div>
            </div>
          </div>
          <div className="card" style={{ overflow: 'hidden', flex: '0 0 280px', border: '2px solid var(--yw)' }}>
            <div className="ph" style={{ height: '140px' }}><span>名物うどんすき</span></div>
            <div style={{ padding: '12px 16px' }}>
              <div style={{ fontSize: '16px', fontWeight: 500 }}>名物うどんすき</div>
              <div style={{ fontSize: '14px', color: 'var(--gr)', marginTop: '4px', marginBottom: '8px' }}>美々卯の看板メニュー</div>
              <div className="btn" style={{ fontSize: '14px', padding: '6px 16px', marginTop: '4px' }}>詳しく見る →</div>
            </div>
          </div>
          <div className="card" style={{ overflow: 'hidden', flex: '0 0 280px' }}>
            <div className="ph" style={{ height: '140px' }}><span>こだわり</span></div>
            <div style={{ padding: '12px 16px' }}>
              <div style={{ fontSize: '16px', fontWeight: 500 }}>美々卯のこだわり</div>
              <div style={{ fontSize: '14px', color: 'var(--gr)', marginTop: '4px' }}>出汁・素材へのこだわり</div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'right', marginTop: '16px' }}>
          <div className="btn">美々卯のお料理を見る →</div>
        </div>
      </div>

      {/* Stores Section */}
      <div className="sec">
        <div className="sl"><span className="yl"></span>店舗</div>
        <div className="g3" style={{ marginBottom: '14px' }}>
          <div className="card" style={{ overflow: 'hidden' }}>
            <div className="ph" style={{ height: '120px' }}><span>本店 megumi</span></div>
            <div style={{ padding: '8px 14px', fontSize: '14px', color: 'var(--gr)' }}>大阪・南船場</div>
          </div>
          <div className="card" style={{ overflow: 'hidden' }}>
            <div className="ph" style={{ height: '120px' }}><span>なんば店</span></div>
            <div style={{ padding: '8px 14px', fontSize: '14px', color: 'var(--gr)' }}>大阪・なんば</div>
          </div>
          <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '152px', border: '1px dashed var(--bd)' }}>
            <span style={{ fontSize: '14px', color: 'var(--gr)' }}>全11店舗一覧 →</span>
          </div>
        </div>
        <div style={{ textAlign: 'right' }}><div className="btn" style={{ marginTop: 0 }}>店舗一覧を見る →</div></div>
      </div>

      {/* Letter Section - Horizontal Carousel Style */}
      <div className="sec" style={{ background: 'var(--bg)' }}>
        <div className="sl"><span className="yl"></span>美々卯 折々の手紙 <span className="wr">年6回更新</span></div>

        <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '8px' }}>
          {/* Current Issue */}
          <div style={{ flex: '0 0 420px', background: 'var(--wh)', border: '2px solid var(--yw)', padding: '20px' }}>
            <div className="badge" style={{ marginBottom: '12px' }}>公開中 ／ 7〜8月号</div>
            <div className="ph" style={{ height: '180px', marginBottom: '12px' }}><span>ヒーローと同じ<br/>ビジュアル</span></div>
            <div style={{ fontSize: '22px', fontWeight: 500, marginBottom: '8px', letterSpacing: '.08em' }}>記憶に残る日</div>
            <div className="tl f"></div>
            <div className="tl m"></div>
            <div className="btn-y" style={{ marginTop: '16px', width: '100%', textAlign: 'center' }}>この記事を読む →</div>
          </div>

          {/* Archive Items */}
          <div style={{ flex: '0 0 280px', background: 'var(--wh)', border: '1px solid var(--bd)', padding: '20px' }}>
            <div className="badge" style={{ marginBottom: '12px', background: 'var(--img)', color: 'var(--gr)' }}>5〜6月号</div>
            <div className="ph" style={{ height: '180px', marginBottom: '12px' }}><span>5〜6月号</span></div>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>手塩にかける</div>
            <div className="btn" style={{ marginTop: '16px', width: '100%', textAlign: 'center' }}>読む →</div>
          </div>

          <div style={{ flex: '0 0 280px', background: 'var(--wh)', border: '1px solid var(--bd)', padding: '20px' }}>
            <div className="badge" style={{ marginBottom: '12px', background: 'var(--img)', color: 'var(--gr)' }}>3〜4月号</div>
            <div className="ph" style={{ height: '180px', marginBottom: '12px' }}><span>3〜4月号</span></div>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>桜と新しい季節</div>
            <div className="btn" style={{ marginTop: '16px', width: '100%', textAlign: 'center' }}>読む →</div>
          </div>

          <div style={{ flex: '0 0 280px', background: 'var(--wh)', border: '1px solid var(--bd)', padding: '20px' }}>
            <div className="badge" style={{ marginBottom: '12px', background: 'var(--img)', color: 'var(--gr)' }}>1〜2月号</div>
            <div className="ph" style={{ height: '180px', marginBottom: '12px' }}><span>1〜2月号</span></div>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>あたためる</div>
            <div className="btn" style={{ marginTop: '16px', width: '100%', textAlign: 'center' }}>読む →</div>
          </div>

          <div style={{ flex: '0 0 200px', background: 'var(--wh)', border: '1px dashed var(--bd)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontSize: '16px', color: 'var(--gr)' }}>バックナンバー</span>
            <div className="btn" style={{ fontSize: '14px', padding: '6px 16px' }}>一覧を見る →</div>
          </div>
        </div>
      </div>

      {/* EC Banner */}
      <div style={{ background: 'var(--bk)', padding: '14px 20px', textAlign: 'center' }}>
        <div style={{ fontSize: '7px', color: 'rgba(255,255,255,.4)', letterSpacing: '.16em', marginBottom: '5px' }}>ONLINE STORE</div>
        <div className="btn-y">オンラインストアへ</div>
      </div>

      <WireframeFooter />
    </div>
  );
}
