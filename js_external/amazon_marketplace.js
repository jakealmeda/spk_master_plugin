var amazon_assoc_ir_f_call_associates_ads=function(d){var b="",c,a;if(typeof JSON!=="undefined"){a=JSON.stringify(d);}else{if(typeof amzn_assoc_utils!=="undefined"){a=amzn_assoc_utils.stringify(d);}else{return;}}if(typeof d.logType!=="undefined"){b="&logType="+d.logType;}c="//fls-na.amazon-adsystem.com/1/associates-ads/1/OP/r/json";c=c+"?cb="+(new Date()).getTime()+b+"&p="+encodeURIComponent(a);(new Image()).src=c;};var amazon_assoc_ir_f_call=amazon_assoc_ir_f_call_associates_ads;var amazon_assoc_ir_call=function(c,b,a){new Image().src="//ir-na.amazon-adsystem.com/e/ir?o="+a+"&t="+c+"&l="+b+"&cb="+(new Date()).getTime();};window.cmManager=function(h,g,i){var j={},l={},k={};j.startScope=function(b,a){k[b+a]=new Date().getTime();};j.endScope=function(d,c,a){var b;if(typeof k[d+c]!=="undefined"){b=new Date().getTime()-k[d+c];}else{if(typeof a!=="undefined"){b=new Date().getTime()-a;}else{return;}}j.queue(d,[{name:c,value:b}]);delete k[d+c];};j.addCounter=function(c,b,a){j.queue(c,[{name:b,value:a}]);};j.queue=function(b,a){if(typeof l[b]!=="undefined"){l[b]=l[b].concat(a);}else{l[b]=a;}};j.trigger=function(b,w,f){var v="//"+h+"action-impressions/1/OE/associates-adsystems/action/",a,e,c="",u="",s,d=0;for(a in l){if(l.hasOwnProperty(a)){d=d+1;v=v+u+a+":";c="";for(e=0;e<l[a].length;e++){var t=l[a][e];v=v+c+t.name;if(typeof t.value!=="undefined"){v=v+"@v="+t.value;}c=",";}u="/";}}l={};if(d>0){s=new Image();s.src=v+"?marketplace="+g+"&service=AmazonWidgets&method="+i+"&marketplaceId="+b+"&requestId="+w+"&session="+f;return s.src;}else{return"";}};return j;};window.amzn_assoc_cm=cmManager("fls-na.amazon-adsystem.com/1/","US","Widgets_Render_Time");amzn_assoc_enable_abs=true;window.amzn_assoc_placement="adunit0";window.amzn_assoc_tracking_id="understand0d4-20";window.amzn_assoc_ad_mode="auto";window.amzn_assoc_ad_type="smart";window.amzn_assoc_marketplace="amazon";window.amzn_assoc_region="US";window.amzn_assoc_default_category="All";window.amzn_assoc_linkid="294e744f689247c16a46e978f65f72b6";window.amzn_assoc_fallback_mode=JSON.parse('{"type":"search","value":"self help"}');window.amzn_assoc_enable_interest_ads="true";if(document.getElementById("amzn-assoc-ad-9f2cb097-ecee-468c-b007-0b4fcd5a22c9")!==null){window.amzn_assoc_div_name="amzn-assoc-ad-9f2cb097-ecee-468c-b007-0b4fcd5a22c9";}(function(){if(typeof window.performance!=="undefined"&&typeof window.performance.timing!=="undefined"){amzn_assoc_cm.endScope("cm_","onejs_load_evt",window.performance.timing.navigationStart);if(window.performance.timing.loadEventEnd>0){amzn_assoc_cm.endScope("cm_","onejs_load_evt_doc_load",window.performance.timing.loadEventEnd);}}amzn_assoc_cm.startScope("cm_","onejs_exec_time");amzn_assoc_cm.startScope("cm_","wdgt_load_time_invoke");}());window.amzn_assoc_internal_params={honor_ead_strictly:"",viewerCountry:"",enable_fallbacks:"",exp_details:"",destinationTrackingId:"",ad_id:"",ead:"",URL:"",div_name:"",aes_interaction_enabled:"",override:"",sourceTrackingId:"",sign_links:"",aax_src_id:"",textlinks:"",subtag:"",disable_transit_tracking:"",slotNum:"",ac_website:"",enable_geo_redirection:"",force_win_bid:"",enable_auto_tagging:"",preview:"",axf_treatment:"",aax_test_punt:"",debug:"",axf_exp_name:"",ad_placement_type:""};window.assocUtilsMaker=function(e,A,C){var D=window,v={},x,w={},u={},y={},q={CA:"330"},r=1800,s=function(d,a,f,b,i,c){var h={},k,g,j;if(typeof d[a]!=="undefined"&&d[a]!==""){d[f]=d[f]||[];g=d[a].split(",");for(j=0;j<g.length;j++){h={};h[b]=g[j].trim();h.emphasis=i;for(k in c){if(c.hasOwnProperty(k)){h[k]=c[k];}}d[f].push(h);}}},z=function(d,a,f,b){var g,c;if(typeof d[a]!=="undefined"&&d[a]!==""){d[f]=d[f]||[];g=d[a].split(",");for(c=0;c<g.length;c++){d[f].push(b(g[c]));}}},B=function(a){s(a,"emphasize_categories","acap_categoryConstraints","category","Strong",{type:"AmazonBrowse"});s(a,"ignore_categories","acap_categoryConstraints","category","Ignore",{type:"AmazonBrowse"});s(a,"restrict_categories","acap_categoryConstraints","category","Restrict",{type:"AmazonBrowse"});s(a,"emphasize_keywords","acap_keywordConstraints","keyword","Strong",{});s(a,"ignore_keywords","acap_keywordConstraints","keyword","Ignore",{});z(a,"ignore_keywords","acap_skipTitleList",function(b){return"(.*)"+b.trim()+"(.*)";});z(a,"fallback_products","acap_pubPickList",function(b){return b.trim();});};try{x=parseInt(A);}catch(t){x=6;}v.createDiv=function(c,a,b){if(b){document.write('<span id="'+c+"_"+a+'"></span>');}else{document.write('<div id="'+c+"_"+a+'"></div>');}return c+"_"+a;};v.registerAdCountComputer=function(b,a){w[b]=a;};v.getExpectedAdCount=function(a,b){if(typeof w[a.ad_type]==="undefined"){return 0;}else{return w[a.ad_type](a,b);}};v.generateGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=Math.random()*16|0,c=a==="x"?b:(b&3|8);return c.toString(16);});};v.validatePJLength=function(c){var b=JSON.stringify(c).length,a;if(c.hasOwnProperty("resolvedItems")){b-=c.resolvedItems.length;}if((b>r)&&c.hasOwnProperty("textlinks")&&(b-c.textlinks.length<=r)){a=c.textlinks.split(",");c.textlinks=a.splice(0,a.length-parseInt((b-r)/11,10)-1).join(",");b=JSON.stringify(c).length;}return b<=r;};v.fetchHtml=function(i,b){var a=i.url,d,g,f=v.generateGuid(),c=v.generateGuid(),h=u[i.slotNum]?"ssp_load_time":"aax_load_time";if(typeof b==="undefined"){b=0;}i.slotNum=i.slotNum||0;y[i.slotNum]=i.aaxMediated;if(!i.dontInject){if(typeof i.elemName==="undefined"&&!i.explicitAsync){i.elemName=v.createDiv(i.prefix,i.slotNum,i.inline);}}if(i.renderInIframe&&!i.aaxMediated){g=i.iframeStyle;if((!g||g==="")&&i.adOptions.width&&i.adOptions.height){g="width:"+i.adOptions.width+"px;height:"+i.adOptions.height+"px;";}(function(){var j=document.getElementById(i.elemName);if(!i.dontInject){j.innerHTML='<iframe id="amzn_assoc_ad_'+i.slotNum+'" style="'+g+'" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="'+i.url+'"></iframe>';v.execBodyScripts(j,i.slotNum);}}());return;}d="amzn_assoc_jsonp_callback_"+i.placement+"_"+i.slotNum;if(i.aaxMediated){a=a+"&jscb="+d;}else{a=a+"&jsonp="+d;}(function(j){D[d]=function(o){var m,l;if(i.aaxMediated){amzn_assoc_cm.endScope("cm_",h);amzn_assoc_cm.endScope("cm_",h+"_"+i.adOptions.ad_type);if(o&&o.html){try{if(v.validatePJLength(i.adOptions)){m=JSON.parse(o.html);m.pj=i.adOptions;m.originUrl=i.adOptions.URL||document.location.href;i.url="https://ws-na.amazon-adsystem.com/widgets/safl";i.url=i.url+"?q="+encodeURIComponent(JSON.stringify(m));if(m.customPixels){for(l=0;l<m.customPixels.length;l++){new Image().src=m.customPixels[l];}}v.fetchHtml(i);return;}else{console.error("Error : Adcode values too long");return;}}catch(n){o=o.html;}}else{if(i.adOptions.preview==="true"&&b<x){setTimeout(function(){v.fetchHtml(i,b+1);},C);}else{i.url=i.aaxPuntFallback+"&aaxPunt=true";i.aaxMediated=false;amzn_assoc_cm.addCounter("cm_","aax_punt",1);amzn_assoc_cm.addCounter("cm_","aax_punt_"+i.adOptions.ad_type,1);v.fetchHtml(i);D["amzn_assoc_client_cb_"+i.slotNum]({type:"onfail",data:{reason:"No response from server"}});}return;}}else{amzn_assoc_cm.endScope("cm_","adhtml_load_time");amzn_assoc_cm.endScope("cm_","adhtml_load_time_"+i.adOptions.ad_type);}var k=document.getElementById(j);if(!i.dontInject){if(!k){k=document.createElement("div");if(typeof j!=="undefined"){k.setAttribute("id",j);}document.body.appendChild(k);}k.innerHTML=o;v.execBodyScripts(k,i.slotNum);}if(typeof i.cb==="function"){i.cb(o);}};D["amzn_assoc_client_cb_"+i.slotNum]=function(k){if(typeof k.widget!=="undefined"){k.widget.adOptions=i.adOptions;if(typeof window.amzn_assoc_utils.getSynchronousAdCodeGenerator==="function"){k.widget.getSynchronousAdCode=window.amzn_assoc_utils.getSynchronousAdCodeGenerator();k.widget.getSynchronousAdCodeJson=window.amzn_assoc_utils.getSynchronousAdCodeJsonGenerator();k.widget.getSynchronousAdCodeForAdInstance=window.amzn_assoc_utils.getSynchronousAdCodeGeneratorForAdInstance();k.widget.getSynchronousAdCodeWithAdInstance=window.amzn_assoc_utils.getSynchronousAdCodeGeneratorWithAdInstance();k.widget.getAsynchronousAdCodeWithAdInstance=window.amzn_assoc_utils.getAsynchronousAdCodeGeneratorWithAdInstance();k.widget.getAsynchronousAdCode=window.amzn_assoc_utils.getAsynchronousAdCodeGenerator();}k.widget.reload=function(m,n){var l;for(l in m){if(m.hasOwnProperty(l)){i.adOptions[l]=m[l];}}if(typeof n!=="undefined"){for(l in n){if(n.hasOwnProperty(l)){delete i.adOptions[l];}}}i.adOptions.div_name=j;amzn_assoc_ad.render(i.adOptions);};}if(k.type==="onload"){if(typeof window.performance!=="undefined"&&typeof window.performance.timing!=="undefined"){amzn_assoc_cm.endScope("cm_","wdgt_load_time",window.performance.timing.navigationStart);amzn_assoc_cm.endScope("cm_","wdgt_load_time_"+i.adOptions.viewerCountry,window.performance.timing.navigationStart);amzn_assoc_cm.endScope("cm_","wdgt_load_time_"+i.adOptions.ad_type,window.performance.timing.navigationStart);if(window.performance.timing.loadEventEnd>0){amzn_assoc_cm.endScope("cm_","wdgt_load_time_doc_load",window.performance.timing.loadEventEnd);amzn_assoc_cm.endScope("cm_","wdgt_load_time_doc_load_"+i.adOptions.ad_type,window.performance.timing.loadEventEnd);}}amzn_assoc_cm.endScope("cm_","wdgt_load_time_invoke");amzn_assoc_cm.endScope("cm_","wdgt_load_time_invoke_"+i.adOptions.ad_type);amzn_assoc_cm.endScope("cm_","wdgt_load_time_invoke_"+i.adOptions.ad_type+"_"+i.adOptions.viewerCountry);}if(typeof i.clientCbs==="object"&&typeof i.clientCbs[k.type]==="function"){k.data.slotNum=i.slotNum;k.data.container=i.elemName;i.clientCbs[k.type](k.data,k.widget);}amzn_assoc_cm.trigger(e,f,c);};}(i.elemName));amzn_assoc_cm.endScope("cm_","onejs_exec_time");if(i.aaxMediated){amzn_assoc_cm.startScope("cm_",h);amzn_assoc_cm.startScope("cm_",h+"_"+i.adOptions.ad_type);}else{amzn_assoc_cm.startScope("cm_","adhtml_load_time");amzn_assoc_cm.startScope("cm_","adhtml_load_time_"+i.adOptions.ad_type);}v.loadRemoteScript(a,function(){});};v.serialize=function(d,f,a,i){var b=[],h;for(var g in d){if(d.hasOwnProperty(g)&&typeof d[g]!=="function"){var c=((i)?encodeURIComponent(g):g)+"=";if(a){c+="'";}if(d[g] instanceof Array){h=d[g][0];}else{h=d[g];}c+=(i)?encodeURIComponent(h):h;if(a){c+="'";}b.push(c);}}return b.join(f);};v.nodeName=function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase();};v.execBodyScripts=function(f,b){var c=function(k,p){var j=" //# sourceURL=dynscript-"+k+(b?"-"+b:"")+".js";var n=(p.text||p.textContent||p.innerHTML||"")+j,m=document.getElementsByTagName("head")[0]||document.documentElement,o=document.createElement("script");o.type="text/javascript";if(p.src){o.src=(p.src||"");}try{o.appendChild(document.createTextNode(n));}catch(l){o.text=n;}m.insertBefore(o,m.firstChild);},h=[],g,i=f.childNodes,a,d;for(d=0;i[d];d++){a=i[d];if(v.nodeName(a,"script")&&(!a.type||a.type.toLowerCase()==="text/javascript")){h.push(a);}else{v.execBodyScripts(a);}}for(d=0;h[d];d++){g=h[d];if(g.parentNode){g.parentNode.removeChild(g);}c(d,h[d]);}};v.fetchAmazonLinks=function(){var d=document.getElementsByTagName("a"),h=function(m){var n=document.createElement("a");n.href=m;return n;},l=new RegExp("https://www.amazon.com".replace(/(http:\/\/|https:\/\/)/ig,"")),j=new RegExp("(?:[/=])([A-Z0-9]{10})(?:[/?&]|$)","i"),f=new RegExp("(linkcode|lc|link_code)=","igm"),i=new RegExp("(linkcode|lc|link_code)=(am1|am2|am3|as1|as2|as3|as4|asm|df0|df1|df2|df4|asn|at1|btl|ptl|ktl|em1|pat|xm2|qcb|qs|tre|ur2|ure|sl1|sl2|ll1|w50|w61|w62|w63|g11|g12|g13|g14)","igm"),a="";for(var k=0;k<d.length;k++){if(d[k].href){var c=h(d[k].href);if(c.hostname.match(l)){var b=(c.pathname.match(j)||c.search.match(j));var g=(c.search.search(i)!==-1||c.search.search(f)===-1);if(b&&g){a+=b[1].toUpperCase()+",";}if(b){d[k].setAttribute("data-amzn-asin",b[1]);}}}}return a.substring(0,a.length-1);};v.checkAvailableSpace=function(b,c){var a=document.getElementById(c);return b!=="smart"||(a&&a.getBoundingClientRect().width>0);};v.getAAXUrl=function(c,h,n,f,g,j,o,i,l,k){var m={},b=(c.width&&c.width!=="auto")?c.width:"1",d=(c.height&&c.height!=="auto")?c.height:"1",a=document.getElementById(f);c.debug=j.toString();c.acap_publisherId=c.tracking_id;B(c);if(typeof c.aax_src_id!=="undefined"&&c.aax_src_id!==""){m.src=c.aax_src_id;}else{if(q[c.viewerCountry]){m.src=q[c.viewerCountry];}else{m.src=(typeof c.ad_type!=="undefined"&&typeof c.ad_mode!=="undefined"&&typeof i[c.ad_type+"-"+c.ad_mode]!=="undefined"&&l.isDedicatedSourceForRecoAdsEnabled())?i[c.ad_type+"-"+c.ad_mode]:i["default"];}}m.c=h[n].aaxChannel;if(c.preview==="true"){m.c=h[n].aaxPreviewChannel;}m.sz=b+"x"+d;m.apiVersion=h[n].aaxApiVersion;c.slotNum=n;if(typeof w[c.ad_type]!=="undefined"){c.ead=w[c.ad_type](c,a.getBoundingClientRect().width);}if(typeof k!=="undefined"){c.viewerCountry=k;}m.pj=JSON.stringify(c);if((typeof j!=="undefined"&&j)||(typeof o!=="undefined"&&o)){m.testToken=h[n].aaxTestToken;m.n1apiVersion=h[n].aaxApiVersion;m.n1url=h[n].aaxBidRequestURL;m.n1id=h[n].n1id;}m.u=c.URL||document.location.href;u[n]=h[n].isSSPSelected;if(u[n]){amzn_assoc_cm.addCounter("cm_","ssp_selected",1);amzn_assoc_cm.addCounter("cm_","ssp_selected_"+g[c.ad_type],1);}return(u[n]?(h[n].sspServerURL+"/widgets/getad?"):(h[n].aaxURL+"/x/getad?"))+v.serialize(m,"&",false,true);};v.shouldSSPBeEnabledByAdCodeOptions=function(a){return typeof a.exclude_brands==="string"&&a.exlude_brands!=="";};v.shouldSSPBeUsed=function(b,a,f,d,c){return(b||c||(a.isSSPEnabled()&&f[d.ad_type])||v.shouldSSPBeEnabledByAdCodeOptions(d));};v.createAdUnitDeliveryNetworkPerSlot=function(b,a,d,c){return{aaxChannel:"100",aaxPreviewChannel:"88",aaxApiVersion:"2.0",aaxTestToken:"7snvCunWohswq2jh",aaxBidRequestURL:"http://ws-na-prod.amazon.com/widgets/bid",n1id:"500",aaxURL:"//aax-us-east.amazon-adsystem.com",sspServerURL:"//ws-na.amazon-adsystem.com",isSSPSelected:v.shouldSSPBeUsed(b,a,d,c,false)};};return v;};window.amzn_assoc_utils=window.assocUtilsMaker("ATVPDKIKX0DER","6",1000);if(typeof window.amzn_assoc_utils==="undefined"){window.amzn_assoc_utils={};}window.amzn_assoc_utils.loadRemoteScript=function(d,c){(function(a,k){var i=a.createElement("script"),b,j=false;i.type="text/javascript";i.async=true;i.src=d;i.setAttribute("charset","UTF-8");b=document.getElementsByTagName("head")[0]||document.documentElement;i.onload=i.onreadystatechange=function(){if(!j&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){j=true;if(typeof k==="function"){k();}i.onload=i.onreadystatechange=null;if(b&&i.parentNode){b.removeChild(i);}}};b.insertBefore(i,b.firstChild);}(document,c));};window.nativeAdLayoutComputer=(function(){var f={},d=3,e={rows:5,columns:5};f.computeLayout=function(y,C,v,B,b,s){var c,A,z,a,t,u,w,x,D={grid:{marginWidth:10,defaultMinItemWidth:128,maxItemWidth:250,maxColumnCount:4,partialCardSpacePercent:{min:25,max:75,defaultPercent:50,fallbackPercent:50}},inContent:{marginWidth:10,defaultMinItemWidth:240,maxColumnCount:3,partialCardSpacePercent:{min:15,max:40,defaultPercent:25,fallbackPercent:10}},concept:{marginWidth:10,defaultMinItemWidth:170,maxColumnCount:4,partialCardSpacePercent:{min:15,max:40,defaultPercent:25,fallbackPercent:10}}};B=(typeof B==="undefined")?"grid":B;if(B==="grid"){if(b){D[B].maxColumnCount=parseInt(b);}}else{if(B==="inContent"){D[B].maxColumnCount=(typeof b==="undefined")?D[B].maxColumnCount:Math.max(b,D[B].maxColumnCount);}}C=(typeof C==="undefined")?D[B].defaultMinItemWidth:C;t=parseInt(y/C);if(t===0){return{columnCount:0,columnWidth:0,columnWidthPercentage:0,marginLeftPercentage:0};}if(t>D[B].maxColumnCount){t=D[B].maxColumnCount;}c=(t-1)*D[B].marginWidth;A=(y-c)/t;if(A<C){t=t-1;c=(t-1)*D[B].marginWidth;A=(y-c)/t;}if(v){u=y-c-(t*A);w=(u/A)*100;if(w<D[B].partialCardSpacePercent.min||w>D[B].partialCardSpacePercent.max){c=(t*D[B].marginWidth);x=s?(D[B].partialCardSpacePercent.fallbackPercent/100):(D[B].partialCardSpacePercent.defaultPercent/100);A=(y-c)/(t+x);while(A<C){t=t-1;c=(t*D[B].marginWidth);A=(y-c)/(t+x);}}}z=(A*100)/y;a=(100-(z*t))/(t-1);if(B==="grid"&&A>D[B].maxItemWidth){A=D[B].maxItemWidth;z=(A*100)/y;a=(D[B].marginWidth*100)/y;}return{columnCount:t,columnWidth:A,columnWidthPercentage:z,marginLeftPercentage:a};};f.getExpectedAdCount=function(m,b,k){var a=(typeof m.rows!=="undefined")?parseInt(m.rows):2,n=(typeof m.rows!=="undefined")?parseInt(m.rows):4,c,l;a=((a>e.rows)?e.rows:a);if(m.max_ads_in_a_row){l=((m.max_ads_in_a_row>e.columns)?e.columns:m.max_ads_in_a_row);}if(typeof m.design!=="undefined"&&m.design!==""){if(m.design==="text_links"){return n;}else{if(m.design==="enhanced_links"){return 1;}else{if(m.design==="in_content"){return 5;}else{if(m.design!=="standard_grid"){return 0;}}}}}else{if(m.carousel===true){c=f.computeLayout(b,k);return c.columnCount*d;}}c=f.computeLayout(b,k,false,"grid",l);return a*c.columnCount;};if(typeof amzn_assoc_utils!=="undefined"&&typeof amzn_assoc_utils.registerAdCountComputer!=="undefined"){amzn_assoc_utils.registerAdCountComputer("smart",f.getExpectedAdCount);}return f;})();var amzn_assoc_ad_spec_type=function(c){var b={},e="amzn_assoc",d={honor_ead_strictly:true,callbacks:true,link_id:true,show_image:true,viewerCountry:true,link_color:true,large_rating:true,campaigns:true,random_permute:true,enable_fallbacks:true,overwrite:true,replace_items:true,height:true,exp_details:true,adult_content:true,prime:true,deal_category:true,destinationTrackingId:true,emphasize_keywords:true,header_text_color:true,border_color:true,max_title_height:true,auto_complete:true,ad_id:true,size:true,banner_type:true,show_prices_for_new_items_only:true,placement:true,text_color:true,show_prices:true,deal_types:true,deals_enable:true,columns:true,rating_position:true,show_border:true,ead:true,enable_interest_ads:true,service_version:true,carousel:true,URL:true,corners:true,div_name:true,widget_id:true,search_bar:true,strike_text_style:true,aes_interaction_enabled:true,theme:true,browse_node:true,override:true,categories:true,tracking_id:true,search_bar_position:true,fallback_products:true,sourceTrackingId:true,sign_links:true,prime_position:true,show_price:true,list_price:true,aax_src_id:true,btn_corners:true,brand_text_link:true,price_color:true,fallback_mode:false,url:true,btn_custom_size:true,p:true,ad_mode:true,show_rating:true,bg_color:true,search_index:true,shuffle_tracks:true,textlinks:true,width:true,attributes:true,deal_access_types:true,feedback_enable:true,isresponsive:true,disable_borders:true,pharos_list_id:true,ad_type:true,ignore_keywords:true,subtag:true,header_style:true,original_ad_mode:true,deal_fallback_enable:true,rating:true,exclude_brands:true,emphasize_categories:true,show_on_hover:true,exclude_items:true,disable_transit_tracking:true,default_browse_node:true,link_style:true,brand_position:true,slotNum:true,marketplace:true,ac_website:true,enable_geo_redirection:true,widget_padding:true,restrict_categories:true,search_type:true,widget_type:true,btn_size:true,force_win_bid:true,rounded_corners:true,enable_auto_tagging:true,btn_design:true,region:true,preview:true,treatment_choice:true,ignore_categories:true,max_ads_in_a_row:true,axf_treatment:true,title:true,text_style:true,prb_enable:true,linkid:true,default_search_phrase:true,default_category:true,design:true,department:true,default_search_category:true,aax_test_punt:true,debug:true,search_key:true,banner_id:true,exclude_phrases:true,axf_exp_name:true,title_color:true,ad_placement_type:true,default_search_key:true,rows:true,render_full_page:true,asins:true,link_opens_in_new_window:true,custom_button_id:true,pharos_type:true,link_hover_style:true,enable_swipe_on_mobile:true},f=function(){var h,g;for(h in d){if(d.hasOwnProperty(h)){g="amzn_assoc_"+h;if((g in c)&&typeof c[g]!=="undefined"){b[h]=c[g];}}}},a=function(){};b.getAllParamDefs=function(){return d;};b.getPrefix=function(){return e;};b.reset=function(){var i,g;for(i in d){if(d.hasOwnProperty(i)){g="amzn_assoc_"+i;if((g in c)&&typeof c[g]!=="undefined"){c[g]=undefined;try{delete c[g];}catch(h){}}}}};f();a();return b;};var amzn_assoc_ad_spec=amzn_assoc_ad_spec_type(window);var amzn_assoc_ad_async_spec=(function(){var d={},c=window,e="amzn_assoc",b=function(){return a().concat((typeof window.assoc_async_parser!=="undefined")?window.assoc_async_parser(amzn_assoc_ad_spec_type).getAdCodes():[]);},a=function(){var g=0,f=[];if(("amzn_assoc_widgets" in c)&&Object.prototype.toString.call(c.amzn_assoc_widgets)==="[object Array]"){for(g=0;g<c.amzn_assoc_widgets.length;g++){if("amzn_assoc_div_name" in c.amzn_assoc_widgets[g]){f[g]=amzn_assoc_ad_spec_type(c.amzn_assoc_widgets[g]);}}}return f;};d.widgets=b();d.numberOfWidgets=d.widgets.length;return d;}());if(typeof amzn_assoc_ad==="undefined"){var adUnitDeliveryNetwork={};var slotCounter=(function(){var a=0;return{getNextSlot:function(){var b=a;a=a+1;return b;}};}());amzn_assoc_ad=(function(){var c=window,h={banners:{iframeStyle:"width: 0px; height: 0px;",aaxMediatedMarketPlaces:["US"],inline:true},dynamo:{},shopnshare:{iframeStyle:"width: 0px; height: 0px;",aaxMediatedMarketPlaces:["US"],inline:true},myfavourites:{},auto_part_finder:{},omakase:{},smart:{aaxMediatedMarketPlaces:["US","GB","CA","IN"]},carousel:{},fallback:{},mp3clips:{},contextual:{iframeStyle:"",aaxMediatedMarketPlaces:["US"]},banner:{},wish_list:{},recommended_product_links:{},pharos_v2:{},product_link:{iframeStyle:"width:120px;height:240px;"},pharos_v1:{},astore:{},search:{},deals:{},link_enhancement_widget:{aaxMediatedMarketPlaces:["GB","US"]},search_box:{},one_tag:{aaxMediatedMarketPlaces:["US"]},slideshow:{},pharos_v3:{},search_acap:{aaxMediatedMarketPlaces:["US"]},responsive_search_widget:{aaxMediatedMarketPlaces:["US"]},product_cloud:{}},e={banners:{},dynamo:{},shopnshare:{},myfavourites:{},auto_part_finder:{},omakase:{},smart:{},carousel:{},fallback:{},mp3clips:{},contextual:{},banner:{},wish_list:{},recommended_product_links:{},pharos_v2:{},product_link:{},pharos_v1:{},astore:{},search:{},deals:{},link_enhancement_widget:{},search_box:{},one_tag:{},slideshow:{},pharos_v3:{},search_acap:{},responsive_search_widget:{},product_cloud:{}},g=c.console||{log:function(){}},j={AMAZON:"",AMAZONSUPPLY:"",SMALLPARTS:"",AMAZONLOCAL:""},b={},k={"smart-auto":308,"default":330},f=(function(){var l=Math.floor(Math.random()*100);return{isSSPEnabled:function(){return l<=-1;},isDedicatedSourceForRecoAdsEnabled:function(){return l<=90;}};}()),a=false,i=false,d=false;return{render:function(p){if(typeof p.ad_type==="undefined"||!p.ad_type){g.error("Error : adType is not defined");return;}var r,u,w,n=window,t={},v={marketPlace:p.region},o=false,x="iframeStyle" in h[p.ad_type],q=slotCounter.getNextSlot(),m={},s=true,l=true;adUnitDeliveryNetwork[q]=amzn_assoc_utils.createAdUnitDeliveryNetworkPerSlot(a,f,b,p);p.region=p.region||"US";p.placement=p.placement||"adunit";p.marketplace=p.marketplace||"amazon";if(amzn_assoc_enable_abs&&p.ad_type=="banner"&&(p.banner_type==="setandforget"||p.banner_type==="rotating"||p.banner_type==="category"||p.banner_type==="ez")){p.ad_type="banners";}p.viewerCountry="US";amzn_assoc_cm.startScope("cm_","wdgt_load_time_invoke_"+p.ad_type+"_US");amzn_assoc_cm.startScope("cm_","wdgt_load_time_invoke_"+p.ad_type);if(typeof p.callbacks==="object"){m=p.callbacks;delete p.callbacks;}h[p.ad_type].adContentUrl=(h[p.ad_type].cacheable)?"//z-na.amazon-adsystem.com":"https://ws-na.amazon-adsystem.com";h[p.ad_type].adContentUrl=h[p.ad_type].adContentUrl+"/widgets/q?ServiceVersion=20070822&MarketPlace="+p.region+"&Operation=GetAdHtml&OneJS=1";h[p.ad_type].adContentUrl=h[p.ad_type].adContentUrl+"&slotNum="+q+"&"+amzn_assoc_utils.serialize(p,"&",false,true);w=p.div_name;if(!w&&!x&&!o){w=amzn_assoc_utils.createDiv("amzn_assoc_ad_div_"+p.placement,q,h[p.ad_type].inline);}if((typeof h[p.ad_type].aaxMediatedMarketPlaces!=="undefined")&&(h[p.ad_type].aaxMediatedMarketPlaces.indexOf(p.region)>-1)){p.textlinks=amzn_assoc_utils.fetchAmazonLinks();h[p.ad_type].fallbackUrl=h[p.ad_type].adContentUrl;l=amzn_assoc_utils.validatePJLength(p);if(l){h[p.ad_type].adContentUrl=amzn_assoc_utils.getAAXUrl(p,adUnitDeliveryNetwork,q,w,b,i,d,k,f,p.viewerCountry);}else{g.error("Error : Adcode values too long");return;}}if(typeof w!=="undefined"&&p.ac_website!=="true"&&!h[p.ad_type].inline){s=amzn_assoc_utils.checkAvailableSpace(p.ad_type,w);}if(s&&h[p.ad_type].adContentUrl!=""){amzn_assoc_utils.fetchHtml({url:h[p.ad_type].adContentUrl,aaxPuntFallback:h[p.ad_type].fallbackUrl,prefix:"amzn_assoc_ad_div_"+p.placement,elemName:w,explicitAsync:o,slotNum:q,clientCbs:m,renderInIframe:x,adOptions:p,aaxMediated:((typeof h[p.ad_type].aaxMediatedMarketPlaces!=="undefined")&&(h[p.ad_type].aaxMediatedMarketPlaces.indexOf(p.region)>-1))?true:false,placement:p.placement,iframeStyle:h[p.ad_type].iframeStyle,inline:h[p.ad_type].inline});}if(!s){amzn_assoc_cm.addCounter("cm_","onejs_abort_evt",1);amzn_assoc_cm.addCounter("cm_","onejs_abort_evt_"+p.ad_type,1);amzn_assoc_cm.endScope("cm_","onejs_exec_time");}}};}());}if(amzn_assoc_ad_async_spec.numberOfWidgets>0){(function(){var a=0;for(a=0;a<amzn_assoc_ad_async_spec.numberOfWidgets;a++){amzn_assoc_ad.render(amzn_assoc_ad_async_spec.widgets[a]);}}());}else{amzn_assoc_ad.render(amzn_assoc_ad_spec);amzn_assoc_ad_spec.reset();}