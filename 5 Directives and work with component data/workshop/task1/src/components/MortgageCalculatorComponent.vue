<template>
  <div>
    <div>
      Сумма кредита: <input type="number" v-model="loanAmount" /> бел.руб.
      <br />
      Процентная ставка: <input type="number" v-model="interestRate" /> % <br />
      Срок кредита: <input type="number" v-model="loanTerm" /> месяцев <br />
    </div>
    <p>Ежемесячный платеж - {{ monthlyPayment }} бел.руб.</p>
    <p>Общая сумма выплаты - {{ totalPayment }} бел.руб.</p>
    <h3></h3>
  </div>
</template>

<script>
export default {
  name: "MortgageCalculatorComponent",

  data() {
    return {
      loanAmount: 0,
      interestRate: 0,
      loanTerm: 0,
    };
  },

  mounted() {},

  computed: {
    monthlyPayment() {
      const rate = this.interestRate / 100 / 12;
      const term = this.loanTerm;
      const principal = this.loanAmount;
      const numerator = rate * Math.pow(1 + rate, term);
      const denominator = Math.pow(1 + rate, term) - 1;
      const payment = principal * (numerator / denominator);
      return payment.toFixed(2);
    },
    totalPayment() {
      const term = this.loanTerm;
      const payment = parseFloat(this.monthlyPayment);
      return (term * payment).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped></style>

<!-- Создайте компонент MortgageCalculator с соответствующим шаблоном и скриптом.
В шаблоне компонента разместите поля ввода для суммы кредита, процентной ставки и срока кредита, а также элементы для отображения ежемесячного платежа и общей суммы выплаты.
Используйте директиву v-model для связывания введенных пользователем значений с соответствующими свойствами в компоненте.
Создайте вычисляемое свойство monthlyPayment, которое будет вычислять ежемесячный платеж на основе введенных значений суммы кредита, процентной ставки и срока кредита.
Создайте вычисляемое свойство totalPayment, которое будет вычислять общую сумму выплаты по кредиту, учитывая ежемесячный платеж и срок кредита.
Отобразите значения monthlyPayment и totalPayment в соответствующих элементах шаблона. -->
