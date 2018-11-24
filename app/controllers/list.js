import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['page', 'search', 'sort_by'],
    page: 0,
    search: '',
    sort_by: 'desc',
    
    actions: {
        createRule() {
            this.transitionToRoute('create');
        },
        
        goToEdit(ruleId) {
            this.transitionToRoute(`/edit/${ruleId}`);
        }
    }
});
