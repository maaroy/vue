app = Vue.createApp(Counter);

const Counter = {
  data() {
    return {
      counter: 0,
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      seen: false,
      todos: [
        {
          text: "test 1",
        },
        {
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
  }
}

app.component('todo-item', {
  template: `<li>This is a todo</li>`
})

app.mount('#counter')