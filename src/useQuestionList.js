import retinalDegenerationVisualField from './img/answer/retinalDegenerationVisualField.png';
import myastheniaGravis from './img/answer/myastheniaGravis.png';
import colorVisionDeficiencyTest from './img/answer/colorVisionDeficiencyTest.png';
import cataractSurgerySteps from './img/answer/cataractSurgerySteps.png';
import cataract from './img/answer/cataract.png';
import congenitalColorVisionDeficiency from './img/answer/congenitalColorVisionDeficiency.png';
import eyeAnatomy from './img/answer/eyeAnatomy.png';
import extraArticularSymptoms from './img/answer/extraArticularSymptoms.png';
import innervationLowerLimb from './img/answer/innervationLowerLimb.png';
import deepTendonReflex from './img/answer/deepTendonReflex.png';
import kneeOsteoarthritis from './img/answer/kneeOsteoarthritis.png';
import question202115 from './img/answer/question202115.png';
import ankleLigament from './img/answer/ankleLigament.png';
import osteosarcoma from './img/answer/osteosarcoma.png';
import SoftTissueTumorRI from './img/answer/SoftTissueTumorRI.png';
import halluxValgusCause2 from './img/answer/halluxValgusCause2.png';
import halluxValgusCause1 from './img/answer/halluxValgusCause1.png';
import guyonCanal from './img/answer/guyonCanal.png';
import carpalTunnelSyndrome3 from './img/answer/carpalTunnelSyndrome3.png';
import guyonCanalSyndrome1 from './img/answer/guyonCanalSyndrome1.png';
import guyonCanalSyndrome2 from './img/answer/guyonCanalSyndrome2.png';
import fracture1 from './img/answer/fracture1.png';
import adolescentIdiopathicScoliosis from './img/answer/adolescentIdiopathicScoliosis.png';
import fracture2 from './img/answer/fracture2.png';
import clubFeet from './img/answer/clubFeet.png';
import artificialJointData from './img/answer/artificialJointData.png';
import RA2010 from './img/answer/RA2010.png';
import ankleOsteoarthritis from './img/answer/ankleOsteoarthritis.png';
import totalHipArthroplasty from './img/answer/totalHipArthroplasty.png';
import purulentFolliculitis from './img/answer/purulentFolliculitis.png';
import ankleOsteoarthritisComparingTreatments from './img/answer/ankleOsteoarthritisComparingTreatments.png';
import nonarticulationSymptomsOfRA from './img/answer/nonarticulationSymptomsOfRA.png';
import lithotomyPosition from './img/answer/lithotomyPosition.png';
import TrendelenburgSign from './img/answer/TrendelenburgSign.png';
import carpalTunnelSyndrome1 from './img/answer/carpalTunnelSyndrome1.png';
import carpalTunnelSyndrome2 from './img/answer/carpalTunnelSyndrome2.png';
import childAbuse3 from './img/answer/childAbuse3.png';
import question23 from './img/answer/question23.png';
import dysplasiaOfHip2 from './img/answer/dysplasiaOfHip2.png';
import dysplasiaOfHip3 from './img/answer/dysplasiaOfHip3.png';
import childAbuse2 from './img/answer/childAbuse2.png';
import dysplasiaOfHip1 from './img/answer/dysplasiaOfHip1.png';
import childAbuse1 from './img/answer/childAbuse1.png';
import lumbarDiscHerniation from './img/answer/lumbarDiscHerniation.png';
import locomotiveSyndrome from './img/answer/locomotiveSyndrome.png';
import locoCheck from './img/answer/locoCheck.png';
import spinalCanalStenosis from './img/answer/spinalCanalStenosis.png';
import halluxValgusSole from './img/answer/halluxValgusSole.png';
import osteoChondrosisName from './img/answer/osteoChondrosisName.png';
import venousThrombolismFactor from './img/answer/venousThrombolismFactor.png';
import tibialOsteotomy from './img/answer/tibialOsteotomy.png';
import artificialJointReplacement from './img/answer/artificialJointReplacement.png';
import footStretch from './img/answer/footStretch.png';
import venousThrombolism from './img/answer/venousThrombolism.png';
import halluxValgusTreatment2 from './img/answer/halluxValgusTreatment2.png';
import halluxValgusTreatment1 from './img/answer/halluxValgusTreatment1.png';
import pagetBone from './img/answer/pagetBone.png';
import halluxValgusArthrodesis from './img/answer/halluxValgusArthrodesis.png';
import rehabilitation2 from './img/answer/rehabilitation2.png';
import rehabilitation1 from './img/answer/rehabilitation1.png';
import guidelineOfSoftTissueTumor from './img/answer/guidelineOfSoftTissueTumor.png';
import OCDTreatment2 from './img/answer/OCDTreatment2.png';
import OCDTreatment1 from './img/answer/OCDTreatment1.png';
import pitchersElbow from './img/answer/pitchersElbow.png';
import OCD from './img/answer/OCD.png';
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
            groupTag: "運動器疾患 2022本試験",
            groupContents: [{
                    detailInfo: '1. ##今回は解答作成にAI:chatGPT-3.5も参戦',
                    questionImg: [],
                    questionSentence: '良肢位が最も屈曲位を示す関節はどれか。',
                    choices: ['股関節','肘関節', '膝関節', '肩関節', '足関節'],
                    answerImg: [functionalPosition],
                    answer: '肘関節',
                    commentary: '肘関節は最も屈曲位を示す関節で、屈曲90度が良肢位である。良肢位とは関節が仮にその位置で動かなくなり、運動性が失われても、日常生活動作に及ぼす影響が最も少ない肢位のことである。他、股関節の良肢位は屈曲10~30度、膝関節の良肢位は屈曲10~20度、肩関節の良肢位は屈曲45~60度、足関節の良肢位は底屈10度である。',
                },{
                    detailInfo: '2. AI正解',
                    questionImg: [],
                    questionSentence: '直近の国民生活基礎調査における女性での有訴者率の高い症状を示す。最も高いものから2つ選べ。',
                    choices: ['頭痛','腰痛', '肩こり', '鼻がつまる', 'せきやたんが出る'],
                    answerImg: [survey],
                    answer: '腰痛,肩こり',
                    commentary: '直近の国民生活基礎調査における女性での有訴者率の高い症状は、腰痛が最も高く、次いで肩こりが高い。他、頭痛、鼻がつまる、せきやたんが出るの順に高い。女性では腰痛と肩こりが拮抗していて、年度によっては肩こりの方が高いこともある。',
                },{
                    detailInfo: '3.',
                    questionImg: [],
                    questionSentence: '手の変形性関節症の好発部位はどれか。3つ選べ。',
                    choices: ['母指手根中手関節','示指遠位指節間関節', '中指手根中手関節', '環指近位指節間関節', '小指中手指節関節'],
                    answerImg: [anatomyHand,osteoarthritis,Heberden,Bouchard],
                    answer: '母指手根中手関節,示指遠位指節間関節,環指近位指節間関節',
                    commentary: '変形性関節症(Osteoarthritis)とは、加齢などを基盤として生じ、関節の機能障害をきたす疾患である。手の変形性関節症の好発部位は、母指手根中手関節、示指遠位指節間関節などである。DIP関節の関節症はHeberden結節と呼ばれ、関節リウマチで認められるPIPボタン穴変形とは区別される。またPIP関節の関節症はBouchard結節と呼ばれる。これらは中年以降の女性に多く、複数の指で同時に発生する。母指CM関節症も使いすぎの高齢女性に多く、治療として人工関節手術・骨切り術・関節固定術などが行われる。遠位指節間関節/DIP:Distal Interphalangeal Joint、中指手根中手関節/CMC:Carpometacarpal Joint、近位指節間関節/PIP:Proximal Interphalangeal Joint。',
                },{
                    detailInfo: '4. AI正解',
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
                    answerImg: [pitchersElbow,OCD,OCDTreatment1,OCDTreatment2],
                    answer: '外側靭帯損傷が病因である',
                    commentary: '外側型野球肘は、10~16歳に好発し、繰り返す投球動作（肘の外反）によって成長途上の上腕骨小頭が圧迫され、軟骨化骨の壊死を生じる：離断性骨軟骨炎OCD。外反なので外側は圧迫、内側が伸展。',
                },{
                    detailInfo: '6.',
                    questionImg: [],
                    questionSentence: '骨軟部腫瘍について正しいのはどれか。',
                    choices: ['全悪性腫瘍に占める骨軟部悪性腫瘍の割合は、約25%と1/4を占める。','悪性骨腫瘍においては、転移性骨腫瘍が原発性のものより多い', '軟部腫瘍は、良悪性にかかわらず発症時から疼痛や発熱を伴う', '原発性悪性軟部腫瘍では、ほとんどに化学療法が有用である', '多くはMRIで診断がおおむね可能であり、生検を要するのは限られた症例である'],
                    answerImg: [],
                    answer: '多くはMRIで診断がおおむね可能であり、生検を要するのは限られた症例である',
                    commentary: '我が国の悪性軟部腫瘍発生率は2/100000で、全癌に占める割合は1%未満と稀である。軟部腫瘍とは、軟部組織(筋・脂肪・血管など)から発生する腫瘍であり、中胚葉由来のものが多い。良性は全身に好発し、大きさは小さい(<5cm)、緩徐に発育する、浅在性に局在する、比較的弾性が軟、一部をのぞいて無痛性などの特徴がある一方で、悪性は大腿での発生が多く、大きさは>5cmのものが多い、急速に増大する、深在性に局在する、弾性が硬、無痛性が多いなどの特徴がある。検査はMRIが最も有用であり、必要に応じて(悪性の可能性があれば)エコー・X線・CT・生検が行われる。治療は良性なら経過観察となることがあるが、悪性なら手術による除去が基本となり、必要に応じて化学療法や放射線療法を併用する。骨腫瘍の発生頻度のうち、転移性骨腫瘍は29.6%、原発性骨腫瘍は66.3%を占める(良性48.3%、悪性13.6%)。良性腫瘍の中では骨軟骨腫が最も多く(9.7%)、悪性腫瘍の中では骨肉腫が最も多い(4.3%)',
                },{
                    detailInfo: '7. AI正解',
                    questionImg: [],
                    questionSentence: '骨肉腫について誤っているのはどれか。',
                    choices: ['骨肉腫は、10歳代から思春期に好発する。','病理組織検査で、腫瘍性類骨形成がみられる。', '大部分が骨幹端に発生し、骨端側に強い骨変化を示す。', '遠隔転移は、主にリンパ系を介したリンパ節転移を示す。', '通常型の骨肉腫においては、ほぼすべてに化学療法を併用することが多い。'],
                    answerImg: [],
                    answer: '遠隔転移は、主にリンパ系を介したリンパ節転移を示す。',
                    commentary: '骨肉腫は10代男性に好発する悪性腫瘍で、腫瘍性の類骨・骨形成を伴う肉腫。原発性悪性骨腫瘍の中で最も多く、膝関節周囲などの長管骨の骨幹端部で多く発生する。血行性の肺転移が多いが、5年生存率は近年７割以上に改善してきている。治療は手術療法と化学療法の組み合わせで、術前・術後に化学療法を行うことによって患肢を温存させることを目的とする。',
                },{
                    detailInfo: '8. AI正解',
                    questionImg: [],
                    questionSentence: '64歳の女性。大腿後面の腫瘤に気づき来院した。自発痛、圧痛は伴わず、隣接関節の機能障害も認めない。触診上、弾性硬で可動性に乏しい10cm大の腫瘤を触知し、MRIでは、T1WIで低輝度から等輝度T2WIで不均一に高輝度を呈する長径8cm大の腫瘍を大腿二頭筋内に認めた。この次に行う処置として正しいものはどれか。',
                    choices: ['単純摘出術を行う。','放射線治療を依頼する。', '化学療法を即座に開始する。', '早急に広汎切除術を施行する。', '生検術を行い病理組織診断を確定する。'],
                    answerImg: [guidelineOfSoftTissueTumor],
                    answer: '生検術を行い病理組織診断を確定する。',
                    commentary: '大腿で弾性硬、長径8cmであることから、悪性の軟部腫瘍：軟部肉腫の可能性が高い。悪性の可能性がある場合は、MRIなどによる画像検査の後に病理組織検査を行うことがガイドライン(2020第3版)で示されている。画像検査の次に行われる処置としては病理組織診断となる。悪性軟部腫瘍の治療法は手術による除去が基本で、必要に応じて化学療法や放射線療法が選択される',
                },{
                    detailInfo: '9.',
                    questionImg: [],
                    questionSentence: 'FGFR3異常症について正しいのはどれか。3つ選べ。',
                    choices: ['軟骨低形成症の病因となる。','体幹短縮型低身長を呈する。', '生命予後が極めて悪い。', '軟骨無形成症の知能は正常である。', '四肢管状骨の長径成長は低下する。'],
                    answerImg: [],
                    answer: '軟骨低形成症の病因となる,軟骨無形成症の知能は正常である,四肢管状骨の長径成長は低下する',
                    commentary: 'FGFR3異常症は、染色体領域4p16.3に存在する遺伝子FGFR3(fiber growth factor receptor 3)を原因遺伝子とする遺伝性の軟骨無形成症で四肢短縮型低身長症を呈する。成人身長は男性で130cm、女性で120cm程度と低く著名な四肢短縮のため、患者は日常生活でさまざまな制約を受ける。脊柱管狭窄のため中高年になると、脊髄症状を呈することがある。大半が知能面では正常であり、積極的な医学的評価を行えば平均余命も正常であるとされる。四肢短縮は著しく出生時から認めるが、体幹短縮型低身長ではない。',
                },{
                    detailInfo: '10. AI正解',
                    questionImg: [],
                    questionSentence: 'リハビリテーション科医の役割について間違っているものはどれか。',
                    choices: ['活動に焦点を当て、活動を用いて治療する。','活動関連の包括的医学管理を行う。', '「活動の治療文化」を根付かせる。', '訓練室で待ち、集中的に訓練を行う。', '不動や廃用を回避し早期離床を促進する。'],
                    answerImg: [rehabilitation1,rehabilitation2],
                    answer: '訓練室で待ち、集中的に訓練を行う。',
                    commentary: 'リハビリテーション医学は障害を克服し、機能を回復する「活動を育む医学」と定義されており、活動に焦点を当て、活動を用いて治療する。活動関連の包括的医学管理を行い、患者の活動を支援する。また、リハビリテーション科医は「活動の治療文化」を根付かせ、不動や廃用を回避し早期離床を促進する。リハビリテーション科医は、訓練室で待ち、集中的に訓練を行うのではなく、患者の活動を支援する。',
                },{
                    detailInfo: '11.',
                    questionImg: [],
                    questionSentence: '骨Paget病について正しいのはどれか。3つ選べ。',
                    choices: ['単純エックス線上、骨吸収と修復の像がみられる。','アジアに多く見られる。', 'パラミクソウイルスの関与が指摘されている。', 'アルカリフォスファターゼは増加を示す。', 'ビスフォスフォネート製剤の有効性がある。'],
                    answerImg: [pagetBone],
                    answer: '単純エックス線上、骨吸収と修復の像がみられる,アルカリフォスファターゼは増加を示す,ビスフォスフォネート製剤の有効性がある',
                    commentary: '骨Paget病は単純X線では骨吸収と硬化が混在するモザイク像が見られ、白人に多くアジア人には稀の疾患。パラミクソウイルスの関与が示唆されていて、ALP(アルカリホスファターゼ)は増加を示す。治療には、鎮痛薬や骨吸収に対してビスフォスフォネート剤が用いられる。',
                },{
                    detailInfo: '12.',
                    questionImg: [],
                    questionSentence: '変形性足関節症に対する人工足関節全置換術(TAA)の利点として以下の中から誤っているのはどれか。以下の中からすべて選べ。',
                    choices: ['可動域の温存','すみやかな除痛', '比較的はやい術後回復', '沈み込みの危険性', '運動など強い負荷への懸念'],
                    answerImg: [ankleOsteoarthritis,halluxValgusTreatment1,ankleOsteoarthritisComparingTreatments],
                    answer: '沈み込みの危険性,運動など強い負荷への懸念',
                    commentary: '変形性足関節症とは、足首の関節の軟骨がすり減って関節に痛みを生じる状態です。軟骨がすり減る原因には加齢・骨折や挫折・関節リウマチなどの疾患があります。主な症状は足首の腫れと痛みで、進行すると歩行が不自由になるなど日常生活に支障をきたすようになります。治療として、軽度の場合は装具や足底板、痛み止めや炎症止めの関節内注入などの保存的治療が有効なことがあります。保存的治療で痛みのコントロールが困難なケースでは手術的治療(骨切り術・関節固定術・人工足関節置換術)などが選択されます。人工足関節全置換術(Total Ankle Arthroplasty)は、変形した足関節の骨を取り除き、金属・セラミック・ポリエチレンなどで製作された人工関節に付け替える手術療法で、痛みの緩和や関節動作、比較的早い術後回復が期待できます。一方で沈み込み(sinking)の危険性があったり、運動などの強い負荷には慎重である必要があります。選択肢は全て人工関節の特徴として正しく、利点を選択する問題である。',
                },{
                    detailInfo: '13. AI正解',
                    questionImg: [],
                    questionSentence: '変形性足関節症に対する足関節固定術のデメリットとして正しいのはどれか。以下の中からすべて選べ。',
                    choices: ['安定性の再獲得','運動能力の回復', '良好な除痛', '可動域の消失', 'やや長い術後経過'],
                    answerImg: [halluxValgusTreatment1,halluxValgusTreatment2,halluxValgusArthrodesis,ankleOsteoarthritisComparingTreatments],
                    answer: '可動域の消失,やや長い術後経過',
                    commentary: '重度の外反母趾に対しては関節固定術が適応される。完全に関節を固定してしまうので、可動性の消失や手術後しばらくの歩行補助器具(やや長い術後経過)がデメリットとなるが、他の治療法と比較すると良好な除痛が見込めるほか、他の関節が動きを補ってくれるため運動能力の獲得や安定性の再獲得が期待できる。選択肢は全て足関節固定術の特徴として正しく、デメリットを選択する問題である。',
                },{
                    detailInfo: '14. AI正解',
                    questionImg: [],
                    questionSentence: '末期変形性足関節症の治療として適切な治療はどれか。以下の中からすべて選べ。',
                    choices: ['人工足関節全置換術','足関節固定術', '下位脛骨骨切り術', '鏡視下滑膜切除術', '足底挿板'],
                    answerImg: [halluxValgusTreatment1,halluxValgusTreatment2,tibialOsteotomy,halluxValgusSole],
                    answer: '人工足関節全置換術,足関節固定術',
                    commentary: '治療の基本は鎮痛剤・湿布などの薬物療法、またサポーターや足底板などの装具療法になります。保存的治療で改善しない場合は手術療法を選択します。手術療法としては軽症例では関節鏡というカメラで関節の中をお掃除するような負担の少ない手術から、変形が進行すると関節固定や人工関節置換術といった手術が行われます。'
                },{
                    detailInfo: '15.',
                    questionImg: [],
                    questionSentence: '下肢の人工膝関節置換術について正しいのはどれか。',
                    choices: ['感染性関節疾患に適応がある。','骨粗鬆症のある患者には適応がない。', '血友病性関節炎に適応がある。', '深部静脈血栓症のリスクが高い','術後の磁気共鳴画像検査(MRI)は禁忌である。'],
                    answerImg: [artificialJointReplacement],
                    answer: '深部静脈血栓症のリスクが高い',
                    commentary: '人工関節置換術のリスクとして、感染症・素材の摩耗による緩み・下肢深部静脈血栓症(血流停滞のため)などがあるため、感染性関節疾患や血友病性関節炎は不適応。チタン製であれば人工関節置換術のあとでもMRIは可能であるが、患部の撮影はインプラントの影響でノイズが多くなることに注意が必要である。骨粗鬆症の場合はsinking(沈み込み)が生じるため、適応はないと考える。深部静脈血栓症対策として、ストッキングの着用や運動が有効である。',
                },{
                    detailInfo: '16.',
                    questionImg: [],
                    questionSentence: '周産期合併症の肺血栓塞栓症について誤っているのはどれか。',
                    choices: ['術後24時間以内に発症することが多い。','深部静脈血栓症の既往がある場合は発症頻度が高い。', '予防策として下肢弾性ストッキングの使用が有効である。', '起立、歩行開始時に発症することが多い。', '予防として足関節の底背屈運動が有効である。'],
                    answerImg: [venousThrombolism,footStretch,venousThrombolismFactor],
                    answer: '術後24時間以内に発症することが多い',
                    commentary: '深部血栓塞栓症は、長期入院や肥満、妊娠などでリスクが高まるため、周産期での合併症が問題となっている。深部静脈血栓症(VTE)の既往もリスク因子で、術後すぐというよりは長期の臥床後の起立・歩行開始時に発症することが多い。予防として、下肢弾性ストッキングの着用や、足関節の底背屈運動が有効である。'
                },{
                    detailInfo: '17.',
                    questionImg: [],
                    questionSentence: '骨端症について正しいものを2つ選べ。',
                    choices: ['ペルテス病は女児に多い。','キーンベック病は手をよく使用する男性に多い。', '第1ケーラー病は中足骨に発症する。', 'オスグッド・シュラッター病の両側発症はみられない。', 'パンナー病は局所安静で自然治癒が期待できる。'],
                    answerImg: [osteoChondrosisName],
                    answer: 'キーンベック病は手をよく使用する男性に多い,パンナー病は局所安静で自然治癒が期待できる',
                    commentary: '骨端症：osteochondrosisは、骨端に発生する阻血性骨壊死のことで、主として成長期の骨端に発生し、40種類以上報告され発見者の名前が付けられている。ペルテス病:Perthesは大腿骨頭の骨端症で、5-8歳の男児に発症することが多い。キーンベック病:Kienbockは手の月状骨の骨端症で、20-40歳の手をよく使う男性に好発する。第1ケーラー病:Kohlerは足の舟状骨の骨端症で、3-7歳の男児に好発する。オスグッド・シュラッター病:Ogood-Schlatterは脛骨粗面の骨端症で、12-15歳の男児に好発する。筋より骨の成長が早いことが原因のため、多くは両側性に発症する。パンナー病:Pannerは肘の内側上顆上腕骨小頭の骨端症で、4-10歳の男児の利き腕に好発し、局所安静で自然修復する。'
                },{
                    detailInfo: '18.',
                    questionImg: [],
                    questionSentence: 'ロコモティブシンドローム(ロコモ)について正しいものはどれか。',
                    choices: ['ロコモは保険疾患病名である。','ロコモ25は25点満点の評価法である。', 'ロコモ度の評価にロコチェックが使用される。', 'ロコモは運動器の障害によって移動機能が低下した状態である。', 'ロコモ度はロコモなし、 ロコモ度1 ロコモ度2の3段階に分けられる。'],
                    answerImg: [locomotiveSyndrome],
                    answer: 'ロコモは運動器の障害によって移動機能が低下した状態である',
                    commentary: 'ロコモティブシンドローム(運動器症候群)は、加齢に伴って「骨・関節・筋肉」などの体を支え動かす運動器の障害が原因となり、介護が必要となったり寝たきりになったりする危険性が高まる状態をいい、「ロコモ」の略称で呼ばれている。現在ロコモの評価には立ち上がりテスト・２ステップテスト・ロコモ25が用いられている。ロコモ25という質問票を用いる判断方法では、25の質問で100点満点で7,16,24点以上でロコモ度1,2,3に分けられる。「運動器不安定症」は保険収載された疾患概念で、運動機能低下をきたす疾患またはその既往が存在すること、日常生活自律度判定がランクJまたはAであること、運動機能評価テストの項目を満たすことが条件となる。一方でロコモはより広い概念で、運動器の障害により移動機能の低下した状態をいう。したがって、ロコモは保険疾患病名ではない。'
                },{
                    detailInfo: '19.',
                    questionImg: [],
                    questionSentence: '腰部脊柱管狭窄症について誤っているのはどれか。2つ選べ。',
                    choices: ['姿勢により症状は変化しない。','症状は、下肢の痛みやしびれである。', '下肢閉塞性動脈硬化症と鑑別を要する。', '著明な馬尾神経の圧迫により排尿障害が生じる。', 'ABI (ankle brachial pressure index) の検査で0.9未満を示す。'],
                    answerImg: [spinalCanalStenosis],
                    answer: '姿勢により症状は変化しない,ABI (ankle brachial pressure index) の検査で0.9未満を示す。',
                    commentary: '腰部脊柱管狭窄症とは、腰椎を上下に貫く神経(脊柱管)が背骨の老化・酷使・炎症・外傷などによって圧迫される状態を指す。症状は、下肢の痛みやしびれであり、特に腰を伸ばす姿勢で悪化することがある。また、著明な馬尾神経の圧迫により排尿障害が生じることがある。下肢閉塞性動脈硬化症との鑑別が必要であり、ABI (ankle brachial pressure index) の検査で0.9以上であることを確認する必要がある。'
                },{
                    detailInfo: '20. AI正解',
                    questionImg: [],
                    questionSentence: '28歳の女性。右下腿の激痛と歩行困難を主訴に来院した。数年前から時々腰痛と右殿部痛とがあり、腰椎椎間板ヘルニアの診断を受けていた。今朝、顔を洗おうとしたとき、突然右下肢に激痛が走り動けなくなった。昨夜から排尿がない。右足外側に痛覚の脱失と触覚の鈍麻とがある。右アキレス腱反射は消失 右腓骨筋の筋力は2である。緊急手術の理由となる症候はどれか。',
                    choices: ['排尿障害', '腓骨筋の麻痺', '表在感覚の脱失', 'アキレス腱反射の消失'],
                    answerImg: [lumbarDiscHerniation],
                    answer: '排尿障害',
                    commentary: '椎間板ヘルニアは、腰椎の椎間板が損傷し、内部のゲル状の核が椎間板の外側に突出する状態を指す。椎間板ヘルニアが脊髄や神経根を圧迫することで、腰痛や下肢痛、しびれ、筋力低下などの症状が生じる。緊急手術の適応として、巨大ヘルニアによって足が動かなくなったり、排尿障害が生じたりする場合がある。他の選択肢もヘルニアによる症状であるが、緊急手術の適応としては排尿障害が最も重要である。'
                },{
                    detailInfo: '21. AI正解',
                    questionImg: [],
                    questionSentence: '先天性股関節脱臼の特徴で誤っているのはどれか。',
                    choices: ['家族内発生は少ない。','第1子に多く発症する。', '骨盤位分娩に多く発症する。', 'ここ数年、発生率が増加している。', '患側股関節の皮膚溝が健側に比べ深く、 多くなる。'],
                    answerImg: [dysplasiaOfHip1,dysplasiaOfHip2,dysplasiaOfHip3],
                    answer: '家族内発生は少ない。',
                    commentary: '先天性股関節脱臼は女児(男女比1:7)、骨盤位分娩、冬季の出生に多いとされている。近年出生後の脱臼予防活動が徹底されるようになり、発生率が減少して現在では0.1~0.3%程度である。つまり多くは先天疾患ではなく抱え方の問題であったりするので発育性股関節形成不全:Developmental dysplasia of the hipとも呼ばれ、最初の第１子で多く見られるが、一方で最近の傾向として家族歴(血のつながった家族に先天性股関節脱臼や変形性股関節症など股関節の悪い人が存在する)のある赤ちゃんが多くなってきている。股関節が脱臼した場合は、関節包内で、大腿骨が後ろ外方に変異し、寛骨臼の外に位置するので、皮膚溝が健常側(通常１本)に比べて深く、多くなる。'
                },{
                    detailInfo: '22.',
                    questionImg: [],
                    questionSentence: '小児虐待について正しいのはどれか。',
                    choices: ['児童虐待の発生はほとんどが小学生以上の児童である。','1歳未満の重度頭部外傷の10%は虐待である。', '児童虐待を疑った場合は通告の義務があり、これは医師の守秘義務違反には当たらない。', '陳旧織り交ぜた多発骨折を見た場合でも虐待の可能性は低い。', '児童虐待の相談・処理件数はここ10年で年々減っている。'],
                    answerImg: [childAbuse1,childAbuse2,childAbuse3],
                    answer: '児童虐待を疑った場合は通告の義務があり、これは医師の守秘義務違反には当たらない。',
                    commentary: '児童虐待疑いの場合は守秘義務より通告義務が優先される！(児童福祉法第25条)　その他の選択肢については細かいところもあるが誤りで、小学生以上の児童が児童虐待の半数を占めるがほとんどとまでは言えず(小学生未満では見つかっていないものも場合が多数あるとされている)、1歳未満の重度頭部外傷の虐待割合は10%どころでないし(自力歩行できないので)、繰り返しの骨折は偶然の事故が原因ではないと考えられるし、児童虐待の相談・s処理件数は年々増加している。'
                },{
                    detailInfo: '23. AI正解',
                    questionImg: [],
                    questionSentence: '88歳の女性。室内で転倒し動けなくなり搬入された。右大腿骨転子部骨折と診断され、翌日に骨接合術を受けた。 10年前から Alzheimer 型認知症で内服治療を受けている。 手術当日に起こりうる合併症はどれか。 3つ選べ。',
                    choices: ['褥瘡','せん妄', '偽関節', '関節拘縮', '深部靜脈血栓症'],
                    answerImg: [question23],
                    answer: '褥瘡,せん妄,深部靜脈血栓症',
                    commentary: '褥瘡は床ずれとも呼ばれ、患者が長時間同じ体勢でいることにより、皮膚が圧迫されることで皮膚の血行が悪くなり、皮膚が壊死する病態である。せん妄は、急性の意識障害であり、病気や薬の副作用、環境の変化などが原因となる。深部静脈血栓症は、下肢の静脈に血栓ができる病態であり、術後に発生することがある。'
                },{
                    detailInfo: '24. AI正解',
                    questionImg: [],
                    questionSentence: '右中殿筋不全患者の歩行時にみられるのはどれか。',
                    choices: ['体幹を前に傾ける。','右下肢を分回しする。', '右大腿骨遠位に手を当てる。', '左右の下肢を側方に広げる。', '右立脚時に骨盤を左側に傾ける。'],
                    answerImg: [TrendelenburgSign],
                    answer: '右立脚時に骨盤を左側に傾ける。',
                    commentary: 'Trendenburg sign(トレンデレンブルグ徴候)は、骨盤が立脚側に傾く徴候であり、右中殿筋不全の場合は右立脚時に骨盤が左側に傾く。中臀筋は骨盤を安定させる筋肉であり、中臀筋の不全により骨盤が立脚側に傾く。'
                },{
                    detailInfo: '25. AI正解',
                    questionImg: [],
                    questionSentence: '手根管症候群について正しいのはどれか。3つ選べ。',
                    choices: ['女性に多い。','長期血液透析患者に発症しやすい。', '重症例では母指の対立運動が障害される。', '日中に増悪する疼痛が特徴である。', '保存療法は無効である。'],
                    answerImg: [carpalTunnelSyndrome1,carpalTunnelSyndrome2],
                    answer: '女性に多い,長期血液透析患者に発症しやすい,重症例では母指の対立運動が障害される。',
                    commentary: '手根管症候群は、妊娠・出産期や更年期の女性や、骨折などの怪我、仕事などによる酷使、透析をしている人に好発する原因不明の疾患。重症例では母指球が痩せて対立運動が障害される。疼痛は夜中や明け方に増悪する（夜間痛）ことが多く、日中に増悪することは少ない。治療としてはまず日常生活指導や装具固定、ステロイド局所注射などの保存療法が行われるが、無効な場合は手根管解放術などの手術が行われる。'
                },{
                    detailInfo: '26.',
                    questionImg: [],
                    questionSentence: '腓骨神経麻痺について正しいのはどれか。3つ選べ。',
                    choices: ['下肢における神経麻痺の中で最も頻度が高い。','足関節の底屈が障害される。', '砕石位の手術の際に起こりやすい合併症のひとつである。', '神経の連続性が保たれている場合は自然回復する可能性がある。', '腓骨神経麻痺による足関節の底屈が障害される。'],
                    answerImg: [lithotomyPosition],
                    answer: '下肢における神経麻痺の中で最も頻度が高い,砕石位の手術の際に起こりやすい合併症のひとつである,神経の連続性が保たれている場合は自然回復する可能性がある。',
                    commentary: '腓骨神経麻痺とは、総腓骨神経などが主に腓骨頚部で圧迫されることにより、総腓骨神経の支配する前脛骨筋や長趾伸筋など足趾・足関節の背屈運動が障害される病態である。下肢における神経麻痺の中で最も頻度が高い。長時間足組みをした後や、骨折・脱臼などの外傷後、ギプス固定後などに好発する。図のような砕石位の手術の際に起こりやすい合併症の一つである。末梢神経伝導検査や超音波検査などが行われ、回復が見込める場合は装具固定や薬物療法などの保存療法が行われる。腫瘤などの圧迫や神経断裂があったり、陳旧例などで回復が見込めない場合は後脛骨筋腱移植術などの手術が行われる。'
                },{
                    detailInfo: '27.',
                    questionImg: [],
                    questionSentence: '人工関節置換術全般に関する記述で正しいのはどれか。2つ選べ。',
                    choices: ['人工関節置換術は骨粗鬆症がある高齢者には適応はない。','人工関節置換術の目的は除痛、 可動域改善、 変形矯正などより ADLを改善することである。', '膝関節に対する人工膝関節置換術の件数が日本では最も多い。', '骨腫瘍切除後の機能再建には人工関節置換術の適応はない。', '人工関節置換術後の合併症として感染があるが, 抗菌薬投与で鎮静化し手術治療は不要である。'],
                    answerImg: [ankleOsteoarthritisComparingTreatments,artificialJointData],
                    answer: '人工関節置換術の目的は除痛、 可動域改善、 変形矯正などより ADLを改善することである,膝関節に対する人工膝関節置換術の件数が日本では最も多い。',
                    commentary: '人工関節置換術は、怪我や疾患により傷んだり変形した関節の表面を取り除いて、人工関節に置き換える手術です。 人工関節は、生体材料として信頼性の高い金属（チタン合金、コバルトクロム合金）のほか、プラスチック（ポリエチレン）、セラミックなど、摩耗に強く耐久性を高める処理を施した材質で作られています。痛みが取り除かれ、関節の機能が再生されるだけでなく、脚のゆがみを直し、脚の長さを揃えて歩き方や身体全体のバランスを整えることができ、ADL(activity of daily living)の改善が期待できます。人工関節置換術のリスクとして、骨への沈み込み(sinking)があるため、人工関節置換術は骨粗鬆症がある高齢者には適応されない。2020年度のデータでは人工関節手術の部位別件数割合で最も多いのが膝関節(56%)、次いで股関節(40%)である。骨腫瘍では外科的治療が基本であるが、近年はできるだけ患肢温存が行われているため、およそ80%の症例で腫瘍型人工関節手術が行われ、残りの20%は処理骨などの生物学的再建が行われているとされる。骨盤腫瘍手術後は感染率が高いなどのデメリットはあるが、それでも比較的短い手術時間・安定した人工関節の固定が得られる・早期リハビリテーションが可能であるなどのメリットがある。人工関節による感染には細心の注意が必要で、重症の場合は人工関節を一旦外し、治療後再手術が必要になる場合もある。',
                },{
                    detailInfo: '28.',
                    questionImg: [],
                    questionSentence: '人工股関節置換術に関する記述で正しいのはどれか。2つ選べ。',
                    choices: ['人工股関節置換術後の緩みの原因としてポリエチレンの摩耗粉による骨溶解がある。','セメント人工股関節のインプラント生存率は概ね10年で50%未満である。', '人工股関節置換術は外傷後の変形性股関節症に対しては適応ではない。', '人工股関節は脱臼しない。', '人工股関節の材料としてセラミックが使用されることがある。'],
                    answerImg: [totalHipArthroplasty],
                    answer: '人工股関節置換術後の緩みの原因としてポリエチレンの摩耗粉による骨溶解がある,人工股関節の材料としてセラミックが使用されることがある。',
                    commentary: '人工股関節置換術(Total Hip Arthroplasty:THA)は変形性股関節症や関節リウマチ、大腿骨頭壊死などで適応があり、腰痛や歩行困難などの症状を改善する手術です。人工股関節は、金属、セラミック、ポリエチレンなどの材料で作られており、摩耗による骨溶解が起こることがある。セメント人工股関節のインプラント生存率は概ね10年で90%以上であり、セメントレス人工股関節のインプラント生存率は概ね10年で80%以上である。人工股関節は、脱臼することがあり、脱臼のリスクを減らすためには、手術後の適切なリハビリテーションが重要です。人工股関節の材料としては、金属、セラミック、ポリエチレンなどがあり、セラミックは金属アレルギーのある患者に使用されることがある。骨溶解とは、人工関節周囲の骨が溶けて固定性が失われる状態で、レントゲンで骨透亮像〔（こつとうりょうぞう）＝骨がぬけた所見〕がみられる。原因は人工関節材料（特にポリエチレン）の摩耗粉が生体反応を引き起こし、局所にサイトカインと呼ばれる骨溶解を刺激する物質が産生されることによる。'
                },{
                    detailInfo: '29. AI正解?',
                    questionImg: [],
                    questionSentence: '関節リウマチの2010年ACR/EULAR 分類基準の評価項目に含まれないものはどれか。',
                    choices: ['CRP','リウマトイド因子', '罹病期間', '抗CCP抗体'],
                    answerImg: [RA2010],
                    answer: 'CRP',
                    commentary: '関節リウマチの分類基準はいくつかあるが、ACR/EULAR分類基準では、主に炎症関節の数・血清中抗体(リウマトイド因子/抗CCP抗体)・罹患期間(6週)・炎症反応(CRPやESR)についての評価が行われる。選択肢の項目は全て含まれているが、試験中に選択肢の誤りについてアナウンスがあったらしく、何らかの不備があるのではないかと思われる。ちなみに、1987米国リウマチ学会の分類基準では、CPRは含まれていない。そのほか、関節リウマチの検査では軟骨破壊に関連するMMP-3なども有用である。'
                },{
                    detailInfo: '30.',
                    questionImg: [],
                    questionSentence: '関節リウマチによる関節外症状として誤っているのはどれか。',
                    choices: ['化膿性毛嚢炎','アミロイドーシス', '間質性肺炎', '体重減少', '骨粗鬆症'],
                    answerImg: [nonarticulationSymptomsOfRA,purulentFolliculitis],
                    answer: '化膿性毛嚢炎',
                    commentary: '関節リウマチでは関節以外の部位にも症状が現れることがあります。関節外症状は貧血、発熱、倦怠感、食欲不振、体重減少などの全身症状のほか、からだのさまざまな部位で症状が現れる可能性があります。肺に現れる症状として、間質性肺炎、気道病変、胸膜病変などがあります。間質性肺炎は比較的頻度の高い関節外症状であり、肺の肺胞組織に炎症が起きる病気です。間質性肺炎が存在していても病初期には多くは無症状ですが、病状がある程度進行してくると、動いた時の息切れや空咳（痰を伴わないせき）を自覚します。病状がさらに進行すると、安静時にも息苦しくなることがあり、肺が線維化（肺が固くなり、十分に膨らみにくくなる）し、肺線維症と呼ばれる状態に進展する場合があります。治療に使用される薬剤によっては、薬剤性肺障害・感染症などの副作用が起こることがあります。消化管や腎臓に現れる症状として、二次性アミロイドーシスがあります。関節リウマチによる炎症が長期間継続することで、アミロイドという物質が消化管、腎臓、心臓などに沈着し、それらの臓器に障害をきたすことがあります。消化管では吸収不良やそれに伴う便通異常、下痢などの症状、腎臓では腎機能障害（蛋白尿、腎不全など）、心臓では不整脈や心不全が現れることがあります。その他、心臓では心膜炎、心内膜炎、心筋炎などがあり、眼では強膜炎などがあり、皮膚ではリウマトイド結節があります。またリウマチでは関節の障害により関節を動かす筋肉が委縮し、筋力低下や筋肉痛が起きます。動きが不自由になり、転倒などが起きやすく、骨粗鬆症を伴いやすいです。関節リウマチで大量に分泌される炎症性サイトカインが骨の破壊を促していることも原因です。　一方で毛包炎（毛嚢炎）は、毛穴の奥の毛根を包んでいる部分「毛包」の浅い層に限られる、通常は黄色ブドウ球菌を原因菌とする毛包の細菌感染症です。黄色ブドウ球菌のほか、緑膿菌やそのほかの菌が原因となることもあります。いわゆるニキビも毛包炎の一種といえます。関節リウマチ治療に使われる免疫抑制剤やステロイド剤は、免疫機能を低下させるため、毛嚢炎にかかりやすくなりますが、関節リウマチ自体が毛嚢炎を引き起こすことはありません(関節外症状としては含まれません)。'
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
        groupTag: '運動器疾患 2021本試験',
        groupContents: [{
            detailInfo: '1.',
            questionImg: [],
            questionSentence: '高齢者に生じやすい骨折で、誤っているのはどれか。',
            choices: ['上腕骨頸部骨折','橈骨遠位端骨折', '腰椎圧迫骨折', '大腿骨頸部骨折', '脛骨骨幹部骨折'],
            answerImg: [fracture1,fracture2],
            answer: '脛骨骨幹部骨折',
            commentary: '高齢者の骨折は、骨粗しょう症による骨の脆弱ぜいじゃく化が基礎にあり、わずかな外力でも骨折を起こすことが特徴です。いちど骨折を起こすと長期間の安静が必要で、｢寝たきり｣の原因になる可能性もあります。また、高齢者が骨折する原因のほとんどは「転倒」です。高齢者に多い4大骨折として、大腿骨近位部骨折・脊椎圧迫骨折・上腕骨近位部骨折・橈骨遠位端骨折が挙げられる。脛骨骨幹部骨折は脛骨の中間部（すね）の骨折で、交通事故など直接強い衝撃が加わるだけでなく、足首を固定されたまま強くねじられるなどの力で骨折することが多いため、これが誤りとなる。治療は保存療法が基本であるが、大腿骨近位部骨折は寝たきりの原因となるため可能であれば手術を選択することが多い。'
        },{
            detailInfo: '2. AI正解',
            questionImg: [],
            questionSentence: '女性より男性に多い疾患はどれか。',
            choices: ['外反母趾','先天性内反足', '思春期側弯症', '先天性筋性斜頸', '先天性股関節脱臼'],
            answerImg: [clubFeet,adolescentIdiopathicScoliosis],
            answer: '先天性内反足',
            commentary: '外反母趾の原因として女性・遺伝・ハイヒールが三大原因と言われる。先天性内反足の病因は特定できていないが、1,000∼2,000出生に1人程度の発生率で，2:1で男児に多い。　脊柱側弯症とは、さまざまな原因で背骨が弯曲してしまう病気です。その中でも成長期である小学校高学年から中学校時代に発症する思春期特発性側弯症が全側弯症の80～90％を占め、最も多いものです。女子が男子の5～7倍発症します。　先天性筋性斜頚とは、出生時におこる首の筋肉の外傷です。性別というよりは分娩方法や胎位などが原因となります。先天性股関節脱臼は女性に多い疾患であり、男女比は約1:5-9である。',
        },{
            detailInfo: '3. AI正解',
            questionImg: [],
            questionSentence: 'ギヨン管症候群の所見として誤っているのはどれか。2つ選べ。',
            choices: ['鷲手変形','下垂手', '手背尺側の知覚障害', 'フローマン徴候', '骨間筋萎縮'],
            answerImg: [guyonCanal,guyonCanalSyndrome1,guyonCanalSyndrome2],
            answer: '下垂手,手背尺側の知覚障害',
            commentary: 'ギヨン管症候群(Guyon’s canal syndrome)とは、尺骨神経が尺骨神経管(ギヨン管)内で圧迫されることによって生じる神経障害。尺骨神経なので小指の痺れや疼痛、骨間筋と尺骨神経支配筋の萎縮がみられる。肘部管症候群ではフローマン徴候がみられる。下垂手は橈骨神経麻痺によってみられる症状で、誤りである。ギヨン管症候群では尺骨神経手背枝の麻痺を伴わないため、手背の感覚障害は出現しないので、手背尺側の知覚障害は誤りである。',
        },{
            detailInfo: '4.',
            questionImg: [],
            questionSentence: '手根管症候群の所見として誤っているのはどれか。',
            choices: ['環指橈側のしびれ','短母指外転筋の筋萎縮', 'ファーレンテスト陽性', '夜間痛', '母指内転障害'],
            answerImg: [carpalTunnelSyndrome1,carpalTunnelSyndrome2,carpalTunnelSyndrome3],
            answer: '母指内転障害',
            commentary: '手根管症候群(Carpal Tunnel Syndrome)とは、正中神経が手首（手関節）にある手根管というトンネル内で圧迫されて起こる病態で、妊娠・出産期や更年期の女性や、骨折などのケガ、仕事やスポーツでの手の使いすぎ、透析をしている人、腫瘍や腫瘤などで生じます。初期には示指、中指がしびれ、痛みがでますが、最終的には母指（親指）から環指の母指側の3本半の指がしびれます（正中神経の支配領域）。急性期には、このしびれ、痛みは夜から明け方に強く、目を覚ますと手がしびれ、痛みます。手を振ったり、指を曲げ伸ばしするとしびれ、痛みは楽になります。手のこわばり感もあります。ひどくなると母指の付け根（母指球/母指内転筋）がやせて母指と示指できれいな丸（OKサイン/母指内転障害）ができなくなります。縫い物がしづらくなり、細かいものがつまめなくなります。ファーレンテストでは、手首（手関節）を直角に曲げて手の甲をあわせて保持し、1分間以内にしびれ、痛みが悪化するかどうかを見ます（誘発テスト）。正中神経は短母指内転筋も支配しているが、障害される運動は母指内転運動ではなく母指対立運動である。',
        },{
            detailInfo: '5.',
            questionImg: [],
            questionSentence: '手の変形性関節症を起こしにくい部位はどれか。',
            choices: ['母指CM関節','母指IP関節', '手指DIP関節', '手指PIP関節', '手指MCP関節'],
            answerImg: [osteoarthritis,Bouchard,Heberden],
            answer: '手指MCP関節',
            commentary: '変形性関節症とは、関節の間にある軟骨が擦り減ったことで滑らかに動かなくなり、関節の骨などが摩擦を起こして炎症を起こし、水がたまったりする症状のことです。 また、骨棘（こつきょく）という骨に棘のような突起ができて関節が変形していきます。手指のDIP関節(遠位指節間関節)ではへバーデン結節が、PIP関節(指節間関節)ではブシャール結節が、母指のCM関節(親指基底関節)では母指基底関節症が起こりやすい。MCP関節(中手関節)は変形性関節症が起こりにくい部位である。',
        },{
            detailInfo: '6.',
            questionImg: [],
            questionSentence: '骨軟部腫瘍について正しいのはどれか。',
            choices: ['原発性悪性軟部腫瘍では、ほとんどに化学療法が有用である。','各種がんの治療が進歩したので、転移性骨腫瘍も激減している。', '軟部腫瘍は、良悪性にかかわらず無症候性であることが多い。', '全悪性腫瘍に占める骨軟部悪性腫瘍の割合は、約10% (1/10)を占める。', '多くはMRIで診断がおおむね可能であり、生検を要するのは限られた症例である。'],
            answerImg: [guidelineOfSoftTissueTumor],
            answer: '多くはMRIで診断がおおむね可能であり、生検を要するのは限られた症例である。',
            commentary: '原発性悪性軟部腫瘍は軟部肉腫とも呼ばれ、基本的には手術療法が選択され、横紋筋肉腫など限られた場合で化学療法や放射線療法が併用される。肺がん(25%)、乳がん(14.1%)、前立腺がん(8.9%)などから脊椎への転移性骨腫瘍が多く、近年画像診断の進歩などによる発見機会の増加やがん治療の進歩による生存期間延長により転移性骨腫瘍の発症は増加傾向にある。軟部腫瘍は良性でも悪性でも疼痛を認めない場合が多いが、症状はある。例えば手足の筋肉にくるみ大以上の無痛性腫瘤を触れる、大きくなると表面がテカテカと光沢を示し、静脈が浮き出てくる、腫瘍部は腫れて、触ると熱を持っているが通常押さえても痛みがない、腫瘍は触るとよく動くが基底の骨や筋肉に浸潤すると動きにくくなるなど。　わが国の2008 年度全国骨・軟部腫瘍登録では，良・悪性軟部腫瘍計3,708 例が登録されており，そのうち，良性は70.4％，悪性は29.6% であった（T2R00005）．良性軟部腫瘍では治療を行わずに経過観察が行われている例が多く，病院で診察を受けていない患者の存在も考慮すると，良性軟部腫瘍の頻度はさらに高いと考えられる．MRI は組織分解能に優れていて，軟部腫瘍の性状を評価するのに最も適した画像検査であり、悪性の場合など限られた症例でのみ胸部CT、生検など追加の検査を行う。',
        },{
            detailInfo: '7. AI正解',
            questionImg: [],
            questionSentence: '骨軟部腫の画像診断について正しいのはどれか。',
            choices: ['CTとMRIがあれば単純X線は不要である。','手術計画を立てる上でMRIは非常に有用である。', '悪性腫瘍の転移検索はPET検査のみで十分である。', '良性腫瘍には、血管造影検査で濃染されるものはない。', '骨シンチグラフィは腫瘍と非腫瘍性病変の鑑別に有用である。'],
            answerImg: [guidelineOfSoftTissueTumor,SoftTissueTumorRI],
            answer: '骨シンチグラフィは腫瘍と非腫瘍性病変の鑑別に有効である',
            commentary: '骨軟部腫瘍の画像診断では次のような方法があります。1. 単純レントゲン…骨腫瘍では典型的なパターンもあり、診断に役立つことがあります。 2. CT…骨は非常に分かり易く、骨腫瘍で特に有効です。通常の撮影では筋肉と腫瘍の区別はつきにくいため、造影剤を使って撮影することがあります。 3. MRI…腫瘍の範囲や、大まかな診断を行う上で非常に役に立つ検査です。 4. タリウムシンチグラム…腫瘍の良性か悪性か調べたり（約8割の確率で正しいと言われています）、骨軟部腫瘍の化学療法の効果判定に有効です。 5. 骨シンチグラム…骨が壊されているか、他の骨に転移しているかどうかを調べます。 6. PET-CT…転移がないかどうか全身を調べる検査で、3～4時間かかります。　→単純X線は骨腫瘍だけでなく軟部腫瘍でも初期診断や肺転移診断などに有用。例えば悪性腫瘍の肺転移検出にはPETだけでなく胸部CTが有用である場合があったり、脳など正常でも濃染する場所ではPET検査で転移検出することはできない。軟部腫瘍は筋・脂肪・血管・神経鞘など様々な軟部組織から発生する腫瘍の総称であるため、中には血管腫など血液造影検査で濃染されるものもある。骨シンチグラフィは、軟部腫瘍が骨と隣接していた時に骨を合併切除するべきかどうかの鑑別に有用であり、手術計画を立てる段階で有用な画像検査である。',
        },{
            detailInfo: '8.',
            questionImg: [],
            questionSentence: '骨肉腫について正しいのはどれか。',
            choices: ['壮年期に好発する。','長管骨骨幹端に好発する。', '特異的融合遺伝子を有する。', '患者の5年生存率は90%以上である。', '多くは化学療法が有用である。'],
            answerImg: [osteosarcoma],
            answer: '長管骨骨幹端に好発する。',
            commentary: '骨肉腫(osteosarcoma)は、腫瘍性の類骨・骨形成を伴う肉腫で、原発性悪性骨腫瘍の中で最も多い。10歳代の男性に好発し、膝関節周囲などの長管骨の骨幹端部に好発する。肺転移が多いが、5年生存率は近年70%程度にまで改善してきている。患肢温存率は90%近い。治療は術前・術後化学療法を併用した広域切除術が基本。特異的融合遺伝子は現時点では報告されていない(Ewing肉腫の話？)。',
        },{
            detailInfo: '9.',
            questionImg: [],
            questionSentence: 'FGFR3異常症について正しいのはどれか。3つ選べ。',
            choices: ['軟骨低形成症の病因となる。','体幹短縮型低身長を呈する。', '生命予後が極めて悪い。', '軟骨無形成症の知能は正常である。', '四肢管状骨の長径成長は低下する。'],
            answerImg: [],
            answer: '軟骨低形成症の病因となる。 軟骨無形成症の知能は正常である。 四肢管状骨の長径成長は低下する。',
            commentary:'FGFR3異常症は、染色体領域4p16.3に存在する遺伝子FGFR3(fiber growth factor receptor 3)を原因遺伝子とする遺伝性の軟骨無形成症で四肢短縮型低身長症を呈する。成人身長は男性で130cm、女性で120cm程度と低く著名な四肢短縮のため、患者は日常生活でさまざまな制約を受ける。脊柱管狭窄のため中高年になると、脊髄症状を呈することがある。大半が知能面では正常であり、積極的な医学的評価を行えば平均余命も正常であるとされる。四肢短縮は著しく出生時から認めるが、体幹短縮型低身長ではない。',
        },{
            detailInfo: '10. AI正解',
            questionImg: [],
            questionSentence: 'リハビリテーション科医の役割について間違っているものはどれか。',
            choices: ['活動に焦点を当て、活動を用いて治療する。','活動関連の包括的医学管理を行う。', '「活動の治療文化」を根付かせる。', '訓練室で待ち、集中的に訓練を行う。', '不動や廃用を回避し早期離床を促進する。'],
            answerImg: [rehabilitation1,rehabilitation2],
            answer: '訓練室で待ち、集中的に訓練を行う。',
            commentary: 'リハビリテーション科医の役割は、活動に焦点を当て、活動を用いて治療することである。活動関連の包括的医学管理を行い、患者の活動の質を向上させることを目指す。また、「活動の治療文化」を根付かせ、患者が自らの活動を通じて治療に参加することを促す。不動や廃用を回避し早期離床を促進することで、患者の活動能力を維持・向上させる。訓練室で待ち、集中的に訓練を行うことは、リハビリテーション科医の役割には含まれない。',
        },{
            detailInfo: '11.',
            questionImg: [],
            questionSentence: '骨Paget病について正しいのはどれか。3つ選べ。',
            choices: ['単純エックス線上、骨吸収と修復の像がみられる。','アジアに多く見られる。', 'パラミクソウイルスの関与が指摘されている。', 'アルカリフォスファターゼは増加を示す。', 'ビスフォスフォネート製剤の有効性がある。'],
            answerImg: [pagetBone],
            answer: 'パラミクソウイルスの関与が指摘されている。 アルカリフォスファターゼは増加を示す。 ビスフォスフォネート製剤の有効性がある。',
            commentary: '骨Paget病は単純X線では骨吸収と硬化(修復ではない)が混在するモザイク像が見られ、白人に多くアジア人には稀の疾患。パラミクソウイルスの関与が示唆されていて、ALP(アルカリホスファターゼ)は増加を示す。治療には、鎮痛薬や骨吸収に対してビスフォスフォネート剤が用いられる。',
        },{
            detailInfo: '12.',
            questionImg: [],
            questionSentence: '外反母趾に成因について誤っているのはどれか。2つ選べ。',
            choices: ['肥満','短い第1中足骨', '第1中足骨の内反', 'ハイヒールのような先端の細い履物', '母趾が第2趾よりも短いギリシャ型の足趾'],
            answerImg: [halluxValgusCause1,halluxValgusCause2],
            answer: "短い第1中足骨,母趾が第2趾よりも短いギリシャ型の足趾",
            commentary: '外反母趾とは、母趾(足の親指)が、第2趾の方へ曲がって変形している状態をいい、身体の中心線から見て、母趾が外側に向いているために外反母趾と呼ばれています。母趾の中足趾節関節（MTP関節、付け根の関節）で、そこから足首側に付いている骨（第1中足骨）が内反し（先端が内側を向く）、その先端が内側に突出した結果、母趾の付け根の内側にバニオンと呼ばれる胼胝（べんち、たこ）を形成し、痛みを生じます。外反母趾の三大原因として、肥満、ハイヒール、遺伝がある。外反母趾は母趾が第2趾より長い場合(母趾が靴の先端にあたるため)や、第1中足骨が長い場合(第1中足骨が外側に突出し、母趾が内反する)に発症しやすい。ハイヒールのような先端の細い履物は、足の前部に負担をかけるため外反母趾を悪化させる。'
        },{
            detailInfo: '13. AI正解',
            questionImg: [],
            questionSentence: '成人期扁平足において陽性となる徴候もしくはテストを2つ選べ。',
            choices: ['too many toes sign','single heel rise test', 'Thompson test', 'Jackson test', 'Spuling test'],
            answerImg: [],
            answer: 'too many toes sign,single heel rise test',
            commentary: '成人期扁平足はtoo many toes signといって、立位をとらせて後方から観察すると、踵が外反し前足部が外転することにより、健側に比べて患趾が多く見えるのが特徴です。他にもsingle heel rise testといって片脚で爪先立ちができなくなったり、荷重時のX線で異常所見が観察できたり、MRI検査で腱の断裂が確認できたりすると診断が確定します。',
        },{
            detailInfo: '14.',
            questionImg: [],
            questionSentence: '足関節外側靭帯として不適切なのはどれか。2つ選べ。',
            choices: ['前距腓靭帯','踵腓靭帯', '後距腓靭帯', '前十字靭帯', '後十字韌帶'],
            answerImg: [ankleLigament],
            answer: '前十字靭帯,後十字韌帶',
            commentary: '足関節外側靭帯は、足首の外側にあり安定性を支持するための靱帯で、前距腓靱帯、踵腓靱帯、後距腓靱帯の3つの靭帯の総称です。これらの靱帯と周囲の筋肉が協働して足首の外側の安定性を保ちます。前十字靭帯・後十字靭帯は膝関節に存在する靭帯であり、足関節には存在しません。',
        },{
            detailInfo: '15.',
            questionImg: [question202115],
            questionSentence: '76歳の女性。右膝関節痛を主訴に来院した。2年前に歩行時の右膝関節痛を自覚し徐々に悪化している。最近歩行が困難になったため受診した。右膝関節の外傷歴はない。身長156cm、体重70kg。体温36.3°C。脈拍64/分、整。右膝関節に膝蓋跳動と内反変形とを認めるが発赤と熱感はない。右膝関節エックス線写真を別に示す。今後の対応の説明で誤っているのはどれか。',
            choices: ['「大腿部の筋力を強くしましょう」','「杖の使用は避けてください」', '「関節を保温するようにしましょう」', '「体重を減らしましょう」', '「手術を検討しましょう」'],
            answerImg: [kneeOsteoarthritis],
            answer: '「杖の使用は避けてください」',
            commentary: '40歳以上で「膝の痛み」でお悩みの方は全国で800万人（推定）。その大部分は、変形性膝関節症によるものです。  変形性膝関節症とは、膝の関節の軟骨の質が低下し、少しずつすり減り、歩行時に膝の痛みが出現する病気です。平地での歩行は大丈夫でも、階段で膝が痛いために困っている、歩行時の膝の痛みはないけれど、正座は膝が痛くてできない、などが初期の変形性膝関節症の症状です。変形性膝関節症の治療には、（1）手術以外の方法(保存療法)と、（2）手術による治療(手術療法)、に分けることができます。 （1）手術以外の治療の原則は、①運動療法その他の薬以外の治療法と、②炎症や痛みを抑えるための薬による治療、の2つを併用します。 まず痛みを早く取り除くことが一番ですが、それとともに一度擦り減った軟骨は再生しないため、如何に進行を抑えるかも治療の目的となります。大腿四頭筋を鍛える・正座を避ける・減量する・膝の血行を良くすることは予防として重要であり、また重症の場合は手術治療も選択肢の一つとなる。'
        },{
            detailInfo: '16.',
            questionImg: [],
            questionSentence: '人工膝関節置換術後の周術期合併症の肺血栓塞栓症について誤っているのはどれか。',
            choices: ['術後24時間以内の発症が多い。','深部静脈血栓症の既往がある場合は発症頻度が高い。', '予防策として下肢弾性ストッキングの装着がある。', '起立、 歩行開始時に突然の呼吸困難と胸痛を主訴に発症することがある。', '予防として足関節の底背屈運動が有効である。'],
            answerImg: [venousThrombolism,footStretch],
            answer: '術後24時間以内の発症が多い。',
            commentary: '深部血栓塞栓症は、長期入院や肥満、妊娠などでリスクが高まるため、周産期での合併症が問題となっている。深部静脈血栓症(VTE)の既往もリスク因子で、術後すぐというよりは長期の臥床後の起立・歩行開始時に発症することが多い。予防として、下肢弾性ストッキングの着用や、足関節の底背屈運動が有効である。'
        },{
            detailInfo: '17.',
            questionImg: [],
            questionSentence: '骨端症について正しいものを2つ選べ。',
            choices: ['ベルテス病は女児に多い。','キーンベック病は手をよく使用する男性に多い。', '第1ケーラー病は中足骨に発症する。', 'オスグッド・シュラッター病の両側発症はみられない。', 'パンナー病は局所安静で自然治癒が期待できる。'],
            answerImg: [osteoChondrosisName],
            answer: 'キーンベック病は手をよく使用する男性に多い,パンナー病は局所安静で自然治癒が期待できる。',
            commentary: '骨端症は、骨端の軟骨組織が壊死する疾患で、ベルテス病は男児に多く、キーンベック病は手をよく使用する男性に多い。第1ケーラー病は足の舟状骨に発症し、オスグッド・シュラッター病は両側発症がみられる。パンナー病は局所安静で自然治癒が期待できる。',
        },{
            detailInfo: '18.',
            questionImg: [],
            questionSentence: '40 歳の男性。 1年前から徐々に歩きにくくなり、 1か月前から両上肢全体のしびれがあり来院し た。 深部反射は、下顎反射正常、 上腕二頭筋反射亢進、上腕三頭筋腱反射亢進、 膝蓋腱反射亢進およびアキレス反射亢進がみられた。 最も考えられる障害部位はどれか。',
            choices: ['橋','第3.4頚髄', '第 5.6頚髄', '第7.8頚髄', '第12胸髄'],
            answerImg: [deepTendonReflex],
            answer: '第3.4頚髄',
            commentary: '下顎反射は三叉神経(脳神経V)、上腕二頭筋反射は放射神経(神経根C5)、上腕三頭筋腱反射は橈骨神経(神経根C6)、膝蓋腱反射は大腿神経(神経根L3,4)、アキレス反射は脛骨神経(神経根S1)によって支配されている。上記の所見から、上腕二頭筋反射亢進、上腕三頭筋腱反射亢進、膝蓋腱反射亢進およびアキレス反射亢進がみられることから、第3.4頚髄の障害が考えられる。深部腱反射は障害部位より上位では正常で、障害部位より下位では亢進、障害部位では消失する。'
        },{
            detailInfo: '19. AI正解',
            questionImg: [],
            questionSentence: '腰椎椎間板ヘルニアで S1 神経根が圧迫され、 同側下肢の筋力低下がみられた。 障害されると考え られる動作はどれか。',
            choices: ['股関節屈曲','股関節内転', '膝関節伸展', '足関節背屈', '足関節底屈'],
            answerImg: [innervationLowerLimb],
            answer: '足関節底屈',
            commentary: '股関節屈曲はL1-L2神経根、膝関節伸展はL3-L4神経根、股関節内転はL5神経根、足関節背屈はL5神経根、足関節底屈はS1神経根によって支配されている。S1神経根の障害により、足関節底屈が障害される。'
        },{
            detailInfo: '20.',
            questionImg: [],
            questionSentence: 'ロコモティブシンドローム(以下ロコモ) は運動器の障害により移動機能が低下した状態である。 ロコモなし、ロコモ度1 ロコモ度2に分類するための評価方法を以下の中から3つ選べ。',
            choices: ['立ち上がりテスト','ロコチェック', 'SLR テスト', '2 ステップテスト', 'ロコモ 25'],
            answerImg: [locomotiveSyndrome,locoCheck],
            answer: '立ち上がりテスト、2ステップテスト、ロコモ25',
            commentary: 'ロコモティブシンドローム(以下ロコモ) は運動器の障害により移動機能が低下した状態である。現在ロコモ度はなし・1~3の四段階に分類され、その評価方法として立ち上がりテスト、2ステップテスト、ロコモ25がある。ロコチェックは日常で自分で気づくためのチェックリストであり、SLRテストは腰痛の評価に用いられる。'
        },{
            detailInfo: '21. AI正解',
            questionImg: [],
            questionSentence: '先天性股関節脱臼の特徴で誤っているのはどれか。',
            choices: ['家族内発生は少ない。','第1子に多く発症する。', '骨盤位分娩に多く発症する。', 'ここ数年、 発生率が増加している。', '患側股関節の皮膚溝が健側に比べ深く、多くなる。'],
            answerImg: [dysplasiaOfHip1,dysplasiaOfHip2,dysplasiaOfHip3],
            answer: '家族内発生は少ない。',
            commentary: '先天性股関節脱臼は発育性股関節脱臼とも呼ばれ、主に乳児期に診断される股関節の関節包内脱臼である。女児・初産児・骨盤位分娩例に好発するため、発症には子宮内での肢位・出産時の肢位・出生後の外的要因のほか、遺伝的要因も関与していると考えられ、近年では家族内発生が増加し問題となっている。患肢の皮膚溝が健側に比べ深く、多くなることが特徴である。'
        },{
            detailInfo: '22.',
            questionImg: [],
            questionSentence: '小児虐待について正しいのはどれか。',
            choices: ['児童虐待の発生はほとんどが小学生以上の児童である。','1歳未満の重度頭部外傷の10%は虐待である。', '児童虐待を疑った場合は通告の義務があり、これは医師の守秘義務違反には当たらない。', '新旧織り交ぜた多発骨折を見た場合でも虐待の可能性は低い。', '児童虐待の相談・処理件数はここ10年で年々減っている。'],
            answerImg: [childAbuse1,childAbuse2,childAbuse3],
            answer: '児童虐待を疑った場合は通告の義務があり、これは医師の守秘義務違反には当たらない。',
            commentary: '児童虐待の場合は、通告の義務が守秘義務より優先される(児童保護法第25条)。通告の義務は、虐待の疑いがある場合には、医師も含め、すべての人に課せられる。通告の義務を果たすことは、医師の守秘義務違反には当たらない。'
        },{
            detailInfo: '23.',
            questionImg: [],
            questionSentence: '88 歳の女性。 室内で転倒し動けなくなり搬入された。 右大腿骨転子部骨折と診断され、 翌日に骨 接合術を受けた。 10年前から Alzheimer 型認知症で内服治療を受けている。 手術当日に起こりうる 合併症はどれか。 3つ選べ。',
            choices: ['褥瘡','せん妄', '偽関節', '関節拘福', '深部静脈血栓症'],
            answerImg: [question23],
            answer: '褥瘡,せん妄,深部静脈血栓症',
            commentary: '褥瘡は床ずれとも呼ばれ、患者が長時間同じ体勢でいることにより、皮膚が圧迫されることで皮膚の血行が悪くなり、皮膚が壊死する病態である。せん妄は、急性の意識障害であり、病気や薬の副作用、環境の変化などが原因となる。深部静脈血栓症は、下肢の静脈に血栓ができる病態であり、術後に発生することがある。'
        },{
            detailInfo: '24. AI正解',
            questionImg: [],
            questionSentence: '右中殿筋不全患者の歩行時にみられるのはどれか。',
            choices: ['体幹を前に傾ける。','右下肢を分回しする。', '右大腿骨遠位に手を当てる。', '左右の下肢を側方に広げる。', '右立脚時に骨盤を左側に傾ける。'],
            answerImg: [TrendelenburgSign],
            answer: '右立脚時に骨盤を左側に傾ける。',
            commentary: 'Trendenburg sign(トレンデレンブルグ徴候)は、骨盤が立脚側に傾く徴候であり、右中殿筋不全の場合は右立脚時に骨盤が左側に傾く。中臀筋は骨盤を安定させる筋肉であり、中臀筋の不全により骨盤が立脚側に傾く。'
        },{
            detailInfo: '25. AI正解',
            questionImg: [],
            questionSentence: '手根管症候群について正しいのはどれか。3つ',
            choices: ['女性に多い。','長期血液透析患者に発症しやすい。', '重症例では母指の対立運動が障害される。', '日中に増悪する疼痛が特徴である。', '保存療法は無効である。'],
            answerImg: [carpalTunnelSyndrome1,carpalTunnelSyndrome2,carpalTunnelSyndrome3],
            answer: '女性に多い,長期血液透析患者に発症しやすい,重症例では母指の対立運動が障害される。',
            commentary: '手根管症候群は、手根管内にある手根管を構成する骨、靭帯、腱、神経などの組織が圧迫されることにより、手のひら側の指先にかけての感覚障害や疼痛（夜間痛）、手のひらの筋力低下などが生じる疾患である。手根管症候群は、女性に多く、長期血液透析患者に発症しやすい。重症例では母指の対立運動が障害される。保存療法は、手首の固定、腱鞘内注射、薬物療法、物理療法などが行われる。'
        },{
            detailInfo: '26.',
            questionImg: [],
            questionSentence: '腓骨神経麻痺について正しいのはどれか。3つ選べ。',
            choices: ['下肢における神経麻痺の中で最も頻度が高い。','足関節の底屈が障害される。', '砕石位の手術の際に起こりやすい合併症のひとつである。', '神経の連続性が保たれている場合は自然回復する可能性が高い。', 'フロマン (Froment) 徴候が陽性となる。'],
            answerImg: [lithotomyPosition],
            answer: '下肢における神経麻痺の中で最も頻度が高い,砕石位の手術の際に起こりやすい合併症のひとつである,神経の連続性が保たれている場合は自然回復する可能性が高い。',
            commentary: '腓骨神経麻痺とは、総腓骨神経などが主に腓骨頚部で圧迫されることにより、総腓骨神経の支配する前脛骨筋や長趾伸筋など足趾・足関節の背屈運動が障害される病態である。下肢における神経麻痺の中で最も頻度が高い。長時間足組みをした後や、骨折・脱臼などの外傷後、ギプス固定後などに好発する。図のような砕石位の手術の際に起こりやすい合併症の一つである。末梢神経伝導検査や超音波検査などが行われ、回復が見込める場合は装具固定や薬物療法などの保存療法が行われる。腫瘤などの圧迫や神経断裂があったり、陳旧例などで回復が見込めない場合は後脛骨筋腱移植術などの手術が行われる。'
        },{
            detailInfo: '27.',
            questionImg: [],
            questionSentence: '人工関節置換術全般に関する記述で正しいのはどれか。2つ選べ。',
            choices: ['人工関節置換術は骨粗鬆症があるため高齢者には適応はない。','人工関節置換術の目的は除痛、 可動域改善、変形矯正などより ADL を改善することである。', '膝関節に対する人工膝関節置換術の件数が日本では最も多い。', '骨腫瘍切除後の機能再建には人工関節置換術の適応はない。', '人工関節置換術後の合併症として感染があるが、 抗菌薬投与で鎮静化し手術治療は不要である。'],
            answerImg: [ankleOsteoarthritisComparingTreatments,artificialJointData],
            answer: '人工関節置換術の目的は除痛、 可動域改善、 変形矯正などより ADLを改善することである,膝関節に対する人工膝関節置換術の件数が日本では最も多い。',
            commentary: '人工関節置換術は、怪我や疾患により傷んだり変形した関節の表面を取り除いて、人工関節に置き換える手術です。 人工関節は、生体材料として信頼性の高い金属（チタン合金、コバルトクロム合金）のほか、プラスチック（ポリエチレン）、セラミックなど、摩耗に強く耐久性を高める処理を施した材質で作られています。痛みが取り除かれ、関節の機能が再生されるだけでなく、脚のゆがみを直し、脚の長さを揃えて歩き方や身体全体のバランスを整えることができ、ADL(activity of daily living)の改善が期待できます。人工関節置換術のリスクとして、骨への沈み込み(sinking)があるため、人工関節置換術は骨粗鬆症がある高齢者には適応されない。2020年度のデータでは人工関節手術の部位別件数割合で最も多いのが膝関節(56%)、次いで股関節(40%)である。骨腫瘍では外科的治療が基本であるが、近年はできるだけ患肢温存が行われているため、およそ80%の症例で腫瘍型人工関節手術が行われ、残りの20%は処理骨などの生物学的再建が行われているとされる。骨盤腫瘍手術後は感染率が高いなどのデメリットはあるが、それでも比較的短い手術時間・安定した人工関節の固定が得られる・早期リハビリテーションが可能であるなどのメリットがある。人工関節による感染には細心の注意が必要で、重症の場合は人工関節を一旦外し、治療後再手術が必要になる場合もある。',
        },{
            detailInfo: '28. AI正解',
            questionImg: [],
            questionSentence: '人工股関節置換術に関する記述で正しいのはどれか。2つ選べ。',
            choices: ['緩みの原因としてポリエチレンの摩耗粉による骨溶解がある。','生存率は概ね10年で50%未満である。', '外傷後の変形性股関節症に対しては適応ではない。', '術後脱臼はしない。', 'セラミックが材料として使用されることがある。'],
            answerImg: [totalHipArthroplasty],
            answer: '人工股関節置換術後の緩みの原因としてポリエチレンの摩耗粉による骨溶解がある,セラミックが材料として使用されることがある。',
            commentary: '人工股関節置換術(Total Hip Arthroplasty:THA)は変形性股関節症や関節リウマチ、大腿骨頭壊死などで適応があり、腰痛や歩行困難などの症状を改善する手術です。人工股関節は、金属、セラミック、ポリエチレンなどの材料で作られており、摩耗による骨溶解が起こることがある。セメント人工股関節のインプラント生存率は概ね10年で90%以上であり、セメントレス人工股関節のインプラント生存率は概ね10年で80%以上である。人工股関節は、脱臼することがあり、脱臼のリスクを減らすためには、手術後の適切なリハビリテーションが重要です。人工股関節の材料としては、金属、セラミック、ポリエチレンなどがあり、セラミックは金属アレルギーのある患者に使用されることがある。骨溶解とは、人工関節周囲の骨が溶けて固定性が失われる状態で、レントゲンで骨透亮像〔（こつとうりょうぞう）＝骨がぬけた所見〕がみられる。原因は人工関節材料（特にポリエチレン）の摩耗粉が生体反応を引き起こし、局所にサイトカインと呼ばれる骨溶解を刺激する物質が産生されることによる。'
        },{
            detailInfo: '29. AI正解',
            questionImg: [],
            questionSentence: '関節リウマチの2010年ACR/EULAR 分類基準の評価項目に含まれないものはどれか。',
            choices: ['CRP','単純X線', '罹病期間', '腫脹関節', '抗CCP抗体'],
            answerImg: [RA2010],
            answer: '単純X線',
            commentary: '関節リウマチの分類基準として、2010年にACR/EULARによって新たに提唱された基準がある。この基準では、腫脹関節の数・血清反応(リウマトイド因子/抗CCP抗体)・急性炎症反応(CRP/ESR)・関節リウマチの病期間の4つの項目が評価され、これらの項目によってスコアが算出される。'
        },{
            detailInfo: '30.',
            questionImg: [],
            questionSentence: '関節リウマチによる関節外症状として誤っているのはどれか。',
            choices: ['体重減少','骨粗鬆症', '間質性肺炎', 'アミロイドーシス', '口腔内アフタ性潰瘍'],
            answerImg: [extraArticularSymptoms],
            answer: '口腔内アフタ性潰瘍',
            commentary: '関節リウマチでは関節以外の部位にも症状が現れることがあります。関節外症状は貧血、発熱、倦怠感、食欲不振、体重減少などの全身症状のほか、からだのさまざまな部位で症状が現れる可能性があります。リウマチが原因の肺の病変には間質性肺炎、気道病変、胸膜病変などがあります。リウマチが原因の肺の病変には間質性肺炎、気道病変、胸膜病変などがあります。間質性肺炎は比較的頻度の高い関節外症状であり、肺の肺胞組織に炎症が起きる病気です。　関節リウマチによる炎症が長期間継続することで、アミロイドという物質が消化管、腎臓、心臓などに沈着し、それらの臓器に障害をきたすことがあります。　関節リウマチで拡散する炎症性サイトカインが骨の破壊を促すため、関節リウマチ患者は一般より２倍骨粗鬆症のリスクがあるとされる。関節リウマチで歩かなくなることや、関節リウマチで使われるステロイドにも骨粗鬆症のリスクがある。'
        },]
    },{
        groupTag: '眼疾患 2022本試験',
        groupContents: [{
            detailInfo: '1.',
            questionImg: [],
            questionSentence: 'Which is the appropriate order of the cataract operation?',
            choices:['前囊切開(CCC)→水流皮質核分離→超音波水晶体乳化吸引→皮質吸引→眼内レンズ(IOL) 挿入','水流皮質核分離→前嚢切開(CCC)→超音波水晶体乳化吸引→皮質吸引→眼内レンズ(IOL) 挿入','前嚢切開(CCC)→超音波水晶体乳化吸引→皮質吸引→眼内レンズ(IOL) 挿入→水流皮質核分離','皮質吸引→前嚢切開(CCC)→超音波水晶体乳化吸引→眼内レンズ(IOL) 挿入→水流皮質核分離','超音波水晶体乳化吸引→水流皮質核分離→前嚢切開(CCC)→眼内レンズ(IOL) 挿入→皮質吸引'],
            answerImg: [cataractSurgerySteps],
            answer: '前囊切開(CCC)→水流皮質核分離→超音波水晶体乳化吸引→皮質吸引→眼内レンズ(IOL) 挿入',
            commentary: '白内障手術の適切な順序は、前囊切開(CCC)→水流皮質核分離→超音波水晶体乳化吸引→皮質吸引→眼内レンズ(IOL) 挿入です。*水晶体嚢の中身を吸引することを水晶体吸引といい、その後水晶体嚢のこびりついた残存部分をストローのような構造で吸引することを(水晶体)皮質吸引という。 進行した白内障に対して、混濁した水晶体を手術で取り除き、眼内レンズを挿入する手術を行うのが一般的です。手術は基本的に局所麻酔で行います。最近の手術では2 mm前後の切開創から超音波を発生する吸引器具を眼の中に挿入し、眼の中に水を灌流しながら混濁した水晶体の中身を吸引し、残した水晶体の薄い膜（水晶体嚢）の中に眼内レンズを挿入する方法で行われています。ただし非常に進行した白内障やもともと水晶体嚢を支える組織が弱い眼では、最初から、または術中に別の手術方法が選択されることもあります。',
        },{
            detailInfo: '2.',
            questionImg: [],
            questionSentence: 'Which is the characteristic antibody of the myasthenia gravis?',
            choices:['抗SS-A抗体','抗アクアポリン4抗体','抗アセチルコリン受容体抗体','抗甲状腺ペルオキシダーゼ抗体','抗核抗体'],
            answerImg: [myastheniaGravis],
            answer: '抗アセチルコリン受容体抗体',
            commentary: '重症筋無力症（myasthenia gravis：MG）とは、眼球や手足の筋肉を繰り返し動かしていると筋肉がすぐに疲れて、力が入らなくなる病気です。 筋肉は、神経筋接合部（運動神経の末端と筋肉が結合するすきまの部分）の神経終末から筋肉へアセチルコリンが放出されることで、脳からの指令が筋肉へ伝わり運動を開始します。 重症筋無力症では筋肉の表面にあるアセチルコリンの受け皿（アセチルコリン受容体）に対する抗体が免疫の異常によりつくられ、この抗体がアセチルコリンと受け皿（アセチルコリン受容体）の結合をブロックしてしまいます。この抗体を抗アセチルコリン受容体抗体と呼びます。このようにして神経筋接合部での伝達が障害されると、脳の指令が運動神経から筋肉へうまく伝わらなくなり、筋肉が十分に収縮せず、筋力の低下がおこります。 近年では、抗アセチルコリン受容体抗体とは別に、抗MuSK抗体や抗Lrp4抗体などの抗体も重症筋無力症に関連していることがわかってきました。',
        },{
            detailInfo: '3.',
            questionImg: [],
            questionSentence: 'Which of these diseases is the most appropriate cause of the cataract?',
            choices:['中心性漿液性網脈絡膜症','眼外傷','斜視','加齢黄斑変性','緑内障'],
            answerImg: [cataract],
            answer: '眼外傷',
            commentary: '白内障(cataract)の最も適切な原因は眼外傷です。後天性白内障には、加齢性白内障、併発白内障（糖尿病白内障、アトピー白内障、ぶどう膜炎、網膜色素変性症など）、ステロイド白内障、外傷性白内障（強い衝撃・眼に物が刺さる）、などにわけられます。また、水晶体の濁り方にも違いがあります。'
        },{
            detailInfo: '4.',
            questionImg: [],
            questionSentence: '先天色覚異常について正しいものを選べ。',
            choices:['赤緑色覚異常は常染色体劣性遺伝であることが多い。','日本人男性の約5%にみられる。','色覚は1つの検査でスクリーニング、型・程度分類を全て施行可能である。','3型2色覚の場合が最も多い。','杆体の機能異常である。'],
            answerImg: [congenitalColorVisionDeficiency,colorVisionDeficiencyTest],
            answer: '日本人男性の約5%にみられる。',
            commentary: '色覚異常は先天色覚異常と後天色覚異常とに大別されます。先天色覚異常は殆どが1型と2型色覚と呼ばれるもので、これは赤と緑錐体の異常で性染色体であるX染色 体上での劣性遺伝をします。男性はX染色体1本とY染色体1本ずつ、女性は2本のX染 色体をもっていますので先天色覚異常に性差が生じ、我国では男性の4.5%、女性の 0.2%です。白人では男性8%以上との報告があります。この男子4.5%の頻度は40歳以上での緑内障有病率と同じです。この1型および2型色覚者では色覚以外の視力その他の視機能の異常は全くありません。先天色覚異常には他に3型および1色覚がありますが稀なものです。 仮性同色表（色覚検査表）には石原色覚検査表や標準色覚検査表（SPP-1）などがあり、スクリーニングに広く用いられています。ただしこれらの表のみでは、色覚異常があるらしいことは判定できても、確定診断まではできません。診断を確定するためには、アノマロスコープという特殊な検査機器を用いなければなりませんが、この検査は熟練を要し、一般の眼科には備えてありません。色覚異常の程度判定にはパネルD-15という検査が用いられ、生活上の支障や職業適性を大まかに判断します。',
        },{
            detailInfo: '5.',
            questionImg: [],
            questionSentence: '網膜色素変性症について正しいものを選べ。',
            choices:['X染色体性遺伝はない。','主に錐体細胞が障害される。','網膜電図では異常を示さない。','中心視力は発症早期から障害される。','聾や精神遅滞などを伴うことがある。'],
            answerImg: [eyeAnatomy,retinalDegenerationVisualField],
            answer: '聾や精神遅滞などを伴うことがある。',
            commentary: '網膜色素変性では普通、杆体細胞から障害されるために、夜盲が最初に現れることが多く、進行すると周辺の視野が狭くなって、物にぶつかりやすくなったり、物が見えたり消えたりするという症状が現れます。さらに病気が進行すると錐体細胞も障害され、視力低下を自覚するようになります。　基本的には進行性の病気ですが、その進行はとても緩やかで、数年あるいは数十年をかけて進行します。また病状の進行速度には個人差がみられ、症状の起こる順序にも個人差があり、最初に視力が低下してから夜盲を自覚する人もいます。 網膜に光が当たると電気的な信号が生じて、視神経を通して脳に伝わります。この電気信号を角膜上に載せた電極で調べる検査を網膜電図(electroretinogram:ERG)と言います。網膜色素変性の初期では反応が小さくなり、中期以降は反応がみられなくなります。　遺伝形式は、常染色体優性遺伝、常染色体劣性遺伝、X染色体劣性遺伝のすべての遺伝形式をとりますが、日本での頻度は、常染色体優性17％、常染色体劣性25％、X染色体劣性2％と報告されており、家系内に他に患者がおらず遺伝形式が明らかではない弧発例が多く存在します。しかしこのような弧発例の中には、遺伝が隠れていることがあり、詳細な家系調査が欠かせません。難聴(聾)に網膜色素変性症が合併する疾患として、アッシャー（Usher）症候群が挙げられる。アッシャー（Usher）症候群は常染色体劣性遺伝形式をとる疾患である。原因遺伝子としては現在までに９つが同定されている。',
        },{
            detailInfo: '6.',
            questionImg: [],
            questionSentence: '網膜芽細胞腫について正しいものを選べ。',
            choices:['発症頻度は1,600人の出生につき1人の割合である。','内部の石灰化を検出しうる超音波検査が有用である。','眼底検査での発見は難しい。','黒色瞳孔をきたしうる。','小児期に受診することはまれである。'],
            answerImg: [],
            answer: '内部の石灰化を検出しうる超音波検査が有用である。',
            commentary: '網膜芽細胞腫において、内部の石灰化を検出しうる超音波検査が有用です。'
        },{
            detailInfo: '7.',
            questionImg: [],
            questionSentence: '神経外胚葉由来の組織を選べ。',
            choices:['涙腺','角膜実質','水晶体','網膜','脈絡膜'],
            answerImg: [],
            answer: '脈絡膜',
            commentary: '神経外胚葉由来の組織は脈絡膜です。'
        },{
            detailInfo: '8.',
            questionImg: [],
            questionSentence: '眼の解剖について正しいものを選べ。',
            choices:['中心窩網膜に動脈は存在する。','眼動脈は視神経管を通る。','視細胞の数は錘体細胞が桿体細胞よりも多い。','緑内障では色素上皮細胞が障害される。','眼窩で最も骨折しやすいのは外壁である。'],
            answerImg: [],
            answer: '緑内障では色素上皮細胞が障害される。',
            commentary: '眼の解剖において、緑内障では色素上皮細胞が障害されます。'
        },{
            detailInfo: '9.',
            questionImg: [],
            questionSentence: '動脈硬化を示唆する眼底所見として最も適当なものを選べ。',
            choices:['網膜下出血','毛細血管瘤','動静脈交叉現象','視神経乳頭陥凹拡大','黄斑萎縮'],
            answerImg: [],
            answer: '動静脈交叉現象',
            commentary: '動脈硬化を示唆する眼底所見として、動静脈交叉現象が最も適切です。'
        },{
            detailInfo: '10.',
            questionImg: [],
            questionSentence: '滑車神経支配筋を選べ。',
            choices:['上直筋','下直筋','外直筋','上斜筋','内直筋'],
            answerImg: [],
            answer: '上直筋',
            commentary: '滑車神経支配筋は上直筋です。'
        },{
            detailInfo: '11.',
            questionImg: [],
            questionSentence: '瞳孔散大を伴う眼瞼下垂の疾患を選べ。',
            choices:['動眼神経麻痺','Horner症候群','Marcus Gunn症候群','顔面神経麻痺','重症筋無力'],
            answerImg: [],
            answer: 'Horner症候群',
            commentary: '瞳孔散大を伴う眼瞼下垂の疾患はHorner症候群です。'
        },{
            detailInfo: '12.',
            questionImg: [],
            questionSentence: '甲状腺眼症の特徴所見を選べ。',
            choices:['近視','眼球突出','縮瞳','網膜剥離','結膜炎'],
            answerImg: [],
            answer: '眼球突出',
            commentary: '甲状腺眼症の特徴所見は眼球突出です。'
        },{
            detailInfo: '13.',
            questionImg: [],
            questionSentence: '閉瞼に関与する神経を選べ。',
            choices:['顔面神経','動眼神経','三叉神経','上眼瞼挙筋','眼瞼結膜'],
            answerImg: [],
            answer: '動眼神経',
            commentary: '閉瞼に関与する神経は動眼神経です。'
        },{
            detailInfo: '14.',
            questionImg: [],
            questionSentence: '角膜に存在しないものを選べ。',
            choices:['Bowman膜','Descemet','Bruch膜','角膜実質','角膜内皮'],
            answerImg: [],
            answer: 'Bruch膜',
            commentary: '角膜に存在しないものはBruch膜です。'
        },{
            detailInfo: '15.',
            questionImg: [],
            questionSentence: '角膜クロスリンキングの適応となる疾患を選べ。',
            choices:['円錐角膜','ドライアイ','水泡性角膜症','角膜炎','角膜ジストロフィー'],
            answerImg: [],
            answer: '円錐角膜',
            commentary: '角膜クロスリンキングの適応となる疾患は円錐角膜です。'
        },{
            detailInfo: '16.',
            questionImg: [],
            questionSentence: '急性緑内障発作について、間違っているものを2つ選べ。',
            choices:['発作眼は縮瞳している','非発作眼の対光反射は保たれている','水晶体再建術は治療の一つである','急性なので、視野障害をきたすことは絶対にない','頭痛、嘔吐を伴うことがある'],
            answerImg: [],
            answer: '発作眼は縮瞳している,急性なので、視野障害をきたすことは絶対にない',
            commentary: '急性緑内障発作において、間違っているものは発作眼は縮瞳している、急性なので、視野障害をきたすことは絶対にないです。'
        },{
            detailInfo: '17.',
            questionImg: [],
            questionSentence: 'サルコイドーシスの眼所見として正しいものを2つ選べ。',
            choices:['虹彩結節','漿液性網膜剥離','感音性難聴','豚脂様角膜後面沈着物','夕焼け眼底'],
            answerImg: [],
            answer: '虹彩結節,豚脂様角膜後面沈着物',
            commentary: 'サルコイドーシスの眼所見として、虹彩結節と豚脂様角膜後面沈着物が正しいです。'
        },{
            detailInfo: '18.',
            questionImg: [],
            questionSentence: '日本における中途失明原因の第一位を選べ。',
            choices:['白内障','緑内障','結膜炎','加齢黄斑変性','強度近視'],
            answerImg: [],
            answer: '白内障',
            commentary: '日本における中途失明原因の第一位は白内障です。'
        },{
            detailInfo: '19.',
            questionImg: [],
            questionSentence: '3D の近視の人が、33cmの位置で本を読むとき必要なレンズの度数を選べ。',
            choices:['-2D','1D','OD','1D','2D'],
            answerImg: [],
            answer: '1D',
            commentary: '3D の近視の人が、33cmの位置で本を読むとき必要なレンズの度数は1Dです。'
        },{
            detailInfo: '20.',
            questionImg: [],
            questionSentence: '視角 2分の時の視力を求めよ。',
            choices:['0.1','0.3','0.5','1.0','2.0'],
            answerImg: [],
            answer: '0.5',
            commentary: '視角 2分の時の視力は0.5です。'
        }]
    },{
        groupTag: '移植再生医療 2022本試験',
        groupContents: [{
            detailInfo: '1.',
            questionImg: [],
            questionSentence: '人工心肺が必ず必要な肺移植を２つ選べ。',
            choices:['脳死両肺移植','脳死両側片肺移植','脳死片肺移植','生体肺移植','心肺移植'],
            answerImg: [],
            answer: '脳死両肺移植,心肺移植',
            commentary: '人工心肺が必ず必要な肺移植は脳死両肺移植と心肺移植です。'
        },{
            detailInfo: '2.',
            questionImg: [],
            questionSentence: '両肺移植が必要な疾患を2つ選べ。',
            choices:['原発性肺高血圧症','肺気腫','リンパ脈管筋腫症','特発性肺線維症','気管支拡張症'],
            answerImg: [],
            answer: '原発性肺高血圧症,特発性肺線維症',
            commentary: '両肺移植が必要な疾患は原発性肺高血圧症と特発性肺線維症です。'
        },{
            detailInfo: '3.',
            questionImg: [],
            questionSentence: '幹細胞の臨床研究について誤っているものを選べ。',
            choices:['「再生医療等の安全性の確保等に関する法律」に基づく手続きが必要である。','日本では歯髄幹細胞のヒトへの移植がすでに行われている。','日本では誘導多能性幹細胞(iPS細胞) のヒトへの移植は未だ行われていない。','理論的には、 誘導多能性幹細胞(iPS細胞) から歯を作ることは可能である。','理論的には、胚性幹細胞(ES細胞) から歯を作ることは可能である。'],
            answerImg: [],
            answer: '日本では歯髄幹細胞のヒトへの移植がすでに行われている。',
            commentary: '幹細胞の臨床研究について、日本では歯髄幹細胞のヒトへの移植がすでに行われていることが誤りです。'
        },{
            detailInfo: '4.',
            questionImg: [],
            questionSentence: '口唇裂口蓋裂の治療について誤っているものを選べ。',
            choices:['口唇形成術は通常、 生後3-6か月に行う。','口蓋形成術は通常、 18歳頃に行う。','顎裂部骨移植には、 腸骨からの自家海綿骨が用いられることが多い。','顎裂を伴う場合は、歯科矯正治療による咬合回復が必須である。','デンタルインプラントの植立が行われることがある。'],
            answerImg: [],
            answer: '口蓋形成術は通常、 18歳頃に行う。',
            commentary: '口唇裂口蓋裂の治療について、口蓋形成術は通常、 18歳頃に行うことが誤りです。'
        },{
            detailInfo: '5.',
            questionImg: [],
            questionSentence: '唇顎口蓋裂の治療で最も早期に行われるものを選べ。',
            choices:['口唇形成術','口蓋形成術','ホッツ床 (哺乳床) の装着','言語治療','咽頭弁形成術'],
            answerImg: [],
            answer: '口唇形成術',
            commentary: '唇顎口蓋裂の治療で最も早期に行われるのは口唇形成術です。'
        },{
            detailInfo: '6.',
            questionImg: [],
            questionSentence: '口唇裂口蓋裂の治療について正しいものを選べ。',
            choices:['生後6か月ころよりホッツ床 (哺乳床) を使う。','口唇形成術は体重10kgのころに行う。','口蓋形成術は3歳ころに行う。','顎裂部骨移植術は上顎犬歯萌出期に行う。','言語治療は2歳ころに開始する。'],
            answerImg: [],
            answer: '生後6か月ころよりホッツ床 (哺乳床) を使う。',
            commentary: '口唇裂口蓋裂の治療について、生後6か月ころよりホッツ床 (哺乳床) を使うことが正しいです。'
        },{
            detailInfo: '7.',
            questionImg: [],
            questionSentence: '骨組織と細胞について間違っているものを選べ。',
            choices:['骨を構成する主要なコラーゲンはI型である。','骨代謝により骨組織の若返りと血中カルシウム濃度の維持がされる。','骨芽細胞は間葉系幹細胞由来である。','破骨細胞の分化は、骨細胞より影響を受ける。','骨髄間葉系細胞とハイドロキシアパタイト複合体をラット皮下に移植しても骨形成は認めない。'],
            answerImg: [],
            answer: '骨髄間葉系細胞とハイドロキシアパタイト複合体をラット皮下に移植しても骨形成は認めない。',
            commentary: '骨組織と細胞について、骨髄間葉系細胞とハイドロキシアパタイト複合体をラット皮下に移植しても骨形成は認めないことが誤りです。'
        },{
            detailInfo: '8.',
            questionImg: [],
            questionSentence: '運動器に関する再生医療について正しいものを選べ。',
            choices:['PRP (Platelet-Rich Plasma) を用いた医療はまだヒトには行われたことがない。','平成6年11月に 「再生医療等の安全性の確保等に関する法律」 が施行された。','脊髄損傷に対する骨髄間葉系細胞移植は行われたことはない。','iPS 細胞による脊髄損傷治療の臨床研究が進行中である。','骨髄間葉系細胞移植は良性骨腫瘍による骨欠損には適用がない。'],
            answerImg: [],
            answer: 'iPS 細胞による脊髄損傷治療の臨床研究が進行中である。',
            commentary: '運動器に関する再生医療について、iPS 細胞による脊髄損傷治療の臨床研究が進行中であることが正しいです。'
        },{
            detailInfo: '9.',
            questionImg: [],
            questionSentence: '急性溶血性輸血副作用の特徴として不適切なものを選べ。',
            choices:['炎症性サイトカインの産生','オプソニン化','補体の活性化','ミオグロビン尿','低血圧'],
            answerImg: [],
            answer: 'ミオグロビン尿',
            commentary: '急性溶血性輸血副作用の特徴として、ミオグロビン尿は不適切です。'
        },{
            detailInfo: '10.',
            questionImg: [],
            questionSentence: '超急性型拒絶反応に関与する因子として不適切なものを選べ。',
            choices:['好中球','補体','血栓','抗体','T細胞'],
            answerImg: [],
            answer: '血栓',
            commentary: '超急性型拒絶反応に関与する因子として、血栓は不適切です。'
        },{
            detailInfo: '11.',
            questionImg: [],
            questionSentence: '細胞傷害性T細胞 (CTL) の説明ついて不適切なものを選べ。',
            choices:['Th1 細胞は CD8 + T細胞の CTLへの分化を促進する','一部のCTLはメモリー細胞として体内に留まることができる','CTL から分泌されるパーフォリンとグランザイムBは細胞死を誘導する','CTL から分泌される IFN-yや TNF-αは細胞死を阻害する','CD8 + T細胞は樹状細胞のMHCクラスⅠ 分子に提示された抗原を認識して活性化する'],
            answerImg: [],
            answer: 'CTL から分泌される IFN-yや TNF-αは細胞死を阻害する',
            commentary: '細胞傷害性T細胞 (CTL) の説明において、CTL から分泌される IFN-yや TNF-αは細胞死を阻害することは不適切です。'
        },{
            detailInfo: '12.',
            questionImg: [],
            questionSentence: '次のうち major histocompatibility complex (MHC) にあてはまらない組織適合抗原を選�',
            choices:['HA','HLA-A','HLA-B','HLA-C','HLA-DR'],
            answerImg: [],
            answer: 'HA',
            commentary: '次のうち major histocompatibility complex (MHC) にあてはまらない組織適合抗原はHAです。'
        },{
            detailInfo: '13.',
            questionImg: [],
            questionSentence: '造血幹細胞のニッチを構成する細胞として最も適さないものを選べ。',
            choices:['細網細胞','骨芽細胞','破骨細胞','間葉系幹細胞','血管内皮細胞'],
            answerImg: [],
            answer: '破骨細胞',
            commentary: '造血幹細胞のニッチを構成する細胞として最も適さないものは破骨細胞です。'
        },{
            detailInfo: '14.',
            questionImg: [],
            questionSentence: '間葉系幹細胞について最も適する 記述を選べ。',
            choices:['骨髄における主な機能は、傷害時に造血幹細胞の機能を代替することである。','体外培養では骨細胞に分化する。','体外培養では事実上回数制限なく細胞分裂する。','発生学的には内胚葉に由来する。','生体では骨髄に特有の細胞である。'],
            answerImg: [],
            answer: '発生学的には内胚葉に由来する。',
            commentary: '間葉系幹細胞について、発生学的には内胚葉に由来することが適切です。'
        },{
            detailInfo: '15.',
            questionImg: [],
            questionSentence: '次のうち正しいのはどれか。(複数選択可。)',
            choices:['本邦における心臓移植の適応疾患では、 拘束型心筋症が最も多い。','本邦の左室補助装置 (LVAD) 装着後の心移植までの平均待機期間は、 6ヶ月以内である。','本邦の心臓移植後の累積生存率は、 国際心肺移植学会統計のそれと比較して良好である。','移植された心臓では狭心痛は自覚されにくい。','移植後は免疫抑制療法と関連して、 感染症と悪性腫瘍が予後に大きく影響する。'],
            answerImg: [],
            answer: 'すべて',
            commentary: '次のうち正しいのはすべてです。'
        },{
            detailInfo: '16.',
            questionImg: [],
            questionSentence: '本邦における心臓移植の適応疾患で多いものを3つ選べ。',
            choices:['拘束型心筋症','虚血性心筋症','心筋炎後心筋症','拡張相肥大型心筋症','拡張型心筋症'],
            answerImg: [],
            answer: '1,4,5',
            commentary: '本邦における心臓移植の適応疾患で多いものは拘束型心筋症、拡張相肥大型心筋症、拡張型心筋症です。'
        },{
            detailInfo: '17.',
            questionImg: [],
            questionSentence: '以下のうち、 眼表面において角膜再生に重要となる幹細胞が存在する部位はどれか。',
            choices:['角膜輪部','眼瞼結膜','眼球結膜','マイボーム腺','角膜内皮'],
            answerImg: [],
            answer: '角膜輪部',
            commentary: '眼表面において角膜再生に重要となる幹細胞が存在する部位は角膜輪部です。'
        },{
            detailInfo: '18.',
            questionImg: [],
            questionSentence: '水疱性角膜症に対する治療として適切なものはどれか。',
            choices:['羊膜移植','治療的角膜切除','硝子体手術','角膜クロスリンキング','角膜移植術'],
            answerImg: [],
            answer: '角膜クロスリンキング',
            commentary: '水疱性角膜症に対する治療として、角膜クロスリンキングが適切です。'
        },{
            detailInfo: '19.',
            questionImg: [],
            questionSentence: '膵臓移植について適当な記述はどれか。',
            choices:['膵臓と腎臓の同時移植は、現状では禁忌である。','最近、 血行再建が不要な膵臓移植の方法が開発された。','多くのレシピエントでは、糖尿病性腎症の発症はまれである。','インスリン依存型糖尿病は、 移植適応とはならない。','移植後には免疫抑制剤の投与が必要である。'],
            answerImg: [],
            answer: '膵臓と腎臓の同時移植は、現状では禁忌である。',
            commentary: '膵臓移植について、膵臓と腎臓の同時移植は、現状では禁忌です。'
        },{
            detailInfo: '20.',
            questionImg: [],
            questionSentence: '小腸移植について適当な記述はどれか。',
            choices:['本邦では、年間に100例以上施行されている。','小腸グラフト生着率は、 移植患者の生存率より不良である。','移植後早期では、免疫抑制剤は不要である。','腸管運動障害などによる腸管不全は移植適応とならない。','静脈栄養の中枢ルート消失だけでは、 移植適応とならない。'],
            answerImg: [],
            answer: '静脈栄養の中枢ルート消失だけでは、 移植適応とならない。',
            commentary: '小腸移植について、静脈栄養の中枢ルート消失だけでは、 移植適応とならないです。'
        },{
            detailInfo: '21.',
            questionImg: [],
            questionSentence: '各種造血幹細胞移植の特徴の比較について誤っているのはどれか一つ選べ。',
            choices:['同種臍帯血移植は生着不全のリスクが最も高い。','同種末梢血幹細胞移植は好中球生着が最も早い。','同種骨髄移植は標準的移植法である。','自家末梢血幹細胞移植では GVHD を認めない。','同種臍帯血移植はGVHD の発症リスクが最も高い。'],
            answerImg: [],
            answer: '同種末梢血幹細胞移植は好中球生着が最も早い。',
            commentary: '各種造血幹細胞移植の特徴の比較について、同種末梢血幹細胞移植は好中球生着が最も早いことが誤りです。'
        },{
            detailInfo: '22.',
            questionImg: [],
            questionSentence: '急性GVHDの症状として誤っているのはどれか一つ選べ。',
            choices:['下痢','皮疹','肝機能障害','関節拘縮','黄疸'],
            answerImg: [],
            answer: '関節拘縮',
            commentary: '急性GVHDの症状として、関節拘縮が誤っています。'
        },{
            detailInfo: '23.',
            questionImg: [],
            questionSentence: '小児造血幹細胞移植について正しいのはどれか。 2つ選べ。',
            choices:['造血幹細胞移植はヒト白血球抗原 (HLA) の発見やシクロスポリンなどの免疫抑制剤の開発などによって発展してきた。','血縁関係のあるきょうだい同士では、HLAは理論上1/2の確率で完全に一致する。','一般的に HLA 一致の同種臍帯血移植では HLA 一致の同種血縁者間末梢血幹細胞移植よりも慢性移植片対宿主病 (慢性 GVHD) は軽いとされる。','難治性固形腫瘍では大量化学療法 + 同種造血幹細胞移植が標準的治療法である。','同種造血幹細胞移植でドナー白血球が生着すれば、 ウイルス感染のリスクは低くなる。'],
            answerImg: [],
            answer: '1,4',
            commentary: '小児造血幹細胞移植について、造血幹細胞移植はヒト白血球抗原 (HLA) の発見やシクロスポリンなどの免疫抑制剤の開発などによって発展してきた。難治性固形腫瘍では大量化学療法 + 同種造血幹細胞移植が標準的治療法である。が正しいです。'
        },{
            detailInfo: '24.',
            questionImg: [],
            questionSentence: '小児急性白血病の造血幹細胞移植の適応について正しいのはどれ',
            choices:['第1寛解期のT細胞性急性リンパ性白血病は全例移植の適応である。','化学療法終了後2年経過した時点で再発した急性リンパ性白血病では、 化学療法で再度寛解 (第2寛解期) に持ち込むことができれば、 同種造血幹細胞移植が推奨される。','KMT2A (MLL) 遺伝子再構成ありの乳児急性リンパ性白血病では第1寛解期で移植すると長期生存率70%以上が期待できる。','非寛解の急性リンパ性白血病は同種造血幹細胞移植を行っても5年無病生存率は20%未満である。','微小残存病変 (MRD) 陽性の急性リンパ性白血病は、 第1寛解期での同種造血幹細胞移植が推奨される。'],
            answerImg: [],
            answer: '2,5',
            commentary: '小児急性白血病の造血幹細胞移植の適応について、化学療法終了後2年経過した時点で再発した急性リンパ性白血病では、 化学療法で再度寛解 (第2寛解期) に持ち込むことができれば、 同種造血幹細胞移植が推奨される。微小残存病変 (MRD) 陽性の急性リンパ性白血病は、 第1寛解期での同種造血幹細胞移植が推奨される。が正しいです。'
        },{
            detailInfo: '25.',
            questionImg: [],
            questionSentence: '日本移植学会で倫理的に生体腎移植として認められているものを選べ。',
            choices:['祖母','孫','子供もいる同性パートナー','妻の従妹','夫の甥'],
            answerImg: [],
            answer: '子供もいる同性パートナー',
            commentary: '日本移植学会で倫理的に生体腎移植として認められているのは子供もいる同性パートナーです。'
        },{
            detailInfo: '26.',
            questionImg: [],
            questionSentence: '先行的腎移植のメリットで間違っているものを一つ選べ。',
            choices:['医療経済的に優れる','仕事、 学業などの生活面への影響が少ない','免疫抑制剤に対するアドヒアランスが向上する','美容的に優れる','小児では身長獲得や精神発達面で優れる'],
            answerImg: [],
            answer: '美容的に優れる',
            commentary: '先行的腎移植のメリットで、美容的に優れるが誤りです。'
        },{
            detailInfo: '27.',
            questionImg: [],
            questionSentence: '日本臓器移植ネットワークが行っていることはどれか。',
            choices:['移植医療の普及啓発','生体腎移植希望者への移植施設紹介','熱傷患者に対する皮膚移植のための皮膚のあっせん','臓器提供への感謝状作成','摘出心臓搬送のためのチャーター機の手配'],
            answerImg: [],
            answer: '移植医療の普及啓発',
            commentary: '日本臓器移植ネットワークが行っていることは移植医療の普及啓発です。'
        },{
            detailInfo: '28.',
            questionImg: [],
            questionSentence: '脳死下臓器提供について誤っているものを一つ選べ。',
            choices:['2回目の法的脳死判定の終了時刻が死亡時刻となる','2回の脳死判定の間にメディカルコンサルタントが派遣され、 臓器の医学的適応評価を行う','臓器提供者の家族が希望した場合は、マスコミ等への情報公開は行わない','2020年は COVID-19 の影響で少なくなったが、 18歳未満の提供が2019年に最多となった','臓器摘出の順番は心臓→肺→小腸→肝臓→膵臓→腎臓である'],
            answerImg: [],
            answer: '臓器提供者の家族が希望した場合は、マスコミ等への情報公開は行わない',
            commentary: '脳死下臓器提供について、臓器提供者の家族が希望した場合は、マスコミ等への情報公開は行わないが誤りです。'
        },{
            detailInfo: '29.',
            questionImg: [],
            questionSentence: '遊離植皮術後 24~48時間の間に起こる現象で正しいのはどれか。 一つ選べ。',
            choices:['植皮片と移植床の間に毛細血管の新生が完成する。','植皮片はこの間どこからも全く栄養を受けない。','植皮片の重量は軽くなる。','植皮片は plasma like fluid により栄養を受ける。','細菌の増殖には影響を受けない。'],
            answerImg: [],
            answer: '植皮片は plasma like fluid により栄養を受ける。',
            commentary: '遊離植皮術後 24~48時間の間に起こる現象で、植皮片は plasma like fluid により栄養を受けることが正しいです。'
        },{
            detailInfo: '30.',
            questionImg: [],
            questionSentence: '創傷治癒過程における現象で誤っているのはどれか。 一つ選べ。',
            choices:['多核白血球と単球は貪食作用を有する。','急性創傷部では多核白血球が早期に遊走してくる。','線維芽細胞は炎症の初期に増殖する。','フィブロネクチンが増加する。','炎症細胞の多くはアポトーシスにより消失する。'],
            answerImg: [],
            answer: '炎症細胞の多くはアポトーシスにより消失する。',
            commentary: '創傷治癒過程における現象で、炎症細胞の多くはアポトーシスにより消失することが誤りです。'
        },{
            detailInfo: '31.',
            questionImg: [],
            questionSentence: '遊離植皮術について誤りはどれか。 一つ選べ。',
            choices:['植皮片は薄いほど生着しやすい。','植皮片は薄いほど収縮しやすい。','植皮片は厚いほど色素沈着しやすい。','移植床の血行が良いほど生着しやすい。','移植床と密着しているほど生着しやすい。'],
            answerImg: [],
            answer: '植皮片は厚いほど色素沈着しやすい。',
            commentary: '遊離植皮術について、植皮片は厚いほど色素沈着しやすいが誤りです。'
        },{
            detailInfo: '32.',
            questionImg: [],
            questionSentence: '褥瘡について誤っているのはどれか。 一つ選べ。',
            choices:['発症直後は感染に注意する。','好発部位は仙骨部・腸骨稜・ 大転子部などである。','体液漏出により低タンパク血症となりやすい。','坐骨部の褥瘡は対麻痺より四肢麻痺の患者に発生しやすい。','肉芽組織の中にも褥瘡ができうる'],
            answerImg: [],
            answer: '肉芽組織の中にも褥瘡ができうる',
            commentary: '褥瘡について、肉芽組織の中にも褥瘡ができうるが誤りです。'
        },{
            detailInfo: '33.',
            questionImg: [],
            questionSentence: '以下の自家移植のうち、 単独で行われない組織移植はどれか。',
            choices:['骨移植','軟骨移植','静脈移植','神経移植','腱移植'],
            answerImg: [],
            answer: '静脈移植',
            commentary: '以下の自家移植のうち、 単独で行われない組織移植は静脈移植です。'
        },{
            detailInfo: '34.',
            questionImg: [],
            questionSentence: '神経欠損に用いられる移植組織の組み合わせで、正しいものを3つ選べ。',
            choices:['骨','神経','血管','筋肉','腱'],
            answerImg: [],
            answer: '2,4,5',
            commentary: '神経欠損に用いられる移植組織の組み合わせで、筋肉、腱が正しいです。'
        }
    ]
    }
,{
        groupTag: '移植再生医療 2021本試験',
        groupContents: [{
            detailInfo: '1.',
            questionImg: [],
            questionSentence: '同種造血幹細胞移植に関して正しいのはどれか。1つ選べ。',
            choices:['臍帯血移植は成人での施行件数が小児より多い。','免疫抑制剤としてシクロスポリンとタクロリムスを併用する。','GVHD が発症すると再発率が高くなる。','同種造血幹細胞移植可能年齢は55歳までである。','サイトメガロウイルス感染発症リスクは移植直後が最も高い。'],
            answerImg: [],
            answer: 'サイトメガロウイルス感染発症リスクは移植直後が最も高い。',
            commentary: '同種造血幹細胞移植に関して、サイトメガロウイルス感染発症リスクは移植直後が最も高いです。'
        },{
            detailInfo: '2.',
            questionImg: [],
            questionSentence: '同種造血幹細胞移植のドナーソースには骨髄血、末梢血幹細胞、 臍帯血があるが、それぞれを比較した特徴につき正しいのはどれか。1つ選べ。',
            choices:['末梢血幹細胞移植では好中球生着が最も遅い。','骨髄移植では慢性 GVHD の発症率が最も高い。','臍帯血移植では急性GVHD の発症率が最も低い。','骨髄移植では造血幹細胞の輸注細胞数が最も多い。','臍帯血移植では血小板生着が最も早い。'],
            answerImg: [],
            answer: '臍帯血移植では血小板生着が最も早い。',
            commentary: '同種造血幹細胞移植のドナーソースには骨髄血、末梢血幹細胞、 臍帯血があり、臍帯血移植では血小板生着が最も早いです。'
        },{
            detailInfo: '3.',
            questionImg: [],
            questionSentence: '肝臓移植について正しい記述はどれか。',
            choices:['本邦では、年間に約500例の脳死肝移植が行われている。','原発性胆汁性肝硬変は、適応疾患ではない。','近年の移植の方法として、部分肝移植は施行されなくなった。','進行性非代償性肝疾患で、余命1年以内が良い適応となる。','胆道再建が不要な術式も開発されている。'],
            answerImg: [],
            answer: '進行性非代償性肝疾患で、余命1年以内が良い適応となる。',
            commentary: '肝臓移植に関して、進行性非代償性肝疾患で、余命1年以内が良い適応となる。'
        },{
            detailInfo: '4.',
            questionImg: [],
            questionSentence: '小腸移植について正しい記述はどれか。',
            choices:['通常、免疫抑制剤の投与は不要である。','小腸移植は、健康保険適応外治療である。','腸管運動障害などの腸管不全は適応とはならない。','脳死ドナーは不適当である。','広範囲なヒルシュスプルング病は適応となりえる。'],
            answerImg: [],
            answer: '広範囲なヒルシュスプルング病は適応となりえる。',
            commentary: '小腸移植に関して、広範囲なヒルシュスプルング病は適応となりえる。'
        },{
            detailInfo: '5.',
            questionImg: [],
            questionSentence: '以下の自家移植のうち、単独で行われない組織移植はどれか。',
            choices:['骨移植','軟骨移植','静脈移植','神経移植','腱移植'],
            answerImg: [],
            answer: '静脈移植',
            commentary: '以下の自家移植のうち、単独で行われない組織移植は静脈移植です。'
        },{
            detailInfo: '6.',
            questionImg: [],
            questionSentence: '血管柄付複合組織移植術の適応に関する記述として、適切なものはどれか。複数選べ。',
            choices:['血流の豊富な組織を移植することにより、難治性感染を治療する。','皮下組織や筋肉を移植することにより、広範囲の組織欠損部を補填する。','血行を有する骨組織を移植することにより、難治性偽関節や骨壊死疾患を治療する。','神経付の筋肉組織を移植することにより、運動機能を再建する。','神経付の皮弁を移植することにより、神経損傷後の知覚機能を再建する。'],
            answerImg: [],
            answer: '皮下組織や筋肉を移植することにより、広範囲の組織欠損部を補填する。',
            commentary: '血管柄付複合組織移植術の適応に関して、皮下組織や筋肉を移植することにより、広範囲の組織欠損部を補填する。'
        },{
            detailInfo: '7.',
            questionImg: [],
            questionSentence: '小児急性白血病の造血幹細胞移植の適応について正しいのはどれか。2つ選べ。',
            choices:['化学療法終了後3年経過した時点で再発した急性リンパ性白血病では、化学療法で再度寛解(第29寛解期) に持ち込むことができれば、同種造血幹細胞移植が推奨される。','KMT2A (MLL) 遺伝子再構成ありの乳児急性リンパ性白血病では第1寛解期で移植すると長期生存率80%以上が期待できる。','非寛解の急性リンパ性白血病は同種造血幹細胞移植を行っても5年無病生存率は20%未満である。','治療終了後に再発した急性骨髄性白血病は、第2寛解期での同種造血幹細胞移植が推奨される。'],
            answerImg: [],
            answer: 'KMT2A (MLL) 遺伝子再構成ありの乳児急性リンパ性白血病では第1寛解期で移植すると長期生存率80%以上が期待できる。,治療終了後に再発した急性骨髄性白血病は、第2寛解期での同種造血幹細胞移植が推奨される。',
            commentary: '小児急性白血病の造血幹細胞移植の適応について、KMT2A (MLL) 遺伝子再構成ありの乳児急性リンパ性白血病では第1寛解期で移植すると長期生存率80%以上が期待できる。治療終了後に再発した急性骨髄性白血病は、第2寛解期での同種造血幹細胞移植が推奨される。'
        },{
            detailInfo: '8.',
            questionImg: [],
            questionSentence: '小児急性白血病の造血幹細胞移植の概要について正しいのはどれか。2つ選べ。',
            choices:['移植する造血幹細胞は骨髄穿刺 (マルク) の要領で骨盤へ直接針を刺して注入する。','造血幹細胞移植の生着後は、ウイルス感染の心配はない。','移植片対宿主病 (GVHD) は移植後100日前後で急性型と慢性型に便宜上分ける。','急性 GVHD のターゲットとなる臓器は皮膚・肝臓・腸管である。','造血幹細胞移植後は原病が完治したら、5年間問題なければ外来フォローアップを終了して良い。'],
            answerImg: [],
            answer: '急性 GVHD のターゲットとなる臓器は皮膚・肝臓・腸管である。,移植片対宿主病 (GVHD) は移植後100日前後で急性型と慢性型に便宜上分ける。',
            commentary: '小児急性白血病の造血幹細胞移植の概要について、急性 GVHD のターゲットとなる臓器は皮膚・肝臓・腸管である。移植片対宿主病 (GVHD) は移植後100日前後で急性型と慢性型に便宜上分ける。'
        },{
            detailInfo: '9.',
            questionImg: [],
            questionSentence: '超急性型拒絶反応に関与する因子として不適切なものを選べ。',
            choices:['好中球','血栓','抗体','補体','T細胞'],
            answerImg: [],
            answer: 'T細胞',
            commentary: '超急性型拒絶反応に関与する因子として、T細胞は不適切です。'
        },{
            detailInfo: '10.',
            questionImg: [],
            questionSentence: '次のHLA と相関のある疾患のうち、HLA-B51が関与する疾患を選べ。',
            choices:['強直性脊椎炎','ナルコレプシー','クローン病','ベーチェット病','インスリン自己免疫症候群'],
            answerImg: [],
            answer: 'ベーチェット病',
            commentary: '次のHLA と相関のある疾患のうち、HLA-B51が関与する疾患はベーチェット病です。'
        },{
            detailInfo: '11.',
            questionImg: [],
            questionSentence: '以下のうち major histocompatibility complex (MHC) にあてはまらない組織適合抗原を選べ。',
            choices:['HA','HLA-A','HLA-DP','HLA-DQ','HLA-DR'],
            answerImg: [],
            answer: 'HA',
            commentary: 'major histocompatibility complex (MHC) にあてはまらない組織適合抗原はHAです。'
        },{
            detailInfo: '12.',
            questionImg: [],
            questionSentence: 'カルシニューリンが関与する転写因子として適切なものを選べ。',
            choices:['NFAT','NF-kB','c-Fos','c-Jun','IRF3'],
            answerImg: [],
            answer: 'NFAT',
            commentary: 'カルシニューリンが関与する転写因子として適切なものはNFATです。'
        },{
            detailInfo: '13.',
            questionImg: [],
            questionSentence: '骨組織と細胞について間違っているのはどれか。',
            choices:['骨を構成する主要なコラーゲンは2型である。','骨代謝により骨組織の若返りと血中カルシウム濃度の維持がされる。','骨芽細胞は間葉系幹細胞由来である。','破骨細胞の分化には、骨細胞が影響する。','骨髄間葉系細胞とハイドロキシアパタイト複合体をラット皮下に移植すると骨ができる。'],
            answerImg: [],
            answer: '骨を構成する主要なコラーゲンは2型である。',
            commentary: '骨組織と細胞に関して、骨を構成する主要なコラーゲンは2型である。'
        },{
            detailInfo: '14.',
            questionImg: [],
            questionSentence: '骨髄間葉系細胞の培養について正しいのはどれか。',
            choices:['約1週間の培養期間で体内へ移植すると最も効率がよい。','無菌操作は不要である。','デキサメサゾンは骨芽細胞への分化を抑制する働きがある。','骨髄の採取は四肢末梢が最も適している。','牛胎児由来の血清でも使用できる。'],
            answerImg: [],
            answer: 'デキサメサゾンは骨芽細胞への分化を抑制する働きがある。',
            commentary: '骨髄間葉系細胞の培養に関して、デキサメサゾンは骨芽細胞への分化を抑制する働きがある。'
        },{
            detailInfo: '15.',
            questionImg: [],
            questionSentence: '創傷治癒過程の炎症期について誤っているのはどれか。',
            choices:['毛細血管壁に停滞している多形核白血球が血管外へ出る。','リンパ球は早期に遊走してくる。','創内へ侵入すると単球の多くはマクロファージとなる。','リンパ球はサイトカインを遊離する。','創内にフィブロネクチンが集積する。'],
            answerImg: [],
            answer: 'リンパ球は早期に遊走してくる。',
            commentary: '創傷治癒過程の炎症期に関して、リンパ球は早期に遊走してくる。'
        },{
            detailInfo: '16.',
            questionImg: [],
            questionSentence: '以下の手技から、一般的に皮膚の欠損を修復する手技として考慮してゆく順番に並べよ。',
            choices:['遊離皮弁','縫縮','有茎皮弁','植皮','局所皮弁'],
            answerImg: [],
            answer: '2-4-5-3-1',
            commentary: '一般的に皮膚の欠損を修復する手技として考慮してゆく順番は、縫縮、植皮、局所皮弁、有茎皮弁、遊離皮弁です。'
        },{
            detailInfo: '17.',
            questionImg: [],
            questionSentence: '局所皮弁が遊離植皮術より劣っている点はどれか。',
            choices:['加重部の再建','肌の色、質感','Volumeの再建','骨、腱上の再建','広範囲の皮膚欠損の再建'],
            answerImg: [],
            answer: 'Volumeの再建',
            commentary: '局所皮弁が遊離植皮術より劣っている点はVolumeの再建です。'
        },{
            detailInfo: '18.',
            questionImg: [],
            questionSentence: '次のうち正しいのはどれか。',
            choices:['頚部では創の方向は縦にすべきである。','顔面では瘢痕はきれいになるので、創の方向は気にしなくてよい。','子供の顔はしわがないのでどの方向に瘢痕を残しても問題にならない。','胸骨部の創はケロイドになりやすい。','関節部は瘢痕を残しにくい。'],
            answerImg: [],
            answer: '胸骨部の創はケロイドになりやすい。',
            commentary: '胸骨部の創はケロイドになりやすいです。'
        },{
            detailInfo: '19.',
            questionImg: [],
            questionSentence: '肺移植のうち本邦 (日本) で行われたことがないものはどれか。一つ選べ。',
            choices:['脳死両肺移植','脳死両側片肺移植','脳死片肺移植','生体肺移植','心肺移植'],
            answerImg: [],
            answer: '脳死片肺移植',
            commentary: '本邦 (日本) で行われたことがない肺移植は脳死片肺移植です。'
        },{
            detailInfo: '20.',
            questionImg: [],
            questionSentence: '人工心肺が必ず必要な肺移植を2つ選べ。',
            choices:['脳死両肺移植','脳死両側片肺移植','脳死片肺移植','生体肺移植','心肺移植'],
            answerImg: [],
            answer: '脳死両肺移植,心肺移植',
            commentary: '人工心肺が必ず必要な肺移植は脳死両肺移植と心肺移植です。'
        },{
            detailInfo: '21.',
            questionImg: [],
            questionSentence: '次のうち本邦の心臓移植後の免疫抑制療法で、現在最も多く用いられている組み合わせはどれか。',
            choices:['タクロリムス+ミコフェノールモフェチル+プレドニゾン','シクロスポリン+アザチオプリン+プレドニゾン','タクロリムス+ラパマイシン+プレドニゾン','シクロスポリン+サイクロフォスファマイド+プレドニゾン','タクロリムス+アザチオプリン+プレドニゾン'],
            answerImg: [],
            answer: 'タクロリムス+ミコフェノールモフェチル+プレドニゾン',
            commentary: '本邦の心臓移植後の免疫抑制療法で、現在最も多く用いられている組み合わせはタクロリムス+ミコフェノールモフェチル+プレドニゾンです。'
        },{
            detailInfo: '22.',
            questionImg: [],
            questionSentence: '本邦における心臓移植の適応疾患で多いものを3つ選べ。',
            choices:['虚血性心筋症','拘束型心筋症','心筋炎後心筋症','拡張相肥大型心筋症','拡張型心筋症'],
            answerImg: [],
            answer: '虚血性心筋症,心筋炎後心筋症,拡張型心筋症',
            commentary: '本邦における心臓移植の適応疾患で多いものは虚血性心筋症、心筋炎後心筋症、拡張型心筋症です。'
        },{
            detailInfo: '23.',
            questionImg: [],
            questionSentence: '間葉系幹細胞について、最も適切な記述を一つ選べ。',
            choices:['体外培養すると、事実上回数制限なく増殖する。','骨髄において造血幹細胞が損傷を受けると、間葉系幹細胞が機能を代替する。','発生学的には主に咽頭嚢に由来する。','現在までに知られているニッチは、骨髄と歯髄の「二つの髄」である。','上記に適切な記述はない。'],
            answerImg: [],
            answer: '上記に適切な記述はない。',
            commentary: '間葉系幹細胞に関して、上記に適切な記述はないです。'
        },{
            detailInfo: '24.',
            questionImg: [],
            questionSentence: '造血幹細胞が肝臓を主要な造血の場とする時期について、最も適切な記述を一つ選べ。',
            choices:['発生第2週','発生第4週','発生第16週','発生第32週','上記に適切な記述はない。'],
            answerImg: [],
            answer: '発生第16週',
            commentary: '造血幹細胞が肝臓を主要な造血の場とする時期は発生第16週です。'
        },{
            detailInfo: '25.',
            questionImg: [],
            questionSentence: '腎代替療法の腎移植の長所として誤っているものを2つ選べ。',
            choices:['生命予後改善','QOL改善','COVID-19 の重症化が少ない','医療費軽減'],
            answerImg: [],
            answer: 'COVID-19 の重症化が少ない,医療費軽減',
            commentary: '腎代替療法の腎移植の長所として誤っているものはCOVID-19 の重症化が少ないと医療費軽減です。'
        },{
            detailInfo: '26.',
            questionImg: [],
            questionSentence: '腎移植術について正しいものを3つ選べ。',
            choices:['生体腎移植ドナーの腎採取術では通常、静脈が長い左腎を採取する。','生体腎移植ドナーの腎採取術では低侵襲の内視鏡下手術が多く施行されている。','腎移植術では通常左腎を摘出してドナーの左腎を移植するが尿管が短い場合、尿管-尿管吻合を行う。','献腎移植では腎機能を温存するため、予め大動脈にカテーテルを挿入し、心停止後体内で腎臓を灌流する。','脳死下の多臓器摘出では、許容阻血時間が短い心臓、肺摘出の次に腎臓を摘出する。'],
            answerImg: [],
            answer: '生体腎移植ドナーの腎採取術では低侵襲の内視鏡下手術が多く施行されている。,献腎移植では腎機能を温存するため、予め大動脈にカテーテルを挿入し、心停止後体内で腎臓を灌流する。,脳死下の多臓器摘出では、許容阻血時間が短い心臓、肺摘出の次に腎臓を摘出する。',
            commentary: '腎移植術に関して、生体腎移植ドナーの腎採取術では低侵襲の内視鏡下手術が多く施行されている。献腎移植では腎機能を温存するため、予め大動脈にカテーテルを挿入し、心停止後体内で腎臓を灌流する。脳死下の多臓器摘出では、許容阻血時間が短い心臓、肺摘出の次に腎臓を摘出する。'
        },{
            detailInfo: '27.',
            questionImg: [],
            questionSentence: '日本臓器移植ネットワークの事業を3つ選べ。',
            choices:['生体腎移植のドナー候補への説明','移植医療の普及啓発','死後の提供による臓器のあっせん','臓器移植に関する登録、整備','ドナー候補者の医学的適応の診断'],
            answerImg: [],
            answer: '移植医療の普及啓発,死後の提供による臓器のあっせん,臓器移植に関する登録、整備',
            commentary: '日本臓器移植ネットワークの事業は移植医療の普及啓発、死後の提供による臓器のあっせん、臓器移植に関する登録、整備です。'
        },{
            detailInfo: '28.',
            questionImg: [],
            questionSentence: '臓器移植の歴史と現況について誤ったものを一つ選べ。',
            choices:['世界初の心臓移植の翌年に施行された和田心臓移植では脳死判定やレシピエント選定など社会的不信感を生んだ。','1997年施行の臓器移植法は本人の書類による意思表示と家族の承諾の両方が必要となり、遺言可能年齢の15歳に満たない症例からの臓器提供は出来ない非常に厳しいルールとなった。','2008年臓器売買や渡航移植を禁止するイスタンブール宣言が採択された。','2009年書面による意思表示がなくても家族の承諾での提供が可能となり 15歳未満の臓器提供が可能となり、本邦でも国内での小児の心臓移植が可能となった。','献腎移植では無償の善意の提供臓器を公平に分配するため、親族への優先提供は認められていない。'],
            answerImg:[],
            answer: '1997年施行の臓器移植法は本人の書類による意思表示と家族の承諾の両方が必要となり、遺言可能年齢の15歳に満たない症例からの臓器提供は出来ない非常に厳しいルールとなった。',
            commentary: '臓器移植の歴史と現況に関して、1997年施行の臓器移植法は本人の書類による意思表示と家族の承諾の両方が必要となり、遺言可能年齢の15歳に満たない症例からの臓器提供は出来ない非常に厳しいルールとなった。'
        },{
            detailInfo: '29.',
            questionImg: [],
            questionSentence: '角膜上皮幹細胞が存在する部位はどこか。',
            choices:['角膜上皮中心部','角膜上皮輪部','結膜上皮','角膜内皮','角膜上皮傍中心部'],
            answerImg: [],
            answer: '角膜上皮傍中心部',
            commentary: '角膜上皮幹細胞が存在する部位は角膜上皮傍中心部です。'
        },{
            detailInfo: '30.',
            questionImg: [],
            questionSentence: '培養口腔粘膜上皮移植の適応疾患はどれか。',
            choices:['瘢痕性角結膜症','水疱性角膜症','角膜ジストロフィ','加齢黄斑変性','網膜色素変性'],
            answerImg: [],
            answer: '水疱性角膜症',
            commentary: '培養口腔粘膜上皮移植の適応疾患は水疱性角膜症です。'
        },{
            detailInfo: '31.',
            questionImg: [],
            questionSentence: '幹細胞の臨床研究について誤っているのはどれか。',
            choices:['「再生医療等の安全性の確保等に関する法律」に基づく手続きが必要である。','日本では歯髄幹細胞のヒトへの移植がすでに行われている。','日本では誘導多能性幹細胞(iPS細胞)のヒトへの移植は未だ行われていない。','理論的には、誘導多能性幹細胞(iPS細胞)から歯を作ることは可能である。','理論的には、胚性幹細胞 (ES細胞) から歯を作ることは可能である。'],
            answerImg: [],
            answer: '日本では歯髄幹細胞のヒトへの移植がすでに行われている。',
            commentary: '幹細胞の臨床研究に関して、日本では歯髄幹細胞のヒトへの移植がすでに行われているのは誤りです。'
        },{
            detailInfo: '32.',
            questionImg: [],
            questionSentence: '歯の解剖と発生について正しいのはどれか。',
            choices:['歯冠とよばれる組織が原基としての役割を果たす。','歯根とよばれる組織が原基としての役割を果たす。','歯胚は内胚葉由来の上皮成分と外胚葉性間葉組織由来の間葉成分から構成される。','歯胚の内胚葉性成分は心臓や肝臓の形成にも関与している。','「歯の再生治療研究」 として、 人工的に歯胚を作ろうとする試みが行われている。'],
            answerImg: [],
            answer: '歯冠とよばれる組織が原基としての役割を果たす。',
            commentary: '歯の解剖と発生に関して、歯冠とよばれる組織が原基としての役割を果たすのは誤りです。'
        },{
            detailInfo: '33.',
            questionImg: [],
            questionSentence: '顎骨再建について誤っているのはどれか。',
            choices:['一般的に下顎区域切除では、下顎再建が必要である。','顎骨再建には腓骨、肩甲骨、骨などが用いられる。','下顎の即時再建では、血管柄付き骨移植が行われることはない。','腫瘍切除と同時に行われる再建を即時再建 (一次再建)という。','下顎歯肉癌の術式には、下顎区域切除、下顎半側切除などがある。'], 
            answerImg: [],
            answer: '下顎の即時再建では、血管柄付き骨移植が行われることはない。',
            commentary: '顎骨再建に関して、下顎の即時再建では、血管柄付き骨移植が行われることはないです。'
        },{
            detailInfo: '34.',
            questionImg: [],
            questionSentence: '口唇裂口蓋裂の治療について誤っているのはどれか。',
            choices:['口唇形成術は通常、生後3-6か月に行う。','口蓋形成術は通常、18歳頃に行う。','顎裂部骨移植には、腸骨からの自家海綿骨が用いられることが多い。','顎裂を伴う場合は、歯科矯正治療による咬合回復が必須である。','デンタルインプラントの埋入は、成長が終わってから行う。'],
            answerImg: [],
            answer: 'デンタルインプラントの埋入は、成長が終わってから行う。',
            commentary: '口唇裂口蓋裂の治療に関して、デンタルインプラントの埋入は、成長が終わってから行うのは誤りです。'
        }]
    },    ])
    const showQuestionList = () => {
        return questionList
    }
    return {
        showQuestionList,
        appName,
        jpName,
    }
}  
