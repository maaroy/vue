class Bag {
  constructor(...values) {
    this.values = values;
  }
  get count() {
    return this.values.length;
  }
}
const Root = {
  helo() {
    console.log(this.values);
    return "HELLO";
  },
  get random() {
    return 4;
  },
}

const Counter = {
  data() {
    return {
      eventname: "click",
      blah: 12,
      counter: 0,
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      seen: false,
      todos: [
        {
          id: 1,
          text: "Merete needs to add more todos",
        },
        {
          id: 2,
          text: "Merete needs to find WHERE to add more todos",
        },
      ]
    }
  },
  methods: {
    reverse() {
      this.message = this.message.split('').reverse().join('');
    },
    show() {
      this.seen = !this.seen;
    },
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  },
  created() {
    console.log('Created count is: ' + this.count);
  },
  beforeMount() {
    console.log('Before mount count is: ' + this.count);
  },
  unmounted() {
    console.log('Unmounted count is: ' + this.count);
  },
}

app = Vue.createApp(Counter);

app.component('todo-item', {
  props: ['todo'],
  template: `<li>{{ todo.text }}</li>`
})

const instance = app.mount('#app');
console.log(instance.counter);
