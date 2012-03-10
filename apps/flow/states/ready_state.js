Flow.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    Flow.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    Flow.getPath('mainPage.mainPane').remove();
  }

});

