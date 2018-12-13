<template>
    <div style="margin-bottom: 10px">
    	<h3>Some User Details</h3>
    	<p>User loaded has ID: {{ $route.params.id }}</p>
    	<!-- <router-link 
    		tag="button" 
    		:to="'/user/' + $route.params.id + '/edit'"
    		class="btn btn-primary">Edit User</router-link> -->
		<!-- <router-link 
    		tag="button" 
    		:to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', a: 105 }}"
    		class="btn btn-primary">Edit User</router-link> -->
        <router-link
            tag="button" 
            :to="link"
            class="btn btn-primary">Edit User</router-link>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                link: { 
                    name: 'userEdit',
                    params: { 
                        id: this.$route.params.id 
                    }, 
                    query: { 
                        locale: 'en', 
                        a: 105 
                    },
                    hash: '#data'
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            if(true) {
                // next(vm => {
                //     vm.link;
                // });
                next();
            }
            else {
                next(false);
            }
        }
    }
</script>