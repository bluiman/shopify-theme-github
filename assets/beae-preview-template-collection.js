
                    if (document.querySelector('.beae-voff828g:not([data-beae-bind])')) {
                        (function() {if(!this.isLive)return;let e=window.innerWidth,t=()=>{this.$el&&this.$el.querySelector(".beae-section-background-video")&&typeof handleVideoBg<"u"?(handleVideoBg.bind(this)(),window.addEventListener("resize",()=>{window.innerWidth!=e&&(e=window.innerWidth,handleVideoBg.bind(this)())})):setTimeout(()=>t(),500)};t()}).call({
                            $el: document.querySelector('.beae-voff828g:not([data-beae-bind])'),
                            
                            id: 'beae-voff828g',
                            isLive: true
                        });
                        document.querySelector('.beae-voff828g:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                    }
                
                    if (document.querySelector('.beae-g5th1vzx:not([data-beae-bind])')) {
                        (function() {if(!this.isLive)return;let e=window.innerWidth,t=()=>{this.$el&&this.$el.querySelector(".beae-section-background-video")&&typeof handleVideoBg<"u"?(handleVideoBg.bind(this)(),window.addEventListener("resize",()=>{window.innerWidth!=e&&(e=window.innerWidth,handleVideoBg.bind(this)())})):setTimeout(()=>t(),500)};t()}).call({
                            $el: document.querySelector('.beae-g5th1vzx:not([data-beae-bind])'),
                            
                            id: 'beae-g5th1vzx',
                            isLive: true
                        });
                        document.querySelector('.beae-g5th1vzx:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                    }
                
                    if (document.querySelector('.beae-qjlmexl5:not([data-beae-bind])')) {
                        (function() {if(this.isLive&&this.$el.querySelector('[name="sort_by"]')&&this.$el.querySelector('[name="sort_by"]').addEventListener("change",function(e){window.BEAE.queryParams.sort_by=e.target.value,window.location.search=new URLSearchParams(window.BEAE.queryParams).toString()}),this.$el){let e=this.$el,t=this.isLive?e:e.parentElement,a=t.parentElement;t.style.zIndex="10",window.addEventListener("scroll",()=>{if(a.getBoundingClientRect().y<0)if(this.settings&&this.settings.enable_stick_on_mobile){if(a.querySelector(".beae-stick"))return;t.classList.add("beae-stick");return}else{let o=document.querySelector(".beae-stick");o&&o.classList.remove("beae-stick")}else t.classList.remove("beae-stick")});let n=this.$el.closest(".beae-section");if(n){let s=n.querySelector(".beae-block");s&&s.classList.add("beae-toolbar__space")}}}).call({
                            $el: document.querySelector('.beae-qjlmexl5:not([data-beae-bind])'),
                            settings: {},
                            id: 'beae-qjlmexl5',
                            isLive: true
                        });
                        document.querySelector('.beae-qjlmexl5:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                    }
                
                    if (document.querySelector('.beae-xsq33w3h:not([data-beae-bind])')) {
                        (function() {const e=this.$el,t=this.settings_countdown.after_timeout||"";function a(n){let o=/\(([^\)]+)\)/g.exec(n);return{time:o?o[1]:null,label:o?o[0]:null}}if(window.beaejQuery&&window.beaejQuery.fn.BeaeCountdown){const n=e.querySelector(".beae-element__countdown--time");let s=n?n.getAttribute("data-beae-countdown-from"):0,o=n?n.getAttribute("data-beae-countdown"):0;if(n&&o){let d=function(u,_){return`<div class="beae-element__countdown-item--weeks"><span class="beae-element__countdown-number">${u&&u.time?u.time:""}</span><span class="beae-element__countdown-text">${u.label&&_?_.replace(u.label,""):_}</span></div>`},m=function(u){var _="";const b=a(c.week),h=a(c.day),v=a(c.hour),y=a(c.minute),x=a(c.second);l.includes("week")&&c.week.length>0&&(_+=d(b,c.week)),l.includes("day")&&c.day.length>0&&(_+=d(h,c.day)),l.includes("hour")&&c.hour.length>0&&(_+=d(v,c.hour)),l.includes("minute")&&c.minute.length>0&&(_+=d(y,c.minute)),l.includes("second")&&c.second.length>0&&(_+=d(x,c.second)),window.beaejQuery(this).html(u.strftime(_))},g=function(u){let _=u.replaceAll("/","-").replace(/\+\w+$/,"").split(/[- :]/);return new Date(_[0],_[1]-1,_[2],_[3],_[4],_[5]?_[5]:0)};const r=n.closest(".beae-mce__countdown"),l=r.getAttribute("data-shows")||"",c={week:r.getAttribute("data-week"),day:r.getAttribute("data-day"),hour:r.getAttribute("data-hour"),minute:r.getAttribute("data-minute"),second:r.getAttribute("data-second")};s&&new Date().getTime()>new Date(g(s)).getTime()&&(date=g(o),date_from=g(s),setTimeout(()=>{window.beaejQuery&&window.beaejQuery.fn.BeaeCountdown&&window.beaejQuery(n).BeaeCountdown(date,m).on("finish.beae-countdown",function(u){switch(t){case"hide":beaejQuery(this).closest(".beae-mce__countdown").hide();break;case"refresh":let _=Math.abs(date-date_from);beaejQuery(this).BeaeCountdown(new Date().getTime()+_);break}})}))}}}).call({
                            $el: document.querySelector('.beae-xsq33w3h:not([data-beae-bind])'),
                            settings_countdown: {"after_timeout":"none"},
                            id: 'beae-xsq33w3h',
                            isLive: true
                        });
                        document.querySelector('.beae-xsq33w3h:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                    }
                
                    if (document.querySelector('.beae-pluovgo0:not([data-beae-bind])')) {
                        (function() {let e=this.$el;const t=this.settings.image_height?this.settings.image_height:!1;let i=e.querySelector(".beae-collection__description-view-more-btn"),a=this.settings.content_type,c=e.querySelector(".beae-collection__description--full"),o=e.querySelector(".beae-collection__description--paragraph");i&&i.addEventListener("click",function(){a==="text"&&c?(c.style.display="inherit",o.style.display="none"):o.style.maxHeight=null,this.style.display="none"});function n(){let r=window.innerHeight,p=e.querySelector(".beae-collection__banner-wrapper.beae-collection-banner");p&&t&&t!="customer"&&(p.style.height=r*t+"px")}n(),window.addEventListener("resize",n)}).call({
                            $el: document.querySelector('.beae-pluovgo0:not([data-beae-bind])'),
                            settings: {"image_height":"0.5","content_type":"text"},
                            id: 'beae-pluovgo0',
                            isLive: true
                        });
                        document.querySelector('.beae-pluovgo0:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                    }
                
                    if (document.querySelector('.beae-oaovuu0p:not([data-beae-bind])')) {
                        (function() {typeof handleJSProduct<"u"&&(this.settings.items,handleJSProduct.bind(this)()),this.settings.pagination_type,this.settings_price&&this.settings_price.show_currency_code,this.settings_swatchcolor&&this.settings_swatchcolor.variant_layout&&this.settings_swatchcolor.swatch_type}).call({
                            $el: document.querySelector('.beae-oaovuu0p:not([data-beae-bind])'),
                            settings: {"items":[{"type":"title"},{"type":"price"}],"pagination_type":"paginate"},settings_price: {},settings_swatchcolor: {},
                            id: 'beae-oaovuu0p',
                            isLive: true
                        });
                        document.querySelector('.beae-oaovuu0p:not([data-beae-bind])').setAttribute('data-beae-bind', true);
                    }
                
            if(window.location.search.indexOf("beae-token=") < 0)
            {
                document.querySelector("#beae-builder").innerHTML = "<h3>This template for preview purposes only</h3>";
                document.querySelector("body").style.opacity= "0.7";
            }
        