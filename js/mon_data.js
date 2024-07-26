var monImages = [
	{en:"mon-of-5fortune-o", md:"五福", level:1, parent:null, title_en:"Five Fortunes", title_md:"五福", desc:"此五福代表「名譽」、「財富」、「長壽」、「健康」與「善終」。", desc_inherit:false, tags:"fortune", tags_inherit:false},
	{en:"mon-of-5fortune-2-o", md:"五福之二", level:2, parent:"mon-of-5fortune-o", title_en:"Encircled Five Fortunes II", title_md:"五福之二", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-5fortune-3-o", md:"五福之三", level:2, parent:"mon-of-5fortune-o", title_en:"Encircled Five Fortunes III", title_md:"五福之三", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-5fortune-4-o", md:"五福之四", level:2, parent:"mon-of-5fortune-o", title_en:"Encircled Five Fortunes IV", title_md:"五福之四", desc:"", desc_inherit:true, tags:"", tags_inherit:true},

	{en:"mon-of-hydrangea-3fold-o", md:"環內三瓣繡球", level:1, parent:null, title_en:"Encircled Trifold Hydrangeas", title_md:"三瓣繡球", desc:"", desc_inherit:false, tags:"hydrangea", tags_inherit:false},

	{en:"mon-of-malus-spectabilis", md:"海棠", level:1, parent:null, title_en:"Malus Spectabilis", title_md:"海棠", desc:"", desc_inherit:false, tags:"malus_spectabilis", tags_inherit:false},
	{en:"mon-of-malus-spectabilis-mokkou", md:"四方木瓜內海棠", level:2, parent:"mon-of-malus-spectabilis", title_en:"Mokkou Ensquared Malus Spectabilis", title_md:"四方木瓜內海棠", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	
	{en:"mon-of-banboo-leaf", md:"五枚竹", level:1, parent:null, title_en:"Banboo Leaf", title_md:"五枚竹", desc:"竹有著謙虛、氣結與不屈的含意。", desc_inherit:false, tags:"bamboo", tags_inherit:false},
	{en:"mon-of-banboo-leaf-o", md:"環內五枚竹", level:2, parent:"mon-of-banboo-leaf", title_en:"Encircled Banboo Leaf", title_md:"環內五枚竹", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
	
	{en:"mon-of-icho-ring-6fold", md:"六輪銀杏", level:1, parent:null, title_en:"Six Icho Ring", title_md:"六輪銀杏", desc:"", desc_inherit:false, tags:"Icho,rings", tags_inherit:false},
	{en:"mon-of-icho-ring-6fold-o", md:"環內六輪銀杏", level:2, parent:"mon-of-icho-ring-6fold", title_en:"Six Encircled Icho Rings", title_md:"環內六輪銀杏", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-icho-ring-6fold-shell", md:"龜甲內六輪銀杏", level:2, parent:"mon-of-icho-ring-6fold", title_en:"Six Shelled Icho Rings", title_md:"龜甲內六輪銀杏", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	
	{en:"mon-of-tsubaki", md:"椿", level:1, parent:null, title_en:"Tsubaki", title_md:"椿", desc:"椿花象徵謙敬溫和、乾淨俐落。", desc_inherit:false, tags:"tsubaki", tags_inherit:false},
	{en:"mon-of-tsubaki-o", md:"環內椿", level:2, parent:"mon-of-tsubaki", title_en:"Encircled Tsubaki", title_md:"環內椿", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
	{en:"mon-of-tsubaki-3split-o", md:"環內三分割椿", level:2, parent:"mon-of-tsubaki", title_en:"Tripartite Tsubakies", title_md:"環內三分割椿", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
	{en:"mon-of-tsubaki-feather-3split-o", md:"環內三分割箭羽椿", level:2, parent:"mon-of-tsubaki", title_en:"Encircled Tripartite Tsubakies And Feather", title_md:"環內三分割箭羽椿", desc:"", desc_inherit:false, tags:"tsubaki,feather", tags_inherit:false},
	{en:"mon-of-tsubaki-holding", md:"環抱椿", level:2, parent:"mon-of-tsubaki", title_en:"Holding Tsubaki", title_md:"環抱椿", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
	{en:"mon-of-tsubaki-holding-o", md:"環內環抱椿", level:2, parent:"mon-of-tsubaki", title_en:"Encircled Holding Tsubaki", title_md:"環內環抱椿", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
	{en:"mon-of-inori-tsubaki", md:"祈椿", level:2, parent:"mon-of-tsubaki", title_en:"Inori Tsubaki", title_md:"祈椿", desc:"椿花象徵謙敬溫和、乾淨俐落，兩枝花環抱著中央的椿，代表來自家族的祝福與祈許。是本站站主的個人紋章。", desc_inherit:false, tags:"tsubaki", tags_inherit:false},
	{en:"mon-of-inori-tsubaki-o", md:"環內祈椿", level:2, parent:"mon-of-inori-tsubaki", title_en:"Encircled Inori Tsubaki", title_md:"環內祈椿", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-inori-tsubaki-carved", md:"石刻祈椿", level:2, parent:"mon-of-inori-tsubaki", title_en:"Stone-Carving Inori Tsubaki", title_md:"石刻祈椿", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-tsubaki-ko", md:"柯椿", level:2, parent:"mon-of-tsubaki", title_en:"Tsubaki in Ko", title_md:"柯椿", desc:"柯字的紋章化設計，並在口字內擺一朵椿花。", desc_inherit:false, tags:"tsubaki,ko", tags_inherit:false},
	
	{en:"mon-of-kikyo-3fold-feather", md:"三枝箭羽桔梗", level:1, parent:null, title_en:"Triple Kikyo And Feather", title_md:"三枝箭羽桔梗", desc:"", desc_inherit:false, tags:"kikyo,feather", tags_inherit:false},
	{en:"mon-of-kikyo-3fold-feather-o", md:"環內三枝箭羽桔梗", level:2, parent:"mon-of-kikyo-3fold-feather", title_en:"Encircled Triple Kikyo And Feather", title_md:"環內三枝箭羽桔梗", desc:"三朵向外綻放的劍氣桔梗，以及朝向紋中央的箭羽。", desc_inherit:true, tags:"", tags_inherit:true},

	{en:"mon-of-ko", md:"柯", level:1, parent:null, title_en:"Ko", title_md:"柯", desc:"柯字的紋章化設計。", desc_inherit:false, tags:"ko", tags_inherit:false},
	
	{en:"mon-of-lily", md:"百合", level:1, parent:null, title_en:"Lily", title_md:"百合", desc:"百合象徵純潔、崇高與堅忍不拔的精神。", desc_inherit:false, tags:"lily", tags_inherit:false},
	{en:"mon-of-lily-o", md:"環內百合", level:2, parent:"mon-of-lily", title_en:"Encircled Lily", title_md:"環內百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-12petal", md:"十二重瓣百合", level:2, parent:"mon-of-lily", title_en:"Twelve-Petaled Lily", title_md:"十二重瓣百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-12petal-o", md:"環內十二重瓣百合", level:2, parent:"mon-of-lily", title_en:"Encircled Twelve-Petaled Lily", title_md:"環內十二重瓣百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-24petal", md:"二十四重瓣百合", level:2, parent:"mon-of-lily", title_en:"Twenty-Four-Petaled Lily", title_md:"二十四重瓣百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-24petal-o", md:"環內二十四重瓣百合", level:2, parent:"mon-of-lily", title_en:"Encircled Twenty-Four-Petaled Lily", title_md:"環內二十四重瓣百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-soft", md:"柔百合", level:2, parent:"mon-of-lily", title_en:"Soft Lily", title_md:"柔百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-soft-o", md:"環內柔百合", level:2, parent:"mon-of-lily", title_en:"Encircled Soft Lily", title_md:"環內柔百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-12petal-soft", md:"十二重瓣柔百合", level:2, parent:"mon-of-lily", title_en:"Twelve-Petaled Soft Lily", title_md:"十二重瓣柔百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-12petal-soft-o", md:"環內十二重瓣柔百合", level:2, parent:"mon-of-lily", title_en:"Encircled Twelve-Petaled Soft Lily", title_md:"環內十二重瓣柔百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-24petal-soft", md:"二十四重瓣柔百合", level:2, parent:"mon-of-lily", title_en:"Twenty-Four-Petaled Soft Lily", title_md:"二十四重瓣柔百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-24petal-soft-o", md:"環內二十四重瓣柔百合", level:2, parent:"mon-of-lily", title_en:"Encircled Twenty-Four-Petaled Soft Lily", title_md:"環內二十四重瓣柔百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	
	{en:"mon-of-lily-curved", md:"折角百合", level:2, parent:"mon-of-lily", title_en:"Curved Lily", title_md:"折角百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-curved-o", md:"環內折角百合", level:2, parent:"mon-of-lily-curved", title_en:"Encircled Curved Lily", title_md:"環內折角百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	
	{en:"mon-of-lily-kumiaikaku", md:"組合角內百合", level:2, parent:"mon-of-lily", title_en:"Ensquared Lily", title_md:"組合角內百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-12petal-kumiaikaku", md:"組合角內十二重瓣百合", level:2, parent:"mon-of-lily-kumiaikaku", title_en:"Ensquared Twelve-Petaled Lilies", title_md:"組合角內十二重瓣百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-24petal-kumiaikaku", md:"組合角內二十四重瓣百合", level:2, parent:"mon-of-lily-kumiaikaku", title_en:"Ensquared Twenty-Four-Petaled Lilies", title_md:"組合角內二十四重瓣百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	
	{en:"mon-of-lily-2overlap", md:"二重疊百合", level:2, parent:"mon-of-lily", title_en:"Two Overlapping Lilies", title_md:"二重疊百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-2overlap-o", md:"環內二重疊百合", level:2, parent:"mon-of-lily-2overlap", title_en:"Encircled Two Overlapping Lilies", title_md:"環內二重疊百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	
	{en:"mon-of-lily-3fold", md:"三枝百合", level:2, parent:"mon-of-lily", title_en:"Trifold Lilies", title_md:"三枝百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-3fold-o", md:"環內三枝百合", level:2, parent:"mon-of-lily-3fold", title_en:"Encircled Trifold Lilies", title_md:"環內三枝百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-12petal-3fold", md:"三枝十二重瓣百合", level:2, parent:"mon-of-lily-3fold", title_en:"Tripartite Twelve-Petaled Lilies", title_md:"三枝十二重瓣百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-12petal-3fold-o", md:"環內三枝十二重瓣百合", level:2, parent:"mon-of-lily-3fold", title_en:"Encircled Tripartite Twelve-Petaled Lilies", title_md:"環內三枝十二重瓣百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-3fold-2", md:"三枝百合之二", level:2, parent:"mon-of-lily-3fold", title_en:"Trifold Lilies II", title_md:"三枝百合之二", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-3fold-2-o", md:"環內三枝百合之二", level:2, parent:"mon-of-lily-3fold", title_en:"Encircled Trifold Lilies II", title_md:"環內三枝百合之二", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	
	{en:"mon-of-lily-3split", md:"三分割百合", level:2, parent:"mon-of-lily", title_en:"Tripartite Lilies", title_md:"三分割百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-3split-o", md:"環內三分割百合", level:2, parent:"mon-of-lily-3split", title_en:"Encircled Tripartite Lilies", title_md:"環內三分割百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-12petal-3split", md:"三分割十二重瓣百合", level:2, parent:"mon-of-lily-3split", title_en:"Tripartite Twelve-Petaled Lilies", title_md:"三分割十二重瓣百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-12petal-3split-o", md:"環內三分割十二重瓣百合", level:2, parent:"mon-of-lily-3split", title_en:"Encircled Tripartite Twelve-Petaled Lilies", title_md:"環內三分割十二重瓣百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-24petal-3split", md:"三分割二十四重瓣百合", level:2, parent:"mon-of-lily-3split", title_en:"Tripartite Twenty-Four-Petaled Lilies", title_md:"三分割二十四重瓣百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-24petal-3split-o", md:"環內三分割二十四重瓣百合", level:2, parent:"mon-of-lily-3split", title_en:"Encircled Tripartite Twenty-Four-Petaled Lilies", title_md:"環內三分割二十四重瓣百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-3split-orchid-within", md:"三分割百合內蘭", level:2, parent:"mon-of-lily-3split", title_en:"Orchid within Tripartite Lilies", title_md:"三分割百合內蘭", desc:"", desc_inherit:true, tags:"lily,orchid", tags_inherit:false},
	{en:"mon-of-lily-3split-orchid-within-o", md:"環內三分割百合內蘭", level:2, parent:"mon-of-lily-3split-orchid-within", title_en:"Encircled Orchid within Tripartite Lilies", title_md:"環內三分割百合內蘭", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	
	{en:"mon-of-lily-3split-feather-o", md:"環內三分割箭羽百合", level:2, parent:"mon-of-lily", title_en:"Encircled Tripartite Lilies with Feather", title_md:"環內三分割箭羽百合", desc:"百合象徵純潔、崇高與堅忍不拔的精神。<br><br>箭羽象徵能武，代表捍衛所愛的決心。", desc_inherit:false, tags:"lily,feather", tags_inherit:false},
	{en:"mon-of-lily-12petal-3split-feather-o", md:"環內三分割十二重瓣箭羽百合", level:2, parent:"mon-of-lily-3split-feather-o", title_en:"Encircled Tripartite Twelve-Petaled Lilies with Feather", title_md:"環內三分割十二重瓣箭羽百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-24petal-3split-feather-o", md:"環內三分割二十四重瓣箭羽百合", level:2, parent:"mon-of-lily-3split-feather-o", title_en:"Encircled Tripartite Twenty-Four-Petaled Lilies with Feather", title_md:"環內三分割二十四重瓣箭羽百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	
	{en:"mon-of-lily-12petal-upon-sakura", md:"櫻上十二重瓣百合", level:2, parent:"mon-of-lily", title_en:"Tripartite Twelve-Petaled Lilies upon Sakura", title_md:"櫻上十二重瓣百合", desc:"", desc_inherit:true, tags:"lily,sakura", tags_inherit:false},
	{en:"mon-of-lily-12petal-upon-sakura-o", md:"環內櫻上十二重瓣百合", level:2, parent:"mon-of-lily-12petal-upon-sakura", title_en:"Encircled Tripartite Twelve-Petaled Lilies upon Sakura", title_md:"環內櫻上十二重瓣百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},

	{en:"mon-of-lily-24petal-soft-kaohsiung", md:"二十四重瓣高字柔百合", level:2, parent:"mon-of-lily-24petal-soft", title_en:"Kaohsiung in Twenty-Four-Petaled Soft Lily", title_md:"二十四重瓣高字柔百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-24petal-soft-carved-kaohsiung", md:"石刻二十四重瓣高字柔百合", level:2, parent:"mon-of-lily-24petal-soft", title_en:"Stonr-Carving Kaohsiung in Twenty-Four-Petaled Soft Lily", title_md:"石刻二十四重瓣高字柔百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-24petal-soft-tainan", md:"二十四重瓣南字柔百合", level:2, parent:"mon-of-lily-24petal-soft", title_en:"Tainan in Twenty-Four-Petaled Soft Lily", title_md:"二十四重瓣南字柔百合", desc:"二十四重瓣南字柔百合", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-24petal-soft-carved-tainan", md:"石刻二十四重瓣南字柔百合", level:2, parent:"mon-of-lily-24petal-soft", title_en:"Stonr-Carving Tainan in Twenty-Four-Petaled Soft Lily", title_md:"石刻二十四重瓣南字柔百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-24petal-soft-chiayi", md:"二十四重瓣嘉字柔百合", level:2, parent:"mon-of-lily-24petal-soft", title_en:"Chiayi in Twenty-Four-Petaled Soft Lily", title_md:"二十四重瓣嘉字柔百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-24petal-soft-carved-chiayi", md:"石刻二十四重瓣嘉字柔百合", level:2, parent:"mon-of-lily-24petal-soft", title_en:"Stonr-Carving Chiayi in Twenty-Four-Petaled Soft Lily", title_md:"石刻二十四重瓣嘉字柔百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-24petal-soft-penghu", md:"二十四重瓣澎字柔百合", level:2, parent:"mon-of-lily-24petal-soft", title_en:"Penghu in Twenty-Four-Petaled Soft Lily", title_md:"二十四重瓣澎字柔百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-lily-24petal-soft-carved-penghu", md:"石刻二十四重瓣澎字柔百合", level:2, parent:"mon-of-lily-24petal-soft", title_en:"Stonr-Carving Penghu in Twenty-Four-Petaled Soft Lily", title_md:"石刻二十四重瓣澎字柔百合", desc:"", desc_inherit:true, tags:"", tags_inherit:true},

	{en:"mon-of-orchid", md:"蘭", level:1, parent:null, title_en:"Orchid", title_md:"蘭", desc:"蘭花象徵繁榮、典雅與力量，是充滿了祝福的花。", desc_inherit:false, tags:"orchid", tags_inherit:false},
	{en:"mon-of-orchid-o", md:"環內蘭", level:2, parent:"mon-of-orchid", title_en:"Encircled Orchid", title_md:"環內蘭", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-orchid-2", md:"蘭之二", level:2, parent:"mon-of-orchid", title_en:"Orchid II", title_md:"蘭之二", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-orchid-2-o", md:"環內蘭之二", level:2, parent:"mon-of-orchid", title_en:"Encircled Orchid II", title_md:"環內蘭之二", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-orchid-3", md:"蘭之三", level:2, parent:"mon-of-orchid", title_en:"Orchid III", title_md:"蘭之三", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-orchid-3-o", md:"環內蘭之三", level:2, parent:"mon-of-orchid", title_en:"Encircled Orchid III", title_md:"環內蘭之三", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-orchid-4", md:"蘭之四", level:2, parent:"mon-of-orchid", title_en:"Orchid IV", title_md:"蘭之四", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-orchid-4-o", md:"環內蘭之四", level:2, parent:"mon-of-orchid", title_en:"Encircled Orchid IV", title_md:"環內蘭之四", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	
	{en:"mon-of-papilio-thaiwanu", md:"台灣鳳蝶", level:1, parent:null, title_en:"Papilio Thaiwanu", title_md:"台灣鳳蝶", desc:"", desc_inherit:false, tags:"butterfly", tags_inherit:false},
	{en:"mon-of-papilio-thaiwanu-o", md:"環內台灣鳳蝶", level:2, parent:"mon-of-papilio-thaiwanu", title_en:"Encircled Papilio Thaiwanu", title_md:"環內台灣鳳蝶", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
	
	{en:"mon-of-sakura-sword", md:"劍山櫻", level:1, parent:null, title_en:"Sakura with Five Swords", title_md:"劍山櫻", desc:"", desc_inherit:false, tags:"sakura,sword", tags_inherit:false},
	{en:"mon-of-sakura-sword-o", md:"環內劍山櫻", level:2, parent:"mon-of-sakura-sword", title_en:"Encircled Sakura with Five Swords", title_md:"環內劍山櫻", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
	
	{en:"mon-of-tiliaceus", md:"槿", level:1, parent:null, title_en:"Tiliaceus", title_md:"槿", desc:"", desc_inherit:false, tags:"tiliaceus", tags_inherit:false},
	{en:"mon-of-tiliaceus-o", md:"環內槿", level:2, parent:"mon-of-tiliaceus", title_en:"Encircled Tiliaceus", title_md:"環內槿", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
   
	{en:"mon-of-snowblue", md:"雪藍", level:1, parent:null, title_en:"Snowblue", title_md:"雪藍", desc:"", desc_inherit:false, tags:"snowblue", tags_inherit:false},
	{en:"mon-of-snowblue-o", md:"環內雪藍", level:2, parent:"mon-of-snowblue", title_en:"Encircled Snowblue", title_md:"環內雪藍", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
	{en:"mon-of-snowblue-3split", md:"三分割雪藍", level:2, parent:"mon-of-snowblue", title_en:"Tripartite Snowblues", title_md:"三分割雪藍", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
	{en:"mon-of-snowblue-3split-o", md:"環內三分割雪藍", level:2, parent:"mon-of-snowblue", title_en:"Encircled Tripartite Snowblues", title_md:"環內三分割雪藍", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
	{en:"mon-of-snowblue-10fold", md:"十重瓣雪藍", level:2, parent:"mon-of-snowblue", title_en:"Ten-Petaled Snowblue", title_md:"十重瓣雪藍", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
	{en:"mon-of-snowblue-10fold-o", md:"環內十重瓣雪藍", level:2, parent:"mon-of-snowblue", title_en:"Encircled Ten-Petaled Snowblue", title_md:"環內十重瓣雪藍", desc:"", desc_inherit:false, tags:"", tags_inherit:true},

	{en:"mon-of-milii", md:"虎刺", level:1, parent:null, title_en:"Milli", title_md:"虎刺", desc:"", desc_inherit:false, tags:"milii", tags_inherit:false},
	{en:"mon-of-milii-o", md:"環內虎刺", level:2, parent:"mon-of-milii", title_en:"Encircled Milli", title_md:"環內虎刺", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	{en:"mon-of-milii-2-o", md:"虎刺之二", level:2, parent:"mon-of-milii", title_en:"Milli II", title_md:"虎刺之二", desc:"", desc_inherit:true, tags:"", tags_inherit:true},
	
	{en:"mon-of-succulent-holding", md:"環抱多肉植物", level:1, parent:null, title_en:"Holding Succulent", title_md:"環抱多肉植物", desc:"", desc_inherit:false, tags:"succulent", tags_inherit:false},
	{en:"mon-of-succulent-holding-o", md:"環內環抱多肉植物", level:2, parent:"mon-of-succulent-holding", title_en:"Encircled Holding Succulent", title_md:"環內環抱多肉植物", desc:"", desc_inherit:false, tags:"", tags_inherit:true},
	
	{en:"mon-of-tai-upon-lily", md:"台字紋", level:1, parent:null, title_en:"Mon of Taiwan", title_md:"台字紋", desc:"台字紋是其中一個象徵台灣的符號，它精而厚重的線條承載著台灣的歷史。<br><br>支撐著台字紋的是台灣百合，象徵純潔、崇高與堅忍不拔的精神。", desc_inherit:false, tags:"lily,mon_of_tai", tags_inherit:false},
	{en:"mon-of-tai-upon-lily-o", md:"環內台字紋", level:2, parent:"mon-of-tai-upon-lily", title_en:"Encircled Mon of Taiwan", title_md:"環內台字紋", desc:"", desc_inherit:false, tags:"", tags_inherit:true},

	{en:"mon-of-tai-cloud", md:"台字祥雲", level:2, parent:"mon-of-tai-upon-lily", title_en:"Tai Cloud", title_md:"台字祥雲", desc:"台字祥雲代表吉祥平安在台灣。", desc_inherit:false, tags:"cloud,mon_of_tai", tags_inherit:false},
	
	{en:"mon-of-tai-thunder", md:"台字雷震", level:2, parent:null, title_en:"Tai Thunder", title_md:"台字雷震", desc:"「難知如陰，動如雷震。」<br><br>台字雷震代表保衛國疆的智慧與力量。", desc_inherit:false, tags:"thunder,mon_of_tai", tags_inherit:false},
	
	{en:"mon-of-whale-3fold", md:"三鯨", level:1, parent:null, title_en:"Three Whales", title_md:"三鯨", desc:"", desc_inherit:false, tags:"whale", tags_inherit:false},
	{en:"mon-of-whale-3fold-o", md:"環內三鯨", level:2, parent:"mon-of-whale-3fold", title_en:"Encircled Three Whales", title_md:"環內三鯨", desc:"", desc_inherit:false, tags:"", tags_inherit:true}
];
var monConfig = {
	dir:"/images/mons/",
	container:"#mon-ctn",
	type: "mon",
	width:150,
	height:150,
	imageClasses: "modal-trigger-image hover-zoom"
};
function getMonByEn(en) {
	for (var mon of monImages) {
		if (mon.en === en) {
			return mon;
		}
	}
	return null;
}
function getMonsByParentName(parentName) {
	var mons = [];
	for (var mon of monImages) {
		if (mon.parent === parentName) {
			mons.push(mon);
		}
	}
	return mons;
}
function getNeighborMons(en) {
	var result = {
		prev: null,
		next: null
	};
	var thisIndex = monImages.findIndex(mon => mon.en === en);
	if (thisIndex -1 >= 0) {
		result.prev = monImages[thisIndex -1];
	}
	if (thisIndex +1 < monImages.length) {
		result.next = monImages[thisIndex +1];
	}
	return result;
}
function getMonChildrenCount(parentName) {
	var count = 0;
	for (var mon of monImages) {
		if (mon.parent === parentName) {
			count++;
		}
	}
	return count;
}
function getMonDesc(en) {
    var mon = getMonByEn(en);
    if (!mon) {
        return "";
    }
    if (mon.desc_inherit && mon.parent != null) {
        return getMonDesc(mon.parent);
    }
    if (mon.desc && mon.desc.length) {
        return mon.desc;
    }
    return "";
}
function getMonTags(en) {
    var mon = getMonByEn(en);
    if (!mon) {
        return "";
    }
    if (mon.tags_inherit && mon.parent != null) {
        return getMonTags(mon.parent);
    }
    if (mon.tags && mon.tags.length) {
        return mon.tags;
    }
    return "";
}
function getRelatedMons(en) {
    var relatedMons = [];
    var tags = getMonTags(en);
    if (!tags.length) {
        return relatedMons; // skip if this mon has no tags
    }
    var tagArray = tags.split(",");
    for (var mon of monImages) {
        if (mon.en == en) continue; // skip self

        var thisTags = getMonTags(mon.en);
        if (!thisTags.length) continue; // skip mons with no tags

        for (var tag of tagArray) {
            if (thisTags.indexOf(tag) == -1) continue; // skip mon that is not related
            relatedMons.push(mon);
            break;  // break if Mon is related
        }
    }
    return relatedMons;
}