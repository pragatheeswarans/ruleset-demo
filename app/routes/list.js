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
        }
    },

    model(params = {}) {
        return new Promise((resolve, reject) => {
            $.ajax('https://ruleset.herokuapp.com/rules/list', {
                type: 'GET',
                page: params.page,
                search: params.search,
                sort_by: params.sort
            }).then((json) => {
                resolve(json);
            }).catch((error) => {
                reject(json);
            });
        })
    }
});
