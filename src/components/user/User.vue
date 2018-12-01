<template>
    <div>
    	<h1>The User Page</h1>
	    <hr>
	    <p>Loaded ID: {{ id }}</p>
	    <button @click="topHomePage" class="btn btn-primary">Go To Home</button>
    </div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				id: this.$route.params.id
			}
		},
		watch: {
			'$route'(to, from) {
				this.id = to.params.id;
			}
		},
		methods: {
			topHomePage() {
				this.$router.push("/");
			}
		}
	}
</script>