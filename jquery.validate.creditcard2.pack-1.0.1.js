/*
* jQuery creditcard2 extension for the jQuery Validation plugin (http://plugins.jquery.com/project/validate).
* Ported from http://www.braemoor.co.uk/software/creditcard.shtml by John Gardner, with some enhancements.
*
* Author: Jack Killpatrick
* Copyright (c) 2010 iHwy, Inc.
*
* Version 1.0.1 (1/12/2010)
* Tested with jquery 1.2.6, but will probably work with earlier versions.
*
* History:
* 1.0.0 - released 2008-11-17
* 1.0.1 - released 2010-01-12 -> updated card prefixes based on data at: http://en.wikipedia.org/wiki/Credit_card_number and added support for LaserCard
*
* Visit http://www.ihwy.com/labs/jquery-validate-credit-card-extension.aspx for usage information
*
* Dual licensed under the MIT and GPL licenses:
*   http://www.opensource.org/licenses/mit-license.php
*   http://www.gnu.org/licenses/gpl.html
*/

eval(function(p, a, c, k, e, r) { e = function(c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) { while (c--) r[e(c)] = k[c] || e(c); k = [function(e) { return r[e] } ]; e = function() { return '\\w+' }; c = 1 }; while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]); return p } ('H.I.R("S",T(a,b,c){u d=c;u e=E G();e[0]={v:"U",w:"13,16",x:"4",y:t};e[1]={v:"V",w:"16",x:"W,X,Y,J,K",y:t};e[2]={v:"Z",w:"14,16",x:"L,1a,1b,J,K",y:t};e[3]={v:"1c",w:"14",x:"1d,1e,1f,1g,1h,L",y:t};e[4]={v:"1i",w:"15",x:"1j,1k",y:t};e[5]={v:"1l",w:"16",x:"1m,1n,1o,1p",y:t};e[6]={v:"1q",w:"16",x:"1r",y:t};e[7]={v:"1s",w:"15",x:"1t,1u",y:t};e[8]={v:"1v",w:"16,18,19",x:"1w, 1x",y:t};e[9]={v:"1y",w:"16,18,19",x:"1z,1A,1B,1C,1D,1E,1F,M",y:t};e[10]={v:"1G",w:"12,13,14,15,16,18,19",x:"1H,1I,1J,N,M,1K",y:t};e[11]={v:"1L",w:"16",x:"1M,1N,1O,1P,1Q",y:t};e[12]={v:"1R",w:"16,17,18,19",x:"N,1S,1T,1U",y:t};u f=-1;F(u i=0;i<e.C;i++){z(d.O()==e[i].v.O()){f=i;1V}}z(f==-1){B A}a=a.P(/[\\s-]/g,"");z(a.C==0){B A}u g=a;u h=/^[0-9]{13,19}$/;z(!h.1W(g)){B A}g=g.P(/\\D/g,"");z(e[f].y){u k=0;u l="";u j=1;u m;F(i=g.C-1;i>=0;i--){m=1X(g.1Y(i))*j;z(m>9){k=k+1;m=m-10}k=k+m;z(j==1){j=2}1Z{j=1}}z(k%10!=0){B A}}u n=A;u o=A;u p=E G();u q=E G();p=e[f].x.Q(",");F(i=0;i<p.C;i++){u r=E 20("^"+p[i]);z(r.21(g))o=t}z(!o){B A}q=e[f].w.Q(",");F(j=0;j<q.C;j++){z(g.C==q[j])n=t}z(!n){B A}B t},H.I.22.23);', 62, 128, '|||||||||||||||||||||||||||||true|var|cardName|lengths|prefixes|checkdigit|if|false|return|length||new|for|Array|jQuery|validator|54|55|305|6759|6304|toLowerCase|replace|split|addMethod|creditcard2|function|Visa|MasterCard|51|52|53|DinersClub|||||||||||36|38|CarteBlanche|300|301|302|303|304|AmEx|34|37|Discover|6011|622|64|65|JCB|35|enRoute|2014|2149|Solo|6334|6767|Switch|4903|4905|4911|4936|564182|633110|6333|Maestro|5018|5020|5038|6761|VisaElectron|417500|4917|4913|4508|4844|LaserCard|6706|6771|6709|break|exec|Number|charAt|else|RegExp|test|messages|creditcard'.split('|'), 0, {}))
