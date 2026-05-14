interface WireframeNavProps {
  currentPage?: string;
}

export function WireframeNav({ currentPage }: WireframeNavProps) {
  return (
    <div className="nav">
      <div className="logo">美々卯</div>
      <div className="nl">
        <span className={currentPage === 'news' ? 'cur' : ''}>お知らせ</span>
        <span className={currentPage === 'about' ? 'cur' : ''}>美々卯について</span>
        <span className={currentPage === 'udon' ? 'cur' : ''}>名物うどんすき</span>
        <span className={currentPage === 'stores' ? 'cur' : ''}>店舗</span>
        <span className={currentPage === 'letter' ? 'cur' : ''}>折々の手紙</span>
        <span className={currentPage === 'recruit' ? 'cur' : ''}>採用</span>
      </div>
      <div className="ec-btn">オンラインストア</div>
    </div>
  );
}
