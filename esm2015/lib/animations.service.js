import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AnimationsService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW5vd2JyYWlucy1hbmltYXRpb25zL3NyYy9saWIvYW5pbWF0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS3pDLE1BQU0sT0FBTyxpQkFBaUI7SUFHNUI7UUFEUSxXQUFNLEdBQUcsSUFBSSxDQUFDO0lBRXRCLENBQUM7SUFHRCxjQUFjLENBQUMsR0FBVyxFQUFFLGNBQXNCLEVBQUUsUUFBaUIsSUFBSSxFQUFFLFVBQW1CLEtBQUs7UUFFakcsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtRQUMxQyxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDdkIsT0FBTztnQkFDTCxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sR0FBRyxFQUFFLENBQUM7b0JBQ04sYUFBYSxFQUFFLENBQUM7b0JBQ2hCLGVBQWUsRUFBRSxDQUFDO29CQUNsQixlQUFlLEVBQUUsQ0FBQztpQkFDbkI7YUFDRixDQUFBO1NBQ0Y7O1lBQU0sT0FBTztnQkFDWixLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sR0FBRztvQkFDSCxhQUFhLEVBQUUsY0FBYztvQkFDN0IsZUFBZSxFQUFFLGNBQWMsR0FBRyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7b0JBQ3hELGVBQWUsRUFBRSxjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO2lCQUN6RDthQUNGLENBQUE7SUFHSCxDQUFDO0lBRUQsc0JBQXNCLENBQUMsR0FBVyxFQUFFLGNBQXNCLEVBQUUsUUFBaUIsSUFBSSxFQUFFLFVBQW1CLEtBQUs7UUFFekcsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtRQUMxQyxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDdkIsT0FBTztnQkFDTCxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sR0FBRyxFQUFFLENBQUM7b0JBQ04sYUFBYSxFQUFFLENBQUM7b0JBQ2hCLGVBQWUsRUFBRSxDQUFDO29CQUNsQixlQUFlLEVBQUUsQ0FBQztpQkFDbkI7YUFDRixDQUFBO1NBQ0Y7O1lBQU0sT0FBTztnQkFDWixLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sR0FBRztvQkFDSCxhQUFhLEVBQUUsY0FBYztvQkFDN0IsZUFBZSxFQUFFLGNBQWMsR0FBRyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7b0JBQ3hELGVBQWUsRUFBRSxjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO2lCQUN6RDthQUNGLENBQUE7SUFFSCxDQUFDO0lBRUQsMkJBQTJCLENBQUMsR0FBVyxFQUFFLGNBQXNCLEVBQUUsUUFBaUIsSUFBSSxFQUFFLFVBQW1CLEtBQUs7UUFFOUcsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtRQUMxQyxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDdkIsT0FBTztnQkFDTCxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sR0FBRyxFQUFFLEdBQUc7b0JBQ1IsYUFBYSxFQUFFLENBQUM7b0JBQ2hCLGVBQWUsRUFBRSxDQUFDO29CQUNsQixlQUFlLEVBQUUsQ0FBQztpQkFDbkI7YUFDRixDQUFBO1NBQ0Y7O1lBQU0sT0FBTztnQkFDWixLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sR0FBRztvQkFDSCxhQUFhLEVBQUUsY0FBYztvQkFDN0IsZUFBZSxFQUFFLGNBQWMsR0FBRyxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7b0JBQ3hELGVBQWUsRUFBRSxjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO2lCQUN6RDthQUNGLENBQUE7SUFFSCxDQUFDO0lBR0QscUJBQXFCLENBQUMsR0FBVyxFQUFFLGNBQXNCLEVBQUUsUUFBaUIsSUFBSSxFQUFFLFVBQWtCLEVBQUU7UUFDcEcsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtRQUMxQyxJQUFJLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFFdkIsT0FBTztnQkFDTCxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO29CQUNaLGFBQWEsRUFBRSxjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO29CQUN0RCxlQUFlLEVBQUUsY0FBYyxHQUFHLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztvQkFDeEQsZUFBZSxFQUFFLGNBQWM7b0JBQy9CLE9BQU8sRUFBRyxFQUFFO2lCQUNiO2FBQ0YsQ0FBQTtTQUNGOztZQUFNLE9BQU87Z0JBQ1osS0FBSyxFQUFFLE1BQU07Z0JBQ2IsTUFBTSxFQUFFO29CQUNOLEdBQUc7b0JBQ0gsYUFBYSxFQUFFLGNBQWM7b0JBQzdCLGVBQWUsRUFBRSxjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO29CQUN4RCxlQUFlLEVBQUUsY0FBYyxHQUFHLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztvQkFDeEQsT0FBTztpQkFDUjthQUNGLENBQUE7SUFDSCxDQUFDOzs7O1lBL0dGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25zU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgc3RhdHVzID0gdHJ1ZTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG5cclxuICBGYWRlU2xpZGVJbk91dCh0dHg6IG51bWJlciwgb2Zmc2V0X3BlcmNlbnQ6IG51bWJlciwgdmFsdWU6IGJvb2xlYW4gPSB0cnVlLCBpbnN0YW50OiBib29sZWFuID0gZmFsc2UpIHtcclxuXHJcbiAgICBjb25zdCBzdGF0dXMgPSB2YWx1ZSA/ICc6ZW50ZXInIDogJzpsZWF2ZSdcclxuICAgIGlmIChzdGF0dXMgPT09ICc6bGVhdmUnKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdmFsdWU6IHN0YXR1cyxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHR0eDogMCxcclxuICAgICAgICAgIHBlcmNlbnRfc3RhcnQ6IDAsXHJcbiAgICAgICAgICBwZXJjZW50X3N0YXJ0XzE6IDAsXHJcbiAgICAgICAgICBwZXJjZW50X3N0YXJ0XzI6IDBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogc3RhdHVzLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICB0dHgsXHJcbiAgICAgICAgcGVyY2VudF9zdGFydDogb2Zmc2V0X3BlcmNlbnQsXHJcbiAgICAgICAgcGVyY2VudF9zdGFydF8xOiBvZmZzZXRfcGVyY2VudCAtIChvZmZzZXRfcGVyY2VudCAqIDAuMyksXHJcbiAgICAgICAgcGVyY2VudF9zdGFydF8yOiBvZmZzZXRfcGVyY2VudCAtIChvZmZzZXRfcGVyY2VudCAqIDAuNilcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBGYWRlU2xpZGVJbk91dEtvbnZlcnNvKHR0eDogbnVtYmVyLCBvZmZzZXRfcGVyY2VudDogbnVtYmVyLCB2YWx1ZTogYm9vbGVhbiA9IHRydWUsIGluc3RhbnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuICAgIGNvbnN0IHN0YXR1cyA9IHZhbHVlID8gJzplbnRlcicgOiAnOmxlYXZlJ1xyXG4gICAgaWYgKHN0YXR1cyA9PT0gJzpsZWF2ZScpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB2YWx1ZTogc3RhdHVzLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdHR4OiAwLFxyXG4gICAgICAgICAgcGVyY2VudF9zdGFydDogMCxcclxuICAgICAgICAgIHBlcmNlbnRfc3RhcnRfMTogMCxcclxuICAgICAgICAgIHBlcmNlbnRfc3RhcnRfMjogMFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiBzdGF0dXMsXHJcbiAgICAgIHBhcmFtczoge1xyXG4gICAgICAgIHR0eCxcclxuICAgICAgICBwZXJjZW50X3N0YXJ0OiBvZmZzZXRfcGVyY2VudCxcclxuICAgICAgICBwZXJjZW50X3N0YXJ0XzE6IG9mZnNldF9wZXJjZW50IC0gKG9mZnNldF9wZXJjZW50ICogMC4zKSxcclxuICAgICAgICBwZXJjZW50X3N0YXJ0XzI6IG9mZnNldF9wZXJjZW50IC0gKG9mZnNldF9wZXJjZW50ICogMC42KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgRmFkZVNsaWRlSW5PdXRDYXNlc0ZlZWRIb21lKHR0eDogbnVtYmVyLCBvZmZzZXRfcGVyY2VudDogbnVtYmVyLCB2YWx1ZTogYm9vbGVhbiA9IHRydWUsIGluc3RhbnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG5cclxuICAgIGNvbnN0IHN0YXR1cyA9IHZhbHVlID8gJzplbnRlcicgOiAnOmxlYXZlJ1xyXG4gICAgaWYgKHN0YXR1cyA9PT0gJzpsZWF2ZScpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB2YWx1ZTogc3RhdHVzLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgdHR4OiB0dHgsXHJcbiAgICAgICAgICBwZXJjZW50X3N0YXJ0OiAwLFxyXG4gICAgICAgICAgcGVyY2VudF9zdGFydF8xOiAwLFxyXG4gICAgICAgICAgcGVyY2VudF9zdGFydF8yOiAwXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgcmV0dXJuIHtcclxuICAgICAgdmFsdWU6IHN0YXR1cyxcclxuICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgdHR4LFxyXG4gICAgICAgIHBlcmNlbnRfc3RhcnQ6IG9mZnNldF9wZXJjZW50LFxyXG4gICAgICAgIHBlcmNlbnRfc3RhcnRfMTogb2Zmc2V0X3BlcmNlbnQgLSAob2Zmc2V0X3BlcmNlbnQgKiAwLjMpLFxyXG4gICAgICAgIHBlcmNlbnRfc3RhcnRfMjogb2Zmc2V0X3BlcmNlbnQgLSAob2Zmc2V0X3BlcmNlbnQgKiAwLjYpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgRmFkZVNsaWRlSW5PdXRTdGFnZ2VyKHR0eDogbnVtYmVyLCBvZmZzZXRfcGVyY2VudDogbnVtYmVyLCB2YWx1ZTogYm9vbGVhbiA9IHRydWUsIHN0YWdnZXI6IG51bWJlciA9IDEwKSB7XHJcbiAgICBjb25zdCBzdGF0dXMgPSB2YWx1ZSA/ICc6ZW50ZXInIDogJzpsZWF2ZSdcclxuICAgIGlmIChzdGF0dXMgPT09ICc6bGVhdmUnKSB7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHZhbHVlOiBzdGF0dXMsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICB0dHg6IHR0eCAvIDIsXHJcbiAgICAgICAgICBwZXJjZW50X3N0YXJ0OiBvZmZzZXRfcGVyY2VudCAtIChvZmZzZXRfcGVyY2VudCAqIDAuNiksXHJcbiAgICAgICAgICBwZXJjZW50X3N0YXJ0XzE6IG9mZnNldF9wZXJjZW50IC0gKG9mZnNldF9wZXJjZW50ICogMC4zKSxcclxuICAgICAgICAgIHBlcmNlbnRfc3RhcnRfMjogb2Zmc2V0X3BlcmNlbnQsXHJcbiAgICAgICAgICBzdGFnZ2VyIDogMTBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSByZXR1cm4ge1xyXG4gICAgICB2YWx1ZTogc3RhdHVzLFxyXG4gICAgICBwYXJhbXM6IHtcclxuICAgICAgICB0dHgsXHJcbiAgICAgICAgcGVyY2VudF9zdGFydDogb2Zmc2V0X3BlcmNlbnQsXHJcbiAgICAgICAgcGVyY2VudF9zdGFydF8xOiBvZmZzZXRfcGVyY2VudCAtIChvZmZzZXRfcGVyY2VudCAqIDAuMyksXHJcbiAgICAgICAgcGVyY2VudF9zdGFydF8yOiBvZmZzZXRfcGVyY2VudCAtIChvZmZzZXRfcGVyY2VudCAqIDAuNiksXHJcbiAgICAgICAgc3RhZ2dlclxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=