console.log("vue-related-javascripts");


// route components
var Foo = { 
	template: '<div class="template-1">foo</div>' ,
}

var Bar = { 
	template: '<div>bar</div>' 
}

var Shop = { 
	template: '<div>lorems</div>' 
}



// ************************************************************************
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


// ************************************************************************
var router = new VueRouter({
  routes // short for `routes: routes`

})


// ************************************************************************
// Create and mount the root instance
var app = new Vue({
  router
}).$mount('#app-render-one')






