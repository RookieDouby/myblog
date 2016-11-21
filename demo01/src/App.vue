<template>
    <div id="app">
        <div id="header" class="tpl-header">
            <div class="float">
                <span class="avatar left f5">Sam blog</span>
                <div class="navigation right">
                    <div class="navigation-item">
                        <a href="" class="f5">About</a>
                    </div>
                    <div class="navigation-item">
                        <a href="" class="f5">Albums</a>
                    </div>
                    <div class="navigation-item">
                        <a href="" class="f5">Contact</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="homepage-container">
            <div class="row">
                <div class="col-xs-8 col-xs-offset-1">
                    <div>
                        <h2>Router-demo01</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-2 col-xs-offset-1">
                    <div class="list-group">
                        <a href="" class="list-group-item" v-link="{ path:'/home'}">Home</a>
                        <a href="" class="list-group-item" v-link="{ path: '/about' }">About</a>
                    </div>
                </div>
                <div class="col-xs-6">
                    <div class="panel">
                        <div class="panel-body">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="sass">
    @import './css/ui.scss';
    
    .homepage-container {
        position:relative;
        background-color:#ccc;
        margin-top:50px;
    }
</style>