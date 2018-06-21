import {observable, action} from 'mobx';

class ItemsStore {
    @observable 
    public items:string;
    @observable 
    public dataTime:string;

    public constructor() {
        this.items = ''
        this.dataTime = ''
    }
    @action
    public fetchData = (str:string) => {
        this.items = str;
    }

    @action
    public emptyData = () => {
        this.items = '';
    }
}

const userStore = new ItemsStore()

export default userStore;