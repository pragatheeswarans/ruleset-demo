import Route from '@ember/routing/route';

export default Route.extend({
    queryParams: {
        page: {
            refreshModel: true
        },
        search: {
            refreshModel: true
        },
        sort_by: {
            refreshModel: true
        },
        per_page: {
            refreshModel: true
        }
    },

    model(params = {}, transition) {
        return new Promise((resolve, reject) => {
            $.ajax('https://ruleset.herokuapp.com/rules/list', {
                type: 'GET',
                data: {
                    page: params.page,
                    search: params.search,
                    sort_by: params.sort_by
                }
            }).then((json) => {
                resolve(json);
            }).catch((error) => {
                reject(json);
            });
        })
    },
    
    setupController(controller, context) {
        this._super(...arguments);
        this.set('controller.model', context.result);
        this.set('controller.hasMore', context.has_more);
    }
});
