var monjiImages = [
    {en:"monji-of-changhua-county-5-2", md:"彰化縣五號之二", version:"5.2", is_main:true, level:1, parent:null, title_en:"Changhua County", title_md:"彰化縣", desc:"", desc_inherit:false, tags:"changhua", tags_inherit:false},
    {en:"monji-of-changhua-city-1-1", md:"彰化市一號之一", version:"1.1", is_main:true, level:1, parent:"monji-of-changhua-county-5-2", title_en:"Changhua City", title_md:"彰化市", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-cwh-ershui-1-1", md:"二水鄉一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-changhua-county-5-2", title_en:"Ershui Township", title_md:"二水鄉", desc:"", desc_inherit:false, tags:"changhua,ershui", tags_inherit:false},
    {en:"monji-of-cwh-ershui-1-2", md:"二水鄉一號之二", version:"1.2", is_main:false, level:2, parent:"monji-of-cwh-ershui-1-1", title_en:"Ershui Township", title_md:"二水鄉", desc:"", desc_inherit:true, tags:"changhua,ershui", tags_inherit:false},
    {en:"monji-of-cwh-ershui-2-1", md:"二水鄉二號之一", version:"2.1", is_main:false, level:2, parent:"monji-of-cwh-ershui-1-1", title_en:"Ershui Township", title_md:"二水鄉", desc:"", desc_inherit:true, tags:"changhua,ershui", tags_inherit:false},
    {en:"monji-of-cwh-erlin-1-1", md:"二林鎮一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-changhua-county-5-2", title_en:"Erlin Township", title_md:"二林鎮", desc:"", desc_inherit:false, tags:"changhua,erlin", tags_inherit:false},
    
    {en:"monji-of-chiayi-city-4-2", md:"嘉義市四號之二", version:"4.2", is_main:true, level:1, parent:null, title_en:"Chiayi City", title_md:"嘉義市", desc:"", desc_inherit:false, tags:"chiayi", tags_inherit:false},
    {en:"monji-of-chiayi-county-3-2", md:"嘉義縣三號之二", version:"3.2", is_main:true, level:1, parent:null, title_en:"Chiayi County", title_md:"嘉義縣", desc:"三重山岳的形狀象徵高山壯麗延綿，代表台灣民族的正值率真豪情。", desc_inherit:false, tags:"chiayi", tags_inherit:false},
    {en:"monji-of-puzi-city-2-1", md:"朴子市二號之一", version:"2.1", is_main:true, level:1, parent:"monji-of-chiayi-county-3-2", title_en:"Puzi City", title_md:"朴子市", desc:"", desc_inherit:false, tags:"chiayi,puzi", tags_inherit:false},
    {en:"monji-of-taibou-city-1-1", md:"太保市一號之一", version:"1.1", is_main:true, level:1, parent:"monji-of-chiayi-county-3-2", title_en:"Taibou City", title_md:"太保市", desc:"", desc_inherit:false, tags:"chiayi,taibou", tags_inherit:false},
    
    {en:"monji-of-hsinchu-city-3-1", md:"新竹市三號之一", version:"3.1", is_main:false, level:2, parent:"monji-of-hsinchu-city-5-2", title_en:"Hsintsu City", title_md:"新竹市", desc:"", desc_inherit:false, tags:"hsintsu", tags_inherit:false},
    {en:"monji-of-hsinchu-city-5-2", md:"新竹市五號之二", version:"5.2", is_main:true, level:1, parent:null, title_en:"Hsintsu City", title_md:"新竹市", desc:"紋由「竹」與「市」字所組成，可分為三個區塊，分別象徵科學、創新與永續發展。", desc_inherit:false, tags:"hsintsu", tags_inherit:false},
    {en:"monji-of-hsinchu-county-6-1", md:"新竹縣六號之一", version:"6.1", is_main:false, level:2, parent:"monji-of-hsinchu-county-7-1", title_en:"Hsintsu County", title_md:"新竹縣", desc:"", desc_inherit:false, tags:"hsintsu", tags_inherit:false},
    {en:"monji-of-hsinchu-county-7-1", md:"新竹縣七號之一", version:"7.1", is_main:true, level:1, parent:null, title_en:"Hsintsu County", title_md:"新竹縣", desc:"", desc_inherit:false, tags:"hsintsu", tags_inherit:false},
    {en:"monji-of-zhubei-city-1-1", md:"竹北市一號之一", version:"1.1", is_main:true, level:1, parent:"monji-of-hsinchu-county-7-1", title_en:"Zhubei City", title_md:"竹北市", desc:"", desc_inherit:false, tags:"hsintsu,zhubei", tags_inherit:false},
   
    {en:"monji-of-hualian-county-7-1", md:"花蓮縣七號之一", version:"7.1", is_main:true, level:1, parent:null, title_en:"Hualian County", title_md:"花蓮縣", desc:"", desc_inherit:false, tags:"hualian", tags_inherit:false},
    
    {en:"monji-of-keelung-city-4-1", md:"基隆市四號之一", version:"4.1", is_main:true, level:1, parent:null, title_en:"Keelung", title_md:"基隆市", desc:"", desc_inherit:false, tags:"keelung", tags_inherit:false},
    
    {en:"monji-of-miaoli-county-8-1", md:"苗栗縣八號之一", version:"8.1", is_main:true, level:1, parent:null, title_en:"Miaoli County", title_md:"苗栗縣", desc:"", desc_inherit:false, tags:"miaoli", tags_inherit:false},
    {en:"monji-of-miaoli-city-1-1", md:"苗栗市一號之一", version:"1.1", is_main:true, level:1, parent:"monji-of-miaoli-county-8-1", title_en:"Miaoli City", title_md:"苗栗市", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    
    {en:"monji-of-nantou-county-6-4", md:"南投縣六號之四", version:"6.4", is_main:true, level:1, parent:null, title_en:"Nantou County", title_md:"南投縣", desc:"", desc_inherit:false, tags:"nantou", tags_inherit:false},
    
    {en:"monji-of-penghu-county-3-2", md:"澎湖縣三號之一", version:"3.2", is_main:true, level:1, parent:null, title_en:"Penghu County", title_md:"澎湖縣", desc:"", desc_inherit:false, tags:"penghu", tags_inherit:false},
    {en:"monji-of-magong-city-1-1", md:"馬公市一號之一", version:"1.1", is_main:true, level:1, parent:"monji-of-penghu-county-3-2", title_en:"Magong City", title_md:"馬公市", desc:"", desc_inherit:false, tags:"penghu,magong", tags_inherit:false},
    
    {en:"monji-of-pingtung-county-4-1", md:"屏東縣四號之一", version:"4.1", is_main:false, level:2, parent:"monji-of-pingtung-county-7-1", title_en:"Pingtung County", title_md:"屏東縣", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-pingtung-county-7-1", md:"屏東縣七號之一", version:"7.1", is_main:true, level:1, parent:null, title_en:"Pingtung County", title_md:"屏東縣", desc:"", desc_inherit:false, tags:"pingtung", tags_inherit:false},
    
    {en:"monji-of-taichung-city-3-1", md:"台中市三號之一", version:"3.1", is_main:false, level:2, parent:"monji-of-taichung-city-9-2", title_en:"Taichung City", title_md:"台中市", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-taichung-city-9-2", md:"台中市九號之二", version:"9.2", is_main:true, level:1, parent:null, title_en:"Taichung City", title_md:"台中市", desc:"紋由「中」與「市」字組合而成。<br><br>三個方角代表和平、民主與繁榮，中央的圓代表和樂美滿團圓。<br><br>雖然設計了台中市章，但站主認為自大正 10 年就使用至今的台中市章最為適合台中市。", desc_inherit:false, tags:"taichung", tags_inherit:false},
    {en:"monji-of-taichung-city-10-1", md:"台中市十號之一", version:"10.1", is_main:false, level:2, parent:"monji-of-taichung-city-9-2", title_en:"Taichung City", title_md:"台中市", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-taichung-city-10-2", md:"台中市十號之二", version:"10.2", is_main:false, level:2, parent:"monji-of-taichung-city-9-2", title_en:"Taichung City", title_md:"台中市", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-taichung-city-triple-exit", md:"台中市？", version:"", is_main:true, level:2, parent:"monji-of-taichung-city-9-2", title_en:"Taichung City Triple Exits", title_md:"台中市？", desc:"紋由現有台中市章重製而成。<br><br><a src='/images/monjis/monji-of-taichung-city-current.png' class='modal-trigger-image text-dark'>現有的台中市章</a>由「中」字拓譜而成，紋形成兩個出口。站主在某日突然想試試打開第三個出口，於是有了此紋。<br><br>但由於字形被打破，紋就不再是「中」字的拓譜了。", desc_inherit:false, tags:"", tags_inherit:true},
    
    {en:"monji-of-tainan-city-5-3", md:"台南市五號之三", version:"5.3", is_main:false, level:2, parent:"monji-of-tainan-city-7-1", title_en:"Tainan City", title_md:"台南市", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-tainan-city-7-1", md:"台南市七號之一", version:"7.1", is_main:true, level:1, parent:null, title_en:"Tainan City", title_md:"台南市", desc:"紋由外側二重環與內側繩結組合成「南」字。<br><br>二重環象徵永保與安康；繩結連結上下的意象，象徵天地人美滿和諧。", desc_inherit:false, tags:"tainan", tags_inherit:false},
    {en:"monji-of-tnn-annan-1-1", md:"安南區一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-tainan-city-7-1", title_en:"Annan Dictrict", title_md:"安南區", desc:"", desc_inherit:false, tags:"tainan,annan", tags_inherit:false},
    {en:"monji-of-tnn-baihe-1-2", md:"白河區一號之二", version:"1.2", is_main:true, level:2, parent:"monji-of-tainan-city-7-1", title_en:"Baihe Dictrict", title_md:"白河區", desc:"", desc_inherit:false, tags:"tainan,baihe", tags_inherit:false},
    {en:"monji-of-tnn-gueiren-2-1", md:"歸仁區二號之一", version:"2.1", is_main:true, level:2, parent:"monji-of-tainan-city-7-1", title_en:"Gueiren Dictrict", title_md:"歸仁區", desc:"", desc_inherit:false, tags:"tainan,gueiren", tags_inherit:false},
    {en:"monji-of-tnn-jiali-1-1", md:"佳里區一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-tainan-city-7-1", title_en:"Jiali Dictrict", title_md:"佳里區", desc:"", desc_inherit:false, tags:"tainan,jiali", tags_inherit:false},
    {en:"monji-of-tnn-liouying-1-1", md:"柳營區一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-tainan-city-7-1", title_en:"Liouying Dictrict", title_md:"柳營區", desc:"", desc_inherit:false, tags:"tainan,liouying", tags_inherit:false},
    {en:"monji-of-tnn-madou-1-1", md:"麻豆區一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-tainan-city-7-1", title_en:"Madou Dictrict", title_md:"麻豆區", desc:"", desc_inherit:false, tags:"tainan,madou", tags_inherit:false},
    {en:"monji-of-tnn-north-3-1", md:"北區三號之一", version:"3.1", is_main:true, level:2, parent:"monji-of-tainan-city-7-1", title_en:"North Dictrict", title_md:"北區", desc:"", desc_inherit:false, tags:"tainan,tnn_north", tags_inherit:false},
    {en:"monji-of-tnn-qigu-1-2", md:"七股區一號之二", version:"1.2", is_main:true, level:2, parent:"monji-of-tainan-city-7-1", title_en:"Qigu Dictrict", title_md:"七股區", desc:"", desc_inherit:false, tags:"tainan,qigu", tags_inherit:false},
    {en:"monji-of-tnn-shanhua-2-1", md:"善化區二號之一", version:"2.1", is_main:true, level:2, parent:"monji-of-tainan-city-7-1", title_en:"Shanhua Dictrict", title_md:"善化區", desc:"", desc_inherit:false, tags:"tainan,shanhua", tags_inherit:false},
    {en:"monji-of-tnn-west-central-2-2", md:"中西區", version:"2.2", is_main:true, level:2, parent:"monji-of-tainan-city-7-1", title_en:"West Central Dictrict", title_md:"中西區", desc:"", desc_inherit:false, tags:"tainan,tnn_west_central", tags_inherit:false},
    {en:"monji-of-tnn-xiaying-3-1", md:"下營區三號之一", version:"3.1", is_main:true, level:2, parent:"monji-of-tainan-city-7-1", title_en:"Xiaying Dictrict", title_md:"下營區", desc:"", desc_inherit:false, tags:"tainan,xiaying", tags_inherit:false},
    {en:"monji-of-tnn-xigang-2-1", md:"西港區二號之一", version:"2.1", is_main:true, level:2, parent:"monji-of-tainan-city-7-1", title_en:"Xigang Dictrict", title_md:"西港區", desc:"", desc_inherit:false, tags:"tainan,xigang", tags_inherit:false},
    {en:"monji-of-tnn-xinhua-1-1", md:"新化區一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-tainan-city-7-1", title_en:"Xinhua Dictrict", title_md:"新化區", desc:"", desc_inherit:false, tags:"tainan,xinhua", tags_inherit:false},
    {en:"monji-of-tnn-xinying-1-2", md:"新營區一號之二", version:"1.2", is_main:true, level:2, parent:"monji-of-tainan-city-7-1", title_en:"Xinying Dictrict", title_md:"新營區", desc:"", desc_inherit:false, tags:"tainan,xinying", tags_inherit:false},
    {en:"monji-of-tnn-yongkang-1-1", md:"永康區一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-tainan-city-7-1", title_en:"Yongkang Dictrict", title_md:"永康區", desc:"", desc_inherit:false, tags:"tainan,yongkang", tags_inherit:false},
    
    {en:"monji-of-taipei-city-3-4", md:"台北市三號之四", version:"3.4", is_main:false, level:2, parent:"monji-of-taipei-city-8-2", title_en:"Taipei City", title_md:"台北市", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-taipei-city-5-1", md:"台北市五號之一", version:"5.1", is_main:false, level:2, parent:"monji-of-taipei-city-8-2", title_en:"Taipei City", title_md:"台北市", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-taipei-city-8-2", md:"台北市八號之二", version:"8.2", is_main:true, level:1, parent:null, title_en:"Taipei City", title_md:"台北市", desc:"紋由三個北字組成，代表台北在金融、社會與文化的蓬勃發展。", desc_inherit:false, tags:"taipei", tags_inherit:false},
    {en:"monji-of-taipei-city-9-1", md:"台北市九號之一", version:"9.1", is_main:false, level:2, parent:"monji-of-taipei-city-8-2", title_en:"Taipei City", title_md:"台北市", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-tpe-beitou-1-1", md:"北投區一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-taipei-city-8-2", title_en:"Beitou District", title_md:"北投區", desc:"", desc_inherit:false, tags:"taipei,beitou", tags_inherit:false},
    {en:"monji-of-new-taipei-city-2-1", md:"新北市二號之一", version:"2.1", is_main:false, level:2, parent:"monji-of-new-taipei-city-8-2", title_en:"New Taipei City", title_md:"新北市", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-new-taipei-city-8-1", md:"新北市八號之一", version:"8.1", is_main:false, level:2, parent:"monji-of-new-taipei-city-8-2", title_en:"New Taipei City", title_md:"新北市", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-new-taipei-city-8-2", md:"新北市八號之二", version:"8.2", is_main:true, level:1, parent:null, title_en:"New Taipei City", title_md:"新北市", desc:"", desc_inherit:false, tags:"new_taipei,taipei", tags_inherit:false},
    
    {en:"monji-of-taitung-county-9-1", md:"台東縣九號之一", version:"9.1", is_main:true, level:1, parent:null, title_en:"Taitung County", title_md:"台東縣", desc:"", desc_inherit:false, tags:"taitung", tags_inherit:false},
    {en:"monji-of-taitung-city-1-1", md:"台東市一號之一", version:"1.1", is_main:true, level:1, parent:"monji-of-taitung-county-9-1", title_en:"Taitung City", title_md:"台東市", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-taitung-city-2-1", md:"台東市二號二號之一", version:"2.1", is_main:false, level:2, parent:"monji-of-taitung-city-1-1", title_en:"Taitung City", title_md:"台東市", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    
    {en:"monji-of-kaohsiung-city-3-5", md:"高雄市三號之五", version:"3.5", is_main:false, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Kaohsiung City", title_md:"高雄市", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-kaohsiung-city-4-8", md:"高雄市四號之八", version:"4.8", is_main:true, level:1, parent:null, title_en:"Kaohsiung City", title_md:"高雄市", desc:"紋結合了「高」字與日本時代的高雄市，象徵這座城市繼承的歷史與人文。<br><br>紋自上而下可分為三個菱形區塊，分別象徵和平、民主與自由。", desc_inherit:false, tags:"kaohsiung", tags_inherit:false},
    {en:"monji-of-khh-alian-1-2", md:"阿蓮區一號之二", version:"1.2", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Alian Dictrict", title_md:"阿蓮區", desc:"", desc_inherit:false, tags:"kaohsiung,alian", tags_inherit:false},
    {en:"monji-of-khh-daliao-2-1", md:"大寮區二號之一", version:"2.1", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Daliao Dictrict", title_md:"大寮區", desc:"", desc_inherit:false, tags:"kaohsiung,daliao", tags_inherit:false},
    {en:"monji-of-khh-fongshan-1-1", md:"鳳山區一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Fongshan Dictrict", title_md:"鳳山區", desc:"", desc_inherit:false, tags:"kaohsiung,fongshan", tags_inherit:false},
    {en:"monji-of-khh-gangshan-2-1", md:"岡山區二號之一", version:"2.1", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Ganshan Dictrict", title_md:"岡山區", desc:"", desc_inherit:false, tags:"kaohsiung,gangshan", tags_inherit:false},
    {en:"monji-of-khh-jiasian-2-1", md:"甲仙區二號之一", version:"2.1", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Jiasian Dictrict", title_md:"甲仙區", desc:"", desc_inherit:false, tags:"kaohsiung,jiasian", tags_inherit:false},
    {en:"monji-of-khh-meinong-1-1", md:"美濃區一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Meinong Dictrict", title_md:"美濃區", desc:"", desc_inherit:false, tags:"kaohsiung,meinong", tags_inherit:false},
    {en:"monji-of-khh-namasia-1-1", md:"那瑪夏區一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Namasia Dictrict", title_md:"那瑪夏區", desc:"", desc_inherit:false, tags:"kaohsiung,namasia", tags_inherit:false},
    {en:"monji-of-khh-nanzih-1-1", md:"楠梓區一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Nanzih Dictrict", title_md:"楠梓區", desc:"", desc_inherit:false, tags:"kaohsiung,nanzih", tags_inherit:false},
    {en:"monji-of-khh-neimen-2-1", md:"內門區二號之一", version:"2.1", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Neimen Dictrict", title_md:"內門區", desc:"", desc_inherit:false, tags:"kaohsiung,neimen", tags_inherit:false},
    {en:"monji-of-khh-qieding-2-1", md:"茄萣區二號之一", version:"2.1", is_main:false, level:2, parent:"monji-of-khh-qieding-2-3", title_en:"Qieding Dictrict", title_md:"茄萣區", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-khh-qieding-2-2", md:"茄萣區二號之二", version:"2.2", is_main:false, level:2, parent:"monji-of-khh-qieding-2-3", title_en:"Qieding Dictrict", title_md:"茄萣區", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-khh-qieding-2-3", md:"茄萣區二號之三", version:"2.3", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Qieding Dictrict", title_md:"茄萣區", desc:"", desc_inherit:false, tags:"kaohsiung,qieding", tags_inherit:false},
    {en:"monji-of-khh-renwu-2-1", md:"仁武區二號之一", version:"2.1", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Renwu Dictrict", title_md:"仁武區", desc:"", desc_inherit:false, tags:"kaohsiung,renwu", tags_inherit:false},
    {en:"monji-of-khh-sanmin-3-2", md:"三民區三號之二", version:"3.2", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Sanmin Dictrict", title_md:"三民區", desc:"紋由三個「民」字組成，代表民主民權民生。", desc_inherit:false, tags:"kaohsiung,sanming", tags_inherit:false},
    {en:"monji-of-khh-siaogang-1-1", md:"小港區一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Siaogang Dictrict", title_md:"小港區", desc:"", desc_inherit:false, tags:"kaohsiung,siaogang", tags_inherit:false},
    {en:"monji-of-khh-sinsing-1-1", md:"新興區一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Sinsing Dictrict", title_md:"新興區", desc:"", desc_inherit:false, tags:"kaohsiung,sinsing", tags_inherit:false},
    {en:"monji-of-khh-taoyuan-2-1", md:"桃源區二號之一", version:"2.1", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Taoyuan Dictrict", title_md:"桃源區", desc:"", desc_inherit:false, tags:"kaohsiung,khh_taoyuan", tags_inherit:false},
    {en:"monji-of-khh-yongan-1-3", md:"永安區一號之三", version:"1.3", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Yongan Dictrict", title_md:"永安區", desc:"", desc_inherit:false, tags:"kaohsiung,yongan", tags_inherit:false},
    {en:"monji-of-khh-yongan-1-4", md:"永安區一號之四", version:"1.4", is_main:false, level:2, parent:"monji-of-khh-yongan-1-3", title_en:"Yongan Dictrict", title_md:"永安區", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
    {en:"monji-of-khh-zihguan-3-1", md:"梓官區三號之一", version:"3.1", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Zihguan Dictrict", title_md:"梓官區", desc:"", desc_inherit:false, tags:"kaohsiung,zihguan", tags_inherit:false},
    {en:"monji-of-khh-zuoying-1-1", md:"左營區一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-kaohsiung-city-4-8", title_en:"Zuoying Dictrict", title_md:"左營區", desc:"", desc_inherit:false, tags:"kaohsiung,zuoying", tags_inherit:false},
    
    {en:"monji-of-taoyuan-city-7-1", md:"桃園市七號之一", version:"7.1", is_main:true, level:1, parent:null, title_en:"Taoyuan City", title_md:"桃園市", desc:"", desc_inherit:false, tags:"taoyuan", tags_inherit:false},
    
    {en:"monji-of-yilan-county-6-1", md:"宜蘭縣六號之一", version:"6.1", is_main:true, level:1, parent:null, title_en:"Yilan County", title_md:"宜蘭縣", desc:"", desc_inherit:false, tags:"yilan", tags_inherit:false},
    
    {en:"monji-of-yunlin-county-6-1", md:"雲林縣六號之一", version:"6.1", is_main:true, level:1, parent:null, title_en:"Yunlin County", title_md:"雲林縣", desc:"", desc_inherit:false, tags:"yunlin", tags_inherit:false},
    {en:"monji-of-ylh-taixi-1-1", md:"台西鄉一號之一", version:"1.1", is_main:true, level:2, parent:"monji-of-yunlin-county-6-1", title_en:"Taixi Township", title_md:"台西鄉", desc:"", desc_inherit:false, tags:"yunlin,taixi", tags_inherit:false}
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

/**
 * get a monji's tags or its ascendent's tags.
 * @param {String} en 
 * @returns 
 */
function getMonjiTags(en) {
    var monji = getMonjiByEn(en);
    if (!monji) {
        return "";
    }
    if (monji.tags_inherit && monji.parent != null) {
        return getMonjiTags(monji.parent);
    }
    if (monji.tags && monji.tags.length) {
        return monji.tags;
    }
    return "";
}

/**
 * get all related monjis.
 * @param {string} en 
 * @returns 
 */
function getRelatedMonjis(en) {
    var relatedMonjis = [];
    var tags = getMonjiTags(en);
    if (!tags.length) {
        return relatedMonjis; // skip if this monji has no tags
    }
    var tagArray = tags.split(",");
    for (var monji of monjiImages) {
        if (monji.en == en) continue; // skip self

        var thisTags = getMonjiTags(monji.en);
        if (!thisTags.length) continue; // skip monjis with no tags

        loop:
        for (var tag of tagArray) {
            for (var thisTag of thisTags.split(",")) {
                if (thisTag != tag) continue; // skip monjis that is not related
                relatedMonjis.push(monji);
                break loop;  // break if monji is related
            }
        }
    }
    return relatedMonjis;
}