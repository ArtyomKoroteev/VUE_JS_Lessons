/* eslint-disable no-undef */
// import Vue from 'vue';

const discountApp = (() => {
  const discountAppContainer = document.querySelector('.discount-app-container');

  const codes = {
    'new year': 10,
    happy: 20,
    man: 5,
    woman: 5,
  };
  const _getDiscount = function (discount) {
    const sale = codes[discount] !== undefined ? codes[discount] : 0;
    return sale;
  };

  const vueInit = () => {
    const app = new Vue({
      el: discountAppContainer,
      data: {
        discountCode: '',
        saleNumber: '',
      },
      methods: {
        sale() {
          this.saleNumber = `${_getDiscount(this.discountCode)}%`;
        },
      },
    });
  };

  const init = () => {
    // if (discountAppContainer.length === 0) {
    //   return;
    // }
    vueInit();
  };
  return {
    init,
  };
})();

export default discountApp;
