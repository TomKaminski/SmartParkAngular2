export class SideMenuItem {
    iconName : string;
    displayText : string;
    routeTargetName : string;

    constructor(iconName : string, displayText : string, routeTatgetName : string) {
        this.iconName = iconName;
        this.displayText = displayText;
        this.routeTargetName = routeTatgetName;
    }
}