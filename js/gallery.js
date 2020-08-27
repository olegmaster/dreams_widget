/* @preserve
    _____ __ _     __                _
   / ___// /(_)___/ /___  ____      (_)___
  / (_ // // // _  // -_)/ __/_    / /(_-<
  \___//_//_/ \_,_/ \__//_/  (_)__/ //___/
                              |___/

  Version: 1.7.4
  Author: Nick Piscitelli (pickykneee)
  Website: https://nickpiscitelli.com
  Documentation: http://nickpiscitelli.github.io/Glider.js
  License: MIT License
  Release Date: October 25th, 2018

*/

/* global define */

(function (factory) {
    typeof define === 'function' && define.amd
        ? define(factory)
        : typeof exports === 'object'
        ? (module.exports = factory())
        : factory()
})(function () {
    ('use strict') // eslint-disable-line no-unused-expressions

    /* globals window:true */
    var _window = typeof window !== 'undefined' ? window : this

    var Glider = (_window.Glider = function (element, settings) {
        var _ = this

        if (element._glider) return element._glider

        _.ele = element
        _.ele.classList.add('glider')

        // expose glider object to its DOM element
        _.ele._glider = _

        // merge user setting with defaults
        _.opt = Object.assign(
            {},
            {
                slidesToScroll: 1,
                slidesToShow: 1,
                resizeLock: true,
                duration: 0.5,
                // easeInQuad
                easing: function (x, t, b, c, d) {
                    return c * (t /= d) * t + b
                }
            },
            settings
        )

        // set defaults
        _.animate_id = _.page = _.slide = 0
        _.arrows = {}

        // preserve original options to
        // extend breakpoint settings
        _._opt = _.opt

        if (_.opt.skipTrack) {
            // first and only child is the track
            _.track = _.ele.children[0]
        } else {
            // create track and wrap slides
            _.track = document.createElement('div')
            _.ele.appendChild(_.track)
            while (_.ele.children.length !== 1) {
                _.track.appendChild(_.ele.children[0])
            }
        }

        _.track.classList.add('glider-track')

        // start glider
        _.init()

        // set events
        _.resize = _.init.bind(_, true)
        _.event(_.ele, 'add', {
            scroll: _.updateControls.bind(_)
        })
        _.event(_window, 'add', {
            resize: _.resize
        })
    })

    var gliderPrototype = Glider.prototype
    gliderPrototype.init = function (refresh, paging) {
        var _ = this

        var width = 0

        var height = 0

        _.slides = _.track.children;

        [].forEach.call(_.slides, function (_) {
            _.classList.add('glider-slide')
        })

        _.containerWidth = _.ele.clientWidth

        var breakpointChanged = _.settingsBreakpoint()
        if (!paging) paging = breakpointChanged

        if (
            _.opt.slidesToShow === 'auto' ||
            typeof _.opt._autoSlide !== 'undefined'
        ) {
            var slideCount = _.containerWidth / _.opt.itemWidth

            _.opt._autoSlide = _.opt.slidesToShow = _.opt.exactWidth
                ? slideCount
                : Math.floor(slideCount)
        }
        if (_.opt.slidesToScroll === 'auto') {
            _.opt.slidesToScroll = Math.floor(_.opt.slidesToShow)
        }

        _.itemWidth = _.opt.exactWidth
            ? _.opt.itemWidth
            : _.containerWidth / _.opt.slidesToShow;

        // set slide dimensions
        [].forEach.call(_.slides, function (__) {
            __.style.height = 'auto'
            __.style.width = _.itemWidth + 'px'
            width += _.itemWidth
            height = Math.max(__.offsetHeight, height)
        })

        _.track.style.width = width + 'px'
        _.trackWidth = width
        _.isDrag = false
        _.preventClick = false

        _.opt.resizeLock && _.scrollTo(_.slide * _.itemWidth, 0)

        if (breakpointChanged || paging) {
            _.bindArrows()
            _.buildDots()
            _.bindDrag()
        }

        _.updateControls()

        _.emit(refresh ? 'refresh' : 'loaded')
    }

    gliderPrototype.bindDrag = function () {
        var _ = this
        _.mouse = _.mouse || _.handleMouse.bind(_)

        var mouseup = function () {
            _.mouseDown = undefined
            _.ele.classList.remove('drag')
            if (_.isDrag) {
                _.preventClick = true
            }
            _.isDrag = false
        }

        var events = {
            mouseup: mouseup,
            mouseleave: mouseup,
            mousedown: function (e) {
                e.preventDefault()
                e.stopPropagation()
                _.mouseDown = e.clientX
                _.ele.classList.add('drag')
            },
            mousemove: _.mouse,
            click: function (e) {
                if (_.preventClick) {
                    e.preventDefault()
                    e.stopPropagation()
                }
                _.preventClick = false
            }
        }

        _.ele.classList.toggle('draggable', _.opt.draggable === true)
        _.event(_.ele, 'remove', events)
        if (_.opt.draggable) _.event(_.ele, 'add', events)
    }

    gliderPrototype.buildDots = function () {
        var _ = this

        if (!_.opt.dots) {
            if (_.dots) _.dots.innerHTML = ''
            return
        }

        if (typeof _.opt.dots === 'string') {
            _.dots = document.querySelector(_.opt.dots)
        } else _.dots = _.opt.dots
        if (!_.dots) return

        _.dots.innerHTML = ''
        _.dots.classList.add('glider-dots')

        for (var i = 0; i < Math.ceil(_.slides.length / _.opt.slidesToShow); ++i) {
            var dot = document.createElement('button')
            dot.dataset.index = i
            dot.setAttribute('aria-label', 'Page ' + (i + 1))
            dot.className = 'glider-dot ' + (i ? '' : 'active')
            _.event(dot, 'add', {
                click: _.scrollItem.bind(_, i, true)
            })
            _.dots.appendChild(dot)
        }
    }

    gliderPrototype.bindArrows = function () {
        var _ = this
        if (!_.opt.arrows) {
            Object.keys(_.arrows).forEach(function (direction) {
                var element = _.arrows[direction]
                _.event(element, 'remove', { click: element._func })
            })
            return
        }
        ['prev', 'next'].forEach(function (direction) {
            var arrow = _.opt.arrows[direction]
            if (arrow) {
                if (typeof arrow === 'string') arrow = document.querySelector(arrow)
                arrow._func = arrow._func || _.scrollItem.bind(_, direction)
                _.event(arrow, 'remove', {
                    click: arrow._func
                })
                _.event(arrow, 'add', {
                    click: arrow._func
                })
                _.arrows[direction] = arrow
            }
        })
    }

    gliderPrototype.updateControls = function (event) {
        var _ = this

        if (event && !_.opt.scrollPropagate) {
            event.stopPropagation()
        }

        var disableArrows = _.containerWidth >= _.trackWidth

        if (!_.opt.rewind) {
            if (_.arrows.prev) {
                _.arrows.prev.classList.toggle(
                    'disabled',
                    _.ele.scrollLeft <= 0 || disableArrows
                )
            }
            if (_.arrows.next) {
                _.arrows.next.classList.toggle(
                    'disabled',
                    Math.ceil(_.ele.scrollLeft + _.containerWidth) >=
                    Math.floor(_.trackWidth) || disableArrows
                )
            }
        }

        _.slide = Math.round(_.ele.scrollLeft / _.itemWidth)
        _.page = Math.round(_.ele.scrollLeft / _.containerWidth)

        var middle = _.slide + Math.floor(Math.floor(_.opt.slidesToShow) / 2)

        var extraMiddle = Math.floor(_.opt.slidesToShow) % 2 ? 0 : middle + 1
        if (Math.floor(_.opt.slidesToShow) === 1) {
            extraMiddle = 0
        }

        // the last page may be less than one half of a normal page width so
        // the page is rounded down. when at the end, force the page to turn
        if (_.ele.scrollLeft + _.containerWidth >= Math.floor(_.trackWidth)) {
            _.page = _.dots ? _.dots.children.length - 1 : 0
        }

        [].forEach.call(_.slides, function (slide, index) {
            var slideClasses = slide.classList

            var wasVisible = slideClasses.contains('visible')

            var start = _.ele.scrollLeft

            var end = _.ele.scrollLeft + _.containerWidth

            var itemStart = _.itemWidth * index

            var itemEnd = itemStart + _.itemWidth;

            [].forEach.call(slideClasses, function (className) {
                /^left|right/.test(className) && slideClasses.remove(className)
            })
            slideClasses.toggle('active', _.slide === index)
            if (middle === index || (extraMiddle && extraMiddle === index)) {
                slideClasses.add('center')
            } else {
                slideClasses.remove('center')
                slideClasses.add(
                    [
                        index < middle ? 'left' : 'right',
                        Math.abs(index - (index < middle ? middle : extraMiddle || middle))
                    ].join('-')
                )
            }

            var isVisible =
                Math.ceil(itemStart) >= start && Math.floor(itemEnd) <= end
            slideClasses.toggle('visible', isVisible)
            if (isVisible !== wasVisible) {
                _.emit('slide-' + (isVisible ? 'visible' : 'hidden'), {
                    slide: index
                })
            }
        })
        if (_.dots) {
            [].forEach.call(_.dots.children, function (dot, index) {
                dot.classList.toggle('active', _.page === index)
            })
        }

        if (event && _.opt.scrollLock) {
            clearTimeout(_.scrollLock)
            _.scrollLock = setTimeout(function () {
                clearTimeout(_.scrollLock)
                // dont attempt to scroll less than a pixel fraction - causes looping
                if (Math.abs(_.ele.scrollLeft / _.itemWidth - _.slide) > 0.02) {
                    if (!_.mouseDown) {
                        // Only scroll if not at the end (#94)
                        if (_.trackWidth > _.containerWidth + _.ele.scrollLeft) {
                            _.scrollItem(_.getCurrentSlide())
                        }
                    }
                }
            }, _.opt.scrollLockDelay || 250)
        }
    }

    gliderPrototype.getCurrentSlide = function () {
        var _ = this
        return _.round(_.ele.scrollLeft / _.itemWidth)
    }

    gliderPrototype.scrollItem = function (slide, dot, e) {
        if (e) e.preventDefault()

        var _ = this

        var originalSlide = slide
        ++_.animate_id

        if (dot === true) {
            slide = slide * _.containerWidth
            slide = Math.round(slide / _.itemWidth) * _.itemWidth
        } else {
            if (typeof slide === 'string') {
                var backwards = slide === 'prev'

                // use precise location if fractional slides are on
                if (_.opt.slidesToScroll % 1 || _.opt.slidesToShow % 1) {
                    slide = _.getCurrentSlide()
                } else {
                    slide = _.slide
                }

                if (backwards) slide -= _.opt.slidesToScroll
                else slide += _.opt.slidesToScroll

                if (_.opt.rewind) {
                    var scrollLeft = _.ele.scrollLeft
                    slide =
                        backwards && !scrollLeft
                            ? _.slides.length
                            : !backwards &&
                            scrollLeft + _.containerWidth >= Math.floor(_.trackWidth)
                            ? 0
                            : slide
                }
            }

            slide = Math.max(Math.min(slide, _.slides.length), 0)

            _.slide = slide
            slide = _.itemWidth * slide
        }

        _.scrollTo(
            slide,
            _.opt.duration * Math.abs(_.ele.scrollLeft - slide),
            function () {
                _.updateControls()
                _.emit('animated', {
                    value: originalSlide,
                    type:
                        typeof originalSlide === 'string' ? 'arrow' : dot ? 'dot' : 'slide'
                })
            }
        )

        return false
    }

    gliderPrototype.settingsBreakpoint = function () {
        var _ = this

        var resp = _._opt.responsive

        if (resp) {
            // Sort the breakpoints in mobile first order
            resp.sort(function (a, b) {
                return b.breakpoint - a.breakpoint
            })

            for (var i = 0; i < resp.length; ++i) {
                var size = resp[i]
                if (_window.innerWidth >= size.breakpoint) {
                    if (_.breakpoint !== size.breakpoint) {
                        _.opt = Object.assign({}, _._opt, size.settings)
                        _.breakpoint = size.breakpoint
                        return true
                    }
                    return false
                }
            }
        }
        // set back to defaults in case they were overriden
        var breakpointChanged = _.breakpoint !== 0
        _.opt = Object.assign({}, _._opt)
        _.breakpoint = 0
        return breakpointChanged
    }

    gliderPrototype.scrollTo = function (scrollTarget, scrollDuration, callback) {
        var _ = this

        var start = new Date().getTime()

        var animateIndex = _.animate_id

        var animate = function () {
            var now = new Date().getTime() - start
            _.ele.scrollLeft =
                _.ele.scrollLeft +
                (scrollTarget - _.ele.scrollLeft) *
                _.opt.easing(0, now, 0, 1, scrollDuration)
            if (now < scrollDuration && animateIndex === _.animate_id) {
                _window.requestAnimationFrame(animate)
            } else {
                _.ele.scrollLeft = scrollTarget
                callback && callback.call(_)
            }
        }

        _window.requestAnimationFrame(animate)
    }

    gliderPrototype.removeItem = function (index) {
        var _ = this

        if (_.slides.length) {
            _.track.removeChild(_.slides[index])
            _.refresh(true)
            _.emit('remove')
        }
    }

    gliderPrototype.addItem = function (ele) {
        var _ = this

        _.track.appendChild(ele)
        _.refresh(true)
        _.emit('add')
    }

    gliderPrototype.handleMouse = function (e) {
        var _ = this
        if (_.mouseDown) {
            _.isDrag = true
            _.ele.scrollLeft +=
                (_.mouseDown - e.clientX) * (_.opt.dragVelocity || 3.3)
            _.mouseDown = e.clientX
        }
    }

    // used to round to the nearest 0.XX fraction
    gliderPrototype.round = function (double) {
        var _ = this
        var step = _.opt.slidesToScroll % 1 || 1
        var inv = 1.0 / step
        return Math.round(double * inv) / inv
    }

    gliderPrototype.refresh = function (paging) {
        var _ = this
        _.init(true, paging)
    }

    gliderPrototype.setOption = function (opt, global) {
        var _ = this

        if (_.breakpoint && !global) {
            _._opt.responsive.forEach(function (v) {
                if (v.breakpoint === _.breakpoint) {
                    v.settings = Object.assign({}, v.settings, opt)
                }
            })
        } else {
            _._opt = Object.assign({}, _._opt, opt)
        }

        _.breakpoint = 0
        _.settingsBreakpoint()
    }

    gliderPrototype.destroy = function () {
        var _ = this

        var replace = _.ele.cloneNode(true)

        var clear = function (ele) {
            ele.removeAttribute('style');
            [].forEach.call(ele.classList, function (className) {
                /^glider/.test(className) && ele.classList.remove(className)
            })
        }
        // remove track
        replace.children[0].outerHTML = replace.children[0].innerHTML
        clear(replace);
        [].forEach.call(replace.getElementsByTagName('*'), clear)
        _.ele.parentNode.replaceChild(replace, _.ele)
        _.event(_window, 'remove', {
            resize: _.resize
        })
        _.emit('destroy')
    }

    gliderPrototype.emit = function (name, arg) {
        var _ = this

        var e = new _window.CustomEvent('glider-' + name, {
            bubbles: !_.opt.eventPropagate,
            detail: arg
        })
        _.ele.dispatchEvent(e)
    }

    gliderPrototype.event = function (ele, type, args) {
        var eventHandler = ele[type + 'EventListener'].bind(ele)
        Object.keys(args).forEach(function (k) {
            eventHandler(k, args[k])
        })
    }

    return Glider
})



