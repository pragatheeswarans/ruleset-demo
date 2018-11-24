import Component from '@ember/component';
import { computed } from '@ember/object';
import { alias, equal } from '@ember/object/computed';
import { inject as Service } from '@ember/service';

export default Component.extend({
    fillers: Service(),
    selectedAction: alias('ruleAction.action'),
    selectedLabel: alias('ruleAction.labelValue'),
    selectedMailBox: alias('ruleAction.mailBox'),

    ruleActions: computed(function() {
        return this.fillers.getActions();
    }),
    
    mailBoxes: computed(function() {
        return this.fillers.getMailBoxes();
    }),
    
    actionType: computed('selectedAction', function() {
        let action = this.fillers.getActions().filterBy('value', this.get('selectedAction'))[0] || {};
        return action.type;
    }),

    isMoveTypeAction: equal('actionType', 'move'),
    
    isTagType: equal('actionType', 'tag'),
    
    actions: {
        changeAction(selectedOption) {
            this.set('selectedAction', selectedOption);
        },
        
        changeMoveTo(selectedOption) {
            this.set('selectedMailBox', selectedOption);
        },
        
        removeAction() {
            this.onRemoveAction(this.actionIndex);
        },
        
        addAction() {
            this.onAddAction(this.actionIndex);
        }
    }
});
