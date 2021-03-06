import { Component, handler, Event } from '@/infra/Component';
import { prop } from 'vue-strict';

export default class extends Component {
    protected msg = '';

    @handler('Started')
    public onStarted(e: string, msg: string) {
        this.msg = msg;
    }
}