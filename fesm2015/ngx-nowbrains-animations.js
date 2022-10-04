import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group, query } from '@angular/animations';

class AnimationsService {
    constructor() {
        this.status = true;
    }
    FadeSlideInOut(ttx, offset_percent, value = true, instant = false) {
        const status = value ? ':enter' : ':leave';
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
                    ttx,
                    percent_start: offset_percent,
                    percent_start_1: offset_percent - (offset_percent * 0.3),
                    percent_start_2: offset_percent - (offset_percent * 0.6)
                }
            };
    }
    FadeSlideInOutKonverso(ttx, offset_percent, value = true, instant = false) {
        const status = value ? ':enter' : ':leave';
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
                    ttx,
                    percent_start: offset_percent,
                    percent_start_1: offset_percent - (offset_percent * 0.3),
                    percent_start_2: offset_percent - (offset_percent * 0.6)
                }
            };
    }
    FadeSlideInOutCasesFeedHome(ttx, offset_percent, value = true, instant = false) {
        const status = value ? ':enter' : ':leave';
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
                    ttx,
                    percent_start: offset_percent,
                    percent_start_1: offset_percent - (offset_percent * 0.3),
                    percent_start_2: offset_percent - (offset_percent * 0.6)
                }
            };
    }
    FadeSlideInOutStagger(ttx, offset_percent, value = true, stagger = 10) {
        const status = value ? ':enter' : ':leave';
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
                    ttx,
                    percent_start: offset_percent,
                    percent_start_1: offset_percent - (offset_percent * 0.3),
                    percent_start_2: offset_percent - (offset_percent * 0.6),
                    stagger
                }
            };
    }
}
AnimationsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AnimationsService_Factory() { return new AnimationsService(); }, token: AnimationsService, providedIn: "root" });
AnimationsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
AnimationsService.ctorParameters = () => [];

/***********************************************************
 **  @project
 **  @file
 **  @author Brice Daupiard <brice.daupiard@nowbrains.com>
 **  @Date 09/08/2022
 **  @Description
 ***********************************************************/
const FadeInOut = trigger('fadeInOut', [
    state('loaded', style({
        opacity: 0,
        'z-index': -1
    })),
    state('loading', style({
        opacity: 1,
    })),
    transition('* => *', animate('500ms ease-out')),
]);

/***********************************************************
 **  @project
 **  @file
 **  @author Brice Daupiard <brice.daupiard@nowbrains.com>
 **  @Date 09/08/2022
 **  @Description
 ***********************************************************/
