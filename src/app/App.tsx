import { useState } from 'react';
import { TopPage } from './components/pages/TopPage';
import { UdonPage } from './components/pages/UdonPage';
import { LetterPage } from './components/pages/LetterPage';
import { StorePage } from './components/pages/StorePage';
import { FoodPage } from './components/pages/FoodPage';
import { AboutPage } from './components/pages/AboutPage';
import { RecruitPage } from './components/pages/RecruitPage';
import { ContactPage } from './components/pages/ContactPage';
import { NewsPage } from './components/pages/NewsPage';

type PageId = 'top' | 'news' | 'about' | 'udon' | 'letter' | 'stores' | 'food' | 'recruit' | 'contact';

const pages: { id: PageId; label: string; component: JSX.Element }[] = [
  { id: 'top', label: 'P.01 TOPページ', component: <TopPage /> },
  { id: 'news', label: 'P.02 お知らせ', component: <NewsPage /> },
  { id: 'about', label: 'P.03 美々卯について', component: <AboutPage /> },
  { id: 'udon', label: 'P.04 名物うどんすき', component: <UdonPage /> },
  { id: 'letter', label: 'P.05 折々の手紙', component: <LetterPage /> },
  { id: 'stores', label: 'P.06 店舗', component: <StorePage /> },
  { id: 'food', label: 'P.07 美々卯のお料理', component: <FoodPage /> },
  { id: 'recruit', label: 'P.08 採用情報', component: <RecruitPage /> },
  { id: 'contact', label: 'P.09 お問い合わせ', component: <ContactPage /> },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('top');

  const activePage = pages.find((p) => p.id === currentPage);

  return (
    <div className="min-h-screen bg-[#E8E4DC] py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Cover */}
        <div className="bg-[#6B6B6B] text-white p-8 rounded-lg">
          <div className="text-xs uppercase tracking-wider text-[#F4CE3A] mb-4">
            BOW PLUS KYOTO — MIMIU RENEWAL PROJECT
          </div>
          <h1 className="text-2xl tracking-wider mb-2">
            美々卯 サイトリニューアル<br />ワイヤーフレーム集
          </h1>
          <div className="text-sm text-gray-300 mb-6">WIREFRAME DOCUMENT v2.0 — 2026.05</div>
          <div className="text-xs text-gray-400 border-t border-gray-600 pt-4 space-y-1">
            <div>制作：Bow plus Kyoto（竹澤）</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex overflow-x-auto border-b border-gray-200">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setCurrentPage(page.id)}
                className={`
                  px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors
                  ${
                    currentPage === page.id
                      ? 'bg-[#F4CE3A] text-black border-b-2 border-[#F4CE3A]'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }
                `}
              >
                {page.label}
              </button>
            ))}
          </div>

          {/* Page Content */}
          <div className="p-6">{activePage?.component}</div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-xs text-gray-500">
          © 2026 Bow plus Kyoto. All rights reserved.
        </div>
      </div>
    </div>
  );
}
