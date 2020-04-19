Ext.define('webapp.controller.LoginController', {
    extend : 'Ext.app.ViewController',

    alias: 'controller.login',

    onLoginClick() {

        this.checkLoginAndPassword({
            login: this.getViewModel().get('login'),
            password: this.getViewModel().get('password')
        }).then(result => {
            if (result.success) {
                if (result.users_right === "Администратор"){
                    this.onLoginSuccessAdmin();
                }
                else if (result.users_right === "Директор"){
                    this.onLoginSuccessDirector();
                }
                else if (result.users_right === "Пользователь"){
                    this.onLoginSuccessUser();
                }
            } else {
                this.onLoginFailure();
            }
        }).otherwise(console.error);
    },


    privates:{
        onLoginSuccessAdmin(){
            this.fireViewEvent('logincloseadmin');
            this.getView().close();
           },
        onLoginSuccessUser(){
            this.fireViewEvent('logincloseuser');
            this.getView().close();
        },
        onLoginSuccessDirector(){
            this.fireViewEvent('loginclosedirector');
            this.getView().close();
            },

        onLoginFailure(){
            Ext.Msg.alert("Ошибка","Данного пользователя нет в системе");
        },
        checkLoginAndPassword({login, password}){
        return  Ext.Ajax.request({
                method: 'post',
                url:'http://localhost:8080/login',
                waitMsg : 'Please wait...',
                params:{
                    login,
                    password
                }
            }).then(response => {
                console.log(response.responseText);
                return Ext.decode(response.responseText)
        })
        }
    }
});