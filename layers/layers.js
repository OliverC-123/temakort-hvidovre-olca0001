var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Folkeskoler_1 = new ol.format.GeoJSON();
var features_Folkeskoler_1 = format_Folkeskoler_1.readFeatures(json_Folkeskoler_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_1.addFeatures(features_Folkeskoler_1);
var lyr_Folkeskoler_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_1, 
                style: style_Folkeskoler_1,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_1.png" /> Folkeskoler'
            });
var format_Togstationer_2 = new ol.format.GeoJSON();
var features_Togstationer_2 = format_Togstationer_2.readFeatures(json_Togstationer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_2.addFeatures(features_Togstationer_2);
var lyr_Togstationer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_2, 
                style: style_Togstationer_2,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_2.png" /> Togstationer'
            });
var format_LokalplanforslagHvidovrekommune_3 = new ol.format.GeoJSON();
var features_LokalplanforslagHvidovrekommune_3 = format_LokalplanforslagHvidovrekommune_3.readFeatures(json_LokalplanforslagHvidovrekommune_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokalplanforslagHvidovrekommune_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokalplanforslagHvidovrekommune_3.addFeatures(features_LokalplanforslagHvidovrekommune_3);
var lyr_LokalplanforslagHvidovrekommune_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokalplanforslagHvidovrekommune_3, 
                style: style_LokalplanforslagHvidovrekommune_3,
                popuplayertitle: 'Lokalplan forslag Hvidovre kommune',
                interactive: true,
    title: 'Lokalplan forslag Hvidovre kommune<br />\
    <img src="styles/legend/LokalplanforslagHvidovrekommune_3_0.png" /> Boligområde ved Planteheldvej og Femagervej<br />\
    <img src="styles/legend/LokalplanforslagHvidovrekommune_3_1.png" /> for blandet byområde ved Svend Aagesens Alle 10<br />\
    <img src="styles/legend/LokalplanforslagHvidovrekommune_3_2.png" /> for sportshal ved Risbjergskolen<br />\
    <img src="styles/legend/LokalplanforslagHvidovrekommune_3_3.png" /> <br />' });
var format_Kirker_4 = new ol.format.GeoJSON();
var features_Kirker_4 = format_Kirker_4.readFeatures(json_Kirker_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirker_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirker_4.addFeatures(features_Kirker_4);
var lyr_Kirker_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirker_4, 
                style: style_Kirker_4,
                popuplayertitle: 'Kirker',
                interactive: true,
                title: '<img src="styles/legend/Kirker_4.png" /> Kirker'
            });
var format_Ladestationer_5 = new ol.format.GeoJSON();
var features_Ladestationer_5 = format_Ladestationer_5.readFeatures(json_Ladestationer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ladestationer_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ladestationer_5.addFeatures(features_Ladestationer_5);
var lyr_Ladestationer_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ladestationer_5, 
                style: style_Ladestationer_5,
                popuplayertitle: 'Ladestationer',
                interactive: true,
                title: '<img src="styles/legend/Ladestationer_5.png" /> Ladestationer'
            });
var format_Mosque_6 = new ol.format.GeoJSON();
var features_Mosque_6 = format_Mosque_6.readFeatures(json_Mosque_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mosque_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_6.addFeatures(features_Mosque_6);
var lyr_Mosque_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosque_6, 
                style: style_Mosque_6,
                popuplayertitle: 'Mosque',
                interactive: true,
                title: '<img src="styles/legend/Mosque_6.png" /> Mosque'
            });
var format_Klippetstrandomrde_7 = new ol.format.GeoJSON();
var features_Klippetstrandomrde_7 = format_Klippetstrandomrde_7.readFeatures(json_Klippetstrandomrde_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Klippetstrandomrde_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Klippetstrandomrde_7.addFeatures(features_Klippetstrandomrde_7);
var lyr_Klippetstrandomrde_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Klippetstrandomrde_7, 
                style: style_Klippetstrandomrde_7,
                popuplayertitle: 'Klippet strandområde',
                interactive: false,
                title: '<img src="styles/legend/Klippetstrandomrde_7.png" /> Klippet strandområde'
            });
var format_Friluftsbad_8 = new ol.format.GeoJSON();
var features_Friluftsbad_8 = format_Friluftsbad_8.readFeatures(json_Friluftsbad_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Friluftsbad_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Friluftsbad_8.addFeatures(features_Friluftsbad_8);
var lyr_Friluftsbad_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Friluftsbad_8, 
                style: style_Friluftsbad_8,
                popuplayertitle: 'Friluftsbad',
                interactive: true,
                title: '<img src="styles/legend/Friluftsbad_8.png" /> Friluftsbad'
            });
