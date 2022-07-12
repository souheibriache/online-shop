const bcrypt = require('bcrypt');


module.exports = users = [
    {
        name : 'Admin',
        email : 'gs_riache@esi.dz',
        password : bcrypt.hashSync('123456' , 10),
        isAdmin : true,
    },

    {
        name : 'User',
        email : 'user@esi.dz',
        password : bcrypt.hashSync('123456' , 10),
    }
  ];
  