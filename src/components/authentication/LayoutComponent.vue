<template>
    <div class="auth-bg">
        <div class="container-fluid p-0">
            <div class="row g-0">
                <div class="col-xl-3 col-lg-4">
                    <div class="p-4 pb-0 p-lg-5 pb-lg-0 auth-logo-section">
                        <div class="text-white-50">
                            <h3>
                                <a href="index.html" class="text-white">
                                    <i class="bx bxs-message-alt-detail align-middle text-white h3 mb-1 me-2"></i>
                                    Doot
                                </a>
                            </h3>
                            <p class="font-size-16">Responsive Bootstrap 5 Chat App</p>
                        </div>
                        <div class="mt-auto">
                            <img src="assets/images/auth-img.png" alt="" class="auth-img">
                        </div>
                    </div>
                </div>
                <!-- end col -->
                <div class="col-xl-9 col-lg-8">
                    <div class="authentication-page-content">
                        <div class="d-flex flex-column h-100 px-4 pt-4">
                            <router-view></router-view>
                            <!-- end row -->
        
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="text-center text-muted p-4">
                                        <p class="mb-0">
                                            <!-- &copy; <script>document.write(new Date().getFullYear())</script> -->
                                            Doot. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                                        </p>
                                    </div>
                                </div><!-- end col -->
                            </div><!-- end row -->
        
                        </div>
                    </div>
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container-fluid -->
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>