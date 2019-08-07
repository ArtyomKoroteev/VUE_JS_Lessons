/* eslint-disable no-undef */
const twoStepsForm = (() => {
  const twoStepsFormContainer = document.querySelector('.two-steps-form');
  
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
        validateBeforeSubmit(scope) {
          this.$validator.validateAll(scope).then((result) => {
            console.log(scope);
                     
            if (result) {
              if (scope === 'form-1') {
                this.showForm1 = false;
                this.showForm2 = true;
              } else if (scope === 'form-2') {
                this.showForm1 = true;
                this.showForm2 = false;
                // this.addUser();
              }
            }
            // eslint-disable-next-line no-alert
            // alert('Correct errors!');
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
