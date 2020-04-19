Ext.define('webapp.store.UserStore',{
    extend:'Ext.data.Store',
    alias:'store.userstore',
    requires : [
        'webapp.model.UserModel'
    ],
    model: 'webapp.model.UserModel',

    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        api: {
            create: 'users',
            read: 'users',
            destroy: 'users',
            update: 'users'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});