// EVENTSページに並べる、VRChat内イベント運営の実績データ。

export type EventLink = { label: string; url: string };

/**
 * イベント規模の注記。グループ人数や来場者数は時期で増減するので、
 * 数字がいつ時点のものかを添える。サイト更新(号令メンテ)で数字を直したらここも直す。
 */
export const scaleNote = 'イベント規模の数字は2026年8月時点の目安です。時期によって変動します。';

export type EventEntry = {
  name: string;
  genre: string;
  /** 関わり方でセクション分けする */
  status: 'host' | 'organizer' | 'staff' | 'past';
  /** イベントごとの差し色 */
  color: string;
  /** public/events/ 配下のパス */
  image?: string;
  summary: string[];
  roles: string;
  tasks: string;
  scale: string[];
  related?: { name: string; scale: string; links?: EventLink[] }[];
  links: EventLink[];
  /** 欄の右下に出すクレジット(外部メンバーの担当表記) */
  credits?: { role: string; name: string; url?: string }[];
  /** 個別紹介ページがある場合のパス */
  page?: string;
};

export const events: EventEntry[] = [
  {
    name: 'Roof Top Junction',
    genre: 'DJイベント',
    status: 'host',
    color: '#ff4da6',
    image: '/events/roof-top-junction.jpg',
    page: '/events/roof-top-junction/',
    summary: [
      '"初心者でも音楽を楽しめる場づくり" を軸にした音楽イベント。ライト層の来場者はもちろん、毎回初心者の出演者も迎え入れ、「はじめの一歩」を踏み出しやすい空気感を大切にしています。',
      '屋上という開放的なロケーションを会場にすることで、従来のDJイベントにありがちなアングラ感を排し、誰でも立ち寄れる雰囲気に。大衆向けの親しみやすさと、DJカルチャーの伝統への敬意——その2つの価値観を両立させながら、誰にとっても開かれた音楽体験を提供します。',
      'このイベントを通じて、より多くの人がVRChat内で聴く音楽の魅力に触れ、次のイベントへと踏み出すきっかけになることを願っています。',
    ],
    roles: 'イベント主催、チームマネジメント、広報・ポスター制作、営業',
    tasks: 'チームリーダー、広告戦略の策定、出演者コーディネート、ビジュアル制作、ワールド整備',
    scale: ['グループ人数 500人以上', '来場者 200人/1回', 'インスタンス上限 80人', '平均滞在人数 65人'],
    links: [
      { label: 'VRChatグループ', url: 'https://vrc.group/RTJUNC.3229' },
    ],
    credits: [
      { role: 'ロゴデザイン', name: 'promnco', url: 'https://x.com/promnco1220' },
    ],
  },
  {
    name: 'Gallery & fan cafe Kittens',
    genre: '複合イベント',
    status: 'organizer',
    color: '#d9a679',
    image: '/events/fancafe-kittens.jpg',
    summary: [
      'YOYOGIMORIのアバター「Undone Kittens」をテーマにした、gallery併設型のファンメイドカフェ。イベント中はスタッフのアンキテちゃんとの会話や、中庭でのアーティスト弾き語りなど特別な体験を楽しめます。',
      'ワールド内には、ほぼ全てのYOYOGIMORI対応衣装が展示されているコスチュームギャラリーを設置。ただ衣装を置くだけでなく、作家とのコラボ衣装制作を行うなど、YOYOGIMORIコミュニティを盛り上げる取り組みを実施しています。',
      'さらに本イベントは、VRChatの写真文化を盛り上げることにも積極的に取り組んでいます。月替わりで作家を招くギャラリー展示に加え、半年に一度のフォトコンテスト、フォトブック制作、講師を招いた写真教室など、接客イベント日以外にも多彩な活動を展開。創作とコミュニティが交わる場として多くの来場者に親しまれています。',
    ],
    roles: '運営スタッフ、事務スタッフ、SNSスタッフ、イベントスタッフ',
    tasks: 'イベント戦略立案、データ管理、広報戦略の策定、会場運営',
    scale: ['グループ人数 890人', '来場者 100人/1回', 'インスタンス上限 40人×2インスタンス制'],
    links: [
      { label: 'VRChatグループ', url: 'https://vrc.group/KITTEN.9735' },
      { label: 'X', url: 'https://x.com/Fancafe_Kittens' },
    ],
  },
  {
    name: 'VRC貴族部 Eleganttique',
    genre: '会員制コミュニティイベント',
    status: 'staff',
    color: '#ffb04d',
    image: '/events/eleganttique.jpg',
    summary: [
      'VRC貴族部（Eléganttiqué）は、「エレガント」をテーマにした会員制コミュニティ。貴族的な美意識や礼節を大切にしながら、交流を楽しむ場や、コンテンツを提供しています。',
      '会員限定のイベントや文化交流、集会を開催し、礼儀作法、歴史、芸術に関する学びの機会を提供。音楽会や茶会などの文化体験イベントも行っています。',
    ],
    roles: 'イベントスタッフ、撮影スタッフ',
    tasks: '会場スタッフ、写真撮影業務、ゲスト出演者との事前調整業務',
    scale: ['グループ人数 470人'],
    related: [
      {
        name: 'ロールプレイイベント『サロン・ドゥ・エレガンティーク』',
        scale: 'グループ人数 2320人',
        links: [
          { label: 'X', url: 'https://x.com/VRC_SALON' },
          { label: 'Web', url: 'https://vrcsalon.wixsite.com/salon-d-elegantique' },
        ],
      },
      { name: '集会イベント『エレガントアバター集会』', scale: 'グループ人数 650人' },
    ],
    links: [
      { label: 'VRChatグループ', url: 'https://vrc.group/NOBLE.6101' },
      { label: 'X', url: 'https://x.com/ELEGANT_VRC' },
      { label: 'Web', url: 'https://vrcsalon.wixsite.com/hakastlaurent/elegantique' },
    ],
  },
  {
    name: 'UniMagic - 魔術学舎United',
    genre: '学術系学園イベント',
    status: 'past',
    color: '#a8aabc',
    summary: [
      'VRCにおける技術を学ぶことができる学園型イベント。UnityやBlenderなどのVRCの改変やワールド制作に必要な技術関連の知識を主な題材として取り扱っています。',
      'Unityの基礎が学べる「Unity本科」、そこからレベルアップした内容の「アバターギミック本科」・「ワールド専攻科」、そして3Dモデル制作に特化した「Blender本科」と、学びたい技術に合わせて選べる多彩なコースで、VRC改変の基礎から応用まで学べます。',
      'イベント期間は一期辺り2＋1週間。毎日授業を受け知識を深める2週間と、学んだ成果を実践で発揮する卒業制作期間（1週間）で、短期間で深い学びを得られる構成です。',
    ],
    roles: '企画補助、講師サポート',
    tasks: '授業内容の整理・改善、組織運営のフロー改善',
    scale: ['グループ人数 530人', '一期辺り 20人×2～3クラス', '3ヵ月周期での開催'],
    links: [
      { label: 'VRChatグループ', url: 'https://vrc.group/UNIMGC.5576' },
      { label: 'X', url: 'https://x.com/UniMagicVRC' },
    ],
  },
  {
    name: 'UniCafe',
    genre: '学術系カフェイベント',
    status: 'past',
    color: '#4dd98a',
    summary: [
      '「いつでもスタッフに質問ができる作業カフェ」をコンセプトにした、いわゆる自習室的なイベント。落ち着いたカフェのワールド内に、Unityの質問に回答できるスタッフが常駐しており、来場者はいつでも質問を投げかけることができます。',
      '人が居る空間でのんびりと作業をしつつ、疑問にぶつかった際はスタッフと共に解決する。VRChatを始めたばかりの人に改変文化を楽しんでもらうイベント設計を心がけています。',
    ],
    roles: 'イベント主催、チームマネジメント、広報、スタッフ',
    tasks: '会場スタッフ、キャスト管理・育成、広報戦略の策定',
    scale: ['グループ人数 166人', 'Discord人数 53人'],
    links: [
      { label: 'VRChatグループ', url: 'https://vrc.group/UCAFE.5093' },
      { label: 'X', url: 'https://x.com/uni_cafe_jp' },
    ],
  },
];



