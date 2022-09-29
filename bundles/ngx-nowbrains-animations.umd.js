(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('ngx-nowbrains-animations', ['exports', '@angular/core', '@angular/animations'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ngx-nowbrains-animations"] = {}, global.ng.core, global.ng.animations));
})(this, (function (exports, i0, animations) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var AnimationsService = /** @class */ (function () {
        function AnimationsService() {
            this.status = true;
        }
        AnimationsService.prototype.FadeSlideInOut = function (ttx, offset_percent, value, instant) {
            if (value === void 0) { value = true; }
            if (instant === void 0) { instant = false; }
            var status = value ? ':enter' : ':leave';
            if (status === ':leave') {
                return {
                    value: status,
                    params: {
                        ttx: 0,
                        percent_start: 0,
                        percent_start_1: 0,
                        percent_start_2: 0
                    }
                };
            }
            else
                return {
                    value: status,
                    params: {
                        ttx: ttx,
                        percent_start: offset_percent,
                        percent_start_1: offset_percent - (offset_percent * 0.3),
                        percent_start_2: offset_percent - (offset_percent * 0.6)
                    }
                };
        };
        AnimationsService.prototype.FadeSlideInOutKonverso = function (ttx, offset_percent, value, instant) {
            if (value === void 0) { value = true; }
            if (instant === void 0) { instant = false; }
            var status = value ? ':enter' : ':leave';
            if (status === ':leave') {
                return {
                    value: status,
                    params: {
                        ttx: 0,
                        percent_start: 0,
                        percent_start_1: 0,
                        percent_start_2: 0
                    }
                };
            }
            else
                return {
                    value: status,
                    params: {
                        ttx: ttx,
                        percent_start: offset_percent,
                        percent_start_1: offset_percent - (offset_percent * 0.3),
                        percent_start_2: offset_percent - (offset_percent * 0.6)
                    }
                };
        };
        AnimationsService.prototype.FadeSlideInOutCasesFeedHome = function (ttx, offset_percent, value, instant) {
            if (value === void 0) { value = true; }
            if (instant === void 0) { instant = false; }
            var status = value ? ':enter' : ':leave';
            if (status === ':leave') {
                return {
                    value: status,
                    params: {
                        ttx: ttx,
                        percent_start: 0,
                        percent_start_1: 0,
                        percent_start_2: 0
                    }
                };
            }
            else
                return {
                    value: status,
                    params: {
                        ttx: ttx,
                        percent_start: offset_percent,
                        percent_start_1: offset_percent - (offset_percent * 0.3),
                        percent_start_2: offset_percent - (offset_percent * 0.6)
                    }
                };
        };
        AnimationsService.prototype.FadeSlideInOutStagger = function (ttx, offset_percent, value, stagger) {
            if (value === void 0) { value = true; }
            if (stagger === void 0) { stagger = 10; }
            var status = value ? ':enter' : ':leave';
            if (status === ':leave') {
                return {
                    value: status,
                    params: {
                        ttx: ttx / 2,
                        percent_start: offset_percent - (offset_percent * 0.6),
                        percent_start_1: offset_percent - (offset_percent * 0.3),
                        percent_start_2: offset_percent,
                        stagger: 10
                    }
                };
            }
            else
                return {
                    value: status,
                    params: {
                        ttx: ttx,
                        percent_start: offset_percent,
                        percent_start_1: offset_percent - (offset_percent * 0.3),
                        percent_start_2: offset_percent - (offset_percent * 0.6),
                        stagger: stagger
                    }
                };
        };
        return AnimationsService;
    }());
    AnimationsService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function AnimationsService_Factory() { return new AnimationsService(); }, token: AnimationsService, providedIn: "root" });
    AnimationsService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    AnimationsService.ctorParameters = function () { return []; };

    /***********************************************************
     **  @project
     **  @file
     **  @author Brice Daupiard <brice.daupiard@nowbrains.com>
     **  @Date 09/08/2022
     **  @Description
     ***********************************************************/
    var FadeInOut = animations.trigger('fadeInOut', [
        animations.state('loaded', animations.style({
            opacity: 0,
            'z-index': -1
        })),
        animations.state('loading', animations.style({
            opacity: 1,
        })),
        animations.transition('* => *', animations.animate('500ms ease-out')),
    ]);

    /***********************************************************
     **  @project
     **  @file
     **  @author Brice Daupiard <brice.daupiard@nowbrains.com>
     **  @Date 09/08/2022
     **  @Description
     ***********************************************************/
    var ANIMATION_TYPE_CUBIC_BEZIER$1 = 'cubic-bezier(0.39, 0.58, 0.57, 1)';
    var FadeSlideInOut = animations.trigger('fadeSlideInOut', [
        animations.transition(':enter', [
            animations.style({ opacity: 0, transform: 'translateY({{percent_start}}%)' }),
            animations.animate("{{ttx}}ms " + ANIMATION_TYPE_CUBIC_BEZIER$1, animations.keyframes([
                animations.style({ opacity: 0.5, transform: 'translateY({{percent_start}}%)', offset: 0.2 }),
                animations.style({ opacity: 1, transform: 'translateY({{percent_start_1}}%)', offset: 0.5 }),
                animations.style({ transform: 'translateY({{percent_start_2}}%)', offset: 0.8 }),
                animations.style({ transform: 'translateY(0%)', offset: 1 })
            ]))
        ]),
        animations.transition(':leave', [
            animations.style({ height: '100%' }),
            animations.animate('100ms ease-in-out', animations.keyframes([
                animations.style({ transform: 'translateY({{percent_start}}%)', offset: 0.2 }),
                animations.style({ opacity: 0.5, transform: 'translateY({{percent_start_1}}%)', offset: 0.6 }),
                animations.style({ opacity: 0.2, transform: 'translateY({{percent_start_2}}%)', offset: 0.8 }),
                animations.style({ opacity: 0, transform: 'translateY(0%)', offset: 1 })
            ]))
        ])
    ]);
    var FadeSlideInOutKonversoOpacityOut = animations.trigger('FadeSlideInOutKonversoOpacityOut', [
        animations.transition(':enter', [
            animations.style({ opacity: 0, transform: 'translateY({{percent_start}}%)' }),
            animations.animate("{{ttx}}ms " + ANIMATION_TYPE_CUBIC_BEZIER$1, animations.keyframes([
                animations.style({ opacity: 0.5, transform: 'translateY({{percent_start}}%)', offset: 0.2 }),
                animations.style({ opacity: 1, transform: 'translateY({{percent_start_1}}%)', offset: 0.5 }),
                animations.style({ transform: 'translateY({{percent_start_2}}%)', offset: 0.8 }),
                animations.style({ transform: 'translateY(0%)', offset: 1 })
            ]))
        ]),
        animations.transition(':leave', [
            animations.style({ opacity: 1 }),
            animations.animate("{{ttx}}ms " + ANIMATION_TYPE_CUBIC_BEZIER$1, animations.style({ opacity: 0 }))
        ])
    ]);
    var FadeSlideInOutKonversoTranslateOut = animations.trigger('FadeSlideInOutKonversoTranslateOut', [
        animations.transition(':enter', [
            animations.style({ opacity: 0, top: '{{percent_start}}%' }),
            animations.animate("{{ttx}}ms " + ANIMATION_TYPE_CUBIC_BEZIER$1, animations.style({ opacity: 1, top: '0%' }))
        ]),
        animations.transition(':leave', [
            animations.style({ opacity: 1 }),
            animations.animate('100ms ease-in-out', animations.style({ opacity: 0 }))
        ])
    ]);
    var FadeSlideInOutCasesFeedHome = animations.trigger('FadeSlideInOutCasesFeedHome', [
        animations.transition(':enter', [
            animations.style({ opacity: 0, transform: 'translateY({{percent_start}}%)' }),
            animations.animate("{{ttx}}ms " + ANIMATION_TYPE_CUBIC_BEZIER$1, animations.keyframes([
                animations.style({ opacity: 0.5, transform: 'translateY({{percent_start}}%)', offset: 0.2 }),
                animations.style({ opacity: 1, transform: 'translateY({{percent_start_1}}%)', offset: 0.5 }),
                animations.style({ transform: 'translateY({{percent_start_2}}%)', offset: 0.75 }),
                animations.style({ transform: 'translateY(0%)', offset: 1 })
            ]))
        ]),
        animations.transition(':leave', [
            animations.animate('500ms ease', animations.keyframes([
                animations.style({ opacity: 0 }),
            ]))
        ])
    ]);
    var FadeSlideInOutStagger = animations.trigger('fadeSlideInOutStagger', [
        animations.transition(':enter', [
            animations.style({ opacity: 0, transform: 'translateY({{percent_start}}%)' }),
            animations.animate("{{ttx}}ms " + ANIMATION_TYPE_CUBIC_BEZIER$1, animations.keyframes([
                animations.style({ opacity: 0.2, transform: 'translateY({{percent_start}}%)', offset: 0.2 }),
                animations.style({ opacity: 0.5, transform: 'translateY({{percent_start_1}}%)', offset: 0.5 }),
                animations.style({ opacity: 1, transform: 'translateY({{percent_start_2}}%)', offset: 0.8 }),
                animations.style({ transform: 'translateY(0%)', offset: 1 })
            ]))
        ]),
        animations.transition(':leave', [
            animations.style({ height: '100%' }),
            animations.animate('100ms 100ms ease-in-out', animations.keyframes([
                animations.style({ transform: 'translateY({{percent_start}}%)', offset: 0.2 }),
                animations.style({ opacity: 0.5, transform: 'translateY({{percent_start_1}}%)', offset: 0.6 }),
                animations.style({ opacity: 0.2, transform: 'translateY({{percent_start_2}}%)', offset: 0.8 }),
                animations.style({ opacity: 0, transform: 'translateY(0%)', offset: 1 })
            ]))
        ])
    ]);

    /***********************************************************
     **  @project
     **  @file
     **  @author Brice Daupiard <brice.daupiard@nowbrains.com>
     **  @Date 05/08/2022
     **  @Description
     ***********************************************************/
    var ANIMATION_TYPE_CUBIC_BEZIER = 'cubic-bezier(0.20, 0.4, 0, 1)';
    var ANIMAION_DURATION = 750;
    var TRANSLATE_X = 105;
    var SlideRightAndLeft = [
        animations.trigger('SlideRightAndLeft', [
            animations.transition(':increment', animations.group([
                animations.query(':enter', [
                    animations.style({ transform: "translateX(" + TRANSLATE_X + "%)" }),
                    animations.animate(ANIMAION_DURATION + "ms " + ANIMATION_TYPE_CUBIC_BEZIER, animations.style({ transform: 'translateX(0%)' }))
                ]),
                animations.query(':leave', [
                    animations.animate(ANIMAION_DURATION + "ms " + ANIMATION_TYPE_CUBIC_BEZIER, animations.style({ transform: "translateX(-" + TRANSLATE_X + "%)" }))
                ], { optional: true })
            ])),
            animations.transition(':decrement', animations.group([
                animations.query(':enter', [
                    animations.style({ transform: "translateX(-" + TRANSLATE_X + "%)", opacity: 1 }),
                    animations.animate(ANIMAION_DURATION + "ms " + ANIMATION_TYPE_CUBIC_BEZIER, animations.style({ transform: 'translateX(0%)' }))
                ]),
                animations.query(':leave', [
                    animations.animate(ANIMAION_DURATION + "ms " + ANIMATION_TYPE_CUBIC_BEZIER, animations.style({ transform: "translateX(" + TRANSLATE_X + "%)" }))
                ], { optional: true })
            ])),
        ])
    ];

    /***********************************************************
     **  @project
     **  @file
     **  @author Brice Daupiard <brice.daupiard@nowbrains.com>
     **  @Date 05/08/2022
     **  @Description
     ***********************************************************/
    var slideInOut = animations.trigger('slideInOut', [
        animations.transition(':enter', [
            animations.style({ transform: 'translateX(-100%)' }),
            animations.animate('200ms ease-out', animations.style({ transform: 'translateX(0%)' }))
        ]),
        animations.transition(':leave', [
            animations.animate('200ms ease-in', animations.style({ transform: 'translateX(-100%)' }))
        ])
    ]);

    /***********************************************************
     **  @project
     **  @file
     **  @author Brice Daupiard <brice.daupiard@nowbrains.com>
     **  @Date 11/08/2022
     **  @Description
     ***********************************************************/
    //transform: rotateY(180deg);
    var FlipX = [
        animations.trigger('flipX', [
            animations.transition(':enter', [
                animations.style({ position: 'absolute', transform: 'rotateX(90deg)', opacity: 1 }),
                animations.animate('200ms', animations.keyframes([
                    animations.style({ transform: 'rotateX(90deg)', opacity: 1, offset: 0 }),
                    animations.style({ transform: 'rotateX(40deg)', opacity: 0.4, offset: 0.5 }),
                    animations.style({ transform: 'rotateX(10deg)', opacity: 0.2, offset: 0.7 }),
                    animations.style({ transform: 'rotateX(0deg)', opacity: 0, offset: 1 })
                ]))
            ]),
            animations.transition(':leave', [
                animations.style({ position: 'absolute', transform: 'rotateX0deg)', opacity: 1, height: "0px" }),
                animations.animate('100ms', animations.keyframes([
                    animations.style({ transform: 'rotateX(0deg)', opacity: 0, offset: 0 }),
                    animations.style({ transform: 'rotateX(-10deg)', opacity: 0.6, offset: 0.5 }),
                    animations.style({ transform: 'rotateX(-40deg)', opacity: 0.8, offset: 0.7 }),
                    animations.style({ transform: 'rotateX(-90deg)', opacity: 1, offset: 1 })
                ]))
            ])
        ])
    ];

    /***********************************************************
     **  @project
     **  @file
     **  @author Brice Daupiard <brice.daupiard@nowbrains.com>
     **  @Date 11/08/2022
     **  @Description
     ***********************************************************/

    /*
     * Public API Surface of ngx-nowbrains-animations
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AnimationsService = AnimationsService;
    exports.FadeInOut = FadeInOut;
    exports.FadeSlideInOut = FadeSlideInOut;
    exports.FadeSlideInOutCasesFeedHome = FadeSlideInOutCasesFeedHome;
    exports.FadeSlideInOutKonversoOpacityOut = FadeSlideInOutKonversoOpacityOut;
    exports.FadeSlideInOutKonversoTranslateOut = FadeSlideInOutKonversoTranslateOut;
    exports.FadeSlideInOutStagger = FadeSlideInOutStagger;
    exports.FlipX = FlipX;
    exports.SlideRightAndLeft = SlideRightAndLeft;
    exports.slideInOut = slideInOut;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-nowbrains-animations.umd.js.map