var format_LokalplanHvidovre_9 = new ol.format.GeoJSON();
var features_LokalplanHvidovre_9 = format_LokalplanHvidovre_9.readFeatures(json_LokalplanHvidovre_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokalplanHvidovre_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokalplanHvidovre_9.addFeatures(features_LokalplanHvidovre_9);
var lyr_LokalplanHvidovre_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokalplanHvidovre_9, 
                style: style_LokalplanHvidovre_9,
                popuplayertitle: 'Lokalplan Hvidovre',
                interactive: true,
    title: 'Lokalplan Hvidovre<br />\
    <img src="styles/legend/LokalplanHvidovre_9_0.png" /> 001<br />\
    <img src="styles/legend/LokalplanHvidovre_9_1.png" /> 101-1<br />\
    <img src="styles/legend/LokalplanHvidovre_9_2.png" /> 102<br />\
    <img src="styles/legend/LokalplanHvidovre_9_3.png" /> 103<br />\
    <img src="styles/legend/LokalplanHvidovre_9_4.png" /> 104<br />\
    <img src="styles/legend/LokalplanHvidovre_9_5.png" /> 105<br />\
    <img src="styles/legend/LokalplanHvidovre_9_6.png" /> 106<br />\
    <img src="styles/legend/LokalplanHvidovre_9_7.png" /> 108<br />\
    <img src="styles/legend/LokalplanHvidovre_9_8.png" /> 109-1<br />\
    <img src="styles/legend/LokalplanHvidovre_9_9.png" /> 112<br />\
    <img src="styles/legend/LokalplanHvidovre_9_10.png" /> 115<br />\
    <img src="styles/legend/LokalplanHvidovre_9_11.png" /> 116<br />\
    <img src="styles/legend/LokalplanHvidovre_9_12.png" /> 118<br />\
    <img src="styles/legend/LokalplanHvidovre_9_13.png" /> 119<br />\
    <img src="styles/legend/LokalplanHvidovre_9_14.png" /> 120<br />\
    <img src="styles/legend/LokalplanHvidovre_9_15.png" /> 121<br />\
    <img src="styles/legend/LokalplanHvidovre_9_16.png" /> 122<br />\
    <img src="styles/legend/LokalplanHvidovre_9_17.png" /> 124<br />\
    <img src="styles/legend/LokalplanHvidovre_9_18.png" /> 126<br />\
    <img src="styles/legend/LokalplanHvidovre_9_19.png" /> 127<br />\
    <img src="styles/legend/LokalplanHvidovre_9_20.png" /> 128<br />\
    <img src="styles/legend/LokalplanHvidovre_9_21.png" /> 131<br />\
    <img src="styles/legend/LokalplanHvidovre_9_22.png" /> 132<br />\
    <img src="styles/legend/LokalplanHvidovre_9_23.png" /> 133<br />\
    <img src="styles/legend/LokalplanHvidovre_9_24.png" /> 134<br />\
    <img src="styles/legend/LokalplanHvidovre_9_25.png" /> 135<br />\
    <img src="styles/legend/LokalplanHvidovre_9_26.png" /> 137<br />\
    <img src="styles/legend/LokalplanHvidovre_9_27.png" /> 139<br />\
    <img src="styles/legend/LokalplanHvidovre_9_28.png" /> 140<br />\
    <img src="styles/legend/LokalplanHvidovre_9_29.png" /> 141<br />\
    <img src="styles/legend/LokalplanHvidovre_9_30.png" /> 142<br />\
    <img src="styles/legend/LokalplanHvidovre_9_31.png" /> 143<br />\
    <img src="styles/legend/LokalplanHvidovre_9_32.png" /> 144<br />\
    <img src="styles/legend/LokalplanHvidovre_9_33.png" /> 147<br />\
    <img src="styles/legend/LokalplanHvidovre_9_34.png" /> 148<br />\
    <img src="styles/legend/LokalplanHvidovre_9_35.png" /> 149<br />\
    <img src="styles/legend/LokalplanHvidovre_9_36.png" /> 150<br />\
    <img src="styles/legend/LokalplanHvidovre_9_37.png" /> 151<br />\
    <img src="styles/legend/LokalplanHvidovre_9_38.png" /> 152<br />\
    <img src="styles/legend/LokalplanHvidovre_9_39.png" /> 154<br />\
    <img src="styles/legend/LokalplanHvidovre_9_40.png" /> 202<br />\
    <img src="styles/legend/LokalplanHvidovre_9_41.png" /> 203<br />\
    <img src="styles/legend/LokalplanHvidovre_9_42.png" /> 206<br />\
    <img src="styles/legend/LokalplanHvidovre_9_43.png" /> 207<br />\
    <img src="styles/legend/LokalplanHvidovre_9_44.png" /> 208<br />\
    <img src="styles/legend/LokalplanHvidovre_9_45.png" /> 209<br />\
    <img src="styles/legend/LokalplanHvidovre_9_46.png" /> 210<br />\
    <img src="styles/legend/LokalplanHvidovre_9_47.png" /> 211<br />\
    <img src="styles/legend/LokalplanHvidovre_9_48.png" /> 216<br />\
    <img src="styles/legend/LokalplanHvidovre_9_49.png" /> 220<br />\
    <img src="styles/legend/LokalplanHvidovre_9_50.png" /> 221<br />\
    <img src="styles/legend/LokalplanHvidovre_9_51.png" /> 225<br />\
    <img src="styles/legend/LokalplanHvidovre_9_52.png" /> 226<br />\
    <img src="styles/legend/LokalplanHvidovre_9_53.png" /> 228<br />\
    <img src="styles/legend/LokalplanHvidovre_9_54.png" /> 229<br />\
    <img src="styles/legend/LokalplanHvidovre_9_55.png" /> 230<br />\
    <img src="styles/legend/LokalplanHvidovre_9_56.png" /> 231<br />\
    <img src="styles/legend/LokalplanHvidovre_9_57.png" /> 232<br />\
    <img src="styles/legend/LokalplanHvidovre_9_58.png" /> 233<br />\
    <img src="styles/legend/LokalplanHvidovre_9_59.png" /> 234<br />\
    <img src="styles/legend/LokalplanHvidovre_9_60.png" /> 236<br />\
    <img src="styles/legend/LokalplanHvidovre_9_61.png" /> 237<br />\
    <img src="styles/legend/LokalplanHvidovre_9_62.png" /> 238<br />\
    <img src="styles/legend/LokalplanHvidovre_9_63.png" /> 239<br />\
    <img src="styles/legend/LokalplanHvidovre_9_64.png" /> 240<br />\
    <img src="styles/legend/LokalplanHvidovre_9_65.png" /> 241<br />\
    <img src="styles/legend/LokalplanHvidovre_9_66.png" /> 301-1<br />\
    <img src="styles/legend/LokalplanHvidovre_9_67.png" /> 303<br />\
    <img src="styles/legend/LokalplanHvidovre_9_68.png" /> 304<br />\
    <img src="styles/legend/LokalplanHvidovre_9_69.png" /> 305<br />\
    <img src="styles/legend/LokalplanHvidovre_9_70.png" /> 306<br />\
    <img src="styles/legend/LokalplanHvidovre_9_71.png" /> 313<br />\
    <img src="styles/legend/LokalplanHvidovre_9_72.png" /> 314<br />\
    <img src="styles/legend/LokalplanHvidovre_9_73.png" /> 316<br />\
    <img src="styles/legend/LokalplanHvidovre_9_74.png" /> 322<br />\
    <img src="styles/legend/LokalplanHvidovre_9_75.png" /> 323<br />\
    <img src="styles/legend/LokalplanHvidovre_9_76.png" /> 324<br />\
    <img src="styles/legend/LokalplanHvidovre_9_77.png" /> 325<br />\
    <img src="styles/legend/LokalplanHvidovre_9_78.png" /> 326<br />\
    <img src="styles/legend/LokalplanHvidovre_9_79.png" /> 327<br />\
    <img src="styles/legend/LokalplanHvidovre_9_80.png" /> 328<br />\
    <img src="styles/legend/LokalplanHvidovre_9_81.png" /> 329<br />\
    <img src="styles/legend/LokalplanHvidovre_9_82.png" /> 330<br />\
    <img src="styles/legend/LokalplanHvidovre_9_83.png" /> 331<br />\
    <img src="styles/legend/LokalplanHvidovre_9_84.png" /> 332<br />\
    <img src="styles/legend/LokalplanHvidovre_9_85.png" /> 335<br />\
    <img src="styles/legend/LokalplanHvidovre_9_86.png" /> 338<br />\
    <img src="styles/legend/LokalplanHvidovre_9_87.png" /> 339<br />\
    <img src="styles/legend/LokalplanHvidovre_9_88.png" /> 340<br />\
    <img src="styles/legend/LokalplanHvidovre_9_89.png" /> 341<br />\
    <img src="styles/legend/LokalplanHvidovre_9_90.png" /> 342<br />\
    <img src="styles/legend/LokalplanHvidovre_9_91.png" /> 343<br />\
    <img src="styles/legend/LokalplanHvidovre_9_92.png" /> 345<br />\
    <img src="styles/legend/LokalplanHvidovre_9_93.png" /> 403-1<br />\
    <img src="styles/legend/LokalplanHvidovre_9_94.png" /> 404<br />\
    <img src="styles/legend/LokalplanHvidovre_9_95.png" /> 405<br />\
    <img src="styles/legend/LokalplanHvidovre_9_96.png" /> 407<br />\
    <img src="styles/legend/LokalplanHvidovre_9_97.png" /> 408<br />\
    <img src="styles/legend/LokalplanHvidovre_9_98.png" /> 409<br />\
    <img src="styles/legend/LokalplanHvidovre_9_99.png" /> 411<br />\
    <img src="styles/legend/LokalplanHvidovre_9_100.png" /> 412<br />\
    <img src="styles/legend/LokalplanHvidovre_9_101.png" /> 418<br />\
    <img src="styles/legend/LokalplanHvidovre_9_102.png" /> 423<br />\
    <img src="styles/legend/LokalplanHvidovre_9_103.png" /> 429<br />\
    <img src="styles/legend/LokalplanHvidovre_9_104.png" /> 432<br />\
    <img src="styles/legend/LokalplanHvidovre_9_105.png" /> 433<br />\
    <img src="styles/legend/LokalplanHvidovre_9_106.png" /> 440<br />\
    <img src="styles/legend/LokalplanHvidovre_9_107.png" /> 441<br />\
    <img src="styles/legend/LokalplanHvidovre_9_108.png" /> 447<br />\
    <img src="styles/legend/LokalplanHvidovre_9_109.png" /> 448<br />\
    <img src="styles/legend/LokalplanHvidovre_9_110.png" /> 452<br />\
    <img src="styles/legend/LokalplanHvidovre_9_111.png" /> 454<br />\
    <img src="styles/legend/LokalplanHvidovre_9_112.png" /> 455<br />\
    <img src="styles/legend/LokalplanHvidovre_9_113.png" /> 456<br />\
    <img src="styles/legend/LokalplanHvidovre_9_114.png" /> 457<br />\
    <img src="styles/legend/LokalplanHvidovre_9_115.png" /> 458<br />\
    <img src="styles/legend/LokalplanHvidovre_9_116.png" /> 459<br />\
    <img src="styles/legend/LokalplanHvidovre_9_117.png" /> 462<br />\
    <img src="styles/legend/LokalplanHvidovre_9_118.png" /> 463<br />\
    <img src="styles/legend/LokalplanHvidovre_9_119.png" /> 464<br />\
    <img src="styles/legend/LokalplanHvidovre_9_120.png" /> 466<br />\
    <img src="styles/legend/LokalplanHvidovre_9_121.png" /> 467<br />\
    <img src="styles/legend/LokalplanHvidovre_9_122.png" /> 468<br />\
    <img src="styles/legend/LokalplanHvidovre_9_123.png" /> 469<br />\
    <img src="styles/legend/LokalplanHvidovre_9_124.png" /> 470<br />\
    <img src="styles/legend/LokalplanHvidovre_9_125.png" /> 471<br />\
    <img src="styles/legend/LokalplanHvidovre_9_126.png" /> 472<br />\
    <img src="styles/legend/LokalplanHvidovre_9_127.png" /> 473<br />\
    <img src="styles/legend/LokalplanHvidovre_9_128.png" /> 475<br />\
    <img src="styles/legend/LokalplanHvidovre_9_129.png" /> 476<br />\
    <img src="styles/legend/LokalplanHvidovre_9_130.png" /> 504<br />\
    <img src="styles/legend/LokalplanHvidovre_9_131.png" /> 507<br />\
    <img src="styles/legend/LokalplanHvidovre_9_132.png" /> 508<br />\
    <img src="styles/legend/LokalplanHvidovre_9_133.png" /> 510<br />\
    <img src="styles/legend/LokalplanHvidovre_9_134.png" /> 511<br />\
    <img src="styles/legend/LokalplanHvidovre_9_135.png" /> 516<br />\
    <img src="styles/legend/LokalplanHvidovre_9_136.png" /> 518<br />\
    <img src="styles/legend/LokalplanHvidovre_9_137.png" /> 519<br />\
    <img src="styles/legend/LokalplanHvidovre_9_138.png" /> A1<br />\
    <img src="styles/legend/LokalplanHvidovre_9_139.png" /> A10<br />\
    <img src="styles/legend/LokalplanHvidovre_9_140.png" /> A11<br />\
    <img src="styles/legend/LokalplanHvidovre_9_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovre_9_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/LokalplanHvidovre_9_143.png" /> A13<br />\
    <img src="styles/legend/LokalplanHvidovre_9_144.png" /> A14<br />\
    <img src="styles/legend/LokalplanHvidovre_9_145.png" /> A15<br />\
    <img src="styles/legend/LokalplanHvidovre_9_146.png" /> A3<br />\
    <img src="styles/legend/LokalplanHvidovre_9_147.png" /> A5<br />\
    <img src="styles/legend/LokalplanHvidovre_9_148.png" /> A7<br />\
    <img src="styles/legend/LokalplanHvidovre_9_149.png" /> A8<br />\
    <img src="styles/legend/LokalplanHvidovre_9_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovre_9_151.png" /> B17<br />\
    <img src="styles/legend/LokalplanHvidovre_9_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovre_9_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/LokalplanHvidovre_9_154.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/LokalplanHvidovre_9_155.png" /> H10<br />\
    <img src="styles/legend/LokalplanHvidovre_9_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovre_9_157.png" /> H11<br />\
    <img src="styles/legend/LokalplanHvidovre_9_158.png" /> H12<br />\
    <img src="styles/legend/LokalplanHvidovre_9_159.png" /> H13<br />\
    <img src="styles/legend/LokalplanHvidovre_9_160.png" /> H14<br />\
    <img src="styles/legend/LokalplanHvidovre_9_161.png" /> H15<br />\
    <img src="styles/legend/LokalplanHvidovre_9_162.png" /> H16<br />\
    <img src="styles/legend/LokalplanHvidovre_9_163.png" /> H17<br />\
    <img src="styles/legend/LokalplanHvidovre_9_164.png" /> H18<br />\
    <img src="styles/legend/LokalplanHvidovre_9_165.png" /> H20<br />\
    <img src="styles/legend/LokalplanHvidovre_9_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/LokalplanHvidovre_9_167.png" /> H3<br />\
    <img src="styles/legend/LokalplanHvidovre_9_168.png" /> H4<br />\
    <img src="styles/legend/LokalplanHvidovre_9_169.png" /> H5<br />\
    <img src="styles/legend/LokalplanHvidovre_9_170.png" /> H9<br />\
    <img src="styles/legend/LokalplanHvidovre_9_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/LokalplanHvidovre_9_172.png" /> <br />' });
