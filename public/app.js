new Vue({
	el: '#app',

	data: {
		ws: null,		//websocket
		newMsg: '',		// new messages being sent
		chatContent: '',	// list of chat messages displayed
		username: null,	
		joined: false		// true if username has been entered
	},

	created: function() {
		var self = this;
		this.ws = new WebSocket('ws://' + window.location.host + '/ws');
		this.ws.addEventListener('message', function(e) {
			var msg = JSON.parse(e.data);
			self.chatContent += '<div class="chip">' + msg.username + '</div>'; //old emoji code broke the message parsing: + emojione.toImage(msg.message) + '<br/>';
		var element = document.getElementById('chat-messages');
		element.scrollTop = element.scrollHeight;
		});
	},

	methods: {
		send: function () {
			if (this.newMsg != '') {
				this.ws.send(
					JSON.stringify({
						username: this.username,
						message: $('<p>').html(this.newMsg).text()
					}
					));
				this.newMsg = '';
			}
		},

		join: function () {
			if (!this.username) {
				Materialize.toast('You must choose a username', 2000); 
				return
			}
			this.username = $('<p>').html(this.username).text();
			this.joined = true;
		},
	}
});
		
	
		
