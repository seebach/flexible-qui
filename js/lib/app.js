/*
 * @owner yianni.ververis@qlik.com
 *
 */
 console.log('app.js');

var me = {
	v: '1.0.7',
	obj: {
		qlik: null,
		app: null,
		angularApp: null,
		model: [],
		getObjectModel: [],
    apps:[]
	}
};

me.initRemote = function () {
me.config = {
host: 'qs.itellidemo.dk',
prefix: "/",
port: 443, // 443 for Sense Server
// add appname and id to which we should connect
// app name must be in url and object name Compatible format
ids: [{'name':'sales' ,'id':'1d130b61-aee2-4529-ba59-e312527a3486'},
    {'name':'executive' ,'id':'f10e1e83-2c57-48b8-8952-0d6501fdc4dc'}]
};
me.vars = {};
}

me.boot = function () {
//  me.init();
  me.initRemote();

  me.config.ids.forEach(function(value, key) {
    var appname = value['name'];
    me.obj.apps[appname] = me.obj.qlik.openApp(value['id'], me.config);
  //  me.apps[appname] = me.obj.qlik.openApp(value['id'], me.config);
    console.log('load: '+value['name']+' id: '+value['id']);
  });
  console.log('%c App ' + me.v + ': ', 'color: red', 'Loaded!');

};

app = me;
