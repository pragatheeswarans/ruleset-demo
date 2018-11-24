import Service from '@ember/service';
import EmberObject from '@ember/object';

const FIELD = EmberObject.extend({
    label: null,
    value: null,
    type: 'string'
});

const PREDICATE = EmberObject.extend({
    label: null,
    value: null
});

const ACTION = EmberObject.extend({
    label: null,
    value: null,
    type: null
});

const CONDITION_SET = EmberObject.extend({
    field: null,
    predicate: null,
    value: null
});

const ACTION_SET = EmberObject.extend({
    action: null,
    actionType: null,
    destinationValue: null
});

export default Service.extend({
    getFields() {
        return [
            FIELD.create({ label: 'From', value: 'from' }),
            FIELD.create({ label: 'To', value: 'to' }),
            FIELD.create({ label: 'CC', value: 'cc' }),
            FIELD.create({ label: 'Subject', value: 'subject' }),
            FIELD.create({ label: 'Date Received', value: 'date-received', type: 'date' }),
            FIELD.create({ label: 'Date Sent', value: 'date-sent', type: 'date' })
        ];
    },
    
    getStringPredicates() {
        return [
            PREDICATE.create({ label: 'Contains', value: 'contains' }),
            PREDICATE.create({ label: 'Does not Contain', value: 'not-contains' }),
            PREDICATE.create({ label: 'Equals', value: 'equals' }),
            PREDICATE.create({ label: 'Not Equals', value: 'not-equals' })
        ];
    },
    
    getDatePredicates() {
        return [
            PREDICATE.create({ label: 'Greater than', value: 'greater' }),
            PREDICATE.create({ label: 'Lesser than', value: 'lesser' })
        ];
    },
    
    getActions() {
        return [
            ACTION.create({ label: 'Move Message', value: 'move', type: 'move' }),
            ACTION.create({ label: 'Mark as Read', value: 'read', type: 'status' }),
            ACTION.create({ label: 'Mark as Unread', value: 'unread', type: 'status' }),
            ACTION.create({ label: 'Archive Message', value: 'archive', type: 'status' }),
            ACTION.create({ label: 'Add Label', value: 'add-label', type: 'tag' })
        ];
    },
    
    getMailBoxes() {
        return [{
            label: 'Inbox',
            value: 'inbox'
        }, {
            label: 'Primary',
            value: 'primary'
        }, {
            label: 'Support',
            value: 'support'
        }];
    },
    
    getDefaultCondition() {
        return CONDITION_SET.create({ field: 'from', predicate: 'contains', value: 'someone@example.com' });
    },
    
    getDefaultConditionsSet() {
        return [
            CONDITION_SET.create({ field: 'from', predicate: 'contains', value: 'someone@example.com' }),
            CONDITION_SET.create({ field: 'to', predicate: 'not-contains', value: 'example@somedomain.com' }),
            CONDITION_SET.create({ field: 'date-received', predicate: 'lesser', value: '4' })
        ];
    },
    
    getDefaultAction() {
        return ACTION_SET.create({ action: 'move', mailBox: 'inbox' });
    },

    getDefaultActionsSet() {
        return [
            ACTION_SET.create({ action: 'move', mailBox: 'inbox' }),
            ACTION_SET.create({ action: 'add-label', labelValue: 'Important' })
        ];
    }
});
