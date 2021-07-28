const app = Vue.createApp({
	// data,functions
	data (){
		return {
			showBooks: true,
			title: 'The Final Empire',
			author: 'Brandon Sanderson',
			age: 45,
			x:0,
			y:0
		}
	},
	methods:{
		toggleshowBooks(){
			this.showBooks = !this.showBooks
		},
		handleEvent(e,data){
			console.log(e,e.type);
			if (data) {
				console.log(data);
			}
		},
		handleMousemove(e){
			this.x = e.offsetX;
			this.y = e.offsetY;

		}
	}
})

app.mount('#app')
