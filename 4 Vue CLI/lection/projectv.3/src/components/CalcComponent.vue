<template>
    <div>
        <div class="calc">
            <input v-model="result" class="input" type="text">
            <button @click="addButton(num)" v-for="num in nums" :key="num.id">
                {{ num }}
            </button>
            <button @click="addButton(tab)" v-for="tab in tabs" :key="tab.id">
                {{ tab }}
            </button>
            <button @click="calcResult">=</button>
            <button @click="reset" class="reset">reset</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CalcComponent',

    data() {
        return {
            result: '',
            nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
            tabs: ['-', '+', '*', '/' ],
        };
    },

    mounted() {
        
    },

    methods: {
        addButton(char) {
            this.result = this.result.toString();
            this.result += char;
        },
        calcResult() {
            this.result = eval(this.result);
        },
        reset() {
            this.result = '';
        }
    },
};
</script>

<style lang="css" scoped>
.calc {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    justify-content: center;
    padding-top: 48px;
    padding-bottom: 48px;
}

.input {
    grid-column: 1 / -1;
}

.reset {
    grid-column: 1 / -1;
}

</style>