var format_frededeomrder_10 = new ol.format.GeoJSON();
var features_frededeomrder_10 = format_frededeomrder_10.readFeatures(json_frededeomrder_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frededeomrder_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frededeomrder_10.addFeatures(features_frededeomrder_10);
var lyr_frededeomrder_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frededeomrder_10, 
                style: style_frededeomrder_10,
                popuplayertitle: 'frededeområder',
                interactive: false,
    title: 'frededeområder<br />\
    <img src="styles/legend/frededeomrder_10_0.png" /> Damhuså<br />\
    <img src="styles/legend/frededeomrder_10_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/frededeomrder_10_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/frededeomrder_10_3.png" /> Vestvolden<br />\
    <img src="styles/legend/frededeomrder_10_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/frededeomrder_10_5.png" /> <br />' });
var format_Kommuneplan_11 = new ol.format.GeoJSON();
var features_Kommuneplan_11 = format_Kommuneplan_11.readFeatures(json_Kommuneplan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommuneplan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommuneplan_11.addFeatures(features_Kommuneplan_11);
var lyr_Kommuneplan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommuneplan_11, 
                style: style_Kommuneplan_11,
                popuplayertitle: 'Kommuneplan',
                interactive: false,
                title: '<img src="styles/legend/Kommuneplan_11.png" /> Kommuneplan'
            });
