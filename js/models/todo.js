Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
  {
    id: 1,
    title: 'Learn Ember.js',
    isCompleted: true
  },
  {
    id: 2,
    title: 'go to Ortho appointment',
    isCompleted: false
  },
  {
    id: 3,
    title: 'get a job!',
    isCompleted: false
  }
];
