import {CONST} from "src/data/const";
import { store } from "src/store/store";
import logger from "src/error/Logger";
import CommonFunc from 'src/util/CommonFunc';


export class DataModel {
    items = {};

    constructor() {}
    static placeholder(){ return new DataModel(); }


    addComponent(key,value) {
        this.items[key] = value;
    }

    getComponent(key) {
        return this.items[key];
    }

    addToolbar(value) {
        this.addComponent(CONST.COMPONENT_TOOLBAR,value);
    }

    getToolbar() {
        return this.items[CONST.COMPONENT_TOOLBAR];
    }

}


export class NavBackModel {
    items=[];

    clear() {
        this.items = [];
        this.setBackButton();
    }

    add(route) {
        logger.log.debug("NavBackModel.add:route=",route);
        this.items.push( { name:route.name, path:route.path, params:route.params } );

        const a_toolbar = this.getToolbar();
        a_toolbar.setBackButton(true);
    }

    pop() {
        return this.items.pop();
    }

    getToolbar() {
        return store.getters.components.getToolbar();
    }

    setBackButton() {
        const a_toolbar = this.getToolbar();
        if (this.getCount()==0) {
            a_toolbar.setBackButton(false);
        } else {
            a_toolbar.setBackButton(true);
        }
    }

    back(a_this) {

        if (this.getCount()==0) {
            this.setBackButton();
            return;
        }
        
        const dic_param = this.pop();
        logger.log.debug("NavModel.back : route=",dic_param);

        if ( (! dic_param) || (! dic_param.name) ) {
            CommonFunc.navBack(a_this);
        } else {
            a_this.$router.push(dic_param);
        }

        this.setBackButton();        
    }

    getCount() {
        return this.items.length;
    }
}