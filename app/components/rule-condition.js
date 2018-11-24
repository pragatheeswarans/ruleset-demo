import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias, equal } from '@ember/object/computed';
import { inject as Service } from '@ember/service';

export default Component.extend({
    fillers: Service(),
    selectedField: alias('condition.field'),
    selectedPredicate: alias('condition.predicate'),
    selectedValue: alias('condition.value'),

    fields: computed(function() {
        return this.fillers.getFields();
    }),
    
    fieldType: computed('selectedField', function() {
        let field = this.fillers.getFields().filterBy('value', this.get('selectedField'))[0] || {};
        return field.type;
    }),
    
    isStringType: equal('fieldType', 'string'),
    
    isDateType: equal('fieldType', 'date'),

    predicates: computed('fieldType', function() {
        if (this.get('isStringType')) {
            return this.fillers.getStringPredicates();
        } else if (this.get('isDateType')) {
            return this.fillers.getDatePredicates();
        } else {
            return [];
        }
    }),
    
    valueFieldType: computed('fieldType', function() {
        return this.get('isStringType') ? 'text' : 'number';
    }),
    
    actions: {
        changeConditionField(selectedField) {
            this.set('selectedField', selectedField);
        },
        
        changeConditionPredicate(selectedPredicate) {
            this.set('selectedPredicate', selectedPredicate);
        },
        
        addCondition() {
            console.log('Add Inside Component');
            this.onAddCondition(this.conditionIndex);
        },
        
        removeCondition() {
            console.log('Remove Inside Component');
            this.onRemoveCondition(this.conditionIndex);
        }
    }
});
