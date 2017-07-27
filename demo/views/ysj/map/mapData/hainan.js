(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports', 'echarts'], factory);
	} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
		factory(exports, require('echarts'));
	} else {
		factory({}, root.echarts);
	}
}(this, function(exports, echarts) {
	var log = function(msg) {
		if (typeof console !== 'undefined') {
			console && console.error && console.error(msg);
		}
	};
	if (!echarts) {
		log('ECharts is not Loaded');
		return;
	}
	if (!echarts.registerMap) {
		log('ECharts Map is not loaded');
		return;
	}
	echarts.registerMap('海南', {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"id": "469002",
			"properties": {
				"name": "琼海市",
				"cp": [110.466785, 19.246011],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@_OeUYY[MMEOEKAGIUocGcQÉ­FUBKFCH@LAB@@C@@@ABA@A@@AA@CAAAC@A@C@ADA@@BMOEGIQKEE@GFEHKLOJQ@OKDODQKOOKKAU@QGMGOGKGOK[KYESGIAMAACC@@A@A@A@ABAAGBGA@@AAA@A@@A@A@@@A@@@@A@ACAA@EAA@C@C@E@AAAACAA@A@C@AAC@A@CF@BA@A@A@AC@@A@C@@@A@@A@ACGIIECMEGCE@CDC@QAIEICYE@BA@A@@@CBADAFEFCDAD@BAB@BAB@BAB@BADABABCB@BA@@@AAAAAACAAAA@GB@@EA@@A@ABA@A@A@AAECA@A@A@A@ABABABAB@DBD@DBBBF@B@BABC@C@CBCAA@AAAA@I@E@CDEBABA@CACA@CAE@C@EBCBABAFCJCDEBCBCDAFA@CCIQAB@B@BAB@B@BABCBAD@BBDBF@DB@BBBB@@@BABABABABC@E@CBCBIN@DADCBEBEDCDAF@BGBAFCJAJFF@J@@BFBPAJAJCRAPBNERCRAHD@DDHHDDFHJLLT@P@NHN@FCHALDPHLJ@JKPONGRFVJZHJDHDNDN@F@CNALJ@NBJDLCJEPKL@JBJHJDJALEDANBRRNJRBJEFEFCJBHHDPCJGJCJ@LBLBJHLDDNBLBFJ@JALCLEFUHSJGFGDCNFJFJDP@DFXLJL@NALBFFBL@DCL@PLTHDHDP@JBHBNLBHJPHFHAFCPCHFFJDLBHHJHJFDLJLBN@VIL@JAHDFFBJBHJNLJJBRCTEPDVDHcFITCJCLMDGHKDK@QEQBGLGDKAQAIAMBKHKPGPCRHHFJFNJAHAPBJFPDDJANGDHBHJDLBPCPEFA¬Y"],
				"encodeOffsets": [
					[113388, 19844]
				]
			}
		}, {
			"type": "Feature",
			"id": "460100",
			"properties": {
				"name": "海口市",
				"cp": [110.33119, 20.031971],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@¢NDNBj@rCpI^OTGjG^@HBBBBBDDB\\PlRRPJhJ\\DC|K|Q¤kfGL@PDFAHGDEBG@@FEHCFAJGFCFIBABCBA@C@A@E@E@CAAAA@A@AB@DADADCJAHAFCFA@ADAB@B@@@H@@@B@@A@A@A@@FAD@BC@A@C@C@CBCBABAD@DABEDE@CDCBK@CCC@C@CAAB@B@D@F@B@B@BBBAHEDCD@B@BEBAB@@AB@@ABABA@CBAB@BABCBABCAEAC@A@AAC@ADCFCBE@CBKBC@CAEECEEAEBEFKB@HAFBFBFBF@D@J@DCBEHGBAJCBGACGCCCCAGCCG@C@@DCBCBI@GBGDE@CBAAA@AAACAICECAA@@@@@@E@A@@@@@A@GAC@@@@@C@EBED@DEHBD@BCBABAAACACEBEAC@ACAAAACCACC@CCCCACAAACCAAACBCA@CBEB@BBDBB@AC@@BAF@D@FBD@BA@CCAKAACBGAAEAEE@AAGEIAEAICCCAECAAAGAECEBEDEDEBIDAHALEJADE@IAAAA@A@@GBKCC@C@CBC@A@AAAAAAAAC@A@@@CAC@CBCCCCACDAFAJ@HDB@BABC@E@C@AC@ACAA@CDGBI@G@E@AA@@A@@@A@@BCDCBADABA@@DCDCFBDADA@@DBD@D@JAB@D@DCBCDADBD@H@F@D@@AAAA@ACC@CAAAECGAC@@ABA@CC@AAAABABA@@@A@CAA@AAABCBA@C@AAC@AAACAACAGCEAAECAA@CACA@@ACCCAAC@E@C@E@G@CAE@E@CBC@ADCDCACAAAC@CD@BBB@BA@C@@AC@ABEAGAE@CA@A@AAA@CIE@@AE@AAGCEDE@EACC@EC@CBCAEBCAA@A@ABADC@EAQAIACAG@ECG@EDC@EBCDAHCDEDC@E@CAE@@@BDAFDDDJBBBFBF@HBD@@BD@BAAA@C@EAI@E@C@CBCAAAAEA@ADCBCBABAB@DCBCDCBCBC@AB@B@DAD@DAD@D@D@DABC@A@E@A@CDEDA@EDABA@A@CAA@ECCC@CAC@ACAA@ABC@A@ABA@A@ABA@CBA@C@C@A@A@AC@AAADA@A@AAEACAAA@A@C@ABC@CDC@@B@@A@A@A@A@A@C@ABABABABE@CBABEBABAFCFAF@D@B@DBBBD@@BBBDBB@B@@@@A@@B@@@@ABA@A@A@@@@A@@AAA@@@@B@@A@@@@@@D@@@@@@A@@@@A@@A@A@A@@@@@A@@@A@@@A@@B@@A@@AA@@@@@A@@@@@@AA@@@@A@@A@@BA@@@@A@@A@A@@@@@@@A@@@@@@@A@@@@@ABA@@@@@@BA@@B@@@@AA@@@@A@@D@@@@@BA@@@@@A@@@@@@@@@@B@@@@@@@@AB@@@B@B@@@@@B@@@@@@@BA@@@@@@@@B@@@@@@@@@BB@@B@@@@@B@@@@AB@@B@@@@B@@@@A@@@A@@@@@@@BB@@@@@@@B@@@@@@@@AB@B@@A@@@@@@AA@A@A@@@@B@@@@@@@BA@@@A@@@@@@B@@@B@@@B@@@@@BA@@@@@A@@B@@@@@B@F@@A@@B@@@B@@@BADCDEDA@AD@HAD@FBHBL@H@DBFDFDD@D@BAF@BB@DBHDJFDFBDBFAF@@ABA@@B@@@B@D@@ABC@@B@BABAF@D@BABA@A@A@A@@BBB@@@BAB@BBB@BB@BB@@@BABA@@@AAA@A@A@@CAG@GACAAE@EBE@GBE@E@CBC@@AAACACBCBEDCBA@EAAAAAEACAKAEICCCGCGCCAACAEAABEBCBCBCBEBC@CAC@C@A@C@CAC@C@A@ACAAA@@AA@ABABE@CAAAC@C@@AAA@EBC@AC@EAG@EAE@E@ECG@ICCAGCE@GFCD@FABHF@B@D@F@DBDBB@DBDBB@BBBABABABAF@DC@G@E@IB@DAH@H@BDBBBBB@D@DDBBD@D@D@DBBDBD@BBB@BD@BBB@BBDDAB@DBABCBADADAD@FBFBD@D@BCDYLBDAFGJCRAFCPAB@@@B@@DHDH@D@D@FCB@D@FAF@FWRGBE@CAMB@FDDDDFAJ@BBF@AFAHAF@BABAAAAMCAAOFGDEBEAECEEICCCC@C@ABAB@BAB@F@BF@DBDBF@F@FA@D@BABAD@D@DBJ@HADABCBEBC@ABAD@B@BFHFDDBJD@DAD@BABA@A@C@A@@@A@CDCDEDEJABBHBFBBB@@@B@BA@@BCB@F@BDB@B@BB@@@@BB@@AB@@@B@@@BDABA@AFADCBABEB@@FADABGB@B@BBBD@@@B@D@B@DA@BABEDA@@AAAA@EBABA@A@AD@BBDA@B@FPDFBBBBAB@B@BAB@D@BBBB@@BD@D@AH@BAB@BBBBBAJAHA@CBACCAE@CBEBCAC@CDEHABA@C@@@A@A@@B@B@@@B@BBF@DBDABCBABCDmx"],
				"encodeOffsets": [
					[112750, 20508]
				]
			}
		}, {
			"type": "Feature",
			"id": "469001",
			"properties": {
				"name": "五指山市",
				"cp": [109.516662, 18.776921],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@A@ABCBGBEDEFABA@A@@@@AACA@AAA@C@C@A@G@A@ABADCDA@ABC@A@CBAB@BABABCDCFE@ABADMBE@C@O@A@CDEFKDC@@HAPEDAB@DAB@BA@E@CBCBGDABCDAF@H@F@B@B@B@F@BA@@@ABEDEBC@EBA@@B@B@@@BBB@JDFAJ@B@BB@BB@@F@DB@@BJBF@@@HCDADCB@BABB@@B@@B@BB@@@BBN@@@BAB@D@DADAB@B@B@B@B@BB@BBB@@D@@BB@B@BB@@B@@BB@@@@@B@@BB@@BBDB@@BB@@AB@@AB@D@B@@@B@BBDBBBB@BAD@DADADCBAB@@ABBFBB@@BD@@@DADABADE@AD@DA^C@@BA@A@A@ACEECGGCACAA@EBC@C@CACAEGGECCAE@A@ABE@AHIBAFADCDCFEBABCBG@C@CAG@CAI@C@E@A@C@C@@BC@@@AA@KCE@I@A@E@A@C@A@C@@@CAAA@AAA@A@@AA@@AA@A@@BEDGFCDC@@@A@C@A@@AAA@@AA@AAA@AAAAAE@A@ABEDG@@AAAAGEAA@@BAB@BABA@ABABA@A@A@AACBCHG@ABA@E@ABAFGBADKFK@CBABCBCDG@A@A@@AAAA@E@EAC@AA@AAABCBC@A@A@AAE@E@EBCBCDA@EBC@A@A@AA@@EAA@C@CAA@CACBE@CBA@CACAA@AAA@ABA@@@A@@@C@@@A@@A@@BA@A@A@AAA@ACC@A@EAAA@CCAA@A@A@CBCBA@A@A@@CGAGAA@@A@@BA@EB@@A@AA@ACGCCAC@A@C@@A@ABEDEDCDAB@FABCBABA@ADA@A@A@@@AAA@EBA@A@AFCHABABABA@ABA@@B@FAHABA@CBCBA@E@A@C@AB@BABBFBBBBFBD@B@B@D@B@B@@DBFBJ@F@BAB@@A@CBEBCBCAEA@@A@CBCBA@C@A@@@@@@A@@@@B@B@@@@@@A@A@@@ACCCACAIACCAA@A@E@AA@ECAAAAAE@EAAACAAAACAGACAAAGC@A@A@C@CDABA@CDIBKDG@AAA@@CA@AAC@C@ABABABABCDGDA@C@@@ACAC@KAC@@AAC@CAACCA@C@C@CBABC@CBABA@AB@@A@CAGACAMEEAC@C@E@C@AB@@C@E@CAC@ABAB@BA@E@C@AB@BABA@A@E@A@A@CBEBABA@CCEEAC@@AEAGEKCCCCEECAAAC@E@C@G@A@E@AACBA@C@@@@B@@AB@@@BAFABA@A@ABEFCDADAD@BBLBHDL@F@HAHEHED@@E@G@ABAB@B@DCHEFEFONIFKRAF@LAPBHDDBD@DAFCFAFCP@BBBBBD@@DABABCFAF@LBFDBHA@@B@BBA@@BCB@B@D@FAD@FAHAH@BBD@B@B@BABABAB@B@F@D@B@BBBDBBDBBBH@BBDDB@@@D@D@F@B@@AB@BBB@@@F@B@@DB@@BB@B@B@BB@BBDBDDDBBDBB@B@BABADEFCFCDEHCFEBABA@A@A@C@ABEBC@A@CB@@@@@B@@BBBB@@@@B@@@B@@B@@@@@B@@@@@@@@@BA@@@@@A@@@A@A@@@@@@@@B@@@@@@B@@@B@BB@@BB@@@@@B@@@B@BA@@BA@@BA@@BAB@@@@@@A@@@@B@B@@@@@B@@@BB@@B@@@B@@@@AB@@AB@B@@A@@B@@AB@@AB@@@@@B@@AB@@@B@@@B@@AB@BA@@B@@@@AB@@@@ABA@@@A@@AA@@@AB@@@@A@A@@@@@@@EH@B@@@@D@BB@@@B@BCD@DBBBDBBJDFDBBBD@F@BBB@BBBD@B@D@B@BB@@B@@B@DLCJAB@DCBCBCBABAB@B@DBDBFBFDFD@@@D@B@B@D@@@BBBB@DBB@BBB@@BBBB@@@BBB@@@B@B@B@B@B@BBHFHFBBB@BBB@@@@@@BABAD@@@BB@@BDDDD@BBDDDB@BB@@DBBBB@BB@BBDBDBB@DB@BBB@B@B@B@DAD@D@B@FBF@BBFBBBB@B@B@D@@@DBD@DBBBBDBD@DBHBFBPFR@HBBBB@@BADABCBAB@BAB@F@FBFBHDDBD@B@BADADAB@DAH@B@BBDDB@@@B@DAD@DAD@HD"],
				"encodeOffsets": [
					[112153, 19488]
				]
			}
		}, {
			"type": "Feature",
			"id": "460400",
			"properties": {
				"name": "儋州市",
				"cp": [109.576782, 19.517486],
				"childNum": 2
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@AAACAACAEACCAA@A@CBABACGAC@CDE@A@ACAACAC@KBEBCFCBA@CAEQMEKEEMOMGGKCIAM@EHGHAJ@H@D@BABC@CAE@G@CBCACAEAI@EBIBEFCB@@ABCB@DAF@@ABA@A@C@A@C@A@AEKACA@A@A@C@CBCBABABC@EA@@AA@AB@BCBG@A@@@CAAC@@B@@A@@@A@CAC@A@A@CAC@ACCACAGDC@EB@BC@IJCDA@@@ABE@GAA@A@CACAC@@@A@GACAAACAAAGCC@C@C@C@EDA@A@A@CAICCAC@CC@AAA@C@A@ABABADABA@@BA@A@A@ACC@A@E@CAE@ABABABCBABA@@BAAA@ACGACAEBC@EDAHABAB@BBBBB@D@@@D@@@B@@@B@BAB@@@BA@@@@B@@@@BBBBBB@D@HA@ABCB@B@HBF@B@F@BABBD@F@@@FA@@@@AAAA@A@ADCBA@C@@@AB@@@DBBBBBB@B@B@@@@A@C@CBCBA@CBA@@BABA@@@AA@AAAA@@@@@AB@BK@E@G@EAEAICGEIAEACACCACEAEAGAG@ADCBABAHS@CBE@ABABE@E@K@GAG@I@IAEAAACCAAA@@@GACCCAA@@ACAA@A@C@AAC@A@A@ACAACAAAA@C@AAC@AAEKNITET@B@BCBEBEAGCEAE@IAUAAAA@E@A@AB@FAB@BCBCDCBEDABORAB@DAN@F@DAB@F@F@F@F@B@BA@EBEBC@EAAA@CAAAE@AE@CCAAAA@@A@CBABAFAD@FAHADCDCDAD@DABIDABABCD@BEBAD@DCBCFADCDAF@B@BABC@ABADABAFAHIDAF@DADE@AAAACCGAA@C@@ACA@@AAC@CCCAEAA@@@CAAAA@A@A@@@AB@BABDBB@BBABG@CBQEGAGACACACAEBMDE@AB@@@BB@FJ@@DLBDF@D@@@D@DAB@AH@B@DHDBF@F@DHFFADBB@AJBDFH@DC@CHBFAB@BFDH@@BB@@BBB@B@BADABABCBC@A@A@@@@B@D@FCBCBAB@BCHIJAFHFFFAFEDEHAFC@IIQCKBI@EGEIGICCEMBGBGEEECKGEEIEA@@@AB@@A@ABA@ABC@@@A@ABAB@ACA@AA@A@@@A@A@@@A@A@C@CCAAAAAACBCBA@@AC@E@CBABA@A@ABCBAB@BB@@BB@@@@BAB@@ABA@@BAB@B@@BB@B@B@B@B@@@@AB@@A@CBA@@@AB@@@@@@AA@@A@@@@@@@A@@@@@@@A@@A@@@@@@@@A@@@A@@B@BAB@@@@@BA@@@@@@@A@@B@@AB@@@@A@A@@@@@@A@@@AA@A@@B@@@B@@@B@@A@@@@@A@@@A@@@@A@@BA@@@@B@@A@@@A@A@A@@@A@@A@CC@AA@AB@B@B@B@@A@A@@@@@AC@@CA@@@@A@@B@@@@B@@B@D@@AB@@@@AA@CA@@@A@CBA@A@@BAB@B@BAF@DABADABABAD@@EBC@ABABABCBA@@@A@AAAC@@A@@BAB@BBB@@AB@DABAB@@AA@@@A@@@A@@CAA@A@@@AA@A@A@ACC@@@@A@@BAB@D@BA@@B@@A@@@@@AA@A@A@A@@ACA@@@A@@@@@@@@AABC@AB@@@B@B@D@@A@@BAB@@@@@B@@AB@BCB@@A@AA@@AA@A@C@@BE@@@A@CACA@A@@@A@@@A@A@C@A@A@A@A@A@A@C@@A@@@AB@BABA@@@A@AA@A@@@A@EBC@C@A@@A@@BE@A@@AA@@ABCBA@EBEF@B@DAB@@A@A@IAA@A@ADAB@BABAB@@CAA@ABC@A@AA@A@AA@A@A@@B@BADA@@@CACAAA@A@A@AAAAAA@C@C@E@ABADADABABCDEBABCBABC@A@AAC@AAEAA@CAAAC@A@CBCBABADABA@AB@B@BBD@B@H@BBDBB@@DHFFJDJHGPI@IAI@K@IBEFGNAFINGBGDGFCHAJKTEHIACCAKCEA@AAA@ADA@ADCBABGAE@G@E@CBCDEBCHEB@@CBEDEBGBGBI@C@A@E@A@GBG@EEAGCK@M@GBGFGFKBCBIAGCIGCEEIFEBGBIEEAGEGCG@E@KBGDED@BBD@HAFCB@DCHADAJDB@BABEBABABABAFAJAL@DA@C@EBC@GDCBA@A@CBA@ADAB@DADCFCBEBEBE@CACAA@CBEHWvTVXRLFhRRNRNXPXhN\\XjNPPR^NXHhDRDNLZ`DN@HMbELCL@XBL@PFLJRJJPHPH\\LFHDP@HDFJNLNJFPJL@HAHAFBPJBB@B@F@DDHBF@B@R@NFLDBF@LALED@D@BB@FADBFBBFDXJD@H@F@D@hIFAFARMDGFAJ@JBN@IQ Y¸_PEDID]BGBKAU@EAO@KBIDMDODKHEJANAJEHU@G@@@@AGAEBA@I@MAGCECC@EECA@KDBIAAIEEECCEA@@@@CAG@GFADABC@@IAMDIDEB@BADBB@D@DEJS@OEEHEPIDGFMEGCEAGHAF@VJJOHADEN@DCDBDFBBN@JBF@DCFID@@FFDBADEFBH@D@DBD@B@BAF@D@FB@ASECCEIBEAIJACGDA@ABCAADE@A@BBBAJB@DEDE@AACF@@CB@B@B@@A@AAABABA@BA@@DBBB@ABCF@@AB@D@@DAFADCBA@A@@BB@@@C@A@A@@BAAAB@B@@F@@B@BC@CB@B@FEBBCDCBADBBD@@EDABBFAF@B@@ABCBADC@@@@BABCFAJJRJREBCB@B@FB@@@@@@@@AB@@AB@@CBAB@@A@@@A@@@B@BB@@@B@@@@BA@ABA@@BABADAB@BB@BB@@B@@@BC@@@@@B@B@B@B@@BBD@BBA@AA@@A@@@ACCAA@C@@C@A@A@C@@ABADCFABCDBHCF@F@DAJHF@DBF@"],
					["@@MEGBID@FDHRJNBP@dEjIHGBCACCAEACA@CCCC@KBCBI@]JCBAD@BCBIAGA"]
				],
				"encodeOffsets": [
					[
						[112404, 20049]
					],
					[
						[112059, 20391]
					]
				]
			}
		}, {
			"type": "Feature",
			"id": "460200",
			"properties": {
				"name": "三亚市",
				"cp": [109.508268, 18.247872],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@B@BBBBDDBBAF@DDBHFDBFBBDBBRD@B@@@D@F@BDF@BFF@BBB@BBBB@B@@BB@@BDDAB@@BBHBLA@BB@@BBB@BBBDBBDB@B@B@BBB@B@BBD@@@B@B@B@@@BABBB@BBFFHBD@FAD@BA@AB@@@B@@BBB@BBDHPBB@DBBBBB@B@HEHCDADAHDDDFDDBDBBDDBHBBD@@@@@@@@@@@B@@@@@@@@@@BFJAHC@ABCBB@@@@@@@@@@B@@@@@@@@@@BBABD@BNDB@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@JCHA@BBBF@DDF@@@B@@@@B@@@@B@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@BA@@@@@@@@@@@@@@B@@@B@@@@@@@@@B@FCFKDCJAJAFBFDJF@BEFBDDBF@BF@BFFAHBH@NCPCD@@EBAF@JCJ@HBHBFDBDH@@@@@@@@@@@@@@@B@@@@@@@D@@@@@@@B@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@BFBBHD@FAHBHDFFDFBF@FCHANANA@@@@@@@@BB@@@@@@@@@@@@@@B@@@BB@@@@@@B@@@@@@BB@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@B@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@A@@B@@@@@@A@@B@@@@@@@@@@@@A@@@@B@@@@@@@@@B@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@B@@@@@@B@@@@@@LGJGDE@A@@@A@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@B@@@@A@@@@@@@AB@@A@@@@BC@@B@@A@@@@BA@@@@@@@A@@@@B@@@@@D@HBFAFCB@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@AA@@@@@@A@@@@@@BMDIB@B@@@@@@@@@@@@@@@BB@@@@FFDBDBDCDA@@JBFFDDBFBD@@@@@@@B@@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@@@BCJ@@CFCFAF@@@@@B@@@@@B@@@@@B@@B@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@B@@B@@@@@@BB@@@@@@BB@@@@@BB@@@@@@@@@@BB@@@BB@@@@B@@BBB@@DB@BBB@@@@@@@@@@B@@B@@@@BB@@@@BB@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@B@@@@B@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@B@@@@@@B@@@@@@@@@@B@@@@@@B@@@@@@@@@@@BB@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@BB@@@@@B@BB@@@@@@B@@@@@B@@B@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@@@@@@@B@@@@BB@@@@@B@@@@@@@@@@@@@B@@B@@@@@@@@@@@@B@@@@@@@@@@B@@BBB@@@@B@@@@@@@@@@B@@@@@@@@B@@@@@@@@@@B@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@B@@@@B@@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@BB@@BB@@@@@@@@B@@B@@@@@@@@@@B@@@@B@@@@@@@@@@@@B@@@@@@@@BB@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@@@@@@B@@B@@@@@@BB@@@@@B@@B@@@@@@@@B@@B@@@@@@BB@@@@@@BB@@@@@@@BB@@@@@@@@@@B@@B@@@@B@@@@@@@BB@@@@@@B@@@@B@@@@B@@@@@@@@@@BB@@@@@@@@@@@@@@@BB@@@@@@@@BB@@@@@@@B@@B@@@@@@B@@@@@@BB@@@@@@@@@@@@@B@@@@B@@@@@@@@B@@@@@B@@@@BB@@@B@@@@@B@@B@@@@@@B@@@@@@@B@@B@@@@@@B@@@@@@B@@@@B@@@@@@@@B@@B@@@@@@B@@@@B@@B@@@@@@@@BB@@@@@@@B@@@@@@@@B@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@B@@@@@@@@@@@@@CFC@ABA@O@AAC@A@@AC@ADABAACD@B@BC@C@A@ABCBA@CBADCBA@CBA@AAEBADCBABB@A@C@AAA@@CA@CBC@@BABAB@D@FDBB@B@BBBBAB@BBB@D@BAFAFEFCFAB@BADADCN@D@DBPDJED@BADAHCJBBAB@B@D@B@F@DDBADE@ABQDAFAJAB@NABAFAHCDCB@BEAC@OAA@ABG@A@EBA@A@OAAAAB@@CBE@A@A@AAAAAIGAACEAABCBEAACA@AAM@A@A@@CAAA@I@AJGBA@GAGA@@A@A@A@AAAGGA@ABA@AB@@AB@@A@@@@ABA@A@G@@BAB@B@@ABCFC@ALCB@BA@@@@@A@@BAB@@@BI@AJCBA@@@A@A@@@A@@@A@GBC@A@ABADA@@D@B@DA@@BBD@DBBAB@B@B@BBB@B@BA@@BBB@B@B@@AB@F@@A@@@AFAB@JEBA@BBBBBBB@BB@BBB@B@BB@@B@DB@@B@@AB@DCDEBA@@D@@@BB@@B@@@@AB@@@@AB@BAD@B@BB@@BBDB@@F@B@B@@@B@BB@@@BB@BBB@@@B@@AB@B@DBDBBD@@BB@@B@@AB@D@B@@@@@BBFD@@@B@BB@BB@A@AB@BCBABABCFADADBB@B@B@DABAB@B@@@B@BBHAB@B@@@@B@B@BBD@@B@BBFBB@B@@@@ADC@@DAFBFD@DABABCF@DBBB@BBBB@B@B@B@BH@B@D@@@@LAD@B@JFHFHDDB@FEDC@@FADCDE@@BB@HAJABAF@P@BDL@BBD@HFJDFDDDD@@@@BBB@B@D@BAB@@@@@BB@BABABAD@B@@@B@DBBBBAB@BAB@@@@@BBF@@@B@@@@@B@@B@H@B@D@NHFD@BBBBABA@@FBHDHBD@BBDRBD@L@@@D@B@DBB@AD@B@DBDD@ABADABAD@@@BABABEB@@A@KBA@@@@@@AAAAA@@CACACAE@AFMFEDAJEH@J@D@BCFGDEFCBCBEDI@EAEAA@@CC@A@@AA@CAA@A@@@@@@@A@E@GACACAAA@ICK@GAA@AC@E@GBCBC@ADC@CBEBI@EBAAAKCFGFBB@\\«UEQICCGUEmIYMaC]CgW¡QO]MeIgC_DUDO@QCMCGAOGSOOKYKWEWAUBMDWP_`IDO@}CUDMDGHGNENCBGHSH×VUJYV}~]JUH¯EM@©C_BUBKFEFELIjMlEHGDSD½DAQCKGEGGCIKAGBGDGHYl"],
				"encodeOffsets": [
					[111547, 18776]
				]
			}
		}, {
			"type": "Feature",
			"id": "460300",
			"properties": {
				"name": "三沙市",
				"cp": [112.34882, 16.831039],
				"childNum": 220
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@KCGDGHAJBJDDVFRHJB\\JRJTLXFZBRATGPMHS@KGKOKKCKCYGOIKGUGQCOAGFANALDFLALAP@HDDDHNLHNFJ@J@JDBJELO@IAMCKGOEQAOCQEGGKIIE"],
					["@@BAFAFCFEBGEKMAML@DCDAHRH"],
					["@@KDEFShGJKHGFGJGJIFCF@HBHDDDBXE^QbcJOHMDICMCGICEA"],
					["@@k^AXNV\\AnS`OFOGWMMO@UDKHGD"],
					["@@HBFADABC@CEAKBAJ"],
					["@@DBB@BCAAC@AD"],
					["@@AAOHCLAVHPNHZJ\\RZPfZXLRKDKOYUOWMYEUIWQ[_"],
					["@@ANAVNbRNZINOFYIYYOSBQH"],
					["@@AZN^RHXKH[@WOG]BOF"],
					["@@DJDJHJRJNHJHLBNBTFNBRBNFHCDALCNCRGHGHOAMKOOGKIKCK@M@KAMASAQCSCMBOHGHMHEJ"],
					["@@hNpJxHfFVF\\BL@PKHYCSOGcBiDa@_GYI[QYGSGU@cFGF@RNPbPND"],
					["@@yHEH@NAJDNLTTNPDLBLBTXHNDRBZDTDVDRARED@FQFSCQKMOQMIOG[GI©I"],
					["@@BE@SA_KISAIPIVI`DTVRTCPa"],
					["@@@SEagBKjTZfE@I"],
					["@@EAUAWDIR@TNNbX\\PVDROCWGWi_"],
					["@@RaOaa@YTRbbPFA"],
					["@@FA\\QBEAESUCCOBGD@DBfDFHD"],
					["@@ICEBC@@BDDFDFADE"],
					["@@GCGBA@ADDBFDHABE"],
					["@@VuKogEcbEld`dA"],
					["@@\\c]_gA]TClbRjK"],
					["@@AIGBCB@JH@FC"],
					["@@NOG[UKUHWVEZLNdETG"],
					["@@RG^WF]EISKWXSTEVVR"],
					["@@DHFDRGHGAoOCWNFj"],
					["@@LRVBVEbI@a_SUCQJILG`"],
					["@@PJHAJ@HW@@OCG@IAGV"],
					["@@@@LAJKCECGKDGD@JFJ"],
					["@@LJLBNIJMDMCIECKAMFGDIVBJ"],
					["@@@BLDNEJKCGIIICIFGFFV"],
					["@@Lg_aoNEh`\\jG"],
					["@@FHJFNABGGKICICEBBN"],
					["@@b^jFdOVgQcmCkFaPHf"],
					["@@xNRaMoiQQ`ATBb"],
					["@@nyBKISUIQIeA]FSTUZ@RBJFJPJJDHDFDPARD^A"],
					["@@\\RL@LABGEKOKUIMCODBNHHJD"],
					["@@QwQKU@YBELARIVLNXN\\AVEPE"],
					["@@BC@GCEAEICBIDEBIGMMEQ@OLOXMN@RNJVZRAPOLGJC"],
					["@@`@DABCRa@WAOCKGIM@S@O@UFEVHP@N@NBLFHJHJB"],
					["@@\\EDCBQAEKKKKAeEE@[T@FBNHTP`f`FB"],
					["@@JAPGRUDI@KCMUOEAw@GDCN@THTVRNHHB"],
					["@@lOQe[SeRHf`R"],
					["@@@J@RDHRNPFNDNARCNWDE@I@EAEGQACECGA}@GBCHAP"],
					["@@DRNVZNH@TENKBGD_@KMOUII@MDIFKJEHCN"],
					["@@BZ@NBDRNPFFAF@RKFQBKAMGIIEYCG@QHCF"],
					["@@BNTX\\RLBHCPcBM@gEYII@@]CWFILEXAb"],
					["@@DjHVJF\\DDA@@@UCwACEA]DIBAF"],
					["@@PbFDDDnB@@FCF]AKGI[KS@IDMNAF"],
					["@@LFHRDN@ROLOHs@kSWMEGBYVGLGVCX"],
					["@@@JTTVANELGn­HsGSecEA@@EHOªGNg"],
					["@@BjV\\lP|DbI@@@iK]wccKeD@@Sd"],
					["@@DHdNrAB@RSFMEWaaICiA@@EFKdEd"],
					["@@HL@@pR@@LEJK~BMAK@@]K@kNEJC "],
					["@@FHJ^NRB^EFEFMBc_{ICwBGD@@@@"],
					["@@DPLPLHZ@JODYESOMQE@@MHILCV"],
					["@@BNJLLDN@VBN@REV]TaRWDSBWCQOG[BYDWLOJWRITENAXA\\"],
					["@@BDNN\\PF@PC@@BCBEAUAGAEe[GAOBAB@j"],
					["@@BLFFnRPDPFXPZFlHZANARK@@ASIOoWkMmKkIQ@MHIJAH@J"],
					["@@@@LLXDRGXGPBL@JAHCHEHGHG@@AO@A[EQCWAWDI@QPSVCN"],
					["@@BR\\hH@V@VCLEL_DUCOYkECI@UFKD[jAR"],
					["@@DJXNrRxGFEB_EeEGmQQ@aLGFWr"],
					["@@DVP\\^PÌdJBXn\\JFxxXPÜbHH¬äHHŬètVLElWPQ^¯AW[cÛ}w[kWÏAYGMMCÑeŏ³ĉoÓAQBjQLEFkAP"],
					["@@@@JJLHLDP@VAvWÐ[LCLEFIDIKEYB}R¯rSVEHDN@N@JEN"],
					["@@BHFFFBVJF@FC^Q@@@EBCOiCCEE[GEBQPAF@j"],
					["@@Fr@FDBhJtADABGNyOoEEGCkCO@EB@@WtAJ"],
					["@@DTÎĂÒÒ|XJ¸@EM²]lQVQXUDS@@WQyHYF£RJ]@»QkI±IKÝċ·­uWOCWHEJ@|"],
					["@@HnNVLNÐ¦TNrRXCRC@@HQBS@KecsQM½YAyHUP@@Ar"],
					["@@DX^NüTFZ@JC@@JaG[[kyyesKUAMH@@SCZ"],
					["@@DNPP^\\HBFAfO@@DMAM@@omKCMAI@IFIT@L"],
					["@@BNRfHJ@@XAHADGDIBs@aCE@AG@qFEF@@Aj"],
					["@@HlhHFbFLBdE@@LO@MeU_a]WGW@@@@@Gh"],
					["@@DJV\\bf\\bJfKDGF_@AUkIG]CWBKN@@"],
					["@@BJzjZL@FENY@Ke_uIC@@MJg"],
					["@@ZtHDxDH@vQFCRaAGQ_ECIAe@oBqbCF"],
					["@@DdXZ`JpBHAYFGFoAGCCkYMAmB_H]NONCL"],
					["@@BTZRF@XHXB@@FKB_CSIQ@@]CaDIPAR"],
					["@@BbHLLJRD`CHGDGAKK[GGKEG@S@MFGH@@"],
					["@@FLFHJNHT\\pJNNNLNLNPNPNPPPLFFBHFt@DCPGLBRDVBLHHJDTBFCT[@EBE@_@M@yACiO]MWu}MQYUIIQI@@CNBDFDHJJNFFJNLRbtNRJLCFGFIEIIOMQOm}Q[IUEA@@GDCF@@"],
					["@@@F`jJJf^DBNDJ@LEFC@G@@¡ECCA@@OH@@AH"],
					["@@@@HJPNPBJELOLM@@AO@@KEMCEKEI@@E@MPM\\@N"],
					["@@DLJN´lNFVLFAHCJS@E@AeWUGSQKKKCQ@QGOI@@ODKNEL"],
					["@@BRFPRLLBTELMPWLQLgDMAMQMGB@@EHCRMtGHC@G@CCAGP_HWF[@@GEMC@@IHKTGLETEdAR"],
					["@@FZVdJJh\\pJJ@`_BE@@WgWSYOOUBEFCL"],
					["@@BFDDFBFBHAJC^MJEJEd_JGTYNUDIFUBKAGCIGQEEECG@ODCDCFAHAN@FAJAH]tCHCBQLOJADKPCDQRCD@F"],
					["@@DFBBBBJ@DABA@CAC@AKCC@CD@BAB"],
					["@@BHFDJ@LCDE@MAKGGIAIBATAL"],
					["@@@@@@NF@@HG@@@@CCIAABEF"],
					["@@@B@@NFBBFC@@AGGCK@@@@F"],
					["@@@D@D@@JDB@FABCBKAGAAA@MDA@@B@J"],
					["@@DFTbFFLDLBh@@@DE@ICEW_GCKA[COB@@ED@F"],
					["@@BFDHJHHJJJJBP@HGBWK[@@GCQAOBCBKR"],
					["@@@@BDhZNDN@NCFGDW@IQ[GCIAWF]`CH"],
					["@@JVLHLFnFHALS@MCSUMMGC@MAUBGD@@KZ@F"],
					["@@DJDBFDNCLDR@TDTDZBLCRQFCjQRW@@@ECEEAaEWAYBQAQBUAQFQJGDS\\CH@H"],
					["@@BP@@HFJBR@VChWDICMGKEAMAMDUFa\\AF"],
					["@@TbDL@JPpPXLNdRLJNHN@VKNQGaDaGiIcOoK_K[UQSAMD@@AJCLER@HDNANCNmN@@AR"],
					["@@BHLPfnFD@@FATOTs@G]oKIKAEDcjEHAJ"],
					["@@FZ^JJCZ@RaCQKIQCQ@U@@@KLCV"],
					["@@@HDH@@DBXHD@FAdc@EBGAM_QGAGDIFG^KT"],
					["@@@H@DHHPPBHFDHDHFRTNBPAPOHQCM@@QAEECIKIMBEFBUDMKMGC@@KDOJGHCJAL"],
					["@@@BJTBBLBDBBA@ADIBS@CCCCCE@I@C@ABEP"],
					["@@@DTXHFL@PA\\Y@A@GCGYYCAGBg`AF"],
					["@@BDHHHBHCFICSCCKC@@EBEF@T"],
					["@@@NBF@@FBrHNFbBbI@@@ECmM[IWCEEAOBCCAGCAYAEBEHAFEP@P@FFN@FEJUFGB@@@F"],
					["@@BZDDhf^V\\PfNB@TGHW@@mc_MsiEAUECBIF@D"],
					["@@@HFNJHFJFP@B\\LR@PCXGDEAYCCCGCMCMScEEO@EBE@GGAC@@ECCBCDCJIBCHADAZ@N"],
					["@@@@LLFBN@FADA@@AMACEAEAG@K@CFAF"],
					["@@FTDDF@NABAJS@OACEEE@I@KFABCR"],
					["@@BDHVRnlxJFL@ZKTCDA@A@EOoCCIEÛÍCACAQF@@AB"],
					["@@@DV^F@F@RSDS@EAC_KC@@@OVAF"],
					["@@BF`VZRhbbTj`PFfJL@@@TSBEEoC_ScUCOAGDSRYNGAeEEAes[SEAA@CDKl"],
					["@@LhBFtxXpFFVDH@@@FEL]AIQ_gegaeOC@@BAD"],
					["@@@RFNJHNFVBLANEHMNeCsCKEEQ@MF[PKNGTEZ"],
					["@@BDBBBBB@D@DABA@ABCAEAACAA@C@CB@BAH"],
					["@@@D@BBDFBBBD@DA@CBA@EACCEAAC@A@CBAB@H"],
					["@@BJDJj~HHJBJBLAHEFEBGCKQwKQKOOMGAI@EBEFK^@H"],
					["@@BZBD@@FBH@FAHEVWVUBEAEEEECG@SBWFEFCDAZ"],
					["@@BVBDFFVPHBH@J@FADAHG@CACY]YKEAE@CBCDAH"],
					["@@BJHFPATIJKBIEO@AGAG@EBUVGN"],
					["@@JRDDPFjAt@HATQ@CGYACGAUAwDYBC@YV@@@D"],
					["@@@FDHVRDBhDD@DADEBA@CGUACECUKC@I@YFABCJ"],
					["@@FrNTFDHBLA\\IFGDIDkCOGGIGKC[AKHKPAL"],
					["@@DVHH^DJ@\\KFCBKGuCE@@sGGBCDKn@J"],
					["@@BRZdZbRJnJCc^mCsMKIA±DÓZKFGH@@"],
					["@@BnDTDFt~HFND^GJCBCJeASAIY{qikAIB@@Aj"],
					["@@BVBFbXHBHATE@@@@IYCEKEMEUEI@@@AD@@"],
					["@@LZB@HB@@NUZkNeHUHOAUKI@@@@]fIVOVILCNCZCL"],
					["@@@@`jlRH@jA`_@@@c@@a[qI_Lid@@"],
					["@@HNPVXVNBRCVMFI@QcEGWEUAIFUbE|"],
					["@@NHLPHRFNCLGdgNUTYTMTE^MnUHQFUCYCCA@ABMlGJ_J{XIFMLQZgvIDOAIIKc@cB{BQDQLILCC¸UDC@@ACCASCYAa@¥BU@QLKPET@NAN@"],
					["@@B|@@hL\\HbB¤JPAJCFI@IEGQI]E{GiC]IqS@@@@"],
					["@@@ZP\\RPbFXBjCTKBG@@EGkeI[BGF@@"],
					["@@BFhNR\\BjCF@\\WBECEMKGAoD@UB[FCB@@"],
					["@@@@@@^JbA@@TYMi@Ag@@@]\\@b"],
					["@@BHLTJBRBNA@@BEBSCYCEaKGA@@ED@@Cf"],
					["@@@FFJLLdBF@ZGDCHMAC]KK@]CEBMJCD@@"],
					["@@@FXX@@dADAHEFQASAEEAiE@@WZAF"],
					["@@@DHPJFFBfEFATM@@@ACSACMAE@{TAB@@"],
					["@@FZLR@@FBF@^U@CAEWYG@UDCB@F"],
					["@@@@DD^BH@HCTMDC@GWUCAMAGBCB@@QhAF"],
					["@@BDD@FBHBF@F@FAHCFGJKBCDGHMDEDCDAJGDCHIFG@C@CEECAG@cAKBEBCBEHCFEJEJCFM`AD@D@F@FBF"],
					["@@JFJFNFNBNBL@R@PALAHAFGDG@MBIAGEKKIKGMGSCUASAKBIDEDCFCJAHAJ@HDPDJ"],
					["@@LHFBD@HAD@DADCDC@C@CCECCCCIAEAE@C@EBCBADAD@BBF@BDF"],
					["@@CEEGKGEEECC@EBE@CBMJCDADBFBDBDDDFBDDFDBBFJDDFDDBDBJBHBJ@DAH@DCBA@C@CCESW"],
					["@@FHDBDDL@HBHAF@DCFEDGBEBO@GAGACEAEAEBOHMFEFEHAF@F@H"],
					["@@DHFDF@H@FCDEDEBGBGAQAOCCE@G@OBGBADAD@FBLF\\"],
					["@@BDDDFDF@JAHCFCDCBEBGAuAAACE@KBKBEDAHCF@LAR@L@L"],
					["@@QRI^JfRX^JPBZEZSNY@YSYUM_KWBMF"],
					["@@kZWxPrlRlHtBrMjMRcKeQ]i]iKg@kN"],
					["@@DFDDJDP@H@NGDGHSAMEISGOAKBKJATBX"],
					["@@LBP@RAJANANGNENEHEJCFG@EEEEC[CE@Y@MBGAI@OCWEMAMBKBMJAHAJ@FFJHFLFTFTH"],
					["@@LFTBHEBQGQQQWIIAMFCNJVNLLJ"],
					["@@FBJDLAJCHEHGDCBGAKGIMAKDKDIJCNAJDH"],
					["@@TL`LH@HIBSGMSMKAQAKDEJ@JFN"],
					["@@bLJBLDNBJ@LAHEDGBK@ECEEMIEI@KFMDODK@GAIAM@ALDHHJ"],
					["@@HJHFJDHCFKLMLKJQDMDSCMIAQAOFGDKDGFENER@NFZ"],
					["@@DDBBF@BC@C@ECAE@ABAF@B"],
					["@@LJLHNDPDH@DE@CAGGGKCCCEEECG@IAGBCDAHDF"],
					["@@JHJHNHHBFAFCBGAEGEKGEC@ECCIBGDEDCFDF"],
					["@@@@BBBA@@@A@@@AA@@BAB"],
					["@@BJJDJBPBPCLIJKFWDOAEGCGBGFKLKFGDEHGFGFEH"],
					["@@DVFJPDJFHFFPFLAL@VCNGHMLKJKJCPDDHHBAHATINKLMLGJGHIDOCOGOO[OYKKGGIIQGGBAL"],
					["@@HBDADADCDC@CACCAGAG@IBKBCBAD@DBDBBBBFBHCB@BBB@"],
					["@@HDHBJ@FCDG@I@GAGE@EBGFIFGDAH@BFD"],
					["@@FHFFJBNBDABCCEECGEACEAEAE@ADAD@D"],
					["@@DFFDDDDADC@GCGECEACBCBBJ"],
					["@@DFDDDDF@F@BC@AGK@ABCDCDABAAECAICK@CBADDX"],
					["@@DFJBJ@J@JEDE@KCECAE@CBEFGBGBEDAD@D"],
					["@@AJHFVPHBFC@GBEJALAFCBMECE@IFOBI@SAED"],
					["@@@DDBF@FADA@E@CAAIGA@CBADBDBBABAD"],
					["@@BFBDDDF@FAFADEBABEAEAAUEE@CBADBDBD@D"],
					["@@PXHVNHVHJALOJGBIEWWQEGIEMAgFIF@JPJ"],
					["@@HBJDDBDAFC@C@AGCIGI@C@KDABBDFDFB"],
					["@@FFF@HCDGBECGEAGBCDCD@D@D@D"],
					["@@CDBFNDXBXEDC@EIIEACBEDEBKBSB"],
					["@@@\\AzH`Pd@xJJVGFQIa@SAUCgEUBS@W@kIWUCMJFr"],
					["@@DFJALEFG@ECCEAIAEFCDCHBF"],
					["@@HBHAFCDGAEGCKBGH@HDD"],
					["@@@F@DDJDBDADEDGLM@CAAECAACACBEJEDAF"],
					["@@BNCLBJFJFFNBHEBEDCFEDI@MGOIMIGGAG@EDCJDR"],
					["@@@D@FFFHBH@JKDE@CCCECGCC@EBCJCD"],
					["@@@DDBB@DCDCBCACCAC@CD@DAD"],
					["@@FHFBFADC@CGCACAACAE@ABADBDBB"],
					["@@@JDDDBFABC@GCEECCBCBBD"],
					["@@DBHAJ@JA@A@AGKECIEGAE@ADHZ"],
					["@@A\\FLH@PINILGPBLDPFD@BEGM[[[MWCCBBPCFIR"],
					["@@JPPPHDL@RCfKRBZIRIFOBO@K[[OMSIKCMH[B]HIJKRCN@ZBL"],
					["@@FHLLLZFBFABEDSFO@KBeDIHIBEQMKIKCSFIHEZIVBFHJHV"],
					["@@PAPKEgcqOcBSRCj@JPzJPKD_EQo[¯a{IuCXKRCpDPx "],
					["@@BFDBFBHBFAF@LCDA@C@AAAO@I@EAEACBABAD"],
					["@@\\@JBFAHCLKJS@E@AACKAC@GBC@SGC@WXIP@FBFLD"],
					["@@JCFGDEHKBE@ECCIBAB@FCFABC@AD@DBDABABEBAF@DB@F@"],
					["@@FDhPNBHAHGJSBG@E@IEIMWGECAEAI@MFGJWdAF@FDHDD"],
					["@@JJTDt@XGHGHYBK@EqQES@OJILCRARFZJR"],
					["@@@@BBB@B@BA@@ACAA@@AA@@A@A@@@@@@B@BBD"],
					["@@hH^HjFP@LCFE@KAMEKMI]S_KOAMDOLOLGLANDJFF"],
					["@@DDF@FADABC@CEIACA@A@E@EDAD@FBDBD"],
					["@@DBF@DADC@C@C@A@A@A@AAACACBE@CBAB@D@B@B@BBDBD"],
					["@@HBH@H@DC@A@ACCGCGAA@AAGCQMEC@A@G@ABAB@B@@AAICAECC@A@@BC@C@A@@C@AEAA@E@ABAB@BJNJLRTRPFFFD"],
					["@@BBJFL@D@FC@C@A@CGGC@G@E@CBADAD@B@B"],
					["@@RJD@H@FAD@D@DDF@LBBBDBDBDBJ@FAV@D@BAJK@A@CEAMGKEEAUCK@IBIDKBG@IDKDAB@BBB"],
					["@@@JHFHDLEFGBM@GCECCEBGJEDGJ"],
					["@@HE@IAICGGEG@QFAHDFFDBFDJJBHA"],
					["@@@JDFLBHAHGJEFICIEEIEI@KDCH@JAH"],
					["@@F@D@FCDG@CCACCAACAC@A@ABADADAFBDBDDB"],
					["@@FAFCPM@ECEGAQCG@AFAHDNDHFB"],
					["@@JHD@FCDCBAACAGAC@CIGACCAE@CDADCL@BBBDFFF"],
					["@@D@RAT@VAbBD@BrXZEHI@@IAcECICIKG[AMFCFAH"],
					["@@RdHFtHPANCLI@OEMUUCA[SMKICK@KBGFCJAVBP"],
					["@@FFHBN@JADCBE@GACC@]@CBABAF@F"],
					["@@LFH@FENHXFDCAKQOSM[Eoa_WWSGQLQLENATDTJRTTPbJnHJBHEDOACSKiE[KSQ]OSKWIkEYFQLCRHrPZtl"],
					["@@GBAFFJFBL@bBLBbJTLFLDTANINIHUDS@GEUCcA_AWDYJKBABAF@DLDZ@VA\\AfH\\DpLPBPCPINKPaBMI]a_iUaGUAMBUH"],
					["@@BBD@B@D@@@@@@@@ABA@A@@B@@@BA@A@A@@@@@@CAA@@@AB@@@@A@@A@@@AA@@AABA@@B@BA@@BAB@BBD"],
					["@@BBJFP@LCJIFMBG@@EI@@MAMDGJABA@EJEN"],
					["@@AD@FBDFDHAFEDE@CACECC@EBEF"],
					["@@FFFDDBD@BAFC@A@CACECEAGAABCD@B@D"],
					["@@@FDBLBVADEBCAGGCKCIBGFCJ"],
					["@@BPNRDBJ@VAVM@C@MCIKWCCO@UFEHGPAF"],
					["@@EDAFBFTRZXF@FCDEBGCGk]IA"],
					["@@CBC@CDIR@D@DBDFBHBH@F@D@D@BBBHBBB@B@NEB@@A@A@ACCIKCEGEIEEE"]
				],
				"encodeOffsets": [
					[
						[114139, 17488]
					],
					[
						[114143, 17487]
					],
					[
						[115046, 17318]
					],
					[
						[114920, 17162]
					],
					[
						[115340, 16968]
					],
					[
						[114402, 16941]
					],
					[
						[115208, 16862]
					],
					[
						[115350, 16779]
					],
					[
						[115376, 16724]
					],
					[
						[114662, 16716]
					],
					[
						[115108, 16687]
					],
					[
						[115177, 16386]
					],
					[
						[117685, 16422]
					],
					[
						[117546, 16276]
					],
					[
						[114928, 16073]
					],
					[
						[117361, 16025]
					],
					[
						[117008, 15924]
					],
					[
						[120664, 15498]
					],
					[
						[120647, 15482]
					],
					[
						[120115, 11344]
					],
					[
						[120516, 11315]
					],
					[
						[117327, 11037]
					],
					[
						[120028, 10993]
					],
					[
						[118561, 10794]
					],
					[
						[118504, 10717]
					],
					[
						[118537, 10713]
					],
					[
						[116768, 10265]
					],
					[
						[117331, 10198]
					],
					[
						[117292, 10125]
					],
					[
						[117334, 10121]
					],
					[
						[117468, 9971]
					],
					[
						[115666, 9869]
					],
					[
						[115213, 9774]
					],
					[
						[116907, 9610]
					],
					[
						[118761, 9546]
					],
					[
						[114208, 9500]
					],
					[
						[119552, 9274]
					],
					[
						[116674, 9088]
					],
					[
						[117547, 8357]
					],
					[
						[117611, 7419]
					],
					[
						[116327, 7130]
					],
					[
						[115256, 6123]
					],
					[
						[114700, 3943]
					],
					[
						[114916, 3974]
					],
					[
						[114943, 4040]
					],
					[
						[115229, 5934]
					],
					[
						[115172, 5878]
					],
					[
						[115047, 5757]
					],
					[
						[115224, 5792]
					],
					[
						[115286, 5696]
					],
					[
						[115315, 5497]
					],
					[
						[115259, 5233]
					],
					[
						[115355, 5230]
					],
					[
						[115618, 5113]
					],
					[
						[115935, 6458]
					],
					[
						[116629, 8198]
					],
					[
						[116840, 8294]
					],
					[
						[117257, 8316]
					],
					[
						[117423, 8408]
					],
					[
						[117626, 8176]
					],
					[
						[117708, 7690]
					],
					[
						[116631, 7790]
					],
					[
						[117932, 8588]
					],
					[
						[118025, 8714]
					],
					[
						[118282, 8695]
					],
					[
						[112092, 7521]
					],
					[
						[112575, 8037]
					],
					[
						[113111, 8312]
					],
					[
						[113112, 7987]
					],
					[
						[113264, 8204]
					],
					[
						[114217, 7726]
					],
					[
						[114351, 7835]
					],
					[
						[114232, 7996]
					],
					[
						[114319, 8097]
					],
					[
						[114612, 8265]
					],
					[
						[115602, 8033]
					],
					[
						[115656, 8612]
					],
					[
						[115985, 8322]
					],
					[
						[115940, 8268]
					],
					[
						[116389, 9453]
					],
					[
						[116366, 9193]
					],
					[
						[116935, 8975]
					],
					[
						[117350, 9059]
					],
					[
						[116713, 9086]
					],
					[
						[115582, 9803]
					],
					[
						[115601, 9815]
					],
					[
						[115638, 9855]
					],
					[
						[115647, 9865]
					],
					[
						[115714, 9887]
					],
					[
						[114139, 8730]
					],
					[
						[114901, 9048]
					],
					[
						[114939, 9088]
					],
					[
						[115043, 9141]
					],
					[
						[115239, 9059]
					],
					[
						[115532, 9125]
					],
					[
						[118618, 9943]
					],
					[
						[118831, 10338]
					],
					[
						[118941, 9810]
					],
					[
						[119266, 10046]
					],
					[
						[119065, 9093]
					],
					[
						[116999, 10061]
					],
					[
						[116324, 10487]
					],
					[
						[117089, 9988]
					],
					[
						[117369, 10205]
					],
					[
						[116985, 10488]
					],
					[
						[117443, 10595]
					],
					[
						[117318, 10662]
					],
					[
						[117608, 11086]
					],
					[
						[117450, 11269]
					],
					[
						[117320, 11593]
					],
					[
						[117217, 11097]
					],
					[
						[117241, 10975]
					],
					[
						[117442, 11745]
					],
					[
						[117311, 11010]
					],
					[
						[116929, 11294]
					],
					[
						[117669, 11124]
					],
					[
						[119985, 10861]
					],
					[
						[120455, 10884]
					],
					[
						[118622, 11107]
					],
					[
						[119438, 10757]
					],
					[
						[119637, 10729]
					],
					[
						[120073, 10569]
					],
					[
						[120165, 10333]
					],
					[
						[120082, 10949]
					],
					[
						[120598, 11033]
					],
					[
						[120269, 11331]
					],
					[
						[119529, 11778]
					],
					[
						[118131, 14284]
					],
					[
						[119496, 16738]
					],
					[
						[120534, 15547]
					],
					[
						[117457, 16559]
					],
					[
						[117196, 16419]
					],
					[
						[116955, 16426]
					],
					[
						[116674, 16216]
					],
					[
						[116627, 16047]
					],
					[
						[116445, 15975]
					],
					[
						[116594, 15849]
					],
					[
						[116718, 15790]
					],
					[
						[116977, 15806]
					],
					[
						[117205, 15974]
					],
					[
						[116691, 9053]
					],
					[
						[116500, 7821]
					],
					[
						[117302, 10182]
					],
					[
						[114910, 9080]
					],
					[
						[118496, 10787]
					],
					[
						[118482, 10760]
					],
					[
						[119225, 10034]
					],
					[
						[115706, 19940]
					],
					[
						[116565, 19619]
					],
					[
						[116844, 16389]
					],
					[
						[114927, 17405]
					],
					[
						[115597, 17187]
					],
					[
						[115428, 17077]
					],
					[
						[113865, 16169]
					],
					[
						[114176, 16847]
					],
					[
						[114254, 16879]
					],
					[
						[114265, 16901]
					],
					[
						[114280, 16933]
					],
					[
						[114336, 16963]
					],
					[
						[114371, 16963]
					],
					[
						[114372, 16986]
					],
					[
						[114421, 16854]
					],
					[
						[114392, 16849]
					],
					[
						[117134, 11742]
					],
					[
						[117095, 11726]
					],
					[
						[117075, 11704]
					],
					[
						[117044, 11663]
					],
					[
						[117543, 11420]
					],
					[
						[117058, 11319]
					],
					[
						[117000, 11341]
					],
					[
						[117026, 11320]
					],
					[
						[116805, 11180]
					],
					[
						[117110, 10628]
					],
					[
						[117226, 10628]
					],
					[
						[117094, 10421]
					],
					[
						[116579, 10260]
					],
					[
						[117138, 10138]
					],
					[
						[117073, 10127]
					],
					[
						[116997, 10004]
					],
					[
						[117019, 9946]
					],
					[
						[117142, 10031]
					],
					[
						[117240, 10088]
					],
					[
						[118603, 11077]
					],
					[
						[118583, 10988]
					],
					[
						[118135, 10502]
					],
					[
						[118050, 10437]
					],
					[
						[118274, 10155]
					],
					[
						[118207, 9620]
					],
					[
						[119285, 10646]
					],
					[
						[119315, 9976]
					],
					[
						[119355, 9980]
					],
					[
						[119394, 9970]
					],
					[
						[119253, 9395]
					],
					[
						[114338, 8881]
					],
					[
						[114610, 8852]
					],
					[
						[114444, 16448]
					],
					[
						[117283, 10971]
					],
					[
						[117171, 10929]
					],
					[
						[117097, 10989]
					],
					[
						[115689, 9883]
					],
					[
						[116524, 7551]
					],
					[
						[117267, 10171]
					],
					[
						[117254, 10160]
					],
					[
						[117205, 10142]
					],
					[
						[117261, 10110]
					],
					[
						[117209, 10077]
					],
					[
						[119734, 9690]
					],
					[
						[117371, 11707]
					],
					[
						[117418, 7773]
					],
					[
						[114385, 16599]
					],
					[
						[114330, 16646]
					],
					[
						[114417, 16587]
					],
					[
						[115732, 9895]
					],
					[
						[115730, 9909]
					],
					[
						[117049, 10113]
					],
					[
						[116962, 10456]
					],
					[
						[116960, 11327]
					],
					[
						[117745, 11345]
					],
					[
						[115591, 9763]
					],
					[
						[115037, 17225]
					]
				]
			}
		}, {
			"type": "Feature",
			"id": "469006",
			"properties": {
				"name": "万宁市",
				"cp": [110.388793, 18.796216],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@cšO@cFqDa@_EeEQMWWU_OgKmKOCAACY@sHA[AEGCOAĵaKAI@KBGJIJGBQAWsW]QbABC@C@I@CBA@C@A@E@C@GBCBAB@BAD@DA@A@EBC@C@A@A@AAAA@AAAAAGAA@AAEEACEACAA@ABCDEFABABA@C@@BGLEJADABA@A@CAE@G@CBIJGHCBCBCFAB@DABA@CBG@I@K@C@AAEAA@A@CBEDGHEJAB@BAL@D@BCBGFABETCJ@HCNAH@HADBFBDBFBD@B@DEN@F@H@FBBBD@F@HRFLBBB@@@B@FBD@B@BAD@DBBDBFDBBBFBFBBB@D@B@B@DAHGB@D@B@DDBDDHBDDFFFBBD@D@@@BDABCD@B@B@BBD@DBFB@BBNDB@BBHFJLJLBJENEFEHGRALIPGHGHMLKVMRIJFJNFXJTHHDLFPFHDLLDL@HATFPJHf\\NJHFJJFF@HAHBFBBDDBBFFBBBB@B@BJRDDB@BEDCDAFADCDIBEBADAFAD@F@DBB@BD@DABABCF@D@F@JBBBBB@DBDAD@D@BA@A@AAEAA@CAC@CBABABABAB@B@B@B@FDBBB@B@B@BAB@@@FB@@HAB@BBDBBBBBBB@@B@@ADABABABC@ABA@ABA@ABA@ABCDCFEBEBCDA@@B@B@@AZFJDJFRBD@DCF@HDNFFDJJDH@B@BB@@@D@B@@@BDB@B@B@@ADEB@D@BBD@B@B@DBBBBBF@D@D@B@FBB@DB@B@B@@B@@@B@B@@@@BBB@BB@AHBHAB@B@B@B@BD@BDNBJBTHZF\\LPLLHPHNHRHV@LBPLLPCRCPPLR@PILKFGHEF@LFJRFHNP@AB@BCD@B@D@BBDBB@@BB@B@BA@@D@@@BA@KDGLEVA®E"],
				"encodeOffsets": [
					[113266, 19543]
				]
			}
		}, {
			"type": "Feature",
			"id": "469007",
			"properties": {
				"name": "东方市",
				"cp": [108.653789, 19.10198],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@BC@AAKCOCAGAGAEBG@E@IAGCIICECCGCGIAC@EAS@M@EAEIKA@CBC@K@MAE@AAAAAEA@AAEBCBA@C@C@E@CBGBC@IBGDABA@AACCA@CAA@K@CAAAEGEGAEAAAAAAAEA@A@A@CBABKBE@A@A@@@ACAAA@CAA@C@EBKFCBA@C@GACAA@CBYBWEMCQEICKEIGSKQQWIUGSOKIQSQOM@OBMBKAKKGFILOPKDOGS@M@KAMBICUMGCTI\\ejqrapI^A^@TDTL^pp\\ZDFHT@FKÂA\\ADOLQLIRUK¦AJJJFXNZbtZVYJOHUAEBGBCHCDE@CDEDEBCBA@@FCDCHEBABC@ABCDKDGJGNGTELALANDJANCXITCXGHADAD@FDFDFBF@R@LBJDHFHFJBHBFCHEDEBEBAFADAF@HAJCRKLGJEHCF@H@H@FBDAHGJGFAJCJBFBDBHBF@P@PCLAHGHIDKDEFCBA@I@OBGDKDMBEDENOFEFAD@D@H@JCDA@ACECAACA@E@GAC@AAAABA@ADA@C@AAABA@AD@DADAFAF@B@DBDBD@DADABA@ABABA@A@ABA@ADABA@ABC@EBE@C@AA@CB@@AAAAACA@@CAAA@AACE@A@CBCBABAAABABA@CAE@CAAC@CAAAACBABCBABA@CAA@CAC@CAK@C@A@C@@HGLMB@B@D@DDB@D@DAFCD@DBBBBDBBBBD@F@H@D@F@B@DANGLIB@B@B@B@@@B@@@B@B@@@H@XGDAD@B@BB@@BABABIBCNgBA@@@A@GB@BA@A@@@A@A@A@E@@BE@EBC@CAC@C@A@@BCBC@@@A@ACE@A@A@A@A@@CC@@@CAC@AEC@AAA@AB@@CAAACAACE@ACA@AAA@A@E@K@E@@AAACA@CAAAAA@@AC@GAA@CBA@A@ABAB@DAB@B@B@BAB@@ABABCFCDA@ADC@@@ABA@ABCB@BCBAB@BAB@@@B@BAB@@@BABAB@DCBABA"],
				"encodeOffsets": [
					[111745, 19332]
				]
			}
		}, {
			"type": "Feature",
			"id": "469005",
			"properties": {
				"name": "文昌市",
				"cp": [110.753975, 19.612986],
				"childNum": 12
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@@BFFFBBBAHBDLBDB@DABC@EAC@E@AB@@BDA@CAAAA@AF@DDBDABBDBBDBBBDDDDDD@BDDDBBBBBDD@FBFABDBDBBBADA@AACFG@CFCFAD@@@@@D@HBB@@@@@B@F@@@@@@@BBFDJDDBBB@BBBAB@DCFAH@HAJADCD@@@DDHHDDBDDHDBDAHIDABGHAFCDI@C@E@EAEAEAGBA@ELAFBFFFFDBF@DADAL@DAFEDCD@BBD@B@BBDBFADABADABA@AB@DABAB@BA@@BA@ABAFA@C@CDGFABAAA@A@E@C@A@A@BB@D@DDD@DALCD@DCFAFCBC@ABABAD@D@D@D@BADC@EB@@@B@B@BA@@@G@@@A@A@CB@BEBEDGBIBCDCBCBA@@B@BBBBB@D@F@F@B@DABADABEJEDIHEBGDEF@@AHCFGHEB fjRPPLTFRLXJLDRRFHNLTRFDB@B@D@F@HAPELGHGDE`³N_FCDArETELGPKRWPUZSlQbGXCPVL\\H\\ANGJKFOhÉtý~ñrģFmEUMMWIQC]AS@O@SEUMm{gg{qii{KGQGOEuEEAIM«ZEBOFODKAICAGCGMHIBCCEOAIBOBGMIIEGEQGODOHGLALBNBJBRCLKHAHFR@RCLGLCHKNIDSDEJGdHHBFBNAJEHIJGFSLQLMBK@KCQEOGE@G@GDCDCJ@LCRBLDDFFLFNJDFDHJHLDNDF@B@FDBBDBBABADADABCB@BFBBDBDAD@F@J@FBD@B@BB@AAC@@AC@GAEAEAACICCBEAC@@F@DBF@D@FCDCBGDCFAD@FCH@FDH@DBJBRBFBD@BCBAB@B@DBFADBDAD@@FDDFBF@FCHDBBF@@BF@DJB@BBB@B@@DBFBHAF@BBD@@@DABA@AAC@@DBDBBBDCDCD@BAD@D@FBF@D@H@F@D@FBDDBDD@BB@BD@DBBFDBBDFBHBDDBBB@BBD@B@DABADBB@BBB@D@B@@ABABBBBBD@@DAB@BD@HBFDBBDBD@BDB@BB@BC@E@G@C@CACBADCDC@A@IBC@C@CA@@CBCBEACDCD@@ABCBABCDAD@@@B@@@BB@@B@F@HAJCH@DBBBDD@@B@D@FADABA@GCI@EBCBBDDDDDDAD@DB@@B@D@BBBBBBBBB@D@DAD@D@LDHA@@@BBBBB@JCFIBKFGBCBAJCFCFAFDFBFBHBBFDDBDDBJBFFJBH"],
					["@@@B@@@BB@@BA@@B@@@BB@B@@@B@BBB@@A@@@A@@AABA@A@@BABC@A@A@AA@@@ABA@@BA@@@ABABA@@B"],
					["@@@B@@BB@@@@B@@@@@@@B@@@BB@@B@@@@A@@AA@A@@@@A@@AA@@@A@A@@B"],
					["@@@@@BB@@@@A@@@@@@@@@@A@@@@@"],
					["@@@@@@@@@@B@@@A@@@@@@@"],
					["@@@@BB@@B@@B@@BB@@B@BB@@B@@@@@@A@@@@@A@@AA@A@@A@AA@@A@@@A@A@@B@@"],
					["@@@B@B@@@B@@B@@@@@@@@@@A@@@@@@@@@A@@AA@@"],
					["@@@@@@@@@@@BB@@@@AA@@@"],
					["@@@@@@@@@B@@@@@@B@@@@A@@@@A@@@@@"],
					["@@@B@@B@@@@@@@@B@@B@@@BA@@A@@@A@@A@@A@@@"],
					["@@@@B@@B@@@@@@@@B@@@@A@@A@@@@@@@@@A@"],
					["@@@B@@@@@B@@BB@@@B@@@@B@@@@@@@B@@@@@@@B@@A@@@@@@@AB@@A@@@@BABA@@@AB@@A@@@@@A@@@A@AA@@@AAA@@BA@@@@BA@@@A@@B@@@B@@@BCB@B@@"]
				],
				"encodeOffsets": [
					[
						[113296, 20243]
					],
					[
						[113943, 20459]
					],
					[
						[113936, 20444]
					],
					[
						[113935, 20443]
					],
					[
						[113930, 20442]
					],
					[
						[113924, 20438]
					],
					[
						[113872, 20402]
					],
					[
						[113873, 20404]
					],
					[
						[113875, 20391]
					],
					[
						[113886, 20359]
					],
					[
						[113885, 20360]
					],
					[
						[113871, 20387]
					]
				]
			}
		}, {
			"type": "Feature",
			"id": "469021",
			"properties": {
				"name": "定安县",
				"cp": [110.349235, 19.684966],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@B@B@B@BB@@B@BA@A@@AAA@@AAA@ABA@A@@AA@AB@B@B@B@BA@A@CBEBA@A@AD@BA@@@C@A@@@AB@BA@@BEAEACCEIEGCCAA@@ABE@A@CCCCEAE@C@GAKAG@EBC@GBCB@FCDCBC@A@@@A@@@AB@@@@E@A@@@@@AB@@@@@B@@A@@@@@A@@@A@@@A@@@@B@@@B@@A@@@@@@@A@@B@B@B@@B@@@@B@@@@ABA@@@@@@@@@A@@@@@@AA@@@@@@B@@@B@@@@@@A@@A@@@BA@@@@@A@@@@@AA@@A@@@@@@@@@A@@@@@@B@@A@@@@@@@A@@@@@A@A@@BA@@@@@@@@@A@@@@@@@@B@@@@@B@@A@@@@@CB@@@@@BB@@@@@AB@@A@@@@B@BA@@@@B@@@@@@@B@@@@@@@B@B@@@@B@@B@@AB@@@@B@@B@@B@@@@B@@@@@B@@BB@@@@AB@@@B@@@B@@@@@B@B@B@@@@B@@B@@@@@@@@C@@@@B@@@@A@@B@BB@@@B@@B@B@B@BA@@@@@AB@@@@@@AAAACAA@@ACAA@C@A@CBEDEBEBAFABADAF@BABABABAD@B@B@B@B@B@@@@AD@DCD@BAD@B@B@BBBDBF@B@BCBBB@BBDB@B@D@D@B@DAB@BAB@B@BAB@D@BAB@DB@BBD@DDDFDB@DBB@B@BAFCB@FCDCB@F@B@D@BA@C@C@CBC@CBC@C@ABAD@DADADCDA@CCAAAECA@E@MCKCIGCGCEMIKEEECCAKDQ@KDIDCHCH@F@PHRFLDL@NARKTKHEJIFGBIAMAEGGUCOCSFQDIAKIIMAGAIEEGCIBK@UJM@KAKIECGIGIAGCKEIGEODEDGBGEIOAGMKGAIAO@GCGCKS@ODK@CAKEEKAMBK@KIEW@CCOEIEIDMHCHETIVGFEDKBK@IEIKAMACCGKAIAK@KDIHIDICOGGIAEDEFIFQAMIQQMACBKFIBICIGIAK@OLIFKDICMAI@DXCZ@FDTBV@VDJCDBHDF@BAHCHABEAE@CBAFCFCBEHACAA@@AAA@GBA@GAAAICIAEHCDDFDDABGBCBCJBDDFHDFHBFAJEHBDDDABC@@@CBABIEC@EFCHCBEF@F@DBF@DCH@@@DADAD@@AB@BAD@DAD@DBDBBDD@@@D@R@^BJLRNJLJJNLHRAPGTCPDJR@R@XBLNJRALJ@LIROREBCBEBC@@@A@@@ABGDABABA@C@C@CACBC@EFA@CBCBEBGDEB@BAB@B@L@BBB@@DBB@BBB@@DA@ABA@@B@B@DBFBD@@@BAB@B@BADAF@DBD@B@D@BC@ABCBADAFABBD@F@B@BABA@@@C@C@@@A@AACAA@@BAB@@AB@@A@@BA@@AA@A@@AA@@BA@@@A@@@@AAA@@@AA@@@AA@AA@AA@@@@AB@@A@AA@@A@C@C@@AA@@A@@@AB@@@BAAC@A@A@@@@B@@C@@@A@@C@C@@@@A@@@AB@BA@@A@@A@@A@CA@@A@@@BA@@A@@@AC@@A@A@@@BA@A@@@A@@C@A@A@A@@@AA@@A@@@AA@A@@@@CA@A@A@AA@@@@@A@A@ABAB@@AB@HABABABAD@DBD@B@B@FFBD@D@FB@D@DABCAC@@JAD@FC@CCCCACE@CFADAB@DBB@DBBDDDDFBB@DBBBDBDBBDBD@D@DAJAFB@ADITGXFHJ@JBHL@JHJRFNE@@B@@@FADEB@@@FCBCDA@A@@@ACC@A@ADG@CAABCDCB@B@B@BAB@@A@CAA@AB@B@BAD@DABADA@@B@LEJOLD@@B@BADCD@@@BA@ABC@CBAB@B@B@@@DBBBBB@BADADABA@A@ABAB@DADBBBBBBBFBBB@BBB@BDDFB@B@B@D@D@B@@B@D@D@NAF@BBDBBDDFBDBFBH@DDBBBB@BA@@B@D@D@DBDDDBBBD@D@B@BAD@FBB@BD@D@BBDBF@BABAB@@BB@BBBDB@D@D@DBD@B@D@D@DBD@FADADADAFABAFBDBBBDDDHDHDDFJLBDBFBBBBBFBB@DAFCDADADBBB@BD@DAF@F@HAF@FAF@BBBD@HBH@D"],
				"encodeOffsets": [
					[113028, 20202]
				]
			}
		}, {
			"type": "Feature",
			"id": "469022",
			"properties": {
				"name": "屯昌县",
				"cp": [110.102773, 19.362916],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@@BABAB@B@@@@@B@@B@B@BDB@@@@@BBB@@B@@@BB@@B@B@B@D@@@@B@@@BAB@@B@B@@@BD@@B@@@AB@@B@@@DBB@@@@BB@@@ABA@@B@@@B@@D@D@@@@B@@@DA@@@@@@B@BBDAB@@A@@B@@@BB@@BD@D@B@@@BBB@@@BA@@@@BBB@@BBB@@B@@B@@BB@B@@B@@@B@@AB@@BB@B@@BB@@AB@@@BA@@BA@AB@DBBBB@@@D@D@@@B@BA@A@A@EACBABEBCDABAD@@A@C@AAC@CBEBC@A@ABA@A@@ACAE@C@A@AB@BAB@@CA@AAA@CA@@AA@A@K@ABA@AFAHCFADADAB@FED@DADBD@D@B@BABAHCBA@@B@@@D@FADAFAPQJQ@KKIQBMIAK@W@QIQOCSDOHQBKGIMKIMIKQAI@]@Q@C@@CCAAAC@CBC@CBC@ABA@@BCBC@C@@DG@CAE@C@EFEDADGFED@JFBADA@@D@BACCACFGBIAEEGGCCEACDIDAHABACCCEDCFGJBJDBBHBB@HAB@BB@@BBBDFGDADEBEDAF@FBBADGBG@ACEAGDCCI@UAUCS@EDYCWBKDME@M@MCGCICYGUIQEMHOPILI@GKCOBKDG@EGM@M@OKSIKEGCCGGCCC@KJE@IDO@S@MAQEEAQAKHEHAF@JGPGHKHCDAB@BAFBFBBABA@A@A@@A@@AACBC@C@A@CB@@A@AAA@ABA@@BA@A@@B@@AA@@A@A@A@@@A@A@A@ABAD@B@@@@ABA@A@@@@B@B@@@@@@@BB@@@@B@@@@@@CBA@@B@BAB@@A@AA@@@@@B@@ABa@GA_CGN@F@JBJ@HGNKNMLOFMJKBKAWAG@GHIJCFKNGLKNEFGDMBM@CC@@A@CBABCDABABC@E@E@ABORAD@BBFB\\@DDBCF@DBDBDBP@@@D@FBD@DCBCBBBBDBBB@BBDBBBBB@@DBF@LJBNAHFPFJFJHDHFF@DBDABAB@B@@@@B@@@B@@BBB@@@BABAB@B@@BB@HIBCDCB@B@H@B@B@BBFDHH@@B@D@B@B@BBD@B@BBBBBBDD@B@B@B@@@@@@@@@@C@AA@@@@A@@@@B@BC@@@@@@B@@BBBBB@D@BBB@BB@B@B@BCJ@BA@@@CAC@A@A@A@@BAB@@BBD@H@BBB@DB@@@B@B@@@B@@@D@D@B@D@DBDBBBB@@B@@@DC@@BA@@D@B@HBDBD@B@B@DAD@B@B@BBB@@B@B@BABCFABA@A@CAAAA@A@ABC@ABA@@B@D@B@BBBDDB@B@B@DDDB@BB@@B@B@F@B@@BBBBDDBB@B@B@BA@AB@B@B@@FBF@BBB@@D@@ABE@A@ABEFADAB@B@@@BBBBD@D@FABVBNDLBJAN@HCNCJCRANBPBRDJCJEBEBCBOBIHKNCTFTHNJDJ@JGNDPRJLBR@RAPDPJAJCHGH@BA@@B@@@B@BBF@B@@@BB@@@BB@@@D@@@B@@AB@B@@CB@@ADA@@AA@@@@BA@@@@@AA@@A@@@A@@BA@@@@BBB@@BBB@@@@BAB@@@@AD@BCB@@@BAB@@@@@@@B@@@@B@@@@@ADABBB@@D@BBB@@@BBB@B@@@@@B@B@@@B@BA@@B@@@BA@@@@BBB@AB@@BB@@B@@@@@@ABB@@B@@B@@@BB@@@@B@@AB@@BBBA@BB@@@BBB@B@@B@@B@@B@@BBB@@@@@BA@@B@B@DA@@B@@@BB@@@@BA@@@@@@BB"],
				"encodeOffsets": [
					[112781, 20030]
				]
			}
		}, {
			"type": "Feature",
			"id": "469023",
			"properties": {
				"name": "澄迈县",
				"cp": [110.007147, 19.737095],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@nwDCBADABAAC@CAE@A@A@@@A@AB@B@@@D@B@BAFGDCD@DBFADAF@DBBDDAB@BGBIAAAA@ABA@ABGC@C@@AA@AA@A@CBA@A@ABAAAAACEEOA@B@AC@ABCB@B@BAFAB@BB@BB@FCBA@ACBA@C@A@@@C@AA@A@AHABABC@EA@AFABCDEB@BABCB@A@@@A@@BA@@AA@@@@AAA@A@ACE@A@AD@@ABA@@@A@AAAEAGBAFIFCDCDCB@@@B@D@B@B@BA@ABC@CICCAECEG@A@ABCBAD@FADABABC@GAI@C@CBCBA@A@CEBE@E@CACAE@@A@EBA@ABABAD@D@DDJDFFFDFBFAHCPEBBNDBBBBBA@ABEBGBEE@AAI@EBCCCC@ENADBF@HAXQ@EBE@E@CDA@E@C@CCGCG@@@A@@BADOBEDQHIBEACZKDC@A@CACAE@EBCBCBCDABACAA@CBAC@AAA@AACA@AAC@CAAA@C@C@CACCA@C@CAAAACA@A@GBG@CJAF@H@D@@CBEBABABAAA@AAAAC@CAAAC@C@E@C@AGEBA@EDCHEF@HDDBJDH@FDF@F@FBH@FBD@@A@CACAACCAC@C@C@C@AB@@AAAAACCG@EACAEACCAAAC@ABE@M@C@C@AA@C@C@A@A@A@CEACA@AAA@AAAEAAAAAABC@CBABAB@B@BABCBC@AAAAACA@@A@A@A@AB@DAD@BAB@@C@CDABA@@@KCIPKFA@@@CBABCBC@ABA@A@@BBB@D@BA@ABA@A@A@CDADBB@DCH@B@BDD@B@@@BCBADED@@A@CFEB@@A@@@MFQEGI@IGKIAI@EGHWJSBCA@BEBI@C@CACACCACAAACAA@EACCCCAA@CAA@CBABCDEF@BDDDDDD@@EBC@ID@DBBA@C@CEAC@C@EA@E@A@AAC@CBCBABABA@GBAAA@@@@@@AB@@@@AA@@A@@@CBA@A@@@AB@@@@A@AA@@@AA@@@@AA@A@AA@@A@@AABAA@@BA@@@A@@A@@A@@@AA@@@AA@B@@@@A@@@AA@@BAA@AA@@@@AB@@A@@@ABA@@@A@A@@@@@A@A@AA@@A@AAC@@@AABABC@@@@A@@@@@@A@@@@@@BA@A@@DA@ABC@@@@BA@A@@A@AA@@AA@A@@B@@AB@@@B@@@BB@@@@B@@A@@B@@BB@BC@@DA@@@ABA@@@A@@@C@@AA@@A@@A@@@AAE@A@A@@@AB@@AHGDGBIOIOCQBQ@KAQICOHM@ICIMISGSEMDGLAJAPADAFIFIDQCOAMAQBIDMDGDM@IBKAMCUABA@E@CACAA@A@@@ABABCFEBAB@F@BA@@@CA@AAE@EA@@@A@ABAB@@A@A@AAACCAAAA@@@A@E@A@AA@@ACACCA@A@A@CCAA@A@A@C@AB@BAD@BAB@B@BBDBB@B@BADEBA@A@A@AA@AAA@A@C@CBA@A@C@CAGAA@C@@@AB@@CD@@A@@@AAAAAC@C@C@A@C@C@@@A@@@A@A@@CAA@AAG@C@AA@@BA@AB@B@B@D@DB@@B@@ADI@A@A@AAAA@AAC@A@AAAA@@@A@@@@D@@A@A@@B@@@@@BBD@@@@@@@@@@@@A@A@ACCAAAAAAA@C@AAA@A@C@A@@@GGECAAA@A@G@A@A@CDADGJCDABAD@BA@E@AB@@@BBF@B@B@D@B@DABABCDABA@ABAAABC@@BAB@@BBFF@B@@ADA@ABA@AAA@AC@AB@@A@A@@@A@@@AACAAAAAACAMCA@@AAC@C@A@AB@DAB@BAFABCBAB@B@@@BA@AB@@AAAA@A@C@AB@@AAAA@@ACAAA@@@A@AD@BABABA@A@ABCDCBABABABA@A@GAAAA@ACA@CA@AC@AA@BA@EAA@A@@@ECACAAAAC@AAABCA@@A@CCA@AC@E@@@A@A@@@@AACBC@@@@B@BAB@B@@A@EBA@A@A@A@@BCFCDABAB@@@@@BDF@B@@@@EH@@ADCB@BAB@@E@E@CBCBA@C@AAG@IBA@CB@DA@GFBB@D@@@BAHADA@@BBB@@FBD@BABADADAD@B@B@B@BDFL@B@B@D@B@D@BAB@BE@CBA@AD@BA@EDAFAJ@FBJBFBDAD@D@HBF@DADABC@G@I@GBGH@FBNDJHLNHNPFFFLRNBF@DABEDADAF@LBDBDDB@B@BCF@DBDDHABAB@D@BBBDDFBDBBBBDBBFBFHBHJNHT@FDB@@H@FGLGLAJBNCDALBPJCHSFGBENBJHFLJDDBPFHNHLDH@LFDJ@JDNJR@VBPFLJJHJJLHLBXFNCNCLBBJBBBFL@JDJDL@DEHGDCHABOHGBADFT@JBDDBBBHB@DCLGBGBEB@FBJB@BBJ@D@BB@B@D@D@JBF@BABA@E@ABA@CAA@ABA@@D@BAB@BCB@@C@C@EAC@CBABCD@BEHCBEBG@CBDDBBBDD@BBBBBD@BAD@BABADADCDABFBF@F@DALPFO@ADAF@BBDC@CHABCFBLNDJDL@R@LBLOBIDIRc¤ZFfJLBNDtBd@ZAVAbKVKJCZBXFjNÄ"],
				"encodeOffsets": [
					[112750, 20508]
				]
			}
		}, {
			"type": "Feature",
			"id": "469026",
			"properties": {
				"name": "昌江黎族自治县",
				"cp": [109.053351, 19.260968],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@A@EAE@EBIBG@QDMDIFK@UIKGGCGAQFQJIJGLERENBPAJKDSFIFITKL@DBDBJBBCBEFMFCFGHIHGJOAQAMEMEMAECOGMGQGMAKFSDKJQLMTKFERIJIDKAMCC@CBMFGLWBKBEDKBMDGJAHBHBPJB@DBB@B@FAHAHEDABADIBCBAD@B@B@BBDB@@B@DADABABAD@F@B@B@DBB@B@B@B@@ABA@ADCBCDABAD@BAB@B@B@F@B@@@B@@AB@@@@@DBFD@@B@@@B@B@BA@@BAB@@@B@@@@A@C@CDE@A@EAG@CCA@C@A@@DA@C@EBABEB@AC@A@CB@@AB@@ABC@AAI@AAA@CBA@A@AAC@A@ABCBA@@DABABC@C@EAA@ACEEGCEAA@ABABABADCBC@C@CAG@C@@@CBC@@B@BABBB@B@F@B@@@B@@@B@BAFA@EAAAE@CACA@@@A@A@@BA@AAA@CCACACCAAAACAACACAC@A@CCCAAAACCKAC@E@ABU@CAACAA@A@A@E@@@AA@@AA@AEAAAE@EAA@C@CBA@@@C@G@C@EAA@@ACCAAAAAAA@A@C@ED@@A@C@A@EAA@CBABC@CBGDCDEDADADA@EBCBCBC@ABA@A@E@A@A@E@A@A@ACACA@C@CBG@C@@@A@AAAA@@AACAA@A@A@E@CB@@AA@@ACAGAEEKGKCCAC@@CAA@ABABCDA@ABAB@@A@ABA@@@A@ABA@ABADA@AD@BAB@B@@CD@BCBEDADAB@BA@ABA@A@A@CBA@AB@B@BAB@DBB@HBD@@BBBBDBB@BDBB@@@F@L@F@BBB@BDB@BDFBBBDBB@DA@@BBB@BFD@BBD@D@@DD@@@B@B@B@BDF@B@B@@ADAD@@@B@DBD@DAD@FAF@@@F@B@B@B@@@BABA@@H@B@@ABMhADAJABAB@@AAA@C@CBWHG@@@A@A@@@A@@@A@A@A@A@KJMHCBA@E@C@G@E@C@AAAAACAACAC@EDCBC@A@CCC@A@A@KNGH@@@D@B@DBL@DBD@DBB@DABABADABBDBBDBD@BB@DBF@DABABBBABABAD@D@BDFBBB@BB@DB@BDBBBB@@DAB@@B@DAF@FAD@BABCB@BAB@B@BABAB@BABCBCBC@CACAA@E@EBCBCBC@@BABBB@B@DCB@BABBBBBD@HBF@B@BDDBDF@BCBIDG@C@C@EBEFMPCFAFCNCLAH@P@JABEDCFCLGJGHKBODO@E@GACAEAIAIDEBIHGHCBEAG@G@E@GDIFKHQLIDGBE@CBEBABAFCFGFEDGAIAGEGEICKAQ@E@EAECECC@CBGBWHSDWJMDIBMCKBKBSFMHIHCHCLAD@BADABGFCDED@@ABADCFCF@DCFGDADAHBFGVIPUZNVZ^`N\\LXDf@\\BTDdRNN\\jNV\\XbNhLZLjXuFGDAB@DBDBF@FAFADADEBC@CBABCB@DAB@B@DAHCD@FAD@B@@CBKBIBEBABABAFABA@ACABIBCDG@CDABE@GAC@AFCHCLAF@H@HDHFFBJFHAFAJE"],
				"encodeOffsets": [
					[111662, 19897]
				]
			}
		}, {
			"type": "Feature",
			"id": "469025",
			"properties": {
				"name": "白沙黎族自治县",
				"cp": [109.452606, 19.224584],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@HAHAFAFCDA@@FADGFADCDAF@H@F@HBBADABCB@BCB@BBB@DFBLDDJBFGLSBIDGHEHCHAJMBEHMFEJAL@J@JBJ@HOIGICEECG@@AAAC@A@G@AAC@A@ABAB@BABCBADADAB@D@BBDBB@FBBBD@BBB@D@BADABAFADCBABABCBCBAF@D@D@B@BBBB@B@B@BBBDBDB@@B@BC@A@AB@B@B@@B@BBBB@D@BAB@DB@@BABA@ABABCB@B@JBB@B@@@BA@C@AFEFAB@DABA@@BB@@@BAF@@@BB@D@D@FAB@@@B@B@@B@B@@ABABA@@B@@@BD@B@B@B@B@B@B@D@B@B@@@B@@@B@B@BD@D@B@@AF@@@D@BBB@@BBB@@@DA@ABA@@@A@@@@BA@AB@@@@C@A@A@@BAD@BA@B@@@@@@B@@@B@BD@@@B@B@BBB@@@@B@@@@AB@@A@CBA@AB@@@@@DD@B@B@BBB@@B@B@DB@@@B@@@B@@BB@@BABA@CBA@@AA@ABA@AB@@@BDBBB@@@B@DABABABAD@FA@@BCBABABCBA@CBE@A@ABA@AB@B@DAB@@@B@@DBB@@@@BA@@@C@AA@@@@@@AB@@@@@DB@@BD@@@@B@B@@@@A@A@ABAB@@BDDB@@@@B@@@B@B@B@@@BA@@@@@AB@@@B@@B@@@B@@@@@B@@@@A@@@A@@@AB@B@@B@@@B@@@@B@B@@@@@BA@@@AB@@@@@@@B@@A@@@@BA@A@AB@@@B@@@@@@@@@@BB@@@@@@@B@@@@@@@B@@@BB@@@@@@BA@@B@DAB@@@BA@@@@@A@A@A@AAA@@@ABA@AB@BA@@BA@A@@A@@AA@@ABADABAB@B@BADAF@D@@BB@DADABBBBBBDDD@B@B@@@B@B@@@B@B@@BDB@BBABAB@@@D@BAB@BAB@@@BA@@B@JFFFLHFDFFAHAHFNDDHJFJFHJ@LARDJJD@BEFGFCBEEEGEBEJIDG@ABADADA@E@C@A@@B@B@D@DABABABC@A@AAA@AA@@AG@EC@ABAAEDGD@@CEGACBIA@CAEBGE@C@EAEGC@C@ABGA@CBC@@@C@E@ACCK@@EIA@@A@@BAF@NCFADBDBDBHBHBRFDAH@BAAAA@CABA@ABA@@B@B@B@BBDB@@B@FBDBDDD@BB@@DB@BD@B@HBDDBBBBF@BC@CBEJCBGBEBABCBAD@BA@A@ABEDCBCDEDA@CBCFA@ADCBABAJCBA@CBCDCDCBCBG@EBCBEBADAB@@@BBBBDDF@@BBFBB@DBBFBD@FAFAB@@A@A@E@E@E@EBA@C@EBM@CBAPQBAFCDADCDA@ABA@EBAB@F@B@BBVBJBF@FBHDFBFADA@A@AFSJSLMAGAC@@BCBC@CB@DGBCJEFCDABA@C@CAEAG@C@CBABC@A@AAAKOKMAA@@KHGFCDABG@G@E@A@CAEECGCEAE@EBE@G@AA@AACAC@AACACCAAGAC@CAA@C@ABA@E@@AACCACAECGCCACCAC@E@CFIBKBC@ECGCCCAEAEAE@GFMHaROFIBE@IAGCCCEECE@QAEAG@E@GA@AAC@EACAEEIEGCC@CBC@CBA@@@A@CCAAA@G@CBA@CBCBABA@C@CAGCEAEAE@A@ABA@ABADCBAB@@AAAA@GEQAOAEAG@CACACAACAC@CA@@C@A@A@A@AAEAAAE@EAA@C@C@CBA@A@A@A@AAA@@CAAACAC@AAAA@AACA@@AAA@CCAC@ACCCC@AA@@A@@BCBA@A@@@@A@AAA@AAGEGEAAA@A@A@A@A@@@A@AA@@A@AA@AA@AAA@CAA@AA@A@@@C@A@A@C@@ECECEACACAA@A@ABABADADCDA@IBKDE@ABEBCFA@ABA@A@ECA@A@A@ABABA@A@ABC@GBEBIDEBA@ABC@ABCBAB@@A@@AA@@AEBABA@@@A@@@A@E@A@A@AAABA@@@AD@D@@@DBH@D@DADCDABABAB@BBBDFFHDF@BBB@F@DADABCB@@ABAD@B@BBD@B@BAB@DBB@BBJ@BAD@BA@@BA@@D@BBDA@AFAB@F@DCB@@@B@DDB@DBH@F@BCF@D@D@B@@A@@@A@AB@@ABA@A@@@A@@@ECCA@@@@A@@BA@@@A@E@A@A@A@ABC@ABCBADCD@BAB@BA@A@A@A@CAA@A@E@C@ABABCBCBA@@@CAAAA@A@C@ABADCJABCBGFGBEBA@A@CAA@OIGAGAIBCHANCLAFALKXEHAN@DDDBNCLIJQJEFSLKNIRCLETBLHNHRHNDPBFFNFNBNBRIPGHGJEHEDENAFADIACACAK@SLEJEJCTILOBMAQFKFIHIJERBRDHHHJL@VELCJCN@RAHAJ@FBF@F@BFFHDDJBHAJADELEHAH@H@NDLBHFFH@HAB@F@B@D@J@"],
				"encodeOffsets": [
					[111689, 19955]
				]
			}
		}, {
			"type": "Feature",
			"id": "469024",
			"properties": {
				"name": "临高县",
				"cp": [109.687697, 19.908293],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@X|VLR~p^\\NJNDZF^FND^@^NFHNJJDNDP@TCN@PDTDL@NCTK^cZUNCXAPBLDLHNJNFNDR@LALG\\Kd£JQJCPAAK@K@QCKCIKMEAADGB@DCDAAE@CB@BEPKOCBE@E@EABADCBCBCBA@ABC@AACAAAAC@ACAACCDAH@FADAFG@ADCBADAD@FBD@D@@@DA@ABA@A@CB@BAB@DBB@BAF@B@BA@AAE@I@C@C@AAAC@I@AAA@AI@EFAHAHADK@CGAAACAAC@IESBCHAPGBADGHCFG@CCKCI@IEKAAIAAADKDMEMAWGKIKGIIIEKAO@UIQCM@ICIKEG@KCMGEGAOCCKIGEAIFMHATEDGOIKACBMDIAKBKHEHG@@@CA@EGSIMAGEGEAE@CAE@IGCBE@E@GDCAADEBCDAB@BD@B@B@D@@@@DBBDD@B@@@BB@@BAB@AAC@AA@A@A@A@@@@@D@@A@@@AA@@AAAA@CBABAB@@AB@BAB@@@@@A@@AAA@@@B@@@B@@@BADA@@BA@@BA@@@@@@@@EAA@A@ADQFQIIIEBADAB@@@@CDABAD@BA@E@EBAACB@FC@AABCDADCAAEFA@A@@DADA@@@@EA@A@BBAB@@@B@B@D@@AA@@@BABCDEBCB@@@CBA@@DEBAA@AA@CB@@AABABBB@B@BA@A@A@@DE@BD@BCFCFA@BIAA@A@BCFBBAD@BCBDHIBBJAFFJDDTF@BEAC@E@ABA@C@CAC@G@EACFABEC@EC@EJCDE@IAM@AACECACDM@CFGBIPUIE@GBBHDFFHENCHOJGFFF@PITCFC@A@CAABA@CFCJBN@JD@BABCHEH@DB@@@@FBDDFFJFBBAJLCB@FD@FDDDFBH@N@JABBFBH@@@@@HGVIFMBIBGFCLCPCNAJ@LBP@FBVALAHC^CJOF·`"],
				"encodeOffsets": [
					[112127, 20351]
				]
			}
		}, {
			"type": "Feature",
			"id": "469028",
			"properties": {
				"name": "陵水黎族自治县",
				"cp": [110.037218, 18.505006],
				"childNum": 2
			},
			"geometry": {
				"type": "MultiPolygon",
				"coordinates": [
					["@@@G@EACAA@E@G@EFM@C@AACAEACAEBC@GBGDM@GDIFSBAHEDA@A@CBK@ABAFIHGFCDAB@B@FBBBD@L@J@H@DAB@BA@CBADEDADAHGJIDAH@F@DBB@B@BABCFIHK@AD@B@BABAFEDCBAB@DBFBBDFFBBB@HBBBBB@BBBBBB@B@D@D@FAB@B@@CBC@ABADAHAD@F@B@D@B@DAJ@D@D@BAaaW}aQe_IKQaM}IK{GOKQSKqOoQOA_BSFUF_LeF[BW@WE³W[[¬A@EAEHLDBBAB@FAJAF@DCD@BADAD@H@FBDB@HBL@JDB@BBBDBD@H@F@B@@@@@@@BBB@DBB@@@BDD@@BBBF@FCJAFADEDCFEHADC@I@G@IFCBEFEN@BBFBDBD@DB@BBBB@@@@JAF@B@DDDD@@BBB@HADFDBB@B@BE@C@ABE@A@@BAF@FBBBA@@DBB@BBBBA@ABALCJDBBBDJNDJAL@BABABBN@@JFFB@@D@FHDB@J@@@@@BDF@B@BCHEB@B@D@B@BA@G@GCCAA@A@AB@BA@@@E@C@EDAN@BAD@@CDA@E@A@A@AACB@@CB@@@B@DA@CBCJA@BBBH@F@HAH@FBH@BBH@BBD@@AD@D@DB@@@HBBBBBBDBBB@BBDAB@B@BBB@BAB@DAB@B@BB@BBFAF@FAFADADADCFAB@D@BBB@BB@BBB@DAF@@@B@@BBH@BDBDJBD@D@@CFCDEFABGPABEBAB@@AB@F@D@BBD@@@@A@E@K@G@CBA@ABAFAH@J@FBD@@@@A@A@GCIEMCGAC@A@EDEDABAD@D@F@BJLB@@BABIDED@B@B@BBDFZ@B@BA@ODMBABAB@@BF@DBFAD@DAD@HBF@DBDBBDBFDBHBDDDLLBB@@BEBCAA@ABADA@CBAFE@A@@D@F@B@B@B@FGJEFEDAFEBGBC@CBCBABABA@A@CAC@A@C@ABC@KFM@ABAB@BBB@B@B@@@HKHIFEBAB@H@B@DBBBB@DBD@F@JADAD@B@BBBBBBB@FHBD@@BBB@BBB@BBBD@DBD@@@BB@B@D@BAB@B@@BDDFJDBBBDAB@BABABGDGFIDABAB@BB@B@@BD@@@BDBDBBBBBHFHHFJBB@BB@B@B@B@B@BB@@BBBB@@D@B@B@D@BBBBBDBBBBDBDBF@JBB@D@D@DBB@B@@@D@D@B@B@@@DABCHEBABAB@DBB@B@@@DABCDE@E@@DAB@DCBADE@A@GBADCFAFEDEDCDADAF@F@"],
					["@@B@BBB@@@@A@@@@@@AA@@@@@@@AC@@@A@@D@@@@B@"]
				],
				"encodeOffsets": [
					[
						[112656, 19183]
					],
					[
						[112788, 18878]
					]
				]
			}
		}, {
			"type": "Feature",
			"id": "469029",
			"properties": {
				"name": "保亭黎族苗族自治县",
				"cp": [109.70245, 18.636371],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@@AAKKCCACAGECCAAAAC@CAE@GBC@CBCAE@CAE@@BABANAPCB@@A@AEYAC@A@A@AFCJCBA@AA@IK@A@E@CBCBAFCFCB@D@HBNDJFHDB@B@@@@@AC@E@IBGBEBAB@DAH@L@F@B@@@@@AC@A@C@EBA@@BAFABAHOBAFEDCDE@@@CACCICA@AAG@AA@@@E@CBA@AAA@@AAA@A@CBADEBCBCBCBE@EBEAE@AAAA@A@CBA@ABA@AAA@A@CBAAA@AAACAAAAGA@@A@@C@CBC@@AC@AAG@AAG@EBG@G@EAGAAB@DIDAB@@C@A@@DA@@DABBB@B@F@B@DC@@BC@ABMFCD@F@@@B@@ABAB@B@DBHDH@B@@A@A@C@AFADG@A@ACE@A@@@@@ICAEGC@@@EAIE@@AMBABA@ABKCIIMACAAICKDAB@BABAA@AAA@CB@AAEAE@AB@@@BAF@B@DAFA@A@CACEGBA@AA@@CCCCA@E@IB@@AB@L@BA@AFABAB@@C@ABCBAB@BCCCAA@C@@BAA@C@A@C@@@KACCQAAC@GAGCEA@@ABABAA@AECMGC@A@G@A@@@@A@@@@@A@@AE@A@@@@BA@ABAAAAA@C@A@@@ABCBABA@AAA@@@@A@ABC@A@A@AA@@@@CCCCCEEI@GAC@ACK@A@OBEBABI@GAA@@CFCDEB@@CDEFA@CCEGEG@I@ABC@K@@C@A@G@@A@A@A@AAAAAA@AA@CDEBABA@CECEACB@@CD@B@@A@A@EAAAA@@@AC@A@A@A@@A@A@GBAAA@@@A@A@ABCBA@A@A@CACBEBADABABADA@@B@BAAA@@A@A@@ECAA@@@@A@C@A@@BA@@@AA@@ACCACAA@A@@BA@@@A@AAA@@A@@AAA@@@A@A@E@@@CAAA@@AAA@C@ABA@@B@@A@@B@@A@@@AA@@C@@@ABCFCDA@@BA@@@CAA@@@AAA@A@AAA@@AAAAAAA@AABIFA@EB@B@@@BE@A@@BA@A@A@AA@@ABA@A@AAA@A@A@ABCAC@AA@@CBA@C@@@CBAB@B@BAD@H@B@@@B@@@B@B@@ABID@BAJ@@A@AB@@@B@@@@ABA@KD@BEDAD@BA@A@AB@@@H@BAB@B@@B@@@BA@@BAB@BAB@HHBB@B@B@B@BB@BH@HABIH@B@JBBDB@@@B@BBN@BDBBBAFADBBDFBBJHBBBB@B@B@BAF@DA@BBBB@P@BAB@F@BAH@BBB@PBDAFA@CDGDEBABMBA@IBEBCBAR@BCFABCCE@A@C@A@A@ABIAGDCBABC@IFOCCAC@M@CDCBABA@EBEDEFEBABC@A@AAA@ABAA@A@AAAECC@A@ABAB@@AD@DDB@@BB@B@D@BAAABCDABBF@BAB@DABCDAB@DABAD@B@B@DADA@C@BDABCB@BBD@@@BBD@B@PAB@BED@DB@@BBBBB@B@@D@B@DABBF@B@H@D@F@D@BBDBFFDDDDFLBHBF@@BDFFDDB@BAFADAB@B@F@B@B@BA@ABAD@F@B@@ABABAD@DBF@D@@@BAD@F@D@D@FBNFDBHBDBB@@@BAB@BADAD@BADAD@D@B@DDBB@DBD@BD@LBD@DB@B@@@DCBCHADABABAB@B@DBD@BDB@@BB@BCHALCJ@DABCB@D@D@B@BHDBBDBHBDBBBBBBDBB@FBFBBBBFDB@@B@F@BBBDDJBDBDBDD@B@@@B@B@@@@A@A@@@@@@B@@@@B@D@B@DADAB@@@FBDBDAFADAB@@@BA@A@EAIAE@CA@A@C@A@A@C@EAAAAAAEBA@ABAD@B@F@B@DADAB@BABG@E@AB@BAB@BABABADGBEB@B@FAB@BB@@B@B@B@BCB@BADABA@EBADCFCFCBAB@@@@D@BBDDDDH@BBBB@@@FAB@@AB@@@BBBHDH@@@B@BABAD@D@B@BBBDDB@BB@F@BDD@BBB@B@B@BAB@@@BB@@@D@@@B@@@B@BAB@BBB@DBDBB@DAF@DADBB@DBD@B@FB@@BBB@B@D@FAB@DCDAFAF@F@BBB@B@D@DABABBB@@BBD@F@FBBBB@@@B@BCHADADAB@DELCLABEHAB@B@FAB@BGHADBD@B@B@BABAB@BABABA@AB@@BBHFBBBB@@CHAF@B@BBFBBBBB@BBB@@BB@BB@@@B@D@B@@CDEDCHAF@@@BBB@@BB@@@BBB@BBBDB@@D@B@D@B@F@B@J@F@LDB@@B@@D@HAB@DCDCB@DAB@@AHGHGFAFAD@BBLBL@FDF@B@B@DCDCB@BC@@@EDE"],
				"encodeOffsets": [
					[112409, 19261]
				]
			}
		}, {
			"type": "Feature",
			"id": "469027",
			"properties": {
				"name": "乐东黎族自治县",
				"cp": [109.175444, 18.74758],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@@@@@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@A@@@@@@A@@@@@@@A@@A@@@@@@A@@@@A@@A@@@@@@@@AA@@@@@@@@@@A@@A@@@@@@@@A@@@@A@@@@A@@@@@@@A@@@@A@@@@A@@@@@A@@AA@@@@@A@@@@@A@@@@@@A@@@@@@A@@@@@@@@@@@@AA@@@@@@@A@@@@A@@@@A@@@@@@AA@@@@@@@@AA@@@@@@@@@@@@@@A@@A@@@@@@@@A@@@@@@A@@A@@@@@@@AA@@@@@@A@@@@@@AA@@@@@@@@@@@AA@@@@@@A@@A@@@@A@@A@@@@A@@@@A@@@@@@A@@@@A@@@@AA@@@@@@@AA@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@A@@A@@@@@@A@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@AA@@@@@@@@@AA@@AA@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@A@@@@@@@@A@@@@@@A@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@@@A@@A@AA@@@A@@@@@@@@A@@@@@@@@@@@@@@AA@@@@@@@@@@@@@A@@@@@A@@A@@A@@@@@@@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@@AA@@@@@A@@@@@@@AAA@@@@@A@@A@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@AA@@@@@@@@@@A@@@@@@@@A@@@@@@@@A@@@@@@@@A@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@AA@@@@AA@@@@@AA@@@@@@@@@@@AA@ACA@@AA@AA@@@@@AA@@A@@A@@@@@@@@A@@A@@@@AA@@@@@@AA@@@@@@@AA@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@A@@@@A@@@@@A@@@@@A@@@@BEDEDE@@DI@A@@@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@ACAECCEEIA@@CBCDCACAEE@@@@AA@@@@@@@@@@@@@@A@A@CJAN@@@@@@@B@@@@B@@B@@@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@A@EDEBGAC@@@@@A@@@@@@B@@@@@@AB@@@@@BA@@@AD@@@@@BA@@B@@@@@@@B@@A@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@BCFIHKH@@@@@@@A@@@@A@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@BA@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@B@@@@@@@@@@@@@@@@A@@@@@@@@@A@@@@@@B@@@@@@@@@@A@@@@B@@@@A@@@@B@@@@@@@@@@A@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@A@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@A@@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@@A@@A@@@@A@@@@@@@AA@@A@@@@@@@@@@@@@@@AA@@@@@@@@MBMBGBEDE@EAECCEAGBG@EGCAAAE@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@@@A@@@@@@@C@@@@@@@A@@@@@@@@@@@@@@CGCAAEAG@GDI@IBEFA@@DCDO@MAGBGEE@AAEE@CAACFE@AIEECEAIBIBCDELEDA@@@@@@@@@A@@@A@@@@@@@@@@@@@@@AB@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@B@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@AB@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@A@@@@@@A@@A@@@E@CCE@AA@AGBID@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@MC@AACAB@A@@@@@@@@A@@@@@@@@@@@AAAD@BGDIBAE@@@@@@@@@@@A@@@@@@@@@@ACGACAACCACAECCCGCCBCBGDGFA@A@AAAA@CAAGOAC@AAA@AA@@@A@@BABC@EBC@GAEEAAA@AAAB@@A@A@A@@@C@AAA@A@AAA@A@A@ACCAAA@AAA@AA@@AKBGAAA@@BACC@AA@@AA@A@AA@AAA@AEE@ACE@A@E@C@@@AQCAAACEACAGECA@CBEAACCAAAAA@M\\i[hEHIFCB[@KBK@KDwPqTkJÇDkHePWNQXIZGtChDbÆNIHVNJDNALBN@T@PHLCPOJKHELLLBNAPAN@RPRTLJTPVHXJRRTLJHLFJDRFNDXFZADAB@DBHBD@B@DALEFAD@B@DBB@BBBD@@B@B@F@LABADAB@B@B@BFBBBBBBBFFHFHBBDBL@B@DBB@DDBBB@BAHCJAD@HADAF@D@D@B@DAFABBB@BFBBBBF@NBL@D@DAB@JLBF@F@NBT@FBDHJHDDDDFJJHDJBF@H@FAHBHBDBDPBL@BADB@DB@@BDDDHLFLBFBHBD@@BB@@DAF@B@B@B@DBBB@@BBBBB@@@D@H@DAD@B@BDBDB@B@F@B@B@F@B@B@BAD@DADAFAB@BCBCFCDCHCDAD@BADAB@FBB@D@B@@@FCD@B@B@BBBBBBDD@BB@FBD@H@D@@@B@DAD@B@FBF@BBFB@BBB@@BB@@F@B@B@B@DBBB@DAV@B@FBDDLBDBBDBDDB@D@DBDBBBBDBBDBBDBDDDB@BBB@@AB@B@@@B@BD@DBFBB@F@BB@@BB@@@BADABAD@BAB@FAJCFAHAD@BAB@B@BABAB@B@B@FDB@B@BAB@DEFABAF@@C@AA@@@AAA@C@A@C@AA@AAA@A@EACAAECICAAACAA@CDC@A@A@@AAC@@@@@@AFG@@@@@@B@B@@@@@BA@@B@@BB@@@B@BA@@@@BA@@@@@AB@@ABA@@@A@@@A@@BA@@@A@@@@BA@@BA@@@AB@@@@ABA@@BA@@@@@A@@@AA@@A@@@A@@@@@A@A@@B@@@@@@@BA@AB@@AB@@AB@@A@A@@@A@@@@AA@@AAA@@@A@@@@@@@@A@@@@@@B@B@@@B@@@@@B@@A@@@@@@@@@A@@@@@AA@@@A@@@@@AAAA@@@A@@@@DAB@D@FABAD@B@B@B@BAFADEFGDCDEFEBCBA@A@AAAACCACCCAAAA@@A@A@AAA@@CA@@@A@E@@AA@ABA@@@A@E@C@C@@CAAC@AAGAAACCAAA@A@A@C@E@ABABABA@A@A@AAC@ABGBG@EBC@E@C@ADA@AB@AAA@@@GBCAAE@KBEDEBABA@CC@AAAA@ADOBEDEBE@CACCCAGBO@KBELQJEPMFEFEDG@C@ABABAH@F@@@FCFGBG@G@ECKAGAK@ABCBCDCFEBAB@B@BABE@A@@BA@@@A@AAAAA@AA@"],
				"encodeOffsets": [
					[112031, 19071]
				]
			}
		}, {
			"type": "Feature",
			"id": "469030",
			"properties": {
				"name": "琼中黎族苗族自治县",
				"cp": [109.839996, 19.03557],
				"childNum": 1
			},
			"geometry": {
				"type": "Polygon",
				"coordinates": ["@@A@@AA@A@ABAB@@A@AA@@@A@@@A@@A@A@ABCBCAE@GEGCEIEIEOBGAMKIE@CA@@AAAACAAAA@AAACAADADA@CAC@E@C@@AOACAC@CDECA@CA[AE@ABCPQBAF@F@D@BABADCBADAB@@@DDN@NAHCFELMHKLMDEJIHGH@XBLBLANIPENKLMHM@GAI@I@EHM`DHBb@BA@@@A@@@@BBB@@@BA@A@AB@DA@@@@@@@A@@A@@A@@@@@@@A@A@@B@B@BA@@@@@ABCBAB@B@B@@@B@B@B@@@BB@@@AB@B@@AB@BAB@BBB@@@DAB@D@D@DABB@@@BB@B@B@BAAAAEBE@ABADCLGHGHO@IBEFGLGRBFBRFNBT@P@JCF@LIBGDQFQAMBODQBIBIAOAE@@@IEEBIDIBEHA@ABEDCFCFADABC@CJMDADAF@D@BABABABA@A@@AAAAA@@CAEAC@ABCDABA@A@ABA@A@ABA@A@AAAAAEEAACCAAAEBG@GEEIIGEMIe[IGEOBS@GCKKKGCOEKEGCSGWIMEEIJINQLUNKHGHGJOBKHQFGFEFMAIIKIKGEAAA@MCAAA@AE@CAC@A@A@ADCBAAC@@C@C@AAEECEACCGACCCA@C@A@GHCBA@A@C@A@AAAEAEAAECCAAA@CBC@A@AAC@E@A@@AAKAQEE@E@CBCBCDCFEFEBCDAB@H@BCFABCDA@CB@@@FCFADCB@@A@A@CAA@ABABGFADCB@@A@A@C@C@@@A@A@CAC@C@A@IAE@CACAAAAAACAAAAC@A@A@C@@@AAAA@@AAA@A@A@A@A@@AAAEIGGGEAAAACACA@A@@AC@@@AAAA@ABCBEJCHAHABABA@CBAACAEICC@AA@A@ABC@A@A@@A@@AC@CACAAA@AAA@AA@@ACEGA@AAAAAAA@C@CBIBE@C@CAA@AACAA@G@A@ABEFGJGL@@A@A@A@AAA@AB@BEN@LAD@B@D@BBD@D@BABABABAD@DADAHEFCBEFIFEHA@A@A@E@C@@@@BEFAB@DCBAB@BBBADAFCF@F@@ADA@CDCDA@A@E@ECK@KAAAC@EBEBGHGH@BA@CBA@CDCDA@GBC@AD@@@D@D@B@F@DBJ@DBH@D@DAHADABEFCDCDEBABGJ@BAF@B@BBFDDHFFHDBDBD@D@FAB@DBDBHHFDDF@B@B@BAB@@]DCBC@@BCFABCBCB@@C@@AA@EAAA@BA@ABCDCBCBC@ABA@AACAAAA@@@A@C@A@@BA@@BA@@AA@AC@AA@@AA@@@@@A@@AA@@@AAA@A@@AC@@@AA@AAAA@A@A@A@A@CBCBC@A@AB@@M@AA@@A@@A@AA@@@AAABA@CDCBGD@@E@IA@AA@@C@EA@@AAAA@I@EBICA@AA@@A@A@@@AB@FADCFAF@B@@ABE@A@A@A@E@G@E@CBADCBAHAD@D@FABA@CBA@CBOFGB@@CDELCF@D@B@P@DAFCNAB@BEFCDADABABA@AB@D@BAD@BCBCDAB@B@B@H@B@D@DBB@BDBBB@@@@@BABEBCFAFAHAD@B@BJFFFDBFBD@BBB@@H@FBHBF@RDFFFDDHDJBF@JAPEbQNGHEF@FBFBDBDDDH@FADALEJ@D@FBDDDDBHDFDDBDBBD@BF@B@BAD@B@DBD@HBBBDDDBBBD@DBBBB@@B@HAF@FBFDFDHFFDBB@F@H@H@BADCHELG@@BBLNLPBB@B@BADAB@D@DBHBF@D@DABCBEDIFADCHA@@DADAD@@BDBHBF@BBD@B@DBBBBBDDB@B@B@BBD@B@D@BBBBD@@BBDDBD@H@@BBDBBDBBBF@J@JBH@H@L@FAFAB@BAF@DGTABABCD@BBHBHBFDFDBBDBDBFFJDHBJBF@F@H@FALA@@B@@@@BBBBB@@B@@ABAB@@AB@DABAD@D@D@B@@A@A@A@AAAACA@@A@@B@@@DABCD@B@BBBBB@@@@EB@@E@C@AAABE@A@E@GAA@A@AD@BGBC@A@AAAA@A@@A@@@@@AB@@A@ABA@@@A@@@C@@@C@A@AAAAA@ABGBCB@FADBFBDDH@BBBAB@@ABABADABAB@BBF@D@F@BDD@B@B@BAB@@ABCBABAB@B@B@DBB@BDDD@DBJDDBB@B@B@FCD@D@D@D@HDBBDBBBDBHBB@@@D@DBDBB@B@HBF@BA@@B@DCJID@@AFAD@HCDBDBBDD@DBB@B@D@DBB@@@B@@@@AD@HEB@@CDAB@JAH@BBD@B@DADAF@F@@@BA@ADABC@@FG@@@@@ACE@A@@@@BABADCDE@AB@B@B@B@FAB@@@@ABA@A@A@@D@DABB@@@@@B@B@@@FBDB@DDB@@@DBBABBD@BBBBBDFD@@B@B@FBB@@ABBD@@BDBB@BDB@BBHBB@B@BABABADADCBAB@B@BABA@ABCB@@@B@BBBD@@BBBB@@BAD@B@B@BB@BA@@BAB@@A@A@ABADEBABA@CBA@@B@B@DBD@BB@NDDBBBBBBBBD@B@@@B@@@B@BA@@BBDB@BBB@BAB@BC@@@AEEAA@@BA@AD@BABBBAB@BADCBABA@C@A@C@A@AAE@A@@BAF@B@@ABCBADC"],
				"encodeOffsets": [
					[112514, 19853]
				]
			}
		}],
		"UTF8Encoding": true
	});
}));