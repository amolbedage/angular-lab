*-----------Angular CMD-----------*

ng  g m admin/admin-dashboard --routing




/**---------spec setting to remove spec file from component-----------***/

Inside your angular-cli.json set the spec.component parameter to false:


           "defaults": {
                    "spec": {
                        "class": false,
                        "component": true,
                        "directive": true,
                        "module": false,
                        "pipe": true,
                        "service": true
                    }
                    }
Using CMD
   ng set defaults.class.spec=false
   ng set defaults.component.spec=false


*------- Link Interceptor ----------*
    http://jasonwatmore.com/post/2018/11/16/angular-7-jwt-authentication-example-tutorial#authentication-service-ts

*--------- Role Guard -----------*    
https://ryanchenkie.com/angular-authentication-using-route-guards

npm install --save jwt-decode
