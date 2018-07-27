import {action, observable} from "mobx";

const Chinese = {
    home: {
        title: "首页"
    },
    person: {
        title: "个人"
    },
    cartoon: {
        title: "漫画"
    }
}
const English = {
    home: {
        title: "Home"
    },

    person: {
        title: "Person"
    },

    cartoon: {
        title: "Cartoon"
    }
}

export default class LanguageStore {

    @observable lang = Chinese;


    @action useChinese() {
        this.lang = Chinese;
    }

    @action useEnglish() {
        this.lang = English;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new LanguageStore();
        }
        return this.instance;
    }
}