var monjiImages = [
    {en:"monji-of-changhua-county", md:"彰化縣章", level:1, parent:null, title_en:"Changhua County", title_md:"彰化縣", desc:"", desc_inherit:false},
    {en:"monji-of-ershui-changhua-county", md:"二水鄉章", level:2, parent:"monji-of-changhua-county", title_en:"Ershui Dictrict", title_md:"二水鄉", desc:"", desc_inherit:false},
    {en:"monji-of-changhua-city", md:"彰化市章", level:1, parent:"monji-of-changhua-county", title_en:"Changhua City", title_md:"彰化市", desc:"", desc_inherit:false},
    {en:"monji-of-chiayi-city", md:"嘉義市章", level:1, parent:null, title_en:"Chiayi City", title_md:"嘉義市", desc:"", desc_inherit:false},
    {en:"monji-of-chiayi-county", md:"嘉義縣章", level:1, parent:null, title_en:"Chiayi County", title_md:"嘉義縣", desc:"台灣第一高峰玉山主峰就位於嘉義縣，三重山岳的形狀象徵高山巍峨壯麗延綿，代表台灣民族的堅毅正直率真豪情。", desc_inherit:false},
    {en:"monji-of-puzi-city", md:"朴子市章", level:1, parent:"monji-of-chiayi-county", title_en:"Puzi City", title_md:"朴子市", desc:"", desc_inherit:false},
    {en:"monji-of-taibou-city", md:"太保市章", level:1, parent:"monji-of-chiayi-county", title_en:"Taibou City", title_md:"太保市", desc:"", desc_inherit:false},
    {en:"monji-of-hsinchu-city", md:"新竹市章", level:1, parent:null, title_en:"Hsintsu City", title_md:"新竹市", desc:"位於台灣北部的新竹市是台灣的科技重鎮，世界第一的半導體製造公司台積電總部就坐落於此。<br><br>紋由「竹」與「市」字所組成，可分為三個區塊，分別象徵科學、創新與永續發展。", desc_inherit:false},
    {en:"monji-of-hsinchu-county", md:"新竹縣章", level:1, parent:null, title_en:"Hsintsu County", title_md:"新竹縣", desc:"", desc_inherit:false},
    {en:"monji-of-zhubei-city", md:"竹北市章", level:1, parent:"monji-of-hsinchu-county", title_en:"Zhubei City", title_md:"竹北市", desc:"", desc_inherit:false},
    {en:"monji-of-hualian-county", md:"花蓮縣章", level:1, parent:null, title_en:"Hualian County", title_md:"花蓮縣", desc:"", desc_inherit:false},
    {en:"monji-of-keelung-city", md:"基隆市章", level:1, parent:null, title_en:"Keelung", title_md:"基隆市", desc:"", desc_inherit:false},
    {en:"monji-of-miaoli-county", md:"苗栗縣章", level:1, parent:null, title_en:"Miaoli County", title_md:"苗栗縣", desc:"", desc_inherit:false},
    {en:"monji-of-nantou-county", md:"南投縣章", level:1, parent:null, title_en:"Nantou County", title_md:"南投縣", desc:"", desc_inherit:false},
    {en:"monji-of-new-taipei-city", md:"新北市章", level:1, parent:null, title_en:"New Taipei City", title_md:"新北市", desc:"", desc_inherit:false},
    {en:"monji-of-penghu-county", md:"澎湖縣章", level:1, parent:null, title_en:"Penghu County", title_md:"澎湖縣", desc:"", desc_inherit:false},
    {en:"monji-of-pingtung-county", md:"屏東縣章", level:1, parent:null, title_en:"Pingtung County", title_md:"屏東縣", desc:"", desc_inherit:false},
    {en:"monji-of-taichung-city", md:"台中市章", level:1, parent:null, title_en:"Taichung City", title_md:"台中市", desc:"", desc_inherit:false},
    {en:"monji-of-taichung-city-10-1", md:"台中市章十式", level:2, parent:"monji-of-taichung-city", title_en:"Taichung City X", title_md:"台中市十式", desc:"", desc_inherit:false},
    {en:"monji-of-taichung-city-11-1", md:"台中市章十一式", level:2, parent:"monji-of-taichung-city", title_en:"Taichung City XI", title_md:"台中市十一式", desc:"", desc_inherit:false},
    {en:"monji-of-tainan-city", md:"台南市章", level:1, parent:null, title_en:"Tainan City", title_md:"台南市", desc:"台南市是台灣島上最早有人類活動的地區之一，其保存了上百年的歷史古蹟與飲食文化，是台灣重要的文明寶地。<br><br>紋由外側二重環與內側繩結組合成「南」字。<br><br>二重環象徵永保與安康；繩結連結上下的意象，象徵天地人美滿和諧。", desc_inherit:false},
    {en:"monji-of-annan-tainan-city", md:"安南區章", level:2, parent:"monji-of-tainan-city", title_en:"Annan Dictrict", title_md:"安南區", desc:"", desc_inherit:false},
    {en:"monji-of-west-central-tainan-city", md:"中西區章", level:2, parent:"monji-of-tainan-city", title_en:"West Central Dictrict", title_md:"中西區", desc:"", desc_inherit:false},
    {en:"monji-of-gueiren-tainan-city", md:"歸仁區章", level:2, parent:"monji-of-tainan-city", title_en:"Gueiren Dictrict", title_md:"歸仁區", desc:"", desc_inherit:false},
    {en:"monji-of-baihe-tainan-city", md:"白河區章", level:2, parent:"monji-of-tainan-city", title_en:"Baihe Dictrict", title_md:"白河區", desc:"", desc_inherit:false},
    {en:"monji-of-taipei-city", md:"章", level:1, parent:null, title_en:"Taipei City", title_md:"台北市", desc:"", desc_inherit:false},
    {en:"monji-of-taitung-county", md:"台東縣章", level:1, parent:null, title_en:"Taitung County", title_md:"台東縣", desc:"", desc_inherit:false},
    {en:"monji-of-kaohsiung-city", md:"高雄市章", level:1, parent:null, title_en:"Kaohsiung City", title_en:"Kaohsiung City", title_md:"高雄市", desc:"擁有全台第一大港的高雄市位於台灣南部，是台灣人口規模第三大的城市。<br><br>紋結合了「高」字與日本時代的高雄市章，象徵這座城市繼承的歷史與人文。<br><br>紋自上而下可分為三個菱形區塊，分別象徵和平、民主與自由。", desc_inherit:false},
    {en:"monji-of-qieding-kaohsiung-city", md:"茄萣區章", level:2, parent:"monji-of-kaohsiung-city", title_en:"Qieding Dictrict", title_md:"茄萣區", desc:"", desc_inherit:false},
    {en:"monji-of-neimen-kaohsiung-city", md:"內門區章", level:2, parent:"monji-of-kaohsiung-city", title_en:"Neimen Dictrict", title_md:"內門區", desc:"", desc_inherit:false},
    {en:"monji-of-sanmin-kaohsiung-city", md:"三民區章", level:2, parent:"monji-of-kaohsiung-city", title_en:"Sanmin Dictrict", title_md:"三民區", desc:"紋由三個「民」字組成，代表民主民享民心。", desc_inherit:false},
    {en:"monji-of-sinsing-kaohsiung-city", md:"新興區章", level:2, parent:"monji-of-kaohsiung-city", title_en:"Sinsing Dictrict", title_md:"新興區", desc:"", desc_inherit:false},
    {en:"monji-of-taoyuan-city", md:"桃園市章", level:1, parent:null, title_en:"Taoyuan City", title_md:"桃園市", desc:"", desc_inherit:false},
    {en:"monji-of-yilan-county", md:"宜蘭縣章", level:1, parent:null, title_en:"Yilan County", title_md:"宜蘭縣", desc:"", desc_inherit:false},
    {en:"monji-of-yunlin-county", md:"雲林縣章", level:1, parent:null, title_en:"Yunlin County", title_md:"雲林縣", desc:"", desc_inherit:false},
    {en:"monji-of-taixi-yunlin-county", md:"台西鄉章", level:2, parent:"monji-of-yunlin-county", title_en:"Taixi Dictrict", title_md:"台西鄉", desc:"", desc_inherit:false}
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
    for (var monji of monjiImages) {
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
function getNeighborMonjis(en) {
    var result = {
        prev: null,
        next: null
    };
    var thisIndex = monjiImages.findIndex(monji => monji.en === en);
    if (thisIndex -1 >= 0) {
        result.prev = monjiImages[thisIndex -1];
    }
    if (thisIndex +1 < monjiImages.length) {
        result.next = monjiImages[thisIndex +1];
    }
    return result;
}
function getMonjiChildrenCount(parentName) {
	var count = 0;
	for (var monji of monjiImages) {
		if (monji.parent === parentName) {
			count++;
		}
	}
	return count;
}
function getMonjiDesc(en) {
    var monji = getMonjiByEn(en);
    if (!monji) {
        return "";
    }
    if (monji.desc_inherit && monji.parent != null) {
        return getMonjiDesc(monji.parent);
    }
    if (monji.desc && monji.desc.length) {
        return monji.desc;
    }
    return "";
}