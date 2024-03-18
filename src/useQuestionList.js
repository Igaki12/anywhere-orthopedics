import {
    useState
} from 'react'


// import from './img/answer/.png'

export const useQuestionList = () => {
    const appName = 'anywhere-orthipedics'
    const jpName = '運動器疾患'
    const [questionList, setQuestionList] = useState([
        // ここに問題のリストを記述(選択式の場合は[0]に正解択をいれた配列をつくる)
        {
            groupTag: "2019TBL 選択問題",
            groupContents: [{
                    detailInfo: '',
                    questionImg: [],
                    questionSentence: 'ケモカインの作用について誤っているものを2つ選べ。',
                    choices: ['ケモカインは白血球を遊走させるサイトカインである', 'ケモカイン受容体の多くはリガンドが1つである', '好中球とマクロファージは共にCXCL8を介して炎症部位に遊走する', 'T細胞はCCR7を用いてリンパ節にホーミングする', '抗原を捕捉した樹状細胞はCCR7を用いて輸入リンパ管からリンパ節へ移行する', 'B細胞はCXCL13/CXCR5を用いてリンパ節濾胞領域へ移行する'],
                    answerImg: [],
                    answer: '2と3が誤り',
                    commentary: '例えばCCR7 - CCL19/21など、ケモカイン受容体は様々なリガンドに結合して信号を伝達する。CXCL8(IL-8)は好中球の遊走因子で、マクロファージを遊走させるものではない。その他、CCR7は樹状細胞やT細胞をリンパ節の傍濾胞皮質（T細胞領域）へ誘導し、CXCR5はB細胞をリンパ節の濾胞（B細胞領域）へ誘導するなど、特定の白血球を特定の場所へ移動させるために様々なケモカインが活躍している。',
                },
    ]},
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