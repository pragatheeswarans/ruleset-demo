import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    predicate: DS.attr('string'),
    conditions: DS.attr(),
    actions: DS.attr()
});
