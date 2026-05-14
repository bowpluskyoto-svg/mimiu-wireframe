import { WireframeNav } from '../common/WireframeNav';
import { WireframeFooter } from '../common/WireframeFooter';

export function RecruitPage() {
  return (
    <div className="wf">
      <WireframeNav currentPage="recruit" />

      {/* Hero Visual */}
      <div className="ph" style={{ height: '360px', position: 'relative' }}>
        <span style={{ fontSize: '18px', lineHeight: 1.8 }}>
          採用メインビジュアル<br />
          職人の手元・店舗の様子・チームワーク
        </span>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            color: 'white',
            fontSize: '32px',
            fontWeight: 500,
            letterSpacing: '.12em',
          }}
        >
          <div className="tl h" style={{ width: '300px', background: 'rgba(255,255,255,0.3)' }}></div>
          <div className="tl f" style={{ width: '250px', marginTop: '8px', background: 'rgba(255,255,255,0.3)' }}></div>
        </div>
      </div>

      {/* 美々卯が求める人材 */}
      <div className="sec">
        <div className="sl">
          <span className="yl"></span>美々卯が求める人材
        </div>
        <div className="tl h" style={{ width: '60%' }}></div>
        <div className="tl f"></div>
        <div className="tl f"></div>
        <div className="tl m"></div>
        <div className="tl s" style={{ marginBottom: '20px' }}></div>
        <div className="g3">
          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px', color: 'var(--gr)' }}>◆</div>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>探究心</div>
            <div className="tl f"></div>
            <div className="tl m"></div>
            <div className="tl s"></div>
          </div>
          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px', color: 'var(--gr)' }}>◆</div>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>チームワーク</div>
            <div className="tl f"></div>
            <div className="tl m"></div>
            <div className="tl s"></div>
          </div>
          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px', color: 'var(--gr)' }}>◆</div>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>成長意欲</div>
            <div className="tl f"></div>
            <div className="tl m"></div>
            <div className="tl s"></div>
          </div>
        </div>
      </div>

      {/* 美々卯の職種紹介 */}
      <div className="sec" style={{ background: 'var(--bg)' }}>
        <div className="sl">
          <span className="yl"></span>美々卯の職種紹介
        </div>
        <div className="g3">
          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px', color: 'var(--gr)' }}>●</div>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>調理</div>
            <div className="tl f"></div>
            <div className="tl m"></div>
            <div className="tl s"></div>
          </div>
          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px', color: 'var(--gr)' }}>●</div>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>サービス</div>
            <div className="tl f"></div>
            <div className="tl m"></div>
            <div className="tl s"></div>
          </div>
          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px', color: 'var(--gr)' }}>●</div>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>店舗開発</div>
            <div className="tl f"></div>
            <div className="tl m"></div>
            <div className="tl s"></div>
          </div>
          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px', color: 'var(--gr)' }}>●</div>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>製造</div>
            <div className="tl f"></div>
            <div className="tl m"></div>
            <div className="tl s"></div>
          </div>
          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px', color: 'var(--gr)' }}>●</div>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>営業</div>
            <div className="tl f"></div>
            <div className="tl m"></div>
            <div className="tl s"></div>
          </div>
          <div className="card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px', color: 'var(--gr)' }}>●</div>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>店舗管理・事務</div>
            <div className="tl f"></div>
            <div className="tl m"></div>
            <div className="tl s"></div>
          </div>
        </div>
      </div>

      {/* キャリアプラン */}
      <div className="sec">
        <div className="sl">
          <span className="yl"></span>キャリアプラン
        </div>
        <div className="tl h" style={{ width: '50%' }}></div>
        <div className="tl f"></div>
        <div className="tl m" style={{ marginBottom: '20px' }}></div>
        <div className="ph" style={{ height: '240px' }}>
          <span>キャリアパス図<br />入社〜キャリアアップの流れ</span>
        </div>
      </div>

      {/* 先輩インタビュー */}
      <div className="sec" style={{ background: 'var(--bg)' }}>
        <div className="sl">
          <span className="yl"></span>先輩インタビュー
        </div>
        <div className="g3">
          <div className="card" style={{ overflow: 'hidden' }}>
            <div className="ph" style={{ height: '180px' }}>
              <span>先輩社員写真1</span>
            </div>
            <div style={{ padding: '16px' }}>
              <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '6px' }}>
                調理スタッフ／入社3年目
              </div>
              <div className="tl f"></div>
              <div className="tl m"></div>
              <div className="btn" style={{ marginTop: '12px', fontSize: '14px', padding: '6px 16px' }}>
                インタビューを読む →
              </div>
            </div>
          </div>
          <div className="card" style={{ overflow: 'hidden' }}>
            <div className="ph" style={{ height: '180px' }}>
              <span>先輩社員写真2</span>
            </div>
            <div style={{ padding: '16px' }}>
              <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '6px' }}>
                サービススタッフ／入社2年目
              </div>
              <div className="tl f"></div>
              <div className="tl m"></div>
              <div className="btn" style={{ marginTop: '12px', fontSize: '14px', padding: '6px 16px' }}>
                インタビューを読む →
              </div>
            </div>
          </div>
          <div className="card" style={{ overflow: 'hidden' }}>
            <div className="ph" style={{ height: '180px' }}>
              <span>先輩社員写真3</span>
            </div>
            <div style={{ padding: '16px' }}>
              <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '6px' }}>
                店長／入社10年目
              </div>
              <div className="tl f"></div>
              <div className="tl m"></div>
              <div className="btn" style={{ marginTop: '12px', fontSize: '14px', padding: '6px 16px' }}>
                インタビューを読む →
              </div>
            </div>
          </div>
          <div className="card" style={{ overflow: 'hidden' }}>
            <div className="ph" style={{ height: '180px' }}>
              <span>先輩社員写真4</span>
            </div>
            <div style={{ padding: '16px' }}>
              <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '6px' }}>
                営業スタッフ／入社5年目
              </div>
              <div className="tl f"></div>
              <div className="tl m"></div>
              <div className="btn" style={{ marginTop: '12px', fontSize: '14px', padding: '6px 16px' }}>
                インタビューを読む →
              </div>
            </div>
          </div>
          <div className="card" style={{ overflow: 'hidden' }}>
            <div className="ph" style={{ height: '180px' }}>
              <span>先輩社員写真5</span>
            </div>
            <div style={{ padding: '16px' }}>
              <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '6px' }}>
                製造スタッフ／入社7年目
              </div>
              <div className="tl f"></div>
              <div className="tl m"></div>
              <div className="btn" style={{ marginTop: '12px', fontSize: '14px', padding: '6px 16px' }}>
                インタビューを読む →
              </div>
            </div>
          </div>
          <div className="card" style={{ overflow: 'hidden' }}>
            <div className="ph" style={{ height: '180px' }}>
              <span>先輩社員写真6</span>
            </div>
            <div style={{ padding: '16px' }}>
              <div style={{ fontSize: '16px', fontWeight: 500, marginBottom: '6px' }}>
                店舗管理／入社4年目
              </div>
              <div className="tl f"></div>
              <div className="tl m"></div>
              <div className="btn" style={{ marginTop: '12px', fontSize: '14px', padding: '6px 16px' }}>
                インタビューを読む →
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 社長インタビュー */}
      <div className="sec">
        <div className="sl">
          <span className="yl"></span>社長インタビュー
        </div>
        <div className="row" style={{ gap: '24px', alignItems: 'center' }}>
          <div className="ph" style={{ flex: '0 0 280px', height: '280px' }}>
            <span>社長写真</span>
          </div>
          <div style={{ flex: 1 }}>
            <div className="tl h" style={{ width: '70%' }}></div>
            <div className="tl f"></div>
            <div className="tl f"></div>
            <div className="tl m"></div>
            <div className="tl s"></div>
            <div className="btn" style={{ marginTop: '16px' }}>
              インタビュー全文を読む →
            </div>
          </div>
        </div>
      </div>

      {/* 教育・育成制度 */}
      <div className="sec" style={{ background: 'var(--bg)' }}>
        <div className="sl">
          <span className="yl"></span>教育・育成制度
        </div>
        <div className="g2">
          <div className="card" style={{ padding: '20px' }}>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '12px' }}>
              調理研修
            </div>
            <div className="tl f"></div>
            <div className="tl f"></div>
            <div className="tl m"></div>
            <div className="tl s"></div>
          </div>
          <div className="card" style={{ padding: '20px' }}>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '12px' }}>
              さまざまな教育
            </div>
            <div className="tl f"></div>
            <div className="tl f"></div>
            <div className="tl m"></div>
            <div className="tl s"></div>
          </div>
        </div>
      </div>

      {/* 福利厚生・イベント */}
      <div className="sec">
        <div className="sl">
          <span className="yl"></span>福利厚生・イベント
        </div>
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '12px' }}>
            安心して暮らす
          </div>
          <div className="tl f"></div>
          <div className="tl m"></div>
          <div className="tl s"></div>
        </div>
        <div className="g3">
          <div className="card" style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: 500 }}>健康診断</div>
          </div>
          <div className="card" style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: 500 }}>社会保険完備</div>
          </div>
          <div className="card" style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: 500 }}>従業員割引</div>
          </div>
          <div className="card" style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: 500 }}>研修制度</div>
          </div>
          <div className="card" style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: 500 }}>社員旅行</div>
          </div>
          <div className="card" style={{ padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: 500 }}>資格取得支援</div>
          </div>
        </div>
        <div style={{ marginTop: '24px' }}>
          <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '12px' }}>
            様々なイベント
          </div>
          <div className="tl f"></div>
          <div className="tl m"></div>
        </div>
      </div>

      {/* 会社情報・募集要項 */}
      <div className="sec" style={{ background: 'var(--bg)' }}>
        <div className="sl">
          <span className="yl"></span>会社情報・募集要項
        </div>
        <div className="g2">
          <div>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '12px' }}>
              会社情報
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <div className="tl m" style={{ marginBottom: '8px' }}></div>
              <div className="tl f"></div>
              <div className="tl f"></div>
              <div className="tl m"></div>
              <div className="tl s"></div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '12px' }}>
              募集要項
            </div>
            <div className="card" style={{ padding: '20px' }}>
              <div className="tl m" style={{ marginBottom: '8px' }}></div>
              <div className="tl f"></div>
              <div className="tl f"></div>
              <div className="tl m"></div>
              <div className="tl s"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Q&A */}
      <div className="sec" style={{ background: 'var(--bg)' }}>
        <div className="sl">
          <span className="yl"></span>よくあるご質問
        </div>
        <div className="accord">
          <div className="accord-h">
            <span>応募資格はありますか？</span>
            <span>▼</span>
          </div>
        </div>
        <div className="accord">
          <div className="accord-h">
            <span>未経験でも応募できますか？</span>
            <span>▼</span>
          </div>
        </div>
        <div className="accord">
          <div className="accord-h">
            <span>勤務地はどこですか？</span>
            <span>▼</span>
          </div>
        </div>
        <div className="accord">
          <div className="accord-h">
            <span>研修制度はありますか？</span>
            <span>▼</span>
          </div>
        </div>
        <div className="accord">
          <div className="accord-h">
            <span>選考の流れを教えてください</span>
            <span>▼</span>
          </div>
        </div>
      </div>

      {/* 採用情報・お問い合わせ */}
      <div className="sec">
        <div className="sl">
          <span className="yl"></span>採用情報・お問い合わせ
        </div>
        <div style={{ textAlign: 'center', padding: '32px' }}>
          <div className="tl h" style={{ width: '60%', margin: '0 auto 12px' }}></div>
          <div className="tl f" style={{ margin: '0 auto 8px' }}></div>
          <div className="tl m" style={{ margin: '0 auto 24px' }}></div>
          <div className="ph" style={{ height: '120px', marginBottom: '20px', maxWidth: '200px', margin: '0 auto 20px' }}>
            <span>QRコード</span>
          </div>
          <div className="btn-y">採用エントリーフォームへ</div>
        </div>
      </div>

      <WireframeFooter />
    </div>
  );
}