const ANIMATION_TYPE_CUBIC_BEZIER$2 = 'cubic-bezier(0.39, 0.58, 0.57, 1)';
const FadeSlideInOut = trigger('fadeSlideInOut', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY({{percent_start}}%)' }),
        animate(`{{ttx}}ms ${ANIMATION_TYPE_CUBIC_BEZIER$2}`, keyframes([
            style({ opacity: 0.5, transform: 'translateY({{percent_start}}%)', offset: 0.2 }),
            style({ opacity: 1, transform: 'translateY({{percent_start_1}}%)', offset: 0.5 }),
            style({ transform: 'translateY({{percent_start_2}}%)', offset: 0.8 }),
            style({ transform: 'translateY(0%)', offset: 1 })
        ]))
    ]),
    transition(':leave', [
        style({ height: '100%' }),
        animate('100ms ease-in-out', keyframes([
            style({ transform: 'translateY({{percent_start}}%)', offset: 0.2 }),
            style({ opacity: 0.5, transform: 'translateY({{percent_start_1}}%)', offset: 0.6 }),
            style({ opacity: 0.2, transform: 'translateY({{percent_start_2}}%)', offset: 0.8 }),
            style({ opacity: 0, transform: 'translateY(0%)', offset: 1 })
        ]))
    ])
]);
const FadeSlideInOutCasesFeedHome = trigger('FadeSlideInOutCasesFeedHome', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY({{percent_start}}%)' }),
        animate(`{{ttx}}ms ${ANIMATION_TYPE_CUBIC_BEZIER$2}`, keyframes([
            style({ opacity: 0.5, transform: 'translateY({{percent_start}}%)', offset: 0.2 }),
            style({ opacity: 1, transform: 'translateY({{percent_start_1}}%)', offset: 0.5 }),
            style({ transform: 'translateY({{percent_start_2}}%)', offset: 0.75 }),
            style({ transform: 'translateY(0%)', offset: 1 })
        ]))
    ]),
    transition(':leave', [
        animate('500ms ease', keyframes([
            style({ opacity: 0 }),
        ]))
    ])
]);
const FadeSlideInOutStagger = trigger('fadeSlideInOutStagger', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY({{percent_start}}%)' }),
        animate(`{{ttx}}ms ${ANIMATION_TYPE_CUBIC_BEZIER$2}`, keyframes([
            style({ opacity: 0.2, transform: 'translateY({{percent_start}}%)', offset: 0.2 }),
            style({ opacity: 0.5, transform: 'translateY({{percent_start_1}}%)', offset: 0.5 }),
            style({ opacity: 1, transform: 'translateY({{percent_start_2}}%)', offset: 0.8 }),
            style({ transform: 'translateY(0%)', offset: 1 })
        ]))
    ]),
    transition(':leave', [
        style({ height: '100%' }),
        animate('100ms 100ms ease-in-out', keyframes([
            style({ transform: 'translateY({{percent_start}}%)', offset: 0.2 }),
            style({ opacity: 0.5, transform: 'translateY({{percent_start_1}}%)', offset: 0.6 }),
            style({ opacity: 0.2, transform: 'translateY({{percent_start_2}}%)', offset: 0.8 }),
            style({ opacity: 0, transform: 'translateY(0%)', offset: 1 })
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
const ANIMATION_TYPE_CUBIC_BEZIER$1 = 'cubic-bezier(0.20, 0.4, 0, 1)';
const ANIMAION_DURATION = 750;
const TRANSLATE_X = 105;
const SlideRightAndLeft = [
    trigger('SlideRightAndLeft', [
        transition(':increment', group([
            query(':enter', [
                style({ transform: `translateX(${TRANSLATE_X}%)` }),
                animate(`${ANIMAION_DURATION}ms ${ANIMATION_TYPE_CUBIC_BEZIER$1}`, style({ transform: 'translateX(0%)' }))
            ]),
            query(':leave', [
                animate(`${ANIMAION_DURATION}ms ${ANIMATION_TYPE_CUBIC_BEZIER$1}`, style({ transform: `translateX(-${TRANSLATE_X}%)` }))
            ], { optional: true })
        ])),
        transition(':decrement', group([
            query(':enter', [
                style({ transform: `translateX(-${TRANSLATE_X}%)`, opacity: 1 }),
                animate(`${ANIMAION_DURATION}ms ${ANIMATION_TYPE_CUBIC_BEZIER$1}`, style({ transform: 'translateX(0%)' }))
            ]),
            query(':leave', [
                animate(`${ANIMAION_DURATION}ms ${ANIMATION_TYPE_CUBIC_BEZIER$1}`, style({ transform: `translateX(${TRANSLATE_X}%)` }))
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
const slideInOut = trigger('slideInOut', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-out', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(-100%)' }))
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
const FlipX = [
    trigger('flipX', [
        transition(':enter', [
            style({ position: 'absolute', transform: 'rotateX(90deg)', opacity: 1 }),
            animate('200ms', keyframes([
                style({ transform: 'rotateX(90deg)', opacity: 1, offset: 0 }),
                style({ transform: 'rotateX(40deg)', opacity: 0.4, offset: 0.5 }),
                style({ transform: 'rotateX(10deg)', opacity: 0.2, offset: 0.7 }),
                style({ transform: 'rotateX(0deg)', opacity: 0, offset: 1 })
            ]))
        ]),
        transition(':leave', [
            style({ position: 'absolute', transform: 'rotateX0deg)', opacity: 1, height: "0px" }),
            animate('100ms', keyframes([
                style({ transform: 'rotateX(0deg)', opacity: 0, offset: 0 }),
                style({ transform: 'rotateX(-10deg)', opacity: 0.6, offset: 0.5 }),
                style({ transform: 'rotateX(-40deg)', opacity: 0.8, offset: 0.7 }),
                style({ transform: 'rotateX(-90deg)', opacity: 1, offset: 1 })
            ]))
        ])
    ])
];

/***********************************************************
 **  @project
 **  @file
 **  @author Brice Daupiard <brice.daupiard@nowbrains.com>
 **  @Date 09/08/2022
 **  @Description
 ***********************************************************/
const ANIMATION_TYPE_CUBIC_BEZIER = 'cubic-bezier(0.39, 0.58, 0.57, 1)';
const FadeSlideInOutKonversoOpacityOut = trigger('FadeSlideInOutKonversoOpacityOut', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY({{percent_start}}%)' }),
        animate(`{{ttx}}ms ${ANIMATION_TYPE_CUBIC_BEZIER}`, keyframes([
            style({ opacity: 0.5, transform: 'translateY({{percent_start}}%)', offset: 0.2 }),
            style({ opacity: 1, transform: 'translateY({{percent_start_1}}%)', offset: 0.5 }),
            style({ transform: 'translateY({{percent_start_2}}%)', offset: 0.8 }),
            style({ transform: 'translateY(0%)', offset: 1 })
        ]))
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate(`{{ttx}}ms ${ANIMATION_TYPE_CUBIC_BEZIER}`, style({ opacity: 0 }))
    ])
]);
const FadeSlideInOutKonversoTranslateOut = trigger('FadeSlideInOutKonversoTranslateOut', [
    transition(':enter', [
        style({ opacity: 0, top: '{{percent_start}}%' }),
        animate(`{{ttx}}ms ${ANIMATION_TYPE_CUBIC_BEZIER}`, style({ opacity: 1, top: '0%' }))
    ]),
    transition(':leave', [
        style({ opacity: 1 }),
        animate('100ms ease-in-out', style({ opacity: 0 }))
    ])
]);
const FadeSlideInOutKonversoHeight = trigger('FadeSlideInOutKonversoHeight', [
    transition(':enter', [
        style({ height: 0 }),
        animate(`{{ttx}}ms ${ANIMATION_TYPE_CUBIC_BEZIER}`, style({ height: '*' }))
    ])
]);

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

export { AnimationsService, FadeInOut, FadeSlideInOut, FadeSlideInOutCasesFeedHome, FadeSlideInOutKonversoHeight, FadeSlideInOutKonversoOpacityOut, FadeSlideInOutKonversoTranslateOut, FadeSlideInOutStagger, FlipX, SlideRightAndLeft, slideInOut };
//# sourceMappingURL=ngx-nowbrains-animations.js.map
