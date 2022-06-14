// Object method shorthand.

const auth = {
	login() {
		console.log("you're logged in");
	},
	logout() {
		console.log('KTHXBAI');
	}
};

auth.login();
auth.logout();
