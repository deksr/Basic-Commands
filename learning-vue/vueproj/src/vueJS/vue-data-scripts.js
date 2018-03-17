// adding data:

var obj = { 
	items: [ 
	 { a: 1, b: 2, c: 3, d: 4, e: 5},
	 { a: 3, b: 5, c: 6, d: 8, e: 9}
	]
 }




var vm = new Vue({
	el: '#app-render-two',
  data: obj
})



new Vue({
  el: '#app-render-two-a',
  data: {
    checkedItem: []
  }
})


new Vue({
  el: '#app-render-two-b',
  data: {
    picked: []  
  }
})

