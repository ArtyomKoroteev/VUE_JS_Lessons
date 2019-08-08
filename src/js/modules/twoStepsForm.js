/* eslint-disable no-undef */
const twoStepsForm = (() => {
  const twoStepsFormContainer = document.querySelector('.two-steps-form');

  VeeValidate.Validator.extend('nickname', {
    getMessage(field, params, data) {
      return `${data.message}`;
    },
    validate(value) {
      return new Promise((resolve) => {
        if (value === 'god' || value === 'devil' || value === 'president') {
          resolve({
            valid: false,
            data: {
              message: 'You cannot choose nickname: "god", "devil" or "president"',
            },
          });
        } else {
          resolve({
            valid: true,
          });
        }
      });
    },
  });

  Vue.use(VeeValidate, {
    events: 'change|blur',
  });

  const vueInit = () => {
    const formApp = new Vue({
      el: twoStepsFormContainer,
      data: {
        user: {
          firstName: '',
          lastName: '',
          email: '',
          age: '',
          skype: '',
          hobbies: '',
          telephone: '',
          nickname: '',
        },
        users: [],
        showTable: false,
        showForm1: true,
        showForm2: false,
      },
      methods: {
        addUser() {
          this.users.push(this.user);
          this.user = {};
          this.showTable = true;
          this.addUsersToLocalStorage();
        },
        addUsersToLocalStorage() {
          localStorage.setItem('twoStepsFormStorage', JSON.stringify(this.users));
        },
        loadUsersFromLocalStorage() {
          const userStorage = JSON.parse(localStorage.getItem('twoStepsFormStorage'));
          if (userStorage !== null) {
            this.showTable = true;
            this.users = userStorage;
          }
        },
        historyBack() {
          window.history.back();
        },
        validateBeforeSubmit(scope) {
          this.$validator.validateAll(scope).then((result) => {
            if (result) {
              if (scope === 'form-1') {
                this.showForm1 = false;
                this.showForm2 = true;
              } else if (scope === 'form-2') {
                this.showForm1 = true;
                this.showForm2 = false;
                this.addUser();
                setTimeout(() => {
                  this.$validator.errors.clear();
                }, 0);
              }
            }
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

export default twoStepsForm;
