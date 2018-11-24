import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
    host: 'https://ruleset.herokuapp.com'
});
