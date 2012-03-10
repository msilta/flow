// ==========================================================================
// Project:   Flow
// Copyright: @2012 Tero Multisilta
// ==========================================================================

Flow.main = function main() {
  document.title = "Flow";
  
  var statechart = Flow.statechart;
  SC.RootResponder.responder.set('defaultResponder', statechart); 
  statechart.initStatechart();
};

function main() { Flow.main(); }