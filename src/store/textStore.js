import {makeAutoObservable} from "mobx";

export default class TextStore {
    constructor() {

        this._page = 'main';
        this._title = 'Главная'

        makeAutoObservable(this);
    };

    setPage(page) {
        this._page = page
    }
    setTitle(title) {
        this._title = title
    }


    get page() {
        return this._page
    };

    get title() {
        return this._title
    };

}
