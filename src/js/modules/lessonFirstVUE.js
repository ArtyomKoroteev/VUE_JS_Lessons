/* eslint-disable no-undef */
// import Vue from 'vue';

const lessonOneVUE = (() => {
  const vueInit = () => {
    if (document.querySelector('.sample') === 0) {
      return;
    }
    const app = new Vue({
      el: '.sample',
      data: {
        message: '',
        showName: true,
        firstName: '',
        lastName: '',
      },
      methods: {
        changeValue(e) {
          console.log(e.target);
        },
        toggleName() {
          this.showName = !this.showName;
        },
      },
      computed: {
        fullName() {
          return `${this.firstName} ${this.lastName}`;
        },
      },
      watch: {
        // firstName() {
        //   console.log('text'); 
        //   return `${this.firstName}`;
        // },
        // fullName() {
        //   console.log('text'); 
        //   return `${this.firstName} ${this.lastName}`;
        // },
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

export default lessonOneVUE;