var format_Brnehaver_12 = new ol.format.GeoJSON();
var features_Brnehaver_12 = format_Brnehaver_12.readFeatures(json_Brnehaver_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehaver_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehaver_12.addFeatures(features_Brnehaver_12);
var lyr_Brnehaver_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehaver_12, 
                style: style_Brnehaver_12,
                popuplayertitle: 'Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/Brnehaver_12.png" /> Børnehaver'
            });
var format_Legepladser_13 = new ol.format.GeoJSON();
var features_Legepladser_13 = format_Legepladser_13.readFeatures(json_Legepladser_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legepladser_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legepladser_13.addFeatures(features_Legepladser_13);
var lyr_Legepladser_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legepladser_13, 
                style: style_Legepladser_13,
                popuplayertitle: 'Legepladser',
                interactive: true,
                title: '<img src="styles/legend/Legepladser_13.png" /> Legepladser'
            });
var format_Lystbdehavn_14 = new ol.format.GeoJSON();
var features_Lystbdehavn_14 = format_Lystbdehavn_14.readFeatures(json_Lystbdehavn_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lystbdehavn_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lystbdehavn_14.addFeatures(features_Lystbdehavn_14);
var lyr_Lystbdehavn_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lystbdehavn_14, 
                style: style_Lystbdehavn_14,
                popuplayertitle: 'Lystbådehavn',
                interactive: true,
                title: '<img src="styles/legend/Lystbdehavn_14.png" /> Lystbådehavn'
            });
