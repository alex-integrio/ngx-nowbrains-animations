import { animate, keyframes, style, transition, trigger } from "@angular/animations";
/***********************************************************
 **  @project
 **  @file
 **  @author Brice Daupiard <brice.daupiard@nowbrains.com>
 **  @Date 11/08/2022
 **  @Description
 ***********************************************************/
//transform: rotateY(180deg);
export const FlipX = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxpcFguYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW5vd2JyYWlucy1hbmltYXRpb25zL3NyYy9saWIvY29yZS9hbmltYXRpb25zL0ZsaXBYLmFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsT0FBTyxFQUFTLFNBQVMsRUFBUyxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRWpHOzs7Ozs7NkRBTTZEO0FBQzdELDZCQUE2QjtBQUc3QixNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUc7SUFDbkIsT0FBTyxDQUFDLE9BQU8sRUFBRTtRQUNmLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDakIsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFHLFVBQVUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDO1lBQ3ZFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO2dCQUN6QixLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7Z0JBQzNELEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQztnQkFDL0QsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO2dCQUMvRCxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFDO2FBQzFELENBQUMsQ0FBQztTQUNKLENBQUM7UUFDSixVQUFVLENBQUMsUUFBUSxFQUFFO1lBQ25CLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRyxVQUFVLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQztZQUNwRixPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQztnQkFDekIsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztnQkFDMUQsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO2dCQUNoRSxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDLENBQUM7Z0JBQ2hFLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxPQUFPLEVBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQzthQUM1RCxDQUFDLENBQUM7U0FDSixDQUFDO0tBQ0gsQ0FBQztDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FuaW1hdGUsIGdyb3VwLCBrZXlmcmFtZXMsIHF1ZXJ5LCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogIEBwcm9qZWN0XHJcbiAqKiAgQGZpbGVcclxuICoqICBAYXV0aG9yIEJyaWNlIERhdXBpYXJkIDxicmljZS5kYXVwaWFyZEBub3dicmFpbnMuY29tPlxyXG4gKiogIEBEYXRlIDExLzA4LzIwMjJcclxuICoqICBARGVzY3JpcHRpb25cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4vL3RyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBGbGlwWCA9IFtcclxuICB0cmlnZ2VyKCdmbGlwWCcsIFtcclxuICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICBzdHlsZSh7cG9zaXRpb24gOiAnYWJzb2x1dGUnLCB0cmFuc2Zvcm06ICdyb3RhdGVYKDkwZGVnKScsIG9wYWNpdHk6IDF9KSxcclxuICAgICAgICBhbmltYXRlKCcyMDBtcycsIGtleWZyYW1lcyhbXHJcbiAgICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAncm90YXRlWCg5MGRlZyknLCBvcGFjaXR5OiAxLCBvZmZzZXQ6IDB9KSxcclxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdyb3RhdGVYKDQwZGVnKScsIG9wYWNpdHk6IDAuNCwgb2Zmc2V0OiAwLjV9KSxcclxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdyb3RhdGVYKDEwZGVnKScsIG9wYWNpdHk6IDAuMiwgb2Zmc2V0OiAwLjd9KSxcclxuICAgICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdyb3RhdGVYKDBkZWcpJywgb3BhY2l0eTowLCBvZmZzZXQ6IDF9KVxyXG4gICAgICAgIF0pKVxyXG4gICAgICBdKSxcclxuICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuICAgICAgc3R5bGUoe3Bvc2l0aW9uIDogJ2Fic29sdXRlJywgdHJhbnNmb3JtOiAncm90YXRlWDBkZWcpJywgb3BhY2l0eTogMSwgaGVpZ2h0OiBcIjBweFwifSksXHJcbiAgICAgIGFuaW1hdGUoJzEwMG1zJywga2V5ZnJhbWVzKFtcclxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAncm90YXRlWCgwZGVnKScsIG9wYWNpdHk6IDAsIG9mZnNldDogMH0pLFxyXG4gICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICdyb3RhdGVYKC0xMGRlZyknLCBvcGFjaXR5OiAwLjYsIG9mZnNldDogMC41fSksXHJcbiAgICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3JvdGF0ZVgoLTQwZGVnKScsIG9wYWNpdHk6IDAuOCwgb2Zmc2V0OiAwLjd9KSxcclxuICAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAncm90YXRlWCgtOTBkZWcpJywgb3BhY2l0eToxLCBvZmZzZXQ6IDF9KVxyXG4gICAgICBdKSlcclxuICAgIF0pXHJcbiAgXSldXHJcbiJdfQ==