<template>
    <div class="row justify-content-center my-auto">
        <div class="col-sm-8 col-lg-6 col-xl-5 col-xxl-4">
            
            <div class="py-md-5 py-4">
                
                <div class="text-center mb-5">
                    <h3>Welcome Back !</h3>
                    <p class="text-muted">Sign in to continue to Doot.</p>
                </div>
                <form action="https://themesbrand.com/doot/layouts/index.html" @submit.prevent="loginAsync($event)">
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" v-model="login.username" placeholder="Enter username">
                    </div>
                    
                    <div class="mb-3">
                        <div class="float-end">
                            <a href="auth-recoverpw.html" class="text-muted">Forgot password?</a>
                        </div>
                        <label for="userpassword" class="form-label">Password</label>
                        <div class="position-relative auth-pass-inputgroup mb-3">
                            <input type="password" class="form-control pe-5" v-model="login.password" id="password-input" placeholder="Enter Password">
                            <button class="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted" type="button" id="password-addon">
                                <i class="ri-eye-fill align-middle"></i>
                            </button>
                        </div>
                    </div>

                    <div class="form-check form-check-info font-size-16">
                        <input class="form-check-input" type="checkbox" id="remember-check">
                        <label class="form-check-label font-size-14" for="remember-check">
                            Remember me
                        </label>
                    </div>

                    <div class="text-center mt-4">
                        <button class="btn btn-primary w-100" type="submit">Log In</button>
                    </div>
                    <div class="mt-4 text-center">
                        <div class="signin-other-title">
                            <h5 class="font-size-14 mb-4 title">Sign in with</h5>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <div>
                                    <button type="button" class="btn btn-light w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Facebook"><i class="mdi mdi-facebook text-indigo"></i></button>
                                </div>
                            </div>
                            <div class="col-6">
                                <div>
                                    <button type="button" class="btn btn-light w-100" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Google"><i class="mdi mdi-google text-danger"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <div class="mt-5 text-center text-muted">
                    <p>
                        Don't have an account ?
                        <router-link :to="{ name: 'register' }" class="fw-medium text-decoration-underline">Register</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginController',
        data() {
            return {
                login: {
                    username: 'admin@gmail.com',
                    password: 'password'
                }
            }
        },
        methods: {
            loginAsync: async function() {
                await this.$store.dispatch('auth/loginAsync', this.login).then((response) => {
                    this.$router.push({ name: 'application', response });
                });
            }
        },
    }
</script>

<style>

</style>