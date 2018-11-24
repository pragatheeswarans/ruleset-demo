import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        let id = params.rule_id;
        return new Promise((resolve, reject) => {
            $.ajax(`https://ruleset.herokuapp.com/rules/get?id=${id}`, { type: 'GET' }).then((json) => {
                if (json) {
                    let data = JSON.parse(json[0].data);
                    let rule = this.store.createRecord('rule', data);
                    rule.set('id', id);
                    resolve(rule);
                }
                resolve(json);
            }).catch((error) => {
                reject(error);
            })
        });
    }
});
