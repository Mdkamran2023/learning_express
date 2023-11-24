client                            server
cookie                            session
(client side data saved)        (server side data )


steps:
npm i express-session

create--
req.swssion.koibhiname=koibhivalue;

read
req.session.koibhinaam

delete 
req.session.destroy



cookie -parser
//cookie setup
res.cookie("name",value);

//cookie reading
//req.cookies.name

//cookie delete
res.clearCookie("name");