var format_Sportsfaciliteter_15 = new ol.format.GeoJSON();
var features_Sportsfaciliteter_15 = format_Sportsfaciliteter_15.readFeatures(json_Sportsfaciliteter_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sportsfaciliteter_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportsfaciliteter_15.addFeatures(features_Sportsfaciliteter_15);
var lyr_Sportsfaciliteter_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportsfaciliteter_15, 
                style: style_Sportsfaciliteter_15,
                popuplayertitle: 'Sports faciliteter',
                interactive: true,
                title: '<img src="styles/legend/Sportsfaciliteter_15.png" /> Sports faciliteter'
            });
var format_Sportsfaciliteter2_16 = new ol.format.GeoJSON();
var features_Sportsfaciliteter2_16 = format_Sportsfaciliteter2_16.readFeatures(json_Sportsfaciliteter2_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sportsfaciliteter2_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sportsfaciliteter2_16.addFeatures(features_Sportsfaciliteter2_16);
var lyr_Sportsfaciliteter2_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sportsfaciliteter2_16, 
                style: style_Sportsfaciliteter2_16,
                popuplayertitle: 'Sports faciliteter 2',
                interactive: true,
                title: '<img src="styles/legend/Sportsfaciliteter2_16.png" /> Sports faciliteter 2'
            });
