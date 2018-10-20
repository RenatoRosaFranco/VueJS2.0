// Através de props eu consigo passar
// atributos para serem exibidos no meu componentes
// por exemplo props: [a, b, c, d, e, |n|]  n atributos	 
Vue.component('message-component', {
	props: ['title', 'body'],
	data () {
		return {
			isVisible: true
		}
	},
	template: `
		<article class="message" v-show="isVisible">
	  <div class="message-header">
		  {{ title }}

		  <button type='button' @click="hideModal">x</button>
	  </div>
	  <div class="message-body">
	    {{ body }}
	  </div>
	</article>
	`,
	methods: {
		hideModal() {
		 this.isVisible = false
		}
	}
});

new Vue({
	el: '#root'
});