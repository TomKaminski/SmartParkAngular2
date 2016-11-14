export class SideMenuItem {
    iconName : string;
    displayText : string;
    routeTargetName : string;
    authorizeAdmin : boolean;

    constructor(iconName : string, displayText : string, routeTatgetName : string, authorizeAdmin : boolean) {
        this.iconName = iconName;
        this.displayText = displayText;
        this.routeTargetName = routeTatgetName;
        this.authorizeAdmin = authorizeAdmin;
    }
}