import User from './components/user/User.vue';
import Home from './components/Home.vue';

export const routes = [
	{ path: '', component: Home },
	// { path: '/user/:id', component: User }
	// { path: '/user/:id', component: User, props: true } // pass route.params to props
	{ path: '/user/:id', component: User, props: { default: true, text: "Yo Dude!!!" }} // Can pass static, dynamic, or function to props
];