let galleryData = [

    {
        "title": "Exterior",
        "images" : [
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
        ]
    },
    {
        "title": "Interiors",
        "images" : [
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
        ]
    },
    {
        "title": "Neighbourhood",
        "images" : [
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
        ]
    },
    {
        "title": "Neighbourhood2",
        "images" : [
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
            {
                "title": "img/default-icon.svg",
                "imageUrl": "Advantage 1",
            },
        ]
    },
];



// insert menu items using galleryData data
function insertMenuData(galleryData) {
    if (!Array.isArray(galleryData) || galleryData.length === 0) {
        console.log('error')
        return false;
    }

    // at the start we have 1 menu item
    // we will clone it
    // to make necessary menu items
    let menuItem = document.getElementsByClassName('elem-menu')[0];
    menuItem.textContent = galleryData[0]['title'];

    galleryData.forEach((el, index) => {
        // if first, use base menu item, else clone and create new
        let newMenuItem;
        if (index === 0) {
            newMenuItem = menuItem;
            updateMainData(el)
        } else {
            newMenuItem = menuItem.cloneNode(true);
            // set active false
            newMenuItem.classList.remove('active')
        }
        newMenuItem.dataset.index = index;
        // set text
        newMenuItem.textContent = el['title'];

        menuItem.after(newMenuItem);

        menuItem = newMenuItem;
    })
}

