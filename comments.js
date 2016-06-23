﻿<b:if cond='data:post.numComments != 0'>
         var Items = <data:post.commentJso/>;
         var Msgs = <data:post.commentMsgs/>;
         var Config = <data:post.commentConfig/>;
        <b:else/>
         var Items = {};
         var Msgs = {};
         var Config = {&#39;maxThreadDepth&#39;:&#39;0&#39;};
        </b:if>
       //<![CDATA[
       //Global setting
        Config.maxThreadDepth = 3;//Kedalaman tingkat threaded comment
        Display_Emo = true;//Tampilkan emoticon? ketik "false" untuk menyembunyikan
        Replace_Youtube_Link = false;//Embed video YouTube, ketik "false" untuk mendisable
        Replace_Image_Link = false;//Auto replace link image,  ketik "false" untuk mendisable.
        Replace_Force_Tag = false;//Auto replace virtual tag contoh: [pre] menjadi <pre>, dan [/pre] menjadi </pre>, apabila salah menulis, tidak akan berfungsi
        Replace_Image_Ext = ['JPG', 'GIF', 'PNG', 'BMP'];//(support: jpg, gif, png, bmp),hanya berfungsi apabila Replace_Image_Link=true
        //Pengaturan Emoticon
        Emo_List = [
':)'  	,'http://twemoji.maxcdn.com/36x36/1f600.png',
':('  	,'http://twemoji.maxcdn.com/36x36/1f615.png',
'hihi'  ,'http://twemoji.maxcdn.com/36x36/1f601.png',
':-)'  	,'http://twemoji.maxcdn.com/36x36/1f60f.png',
':D'  	,'http://twemoji.maxcdn.com/36x36/1f603.png',
'=D'  	,'http://twemoji.maxcdn.com/36x36/1f62c.png',
':-d'  	,'http://twemoji.maxcdn.com/36x36/1f604.png',
';('  	,'http://twemoji.maxcdn.com/36x36/1f61e.png',
';-('  	,'http://twemoji.maxcdn.com/36x36/1f62d.png',
'@-)'   ,'http://twemoji.maxcdn.com/36x36/1f616.png',
':o'	,'http://twemoji.maxcdn.com/36x36/1f62e.png',     
':&gt;)','http://twemoji.maxcdn.com/36x36/1f606.png',     
'(o)'	,'http://twemoji.maxcdn.com/36x36/1f609.png',     
':p'	,'http://twemoji.maxcdn.com/36x36/1f614.png',     
':-?'	,'http://twemoji.maxcdn.com/36x36/2753.png', 
'(p)'	,'http://twemoji.maxcdn.com/36x36/1f619.png', 
':-s'	,'http://twemoji.maxcdn.com/36x36/1f625.png',
'8-)'	,'http://twemoji.maxcdn.com/36x36/1f60e.png',
':-t'	,'http://twemoji.maxcdn.com/36x36/1f624.png',
':-b'	,'http://twemoji.maxcdn.com/36x36/1f634.png',
'b-('	,'http://twemoji.maxcdn.com/36x36/1f635.png',
'(y)'	,'http://twemoji.maxcdn.com/36x36/1f44d.png',
'x-)'	,'http://twemoji.maxcdn.com/36x36/1f60d.png',
'(h)'	,'http://twemoji.maxcdn.com/36x36/1f44f.png',   
        ];
                                //Config Force tag list, define all in lower case
                                Force_Tag = [
                                    '[pre]','<pre>',
                                    '[/pre]','</pre>',
                                    '<pre class="brush: plain; title: ; notranslate" title="">','&lt;code&gt;',
                                    '</pre>','</code>'
                                ];
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3 o=\'.1c\';3 1b=$(\'#O-19\').G(\'A\');u 1l(F){3 1j=\' \\n\\r\\t\\f\\1D\\1G\\1F\\1E\\2l\\2k\\2i\\2f\\2c\\26\\25\\23\\1Y\\1S\\1N\\1L\\1H\\2v\\1M\\2p\\24\\22\\1R\';E(3 i=0;i<F.5;i++){9(1j.d(F.1Q(i))!=-1){F=F.b(0,i);11}}z F}$(\'#1P .1i p\').j(u(y,7){9(1J){3 l=\'1v://13.V.W/1y?v=\';3 8=7.d(l);D(8!=-1){1d=7.b(8);J=1l(1d);3 X=J.d(\'&\');3 N=\'\';9(X==-1){N=J.b(l.5)}Y{N=J.b(l.5,X)}3 1r=\'<1u B="1T" A="1v://13.V.W/1U/\'+N+\'?1V=1" 1W="0" 2w></1u>\';7=7.b(0,8)+1r+7.b(8+J.5);8=7.d(l);9(8==-1){l=\'1Z://13.V.W/1y?v=\';8=7.d(l)}}}9(21){3 Z=\'\';3 s=7;E(3 i=0;i<1w.5;i++){3 l=\'.\'+1w[i];3 m=s.C();3 8=m.d(l);D(8!=-1){k=s.b(0,8+l.5);m=k.C();3 q=\'2h://\';3 w=m.d(q);3 I=\'\';D(w!=-1){I=q.M();k=k.b(w+q.5);m=k.C();w=m.d(q)}q=\'2n://\';m=k.C();w=m.d(q);D(w!=-1){I=q.M();k=k.b(w+q.5);m=k.C();w=m.d(q)}9(I==\'\'||k.5<6){11}k=I+k;Z+=s.b(0,8+l.5-k.5)+\'<10 A="\'+k+\'" B="2r"/>\';s=s.b(8+l.5);m=s.C();8=m.d(l)}}7=Z+s}9(1A){3 5=x.5;9(5%2==1){5--}E(3 i=0;i<5;i+=2){3 S=\'<10 A="\'+x[i+1]+\'" B="1B"/>\';8=7.d(x[i]);D(8!=-1){7=7.b(0,8)+S+7.b(8+x[i].5);8=7.d(x[i])}}}9(1I){3 5=R.5;9(5%2==1){5--}E(3 i=0;i<5;i+=2){D(1){3 s=7.M();8=s.d(R[i]);9(8!=-1){7=7.b(0,8)+R[i+1]+7.b(8+R[i].5)}Y{11}}}}z 7});$(\'.1K\').j(u(y,7){9(1A){3 5=x.5;9(5%2==1){5--}3 12=\'\';E(3 i=0;i<5;i+=2){3 1e=\'<1f>\'+x[i]+\'</1f>\';3 S=\'<10 A="\'+x[i+1]+\'" B="1B"/>\';12+=\'<Q B="1O">\'+S+1e+\'</Q>\'}z 12}});$(\'.1g .1i p\').j(u(i,h){T=h.M();y=T.d(\'@<a U="#c\');9(y!=-1){14=T.d(\'</a>\',y);9(14!=-1){h=h.b(0,y)+h.b(14+4)}}z h});u 1k(g){r=g.d(\'c\');9(r!=-1)g=g.b(r+1);z g}u 1m(g){g=\'&1X=\'+g+\'#%1n\';1o=1b.20(/#%1n/,g);z 1o}u 1p(){j=$(o).j();$(o).j(\'\');o=\'.1c\';$(o).j(j);$(\'#O-19\').G(\'A\',1b)}u 1q(e){g=$(e).G(\'15\');g=1k(g);j=$(o).j();9(o==\'.1c\'){1s=\'<a U="#1t" 27="1p()">\'+28.29+\'</a><a 2a="1t"/>\';$(o).j(1s)}Y{$(o).j(\'\')}o=\'#2b\'+g;$(o).j(j);$(\'#O-19\').G(\'A\',1m(g))}16=2d.2e.U;17=\'#O-2g\';18=16.d(17);9(18!=-1){1x=16.b(18+17.5);1q(\'#2j\'+1x)}E(3 i=0;i<P.5;i++){9(\'1z\'2m P[i]){3 g=P[i].1z;3 1a=2o($(\'#c\'+g+\':L\').G(\'1C\'));$(\'#c\'+g+\' .2q:L\').j(u(y,7){3 H=P[i].15;9(1a>=2s.2t){$(\'#c\'+H+\':L .2u\').1h()}3 K=$(\'#c\'+H+\':L\').j();K=\'<Q B="1g" 15="c\'+H+\'" 1C="\'+(1a+1)+\'">\'+K+\'</Q>\';$(\'#c\'+H).1h();z(7+K)})}}',62,157,'|||var||length||oldhtml|check_index|if||substring||indexOf|||par_id|||html|img_src|search_key|upper_html||Cur_Cform_Hdr||http_search||temp_html||function||find_http|Emo_List|index|return|src|class|toUpperCase|while|for|str|attr|child_id|save_http|yt_link|child_html|first|toLowerCase|yt_code|comment|Items|div|Force_Tag|img_html|temp|href|youtube|com|yt_code_index|else|save_html|img|break|newhtml|www|index_tail|id|cur_url|search_formid|search_index|editor|par_level|Cur_Cform_Url|comment_form|ht|img_code|span|comment_wrap|remove|comment_body|whitespace|Valid_Par_Id|trim|Cform_Ins_ParID|7B|n_cform_url|Reset_Comment_Form|Display_Reply_Form|yt_video|reset_html|origin_cform|iframe|http|Replace_Image_Ext|ret_id|watch|parentId|Display_Emo|comment_emo|level|x5b|x7d|x7c|x5d|u2008|Replace_Force_Tag|Replace_Youtube_Link|comment_emo_list|u2007|u200a|u2006|item|comment_block|charAt|u3000|u2005|comment_youtube|embed|autohide|frameborder|parentID|u2004|https|replace|Replace_Image_Link|u2029|u2003|u2028|u2002|u2001|onclick|Msgs|addComment|name|r_f_c|u2000|window|location|xa0|form_|HTTP|x0b|rc|x3e|x3c|in|HTTPS|parseInt|u200b|comment_child|comment_img|Config|maxThreadDepth|comment_reply|u2009|allowfullscreen'.split('|'),0,{}))   
var avatar=$("#comments");avatar.find('.comment_avatar img').each(function() {var ava = $(this).attr('src');$(this).show().attr('src', ava.replace(/\/s[0-9]+(\-c)?\//,"/s45-c/"));});var _0xf2c9=["\x73\x63\x72\x65\x65\x6E\x20\x61\x6E\x64\x20\x28\x6D\x69\x6E\x2D\x77\x69\x64\x74\x68\x3A\x20\x36\x30\x65\x6D\x29","\x6D\x61\x74\x63\x68\x4D\x65\x64\x69\x61","\x6D\x61\x74\x63\x68\x65\x73","\x6F\x6E\x6C\x6F\x61\x64","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x72\x65\x6C","\x6E\x6F\x66\x6F\x6C\x6C\x6F\x77","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C"];var mql=window[_0xf2c9[1]](_0xf2c9[0]);mql[_0xf2c9[2]]&&(window[_0xf2c9[3]]=function(){var _0x402bx2=document[_0xf2c9[5]](_0xf2c9[4]);null==_0x402bx2&&(window[_0xf2c9[7]][_0xf2c9[6]]=_0xf2c9[8]),_0x402bx2[_0xf2c9[9]](_0xf2c9[6],_0xf2c9[8]),_0x402bx2[_0xf2c9[9]](_0xf2c9[10],_0xf2c9[11]),_0x402bx2[_0xf2c9[12]]=_0xf2c9[13]})
//]]>
// http://itunestema.blogspot.com.tr/
// http://manuelsablon.blogspot.com.tr/
// http://bloggermodeltemasi.blogspot.com.tr/
// Çizgi Film Hkayeleri URL=(http://cizgifilmhikayeleri.blogspot.com.tr/)
// Blogger Eklentileri URL=(http://bloggereklentileri.blogspot.com.tr/)
//<![CDATA[
$(document).ready(function()
{
if($("#mycredit").attr("href")!="http://bloggereklentileri.blogspot.com/")
{
window.location.href="http://bloggereklentileri.blogspot.com";
}
});
//]]>