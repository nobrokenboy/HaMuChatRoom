/**
 * Created by jessic on 2016/9/22.
 */
/*babel-polyfill是用来转码，将es6转化为es5的*/
import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';

Vue.config.devtools=true;/*true为开发版本，false为生产版本*/


new Vue({
    el:"body",
    components:{App}
});