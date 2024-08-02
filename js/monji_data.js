var monjiImages = [
    {en:"monji-of-changhua-county", md:"彰化縣", level:1, parent:null, title_en:"Changhua County", title_md:"彰化縣", desc:"", desc_inherit:false},
    {en:"monji-of-changhua-city", md:"彰化市", level:1, parent:"monji-of-changhua-county", title_en:"Changhua City", title_md:"彰化市", desc:"", desc_inherit:false},
    {en:"monji-of-cwh-ershui", md:"二水鄉", level:2, parent:"monji-of-changhua-county", title_en:"Ershui Township", title_md:"二水鄉", desc:"", desc_inherit:false},
    {en:"monji-of-cwh-ershui-1-2", md:"二水鄉一號之二", level:2, parent:"monji-of-cwh-ershui", title_en:"Ershui Township I-II", title_md:"二水鄉一號之二", desc:"", desc_inherit:true},
    {en:"monji-of-cwh-ershui-2-1", md:"二水鄉二號之一", level:2, parent:"monji-of-cwh-ershui", title_en:"Ershui Township II-I", title_md:"二水鄉二號之一", desc:"", desc_inherit:true},
    {en:"monji-of-cwh-erlin", md:"二林鎮", level:2, parent:"monji-of-changhua-county", title_en:"Erlin Township", title_md:"二林鎮", desc:"", desc_inherit:false},
    {en:"monji-of-chiayi-city", md:"嘉義市", level:1, parent:null, title_en:"Chiayi City", title_md:"嘉義市", desc:"", desc_inherit:false},
    {en:"monji-of-chiayi-county", md:"嘉義縣", level:1, parent:null, title_en:"Chiayi County", title_md:"嘉義縣", desc:"台灣第一高峰玉山主峰就位於嘉義縣，三重山岳的形狀象徵高山壯麗延綿，代表台灣民族的正值率真豪情。", desc_inherit:false},
    {en:"monji-of-puzi-city", md:"朴子市", level:1, parent:"monji-of-chiayi-county", title_en:"Puzi City", title_md:"朴子市", desc:"", desc_inherit:false},
    {en:"monji-of-taibou-city", md:"太保市", level:1, parent:"monji-of-chiayi-county", title_en:"Taibou City", title_md:"太保市", desc:"", desc_inherit:false},
    {en:"monji-of-hsinchu-city", md:"新竹市", level:1, parent:null, title_en:"Hsintsu City", title_md:"新竹市", desc:"位於台灣北部的新竹市是台灣的科技重鎮，世界第一的半導體製造公司台積電總部就坐落於此。<br><br>紋由「竹」與「市」字所組成，可分為三個區塊，分別象徵科學、創新與永續發展。", desc_inherit:false},
    {en:"monji-of-hsinchu-county", md:"新竹縣", level:1, parent:null, title_en:"Hsintsu County", title_md:"新竹縣", desc:"", desc_inherit:false},
    {en:"monji-of-zhubei-city", md:"竹北市", level:1, parent:"monji-of-hsinchu-county", title_en:"Zhubei City", title_md:"竹北市", desc:"", desc_inherit:false},
    {en:"monji-of-hualian-county", md:"花蓮縣", level:1, parent:null, title_en:"Hualian County", title_md:"花蓮縣", desc:"", desc_inherit:false},
    {en:"monji-of-keelung-city", md:"基隆市", level:1, parent:null, title_en:"Keelung", title_md:"基隆市", desc:"", desc_inherit:false},
    {en:"monji-of-miaoli-county", md:"苗栗縣", level:1, parent:null, title_en:"Miaoli County", title_md:"苗栗縣", desc:"", desc_inherit:false},
    {en:"monji-of-miaoli-city", md:"苗栗市", level:1, parent:"monji-of-miaoli-county", title_en:"Miaoli City", title_md:"苗栗市", desc:"", desc_inherit:false},
    {en:"monji-of-nantou-county", md:"南投縣", level:1, parent:null, title_en:"Nantou County", title_md:"南投縣", desc:"", desc_inherit:false},
    {en:"monji-of-penghu-county", md:"澎湖縣", level:1, parent:null, title_en:"Penghu County", title_md:"澎湖縣", desc:"", desc_inherit:false},
    {en:"monji-of-magong-city", md:"馬公市", level:1, parent:"monji-of-penghu-county", title_en:"Magong City", title_md:"馬公市", desc:"", desc_inherit:false},
    {en:"monji-of-pingtung-county", md:"屏東縣", level:1, parent:null, title_en:"Pingtung County", title_md:"屏東縣", desc:"", desc_inherit:false},
    {en:"monji-of-pingtung-county-2", md:"屏東縣二號", level:2, parent:"monji-of-pingtung-county", title_en:"Pingtung County II", title_md:"屏東縣二號", desc:"", desc_inherit:false},
    {en:"monji-of-taichung-city", md:"台中市", level:1, parent:null, title_en:"Taichung City", title_md:"台中市", desc:"紋由「中」與「市」字組合而成。<br><br>三個方角代表和平、民主與繁榮，中央的圓代表和樂美滿團圓。<br><br>雖然設計了台中市章，但站主認為自大正 10 年就使用至今的台中市章最為適合台中市。", desc_inherit:false},
    {en:"monji-of-taichung-city-2-1", md:"台中市二號", level:2, parent:"monji-of-taichung-city", title_en:"Taichung City II-1", title_md:"台中市二號", desc:"", desc_inherit:false},
    {en:"monji-of-taichung-city-2-2", md:"台中市二號之二", level:2, parent:"monji-of-taichung-city", title_en:"Taichung City II-II", title_md:"台中市二號之二", desc:"", desc_inherit:false},
    {en:"monji-of-taichung-city-3-1", md:"台中市三號", level:2, parent:"monji-of-taichung-city", title_en:"Taichung City III", title_md:"台中市三號", desc:"", desc_inherit:false},
    {en:"monji-of-taichung-city-triple-exit", md:"台中市？", level:2, parent:"monji-of-taichung-city", title_en:"Taichung City Triple Exits", title_md:"台中市？", desc:"紋由現有台中市章重製而成。<br><br><a src='/images/monjis/monji-of-taichung-city-current.png' class='modal-trigger-image text-dark'>現有的台中市章</a>由「中」字拓譜而成，紋形成兩個出口。站主在某日突然想試試打開第三個出口，於是有了此紋。<br><br>但由於字形被打破，紋就不再是「中」字的拓譜了。", desc_inherit:false},
    {en:"monji-of-tainan-city", md:"台南市", level:1, parent:null, title_en:"Tainan City", title_md:"台南市", desc:"台南市是台灣島上最早有人類活動的地區之一，其保存了上百年的歷史古蹟與飲食文化，是台灣重要的文明寶地。<br><br>紋由外側二重環與內側繩結組合成「南」字。<br><br>二重環象徵永保與安康；繩結連結上下的意象，象徵天地人美滿和諧。", desc_inherit:false},
    {en:"monji-of-tnn-annan", md:"安南區", level:2, parent:"monji-of-tainan-city", title_en:"Annan Dictrict", title_md:"安南區", desc:"", desc_inherit:false},
    {en:"monji-of-tnn-west-central", md:"中西區", level:2, parent:"monji-of-tainan-city", title_en:"West Central Dictrict", title_md:"中西區", desc:"", desc_inherit:false},
    {en:"monji-of-tnn-gueiren", md:"歸仁區", level:2, parent:"monji-of-tainan-city", title_en:"Gueiren Dictrict", title_md:"歸仁區", desc:"", desc_inherit:false},
    {en:"monji-of-tnn-baihe", md:"白河區", level:2, parent:"monji-of-tainan-city", title_en:"Baihe Dictrict", title_md:"白河區", desc:"", desc_inherit:false},
    {en:"monji-of-tnn-qigu", md:"七股區", level:2, parent:"monji-of-tainan-city", title_en:"Qigu Dictrict", title_md:"七股區", desc:"", desc_inherit:false},
    {en:"monji-of-tnn-xiaying", md:"下營區", level:2, parent:"monji-of-tainan-city", title_en:"Xiaying Dictrict", title_md:"下營區", desc:"", desc_inherit:false},
    {en:"monji-of-tnn-xigang", md:"西港區", level:2, parent:"monji-of-tainan-city", title_en:"Xigang Dictrict", title_md:"西港區", desc:"", desc_inherit:false},
    {en:"monji-of-tnn-yongkang", md:"永康區", level:2, parent:"monji-of-tainan-city", title_en:"Yongkang Dictrict", title_md:"永康區", desc:"", desc_inherit:false},
    {en:"monji-of-taipei-city", md:"台北市", level:1, parent:null, title_en:"Taipei City", title_md:"台北市", desc:"紋由三個北字組成，代表台北在金融、社會與文化的蓬勃發展。", desc_inherit:false},
    {en:"monji-of-taipei-city-2-1", md:"台北市二號", level:2, parent:"monji-of-taipei-city", title_en:"Taipei City II", title_md:"台北市二號", desc:"", desc_inherit:false},
    {en:"monji-of-taipei-city-3-1", md:"台北市三號", level:2, parent:"monji-of-taipei-city", title_en:"Taipei City III", title_md:"台北市三號", desc:"", desc_inherit:false},
    {en:"monji-of-new-taipei-city", md:"新北市", level:1, parent:null, title_en:"New Taipei City", title_md:"新北市", desc:"", desc_inherit:false},
    {en:"monji-of-new-taipei-city-1-2", md:"新北市一號之二", level:2, parent:"monji-of-new-taipei-city", title_en:"New Taipei City I-II", title_md:"新北市一號之二", desc:"", desc_inherit:false},
    {en:"monji-of-tpe-beitou", md:"北投區", level:2, parent:"monji-of-taipei-city", title_en:"Beitou District", title_md:"北投區", desc:"", desc_inherit:false},
    {en:"monji-of-taitung-county", md:"台東縣", level:1, parent:null, title_en:"Taitung County", title_md:"台東縣", desc:"", desc_inherit:false},
    {en:"monji-of-taitung-city", md:"台東市", level:1, parent:null, title_en:"Taitung City", title_md:"台東市", desc:"", desc_inherit:false},
    {en:"monji-of-taitung-city-2", md:"台東市二號", level:2, parent:"monji-of-taitung-city", title_en:"Taitung City II", title_md:"台東市二號", desc:"", desc_inherit:false},
    {en:"monji-of-kaohsiung-city", md:"高雄市", level:1, parent:null, title_en:"Kaohsiung City", title_en:"Kaohsiung City", title_md:"高雄市", desc:"擁有全台第一大港的高雄市位於台灣南部，是台灣人口規模第三大的城市。<br><br>紋結合了「高」字與日本時代的高雄市，象徵這座城市繼承的歷史與人文。<br><br>紋自上而下可分為三個菱形區塊，分別象徵和平、民主與自由。", desc_inherit:false},
    {en:"monji-of-khh-qieding", md:"茄萣區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Qieding Dictrict", title_md:"茄萣區", desc:"", desc_inherit:false},
    {en:"monji-of-khh-neimen", md:"內門區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Neimen Dictrict", title_md:"內門區", desc:"", desc_inherit:false},
    {en:"monji-of-khh-sanmin", md:"三民區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Sanmin Dictrict", title_md:"三民區", desc:"紋由三個「民」字組成，代表民主民權民生。", desc_inherit:false},
    {en:"monji-of-khh-sinsing", md:"新興區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Sinsing Dictrict", title_md:"新興區", desc:"", desc_inherit:false},
    {en:"monji-of-khh-alian", md:"阿蓮區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Alian Dictrict", title_md:"阿蓮區", desc:"", desc_inherit:false},
    {en:"monji-of-khh-daliao", md:"大寮區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Daliao Dictrict", title_md:"大寮區", desc:"", desc_inherit:false},
    {en:"monji-of-khh-gangshan", md:"岡山區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Ganshan Dictrict", title_md:"岡山區", desc:"", desc_inherit:false},
    {en:"monji-of-khh-jiasian", md:"甲仙區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Jiasian Dictrict", title_md:"甲仙區", desc:"", desc_inherit:false},
    {en:"monji-of-khh-meinong", md:"美濃區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Meinong Dictrict", title_md:"美濃區", desc:"", desc_inherit:false},
    {en:"monji-of-khh-namasia", md:"那瑪夏區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Namasia Dictrict", title_md:"那瑪夏區", desc:"", desc_inherit:false},
    {en:"monji-of-khh-nanzih", md:"楠梓區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Nanzih Dictrict", title_md:"楠梓區", desc:"", desc_inherit:false},
    {en:"monji-of-khh-renwu", md:"仁武區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Renwu Dictrict", title_md:"仁武區", desc:"", desc_inherit:false},
    {en:"monji-of-khh-siaogang", md:"小港區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Siaogang Dictrict", title_md:"小港區", desc:"", desc_inherit:false},
    {en:"monji-of-khh-taoyuan", md:"桃源區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Taoyuan Dictrict", title_md:"桃源區", desc:"", desc_inherit:false},
    {en:"monji-of-khh-yongan", md:"永安區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Yongan Dictrict", title_md:"永安區", desc:"", desc_inherit:false},
    {en:"monji-of-khh-zuoying", md:"左營區", level:2, parent:"monji-of-kaohsiung-city", title_en:"Zuoying Dictrict", title_md:"左營區", desc:"", desc_inherit:false},
    {en:"monji-of-taoyuan-city", md:"桃園市", level:1, parent:null, title_en:"Taoyuan City", title_md:"桃園市", desc:"", desc_inherit:false},
    {en:"monji-of-yilan-county", md:"宜蘭縣", level:1, parent:null, title_en:"Yilan County", title_md:"宜蘭縣", desc:"", desc_inherit:false},
    {en:"monji-of-yunlin-county", md:"雲林縣", level:1, parent:null, title_en:"Yunlin County", title_md:"雲林縣", desc:"", desc_inherit:false},
    {en:"monji-of-ylh-taixi", md:"台西鄉", level:2, parent:"monji-of-yunlin-county", title_en:"Taixi Township", title_md:"台西鄉", desc:"", desc_inherit:false}
];
var monjiConfig = {
    dir: "/images/monjis/",
    container: "#monji-ctn",
    type: "monji",
    width: 150,
    height: 150,
    imageClasses: "modal-trigger-image hover-zoom"
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