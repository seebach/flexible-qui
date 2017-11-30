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
		getObjectModel: []
	}
};

me.init = function () {
	me.config = {
		host: 'localhost',
		prefix: "/",
		port: 4848, // 443 for Sense Server
		id: 'Helpdesk Management.qvf'
	};
	me.vars = {};
}
<<<<<<< HEAD
me.initRemote = function () {
	me.config = {
		host: 'qs.itellidemo.dk',
		prefix: "/",
		port: 80, // 443 for Sense Server
		id: '1d130b61-aee2-4529-ba59-e312527a3486'
	};
	me.vars = {};
}

me.boot = function () {
//	me.init();
	me.initRemote();
=======

me.boot = function () {
	me.init();
>>>>>>> origin/master
	me.obj.app = me.obj.qlik.openApp(me.config.id, me.config);
	console.log('%c App ' + me.v + ': ', 'color: red', 'Loaded!');
};

app = me;
