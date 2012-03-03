// ==========================================================================
// Project:   Flow
// Copyright: @2012 Tero Multisilta
// ==========================================================================

/*globals Flow */

Flow = SC.Application.create();

SC.ready(function() {
  Flow.mainPane = SC.TemplatePane.append({
    layerId: 'flow',
    templateName: 'flow'
  });
});
