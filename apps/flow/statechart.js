Flow.statechart = SC.Statechart.create({
  trace: YES,
 
  rootState: SC.State.design({
    initialSubstate: "READY",
    READY: SC.State.plugin('Flow.READY')
  })
});