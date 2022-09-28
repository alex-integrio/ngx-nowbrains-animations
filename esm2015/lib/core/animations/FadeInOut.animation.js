import { animate, state, style, transition, trigger } from "@angular/animations";
/***********************************************************
 **  @project
 **  @file
 **  @author Brice Daupiard <brice.daupiard@nowbrains.com>
 **  @Date 09/08/2022
 **  @Description
 ***********************************************************/
export const FadeInOut = trigger('fadeInOut', [
    state('loaded', style({
        opacity: 0,
        'z-index': -1
    })),
    state('loading', style({
        opacity: 1,
    })),
    transition('* => *', animate('500ms ease-out')),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFkZUluT3V0LmFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1ub3dicmFpbnMtYW5pbWF0aW9ucy9zcmMvbGliL2NvcmUvYW5pbWF0aW9ucy9GYWRlSW5PdXQuYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFL0U7Ozs7Ozs2REFNNkQ7QUFDN0QsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUU7SUFDNUMsS0FBSyxDQUNILFFBQVEsRUFDUixLQUFLLENBQUM7UUFDSixPQUFPLEVBQUUsQ0FBQztRQUNWLFNBQVMsRUFBRSxDQUFDLENBQUM7S0FDZCxDQUFDLENBQ0g7SUFDRCxLQUFLLENBQ0gsU0FBUyxFQUNULEtBQUssQ0FBQztRQUNKLE9BQU8sRUFBRSxDQUFDO0tBQ1gsQ0FBQyxDQUNIO0lBQ0QsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztDQUNoRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlcn0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiogIEBwcm9qZWN0XHJcbiAqKiAgQGZpbGVcclxuICoqICBAYXV0aG9yIEJyaWNlIERhdXBpYXJkIDxicmljZS5kYXVwaWFyZEBub3dicmFpbnMuY29tPlxyXG4gKiogIEBEYXRlIDA5LzA4LzIwMjJcclxuICoqICBARGVzY3JpcHRpb25cclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5leHBvcnQgY29uc3QgRmFkZUluT3V0ID0gdHJpZ2dlcignZmFkZUluT3V0JywgW1xyXG4gIHN0YXRlKFxyXG4gICAgJ2xvYWRlZCcsXHJcbiAgICBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICd6LWluZGV4JzogLTFcclxuICAgIH0pXHJcbiAgKSxcclxuICBzdGF0ZShcclxuICAgICdsb2FkaW5nJyxcclxuICAgIHN0eWxlKHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0pXHJcbiAgKSxcclxuICB0cmFuc2l0aW9uKCcqID0+IConLCBhbmltYXRlKCc1MDBtcyBlYXNlLW91dCcpKSxcclxuXSlcclxuIl19