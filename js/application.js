window.Todos = Ember.Application.create({
  LOG_TRANSITIONS: true
});

Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});
