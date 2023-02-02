import { createApp } from 'vue'
import './style.css'
import 'animate.css';
import App from './App.vue'
import Icon from "@/components/Icon.vue";
import Vue3Autocounter from 'vue3-autocounter';


import Flicking from '@egjs/vue3-flicking';
import '@egjs/vue3-flicking/dist/flicking.css';
import '@egjs/vue3-flicking/dist/flicking-inline.css';

const app=createApp( App )
app.component( 'icon', Icon )
app.component( 'Flicking', Flicking );
app.component( 'vue3-autocounter', Vue3Autocounter );
app.mount( '#app' )
