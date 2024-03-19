import Kienbock from './img/answer/Kienbock.png';
import Preiser from './img/answer/Preiser.png';
import survey from './img/answer/survey.png';
import Heberden from './img/answer/Heberden.png';
import Bouchard from './img/answer/Bouchard.png';
import anatomyHand from './img/answer/anatomyHand.png';
import osteoarthritis from './img/answer/osteoarthritis.png';
import {
    useState
} from 'react'
import functionalPosition from './img/answer/functionalPosition.png'

// import from './img/answer/.png'

export const useQuestionList = () => {
    const appName = 'anywhere-orthipedics'
    const jpName = '運動器疾患'
    const [questionList, setQuestionList] = useState([
        // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
        {
            groupTag: "2022本試験",
            groupContents: [{
                    detailInfo: '1.',
                    questionImg: [],
                    questionSentence: '良肢位が最も屈曲位を示す関節はどれか。',
                    choices: ['股関節','肘関節', '膝関節', '肩関節', '足関節'],
                    answerImg: [functionalPosition],
                    answer: '肘関節',
                    commentary: '肘関節は最も屈曲位を示す関節で、屈曲90度が良肢位である。良肢位とは関節が仮にその位置で動かなくなり、運動性が失われても、日常生活動作に及ぼす影響が最も少ない肢位のことである。他、股関節の良肢位は屈曲10~30度、膝関節の良肢位は屈曲10~20度、肩関節の良肢位は屈曲45~60度、足関節の良肢位は底屈10度である。',
                },{
                    detailInfo: '2.',
                    questionImg: [],
                    questionSentence: '直近の国民生活基礎調査における女性での有訴者率の高い症状を示す。最も高いものから2つ選べ。',
                    choices: ['頭痛','腰痛', '肩こり', '鼻がつまる', 'せきやたんが出る'],
                    answerImg: [survey],
                    answer: '腰痛,肩こり',
                    commentary: '直近の国民生活基礎調査における女性での有訴者率の高い症状は、腰痛が最も高く、次いで肩こりが高い。他、頭痛、鼻がつまる、せきやたんが出るの順に高い。女性では腰痛と肩こりが拮抗していて、年度によっては肩こりの方が高いこともある。',
                },{
                    detailInfo: '3.',
                    questionImg: [anatomyHand,osteoarthritis,Heberden,Bouchard],
                    questionSentence: '手の変形性関節症の好発部位はどれか。3つ選べ。',
                    choices: ['母指手根中手関節','示指遠位指節間関節', '中指手根中手関節', '環指近位指節間関節', '小指中手指節関節'],
                    answerImg: [],
                    answer: '母指手根中手関節,示指遠位指節間関節,小指中手指節関節',
                    commentary: '変形性関節症(Osteoarthritis)とは、加齢などを基盤として生じ、関節の機能障害をきたす疾患である。手の変形性関節症の好発部位は、母指手根中手関節、示指遠位指節間関節などである。DIP関節の関節症はHeberden結節と呼ばれ、関節リウマチで認められるPIPボタン穴変形とは区別される。また小指PIP関節の関節症はBouchard結節と呼ばれる。これらは中年以降の女性に多く、複数の指で同時に発生する。母指CM関節症も使いすぎの高齢女性に多く、治療として人工関節手術・骨切り術・関節固定術などが行われる。遠位指節間関節/DIP:Distal Interphalangeal Joint、中指手根中手関節/CMC:Carpometacarpal Joint、中手指節関節/MCP:Metacarpophalangeal Joint、近位指節間関節/PIP:Proximal Interphalangeal Joint。',
                },{
                    detailInfo: '4.',
                    questionImg: [],
                    questionSentence: '手根骨壊死の好発部位はどれか。2つ選べ。',
                    choices: ['月状骨','有鈎骨', '豆状骨', '三角骨', '舟状骨'],
                    answerImg: [Kienbock,Preiser],
                    answer: '月状骨,舟状骨',
                    commentary: 'Kienbock(キーンベック)病は、月状骨への血行障害による無腐性壊死である。月状骨は、橈骨と尺骨の間に位置する手根骨の骨である。男性に多く、慢性外力による栄養動脈の遮断が原因とされる。Preiser(プライザー)病は、舟状骨への血行障害による無腐性壊死である。舟状骨は、橈骨と尺骨の間に位置する手根骨の骨である。Preiser病はそれほどメジャーな病気ではないが。他、有鈎骨、豆状骨、三角骨は手根骨壊死の好発部位ではない。',
                },{
                    detailInfo: '5.',
                    questionImg: [],
                    questionSentence: '外側型野球肘について誤っているのはどれか。',
                    choices: ['10~16歳に好発する','外側靭帯損傷が病因である', '繰り返す外反力により生じる', '局所安静により治癒する', '修復不良例には手術が行われる'],
                    answerImg: [],
                    answer: '局所安静により治癒する',
                    commentary: '外側型野球肘は、10~16歳に好発し、外側靭帯損傷が病因であり、繰り返す外反力により生じる。局所安静により治癒することはない。修復不良例には手術が行われる。',
                },{
                    detailInfo: '6.',
                    questionImg: [],
                    questionSentence: '骨軟部腫瘍について正しいのはどれか。',
                    choices: ['全悪性腫瘍に占める骨軟部悪性腫瘍の割合は、約25%と1/4を占める。','悪性骨腫瘍においては、転移性骨腫瘍が原発性のものより多い', '軟部腫瘍は、良悪性にかかわらず発症時から疼痛や発熱を伴う', '原発性悪性軟部腫瘍では、ほとんどに化学療法が有用である', '多くはMRIで診断がおおむね可能であり、生検を要するのは限られた症例である'],
                    answerImg: [],
                    answer: '軟部腫瘍は、良悪性にかかわらず発症時から疼痛や発熱を伴う',
                    commentary: '軟部腫瘍は、良悪性にかかわらず発症時から疼痛や発熱を伴うことはない。軟部腫瘍は、良悪性にかかわらず発症時から疼痛や発熱を伴うことはない。軟部腫瘍は、良悪性にかかわらず発症時から疼痛や発熱を伴うことはない。軟部腫瘍は、良悪性にかかわらず発症時から疼痛や発熱を伴うことはない。',
                },{
                    detailInfo: '7.',
                    questionImg: [],
                    questionSentence: '骨肉腫について誤っているのはどれか。',
                    choices: ['骨肉腫は、10歳代から思春期に好発する。','病理組織検査で、腫瘍性類骨形成がみられる。', '大部分が骨幹端に発生し、骨端側に強い骨変化を示す。', '遠隔転移は、主にリンパ系を介したリンパ節転移を示す。', '通常型の骨肉腫においては、ほぼすべてに化学療法を併用することが多い。'],
                    answerImg: [],
                    answer: '遠隔転移は、主にリンパ系を介したリンパ節転移を示す。',
                    commentary: '骨肉腫は、遠隔転移は、主にリンパ系を介したリンパ節転移を示すことはない。遠隔転移は、主に肺転移を示す。骨肉腫は、遠隔転移は、主にリンパ系を介したリンパ節転移を示すことはない。遠隔転移は、主に肺転移を示す。',
                },{
                    detailInfo: '8.',
                    questionImg: [],
                    questionSentence: '64歳の女性。大腿後面の腫瘤に気づき来院した。自発痛、圧痛は伴わず、隣接関節の機能障害も認めない。触診上、弾性硬で可動性に乏しい10cm大の腫瘤を触知し、MRIでは、T1WIで低輝度から等輝度T2WIで不均一に高輝度を呈する長径8cm大の腫瘍を大腿二頭筋内に認めた。この次に行う処置として正しいものはどれか。',
                    choices: ['単純摘出術を行う。','放射線治療を依頼する。', '化学療法を即座に開始する。', '早急に広汎切除術を施行する。', '生検術を行い病理組織診断を確定する。'],
                    answerImg: [],
                    answer: '生検術を行い病理組織診断を確定する。',
                    commentary: '大腿後面の腫瘤の次に行う処置としては、生検術を行い病理組織診断を確定することが適切である。大腿後面の腫瘤の次に行う処置としては、生検術を行い病理組織診断を確定することが適切である。',
                },{
                    detailInfo: '9.',
                    questionImg: [],
                    questionSentence: 'FGFR3異常症について正しいのはどれか。3つ選べ。',
                    choices: ['軟骨低形成症の病因となる。','体幹短縮型低身長を呈する。', '生命予後が極めて悪い。', '軟骨無形成症の知能は正常である。', '四肢管状骨の長径成長は低下する。'],
                    answerImg: [],
                    answer: '軟骨低形成症の病因となる,体幹短縮型低身長を呈する,四肢管状骨の長径成長は低下する',
                    commentary: 'FGFR3異常症は、軟骨低形成症の病因となり、体幹短縮型低身長を呈し、四肢管状骨の長径成長は低下する。他、生命予後が極めて悪いことはない。軟骨無形成症の知能は正常である。',
                },{
                    detailInfo: '10.',
                    questionImg: [],
                    questionSentence: 'リハビリテーション科医の役割について間違っているものはどれか。',
                    choices: ['活動に焦点を当て、活動を用いて治療する。','活動関連の包括的医学管理を行う。', '「活動の治療文化」を根付かせる。', '訓練室で待ち、集中的に訓練を行う。', '不動や廃用を回避し早期離床を促進する。'],
                    answerImg: [],
                    answer: '訓練室で待ち、集中的に訓練を行う。',
                    commentary: 'リハビリテーション科医の役割については、訓練室で待ち、集中的に訓練を行うことはない。リハビリテーション科医の役割については、訓練室で待ち、集中的に訓練を行うことはない。',
                },{
                    detailInfo: '11.',
                    questionImg: [],
                    questionSentence: '骨Paget病について正しいのはどれか。3つ選べ。',
                    choices: ['単純エックス線上、骨吸収と修復の像がみられる。','アジアに多く見られる。', 'パラミクソウイルスの関与が指摘されている。', 'アルカリフォスファターゼは増加を示す。', 'ビスフォスフォネート製剤の有効性がある。'],
                    answerImg: [],
                    answer: '単純エックス線上、骨吸収と修復の像がみられる,アジアに多く見られる,アルカリフォスファターゼは増加を示す',
                    commentary: '骨Paget病については、パラミクソウイルスの関与が指摘されていることはない。骨Paget病については、パラミクソウイルスの関与が指摘されていることはない。',
                },{
                    detailInfo: '12.',
                    questionImg: [],
                    questionSentence: '変形性足関節症に対する人工足関節全置換術(TAA)の利点として以下の中から誤っているのはどれか。以下の中からすべて選べ。',
                    choices: ['可動域の温存は手をよ','すみやかな除痛', '比較的はやい術後回復', '沈み込みの危険性', '運動など強い負荷への懸念'],
                    answerImg: [],
                    answer: '沈み込みの危険性,運動など強い負荷への懸念',
                    commentary: '変形性足関節症に対する人工足関節全置換術(TAA)の利点としては、沈み込みの危険性、運動など強い負荷への懸念がある。変形性足関節症に対する人工足関節全置換術(TAA)の利点としては、沈み込みの危険性、運動など強い負荷への懸念がある。',
                },{
                    detailInfo: '13.',
                    questionImg: [],
                    questionSentence: '変形性足関節症に対する足関節固定術のデメリットとして正しいのはどれか。以下の中からすべて選べ。',
                    choices: ['安定性の再獲得','運動能力の回復', '良好な除痛', '可動域の消失', 'やや長い術後経過'],
                    answerImg: [],
                    answer: '可動域の消失,やや長い術後経過',
                    commentary: '変形性足関節症に対する足関節固定術のデメリットとしては、可動域の消失、やや長い術後経過がある。変形性足関節症に対する足関節固定術のデメリットとしては、可動域の消失、やや長い術後経過がある。',
                },{
                    detailInfo: '14.',
                    questionImg: [],
                    questionSentence: '末期変形性足関節症の治療として適切な治療はどれか。以下の中からすべて選べ。',
                    choices: ['人工足関節全置換術','足関節固定術', '下位脛骨骨切り術', '鏡視下滑膜切除術', '足底挿板'],
                    answerImg: [],
                    answer: '人工足関節全置換術,足関節固定術',
                    commentary: '末期変形性足関節症の治療としては、人工足関節全置換術、足関節固定術が適切である。末期変形性足関節症の治療としては、人工足関節全置換術、足関節固定術が適切である。',
                },{
                    detailInfo: '15.',
                    questionImg: [],
                    questionSentence: '下肢の人工膝関節置換術について正しいのはどれか。',
                    choices: ['感染性関節疾患に適応がある。','原がない。', '右足外側に痛覚の理由となる', '骨粗鬆症のある患者には適応がない。', '血友病性関節症患者には適応がない。'],
                    answerImg: [],
                    answer: '骨粗鬆症のある患者には適応がない。',
                    commentary: '下肢の人工膝関節置換術については、骨粗鬆症のある患者には適応がない。下肢の人工膝関節置換術については、骨粗鬆症のある患者には適応がない。',
                },{
                    detailInfo: '16.',
                    questionImg: [],
                    questionSentence: '周産期合併症の肺血栓塞栓症について誤っているのはどれか。',
                    choices: ['術後24時間以内に発症することが多い。','深部静脈血栓症の既往がある場合は発症頻度が高い。', '予防策として下肢弾性ストッキングの使用が有効である。', '起立、歩行開始時に発症することが多い。', '予防として足関節の底背屈運動が有効である。'],
                    answerImg: [],
                    answer: '起立、歩行開始時に発症することが多い。',
                    commentary: '周産期合併症の肺血栓塞栓症については、起立、歩行開始時に発症することが多い。周産期合併症の肺血栓塞栓症については、起立、歩行開始時に発症することが多い。',
                },{
                    detailInfo: '17.',
                    questionImg: [],
                    questionSentence: '骨端症について正しいものを2つ選べ。',
                    choices: ['ペルテス病は女児に多い。','キーンベック病は手をよく使用する男性に多い。', '第1ケーラー病は中足骨に発症する。', 'オスグッド・シュラッター病の両側発症はみられない。', 'パンナー病は局所安静で自然治癒が期待できる。'],
                    answerImg: [],
                    answer: 'ペルテス病は女児に多い,キーンベック病は手をよく使用する男性に多い',
                    commentary: '骨端症については、ペルテス病は女児に多く、キーンベック病は手をよく使用する男性に多い。骨端症については、ペルテス病は女児に多く、キーンベック病は手をよく使用する男性に多い。',
                },{
                    detailInfo: '18.',
                    questionImg: [],
                    questionSentence: 'ロコモティブシンドローム(ロコモ)について正しいものはどれか。',
                    choices: ['ロコモは保険疾患病名である。','ロコモ25は25点満点の評価法である。', 'ロコモ度の評価にロコチェックが使用される。', 'ロコモは運動器の障害によって移動機能が低下した状態である。', 'ロコモ度はロコモなし、 ロコモ度1 ロコモ度2の3段階に分けられる。'],
                    answerImg: [],
                    answer: 'ロコモは保険疾患病名である,ロコモ度の評価にロコチェックが使用される,ロコモは運動器の障害によって移動機能が低下した状態である。',
                    commentary: 'ロコモティブシンドローム(ロコモ)については、ロコモは保険疾患病名であり、ロコモ度の評価にロコチェックが使用され、ロコモは運動器の障害によって移動機能が低下した状態である。ロコモティブシンドローム(ロコモ)については、ロコモは保険疾患病名であり、ロコモ度の評価にロコチェックが使用され、ロコモは運動器の障害によって移動機能が低下した状態である。',
                },{
                    detailInfo: '19.',
                    questionImg: [],
                    questionSentence: '腰部脊柱管狭窄症について誤っているのはどれか。2つ選べ。',
                    choices: ['姿勢により症状は変化しない。','症状は、下肢の痛みやしびれである。', '下肢閉塞性動脈硬化症と鑑別を要する。', '著明な馬尾神経の圧迫により排尿障害が生じる。', 'ABI (ankle brachial pressure index) の検査で0.9未満を示す。'],
                    answerImg: [],
                    answer: '姿勢により症状は変化しない,著明な馬尾神経の圧迫により排尿障害が生じる',
                    commentary: '腰部脊柱管狭窄症については、姿勢により症状は変化しないことはない。腰部脊柱管狭窄症については、姿勢により症状は変化しないことはない。',
                },{
                    detailInfo: '20.',
                    questionImg: [],
                    questionSentence: '28歳の女性。右下腿の激痛と歩行困難を主訴に来院した。数年前から時々腰痛と右殿部痛とがあり、腰椎椎間板ヘルニアの診断を受けていた。今朝、顔を洗おうとしたとき、突然右下肢に激痛が走り動けなくなった。昨夜から排尿がない。右足外側に痛覚の脱失と触覚の鈍麻とがある。右アキレス腱反射は消失 右腓骨筋の筋力は2である。緊急手術の理由となる症候はどれか。',
                    choices: ['排尿障害','排尿障害', '腓骨筋の麻痺', '表在感覚の脱失', 'アキレス腱反射の消失'],
                    answerImg: [],
                    answer: '排尿障害',
                    commentary: '28歳の女性。右下腿の激痛と歩行困難を主訴に来院した。数年前から時々腰痛と右殿部痛とがあり、腰椎椎間板ヘルニアの診断を受けていた。今朝、顔を洗おうとしたとき、突然右下肢に激痛が走り動けなくなった。昨夜から排尿がない。右足外側に痛覚の脱失と触覚の鈍麻とがある。右アキレス腱反射は消失 右腓骨筋の筋力は2である。緊急手術の理由となる症候は排尿障害である。',
                },{
                    detailInfo: '21.',
                    questionImg: [],
                    questionSentence: '先天性股関節脱臼の特徴で誤っているのはどれか。',
                    choices: ['家族内発生は少ない。','第1子に多く発症する。', '骨盤位分娩に多く発症する。', 'ここ数年、発生率が増加している。', '患側股関節の皮膚溝が健側に比べ深く、 多くなる。'],
                    answerImg: [],
                    answer: '家族内発生は少ない。',
                    commentary: '先天性股関節脱臼の特徴で家族内発生は少ないことはない。先天性股関節脱臼の特徴で家族内発生は少ないことはない。',
                },{
                    detailInfo: '22.',
                    questionImg: [],
                    questionSentence: '小児虐待について正しいのはどれか。',
                    choices: ['児童虐待の発生はほとんどが小学生以上の児童である。','1歳未満の重度頭部外傷の10%は虐待である。', '児童虐待を疑った場合は通告の義務があり、これは医師の守秘義務違反には当たらない。', '新旧織り交ぜた多発骨折を見た場合でも虐待の可能性は低い。', '児童虐待の相談・処理件数はここ10年で年々減っている。'],
                    answerImg: [],
                    answer: '1歳未満の重度頭部外傷の10%は虐待である。',
                    commentary: '小児虐待について1歳未満の重度頭部外傷の10%は虐待であることはない。小児虐待について1歳未満の重度頭部外傷の10%は虐待であることはない。',
                },{
                    detailInfo: '23.',
                    questionImg: [],
                    questionSentence: '88歳の女性。室内で転倒し動けなくなり搬入された。右大腿骨転子部骨折と診断され、翌日に骨接合術を受けた。 10年前から Alzheimer 型認知症で内服治療を受けている。 手術当日に起こりうる合併症はどれか。 3つ選べ。',
                    choices: ['褥瘡','せん妄', '偽関節', '関節拘縮', '深部靜脈血栓症'],
                    answerImg: [],
                    answer: '褥瘡,せん妄,深部靜脈血栓症',
                    commentary: '88歳の女性。室内で転倒し動けなくなり搬入された。右大腿骨転子部骨折と診断され、翌日に骨接合術を受けた。 10年前から Alzheimer 型認知症で内服治療を受けている。 手術当日に起こりうる合併症は褥瘡、せん妄、深部靜脈血栓症である。',
                },{
                    detailInfo: '24.',
                    questionImg: [],
                    questionSentence: '右中殿筋不全患者の歩行時にみられるのはどれか。',
                    choices: ['体幹を前に傾ける。','右下肢を分回しする。', '右大腿骨遠位に手を当てる。', '左右の下肢を側方に広げる。', '右立脚時に骨盤を左側に傾ける。'],
                    answerImg: [],
                    answer: '右立脚時に骨盤を左側に傾ける。',
                    commentary: '右中殿筋不全患者の歩行時には、右立脚時に骨盤を左側に傾けることがある。右中殿筋不全患者の歩行時には、右立脚時に骨盤を左側に傾けることがある。',
                },{
                    detailInfo: '25.',
                    questionImg: [],
                    questionSentence: '手根管症候群について正しいのはどれか。3つ選べ。',
                    choices: ['女性に多い。','長期血液透析患者に発症しやすい。', '重症例では母指の対立運動が障害される。', '日中に増悪する疼痛が特徴である。', '保存療法は無効である。'],
                    answerImg: [],
                    answer: '女性に多い,長期血液透析患者に発症しやすい,重症例では母指の対立運動が障害される。',
                    commentary: '手根管症候群については、日中に増悪する疼痛が特徴であることはない。手根管症候群については、日中に増悪する疼痛が特徴であることはない。',
                },{
                    detailInfo: '26.',
                    questionImg: [],
                    questionSentence: '腓骨神経麻痺について正しいのはどれか。3つ選べ。',
                    choices: ['下肢における神経麻痺の中で最も頻度が高い。','足関節の底屈が障害される。', '砕石位の手術の際に起こりやすい合併症のひとつである。', '神経の連続性が保たれている場合は自然回復する可能性がある。', '腓骨神経麻痺による足関節の底屈が障害される。'],
                    answerImg: [],
                    answer: '下肢における神経麻痺の中で最も頻度が高い,足関節の底屈が障害される,神経の連続性が保たれている場合は自然回復する可能性がある。',
                    commentary: '腓骨神経麻痺については、腓骨神経麻痺による足関節の底屈が障害されることはない。腓骨神経麻痺については、腓骨神経麻痺による足関節の底屈が障害されることはない。',
                },{
                    detailInfo: '27.',
                    questionImg: [],
                    questionSentence: '人工関節置換術全般に関する記述で正しいのはどれか。2つ選べ。',
                    choices: ['人工関節置換術は骨粗鬆症があるため高齢者には適応はない。','人工関節置換術の目的は除痛、 可動域改善、 変形矯正などより ADLを改善することである。', '膝関節に対する人工膝関節置換術の件数が日本では最も多い。', '骨腫瘍切除後の機能再建には人工関節置換術の適応はない。', '人工関節置換術後の合併症として感染があるが, 抗菌薬投与で鎮静化し手術治療は不要である。'],
                    answerImg: [],
                    answer: '人工関節置換術の目的は除痛、 可動域改善、 変形矯正などより ADLを改善することである,膝関節に対する人工膝関節置換術の件数が日本では最も多い。',
                    commentary: '人工関節置換術全般に関する記述で、骨腫瘍切除後の機能再建には人工関節置換術の適応はないことはない。人工関節置換術全般に関する記述で、骨腫瘍切除後の機能再建には人工関節置換術の適応はないことはない。',
                },{
                    detailInfo: '28.',
                    questionImg: [],
                    questionSentence: '人工股関節置換術に関する記述で正しいのはどれか。2つ選べ。',
                    choices: ['人工股関節置換術後の緩みの原因としてポリエチレンの摩耗粉による骨溶解がある。','セメント人工股関節のインプラント生存率は概ね10年で50%未満である。', '人工股関節置換術は外傷後の変形性股関節症に対しては適応ではない。', '人工股関節は脱臼しない。', '人工股関節の材料としてセラミックが使用されることがある。'],
                    answerImg: [],
                    answer: '人工股関節置換術後の緩みの原因としてポリエチレンの摩耗粉による骨溶解がある,人工股関節置換術は外傷後の変形性股関節症に対しては適応ではない。',
                    commentary: '人工股関節置換術に関する記述で、人工股関節置換術は外傷後の変形性股関節症に対しては適応ではないことはない。人工股関節置換術に関する記述で、人工股関節置換術は外傷後の変形性股関節症に対しては適応ではないことはない。',
                },{
                    detailInfo: '29.',
                    questionImg: [],
                    questionSentence: '関節リウマチの2010年ACR/EULAR 分類基準の評価項目に含まれないものはどれか。',
                    choices: ['CRP','リウマトイド因子', '罹病期間', '抗 CCP 抗体', 'CRP'],
                    answerImg: [],
                    answer: 'CRP',
                    commentary: '関節リウマチの2010年ACR/EULAR 分類基準の評価項目に含まれないものはCRPである。関節リウマチの2010年ACR/EULAR 分類基準の評価項目に含まれないものはCRPである。',
                },{
                    detailInfo: '30.',
                    questionImg: [],
                    questionSentence: '関節リウマチによる関節外症状として誤っているのはどれか。',
                    choices: ['化膿性毛嚢炎','アミロイドーシス', '間質性肺炎', '体重減少', '骨粗鬆症'],
                    answerImg: [],
                    answer: '体重減少',
                    commentary: '関節リウマチによる関節外症状として体重減少が誤っている。関節リウマチによる関節外症状として体重減少が誤っている。',
                },
// {
                //     detailInfo: '',
                //     questionImg: [],
                //     questionSentence: '',
                //     choices: ['', '', '', '', ''],
                //     answerImg: [],
                //     answer: '',
                //     commentary: '',
                // }
    ]},{
        groupTag: '2021本試験',
        groupContents: [{
            detailInfo: '1.',
            questionImg: [],
            questionSentence: '高齢者に生じやすい骨折で、誤っているのはどれか。',
            choices: ['上腕骨頸部骨折','橈骨遠位端骨折', '腰椎圧迫骨折', '大腿骨頸部骨折', '脛骨骨幹部骨折'],
            answerImg: [],
            answer: '腰椎圧迫骨折',
            commentary: '高齢者に生じやすい骨折で、腰椎圧迫骨折は誤りである。上腕骨頸部骨折は高齢者ほど上腕骨頸部骨折のリスクが高まりますが、若年者でも強い外力が加わると骨折することがあります。橈骨遠位端骨折は高齢者に多く、転倒による手首の骨折の中で最も多い骨折です。大腿骨頸部骨折は高齢者に多く、骨粗鬆症による転倒が原因となります。脛骨骨幹部骨折は高齢者に多く、骨粗鬆症による転倒が原因となります。',
        },{
            detailInfo: '2.',
            questionImg: [],
            questionSentence: '女性より男性に多い疾患はどれか。',
            choices: ['外反母趾','先天性内反足', '思春期側弯症', '先天性筋性斜頸', '先天性股関節脱臼'],
            answerImg: [],
            answer: '先天性内反足',
            commentary: '女性より男性に多い疾患は先天性内反足である。外反母趾は女性に多く、高齢者に多い疾患です。思春期側弯症は女性に多く、思春期に発症する疾患です。先天性筋性斜頸は女児に多く、出生時に発症する疾患です。先天性股関節脱臼は女性に多く、女児に多い疾患です。',
        },{
            detailInfo: '3.',
            questionImg: [],
            questionSentence: 'ギヨン管症候群の所見として誤っているのはどれか。2つ選べ。',
            choices: ['鷲手変形','下垂手', '手背尺側の知覚障害', 'フローマン徴候', '骨間筋萎縮'],
            answerImg: [],
            answer: '2,3',
            commentary: 'ギヨン管症候群(Guyon’s canal syndrome)とは、尺骨神経が尺骨神経管(ギヨン管)内で圧迫されることによって生じる神経障害。尺骨神経なので小指の痺れや疼痛、骨間筋と尺骨神経支配筋の萎縮がみられる。肘部管症候群ではフローマン徴候がみられる。下垂手は橈骨神経麻痺によってみられる症状で、誤りである。ギヨン管症候群では尺骨神経手背枝の麻痺を伴わないため、手背の感覚障害は出現しないので、手背尺側の知覚障害は誤りである。',
        },{
            detailInfo: '4.',
            questionImg: [],
            questionSentence: '手根管症候群の所見として誤っているのはどれか。',
            choices: ['環指橈側のしびれ','短母指外転筋の筋萎縮', 'ファーレンテスト陽性', '夜間痛', '母指内転障害'],
            answerImg: [],
            answer: '環指橈側のしびれ',
            commentary: '手根管症候群の所見として環指橈側のしびれは誤りである。手根管症候群の所見としては、環指橈側のしびれは出現しない。短母指外転筋の筋萎縮、ファーレンテスト陽性、夜間痛、母指内転障害は手根管症候群の所見である。',
        },{
            detailInfo: '5.',
            questionImg: [],
            questionSentence: '手の変形性関節症を起こしにくい部位はどれか。',
            choices: ['母指CM関節','母指IP関節', '手指DIP関節', '手指PIP関節', '手指MCP関節'],
            answerImg: [],
            answer: '手指DIP関節',
            commentary: '手の変形性関節症を起こしにくい部位は手指DIP関節である。手指DIP関節は変形性関節症を起こしにくい部位である。母指CM関節、母指IP関節、手指PIP関節、手指MCP関節は変形性関節症を起こしやすい部位である。',
        },{
            detailInfo: '6.',
            questionImg: [],
            questionSentence: '骨軟部腫瘍について正しいのはどれか。',
            choices: ['原発性悪性軟部腫瘍では、ほとんどに化学療法が有用である。','各種がんの治療が進歩したので、転移性骨腫瘍も激減している。', '軟部腫瘍は、良悪性にかかわらず無症候性であることが多い。', '全悪性腫瘍に占める骨軟部悪性腫瘍の割合は、約10% (1/10)を占める。', '多くはMRIで診断がおおむね可能であり、生検を要するのは限られた症例である。'],
            answerImg: [],
            answer: '多くはMRIで診断がおおむね可能であり、生検を要するのは限られた症例である。',
            commentary: '骨軟部腫瘍については、多くはMRIで診断がおおむね可能であり、生検を要するのは限られた症例である。骨軟部腫瘍については、多くはMRIで診断がおおむね可能であり、生検を要するのは限られた症例である。',
        },{
            detailInfo: '7.',
            questionImg: [],
            questionSentence: '骨軟部腫の画像診断について正しいのはどれか。',
            choices: ['CTとMRIがあれば単純X線は不要である。','手術計画を立てる上でMRIは非常に有用である。', '悪性腫瘍の転移検索はPET検査のみで十分である。', '良性腫瘍には、血管造影検査で濃染されるものはない。', '骨シンチグラフィは腫瘍と非腫瘍性病変の鑑別に有用である。'],
            answerImg: [],
            answer: '手術計画を立てる上でMRIは非常に有用である。',
            commentary: '骨軟部腫の画像診断については、手術計画を立てる上でMRIは非常に有用である。骨軟部腫の画像診断については、手術計画を立てる上でMRIは非常に有用である。',
        },{
            detailInfo: '8.',
            questionImg: [],
            questionSentence: '骨肉腫について正しいのはどれか。',
            choices: ['壮年期に好発する。','長管骨骨幹端に好発する。', '特異的融合遺伝子を有する。', '患者の5年生存率は90%以上である。', '多くは化学療法が有用である。'],
            answerImg: [],
            answer: '特異的融合遺伝子を有する。',
            commentary: '骨肉腫については、特異的融合遺伝子を有する。骨肉腫については、特異的融合遺伝子を有する。',
        },{
            detailInfo: '9.',
            questionImg: [],
            questionSentence: 'FGFR3異常症について正しいのはどれか。3つ選べ。',
            choices: ['軟骨低形成症の病因となる。','体幹短縮型低身長を呈する。', '生命予後が極めて悪い。', '軟骨無形成症の知能は正常である。', '四肢管状骨の長径成長は低下する。'],
            answerImg: [],
            answer: '軟骨低形成症の病因となる,体幹短縮型低身長を呈する,四肢管状骨の長径成長は低下する。',
            commentary: 'FGFR3異常症については、軟骨低形成症の病因となる。体幹短縮型低身長を呈する。四肢管状骨の長径成長は低下する。FGFR3異常症については、軟骨低形成症の病因となる。体幹短縮型低身長を呈する。四肢管状骨の長径成長は低下する。',
        },{
            detailInfo: '10.',
            questionImg: [],
            questionSentence: 'リハビリテーション科医の役割について間違っているものはどれか。',
            choices: ['活動に焦点を当て、活動を用いて治療する。','活動関連の包括的医学管理を行う。', '「活動の治療文化」を根付かせる。', '訓練室で待ち、集中的に訓練を行う。', '不動や廃用を回避し早期離床を促進する。'],
            answerImg: [],
            answer: '訓練室で待ち、集中的に訓練を行う。',
            commentary: 'リハビリテーション科医の役割については、訓練室で待ち、集中的に訓練を行うことはない。リハビリテーション科医の役割については、訓練室で待ち、集中的に訓練を行うことはない。',
        },{
            detailInfo: '11.',
            questionImg: [],
            questionSentence: '骨Paget病について正しいのはどれか。3つ選べ。',
            choices: ['単純エックス線上、骨吸収と修復の像がみられる。','アジアに多く見られる。', 'パラミクソウイルスの関与が指摘されている。', 'アルカリフォスファターゼは増加を示す。', 'ビスフォスフォネート製剤の有効性がある。'],
            answerImg: [],
            answer: '単純エックス線上、骨吸収と修復の像がみられる,アルカリフォスファターゼは増加を示す,ビスフォスフォネート製剤の有効性がある。',
            commentary: '骨Paget病については、パラミクソウイルスの関与が指摘されていることはない。骨Paget病については、パラミクソウイルスの関与が指摘されていることはない。',
        },{
            detailInfo: '12.',
            questionImg: [],
            questionSentence: '外反母趾に成因について誤っているのはどれか。2つ選べ。',
            choices: ['肥満','短い第1中足骨', '第1中足骨の内反', 'ハイヒールのような先端の細い履物', '母趾が第2趾よりも短いギリシャ型の足趾'],
            answerImg: [],
            answer: '肥満,ハイヒールのような先端の細い履物',
            commentary: '外反母趾に成因については、肥満が誤りである。外反母趾に成因については、肥満が誤りである。',
        },{
            detailInfo: '13.',
            questionImg: [],
            questionSentence: '成人期扁平足において陽性となる徴候もしくはテストを2つ選べ。',
            choices: ['too many toes sign','single heel rise test', 'Thompson test', 'Jackson test', 'Spuling test'],
            answerImg: [],
            answer: 'too many toes sign,Thompson test',
            commentary: '成人期扁平足において陽性となる徴候もしくはテストは、too many toes sign, Thompson testである。成人期扁平足において陽性となる徴候もしくはテストは、too many toes sign, Thompson testである。',
        },{
            detailInfo: '14.',
            questionImg: [],
            questionSentence: '足関節外側靭帯として不適切なのはどれか。2つ選べ。',
            choices: ['前距腓靭帯','踵腓靭帯', '後距腓靭帯', '前十字靭帯', '後十字韌帶'],
            answerImg: [],
            answer: '前距腓靭帯,後十字韌帶',
            commentary: '足関節外側靭帯として不適切なのは、前距腓靭帯, 後十字韌帶である。足関節外側靭帯として不適切なのは、前距腓靭帯, 後十字韌帶である。',
        },{
            detailInfo: '15.',
            questionImg: [],
            questionSentence: '76歳の女性。右膝関節痛を主訴に来院した。2年前に歩行時の右膝関節痛を自覚し徐々に悪化している。最近歩行が困難になったため受診した。右膝関節の外傷歴はない。身長156cm、体重70kg。体温36.3°C。脈拍64/分、整。右膝関節に膝蓋跳動と内反変形とを認めるが発赤と熱感はない。右膝関節エックス線写真を別に示す。今後の対応の説明で誤っているのはどれか。',
            choices: ['「大腿部の筋力を強くしましょう」','「杖の使用は避けてください」', '「関節を保温するようにしましょう」', '「体重を減らしましょう」', '「手術を検討しましょう」'],
            answerImg: [],
            answer: '「大腿部の筋力を強くしましょう」',
            commentary: '今後の対応の説明で、大腿部の筋力を強くしましょうと説明することはない。今後の対応の説明で、大腿部の筋力を強くしましょうと説明することはない。',
        },{
            detailInfo: '16.',
            questionImg: [],
            questionSentence: '人工膝関節置換術後の周術期合併症の肺血栓塞栓症について誤っているのはどれか。',
            choices: ['術後24時間以内の発症が多い。','深部静脈血栓症の既往がある場合は発症頻度が高い。', '予防策として下肢弾性ストッキングの装着がある。', '起立、 歩行開始時に突然の呼吸困難と胸痛を主訴に発症することがある。', '予防として足関節の底背屈運動が有効である。'],
            answerImg: [],
            answer: '予防策として下肢弾性ストッキングの装着がある。',
            commentary: '人工膝関節置換術後の周術期合併症の肺血栓塞栓症について、予防策として下肢弾性ストッキングの装着があることはない。人工膝関節置換術後の周術期合併症の肺血栓塞栓症について、予防策として下肢弾性ストッキングの装着があることはない。',
        },{
            detailInfo: '17.',
            questionImg: [],
            questionSentence: '骨端症について正しいものを2つ選べ。',
            choices: ['ベルテス病は女児に多い。','キーンベック病は手をよく使用する男性に多い。', '第1ケーラー病は中足骨に発症する。', 'オスグッド・シュラッター病の両側発症はみられない。', 'パンナー病は局所安静で自然治癒が期待できる。'],
            answerImg: [],
            answer: 'キーンベック病は手をよく使用する男性に多い,パンナー病は局所安静で自然治癒が期待できる。',
            commentary: '骨端症について、キーンベック病は手をよく使用する男性に多い。パンナー病は局所安静で自然治癒が期待できる。骨端症について、キーンベック病は手をよく使用する男性に多い。パンナー病は局所安静で自然治癒が期待できる。',
        },{
            detailInfo: '18.',
            questionImg: [],
            questionSentence: '40 歳の男性。 1年前から徐々に歩きにくくなり、 1か月前から両上肢全体のしびれがあり来院し た。 深部反射は、下顎反射正常、 上腕二頭筋反射亢進、上腕三頭筋腱反射亢進、 膝蓋腱反射亢進およ びアキレス反射亢進がみられた。 最も考えられる障害部位はどれか。',
            choices: ['橋','第3.4頚髄', '第 5.6頚髄', '第7.8頚髄', '第12胸髄'],
            answerImg: [],
            answer: '第 5.6頚髄',
            commentary: '最も考えられる障害部位は第 5.6頚髄である。最も考えられる障害部位は第 5.6頚髄である。',
        },{
            detailInfo: '19.',
            questionImg: [],
            questionSentence: '腰椎椎間板ヘルニアで S1 神経根が圧迫され、 同側下肢の筋力低下がみられた。 障害されると考え られる動作はどれか。',
            choices: ['股関節屈曲','股関節内転', '膝関節伸展', '足関節背屈', '足関節底屈'],
            answerImg: [],
            answer: '足関節底屈',
            commentary: '腰椎椎間板ヘルニアで S1 神経根が圧迫され、 同側下肢の筋力低下がみられた。 障害されると考えられる動作は足関節底屈である。腰椎椎間板ヘルニアで S1 神経根が圧迫され、 同側下肢の筋力低下がみられた。 障害されると考えられる動作は足関節底屈である。',
        },{
            detailInfo: '20.',
            questionImg: [],
            questionSentence: 'ロコモティブシンドローム(以下ロコモ) は運動器の障害により移動機能が低下した状態である。 ロコモなし、ロコモ度1 ロコモ度2に分類するための評価方法を以下の中から3つ選べ。',
            choices: ['立ち上がりテスト','ロコチェック', 'SLR テスト', '2 ステップテスト', 'ロコモ 25'],
            answerImg: [],
            answer: 'ロコチェック,SLR テスト,2 ステップテスト',
            commentary: 'ロコモティブシンドローム(以下ロコモ) は運動器の障害により移動機能が低下した状態である。 ロコモなし、ロコモ度1 ロコモ度2に分類するための評価方法はロコチェック,SLR テスト,2 ステップテストである。ロコモティブシンドローム(以下ロコモ) は運動器の障害により移動機能が低下した状態である。 ロコモなし、ロコモ度1 ロコモ度2に分類するための評価方法はロコチェック,SLR テスト,2 ステップテストである。',
        },{
            detailInfo: '21.',
            questionImg: [],
            questionSentence: '先天性股関節脱臼の特徴で誤っているのはどれか。',
            choices: ['家族内発生は少ない。','第1子に多く発症する。', '骨盤位分娩に多く発症する。', 'ここ数年、 発生率が増加している。', '忠側股関節の皮膚溝が健側に比べ深く、多くなる。'],
            answerImg: [],
            answer: '家族内発生は少ない。',
            commentary: '先天性股関節脱臼の特徴で、家族内発生は少ないことはない。先天性股関節脱臼の特徴で、家族内発生は少ないことはない。',
        },{
            detailInfo: '22.',
            questionImg: [],
            questionSentence: '小児虐待について正しいのはどれか。',
            choices: ['児童虐待の発生はほとんどが小学生以上の児童である。','1歳未満の重度頭部外傷の10%は虐待である。', '児童虐待を疑った場合は通告の義務があり、これは医師の守秘義務違反には当たらない。', '新旧織り交ぜた多発骨折を見た場合でも虐待の可能性は低い。', '児童虐待の相談・処理件数はここ10年で年々減っている。'],
            answerImg: [],
            answer: '1歳未満の重度頭部外傷の10%は虐待である。',
            commentary: '小児虐待について、1歳未満の重度頭部外傷の10%は虐待であることはない。小児虐待について、1歳未満の重度頭部外傷の10%は虐待であることはない。',
        },{
            detailInfo: '23.',
            questionImg: [],
            questionSentence: '88 歳の女性。 室内で転倒し動けなくなり搬入された。 右大腿骨転子部骨折と診断され、 翌日に骨 接合術を受けた。 10年前から Alzheimer 型認知症で内服治療を受けている。 手術当日に起こりうる 合併症はどれか。 3つ選べ。',
            choices: ['褥瘡','せん妄', '偽関節', '関節拘福', '深部静脈血栓症'],
            answerImg: [],
            answer: '褥瘡,せん妄,偽関節',
            commentary: '88 歳の女性。 室内で転倒し動けなくなり搬入された。 右大腿骨転子部骨折と診断され、 翌日に骨 接合術を受けた。 10年前から Alzheimer 型認知症で内服治療を受けている。 手術当日に起こりうる 合併症は褥瘡, せん妄, 偽関節である。88 歳の女性。 室内で転倒し動けなくなり搬入された。 右大腿骨転子部骨折と診断され、 翌日に骨 接合術を受けた。 10年前から Alzheimer 型認知症で内服治療を受けている。 手術当日に起こりうる 合併症は褥瘡, せん妄, 偽関節である。',
        },{
            detailInfo: '24.',
            questionImg: [],
            questionSentence: '右中殿筋不全患者の歩行時にみられるのはどれか。',
            choices: ['体幹を前に傾ける。','右下肢を分回しする。', '右大腿骨遠位に手を当てる。', '左右の下肢を側方に広げる。', '右立脚時に骨盤を左側に傾ける。'],
            answerImg: [],
            answer: '右立脚時に骨盤を左側に傾ける。',
            commentary: '右中殿筋不全患者の歩行時にみられるのは右立脚時に骨盤を左側に傾けることである。右中殿筋不全患者の歩行時にみられるのは右立脚時に骨盤を左側に傾けることである。',
        },{
            detailInfo: '25.',
            questionImg: [],
            questionSentence: '手根管症候群について正しいのはどれか。3つ',
            choices: ['女性に多い。','長期血液透析患者に発症しやすい。', '重症例では母指の対立運動が障害される。', '日中に増悪する疼痛が特徴である。', '保存療法は無効である。'],
            answerImg: [],
            answer: '女性に多い,長期血液透析患者に発症しやすい,重症例では母指の対立運動が障害される。',
            commentary: '手根管症候群について、女性に多い。長期血液透析患者に発症しやすい。重症例では母指の対立運動が障害される。手根管症候群について、女性に多い。長期血液透析患者に発症しやすい。重症例では母指の対立運動が障害される。',
        },{
            detailInfo: '26.',
            questionImg: [],
            questionSentence: '腓骨神経麻痺について正しいのはどれか。3つ選べ。',
            choices: ['下肢における神経麻痺の中で最も頻度が高い。','足関節の底屈が障害される。', '砕石位の手術の際に起こりやすい合併症のひとつである。', '神経の連続性が保たれている場合は自然回復する可能性が高い。', 'フロマン (Froment) 徴候が陽性となる。'],
            answerImg: [],
            answer: '下肢における神経麻痺の中で最も頻度が高い,足関節の底屈が障害される,神経の連続性が保たれている場合は自然回復する可能性が高い。',
            commentary: '腓骨神経麻痺について、下肢における神経麻痺の中で最も頻度が高い。足関節の底屈が障害される。神経の連続性が保たれている場合は自然回復する可能性が高い。腓骨神経麻痺について、下肢における神経麻痺の中で最も頻度が高い。足関節の底屈が障害される。神経の連続性が保たれている場合は自然回復する可能性が高い。',
        },{
            detailInfo: '27.',
            questionImg: [],
            questionSentence: '人工関節置換術全般に関する記述で正しいのはどれか。2つ選べ。',
            choices: ['人工関節置換術は骨粗鬆症があるため高齢者には適応はない。','人工関節置換術の目的は除痛、 可動域改善、変形矯正などより ADL を改善することである。', '膝関節に対する人工膝関節置換術の件数が日本では最も多い。', '骨腫瘍切除後の機能再建には人工関節置換術の適応はない。', '人工関節置換術後の合併症として感染があるが、 抗菌薬投与で鎮静化し手術治療は不要である。'],
            answerImg: [],
            answer: '人工関節置換術の目的は除痛、 可動域改善、変形矯正などより ADL を改善することである,膝関節に対する人工膝関節置換術の件数が日本では最も多い。',
            commentary: '人工関節置換術全般に関する記述で、人工関節置換術の目的は除痛、 可動域改善、変形矯正などより ADL を改善することである。膝関節に対する人工膝関節置換術の件数が日本では最も多い。人工関節置換術全般に関する記述で、人工関節置換術の目的は除痛、 可動域改善、変形矯正などより ADL を改善することである。膝関節に対する人工膝関節置換術の件数が日本では最も多い。',
        },{
            detailInfo: '28.',
            questionImg: [],
            questionSentence: '人工股関節置換術に関する記述で正しいのはどれか。2つ選べ。',
            choices: ['緩みの原因としてポリエチレンの摩耗粉による骨溶解がある。','生存率は概ね10年で50%未満である。', '外傷後の変形性股関節症に対しては適応ではない。', '術後脱臼はしない。', 'セラミックが材料として使用されることがある。'],
            answerImg: [],
            answer: '緩みの原因としてポリエチレンの摩耗粉による骨溶解がある,セラミックが材料として使用されることがある。',
            commentary: '人工股関節置換術に関する記述で、緩みの原因としてポリエチレンの摩耗粉による骨溶解がある。セラミックが材料として使用されることがある。人工股関節置換術に関する記述で、緩みの原因としてポリエチレンの摩耗粉による骨溶解がある。セラミックが材料として使用されることがある。',
        },{
            detailInfo: '29.',
            questionImg: [],
            questionSentence: '関節リウマチの2010年ACR/EULAR 分類基準の評価項目に含まれないものはどれか。',
            choices: ['CRP','単純X線', '罹病期間', '腫脹関節', '抗 CCP 抗体'],
            answerImg: [],
            answer: '単純X線',
            commentary: '関節リウマチの2010年ACR/EULAR 分類基準の評価項目に含まれないものは単純X線である。関節リウマチの2010年ACR/EULAR 分類基準の評価項目に含まれないものは単純X線である。',
        },{
            detailInfo: '30.',
            questionImg: [],
            questionSentence: '関節リウマチによる関節外症状として誤っているのはどれか。',
            choices: ['体重減少','骨粗鬆症', '間質性肺炎', 'アミロイドーシス', '口腔内アフタ性潰瘍'],
            answerImg: [],
            answer: '骨粗鬆症',
            commentary: '関節リウマチによる関節外症状として、骨粗鬆症が誤っている。関節リウマチによる関節外症状として、骨粗鬆症が誤っている。',
        },]
    }
    ])
    const showQuestionList = () => {
        return questionList
    }
    return {
        showQuestionList,
        appName,
        jpName,
    }
} 
// 27.人工関節置換術全般に関する記述で正しいのはどれか。 2つ選べ。 
// a 人工関節置換術は骨粗鬆症があるため高齢者には適応はない。 
// b 人工関節置換術の目的は除痛、 可動域改善、変形矯正などより ADL を改善することである。 
// 膝関節に対する人工膝関節置換術の件数が日本では最も多い。 
// d 骨腫瘍切除後の機能再建には人工関節置換術の適応はない。 
// 人工関節置換術後の合併症として感染があるが、 抗菌薬投与で鎮静化し手術治療は不要である。 
// 28 人工股関節置換術に関する記述で正しいのはどれか。 2つ選べ。 
// a 緩みの原因としてポリエチレンの摩耗粉による骨溶解がある。 
// b 生存率は概ね10年で50%未満である。 
// C 外傷後の変形性股関節症に対しては適応ではない。 
// d 術後脱臼はしない。 
// セラミックが材料として使用されることがある。 
// 29. 関節リウマチの2010年ACR/EULAR 分類基準の評価項目に含まれないものはどれか。 
// CRP 
// ♭ 単純X線 
// c 罹病期間 
// d腫脹関節 
// " 
// 抗 CCP 抗体 
// 30. 関節リウマチによる関節外症状として誤っているのはどれか。 
// a) 体重減少 
// b 骨粗鬆症 
// C 間質性肺炎 
// d アミロイドーシス 
// 口腔内アフタ性潰瘍 