var format_HvidovreHospital_17 = new ol.format.GeoJSON();
var features_HvidovreHospital_17 = format_HvidovreHospital_17.readFeatures(json_HvidovreHospital_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovreHospital_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovreHospital_17.addFeatures(features_HvidovreHospital_17);
var lyr_HvidovreHospital_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovreHospital_17, 
                style: style_HvidovreHospital_17,
                popuplayertitle: 'Hvidovre Hospital',
                interactive: true,
                title: '<img src="styles/legend/HvidovreHospital_17.png" /> Hvidovre Hospital'
            });
var format_Lgehuse_18 = new ol.format.GeoJSON();
var features_Lgehuse_18 = format_Lgehuse_18.readFeatures(json_Lgehuse_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgehuse_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgehuse_18.addFeatures(features_Lgehuse_18);
var lyr_Lgehuse_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lgehuse_18, 
                style: style_Lgehuse_18,
                popuplayertitle: 'Lægehuse',
                interactive: true,
                title: '<img src="styles/legend/Lgehuse_18.png" /> Lægehuse'
            });
var format_OffentligtWC_19 = new ol.format.GeoJSON();
var features_OffentligtWC_19 = format_OffentligtWC_19.readFeatures(json_OffentligtWC_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OffentligtWC_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OffentligtWC_19.addFeatures(features_OffentligtWC_19);
var lyr_OffentligtWC_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OffentligtWC_19, 
                style: style_OffentligtWC_19,
                popuplayertitle: 'Offentligt WC',
                interactive: true,
                title: '<img src="styles/legend/OffentligtWC_19.png" /> Offentligt WC'
            });
var format_Supermarkeder365Discount_20 = new ol.format.GeoJSON();
var features_Supermarkeder365Discount_20 = format_Supermarkeder365Discount_20.readFeatures(json_Supermarkeder365Discount_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermarkeder365Discount_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarkeder365Discount_20.addFeatures(features_Supermarkeder365Discount_20);
var lyr_Supermarkeder365Discount_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermarkeder365Discount_20, 
                style: style_Supermarkeder365Discount_20,
                popuplayertitle: 'Supermarkeder — 365Discount',
                interactive: true,
                title: '<img src="styles/legend/Supermarkeder365Discount_20.png" /> Supermarkeder — 365Discount'
            });
var format_SupermarkederFtex_21 = new ol.format.GeoJSON();
var features_SupermarkederFtex_21 = format_SupermarkederFtex_21.readFeatures(json_SupermarkederFtex_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupermarkederFtex_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupermarkederFtex_21.addFeatures(features_SupermarkederFtex_21);
var lyr_SupermarkederFtex_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupermarkederFtex_21, 
                style: style_SupermarkederFtex_21,
                popuplayertitle: 'Supermarkeder — Føtex',
                interactive: true,
                title: '<img src="styles/legend/SupermarkederFtex_21.png" /> Supermarkeder — Føtex'
            });
