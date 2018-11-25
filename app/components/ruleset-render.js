import Component from '@ember/component';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { inject as Service } from '@ember/service';

export default Component.extend({
    fillers: Service(),

    predicates: [{
        label: 'All',
        value: 'and'
    }, {
        label: 'Any',
        value: 'or'
    }],
    
    actions: {
        addCondition(index) {
            this.get('model.conditions').insertAt(index + 1, this.fillers.getDefaultCondition());
        },
        
        removeCondition(index) {
            if (this.get('model.conditions').length > 1) {
                this.get('model.conditions').removeAt(index, 1);
            } else {
                window.alert('You need to have at least one condition to create a rule set');
            }
        },
        
        addAction(index) {
            this.get('model.actions').insertAt(index + 1, this.fillers.getDefaultAction());
        },
        
        removeAction(index) {
            if (this.get('model.actions').length > 1) {
                this.get('model.actions').removeAt(index, 1);
            } else {
                window.alert('You need to have at least one action to create a rule set');
            }
        },
        
        saveRuleSet() {
            let serializedModel = this.model.serialize();
            let data = serializedModel.data.attributes;
            let url = 'https://ruleset.herokuapp.com/rules/create';
            let params = {
                type: 'POST',
                data: {
                    JSONString: JSON.stringify(data),
                    name: data.name
                }
            };
            if (!isEmpty(this.model.id)) {
                url = `https://ruleset.herokuapp.com/rules/update?id=${this.model.id}`;
            }
            $.ajax(url, params).then((json) => {
                window.alert(json.message);
                this.openListRoute();
            }).catch((error) => {
                console.log(error);
                window.alert(error.responseJSON.message);
            });
        },
        
        cancelRuleSet() {
            this.openListRoute();
        }
    }
});
