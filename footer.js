Vue.component('task', {
	template: '<li><slot></slot></li>',
	data() {
		return {
			copyright: "Apenas um copy"
		}
	}
});

new Vue({
	el: '#root' 
});