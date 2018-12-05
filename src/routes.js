import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';

export const routes = [
	{ path: '', component: Home, name: 'home' },
	// { path: '/user/:id', component: User }
	// { path: '/user/:id', component: User, props: true } // pass route.params to props
	// { path: '/user/:id', component: User, props: { default: true, text: "Yo Dude!!!" }} // Can pass static, dynamic, or function to props
	{ path: '/user', component: User, children: [
		{ path: '', component: UserStart },
		{ path: ':id', component: UserDetail },
		{ path: ':id/edit', component: UserEdit, name: 'userEdit' }
	]}
];