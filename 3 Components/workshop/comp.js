Vue.component('comp-task1', {
    props: {  },

    data() {
        return {
            counter:0,
        }
    },
    methods: {
        increase() {
            this.counter++;
        },
        decrease() {
            this.counter--;
        },
    },

    template: `
    <div>
      <h2>Counter</h2>
      <p>{{ counter }}</p>
      <button @click=increase()>+</button>
      <button @click=decrease()>-</button>
    </div>
    `
});

Vue.component('comp-task2', {
    props: {},
    data() {
        return {
            listActions: ['Сходить в магазин', 'Купить билет', 'Погладить кота'],
            newList: '',
        }
    },
    methods: {
        addAction() {
            this.listActions.push(this.newList);
        },
        removeAction(index) {
            this.listActions.splice(index, 1);
        }
    },
    template: `
    <div>
        <h2>Список дел</h2>
        <input placeholder="Добавить элемент" type="text" v-model="newList" >
        <button @click="addAction">Добавить</button>
        <ul>
            <li v-for="(action, index) in listActions" >{{ action }}
            <button @click="removeAction(index)">Удалить</button>
            </li>
        </ul>
    </div>
    `
});

// второй вариант решения задачи

Vue.component('task', {
    props: ['task', 'index'],
    methods: {
        removeTask(index) {
            this.$emit('removeTask', index);
        },
    },
    template: `<div>
                    <div>{{task}}</div>
                    <button @click="removeTask  (index)">Удалить</button>
               </div>`,
});

Vue.component('comp-task2-0', {
    props: {},
    data() {
        return {
            listActions: ['Сходить в магазин', 'Купить билет', 'Погладить кота'],
            newList: '',
        }
    },
    methods: {
        addAction() {
            this.listActions.push(this.newList);
        },
        removeAction(index) {
            this.listActions.splice(index, 1);
        }
    },
    template: `
      <div>
         <h2>Список дел</h2>
         <input placeholder="Добавить элемент" type="text" v-model="newList">
         <button @click="addAction">Добавить</button>
         <div>
           <task
               v-for="(action, index) in listActions"
               :task="action"
               :index="index"
               :key="index"
               @removeTask="removeAction"
           />
         </div>
       </div>
     `
});

Vue.component('comp-task3', {
    props: {  },

    data() {
        return {
            listEls: ['list 1', 'list 2', 'list 3'],
            newList: ''
        }
    },
    methods: {

    },
    computed: {
        filteredEls() {
            return this.listEls.filter(el => el.includes(this.newList));
        }
    },

    template: `
    <div>
        <h2>Список</h2>
        <input placeholder="Фильтр" type="text" v-model="newList">
            <li v-for="(el, index) in filteredEls" >{{ el }}</li>
            </li>
        </ul>
    </div>
    `
});

Vue.component('products', {
    props: ['product'],
    template: `
    <div>
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }} р. </p>
    </div>
    `
});
Vue.component('comp-task4', {


    data() {
        return {
            products: [
                {
                    id: 1,
                    name: 'яблоко',
                    price: 35,
                },
                {
                    id: 2,
                    name: 'груша',
                    price: 42,
                },
                {
                    id: 3,
                    name: 'дыня',
                    price: 17,
                },
                {
                    id: 4,
                    name: 'арбуз',
                    price: 14,
                },
                {
                    id: 5,
                    name: 'персик',
                    price: 44
                }
            ]
        }
    },
    methods: {
        sortPriceUp() {
            this.products.sort((a, b) => {
                return a.price - b.price;
            })
        },
        sortPriceDown() {
            this.products.sort((a, b) => {
                return b.price - a.price;
            })
        }
    },
    computed: {

    },

    template: `
    <div>
      <products
        v-for="product in products"
        :key="product.id"
        :product="product"
        >
      </products>
    <button @click="sortPriceUp()">Сортировать по возрастанию</button>
    <button @click="sortPriceDown()">Сортировать по убыванию</button>
    </div>
    `
});