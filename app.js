var one = new Vue({
	el: '#vue-app-one',
	data: {
		title: 'Vue App One'
	},
	methods: {
	},
	computed: {
		greet: function() {
			return 'hello from app one';
		}
	}
});

var two = new Vue({
	el: '#vue-app-two',
	data: {
		title: 'Vue App Two'
	},
	methods: {
		changeTitle: function() {
			one.title = two.title;
		}
	},
	computed: {
		greet: function() {
			return 'hello from app two';
		}
	}
});
