import Route from '@ember/routing/route';
import { inject as Service } from '@ember/service';

export default Route.extend({
    fillers: Service(),

    model() {
        return this.store.createRecord('rule', {
            name: 'Rule-1',
            predicate: 'and',
            conditions: this.fillers.getDefaultConditionsSet(),
            actions: this.fillers.getDefaultActionsSet()
        });
    }
});
