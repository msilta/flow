Flow.statechart = SC.Statechart.create({
  initialState: 'readyState',
  readyState: SC.State.plugin('Flow.ReadyState'),
});