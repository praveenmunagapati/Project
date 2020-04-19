Ext.define('webapp.Application',{

    extend:'Ext.app.Application',
    requires:['webapp.view.LogWin.LoginView',
        'webapp.view.UserWin.FrontView',
        'webapp.view.UserWin.Cap',
        'webapp.view.UserWin.ExtendSearch',
        'webapp.view.UserWin.TableGridView',
        'webapp.view.AdminWin.AdminView',
        'webapp.view.AdminWin.AdminGrid',
        "webapp.view.DirectorWin.DirView",
        'webapp.view.DirectorWin.DirGrid'
    ],

    store:[
        'webapp.store.UserStore',
        'webapp.store.GridStore'
    ],

    model:[
        'webapp.model.UserModel',
        'webapp.model.GridModel'
    ],

  //  mainView: 'webapp.view.DirectorWin.DirView',

    launch() {
        const loginWin =Ext.create('webapp.view.LogWin.LoginView');
        loginWin.on('logincloseuser', 'onLoginCloseUser', this);
        loginWin.on('logincloseadmin', 'onLoginCloseAdmin', this);
        loginWin.on('loginclosedirector', 'onLoginCloseDirector', this);
    },

    onLoginCloseUser(){
        this.setMainView('webapp.view.UserWin.FrontView', "Admin");
    },

    onLoginCloseAdmin(){
        this.setMainView('webapp.view.AdminWin.AdminView');
    },

    onLoginCloseDirector(){
        this.setMainView('webapp.view.DirectorWin.DirView');
    },
});