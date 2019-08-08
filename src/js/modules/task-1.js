/* eslint-disable no-undef */
const userForm = (() => {
  const userFormContainer = document.querySelector('.user-form');
  
  Vue.use(VeeValidate, {
    events: 'change|blur',
  });
  
  const vueInit = () => {
    const formApp = new Vue({
      el: userFormContainer,
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
          this.addUsersToLocalStorage();
        },
        addUsersToLocalStorage() {
          localStorage.setItem('storage', JSON.stringify(this.users));
        },
        loadUsersFromLocalStorage() {
          const userStorage = JSON.parse(localStorage.getItem('storage'));
          if (userStorage !== null) {
            this.showTable = true;
            this.users = userStorage;
          }
        },
        validateBeforeSubmit() {
          this.$validator.validateAll().then((result) => {
            if (result) {
              this.addUser();
              return;
            }
            // eslint-disable-next-line no-alert
            alert('Correct errors!');
          });
        },
      },
      created() {
        this.loadUsersFromLocalStorage();
      },
    });
  };

  const init = () => vueInit();

  return {
    init,
  };
})();

export default userForm;
