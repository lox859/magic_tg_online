var m = require("mithril")
var Home = require("./views/Home")
var Deck = require("./views/Deck")
var Battle = require("./views/Battle")

m.route(document.body, "/Home", {
    "/Home": {
    	render: function() {
    	return m(Layout, m(Home))
    	}
	},
    "/Deck": {
    	render: function() {
    		return m(Layout, m(Deck))
    	}
    },
    "/Battle": {
        render: function() {
            return m(Layout, m(Battle))
        }
    }
})
