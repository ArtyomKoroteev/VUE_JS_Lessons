/* eslint-disable no-undef */

const formDZ = (() => {
  const inputs = document.querySelectorAll('[type="text"], [type="email"], [type="tel"]');
  const guestForm = document.querySelector('.guest-form');
  const vueInit = () => {
    const formApp = new Vue({
      el: guestForm,
      data: {
        showGuest: false,
        guestInfo: {
          firstName: '',
          lastName: '',
          email: '',
          telephone: '',
        },
        guestHolder: [],
      },
      methods: {
        toggleGuest() {
          this.showGuest = !this.showGuest;
        },
        addGuest() {
          this.guestHolder.push(this.guestInfo);
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
