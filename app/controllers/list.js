import Controller from '@ember/controller';
import { equal } from '@ember/object/computed';

export default Controller.extend({
    queryParams: ['page', 'search', 'sort_by', 'per_page'],
    page: 0,
    search: '',
    sort_by: 'desc',
    hasMore: false,
    per_page: 5,
    isFirstPage: equal('page', 0),
    isLastPage: equal('hasMore', false),
    
    actions: {
        createRule() {
            this.transitionToRoute('create');
        },
        
        goToEdit(ruleId) {
            this.transitionToRoute(`/edit/${ruleId}`);
        },
        
        loadNextPage() {
            this.set('page', this.get('page') + 1);
        },

        loadPreviousPage() {
            let page = this.get('page');
            if (page > 0) {
                this.set('page', this.get('page') - 1);
            }
        }
    }
});
