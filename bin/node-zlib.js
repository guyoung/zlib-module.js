/* zlib-module.js  [ https://github.com/guyoung/zlib-module.js ] The MIT License */
/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */

(function() {function q(b){throw b;}var t=void 0,v=!0;var B="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;function G(b,a){this.index="number"===typeof a?a:0;this.m=0;this.buffer=b instanceof(B?Uint8Array:Array)?b:new (B?Uint8Array:Array)(32768);2*this.buffer.length<=this.index&&q(Error("invalid index"));this.buffer.length<=this.index&&this.f()}G.prototype.f=function(){var b=this.buffer,a,c=b.length,d=new (B?Uint8Array:Array)(c<<1);if(B)d.set(b);else for(a=0;a<c;++a)d[a]=b[a];return this.buffer=d};
G.prototype.d=function(b,a,c){var d=this.buffer,e=this.index,f=this.m,g=d[e],k;c&&1<a&&(b=8<a?(I[b&255]<<24|I[b>>>8&255]<<16|I[b>>>16&255]<<8|I[b>>>24&255])>>32-a:I[b]>>8-a);if(8>a+f)g=g<<a|b,f+=a;else for(k=0;k<a;++k)g=g<<1|b>>a-k-1&1,8===++f&&(f=0,d[e++]=I[g],g=0,e===d.length&&(d=this.f()));d[e]=g;this.buffer=d;this.m=f;this.index=e};G.prototype.finish=function(){var b=this.buffer,a=this.index,c;0<this.m&&(b[a]<<=8-this.m,b[a]=I[b[a]],a++);B?c=b.subarray(0,a):(b.length=a,c=b);return c};
var aa=new (B?Uint8Array:Array)(256),L;for(L=0;256>L;++L){for(var R=L,ba=R,ca=7,R=R>>>1;R;R>>>=1)ba<<=1,ba|=R&1,--ca;aa[L]=(ba<<ca&255)>>>0}var I=aa;function ha(b,a,c){var d,e="number"===typeof a?a:a=0,f="number"===typeof c?c:b.length;d=-1;for(e=f&7;e--;++a)d=d>>>8^S[(d^b[a])&255];for(e=f>>3;e--;a+=8)d=d>>>8^S[(d^b[a])&255],d=d>>>8^S[(d^b[a+1])&255],d=d>>>8^S[(d^b[a+2])&255],d=d>>>8^S[(d^b[a+3])&255],d=d>>>8^S[(d^b[a+4])&255],d=d>>>8^S[(d^b[a+5])&255],d=d>>>8^S[(d^b[a+6])&255],d=d>>>8^S[(d^b[a+7])&255];return(d^4294967295)>>>0}
var ia=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,
2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,
2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,
2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,
3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,
936918E3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117],S=B?new Uint32Array(ia):ia;function ja(){};function ka(b){this.buffer=new (B?Uint16Array:Array)(2*b);this.length=0}ka.prototype.getParent=function(b){return 2*((b-2)/4|0)};ka.prototype.push=function(b,a){var c,d,e=this.buffer,f;c=this.length;e[this.length++]=a;for(e[this.length++]=b;0<c;)if(d=this.getParent(c),e[c]>e[d])f=e[c],e[c]=e[d],e[d]=f,f=e[c+1],e[c+1]=e[d+1],e[d+1]=f,c=d;else break;return this.length};
ka.prototype.pop=function(){var b,a,c=this.buffer,d,e,f;a=c[0];b=c[1];this.length-=2;c[0]=c[this.length];c[1]=c[this.length+1];for(f=0;;){e=2*f+2;if(e>=this.length)break;e+2<this.length&&c[e+2]>c[e]&&(e+=2);if(c[e]>c[f])d=c[f],c[f]=c[e],c[e]=d,d=c[f+1],c[f+1]=c[e+1],c[e+1]=d;else break;f=e}return{index:b,value:a,length:this.length}};function T(b){var a=b.length,c=0,d=Number.POSITIVE_INFINITY,e,f,g,k,h,m,r,p,l,n;for(p=0;p<a;++p)b[p]>c&&(c=b[p]),b[p]<d&&(d=b[p]);e=1<<c;f=new (B?Uint32Array:Array)(e);g=1;k=0;for(h=2;g<=c;){for(p=0;p<a;++p)if(b[p]===g){m=0;r=k;for(l=0;l<g;++l)m=m<<1|r&1,r>>=1;n=g<<16|p;for(l=m;l<e;l+=h)f[l]=n;++k}++g;k<<=1;h<<=1}return[f,c,d]};function na(b,a){this.k=oa;this.F=0;this.input=B&&b instanceof Array?new Uint8Array(b):b;this.b=0;a&&(a.lazy&&(this.F=a.lazy),"number"===typeof a.compressionType&&(this.k=a.compressionType),a.outputBuffer&&(this.a=B&&a.outputBuffer instanceof Array?new Uint8Array(a.outputBuffer):a.outputBuffer),"number"===typeof a.outputIndex&&(this.b=a.outputIndex));this.a||(this.a=new (B?Uint8Array:Array)(32768))}var oa=2,pa={NONE:0,L:1,t:oa,X:3},qa=[],U;
for(U=0;288>U;U++)switch(v){case 143>=U:qa.push([U+48,8]);break;case 255>=U:qa.push([U-144+400,9]);break;case 279>=U:qa.push([U-256+0,7]);break;case 287>=U:qa.push([U-280+192,8]);break;default:q("invalid literal: "+U)}
na.prototype.h=function(){var b,a,c,d,e=this.input;switch(this.k){case 0:c=0;for(d=e.length;c<d;){a=B?e.subarray(c,c+65535):e.slice(c,c+65535);c+=a.length;var f=a,g=c===d,k=t,h=t,m=t,r=t,p=t,l=this.a,n=this.b;if(B){for(l=new Uint8Array(this.a.buffer);l.length<=n+f.length+5;)l=new Uint8Array(l.length<<1);l.set(this.a)}k=g?1:0;l[n++]=k|0;h=f.length;m=~h+65536&65535;l[n++]=h&255;l[n++]=h>>>8&255;l[n++]=m&255;l[n++]=m>>>8&255;if(B)l.set(f,n),n+=f.length,l=l.subarray(0,n);else{r=0;for(p=f.length;r<p;++r)l[n++]=
f[r];l.length=n}this.b=n;this.a=l}break;case 1:var s=new G(B?new Uint8Array(this.a.buffer):this.a,this.b);s.d(1,1,v);s.d(1,2,v);var u=ra(this,e),w,C,x;w=0;for(C=u.length;w<C;w++)if(x=u[w],G.prototype.d.apply(s,qa[x]),256<x)s.d(u[++w],u[++w],v),s.d(u[++w],5),s.d(u[++w],u[++w],v);else if(256===x)break;this.a=s.finish();this.b=this.a.length;break;case oa:var D=new G(B?new Uint8Array(this.a.buffer):this.a,this.b),M,z,N,X,Y,qb=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],da,Fa,ea,Ga,la,ta=Array(19),
Ha,Z,ma,E,Ia;M=oa;D.d(1,1,v);D.d(M,2,v);z=ra(this,e);da=sa(this.U,15);Fa=ua(da);ea=sa(this.T,7);Ga=ua(ea);for(N=286;257<N&&0===da[N-1];N--);for(X=30;1<X&&0===ea[X-1];X--);var Ja=N,Ka=X,K=new (B?Uint32Array:Array)(Ja+Ka),y,O,A,fa,J=new (B?Uint32Array:Array)(316),H,F,P=new (B?Uint8Array:Array)(19);for(y=O=0;y<Ja;y++)K[O++]=da[y];for(y=0;y<Ka;y++)K[O++]=ea[y];if(!B){y=0;for(fa=P.length;y<fa;++y)P[y]=0}y=H=0;for(fa=K.length;y<fa;y+=O){for(O=1;y+O<fa&&K[y+O]===K[y];++O);A=O;if(0===K[y])if(3>A)for(;0<A--;)J[H++]=
0,P[0]++;else for(;0<A;)F=138>A?A:138,F>A-3&&F<A&&(F=A-3),10>=F?(J[H++]=17,J[H++]=F-3,P[17]++):(J[H++]=18,J[H++]=F-11,P[18]++),A-=F;else if(J[H++]=K[y],P[K[y]]++,A--,3>A)for(;0<A--;)J[H++]=K[y],P[K[y]]++;else for(;0<A;)F=6>A?A:6,F>A-3&&F<A&&(F=A-3),J[H++]=16,J[H++]=F-3,P[16]++,A-=F}b=B?J.subarray(0,H):J.slice(0,H);la=sa(P,7);for(E=0;19>E;E++)ta[E]=la[qb[E]];for(Y=19;4<Y&&0===ta[Y-1];Y--);Ha=ua(la);D.d(N-257,5,v);D.d(X-1,5,v);D.d(Y-4,4,v);for(E=0;E<Y;E++)D.d(ta[E],3,v);E=0;for(Ia=b.length;E<Ia;E++)if(Z=
b[E],D.d(Ha[Z],la[Z],v),16<=Z){E++;switch(Z){case 16:ma=2;break;case 17:ma=3;break;case 18:ma=7;break;default:q("invalid code: "+Z)}D.d(b[E],ma,v)}var La=[Fa,da],Ma=[Ga,ea],Q,Na,ga,wa,Oa,Pa,Qa,Ra;Oa=La[0];Pa=La[1];Qa=Ma[0];Ra=Ma[1];Q=0;for(Na=z.length;Q<Na;++Q)if(ga=z[Q],D.d(Oa[ga],Pa[ga],v),256<ga)D.d(z[++Q],z[++Q],v),wa=z[++Q],D.d(Qa[wa],Ra[wa],v),D.d(z[++Q],z[++Q],v);else if(256===ga)break;this.a=D.finish();this.b=this.a.length;break;default:q("invalid compression type")}return this.a};
function va(b,a){this.length=b;this.N=a}
var xa=function(){function b(a){switch(v){case 3===a:return[257,a-3,0];case 4===a:return[258,a-4,0];case 5===a:return[259,a-5,0];case 6===a:return[260,a-6,0];case 7===a:return[261,a-7,0];case 8===a:return[262,a-8,0];case 9===a:return[263,a-9,0];case 10===a:return[264,a-10,0];case 12>=a:return[265,a-11,1];case 14>=a:return[266,a-13,1];case 16>=a:return[267,a-15,1];case 18>=a:return[268,a-17,1];case 22>=a:return[269,a-19,2];case 26>=a:return[270,a-23,2];case 30>=a:return[271,a-27,2];case 34>=a:return[272,
a-31,2];case 42>=a:return[273,a-35,3];case 50>=a:return[274,a-43,3];case 58>=a:return[275,a-51,3];case 66>=a:return[276,a-59,3];case 82>=a:return[277,a-67,4];case 98>=a:return[278,a-83,4];case 114>=a:return[279,a-99,4];case 130>=a:return[280,a-115,4];case 162>=a:return[281,a-131,5];case 194>=a:return[282,a-163,5];case 226>=a:return[283,a-195,5];case 257>=a:return[284,a-227,5];case 258===a:return[285,a-258,0];default:q("invalid length: "+a)}}var a=[],c,d;for(c=3;258>=c;c++)d=b(c),a[c]=d[2]<<24|d[1]<<
16|d[0];return a}(),ya=B?new Uint32Array(xa):xa;
function ra(b,a){function c(a,c){var b=a.N,d=[],f=0,e;e=ya[a.length];d[f++]=e&65535;d[f++]=e>>16&255;d[f++]=e>>24;var g;switch(v){case 1===b:g=[0,b-1,0];break;case 2===b:g=[1,b-2,0];break;case 3===b:g=[2,b-3,0];break;case 4===b:g=[3,b-4,0];break;case 6>=b:g=[4,b-5,1];break;case 8>=b:g=[5,b-7,1];break;case 12>=b:g=[6,b-9,2];break;case 16>=b:g=[7,b-13,2];break;case 24>=b:g=[8,b-17,3];break;case 32>=b:g=[9,b-25,3];break;case 48>=b:g=[10,b-33,4];break;case 64>=b:g=[11,b-49,4];break;case 96>=b:g=[12,b-
65,5];break;case 128>=b:g=[13,b-97,5];break;case 192>=b:g=[14,b-129,6];break;case 256>=b:g=[15,b-193,6];break;case 384>=b:g=[16,b-257,7];break;case 512>=b:g=[17,b-385,7];break;case 768>=b:g=[18,b-513,8];break;case 1024>=b:g=[19,b-769,8];break;case 1536>=b:g=[20,b-1025,9];break;case 2048>=b:g=[21,b-1537,9];break;case 3072>=b:g=[22,b-2049,10];break;case 4096>=b:g=[23,b-3073,10];break;case 6144>=b:g=[24,b-4097,11];break;case 8192>=b:g=[25,b-6145,11];break;case 12288>=b:g=[26,b-8193,12];break;case 16384>=
b:g=[27,b-12289,12];break;case 24576>=b:g=[28,b-16385,13];break;case 32768>=b:g=[29,b-24577,13];break;default:q("invalid distance")}e=g;d[f++]=e[0];d[f++]=e[1];d[f++]=e[2];var h,k;h=0;for(k=d.length;h<k;++h)l[n++]=d[h];u[d[0]]++;w[d[3]]++;s=a.length+c-1;p=null}var d,e,f,g,k,h={},m,r,p,l=B?new Uint16Array(2*a.length):[],n=0,s=0,u=new (B?Uint32Array:Array)(286),w=new (B?Uint32Array:Array)(30),C=b.F,x;if(!B){for(f=0;285>=f;)u[f++]=0;for(f=0;29>=f;)w[f++]=0}u[256]=1;d=0;for(e=a.length;d<e;++d){f=k=0;
for(g=3;f<g&&d+f!==e;++f)k=k<<8|a[d+f];h[k]===t&&(h[k]=[]);m=h[k];if(!(0<s--)){for(;0<m.length&&32768<d-m[0];)m.shift();if(d+3>=e){p&&c(p,-1);f=0;for(g=e-d;f<g;++f)x=a[d+f],l[n++]=x,++u[x];break}0<m.length?(r=za(a,d,m),p?p.length<r.length?(x=a[d-1],l[n++]=x,++u[x],c(r,0)):c(p,-1):r.length<C?p=r:c(r,0)):p?c(p,-1):(x=a[d],l[n++]=x,++u[x])}m.push(d)}l[n++]=256;u[256]++;b.U=u;b.T=w;return B?l.subarray(0,n):l}
function za(b,a,c){var d,e,f=0,g,k,h,m,r=b.length;k=0;m=c.length;a:for(;k<m;k++){d=c[m-k-1];g=3;if(3<f){for(h=f;3<h;h--)if(b[d+h-1]!==b[a+h-1])continue a;g=f}for(;258>g&&a+g<r&&b[d+g]===b[a+g];)++g;g>f&&(e=d,f=g);if(258===g)break}return new va(f,a-e)}
function sa(b,a){var c=b.length,d=new ka(572),e=new (B?Uint8Array:Array)(c),f,g,k,h,m;if(!B)for(h=0;h<c;h++)e[h]=0;for(h=0;h<c;++h)0<b[h]&&d.push(h,b[h]);f=Array(d.length/2);g=new (B?Uint32Array:Array)(d.length/2);if(1===f.length)return e[d.pop().index]=1,e;h=0;for(m=d.length/2;h<m;++h)f[h]=d.pop(),g[h]=f[h].value;k=Aa(g,g.length,a);h=0;for(m=f.length;h<m;++h)e[f[h].index]=k[h];return e}
function Aa(b,a,c){function d(b){var c=h[b][m[b]];c===a?(d(b+1),d(b+1)):--g[c];++m[b]}var e=new (B?Uint16Array:Array)(c),f=new (B?Uint8Array:Array)(c),g=new (B?Uint8Array:Array)(a),k=Array(c),h=Array(c),m=Array(c),r=(1<<c)-a,p=1<<c-1,l,n,s,u,w;e[c-1]=a;for(n=0;n<c;++n)r<p?f[n]=0:(f[n]=1,r-=p),r<<=1,e[c-2-n]=(e[c-1-n]/2|0)+a;e[0]=f[0];k[0]=Array(e[0]);h[0]=Array(e[0]);for(n=1;n<c;++n)e[n]>2*e[n-1]+f[n]&&(e[n]=2*e[n-1]+f[n]),k[n]=Array(e[n]),h[n]=Array(e[n]);for(l=0;l<a;++l)g[l]=c;for(s=0;s<e[c-1];++s)k[c-
1][s]=b[s],h[c-1][s]=s;for(l=0;l<c;++l)m[l]=0;1===f[c-1]&&(--g[0],++m[c-1]);for(n=c-2;0<=n;--n){u=l=0;w=m[n+1];for(s=0;s<e[n];s++)u=k[n+1][w]+k[n+1][w+1],u>b[l]?(k[n][s]=u,h[n][s]=a,w+=2):(k[n][s]=b[l],h[n][s]=l,++l);m[n]=0;1===f[n]&&d(n)}return g}
function ua(b){var a=new (B?Uint16Array:Array)(b.length),c=[],d=[],e=0,f,g,k,h;f=0;for(g=b.length;f<g;f++)c[b[f]]=(c[b[f]]|0)+1;f=1;for(g=16;f<=g;f++)d[f]=e,e+=c[f]|0,e<<=1;f=0;for(g=b.length;f<g;f++){e=d[b[f]];d[b[f]]+=1;k=a[f]=0;for(h=b[f];k<h;k++)a[f]=a[f]<<1|e&1,e>>>=1}return a};function Ba(b,a){this.input=b;this.b=this.c=0;this.g={};a&&(a.flags&&(this.g=a.flags),"string"===typeof a.filename&&(this.filename=a.filename),"string"===typeof a.comment&&(this.w=a.comment),a.deflateOptions&&(this.l=a.deflateOptions));this.l||(this.l={})}
Ba.prototype.h=function(){var b,a,c,d,e,f,g,k,h=new (B?Uint8Array:Array)(32768),m=0,r=this.input,p=this.c,l=this.filename,n=this.w;h[m++]=31;h[m++]=139;h[m++]=8;b=0;this.g.fname&&(b|=Ca);this.g.fcomment&&(b|=Da);this.g.fhcrc&&(b|=Ea);h[m++]=b;a=(Date.now?Date.now():+new Date)/1E3|0;h[m++]=a&255;h[m++]=a>>>8&255;h[m++]=a>>>16&255;h[m++]=a>>>24&255;h[m++]=0;h[m++]=Sa;if(this.g.fname!==t){g=0;for(k=l.length;g<k;++g)f=l.charCodeAt(g),255<f&&(h[m++]=f>>>8&255),h[m++]=f&255;h[m++]=0}if(this.g.comment){g=
0;for(k=n.length;g<k;++g)f=n.charCodeAt(g),255<f&&(h[m++]=f>>>8&255),h[m++]=f&255;h[m++]=0}this.g.fhcrc&&(c=ha(h,0,m)&65535,h[m++]=c&255,h[m++]=c>>>8&255);this.l.outputBuffer=h;this.l.outputIndex=m;e=new na(r,this.l);h=e.h();m=e.b;B&&(m+8>h.buffer.byteLength?(this.a=new Uint8Array(m+8),this.a.set(new Uint8Array(h.buffer)),h=this.a):h=new Uint8Array(h.buffer));d=ha(r,t,t);h[m++]=d&255;h[m++]=d>>>8&255;h[m++]=d>>>16&255;h[m++]=d>>>24&255;k=r.length;h[m++]=k&255;h[m++]=k>>>8&255;h[m++]=k>>>16&255;h[m++]=
k>>>24&255;this.c=p;B&&m<h.length&&(this.a=h=h.subarray(0,m));return h};var Sa=255,Ea=2,Ca=8,Da=16;function V(b,a){this.o=[];this.p=32768;this.e=this.j=this.c=this.s=0;this.input=B?new Uint8Array(b):b;this.u=!1;this.q=Ta;this.K=!1;if(a||!(a={}))a.index&&(this.c=a.index),a.bufferSize&&(this.p=a.bufferSize),a.bufferType&&(this.q=a.bufferType),a.resize&&(this.K=a.resize);switch(this.q){case Ua:this.b=32768;this.a=new (B?Uint8Array:Array)(32768+this.p+258);break;case Ta:this.b=0;this.a=new (B?Uint8Array:Array)(this.p);this.f=this.S;this.z=this.O;this.r=this.Q;break;default:q(Error("invalid inflate mode"))}}
var Ua=0,Ta=1;
V.prototype.i=function(){for(;!this.u;){var b=W(this,3);b&1&&(this.u=v);b>>>=1;switch(b){case 0:var a=this.input,c=this.c,d=this.a,e=this.b,f=a.length,g=t,k=t,h=d.length,m=t;this.e=this.j=0;c+1>=f&&q(Error("invalid uncompressed block header: LEN"));g=a[c++]|a[c++]<<8;c+1>=f&&q(Error("invalid uncompressed block header: NLEN"));k=a[c++]|a[c++]<<8;g===~k&&q(Error("invalid uncompressed block header: length verify"));c+g>a.length&&q(Error("input buffer is broken"));switch(this.q){case Ua:for(;e+g>d.length;){m=
h-e;g-=m;if(B)d.set(a.subarray(c,c+m),e),e+=m,c+=m;else for(;m--;)d[e++]=a[c++];this.b=e;d=this.f();e=this.b}break;case Ta:for(;e+g>d.length;)d=this.f({B:2});break;default:q(Error("invalid inflate mode"))}if(B)d.set(a.subarray(c,c+g),e),e+=g,c+=g;else for(;g--;)d[e++]=a[c++];this.c=c;this.b=e;this.a=d;break;case 1:this.r(Va,Wa);break;case 2:for(var r=W(this,5)+257,p=W(this,5)+1,l=W(this,4)+4,n=new (B?Uint8Array:Array)(Xa.length),s=t,u=t,w=t,C=t,x=t,D=t,M=t,z=t,N=t,z=0;z<l;++z)n[Xa[z]]=W(this,3);if(!B){z=
l;for(l=n.length;z<l;++z)n[Xa[z]]=0}s=T(n);C=new (B?Uint8Array:Array)(r+p);z=0;for(N=r+p;z<N;)switch(x=Ya(this,s),x){case 16:for(M=3+W(this,2);M--;)C[z++]=D;break;case 17:for(M=3+W(this,3);M--;)C[z++]=0;D=0;break;case 18:for(M=11+W(this,7);M--;)C[z++]=0;D=0;break;default:D=C[z++]=x}u=B?T(C.subarray(0,r)):T(C.slice(0,r));w=B?T(C.subarray(r)):T(C.slice(r));this.r(u,w);break;default:q(Error("unknown BTYPE: "+b))}}return this.z()};
var Za=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Xa=B?new Uint16Array(Za):Za,$a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],ab=B?new Uint16Array($a):$a,bb=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],cb=B?new Uint8Array(bb):bb,db=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],eb=B?new Uint16Array(db):db,fb=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,
10,11,11,12,12,13,13],gb=B?new Uint8Array(fb):fb,hb=new (B?Uint8Array:Array)(288),$,ib;$=0;for(ib=hb.length;$<ib;++$)hb[$]=143>=$?8:255>=$?9:279>=$?7:8;var Va=T(hb),jb=new (B?Uint8Array:Array)(30),kb,lb;kb=0;for(lb=jb.length;kb<lb;++kb)jb[kb]=5;var Wa=T(jb);function W(b,a){for(var c=b.j,d=b.e,e=b.input,f=b.c,g=e.length,k;d<a;)f>=g&&q(Error("input buffer is broken")),c|=e[f++]<<d,d+=8;k=c&(1<<a)-1;b.j=c>>>a;b.e=d-a;b.c=f;return k}
function Ya(b,a){for(var c=b.j,d=b.e,e=b.input,f=b.c,g=e.length,k=a[0],h=a[1],m,r;d<h&&!(f>=g);)c|=e[f++]<<d,d+=8;m=k[c&(1<<h)-1];r=m>>>16;r>d&&q(Error("invalid code length: "+r));b.j=c>>r;b.e=d-r;b.c=f;return m&65535}
V.prototype.r=function(b,a){var c=this.a,d=this.b;this.A=b;for(var e=c.length-258,f,g,k,h;256!==(f=Ya(this,b));)if(256>f)d>=e&&(this.b=d,c=this.f(),d=this.b),c[d++]=f;else{g=f-257;h=ab[g];0<cb[g]&&(h+=W(this,cb[g]));f=Ya(this,a);k=eb[f];0<gb[f]&&(k+=W(this,gb[f]));d>=e&&(this.b=d,c=this.f(),d=this.b);for(;h--;)c[d]=c[d++-k]}for(;8<=this.e;)this.e-=8,this.c--;this.b=d};
V.prototype.Q=function(b,a){var c=this.a,d=this.b;this.A=b;for(var e=c.length,f,g,k,h;256!==(f=Ya(this,b));)if(256>f)d>=e&&(c=this.f(),e=c.length),c[d++]=f;else{g=f-257;h=ab[g];0<cb[g]&&(h+=W(this,cb[g]));f=Ya(this,a);k=eb[f];0<gb[f]&&(k+=W(this,gb[f]));d+h>e&&(c=this.f(),e=c.length);for(;h--;)c[d]=c[d++-k]}for(;8<=this.e;)this.e-=8,this.c--;this.b=d};
V.prototype.f=function(){var b=new (B?Uint8Array:Array)(this.b-32768),a=this.b-32768,c,d,e=this.a;if(B)b.set(e.subarray(32768,b.length));else{c=0;for(d=b.length;c<d;++c)b[c]=e[c+32768]}this.o.push(b);this.s+=b.length;if(B)e.set(e.subarray(a,a+32768));else for(c=0;32768>c;++c)e[c]=e[a+c];this.b=32768;return e};
V.prototype.S=function(b){var a,c=this.input.length/this.c+1|0,d,e,f,g=this.input,k=this.a;b&&("number"===typeof b.B&&(c=b.B),"number"===typeof b.M&&(c+=b.M));2>c?(d=(g.length-this.c)/this.A[2],f=258*(d/2)|0,e=f<k.length?k.length+f:k.length<<1):e=k.length*c;B?(a=new Uint8Array(e),a.set(k)):a=k;return this.a=a};
V.prototype.z=function(){var b=0,a=this.a,c=this.o,d,e=new (B?Uint8Array:Array)(this.s+(this.b-32768)),f,g,k,h;if(0===c.length)return B?this.a.subarray(32768,this.b):this.a.slice(32768,this.b);f=0;for(g=c.length;f<g;++f){d=c[f];k=0;for(h=d.length;k<h;++k)e[b++]=d[k]}f=32768;for(g=this.b;f<g;++f)e[b++]=a[f];this.o=[];return this.buffer=e};
V.prototype.O=function(){var b,a=this.b;B?this.K?(b=new Uint8Array(a),b.set(this.a.subarray(0,a))):b=this.a.subarray(0,a):(this.a.length>a&&(this.a.length=a),b=this.a);return this.buffer=b};function mb(b){this.input=b;this.c=0;this.G=[];this.R=!1}
mb.prototype.i=function(){for(var b=this.input.length;this.c<b;){var a=new ja,c=t,d=t,e=t,f=t,g=t,k=t,h=t,m=t,r=t,p=this.input,l=this.c;a.C=p[l++];a.D=p[l++];(31!==a.C||139!==a.D)&&q(Error("invalid file signature:"+a.C+","+a.D));a.v=p[l++];switch(a.v){case 8:break;default:q(Error("unknown compression method: "+a.v))}a.n=p[l++];m=p[l++]|p[l++]<<8|p[l++]<<16|p[l++]<<24;a.$=new Date(1E3*m);a.ba=p[l++];a.aa=p[l++];0<(a.n&4)&&(a.W=p[l++]|p[l++]<<8,l+=a.W);if(0<(a.n&Ca)){h=[];for(k=0;0<(g=p[l++]);)h[k++]=
String.fromCharCode(g);a.name=h.join("")}if(0<(a.n&Da)){h=[];for(k=0;0<(g=p[l++]);)h[k++]=String.fromCharCode(g);a.w=h.join("")}0<(a.n&Ea)&&(a.P=ha(p,0,l)&65535,a.P!==(p[l++]|p[l++]<<8)&&q(Error("invalid header crc16")));c=p[p.length-4]|p[p.length-3]<<8|p[p.length-2]<<16|p[p.length-1]<<24;p.length-l-4-4<512*c&&(f=c);d=new V(p,{index:l,bufferSize:f});a.data=e=d.i();l=d.c;a.Y=r=(p[l++]|p[l++]<<8|p[l++]<<16|p[l++]<<24)>>>0;ha(e,t,t)!==r&&q(Error("invalid CRC-32 checksum: 0x"+ha(e,t,t).toString(16)+" / 0x"+
r.toString(16)));a.Z=c=(p[l++]|p[l++]<<8|p[l++]<<16|p[l++]<<24)>>>0;(e.length&4294967295)!==c&&q(Error("invalid input size: "+(e.length&4294967295)+" / "+c));this.G.push(a);this.c=l}this.R=v;var n=this.G,s,u,w=0,C=0,x;s=0;for(u=n.length;s<u;++s)C+=n[s].data.length;if(B){x=new Uint8Array(C);for(s=0;s<u;++s)x.set(n[s].data,w),w+=n[s].data.length}else{x=[];for(s=0;s<u;++s)x[s]=n[s].data;x=Array.prototype.concat.apply([],x)}return x};function nb(b){if("string"===typeof b){var a=b.split(""),c,d;c=0;for(d=a.length;c<d;c++)a[c]=(a[c].charCodeAt(0)&255)>>>0;b=a}for(var e=1,f=0,g=b.length,k,h=0;0<g;){k=1024<g?1024:g;g-=k;do e+=b[h++],f+=e;while(--k);e%=65521;f%=65521}return(f<<16|e)>>>0};function ob(b,a){var c,d;this.input=b;this.c=0;if(a||!(a={}))a.index&&(this.c=a.index),a.verify&&(this.V=a.verify);c=b[this.c++];d=b[this.c++];switch(c&15){case pb:this.method=pb;break;default:q(Error("unsupported compression method"))}0!==((c<<8)+d)%31&&q(Error("invalid fcheck flag:"+((c<<8)+d)%31));d&32&&q(Error("fdict flag is not supported"));this.J=new V(b,{index:this.c,bufferSize:a.bufferSize,bufferType:a.bufferType,resize:a.resize})}
ob.prototype.i=function(){var b=this.input,a,c;a=this.J.i();this.c=this.J.c;this.V&&(c=(b[this.c++]<<24|b[this.c++]<<16|b[this.c++]<<8|b[this.c++])>>>0,c!==nb(a)&&q(Error("invalid adler-32 checksum")));return a};var pb=8;function rb(b,a){this.input=b;this.a=new (B?Uint8Array:Array)(32768);this.k=sb.t;var c={},d;if((a||!(a={}))&&"number"===typeof a.compressionType)this.k=a.compressionType;for(d in a)c[d]=a[d];c.outputBuffer=this.a;this.I=new na(this.input,c)}var sb=pa;
rb.prototype.h=function(){var b,a,c,d,e,f,g,k=0;g=this.a;b=pb;switch(b){case pb:a=Math.LOG2E*Math.log(32768)-8;break;default:q(Error("invalid compression method"))}c=a<<4|b;g[k++]=c;switch(b){case pb:switch(this.k){case sb.NONE:e=0;break;case sb.L:e=1;break;case sb.t:e=2;break;default:q(Error("unsupported compression type"))}break;default:q(Error("invalid compression method"))}d=e<<6|0;g[k++]=d|31-(256*c+d)%31;f=nb(this.input);this.I.b=k;g=this.I.h();k=g.length;B&&(g=new Uint8Array(g.buffer),g.length<=
k+4&&(this.a=new Uint8Array(g.length+4),this.a.set(g),g=this.a),g=g.subarray(0,k+4));g[k++]=f>>24&255;g[k++]=f>>16&255;g[k++]=f>>8&255;g[k++]=f&255;return g};exports.deflate=tb;exports.deflateSync=ub;exports.inflate=vb;exports.inflateSync=wb;exports.gzip=xb;exports.gzipSync=yb;exports.gunzip=zb;exports.gunzipSync=Ab;function tb(b,a,c){process.nextTick(function(){var d,e;try{e=ub(b,c)}catch(f){d=f}a(d,e)})}function ub(b,a){var c;c=(new rb(b)).h();a||(a={});return a.H?c:Bb(c)}function vb(b,a,c){process.nextTick(function(){var d,e;try{e=wb(b,c)}catch(f){d=f}a(d,e)})}
function wb(b,a){var c;b.subarray=b.slice;c=(new ob(b)).i();a||(a={});return a.noBuffer?c:Bb(c)}function xb(b,a,c){process.nextTick(function(){var d,e;try{e=yb(b,c)}catch(f){d=f}a(d,e)})}function yb(b,a){var c;b.subarray=b.slice;c=(new Ba(b)).h();a||(a={});return a.H?c:Bb(c)}function zb(b,a,c){process.nextTick(function(){var d,e;try{e=Ab(b,c)}catch(f){d=f}a(d,e)})}function Ab(b,a){var c;b.subarray=b.slice;c=(new mb(b)).i();a||(a={});return a.H?c:Bb(c)}
function Bb(b){var a=new Buffer(b.length),c,d;c=0;for(d=b.length;c<d;++c)a[c]=b[c];return a};})()
