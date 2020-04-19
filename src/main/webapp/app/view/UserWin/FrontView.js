Ext.define('webapp.view.UserWin.FrontView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.adminview',
    viewmodel: 'admin',
    requires: [ 'webapp.controller.AdminController',
        'webapp.model.UserModel'],
    controller: 'admin',
    title: {
        height:20,
    },

    layout: {
        type: 'border'
    },
    items: [
        {
            xtype: 'panel',
            region: 'north',
            layout: {
                type: 'vbox'
            },
            items:[
                {
                    layout:{
                        type: 'hbox'
                    },
                    region: 'north',
                    height:40,
                    items:[{
                        margin:'5 0 10 600',
                        xtype: 'displayfield',
                        value: "User2",
                    },{
                        xtype: 'button',
                        iconCls: 'x-fa fa-search',
                        margin:'5 0 10 634'
                    },{
                        xtype: 'button',
                        iconCls:'x-fa fa-bell',
                        margin:'5 0 10 5',
                    },{
                        xtype: 'button',
                        iconCls:'x-fa fa-align-justify',
                        margin:'5 0 10 5',
                    }
                    ],
                },
                {
                    margin:'0 600 0 600',
                    xtype:'panel',
                    layout: {
                        type: 'hbox'
                    },
                    items:[{
                        xtype: 'extendSearch',
                        text:"Расширенный поиск",
                        width: 650,
                        collapsible: true,
                        collapsed: true,
                        title:{
                            xtype:'textfield',
                            maxLength: 100,

                        }
                    }, {
                      //  margin: '30 0 0 0',
                        xtype: 'button',
                        text:"Найти",
                        height:56,
                        width: 100,
                    }]
                }
            ],
        }, {
            xtype: 'tableGridView',
            region: 'center'
        }
    ],
    renderTo: Ext.getBody()
});