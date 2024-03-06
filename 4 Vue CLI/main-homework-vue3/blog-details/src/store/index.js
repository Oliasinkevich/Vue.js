// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from 'vuex'

// Vue.use(Vuex)
 
export default createStore({
    state: {
        
                title: 'Minimal Look Bedrooms',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.'
        
        // начальное состояние
    },
    mutations: {
        // методы для изменения состояния
    },
    actions: {
        // методы для асинхронных операций
    },
    getters: {
        getTitle: (state) => state.title,
        getDescription: (state) => state.description
        // методы для чтения состояния
    },
    modules: {
        // модули Vuex для разделения хранилища на под-хранилища
    }    
})