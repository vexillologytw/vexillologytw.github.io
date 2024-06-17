var monjiImages = [
    {en:"monji-of-changhua-county", md:"彰化縣", level:1, detail:true, parent:null, title_en:"Changhua County", title_md:"彰化縣", desc:""},
    {en:"monji-of-changhua-city", md:"彰化市", level:1, detail:true, parent:"monji-of-changhua-county", title_en:"Changhua City", title_md:"彰化市", desc:""},
    {en:"monji-of-chiayi-city", md:"嘉義市", level:1, detail:true, parent:null, title_en:"Chiayi City", title_md:"嘉義市", desc:""},
    {en:"monji-of-chiayi-county", md:"嘉義縣", level:1, detail:true, parent:null, title_en:"Chiayi County", title_md:"嘉義縣", desc:""},
    {en:"monji-of-puzi-city", md:"朴子市", level:1, detail:true, parent:"monji-of-chiayi-county", title_en:"Puzi City", title_md:"朴子市", desc:""},
    {en:"monji-of-taibou-city", md:"太保市", level:1, detail:true, parent:"monji-of-chiayi-county", title_en:"Taibou City", title_md:"太保市", desc:""},
    {en:"monji-of-hsinchu-city", md:"新竹市", level:1, detail:true, parent:null, title_en:"Hsintsu City", title_md:"新竹市", desc:"磚紅色的紋由「竹」與「市」字所組成，象徵新竹的悠久歷史與濃厚人文。紋可分為三個區塊，分別象徵科學、創新與永續發展。"},
    {en:"monji-of-hsinchu-county", md:"新竹縣", level:1, detail:true, parent:null, title_en:"Hsintsu County", title_md:"新竹縣", desc:""},
    {en:"monji-of-zhubei-city", md:"竹北市", level:1, detail:true, parent:"monji-of-hsinchu-county", title_en:"Zhubei City", title_md:"竹北市", desc:""},
    {en:"monji-of-hualian-county", md:"花蓮縣", level:1, detail:true, parent:null, title_en:"Hualian County", title_md:"花蓮縣", desc:""},
    {en:"monji-of-keelung-city", md:"基隆市", level:1, detail:true, parent:null, title_en:"Keelung", title_md:"基隆市", desc:""},
    {en:"monji-of-miaoli-county", md:"苗栗縣", level:1, detail:true, parent:null, title_en:"Miaoli County", title_md:"苗栗縣", desc:""},
    {en:"monji-of-nantou-county", md:"南投縣", level:1, detail:true, parent:null, title_en:"Nantou County", title_md:"南投縣", desc:""},
    {en:"monji-of-new-taipei-city", md:"新北市", level:1, detail:true, parent:null, title_en:"New Taipei City", title_md:"新北市", desc:""},
    {en:"monji-of-penghu-county", md:"澎湖縣", level:1, detail:true, parent:null, title_en:"Penghu County", title_md:"澎湖縣", desc:""},
    {en:"monji-of-pingtung-county", md:"屏東縣", level:1, detail:true, parent:null, title_en:"Pingtung County", title_md:"屏東縣", desc:""},
    {en:"monji-of-taichung-city", md:"台中市", level:1, detail:true, parent:null, title_en:"Taichung City", title_md:"台中市", desc:""},
    {en:"monji-of-tainan-city", md:"台南市", level:1, detail:true, parent:null, title_en:"Tainan City", title_md:"台南市", desc:"台南市是台灣島上最早有人類活動的地區之一，其保存了上百年的歷史古蹟與飲食文化，是台灣重要的文明寶地。<br><br>台南市章由外側二重環與內側繩結組合成「南」字。二重環象徵永保與安康；繩結自上而下，象徵天地人美滿和諧。"},
    {en:"monji-of-taipei-city", md:"台北市", level:1, detail:true, parent:null, title_en:"Taipei City", title_md:"台北市", desc:""},
    {en:"monji-of-taitung-county", md:"台東縣", level:1, detail:true, parent:null, title_en:"Taitung County", title_md:"台東縣", desc:""},
    {en:"monji-of-takaohsiung-city", md:"大高雄紋", level:1, detail:true, parent:null, title_en:"Kaohsiung City", title_md:"高雄市", title_en:"Takaohsiung", desc:"擁有全台第一大港的高雄市位於台灣南部，是台灣人口規模第三大的城市。<br><br>大高雄紋結合了「高」字與日本時代的高雄市章，象徵這座城市所繼承的歷史與人文。<br><br>紋自上而下可分為三個菱形區塊，分別象徵和平、民主與自由"},
    {en:"monji-of-taoyuan-city", md:"桃園市", level:1, detail:true, parent:null, title_en:"Taoyuan City", title_md:"桃園市", desc:""},
    {en:"monji-of-yilan-county", md:"宜蘭縣", level:1, detail:true, parent:null, title_en:"Yilan County", title_md:"宜蘭縣", desc:""},
    {en:"monji-of-yunlin-county", md:"雲林縣", level:1, detail:true, parent:null, title_en:"Yunlin County", title_md:"雲林縣", desc:""},
    {en:"monji-of-qieding-kaohsiung-city", md:"高雄市茄萣區", level:2, detail:false, parent:"monji-of-takaohsiung-city", title_en:"Qieding Dictrict", title_md:"高雄市茄萣區", desc:""},
    {en:"monji-of-neimen-kaohsiung-city", md:"高雄市內門區", level:2, detail:false, parent:"monji-of-takaohsiung-city", title_en:"Neimen Dictrict", title_md:"高雄市內門區", desc:""},
    {en:"monji-of-sanmin-kaohsiung-city", md:"高雄市三民區", level:2, detail:false, parent:"monji-of-takaohsiung-city", title_en:"Sanmin Dictrict", title_md:"高雄市三民區", desc:""},
    {en:"monji-of-sinsing-kaohsiung-city", md:"高雄市新興區", level:2, detail:false, parent:"monji-of-takaohsiung-city", title_en:"Sinsing Dictrict", title_md:"高雄市新興區", desc:""},
    {en:"monji-of-annan-tainan-city", md:"台南市安南區", level:2, detail:false, parent:"monji-of-tainan-city", title_en:"Annan Dictrict", title_md:"台南市安南區", desc:""},
    {en:"monji-of-west-central-tainan-city", md:"台南市中西區", level:2, detail:false, parent:"monji-of-tainan-city", title_en:"West Central Dictrict", title_md:"台南市中西區", desc:""},
    {en:"monji-of-gueiren-tainan-city", md:"台南市歸仁區", level:2, detail:false, parent:"monji-of-tainan-city", title_en:"Gueiren Dictrict", title_md:"台南市歸仁區", desc:""},
    {en:"monji-of-baihe-tainan-city", md:"台南市白河區", level:2, detail:false, parent:"monji-of-tainan-city", title_en:"Baihe Dictrict", title_md:"台南市白河區", desc:""},
    {en:"monji-of-ershui-changhua-county", md:"彰化市二水鄉", level:2, detail:false, parent:"monji-of-changhua-county", title_en:"Ershui Dictrict", title_md:"彰化市二水鄉", desc:""},
    {en:"monji-of-taixi-yunlin-county", md:"雲林縣台西鄉", level:2, detail:false, parent:"monji-of-yunlin-county", title_en:"Taixi Dictrict", title_md:"雲林縣台西鄉", desc:""}
];
var monjiConfig = {
    dir: "/images/monjis/",
    container: "#monji-ctn",
    type: "monji",
    width: 150,
    height: 150,
    imageClasses: "modal-trigger-image"
};
function getMonjiByEn(en) {
    for (monji of monjiImages) {
        if (monji.en === en) {
            return monji;
        }
    }
    return null;
}
function getMonjiesByParentName(parentName) {
    var monjies = [];
    for (var monji of monjiImages) {
        if (monji.parent === parentName) {
            monjies.push(monji);
        }
    }
    return monjies;
}