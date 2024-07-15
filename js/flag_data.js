var flagImages = [
    {en:"flag-of-taiwan-1-1", md:"台灣百合旗", level:1, parent:null, title_en:"Flag of Taiwan", title_md:"台灣百合旗", desc:"藍色象徵海洋，代表正義與民主。<br><br>青色象徵山岳，代表生命力與自由。<br><br>黃色象徵台灣人，代表文明與繁榮。<br><br>白色象徵和諧，代表善良與和平。<br><br>百合象徵不屈的精神，也代表台灣本土歷史與濃厚人文。<br><br>圓象徵台灣多個民族的共和共榮。<br><br>向外散發的線條象徵台灣走向世界，發揚台灣之光。", desc_inherit:false},
    {en:"flag-of-taiwan-1-2", md:"台灣百合旗一式二型", level:2, parent:"flag-of-taiwan-1-1", title_en:"Flag of Taiwan I-II", title_md:"台灣百合旗一式二型", desc:null, desc_inherit:true},
    {en:"flag-of-taiwan-1-3", md:"台灣百合旗一式三型", level:2, parent:"flag-of-taiwan-1-1", title_en:"Flag of Taiwan I-III", title_md:"台灣百合旗一式三型", desc:null, desc_inherit:true},
    {en:"flag-of-taiwan-1-4", md:"台灣百合旗一式四型", level:2, parent:"flag-of-taiwan-1-1", title_en:"Flag of Taiwan I-VI", title_md:"台灣百合旗一式四型", desc:null, desc_inherit:true},
    {en:"flag-of-taiwan-2-1", md:"台灣百合旗二式一型", level:2, parent:"flag-of-taiwan-1-1", title_en:"Flag of Taiwan II-I", title_md:"台灣百合旗二式一型", desc:null, desc_inherit:false},
    {en:"flag-of-taiwan-3-1", md:"台灣百合旗三式一型", level:2, parent:"flag-of-taiwan-1-1", title_en:"Flag of Taiwan III-I", title_md:"台灣百合旗三式一型", desc:null, desc_inherit:false},
    {en:"flag-of-taiwan-milktea", md:"奶茶百合旗", level:2, parent:"flag-of-taiwan-1-1", title_en:"Flag of Taiwan Milk Tea", title_md:"奶茶百合旗", desc:null, desc_inherit:false},
    {en:"flag-of-taiwan-naval-1-1", md:"台灣百合海上旗", level:1, parent:"flag-of-taiwan-1-1", title_en:"Ensign of Taiwan", title_md:"台灣百合海上旗", desc:"", desc_inherit:true},
    {en:"flag-of-taiwan-naval-1-2", md:"台灣百合海上旗一式二型", level:2, parent:"flag-of-taiwan-naval-1-1", title_en:"Ensign of Taiwan I-II", title_md:"台灣百合海上旗一式二型", desc:null, desc_inherit:true},
    {en:"flag-of-taiwan-naval-1-3", md:"台灣百合海上旗一式三型", level:2, parent:"flag-of-taiwan-naval-1-1", title_en:"Ensign of Taiwan I-III", title_md:"台灣百合海上旗一式三型", desc:null, desc_inherit:true},
    {en:"flag-of-taiwan-naval-1-4", md:"台灣百合海上旗一式四型", level:2, parent:"flag-of-taiwan-naval-1-1", title_en:"Ensign of Taiwan I-VI", title_md:"台灣百合海上旗一式四型", desc:null, desc_inherit:true},
    {en:"flag-of-taiwan-naval-2-1", md:"台灣百合海上旗二式一型", level:2, parent:"flag-of-taiwan-naval-1-1", title_en:"Ensign of Taiwan II-I", title_md:"台灣百合海上旗二式一型", desc:null, desc_inherit:true},
    {en:"flag-of-taiwan-naval-2-2", md:"台灣百合海上旗二式二型", level:2, parent:"flag-of-taiwan-naval-1-1", title_en:"Ensign of Taiwan II-II", title_md:"台灣百合海上旗二式二型", desc:null, desc_inherit:true},
    {en:"flag-of-taiwan-naval-2-3", md:"台灣百合海上旗二式三型", level:2, parent:"flag-of-taiwan-naval-1-1", title_en:"Ensign of Taiwan II-III", title_md:"台灣百合海上旗二式三型", desc:null, desc_inherit:true},
    {en:"flag-of-taiwan-naval-2-4", md:"台灣百合海上旗二式四型", level:2, parent:"flag-of-taiwan-naval-1-1", title_en:"Ensign of Taiwan II-VI", title_md:"台灣百合海上旗二式四型", desc:null, desc_inherit:true},
    {en:"flag-of-high-mountains", md:"高山旗", level:1, parent:null, title_en:"Flag of High Mountains", title_md:"高山旗", desc:"高山孤絕壯麗，象徵台灣人在險惡世界燃起的熊熊魂火。<br><br>藍色象徵玉山，代表台灣人的精神。<br><br>青色象徵晴天，代表自由與希望。<br><br>白色象徵烈日，代表正值正義正大光明。", desc_inherit:false},
    {en:"flag-of-four-languages", md:"四大語言族群旗", level:1, parent:null, title_en:"Flag of Four Ethnics", title_md:"四大語言族群旗", desc:"紅色代表守護自由的決心。<br><br>白色代表善良樸實的美德。<br><br>四條線分別代表台灣四大語言族群：中文、台語、客語、以及原住民語。<br><br>線條重疊而形成的八芒星，象徵多個民族的命運，在歷史的推動下交織在台灣島上。", desc_inherit:false},
    {en:"flag-of-four-languages-naval", md:"四大語言族群旗", level:2, parent:"flag-of-four-languages", title_en:"Ensign of Four Ethnics", title_md:"四大語言族群海上旗", desc:"", desc_inherit:true},
    {en:"flag-of-three-whales-1-1", md:"三鯨旗", level:1, parent:null, title_en:"Flag of Three Whales", title_md:"三鯨旗", desc:"白色代表和諧與善良；藍色代表生命與正義。<br><br>三條鯨魚代表台灣的獨立、民主與自由。<br><br>鯨魚們相互環繞的意象，象徵台灣與海洋無法分離的緊密聯繫。", desc_inherit:false},
    {en:"flag-of-three-whales-1-2", md:"三鯨旗一式二型", level:2, parent:"flag-of-three-whales-1-1", title_en:"Flag of Three Whales I-II", title_md:"三鯨旗一式二型", desc:null, desc_inherit:true},
    {en:"flag-of-department-of-defence", md:"國防部旗", level:1, parent:null, title_en:"Flag of Department of Defence", title_md:"國防部旗", desc:null, desc_inherit:false},
    {en:"flag-of-department-of-state", md:"行政院旗", level:1, parent:null, title_en:"Flag of Department of State", title_md:"行政院旗", desc:null, desc_inherit:false},
    {en:"flag-of-department-of-finance", md:"財政部旗", level:1, parent:null, title_en:"Flag of Department of Finance", title_md:"財政部旗", desc:null, desc_inherit:false},
    {en:"flag-of-coast-guard", md:"海巡署旗", level:1, parent:null, title_en:"Flag of Coast Guard", title_md:"海巡署旗", desc:"藍色象徵海疆，代表穩重與正義。<br><br>黃色象徵台灣人，代表智慧與忠誠。<br><br>旗章由「巡」字圖案化而成，紋上三道條紋分別代表警察、軍人與公務人員。", desc_inherit:false},
    {en:"flag-of-coast-guard-naval", md:"海巡署海上旗", level:1, parent:null, title_en:"Navel Ensign of Coast Guard", title_md:"海巡署海上旗", desc:"藍色象徵海疆，代表穩重與正義。<br><br>橘色象徵海巡隊員，代表力量與衛國決心。<br><br>白色象徵船艦，代表拯救與生命。<br><br>旗章由「巡」字圖案化而成，紋上三道條紋分別代表警察、軍人與公務人員。", desc_inherit:false},
    {en:"flag-of-kaohsiung-city", md:"高雄市旗", level:1, parent:null, title_en:"Flag of Kaohsiung", title_md:"高雄市旗", desc:"藍色代表港都的歷史與文化。<br><br>白色代表熱情與活力。<br><br>旗中央是代表高雄的高字紋（「高」字與日治高雄市徽的結合體），八道條紋象徵孕育高雄的八大流域。<br><br>條紋又形成山形，象徵高雄水色山光。", desc_inherit:false},
    {en:"flag-of-keelung-city", md:"基隆市旗", level:1, parent:null, title_en:"Flag of Keelung", title_md:"基隆市旗", desc:"藍色與黃色象徵夜空下的基隆燈火，代表寧靜與繁榮。<br><br>白色象徵海浪，代表長久的平安。<br><br>中央的基字紋代表基隆市。<br><br>位於藍色區域的七角星象徵基隆的七個附屬島嶼，代表自由。<br><br>位於黃色區域的七角星象徵基隆的七個行政區，代表民主。", desc_inherit:false},
    {en:"flag-of-taipei-city", md:"台北市旗", level:1, parent:null, title_en:"Flag of Taipei", title_md:"台北市旗", desc:"藍色代表和平。<br><br>金色代表繁榮。<br><br>兩道條紋代表民主與自由。<br><br>旗中央的三個北字代表在金融、社會與文化的蓬勃發展。<br><br>六顆星象徵台北是台灣政治、國防、經貿、科技、教育與人文的核心都市。", desc_inherit:false},
    {en:"flag-of-penghu-county", md:"澎湖縣旗", level:1, parent:null, title_en:"Flag of Penghu County", title_md:"澎湖縣旗", desc:"青色象徵蒼海，代表澎湖人對自然的敬畏。<br><br>白色象徵純淨，代表澎湖人的純樸與友善。<br><br>黃色象徵陽光，代表澎湖人的熱情與活力。<br><br>三道條紋由長到短，分別象徵澎湖群島的歷史、人文、以及現代化的發展。<br><br>左方的紋由六道海與橋梁組成「澎」字，代表澎湖六個行政區共存共榮。", desc_inherit:false},
    {en:"flag-of-changhua-county", md:"彰化縣旗", level:1, parent:null, title_en:"Flag of Chnaghua County", title_md:"彰化縣旗", desc:null, desc_inherit:false},
    {en:"flag-of-taitung-county", md:"台東縣旗", level:1, parent:null, title_en:"Flag of Taitung County", title_md:"台東縣旗", desc:"白色象徵晴天，代表自由與希望。<br><br>藍色象徵大海，代表生命與敬畏。<br><br>黃色象徵旭日，代表天地萬物生生不息。<br><br>旗中央是代表台東的東字紋，層層環繞的意象代表緊守層層祝福。", desc_inherit:false},
    {en:"flag-of-changhua-county", md:"彰化縣旗", level:1, parent:null, title_en:"Flag of Chnaghua County", title_md:"彰化縣旗", desc:null, desc_inherit:false},
    {en:"flag-of-chiayi-county", md:"嘉義縣旗", level:1, parent:null, title_en:"Flag of Chiayi County", title_md:"嘉義縣旗", desc:null, desc_inherit:false},
    {en:"flag-of-hsintsu-city", md:"新竹市旗", level:1, parent:null, title_en:"Flag of Hsintsu City", title_md:"新竹市旗", desc:"磚紅色代表新竹的濃厚歷史與人文。<br><br>金黃色代表富裕與發達。<br><br>白色代表正直與善良。<br><br>旗中央是代表新竹的「竹市」字紋。十字象徵新竹並存於傳統與現代。五芒星象徵新竹世界頂尖的科技實力。", desc_inherit:false},
    {en:"flag-of-nantou-county", md:"南投縣旗", level:1, parent:null, title_en:"Flag of Nantou County", title_md:"南投縣旗", desc:null, desc_inherit:false},
    {en:"flag-of-vexillology-1", md:"台灣旗幟學", level:1, parent:null, title_en:"Flag of Vexillology", title_md:"台灣旗幟學", desc:null, desc_inherit:false},
    {en:"flag-of-vexillology-2", md:"台灣旗幟學二式", level:2, parent:"flag-of-vexillology-1", title_en:"Flag of Vexillology II", title_md:"台灣旗幟學二式", desc:null, desc_inherit:false},
    {en:"flag-of-taizih-1", md:"台字章旗", level:1, parent:null, title_en:"Flag of Taizih", title_md:"台字章旗", desc:null, desc_inherit:false},
    {en:"flag-of-taizih-2", md:"台字章旗二式", level:2, parent:"flag-of-taizih-1", title_en:"Flag of Taizih II", title_md:"台字章旗二式", desc:null, desc_inherit:true}
];
var flagConfig = {
    dir:"/images/flags/",
    container:"#flag-ctn",
    type: "flag",
    width:300,
    height:180,
    imageClasses: "modal-trigger-image border"
};
function getFlagByEn(en) {
    for (var flag of flagImages) {
        if (flag.en === en) {
            return flag;
        }
    }
    return null;
}
function getFlagsByParentName(parentName) {
    var flags = [];
    for (var flag of flagImages) {
        if (flag.parent === parentName) {
            flags.push(flag);
        }
    }
    return flags;
}
function getNeighborFlags(en) {
    var result = {
        prev: null,
        next: null
    };
    var thisIndex = flagImages.findIndex(flag => flag.en === en);
    if (thisIndex -1 >= 0) {
        result.prev = flagImages[thisIndex -1];
    }
    if (thisIndex +1 < flagImages.length) {
        result.next = flagImages[thisIndex +1];
    }
    return result;
}
function getFlagChildrenCount(parentName) {
	var count = 0;
	for (var flag of flagImages) {
		if (flag.parent === parentName) {
			count++;
		}
	}
	return count;
}
function getFlagDesc(en) {
    var flag = getFlagByEn(en);
    if (!flag) {
        return "";
    }
    if (flag.desc_inherit && flag.parent != null) {
        return getFlagDesc(flag.parent);
    }
    if (flag.desc && flag.desc.length) {
        return flag.desc;
    }
    return "";
}