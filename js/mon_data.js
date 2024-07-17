var monImages = [
	{en:"mon-of-5fortune-o", md:"五福", level:1, parent:null, title_en:"Mon of Five Fortunes", title_md:"五福", desc:"紋由五個福字組合而成。<br><br>五福有多種定義，其中一種便是「名譽」、「財富」、「長壽」、「健康」與「善終」。", desc_inherit:false},
	{en:"mon-of-5fortune-2-o", md:"五福之二", level:2, parent:"mon-of-5fortune-o", title_en:"Mon of Encircled Five Fortunes II", title_md:"五福之二", desc:"", desc_inherit:true},
	{en:"mon-of-5fortune-3-o", md:"五福之三", level:2, parent:"mon-of-5fortune-o", title_en:"Mon of Encircled Five Fortunes III", title_md:"五福之三", desc:"", desc_inherit:true},
	{en:"mon-of-5fortune-4-o", md:"五福之四", level:2, parent:"mon-of-5fortune-o", title_en:"Mon of Encircled Five Fortunes IV", title_md:"五福之四", desc:"", desc_inherit:true},

	{en:"mon-of-ajisai-3fold-o", md:"環內三瓣繡球", level:1, parent:null, title_en:"Mon of Encircled Trifold Ajisais", title_md:"三瓣繡球", desc:"", desc_inherit:false},
	
	{en:"mon-of-banboo-leaf", md:"五枚竹", level:1, parent:null, title_en:"Mon of Banboo Leaf", title_md:"五枚竹", desc:"竹有著謙虛、氣結與不屈的含意。", desc_inherit:false},
	{en:"mon-of-banboo-leaf-o", md:"環內五枚竹", level:2, parent:"mon-of-banboo-leaf", title_en:"Mon of Encircled Banboo Leaf", title_md:"環內五枚竹", desc:"", desc_inherit:false},
	
	{en:"mon-of-icho-ring-6fold", md:"六輪銀杏", level:1, parent:null, title_en:"Mon of Six Icho Ring", title_md:"六輪銀杏", desc:"", desc_inherit:false},
	{en:"mon-of-icho-ring-6fold-o", md:"環內六輪銀杏", level:2, parent:"mon-of-icho-ring-6fold", title_en:"Mon of Six Encircled Icho Rings", title_md:"環內六輪銀杏", desc:"", desc_inherit:false},
	{en:"mon-of-icho-ring-6fold-shell", md:"龜甲內六輪銀杏", level:2, parent:"mon-of-icho-ring-6fold", title_en:"Mon of Six Shelled Icho Rings", title_md:"龜甲內六輪銀杏", desc:"", desc_inherit:false},
	
	{en:"mon-of-tsubaki", md:"椿", level:1, parent:null, title_en:"Mon of Tsubaki", title_md:"椿", desc:"", desc_inherit:false},
	{en:"mon-of-tsubaki-o", md:"環內椿", level:2, parent:"mon-of-tsubaki", title_en:"Mon of Encircled Tsubaki", title_md:"環內椿", desc:"", desc_inherit:false},
	{en:"mon-of-tsubaki-3split-o", md:"環內三分割椿", level:2, parent:"mon-of-tsubaki", title_en:"Mon of Tripartite Tsubakies", title_md:"環內三分割椿", desc:"", desc_inherit:false},
	{en:"mon-of-tsubaki-feather-3split-o", md:"環內三分割箭羽椿", level:2, parent:"mon-of-tsubaki", title_en:"Mon of Encircled Tripartite Tsubakies And Feather", title_md:"環內三分割箭羽椿", desc:"", desc_inherit:false},
	{en:"mon-of-inori-tsubaki", md:"祈椿", level:2, parent:"mon-of-tsubaki", title_en:"Mon of Inori Tsubaki", title_md:"祈椿", desc:"椿花象徵謙敬溫和、乾淨俐落，兩枝花環抱著中央的椿，代表來自家族的祝福與祈許。是本站站主的個人紋章。", desc_inherit:false},
	{en:"mon-of-inori-tsubaki-o", md:"環內祈椿", level:2, parent:"mon-of-inori-tsubaki", title_en:"Mon of Encircled Inori Tsubaki", title_md:"環內祈椿", desc:"", desc_inherit:true},
	{en:"mon-of-tsubaki-ko", md:"柯椿", level:2, parent:"mon-of-tsubaki", title_en:"Mon of Tsubaki in Ko", title_md:"柯椿", desc:"柯字的紋章化設計，並在口字內擺一朵椿花。", desc_inherit:false},
	
	{en:"mon-of-kikyo-3fold-feather", md:"三枝箭羽桔梗", level:1, parent:null, title_en:"Mon of Triple Kikyo And Feather", title_md:"三枝箭羽桔梗", desc:"", desc_inherit:false},
	{en:"mon-of-kikyo-3fold-feather-o", md:"環內三枝箭羽桔梗", level:2, parent:"mon-of-kikyo-3fold-feather", title_en:"Mon of Encircled Triple Kikyo And Feather", title_md:"環內三枝箭羽桔梗", desc:"三朵向外綻放的劍氣桔梗，以及朝向紋中央的箭羽。", desc_inherit:true},

	{en:"mon-of-ko", md:"柯", level:1, parent:null, title_en:"Mon of Ko", title_md:"柯", desc:"柯字的紋章化設計。", desc_inherit:false},
	
	{en:"mon-of-lily", md:"百合", level:1, parent:null, title_en:"Mon of Lily", title_md:"百合", desc:"百合象徵純潔、崇高與堅忍不拔的精神。", desc_inherit:false},
	{en:"mon-of-lily-o", md:"環內百合", level:2, parent:"mon-of-lily", title_en:"Mon of Encircled Lily", title_md:"環內百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-3fold-o", md:"環內三枝百合", level:2, parent:"mon-of-lily", title_en:"Mon of Encircled Trifold Lilies", title_md:"環內三枝百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-3split", md:"三分割百合", level:2, parent:"mon-of-lily", title_en:"Mon of Tripartite Lilies", title_md:"三分割百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-3split-o", md:"環內三分割百合", level:2, parent:"mon-of-lily", title_en:"Mon of Encircled Tripartite Lilies", title_md:"環內三分割百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-3split-feather-o", md:"環內三分割箭羽百合", level:2, parent:"mon-of-lily", title_en:"Mon of Encircled Tripartite Lilies with Feather", title_md:"環內三分割箭羽百合", desc:"百合象徵純潔、崇高與堅忍不拔的精神。<br><br>箭羽象徵能武，代表捍衛所愛的決心。", desc_inherit:false},
	{en:"mon-of-lily-12petal", md:"十二重瓣百合", level:2, parent:"mon-of-lily", title_en:"Mon of Twelve-Petaled Lily", title_md:"十二重瓣百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-12petal-o", md:"環內十二重瓣百合", level:2, parent:"mon-of-lily", title_en:"Mon of Encircled Twelve-Petaled Lily", title_md:"環內十二重瓣百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-12petal-3split-o", md:"環內三分割十二重瓣百合", level:2, parent:"mon-of-lily", title_en:"Mon of Encircled Tripartite Twelve-Petaled Lilies", title_md:"環內三分割十二重瓣百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-12petal-3split-feather-o", md:"環內三分割十二重瓣箭羽百合", level:2, parent:"mon-of-lily", title_en:"Mon of Encircled Tripartite Twelve-Petaled Lilies with Feather", title_md:"環內三分割十二重瓣箭羽百合", desc:"百合象徵純潔、崇高與堅忍不拔的精神。<br><br>箭羽象徵能武，代表捍衛所愛的決心。", desc_inherit:false},
	{en:"mon-of-lily-12petal-upon-sakura", md:"櫻上十二重瓣百合", level:2, parent:"mon-of-lily", title_en:"Mon of Tripartite Twelve-Petaled Lilies upon Sakura", title_md:"櫻上十二重瓣百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-12petal-upon-sakura-o", md:"環內櫻上十二重瓣百合", level:2, parent:"mon-of-lily-12petal-upon-sakura", title_en:"Mon of Encircled Tripartite Twelve-Petaled Lilies upon Sakura", title_md:"環內櫻上十二重瓣百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-24petal", md:"二十四重瓣百合", level:2, parent:"mon-of-lily", title_en:"Mon of Twenty-Four-Petaled Lily", title_md:"二十四重瓣百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-24petal-o", md:"環內二十四重瓣百合", level:2, parent:"mon-of-lily", title_en:"Mon of Encircled Twenty-Four-Petaled Lily", title_md:"環內二十四重瓣百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-24petal-3split-o", md:"環內三分割二十四重瓣百合", level:2, parent:"mon-of-lily", title_en:"Mon of Encircled Tripartite Twenty-Four-Petaled Lilies", title_md:"環內三分割二十四重瓣百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-24petal-3split-feather-o", md:"環內三分割二十四重瓣箭羽百合", level:2, parent:"mon-of-lily", title_en:"Mon of Encircled Tripartite Twenty-Four-Petaled Lilies with Feather", title_md:"環內三分割二十四重瓣箭羽百合", desc:"百合象徵純潔、崇高與堅忍不拔的精神。<br><br>箭羽象徵能武，代表捍衛所愛的決心。", desc_inherit:false},

	{en:"mon-of-lily-soft", md:"柔百合", level:2, parent:"mon-of-lily", title_en:"Mon of Soft Lily", title_md:"柔百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-soft-o", md:"環內柔百合", level:2, parent:"mon-of-lily", title_en:"Mon of Encircled Soft Lily", title_md:"環內柔百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-12petal-soft", md:"十二重瓣柔百合", level:2, parent:"mon-of-lily", title_en:"Mon of Twelve-Petaled Soft Lily", title_md:"十二重瓣柔百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-12petal-soft-o", md:"環內十二重瓣柔百合", level:2, parent:"mon-of-lily", title_en:"Mon of Encircled Twelve-Petaled Soft Lily", title_md:"環內十二重瓣柔百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-24petal-soft", md:"二十四重瓣柔百合", level:2, parent:"mon-of-lily", title_en:"Mon of Twenty-Four-Petaled Soft Lily", title_md:"二十四重瓣柔百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-24petal-soft-o", md:"環內二十四重瓣柔百合", level:2, parent:"mon-of-lily", title_en:"Mon of Encircled Twenty-Four-Petaled Soft Lily", title_md:"環內二十四重瓣柔百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-24petal-soft-kaohsiung", md:"二十四重瓣高字柔百合", level:2, parent:"mon-of-lily-24petal-soft", title_en:"Mon of Kaohsiung in Twenty-Four-Petaled Soft Lily", title_md:"二十四重瓣高字柔百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-24petal-soft-tainan", md:"二十四重瓣南字柔百合", level:2, parent:"mon-of-lily-24petal-soft", title_en:"Mon of Tainan in Twenty-Four-Petaled Soft Lily", title_md:"二十四重瓣南字柔百合", desc:"二十四重瓣南字柔百合", desc_inherit:true},
	{en:"mon-of-lily-24petal-soft-chiayi", md:"二十四重瓣嘉字柔百合", level:2, parent:"mon-of-lily-24petal-soft", title_en:"Mon of Chiayi in Twenty-Four-Petaled Soft Lily", title_md:"二十四重瓣嘉字柔百合", desc:"", desc_inherit:true},
	{en:"mon-of-lily-24petal-soft-penghu", md:"二十四重瓣澎字柔百合", level:2, parent:"mon-of-lily-24petal-soft", title_en:"Mon of Penghu in Twenty-Four-Petaled Soft Lily", title_md:"二十四重瓣澎字柔百合", desc:"", desc_inherit:true},
	
	{en:"mon-of-tai-upon-lily", md:"百合上台字", level:2, parent:"mon-of-lily", title_en:"Mon of Tai upon Lily", title_md:"百合上台字", desc:"", desc_inherit:false},
	{en:"mon-of-tai-upon-lily-o", md:"環內百合上台字", level:2, parent:"mon-of-tai-upon-lily", title_en:"Mon of Encircled Tai upon Lily", title_md:"環內百合上台字", desc:"", desc_inherit:false},
	
	{en:"mon-of-papilio-thaiwanu", md:"台灣鳳蝶", level:1, parent:null, title_en:"Mon of Papilio Thaiwanu", title_md:"台灣鳳蝶", desc:"", desc_inherit:false},
	{en:"mon-of-papilio-thaiwanu-o", md:"環內台灣鳳蝶", level:2, parent:"mon-of-papilio-thaiwanu", title_en:"Mon of Encircled Papilio Thaiwanu", title_md:"環內台灣鳳蝶", desc:"", desc_inherit:false},
	
	{en:"mon-of-sakura-sword", md:"五劍山櫻", level:1, parent:null, title_en:"Mon of Sakura with Five Swords", title_md:"五劍山櫻", desc:"", desc_inherit:false},
	{en:"mon-of-sakura-sword-o", md:"環內五劍山櫻", level:2, parent:"mon-of-sakura-sword", title_en:"Mon of Encircled Sakura with Five Swords", title_md:"環內五劍山櫻", desc:"", desc_inherit:false},
   
	{en:"mon-of-snowblue", md:"雪藍", level:1, parent:null, title_en:"Mon of Snowblue", title_md:"雪藍", desc:"", desc_inherit:false},
	{en:"mon-of-snowblue-o", md:"環內雪藍", level:2, parent:"mon-of-snowblue", title_en:"Mon of Encircled Snowblue", title_md:"環內雪藍", desc:"", desc_inherit:false},
	{en:"mon-of-snowblue-3split", md:"三分割雪藍", level:2, parent:"mon-of-snowblue", title_en:"Mon of Tripartite Snowblues", title_md:"三分割雪藍", desc:"", desc_inherit:false},
	{en:"mon-of-snowblue-3split-o", md:"環內三分割雪藍", level:2, parent:"mon-of-snowblue", title_en:"Mon of Encircled Tripartite Snowblues", title_md:"環內三分割雪藍", desc:"", desc_inherit:false},
	{en:"mon-of-snowblue-10fold", md:"十重瓣雪藍", level:2, parent:"mon-of-snowblue", title_en:"Mon of Ten-Petaled Snowblue", title_md:"十重瓣雪藍", desc:"", desc_inherit:false},
	{en:"mon-of-snowblue-10fold-o", md:"環內十重瓣雪藍", level:2, parent:"mon-of-snowblue", title_en:"Mon of Encircled Ten-Petaled Snowblue", title_md:"環內十重瓣雪藍", desc:"", desc_inherit:false},
	
	{en:"mon-of-succulent-holding", md:"環抱多肉植物", level:1, parent:null, title_en:"Mon of Holding Succulent", title_md:"環抱多肉植物", desc:"", desc_inherit:false},
	{en:"mon-of-succulent-holding-o", md:"環內環抱多肉植物", level:2, parent:"mon-of-succulent-holding", title_en:"Mon of Encircled Holding Succulent", title_md:"環內環抱多肉植物", desc:"", desc_inherit:false},
	
	{en:"mon-of-tai-cloud", md:"台字祥雲", level:1, parent:null, title_en:"Mon of Tai Cloud", title_md:"台字祥雲", desc:"", desc_inherit:false},
	
	{en:"mon-of-tai-thunder", md:"台字震雷", level:1, parent:null, title_en:"Mon of Tai Thunder", title_md:"台字震雷", desc:"", desc_inherit:false},
	
	{en:"mon-of-whale-3fold", md:"三鯨", level:1, parent:null, title_en:"Mon of Three Whales", title_md:"三鯨", desc:"", desc_inherit:false},
	{en:"mon-of-whale-3fold-o", md:"環內三鯨", level:2, parent:"mon-of-whale-3fold", title_en:"Mon of Encircled Three Whales", title_md:"環內三鯨", desc:"", desc_inherit:false}
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