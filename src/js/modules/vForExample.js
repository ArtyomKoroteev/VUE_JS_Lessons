/* eslint-disable no-undef */
// import Vue from 'vue';

const vForExample = (() => {

  const vueInit = () => {
    const app = new Vue({
      el: '.v-for-test',
      data: {
        numbers: [5, 1, 2],
        info: {
          name: 'John',
          email: 'test@mail.com',
          tel: '+380963454982',
        },
      },
      methods: {
        addNumber() {
          this.numbers.push(Math.floor(Math.random() * 10));
        },
        sortNumbers() {
          this.numbers.sort();
        },
        mouseEnter(e, i) {
          if (i % 2 === 0) {
            e.target.style.color = 'red';
          }
        },

        mouseLeave(e, i) {
          if (i % 2 !== 0) {
            e.target.style.color = 'green';
          }
        },
      },
    });
  };

  const init = () => {
    vueInit();
  };
  return {
    init,
  };
})();

export default vForExample;
