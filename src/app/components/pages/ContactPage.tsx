import { WireframeNav } from '../common/WireframeNav';
import { WireframeFooter } from '../common/WireframeFooter';

export function ContactPage() {
  return (
    <div className="wf">
      <WireframeNav />

      {/* Page Title */}
      <div className="pgtitle">
        <div className="breadcrumb">HOME ＞ お問い合わせ</div>
        <div style={{ fontSize: '15px', letterSpacing: '.08em' }}>お問い合わせ</div>
      </div>

      {/* Contact Form */}
      <div className="sec">
        <div style={{ fontSize: '16px', color: 'var(--gr)', lineHeight: 2, marginBottom: '10px' }}>
          お問い合わせ前に<u>よくある質問</u>をご確認ください。店舗へのご予約は各店舗ページよりお願いします。
        </div>
        <div className="sl"><span className="yl"></span>お問い合わせフォーム</div>

        <div style={{ fontSize: '14px', color: 'var(--gr)', marginBottom: '4px' }}>
          お問い合わせタイトル <span style={{ color: '#C0392B' }}>*</span>
        </div>
        <div className="input-box" style={{ display: 'flex', alignItems: 'center', padding: '0 16px' }}>
          <span style={{ fontSize: '14px', color: 'var(--gr)' }}>選択してください ▼</span>
        </div>
        <div style={{ fontSize: '14px', color: 'var(--gr)', marginTop: '8px', marginBottom: '16px', paddingLeft: '16px' }}>
          <div style={{ padding: '4px 0' }}>・商品・サービスについて</div>
          <div style={{ padding: '4px 0' }}>・取材・メディア掲載</div>
          <div style={{ padding: '4px 0' }}>・お取引・業務提携</div>
          <div style={{ padding: '4px 0' }}>・その他</div>
        </div>

        <div style={{ fontSize: '14px', color: 'var(--gr)', marginBottom: '4px' }}>
          お名前 <span style={{ color: '#C0392B' }}>*</span>
        </div>
        <div className="input-box"></div>

        <div style={{ fontSize: '14px', color: 'var(--gr)', marginBottom: '4px' }}>
          メールアドレス <span style={{ color: '#C0392B' }}>*</span>
        </div>
        <div className="input-box"></div>

        <div style={{ fontSize: '14px', color: 'var(--gr)', marginBottom: '4px' }}>
          電話番号
        </div>
        <div className="input-box"></div>

        <div style={{ fontSize: '14px', color: 'var(--gr)', marginBottom: '4px' }}>
          お問い合わせ内容 <span style={{ color: '#C0392B' }}>*</span>
        </div>
        <div className="textarea-box"></div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '16px' }}>
          <div style={{ width: '18px', height: '18px', border: '1px solid var(--bd)', flexShrink: 0, marginTop: '2px' }}></div>
          <div style={{ fontSize: '14px', color: 'var(--gr)' }}>
            <u>プライバシーポリシー</u>に同意する
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div className="btn-y" style={{ padding: '12px 40px', fontSize: '16px' }}>送信する</div>
        </div>
      </div>

      {/* Other Contact Methods */}
      <div className="sec" style={{ background: 'var(--bg)' }}>
        <div className="sl"><span className="yl"></span>その他のお問い合わせ先</div>
        <div style={{ fontSize: '16px', color: 'var(--gr)', lineHeight: 2.2 }}>
          <div>ご予約・店舗 → 各店舗ページ</div>
          <div>オンラインストア → お問い合わせフォーム</div>
          <div>取材・メディア → フォームの「取材・メディア」区分</div>
        </div>
      </div>

      <WireframeFooter />
    </div>
  );
}
