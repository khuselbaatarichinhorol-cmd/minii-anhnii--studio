import { CreatorProfile, ProjectItem } from '../types';
import avatarImg from '../assets/images/portfolio_avatar_1792291560875.jpg';
import dreamJobImg from '../assets/images/project_dream_job_1792291562200.jpg';
import youtubeMediaImg from '../assets/images/project_youtube_media_1792291561916.jpg';
import gameHubImg from '../assets/images/project_game_hub_1792291584817.jpg';
import herdingGameImg from '../assets/images/project_herding_game_1792291561176.jpg';

export const CREATOR_PROFILE: CreatorProfile = {
  name: 'Хүсэлбаатар',
  title: 'Веб хөгжүүлэгч & Бүтээлч контент бүтээгч',
  email: 'khuselbaatarichinhorol@gmail.com',
  location: 'Улаанбаатар, Монгол',
  defaultSubdomain: 'glittery-kataifi-2e78a4',
  avatar: avatarImg,
  bio: 'Интерактив веб хуудас, хөгжилтэй мини тоглоомууд болон сонирхолтой контентууд бүтээх сонирхолтой залуу хөгжүүлэгч.',
  aboutText: [
    'Сайн байна уу! Намайг Хүсэлбаатар гэдэг. Би орчин үеийн веб технологи, интерактив тоглоом болон дижитал контент бүтээх чиглэлээр суралцан ажиллаж байна.',
    'Миний зорилго бол хэрэглэгчдэд хялбар бөгөөд сонирхолтой туршлага бэлэглэх, монгол өв соёл болон орчин үеийн технологийг хослуулсан шинэлэг бүтээлүүдийг хийх явдал юм.',
    'Энд тавигдсан бүтээлүүд нь миний Netlify платформ дээр байршуулсан бие даасан төслүүд бөгөөд та карт тус бүр дээр дарж шууд үзэх боломжтой.'
  ],
  stats: [
    { label: 'Нийт бүтээл', value: '4' },
    { label: 'Интерактив төсөл', value: '2' },
    { label: 'Веб технологи', value: 'HTML/CSS/JS' },
    { label: 'Байршил', value: 'Netlify Cloud' }
  ]
};

// "Миний бүтээлүүд" хэсэг: Таны оруулсан бодит Netlify холбоосуудаар тохируулав.
export const PROJECTS_LIST: ProjectItem[] = [
  {
    id: 'dream-job',
    title: 'Мөрөөдлийн ажил',
    category: 'career',
    categoryLabel: 'Карьер & Төлөвлөлт',
    path: '/job',
    rawUrl: 'https://glittery-kataifi-2e78a4.netlify.app/job',
    description: 'Ирээдүйн зорилго, мэргэжлийн замнал болон мөрөөдлийн ажлын төлөвлөгөөг танилцуулсан хуудас.',
    detailedInfo: 'Хувь хүний хөгжил, карьерын зорилт болон суралцах шат дарааллыг интерактив хэлбэрээр эмхэтгэсэн веб хуудас.',
    image: dreamJobImg,
    tags: ['HTML5', 'CSS3', 'Зорилго', 'Карьер'],
    features: [
      'Мэргэжлийн замналын төлөвлөгөө',
      'Хувь хүний ур чадварын зорилтууд',
      'Цэвэрхэн, хэрэглэгчид ойлгомжтой бүтэц'
    ]
  },
  {
    id: 'my-youtube',
    title: 'Миний YouTube',
    category: 'media',
    categoryLabel: 'Видео & Контент',
    path: '/yout',
    rawUrl: 'https://glittery-kataifi-2e78a4.netlify.app/yout',
    description: 'Миний бэлтгэсэн сонирхолтой бичлэгүүд, сургалтын видео болон YouTube сувгийн төв.',
    detailedInfo: 'Видео контент, хичээлүүд болон бүтээлч туршилтуудыг нэг дор цуглуулсан видео төв хуудас.',
    image: youtubeMediaImg,
    tags: ['YouTube', 'Видео', 'Контент', 'Сургалт'],
    features: [
      'Бичлэгүүдийг шууд үзэх боломж',
      'Сувгийн холбоос ба захиалга',
      'Хамгийн сүүлийн үеийн контентын цуглуулга'
    ]
  },
  {
    id: 'game-site',
    title: 'Тоглоомын сайт',
    category: 'games',
    categoryLabel: 'Тоглоомын төсөл',
    path: '/tusul.html',
    rawUrl: 'https://glittery-kataifi-2e78a4.netlify.app/tusul.html',
    description: 'Браузер дээр ажиллах сонирхолтой мини тоглоомууд болон интерактив хөгжүүлэлтийн сан.',
    detailedInfo: 'JavaScript болон Canvas ашиглан хөгжүүлсэн интерактив мини тоглоомуудыг багтаасан тоглоомын төслийн сан.',
    image: gameHubImg,
    tags: ['JavaScript', 'Canvas', 'Мини тоглоом', 'Интерактив'],
    features: [
      'Браузерт шууд тоглох горим',
      'Тоглоомын онооны систем',
      'Хялбар, ойлгомжтой удирдлага'
    ]
  },
  {
    id: 'herding-game',
    title: 'Малаа хашаандаа',
    category: 'culture',
    categoryLabel: 'Монгол өв соёл & Тоглоом',
    path: '/togloom.html',
    rawUrl: 'https://glittery-kataifi-2e78a4.netlify.app/togloom.html',
    description: 'Монгол уламжлалт мал маллагааны сэдэвтэй, малаа хашаанд нь хураах хөгжилтэй тоглоом.',
    detailedInfo: 'Нүүдэлчин ахуй, таван хошуу малыг бэлчээрээс хашаанд нь аюулгүй хаших логик дүрэмтэй, монгол агуулгатай тоглоом.',
    image: herdingGameImg,
    tags: ['Монгол тоглоом', 'Мал аж ахуй', 'Логик', 'Хөгжилтэй'],
    features: [
      'Монгол хээ угалз, байгалийн дизайн',
      'Малаа зөөх, хураах даалгавар',
      'Бүх насныханд зориулсан сонирхолтой тоглолт'
    ]
  }
];

export const SKILLS_LIST = [
  { name: 'HTML5 & CSS3', level: 'Ахисан түвшин', desc: 'Уян хатан, цэвэрхэн бүтэцтэй веб загварчлал' },
  { name: 'JavaScript / DOM', level: 'Дунд түвшин', desc: 'Интерактив үйлдэл болон тоглоомын логик' },
  { name: 'Canvas & Тоглоом хөгжүүлэлт', level: 'Туршилт & Практик', desc: '2D мини тоглоомын зураглал, физик' },
  { name: 'Видео эвлүүлэг & Контент', level: 'Чөлөөтэй', desc: 'YouTube зориулалттай бичлэг бүтээх' },
  { name: 'Netlify & Web Hosting', level: 'Байршуулалт', desc: 'Вэб сайтуудыг найдвартай байршуулах' },
  { name: 'Монгол хэл дээрх агуулга', level: 'Бүтээлч', desc: 'Монгол хэлээрх цэвэр, өгөөжтэй контент' }
];