function updateMainData(data) {
    // let elemTitle = document.getElementById('elem-title');
    // elemTitle.textContent = data['title'];
    // let elemText = document.getElementById('elem-text');
    // elemText.textContent = data['description']
    // let elemImg = document.getElementById('elem-img')
    // elemImg.setAttribute('src', data['imageUrl'])
}


function switchTab(newTab) {
    let activeTab = document.querySelector('.elem-menu.active')
    activeTab.classList.remove('active')
    updateMainData(galleryData[newTab.dataset.index])
    newTab.classList.add('active')

}

window.addEventListener("load", function (event) {
    //initAboutUs();
    insertMenuData(galleryData);
    addUbuntuFont();
});

function addUbuntuFont() {
    document.head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;500&display=swap" rel="stylesheet">';
}

function initAboutUs() {
    document.head.innerHTML += '<style>' +
        '.font-ubuntu{font-family:Ubuntu,sans-serif}#page-insert-elem-27636.rtl{text-align:right;direction:rtl}#page-insert-elem-27636.rtl .content .main-content .section-inner .menu{flex-direction:column-reverse}#page-insert-elem-27636.rtl .content .main-content .content-el{padding-right:16px;padding-left:0}#page-insert-elem-27636.rtl .header{flex-direction:row-reverse}#page-insert-elem-27636{/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */font-family:Ubuntu,sans-serif}#page-insert-elem-27636 html{line-height:1.15;-webkit-text-size-adjust:100%}#page-insert-elem-27636 body{margin:0}#page-insert-elem-27636 main{display:block}#page-insert-elem-27636 h1{font-size:2em;margin:.67em 0}#page-insert-elem-27636 hr{box-sizing:content-box;height:0;overflow:visible}#page-insert-elem-27636 pre{font-family:monospace,monospace;font-size:1em}#page-insert-elem-27636 a{background-color:transparent}#page-insert-elem-27636 abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}#page-insert-elem-27636 b,#page-insert-elem-27636 strong{font-weight:bolder}#page-insert-elem-27636 code,#page-insert-elem-27636 kbd,#page-insert-elem-27636 samp{font-family:monospace,monospace;font-size:1em}#page-insert-elem-27636 small{font-size:80%}#page-insert-elem-27636 sub,#page-insert-elem-27636 sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}#page-insert-elem-27636 sub{bottom:-.25em}#page-insert-elem-27636 sup{top:-.5em}#page-insert-elem-27636 img{border-style:none}#page-insert-elem-27636 button,#page-insert-elem-27636 input,#page-insert-elem-27636 optgroup,#page-insert-elem-27636 select,#page-insert-elem-27636 textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}#page-insert-elem-27636 button,#page-insert-elem-27636 input{overflow:visible}#page-insert-elem-27636 button,#page-insert-elem-27636 select{text-transform:none}#page-insert-elem-27636 [type=button],#page-insert-elem-27636 [type=reset],#page-insert-elem-27636 [type=submit],#page-insert-elem-27636 button{-webkit-appearance:button}#page-insert-elem-27636 [type=button]::-moz-focus-inner,#page-insert-elem-27636 [type=reset]::-moz-focus-inner,#page-insert-elem-27636 [type=submit]::-moz-focus-inner,#page-insert-elem-27636 button::-moz-focus-inner{border-style:none;padding:0}#page-insert-elem-27636 [type=button]:-moz-focusring,#page-insert-elem-27636 [type=reset]:-moz-focusring,#page-insert-elem-27636 [type=submit]:-moz-focusring,#page-insert-elem-27636 button:-moz-focusring{outline:1px dotted ButtonText}#page-insert-elem-27636 fieldset{padding:.35em .75em .625em}#page-insert-elem-27636 legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}#page-insert-elem-27636 progress{vertical-align:baseline}#page-insert-elem-27636 textarea{overflow:auto}#page-insert-elem-27636 [type=checkbox],#page-insert-elem-27636 [type=radio]{box-sizing:border-box;padding:0}#page-insert-elem-27636 [type=number]::-webkit-inner-spin-button,#page-insert-elem-27636 [type=number]::-webkit-outer-spin-button{height:auto}#page-insert-elem-27636 [type=search]{-webkit-appearance:textfield;outline-offset:-2px}#page-insert-elem-27636 [type=search]::-webkit-search-decoration{-webkit-appearance:none}#page-insert-elem-27636 ::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}#page-insert-elem-27636 details{display:block}#page-insert-elem-27636 summary{display:list-item}#page-insert-elem-27636 template{display:none}#page-insert-elem-27636 [hidden]{display:none}#page-insert-elem-27636 .section-outer{padding-left:38px;padding-right:30px}#page-insert-elem-27636 .section-outer .section-inner{display:flex;width:100%;margin:0 auto}#page-insert-elem-27636 .section-outer .section-inner .menu{box-shadow:0 0 2px 0 rgba(0,0,0,.05);margin-top:36px;margin-bottom:21px}#page-insert-elem-27636 .section-outer .section-inner .menu .content-el{padding:0 16px}#page-insert-elem-27636 .section-outer .section-inner .menu .elem-menu{text-align:center;vertical-align:middle;justify-content:center;padding:14px 0;background-color:#fff;cursor:pointer;height:20px;margin-bottom:16px;font-size:16px;line-height:18px;font-weight:500;color:silver}#page-insert-elem-27636 .section-outer .section-inner .menu .active{border-bottom:2px solid #1a2f43;color:#1a2f43;transition:.5s}#page-insert-elem-27636 .section-outer .section-inner .content-el{padding:0 16px;margin-top:29px}#page-insert-elem-27636 .section-outer .section-inner .content-el .text{width:300px;font-size:18px;line-height:21px;font-weight:500;color:#1a2f43}#page-insert-elem-27636 .section-outer .section-inner .content-el .subheader{font-size:14px;font-weight:300;color:#1a2f43;margin-bottom:24px}#page-insert-elem-27636 .section-outer .section-inner .content-el.active{display:block}@media only screen and (max-width:575px){#page-insert-elem-27636 .section-outer{padding:0 16px}#page-insert-elem-27636 .section-outer .section-inner{flex-direction:column}#page-insert-elem-27636 .section-outer .section-inner .menu{display:flex;align-items:center;margin-top:10px;margin-bottom:0}#page-insert-elem-27636 .section-outer .section-inner .menu .elem-menu{display:inline-block;width:114px;margin:0 auto}#page-insert-elem-27636 .section-outer .section-inner .content-el{margin-top:12px}#page-insert-elem-27636 .header .title{width:100%;height:22px}#page-insert-elem-27636 .main-content img{width:100%}#page-insert-elem-27636 .main-content .text{width:100%}#page-insert-elem-27636 .main-content .subheader{width:100%}}@media only screen and (min-width:576px){#page-insert-elem-27636 .main-content{display:flex;margin:0 auto}#page-insert-elem-27636 .main-content .section-inner .menu .elem-menu{width:114px}#page-insert-elem-27636 .main-content .section-inner .content-el{width:100%}#page-insert-elem-27636 .main-content .section-inner .content-el img{width:100%}#page-insert-elem-27636 .main-content .section-inner .content-el .subheader{width:100%;display:flex;margin-bottom:24px}#page-insert-elem-27636 .main-content .section-inner .content-el .text{width:100%;height:21px}}' +
        '</style>';
}

