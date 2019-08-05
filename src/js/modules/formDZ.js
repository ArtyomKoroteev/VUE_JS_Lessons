/* eslint-disable no-undef */

const formDZ = (() => {
  const inputs = document.querySelectorAll('[type="text"], [type="email"], [type="tel"]');
  
  const formValidation = () => {
    console.log(inputs);
  };

  const vueInit = () => {
    const formApp = new Vue({
      el: '.guest-form',
      data: {
        showGuest: false,
        guestInfo: {
          firstName: '',
          lastName: '',
          email: '',
          telephone: '',
        }, 
      },
      methods: {
        toggleGuest() {
          formValidation();
          this.showGuest = !this.showGuest;
        },
      },
      computed: {

      },
    });
  };

  const init = () => vueInit();

  return {
    init,
  };
})();

export default formDZ;
