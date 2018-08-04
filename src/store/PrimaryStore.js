import {action, observable} from "mobx";

const Day = {
    windowBackground: "#ffffff",
    textColorPrimary: "#666",
    textColorSecondary: "#333333",
    bottomBackground: "#fff"
}

const Light = {
    windowBackground: "#242833",
    textColorPrimary: "#ffffff",
    textColorSecondary: "#f5f6f8",
    bottomBackground: "#343a49",
}


export default class LanguageStore {

    @observable colorPrimary = "#00ba90";

    @observable appBackground = Day.windowBackground;

    @observable styleMode = Day;

    @action usePrimaryColor(color) {
        this.colorPrimary = color;
    }

    @action isLight(isLight) {
        isLight ? this.styleMode = Light : this.styleMode = Day;
        this.useAppBackground(this.styleMode.windowBackground);
        STORAGE.save({key: "isLight", data: isLight, expires: null});
    }

    @action useAppBackground(background) {
        this.appBackground = background;
        STORAGE.save({key: "appBackground", data: background, expires: null});
    }


    static getInstance() {
        if (!this.instance) {
            this.instance = new LanguageStore();
        }
        return this.instance;
    }
}