var format_SupermarkederKvickley_22 = new ol.format.GeoJSON();
var features_SupermarkederKvickley_22 = format_SupermarkederKvickley_22.readFeatures(json_SupermarkederKvickley_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupermarkederKvickley_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupermarkederKvickley_22.addFeatures(features_SupermarkederKvickley_22);
var lyr_SupermarkederKvickley_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupermarkederKvickley_22, 
                style: style_SupermarkederKvickley_22,
                popuplayertitle: 'Supermarkeder — Kvickley',
                interactive: true,
                title: '<img src="styles/legend/SupermarkederKvickley_22.png" /> Supermarkeder — Kvickley'
            });
var format_SupermarkederLidl_23 = new ol.format.GeoJSON();
var features_SupermarkederLidl_23 = format_SupermarkederLidl_23.readFeatures(json_SupermarkederLidl_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupermarkederLidl_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupermarkederLidl_23.addFeatures(features_SupermarkederLidl_23);
var lyr_SupermarkederLidl_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupermarkederLidl_23, 
                style: style_SupermarkederLidl_23,
                popuplayertitle: 'Supermarkeder — Lidl',
                interactive: true,
                title: '<img src="styles/legend/SupermarkederLidl_23.png" /> Supermarkeder — Lidl'
            });
var format_SupermarkederNetto_24 = new ol.format.GeoJSON();
var features_SupermarkederNetto_24 = format_SupermarkederNetto_24.readFeatures(json_SupermarkederNetto_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupermarkederNetto_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupermarkederNetto_24.addFeatures(features_SupermarkederNetto_24);
var lyr_SupermarkederNetto_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupermarkederNetto_24, 
                style: style_SupermarkederNetto_24,
                popuplayertitle: 'Supermarkeder — Netto',
                interactive: true,
                title: '<img src="styles/legend/SupermarkederNetto_24.png" /> Supermarkeder — Netto'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Folkeskoler_1.setVisible(true);lyr_Togstationer_2.setVisible(true);lyr_LokalplanforslagHvidovrekommune_3.setVisible(true);lyr_Kirker_4.setVisible(true);lyr_Ladestationer_5.setVisible(true);lyr_Mosque_6.setVisible(true);lyr_Klippetstrandomrde_7.setVisible(true);lyr_Friluftsbad_8.setVisible(true);lyr_LokalplanHvidovre_9.setVisible(true);lyr_frededeomrder_10.setVisible(true);lyr_Kommuneplan_11.setVisible(true);lyr_Brnehaver_12.setVisible(true);lyr_Legepladser_13.setVisible(true);lyr_Lystbdehavn_14.setVisible(true);lyr_Sportsfaciliteter_15.setVisible(true);lyr_Sportsfaciliteter2_16.setVisible(true);lyr_HvidovreHospital_17.setVisible(true);lyr_Lgehuse_18.setVisible(true);lyr_OffentligtWC_19.setVisible(true);lyr_Supermarkeder365Discount_20.setVisible(true);lyr_SupermarkederFtex_21.setVisible(true);lyr_SupermarkederKvickley_22.setVisible(true);lyr_SupermarkederLidl_23.setVisible(true);lyr_SupermarkederNetto_24.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Folkeskoler_1,lyr_Togstationer_2,lyr_LokalplanforslagHvidovrekommune_3,lyr_Kirker_4,lyr_Ladestationer_5,lyr_Mosque_6,lyr_Klippetstrandomrde_7,lyr_Friluftsbad_8,lyr_LokalplanHvidovre_9,lyr_frededeomrder_10,lyr_Kommuneplan_11,lyr_Brnehaver_12,lyr_Legepladser_13,lyr_Lystbdehavn_14,lyr_Sportsfaciliteter_15,lyr_Sportsfaciliteter2_16,lyr_HvidovreHospital_17,lyr_Lgehuse_18,lyr_OffentligtWC_19,lyr_Supermarkeder365Discount_20,lyr_SupermarkederFtex_21,lyr_SupermarkederKvickley_22,lyr_SupermarkederLidl_23,lyr_SupermarkederNetto_24];
