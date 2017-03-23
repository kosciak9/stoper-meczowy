import 'mocha'
import { expect } from 'chai'

describe('Make sure App is loading', function() {
    it('basic test - App title', function () {
        browser.timeouts('script', 60000)
        browser.url('http://localhost:4567')
        var title = browser.getTitle()
        expect(title).to.equal('Quasar App');
    });
});
