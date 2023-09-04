const compItem = {
    name: 'comp-item',
    template: `<p>item info</p>`
}



Vue.component('new-component', {
    props: ['title'],
    data() {
        return {
            counter:0,
        }
    },
    components: {
        'comp': compItem
    },
    methods: {
        increase(step) {
            this.counter+=step;
        }
    },

    template: `
    <div>
      <h3>{{title}}</h3>
      <comp></comp>
      <p>Counter click {{ counter }}</p>
      <button @click="increase(2)">+1</button>
    </div>
    `
});

Vue.component('standart-comp', {
    data() {
        return {message: "text message"}
    },
    methods: {
        newInfo() {
            console.log('hello methods');
        }
    },
    computed: {
        newComp() {
            return this.message;
        }
    },
    template: '<h2> Standart template</h2>'
});

Vue.component('change-one', {
    template: `
    <div>
      <h2>Info change component</h2>
      <p>Новый текстовый блок, который нужно прочитать</p>
    </div>
    `
});

Vue.component('change-two', {
    template: `
    <div>
      <h2>2 change component</h2>
      <p>Другой текст и другой шаблон</p>
    </div>
    `
});

Vue.component('change-three', {
    template: `
    <ul>
      <li>list item info 1</li>
      <li>list item info 2</li>
      <li>list item info 3</li>
    </ul>
    `
});

Vue.component('Comp', {
    props: {  },

    data() {
        return {
            
        }
    },

    template: '',
});