// ==========================================================================
// Project:   Flow
// Copyright: @2012 Tero Multisilta
// ==========================================================================

Flow = SC.Application.create({
  NAMESPACE: 'Flow',
  VERSION: '0.1.0',
  
  store: SC.Store.create().from(SC.FixturesDataSource.create({
    simulateRemoteResponse: YES,
    latency: 250
  }))
}) ;