lyr_Folkeskoler_1.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Togstationer_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LokalplanforslagHvidovrekommune_3.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Kirker_4.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Religion': 'Religion', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Ladestationer_5.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Leverandø': 'Leverandø', 'Lukketid': 'Lukketid', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Mosque_6.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Religion': 'Religion', 'Adresse': 'Adresse', 'By': 'By', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Klippetstrandomrde_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_Friluftsbad_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LokalplanHvidovre_9.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_frededeomrder_10.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Kommuneplan_11.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Brnehaver_12.set('fieldAliases', {'fid': 'fid', 'Instutionn': 'Instutionn', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Legepladser_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lystbdehavn_14.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Sportsfaciliteter_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Website': 'Website', });
lyr_Sportsfaciliteter2_16.set('fieldAliases', {'fid': 'fid', 'Navn': 'Navn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_HvidovreHospital_17.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lgehuse_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_OffentligtWC_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Supermarkeder365Discount_20.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SupermarkederFtex_21.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SupermarkederKvickley_22.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SupermarkederLidl_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SupermarkederNetto_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Folkeskoler_1.set('fieldImages', {'fid': 'TextEdit', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Togstationer_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'TextEdit', });
lyr_LokalplanforslagHvidovrekommune_3.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Kirker_4.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Religion': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Ladestationer_5.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Leverandø': 'TextEdit', 'Lukketid': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Mosque_6.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Religion': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Klippetstrandomrde_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_Friluftsbad_8.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_LokalplanHvidovre_9.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_frededeomrder_10.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_Kommuneplan_11.set('fieldImages', {'fid': 'TextEdit', 'oid': 'TextEdit', 'id': 'Range', 'planid': 'Range', 'objektkode': 'Range', 'komnr': 'Range', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datoslut': 'Range', 'aktuel': 'TextEdit', 'datooprt': 'DateTime', 'datoopdt': 'DateTime', 'status': 'TextEdit', 'datostart': 'Range', 'glkomnr': 'Range', 'kommunenavn': 'TextEdit', 'glkomnavn': 'TextEdit', 'glkomnavn_besk': 'TextEdit', });
lyr_Brnehaver_12.set('fieldImages', {'fid': '', 'Instutionn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Legepladser_13.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Lystbdehavn_14.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Sportsfaciliteter_15.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMo': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', 'Website': 'TextEdit', });
lyr_Sportsfaciliteter2_16.set('fieldImages', {'fid': '', 'Navn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_HvidovreHospital_17.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Lgehuse_18.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_OffentligtWC_19.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Supermarkeder365Discount_20.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SupermarkederFtex_21.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SupermarkederKvickley_22.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SupermarkederLidl_23.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SupermarkederNetto_24.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Folkeskoler_1.set('fieldLabels', {'fid': 'no label', 'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'inline label - always visible', 'latlong': 'no label', });
lyr_Togstationer_2.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - always visible', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'icon': 'no label', });
lyr_LokalplanforslagHvidovrekommune_3.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_Kirker_4.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Religion': 'no label', 'Adresse': 'no label', 'By': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Ladestationer_5.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Leverandø': 'no label', 'Lukketid': 'no label', 'Adresse': 'no label', 'By': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Mosque_6.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Religion': 'no label', 'Adresse': 'no label', 'By': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Klippetstrandomrde_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_Friluftsbad_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LokalplanHvidovre_9.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_frededeomrder_10.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Kommuneplan_11.set('fieldLabels', {'fid': 'hidden field', 'oid': 'hidden field', 'id': 'hidden field', 'planid': 'inline label - always visible', 'objektkode': 'hidden field', 'komnr': 'hidden field', 'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', 'datoforsl': 'hidden field', 'datovedt': 'inline label - always visible', 'datoaflyst': 'hidden field', 'datoikraft': 'hidden field', 'datoslut': 'hidden field', 'aktuel': 'hidden field', 'datooprt': 'hidden field', 'datoopdt': 'hidden field', 'status': 'hidden field', 'datostart': 'hidden field', 'glkomnr': 'hidden field', 'kommunenavn': 'hidden field', 'glkomnavn': 'hidden field', 'glkomnavn_besk': 'hidden field', });
lyr_Brnehaver_12.set('fieldLabels', {'fid': 'no label', 'Instutionn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Telefonnum': 'no label', });
lyr_Legepladser_13.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Lystbdehavn_14.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Sportsfaciliteter_15.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'Website': 'no label', });
lyr_Sportsfaciliteter2_16.set('fieldLabels', {'fid': 'no label', 'Navn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', });
lyr_HvidovreHospital_17.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Lgehuse_18.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_OffentligtWC_19.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Supermarkeder365Discount_20.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SupermarkederFtex_21.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SupermarkederKvickley_22.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SupermarkederLidl_23.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SupermarkederNetto_24.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_SupermarkederNetto_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});