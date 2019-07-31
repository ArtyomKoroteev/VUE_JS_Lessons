// import Vue from 'vue';

const lessonOneVUE = (() => {
  const vueInit = () => {
    const app = new Vue({
      el: '.sample',
      data: {
        message: 'Hello Vue!',
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
