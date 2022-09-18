import Navbar from "../../navbar/Navbar";
import Footer from '../../footer/Footer'
import EarsMain from './EarsMain'
import ChangeCountry from "../../footer/ChangeCountry";
import Cart from '../../cart/Cart'
import ProductTemplate from "../../globalComponent/productTemplate";

import transparent from '../../../image/products/transparent.jpg'
import sound from '../../../image/products/sound.webp'
import sound2 from '../../../image/products/sound2.webp'
import clear from '../../../image/products/clear.webp'
import battery from '../../../image/products/battery.webp'
import light from '../../../image/products/light.webp'
import features from '../../../image/products/features.webp'
import features2 from '../../../image/products/features2.webp'
import sustainability from '../../../image/products/Sustainability.webp'

const earTemplateProps = {
    transparent: {
        img: transparent,
        number: '002.',
        short: 'Transparent Design.',
        slogan: '大膽無畏。',
        intro: '丟掉偽裝，盡情用純粹的白與深邃的黑來表達真我',
        intro2: '比起高牆，我們更相信帶來視野的窗戶。我們為Ear (1)穿上透明的薄殼，獨具一格的通透可見耳機結構工藝，以及體會最原始的科技美學。',
    },
    sound: {
        img: sound,
        number: '003.',
        short: 'Sound.',
        slogan: '寂靜之聲。',
        intro: '生活中總有些需要安靜的時刻，啟動主動降噪消除背景雜音，特別適合機上旅程和辦公室需求。只需要一個按鍵開啟通透模式，隨時連結現實世界的環境音。',
    },
    sound2: {
        img: sound2,
        number: '004.',
        short: 'Sound.',
        slogan: '純淨音質，精準聲調。',
        intro: '打破科技藩籬，追求極致音質，11.6 mm動圈驅動單體和大尺寸揚聲器，帶來純淨音質。音頻界的潮流先鋒Teenage Engineering™極致調音，確保高中低音表現平衡。',
    },
    clear: {
        img: clear,
        number: '005.',
        short: 'Clear Voice Technology.',
        slogan: '讓我們說的更「清楚」',
        intro: 'Nothing Ear (1)採用Clear Voice Technology和3個高解析度麥克風，確保聲音不失真。當你說話的時候，即使在風速達每小時40公里的環境中，進階演算法將參考百萬種聲音後，獨立強化你的音調，使其無懈可擊的精確傳達。',
    },
    battery: {
        img: battery,
        number: '006.',
        short: 'Battery.',
        slogan: '無線隨時充電。',
        intro: '充電一次的聆聽時間最長可達5小時，搭配充電盒充電的聆聽時間可達34小時。小巧、設計優雅的充電盒不僅可以無線充電，也能快速充電耳機 。',
    },
    light: {
        img: light,
        number: '007.',
        short: 'Lightweight.',
        slogan: '輕盈如雲。',
        intro: '4.7克雲朵般輕巧的ear (1)，減壓氣孔和人體工學貼耳設計，穿戴起來十分舒適，更附有三種尺寸的矽膠耳塞套隨心調整。恍若無物般的極致舒適，這就是我們想帶給你的感受。',
    },
    features: {
        img: features,
        number: '008.',
        short: 'Features.',
        slogan: '打造專屬你的ear (1)',
        intro: 'Ear (1) app讓你享有專屬訂製的獨家體驗，聲音平衡器、手勢控制 、「找回我的耳機」等多種服務。iOS和Android系統皆能下載。',
        intro2: '配對即樂',
        intro3: '只要打開充電盒、按下按鈕，立即配對相容Android設備，享受耳間之樂。',
    },
    features2: {
        img: features2,
        number: '009.',
        short: 'Features.',
        slogan: '極致防水，動靜皆宜。',
        intro: '每只耳機都有網孔設計，確保防水等級維持在IPX4，可以抵擋汗水和一般潑水。',
        intro2: '聲聲「入」耳',
        intro3: '只要把耳機拿離耳朵，就能自動暫停播放中的音樂或影片；想繼續播放，把耳機放回耳朵即可。',
    },
    sustainability: {
        img: sustainability,
        number: '010.',
        short: '低碳悅耳。',
        slogan: '大膽無畏。',
        intro: '優秀的產品意味著需要我們做到最好。我們開始於國際公認的第三方合作，如總部位於日內瓦的SGS，以評估Ear (1)對環境的影響',
        intro2: '為了消弭1.78公斤的碳足跡，我們在制造過程中選擇可再生能源，並通過符合碳標準公司購買了額外的碳信用額度，用以抵消剩餘排放。',
    },
}

export default function App() {
    return (
        <div>
            <Navbar black={true} twoBlack={true}/>
            <ChangeCountry/>
            <Cart />
            <EarsMain />

            {/* 主產品以下 */}
            <ProductTemplate subProps={earTemplateProps.transparent}/>
            <ProductTemplate subProps={earTemplateProps.sound}/>
            <ProductTemplate subProps={earTemplateProps.sound2}/>
            <ProductTemplate subProps={earTemplateProps.clear}/>
            <ProductTemplate subProps={earTemplateProps.battery}/>
            <ProductTemplate subProps={earTemplateProps.light}/>
            <ProductTemplate subProps={earTemplateProps.features}/>
            <ProductTemplate subProps={earTemplateProps.features2}/>
            <ProductTemplate subProps={earTemplateProps.sustainability}/>
            <Footer/>
        </div>
    );
}