(function () {
    var id = document.getElementById.bind(document);
    var domProperty = id('search-property');
    var domResults = id('results');

    var knownProps = ['align-content','align-items','align-self','alignment-baseline','animation','animation-delay','animation-direction','animation-duration','animation-fill-mode','animation-iteration-count','animation-name','animation-play-state','animation-timing-function','azimuth','backface-visibility','background','background-attachment','background-blend-mode','background-clip','background-color','background-image','background-origin','background-position','background-position-x','background-position-y','background-repeat','background-size','baseline-shift','bookmark-label','bookmark-level','bookmark-state','border','border-bottom','border-bottom-color','border-bottom-left-radius','border-bottom-right-radius','border-bottom-style','border-bottom-width','border-boundary','border-collapse','border-color','border-image','border-image-outset','border-image-repeat','border-image-slice','border-image-source','border-image-width','border-left','border-left-color','border-left-style','border-left-width','border-radius','border-right','border-right-color','border-right-style','border-right-width','border-spacing','border-style','border-top','border-top-color','border-top-left-radius','border-top-right-radius','border-top-style','border-top-width','border-width','bottom','box-decoration-break','box-shadow','box-sizing','box-snap','break-after','break-before','break-inside','buffered-rendering','caption-side','caret-color','clear','clip','clip-path','clip-rule','color','color-adjust','color-interpolation','color-interpolation-filters','color-rendering','column-count','column-fill','column-gap','column-rule','column-rule-color','column-rule-style','column-rule-width','column-span','column-width','columns','contain','content','counter-increment','counter-reset','counter-set','cue','cue-after','cue-before','cursor','cx','cy','d','direction','display','dominant-baseline','elevation','empty-cells','fill','fill-opacity','fill-rule','filter','flex','flex-basis','flex-direction','flex-flow','flex-grow','flex-shrink','flex-wrap','float','flood-color','flood-opacity','flow-from','flow-into','font','font-family','font-feature-settings','font-kerning','font-language-override','font-size','font-size-adjust','font-stretch','font-style','font-synthesis','font-variant','font-variant-alternates','font-variant-caps','font-variant-east-asian','font-variant-ligatures','font-variant-numeric','font-variant-position','font-weight','footnote-display','footnote-policy','gap','glyph-orientation-vertical','grid','grid-area','grid-auto-columns','grid-auto-flow','grid-auto-rows','grid-column','grid-column-end','grid-column-gap','grid-column-start','grid-gap','grid-row','grid-row-end','grid-row-gap','grid-row-start','grid-template','grid-template-areas','grid-template-columns','grid-template-rows','hanging-punctuation','height','hyphens','image-orientation','image-rendering','image-resolution','ime-mode','initial-letter','initial-letter-align','initial-letter-wrap','isolation','justify-content','justify-items','justify-self','left','letter-spacing','lighting-color','line-break','line-grid','line-height','line-snap','list-style','list-style-image','list-style-position','list-style-type','margin','margin-bottom','margin-left','margin-right','margin-top','marker-end','marker-mid','marker-side','marker-start','marquee-direction','marquee-loop','marquee-speed','marquee-style','mask','mask-border','mask-border-mode','mask-border-outset','mask-border-repeat','mask-border-slice','mask-border-source','mask-border-width','mask-clip','mask-composite','mask-image','mask-mode','mask-origin','mask-position','mask-position-x','mask-position-y','mask-repeat','mask-size','mask-type','max-height','max-lines','max-width','min-height','min-width','mix-blend-mode','nav-down','nav-left','nav-right','nav-up','object-fit','object-position','offset','offset-after','offset-anchor','offset-before','offset-distance','offset-end','offset-path','offset-position','offset-rotate','offset-start','opacity','order','orphans','outline','outline-color','outline-offset','outline-style','outline-width','overflow','overflow-anchor','overflow-style','overflow-wrap','overflow-x','overflow-y','padding','padding-bottom','padding-left','padding-right','padding-top','page','page-break-after','page-break-before','page-break-inside','paint-order','pause','pause-after','pause-before','perspective','perspective-origin','pitch','pitch-range','place-content','place-items','place-self','play-during','pointer-events','position','quotes','r','region-fragment','resize','rest','rest-after','rest-before','richness','right','rotation','rotation-point','row-gap','ruby-align','ruby-merge','ruby-position','running','rx','ry','scroll-behavior','scroll-padding','scroll-padding-block','scroll-padding-block-end','scroll-padding-block-start','scroll-padding-bottom','scroll-padding-inline','scroll-padding-inline-end','scroll-padding-inline-start','scroll-padding-left','scroll-padding-right','scroll-padding-top','scroll-snap-align','scroll-snap-coordinate','scroll-snap-destination','scroll-snap-margin','scroll-snap-margin-block','scroll-snap-margin-block-end','scroll-snap-margin-block-start','scroll-snap-margin-bottom','scroll-snap-margin-inline','scroll-snap-margin-inline-end','scroll-snap-margin-inline-start','scroll-snap-margin-left','scroll-snap-margin-right','scroll-snap-margin-top','scroll-snap-points-x','scroll-snap-points-y','scroll-snap-stop','scroll-snap-type','scroll-snap-type-x','scroll-snap-type-y','shape-image-threshold','shape-inside','shape-margin','shape-outside','shape-rendering','size','speak','speak-as','speak-header','speak-numeral','speak-punctuation','speech-rate','stop-color','stop-opacity','stress','string-set','stroke','stroke-dasharray','stroke-dashoffset','stroke-linecap','stroke-linejoin','stroke-miterlimit','stroke-opacity','stroke-width','tab-size','table-layout','text-align','text-align-all','text-align-last','text-anchor','text-combine-upright','text-decoration','text-decoration-color','text-decoration-line','text-decoration-skip','text-decoration-style','text-emphasis','text-emphasis-color','text-emphasis-position','text-emphasis-style','text-indent','text-justify','text-orientation','text-overflow','text-rendering','text-shadow','text-size-adjust','text-transform','text-underline-position','top','touch-action','transform','transform-box','transform-origin','transform-style','transition','transition-delay','transition-duration','transition-property','transition-timing-function','unicode-bidi','user-select','vector-effect','vertical-align','visibility','voice-balance','voice-duration','voice-family','voice-pitch','voice-range','voice-rate','voice-stress','voice-volume','volume','white-space','widows','width','will-change','word-break','word-spacing','word-wrap','wrap-flow','wrap-through','writing-mode','x','y','z-index','zoom'];
    var shorthands = cssShorthandProps.shorthandProperties;

    var templates = {
        cache: {},
        get: function (name) {
            if (name in templates.cache) {
                return templates.cache[name];
            }
            var elem = document.getElementById('tpl-' + name);
            if (!elem) {
                return [];
            }
            var tpl = templates.cache[name] = elem.innerHTML;
            return tpl;
        },
        render: function (name, data) {
            var tpl = templates.get(name);
            return Mustache.render(tpl, data);
        },
        renderAsNode: function (name, data) {
            var htmlString = templates.render(name, data);
            var holder = document.createElement('div');
            holder.innerHTML = htmlString;
            return holder;
        },
        renderAsFragment: function (name, data) {
            var holder = templates.renderAsNode(name, data);
            var node;
            while ((node = holder.childNodes[0])) {
                // childNodes is a live NodeList, so appending to the fragment removes it from holder
                frag.appendChild(node);
            }
            return frag;
        }
    };

    function joinWords(list, lastJoiner) {
        if (list.length < 2) {
            return list.join();
        }
        lastJoiner || (lastJoiner = ' or ');
        var last = list.slice(-1);
        return list.slice(0, -1).join(', ') + lastJoiner + last;
    }

    function getTypeDetails(types) {
        return types.map(function (type, index) {
            var typeData = cssAnimProps.types[type];
            var prefix = (type === 'integer') ? 'an' : 'a';
            if (index && index === types.length - 1) {
                prefix = 'or';
            }
            return {
                type: type,
                name: typeData.name,
                href: typeData.href,
                prefix: prefix
            };
        })
    }

    function runInput() {
        var prop = domProperty.value.trim();
        domResults.classList[prop.length ? 'add' : 'remove']('has-results');
        if (prop.length) {
            showResult(prop);
        }
    }

    function showResult(prop) {
        prop = prop.toLowerCase();
        var canAnimate = cssAnimProps.canAnimate(prop);
        var canAnimatePartial = false;
        var isShorthand = (prop in shorthands);
        var data = {
            property: prop
        };
        var details, longhands, output;
        if (canAnimate) {
            details = cssAnimProps.getProperty(prop);
            if (isShorthand) {
                longhands = cssShorthandProps.expand(prop);
                longhands.forEach(function (p) {
                    if (details.properties.indexOf(p) === -1) {
                        canAnimatePartial = true;
                    }
                });
                data.result_shorthand = true;
                data.result = canAnimatePartial ? 'A bit' : 'Yep';
                data.className = canAnimatePartial ? 'shorthand-mixed' : 'shorthand-yes';
            } else {
                data.result_yes = true;
                data.result = 'Yep';
                data.className = 'yes';
                data.types = getTypeDetails(details.types);
            }
        } else {
            if (knownProps.indexOf(prop) === -1 && !isShorthand) {
                data.result_unknown = true;
                data.className = 'unknown';
            // Special case
            } else if (prop === 'background-image') {
                data.result_sortof_bgimage = true;
                data.result = 'Sort of';
                data.className = 'sortof';
            } else {
                data.result_no = true;
                data.result = 'Nope'
                data.className = 'no';
            }
        }

        output = templates.renderAsNode('result', data);
        if (canAnimate) {
            output.querySelector('.details').innerHTML = isShorthand ?
                showShorthand(details, {
                    canAnimate: canAnimate,
                    isPartial: canAnimatePartial,
                    longhands: longhands
                }) :
                showAnimType(details.types[0]);
        // Special case
        } else if (prop === 'background-image') {
            output.querySelector('.details').innerHTML = templates.render('bgimage', data);
        }
        domResults.innerHTML = output.innerHTML;
    }

    function showShorthand(details, extra) {
        var data = Object.create(details);
        data.compatibility = extra.isPartial ? 'only some' : 'all';
        data.isPartial = extra.isPartial;
        if (extra.canAnimate) {
            data.propertiesYes = data.properties.map(function (prop) {
                var subDetails = cssAnimProps.getProperty(prop);
                var subProps;
                // Special case: Only `border` is a shorthand of shorthands
                if (subDetails.properties) {
                    subProps = subDetails.properties;
                }
                return {
                    name: prop,
                    types: subDetails.types && getTypeDetails(subDetails.types),
                    properties: subProps,
                    isShorthand: !!subProps
                };
            });
        }
        if (data.isPartial) {
            data.propertiesNo = extra.longhands.filter(function (prop) {
                return data.properties.indexOf(prop) === -1;
            });
        }
        return templates.render('shorthand', data);
    }

    function showAnimType(type) {
        var desc = typeDescriptions[type] || {};
        var details = cssAnimProps.types[type] || {};
        var data = {
            key: type,
            name: details.name,
            href: details.href,
            desc: desc
        };

        return templates.render('animtype', data);
    }

    function delegatedClass(className, callback) {
        return function (e) {
            if (e.target.classList.contains(className)) {
                callback.apply(e.target, arguments);
            }
        };
    }


    // Initial setup and DOM bindings

    id('search-form').addEventListener('submit', function (e) {
        e.preventDefault();
    }, false);

    domProperty.addEventListener('input', runInput, false);
    window.addEventListener('load', runInput, false);

})();

// Analytics
if (location.hostname.indexOf('canianimate.com') > -1) {
    var ga = function () {
        ga.q.push(arguments);
    }
    ga.q = [
        ['create', 'UA-8341018-6', 'auto'],
        ['send', 'pageview']
    ];
    ga.l = +new Date();
    // Make sure to load GA script after page load
    window.addEventListener('load', function (e) {
        var s = document.createElement('script');
        s.src = 'https://ssl.google-analytics.com/analytics.js';
        document.body.appendChild(s);
    }, false);
}
