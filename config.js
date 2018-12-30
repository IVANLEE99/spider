'use strict';
const iconv = require('iconv-lite');
var baidu = {
    url:'http://top.baidu.com/buzz?b=1&fr=topindex',
    meta:`${new Date().toLocaleDateString()} --------百度热榜`,
    data:{
        articles:{
            listItem:'.list-table tr',
            data: {
                title:{
                    selector:'td.keyword > a.list-title',
                    convert:(x)=>{
                        // console.log(x);
                        return x;
                    }
                },
                link:{
                    selector:'td.keyword > a.list-title',
                    attr:'href'
                },
                number:'td.last > span'
            }

        }
    }
}

let wechat = {
    url:'https://weixin.sogou.com/',
    meta:`${new Date().toLocaleDateString()} --------wechat热榜`,
    data:{
        topArticles:{
            listItem:'#loginWrap > div.wrapper > div.main-left > div.hd-list > div.sd-slider a',
            data: {
                title:{
                    selector:'div.text > p',
                    attr:'title'
                },
                link:{
                    attr:'href'
                },
                img:{
                    selector:'img',
                    attr:'src'
                    
                }
            }

        },
        hotList:{
            listItem:'#pc_0_0 li',
            data: {
                title:'div.txt-box > h3 > a',
                link:{
                    selector:'div.txt-box > h3 > a',
                    attr:'href'
                },
                img:{
                    selector:'div.img-box > a > img',
                    attr:'src'
                },
                des:{
                    selector:'div.txt-box > p'
                },
                from:'div.txt-box > div > a',
                time:'div.txt-box > div > span'
            }
        }
    }
}


let zhihu = {
    url:'https://zhihu.sogou.com/',
    meta:`${new Date().toLocaleDateString()} --------知乎热榜`,
    data:{
        topArticles:{
            listItem:'body > div.hd-header > div.main-left > div > div.tabcontant > ul > li',
            data: {
                title:'a div.tc-box > p',
                link:{
                    selector:'a',
                    attr:'href'
                },
                img:{
                    selector:'img',
                    attr:'src'
                }
            }

        },
        hotList:{
            listItem:'#content_wrapper > ul > li',
            data: {
                title:'p.tit > a',
                link:{
                    selector:'p.tit > a',
                    attr:'href'
                },
                img:{
                    selector:'div.img-box > a > img',
                    attr:'src'
                },
                zan:'div.txt-box span.zan',
                des:'div.txt-box > p.p2 > a',
                from:'div.txt-box > p.p1 > a',
                time:'div.txt-box > div > span'
            }
        }
    }
}

var websites=[];
websites.push(baidu)
websites.push(wechat)
websites.push(zhihu)

module.exports = websites;
