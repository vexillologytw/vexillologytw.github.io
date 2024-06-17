var flagImages = [
    {en:"flag-of-taiwan-1", md:"台灣百合旗", level:1, detail:false, parent:null, title_en:"Flag of Taiwan", title_md:"台灣百合旗", desc:""},
    {en:"flag-of-taiwan-2", md:"台灣百合旗貳式", level:1, detail:false, parent:null, title_en:"Flag of Taiwan II", title_md:"台灣百合旗貳式", desc:""},
    {en:"flag-of-taiwan-3", md:"台灣百合旗參式", level:1, detail:false, parent:null, title_en:"Flag of Taiwan III", title_md:"台灣百合旗參式", desc:""},
    {en:"flag-of-taiwan-4", md:"台灣百合旗肆式", level:1, detail:false, parent:null, title_en:"Flag of Taiwan IV", title_md:"台灣百合旗肆式", desc:""},
    {en:"flag-of-taiwan-naval-1", md:"台灣百合海上旗", level:1, detail:false, parent:null, title_en:"Ensign of Taiwan", title_md:"台灣百合海上旗", desc:""},
    {en:"flag-of-taiwan-naval-2", md:"台灣百合海上旗貳式", level:1, detail:false, parent:null, title_en:"Ensign of Taiwan II", title_md:"台灣百合海上旗貳式", desc:""},
    {en:"flag-of-taiwan-naval-3", md:"台灣百合海上旗參式", level:1, detail:false, parent:null, title_en:"Ensign of Taiwan III", title_md:"台灣百合海上旗參式", desc:""},
    {en:"flag-of-taiwan-naval-4", md:"台灣百合海上旗肆式", level:1, detail:false, parent:null, title_en:"Ensign of Taiwan IV", title_md:"台灣百合海上旗肆式", desc:""},
    {en:"flag-of-four-languages", md:"四大語言族群旗", level:1, detail:false, parent:null, title_en:"Flag of Four Ethnics", title_md:"四大語言族群旗", desc:""},
    {en:"flag-of-department-of-defence", md:"國防部旗", level:1, detail:false, parent:null, title_en:"Flag of Department of Defence", title_md:"國防部旗", desc:""},
    {en:"flag-of-department-of-state", md:"行政院旗", level:1, detail:false, parent:null, title_en:"Flag of Department of State", title_md:"行政院旗", desc:""},
    {en:"flag-of-department-of-finance", md:"財政部旗", level:1, detail:false, parent:null, title_en:"Flag of Department of Finance", title_md:"財政部旗", desc:""},
    {en:"flag-of-coast-guard", md:"海巡署旗", level:1, detail:false, parent:null, title_en:"Flag of Coast Guard", title_md:"海巡署旗", desc:""},
    {en:"flag-of-coast-guard-naval", md:"海巡署海上旗", level:1, detail:false, parent:null, title_en:"Navel Ensign of Coast Guard", title_md:"海巡署海上旗", desc:""},
    {en:"flag-of-takaohsiung-city", md:"大高雄旗", level:1, detail:false, parent:null, title_en:"Flag of Takaohsiung", title_md:"大高雄旗", desc:""},
    {en:"flag-of-taipei-city", md:"台北市旗", level:1, detail:false, parent:null, title_en:"Flag of Taipei", title_md:"台北市旗", desc:""},
    {en:"flag-of-tainan-city", md:"台南市旗", level:1, detail:false, parent:null, title_en:"Flag of Tainan", title_md:"台南市旗", desc:""},
    {en:"flag-of-taitung-county", md:"台東縣旗", level:1, detail:false, parent:null, title_en:"Flag of Taitung County", title_md:"台東縣旗", desc:""},
    {en:"flag-of-changhua-county", md:"彰化縣旗", level:1, detail:false, parent:null, title_en:"Flag of Chnaghua County", title_md:"彰化縣旗", desc:""},
    {en:"flag-of-chiayi-county", md:"嘉義縣旗", level:1, detail:false, parent:null, title_en:"Flag of Chiayi County", title_md:"嘉義縣旗", desc:""},
    {en:"flag-of-hsintsu-city", md:"新竹市旗", level:1, detail:false, parent:null, title_en:"Flag of Hsintsu City", title_md:"新竹市旗", desc:""},
    {en:"flag-of-nantou-county", md:"南投縣旗", level:1, detail:false, parent:null, title_en:"Flag of Nantou County", title_md:"南投縣旗", desc:""},
    {en:"flag-of-sea", md:"海洋旗", level:1, detail:false, parent:null, title_en:"Flag of Sea", title_md:"海洋旗", desc:""},
    {en:"flag-of-land", md:"山岳旗", level:1, detail:false, parent:null, title_en:"Flag of Land", title_md:"山岳旗", desc:""}
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
    for (flag of flagImages) {
        if (flag.en === en) {
            return flag;
        }
    }
}