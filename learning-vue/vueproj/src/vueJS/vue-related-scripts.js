console.log("vue-related-javascripts");

// route components
var Foo = { 
	template: '<div>foo</div>' 
}

var Bar = { 
	template: '<div>bar</div>' 
}

var Shop = { 
	template: '<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>' 
}


// routes
var routes = [
  { path: '/startdesign/foo', 
    component: Foo 
  },
  { path: '/startdesign/bar', 
    component: Bar 
  },
  { path: '/startdesign/shop', 
    component: Shop 
  }
]



var router = new VueRouter({
  routes // short for `routes: routes`

})




// Create and mount the root instance
var app = new Vue({
  router
}).$mount('#app')


