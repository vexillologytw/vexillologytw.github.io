var flagImages = [
    {en:"flag-of-taiwan-1", md:"台灣百合旗", level:1, detail:true, parent:null, title_en:"Flag of Taiwan", title_md:"台灣百合旗", desc:"藍色代表海洋，象徵正義與民主。<br><br>青色代表山岳，象徵生命力與自由。<br><br>黃色代表台灣人，象徵傳承歷史與繁榮。<br><br>白色代表和諧，象徵善良與和平。<br><br>百合代表不屈的精神，也象徵台灣本土歷史與濃厚人文。<br><br>圓代表共榮，台灣人即使有不同的立場也能同心協力建設台灣。<br><br>向外散發的線條代表台灣走向世界，發揚台灣之光。"},
    {en:"flag-of-taiwan-2", md:"台灣百合旗貳式", level:2, detail:false, parent:"flag-of-taiwan-1", title_en:"Flag of Taiwan II", title_md:"台灣百合旗貳式", desc:""},
    {en:"flag-of-taiwan-3", md:"台灣百合旗參式", level:2, detail:false, parent:"flag-of-taiwan-1", title_en:"Flag of Taiwan III", title_md:"台灣百合旗參式", desc:""},
    {en:"flag-of-taiwan-4", md:"台灣百合旗肆式", level:2, detail:false, parent:"flag-of-taiwan-1", title_en:"Flag of Taiwan IV", title_md:"台灣百合旗肆式", desc:""},
    {en:"flag-of-taiwan-naval-1", md:"台灣百合海上旗", level:1, detail:true, parent:null, title_en:"Ensign of Taiwan", title_md:"台灣百合海上旗", desc:"藍色代表海洋，象徵正義與民主。<br><br>青色代表山岳，象徵生命力與自由。<br><br>黃色代表台灣人，象徵傳承歷史與繁榮。<br><br>白色代表和諧，象徵善良與和平。<br><br>百合代表不屈的精神，也象徵台灣本土歷史與濃厚人文。<br><br>圓代表共榮，台灣人即使有不同的立場也能同心協力建設台灣。<br><br>向外散發的線條代表台灣走向世界，發揚台灣之光。"},
    {en:"flag-of-taiwan-naval-2", md:"台灣百合海上旗貳式", level:2, detail:false, parent:"flag-of-taiwan-naval-1", title_en:"Ensign of Taiwan II", title_md:"台灣百合海上旗貳式", desc:""},
    {en:"flag-of-taiwan-naval-3", md:"台灣百合海上旗參式", level:2, detail:false, parent:"flag-of-taiwan-naval-1", title_en:"Ensign of Taiwan III", title_md:"台灣百合海上旗參式", desc:""},
    {en:"flag-of-taiwan-naval-4", md:"台灣百合海上旗肆式", level:2, detail:false, parent:"flag-of-taiwan-naval-1", title_en:"Ensign of Taiwan IV", title_md:"台灣百合海上旗肆式", desc:""},
    {en:"flag-of-high-mountains", md:"烈日高山旗", level:1, detail:false, parent:null, title_en:"Flag of High Mountains", title_md:"烈日高山旗", desc:""},
    {en:"flag-of-four-languages", md:"四大語言族群旗", level:1, detail:true, parent:null, title_en:"Flag of Four Ethnics", title_md:"四大語言族群旗", desc:"紅色象徵守護自由的決心。<br><br>白色象徵善良樸實的美德。<br><br>四條線分別代表台灣四大語言族群：中文、台語、客語、以及原住民語。<br><br>線條重疊而形成的八芒星，象徵多個民族的命運，在歷史的推動下交織在台灣島上。"},
    {en:"flag-of-department-of-defence", md:"國防部旗", level:1, detail:false, parent:null, title_en:"Flag of Department of Defence", title_md:"國防部旗", desc:""},
    {en:"flag-of-department-of-state", md:"行政院旗", level:1, detail:false, parent:null, title_en:"Flag of Department of State", title_md:"行政院旗", desc:""},
    {en:"flag-of-department-of-finance", md:"財政部旗", level:1, detail:false, parent:null, title_en:"Flag of Department of Finance", title_md:"財政部旗", desc:""},
    {en:"flag-of-coast-guard", md:"海巡署旗", level:1, detail:false, parent:null, title_en:"Flag of Coast Guard", title_md:"海巡署旗", desc:""},
    {en:"flag-of-coast-guard-naval", md:"海巡署海上旗", level:1, detail:false, parent:null, title_en:"Navel Ensign of Coast Guard", title_md:"海巡署海上旗", desc:""},
    {en:"flag-of-kaohsiung-city", md:"水色山光旗", level:1, detail:true, parent:null, title_en:"Flag of kaohsiung", title_md:"高雄市旗", desc:"藍色代表港都的歷史與文化。<br><br>白色代表熱情與活力。<br><br>旗中央是代表高雄的高字紋（「高」字與日治高雄市徽的結合體），八道條紋象徵孕育高雄的八大流域。條紋又形成山形，象徵高雄水色山光。"},
    {en:"flag-of-taipei-city", md:"台北市旗", level:1, detail:true, parent:null, title_en:"Flag of Taipei", title_md:"台北市旗", desc:"藍色代表和平。<br><br>金色代表繁榮。<br><br>兩道條紋代表民主與自由。<br><br>旗中央的三個北字代表在金融、社會與文化的蓬勃發展。<br><br>六顆星象徵台北是台灣政治、國防、經貿、科技、教育與人文的核心都市。"},
    {en:"flag-of-tainan-city", md:"台南市旗", level:1, detail:false, parent:null, title_en:"Flag of Tainan", title_md:"台南市旗", desc:""},
    {en:"flag-of-taitung-county", md:"台東縣旗", level:1, detail:false, parent:null, title_en:"Flag of Taitung County", title_md:"台東縣旗", desc:""},
    {en:"flag-of-changhua-county", md:"彰化縣旗", level:1, detail:false, parent:null, title_en:"Flag of Chnaghua County", title_md:"彰化縣旗", desc:""},
    {en:"flag-of-chiayi-county", md:"嘉義縣旗", level:1, detail:false, parent:null, title_en:"Flag of Chiayi County", title_md:"嘉義縣旗", desc:""},
    {en:"flag-of-hsintsu-city", md:"新竹市旗", level:1, detail:true, parent:null, title_en:"Flag of Hsintsu City", title_md:"新竹市旗", desc:"磚紅色代表新竹的濃厚歷史與人文。<br><br>金黃色代表富裕與發達。<br><br>白色代表正直與善良。<br><br>旗中央是代表新竹的「竹市」字紋。十字象徵新竹並存於傳統與現代。五芒星象徵新竹世界頂尖的科技實力。"},
    {en:"flag-of-nantou-county", md:"南投縣旗", level:1, detail:false, parent:null, title_en:"Flag of Nantou County", title_md:"南投縣旗", desc:""}
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