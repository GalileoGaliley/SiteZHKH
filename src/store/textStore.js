import {makeAutoObservable} from "mobx";

export default class TextStore {
    constructor() {

        this._page = 'main';

        makeAutoObservable(this);
    };

    setPage(page) {
        this._page = page
    }

    get page() {
        return this._page
    };

}
