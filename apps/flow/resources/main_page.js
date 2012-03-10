// ==========================================================================
// Project:   Flow
// Copyright: @2012 Tero Multisilta
// ==========================================================================

require('views/project_list');

Flow.mainPage = SC.Page.create({
  
  mainPane: SC.MainPane.design({
    childViews: [SC.TabView.design({
      value: 'welcome',
      items: [
        { title: "Welcome", value: "welcome" },
        { title: "Projects", value: "projects" },
        { title: "Config", value: "config" },
        { title: "About", value: "about" }
      ],
      
      itemTitleKey: 'title',
      itemValueKey: 'value',
      layout: { left:12, right:12, top:12, bottom:12 },
      userDefaultKey: "mainPane"
    })]
  }),

  welcome: SC.LabelView.design({
    escapeHTML: NO,
    classNames: 'welcome-tab',
    value: "<h1>Welcome</h1>"
  }),
  
  projects: SC.TemplateView.create({
    templateName: 'flow'
  }),
  
  config: SC.LabelView.design({
    escapeHTML: NO,
    classNames: 'config-tab',
    value: "<h1>Config</h1>"
  }),
    
  about: SC.LabelView.design({
    escapeHTML: NO,
    classNames: 'about-tab',
    value: "<h1>About</h1>"
  })
  
});