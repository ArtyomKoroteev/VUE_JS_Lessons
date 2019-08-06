/* eslint-disable no-undef */
const userForm = (() => {
  const vueInit = () => {
    const formApp = new Vue({
      el: '.user-form',
      data: {
        user: {
          firstName: '',
          lastName: '',
          email: '',
          age: '',
          skype: '',
        },
        users: [],
        showTable: false,
      },
      methods: {
        addUser() {
          this.users.push(this.user);
          this.user = {};
          this.showTable = true;
        },
      },
    });
  };

  const init = () => vueInit();

  return {
    init,
  };
})();

export default userForm;
