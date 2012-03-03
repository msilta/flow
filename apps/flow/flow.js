// ==========================================================================
// Project:   Flow
// Copyright: @2012 My Company, Inc.
// ==========================================================================
/*globals Flow */

Flow = SC.Application.create();

SC.ready(function() {
  Flow.mainPane = SC.TemplatePane.append({
    layerId: 'flow',
    templateName: 'flow'
  });
});
