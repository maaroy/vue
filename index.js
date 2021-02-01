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
Te      eventname: "click",
      blah: 12,
      counter: 0,
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      seen: false,
      todos: [
        {
          id: 1,
          text: "test 1",
        },
        {
          id: 123,
          text: "test 2",
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
  template: `<li>{{ todo.text + ': (' + todo.id + ')'}}</li>`
})

const instance = app.mount('#app');
console.log(instance.counter);