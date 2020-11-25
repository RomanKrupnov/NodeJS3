const config ={
    clientID: "7668683",
    clientSecret: "IsARwntwEYkgfltkVdso",
    callbackURL:  "http://localhost:3000/auth/vkontakte/callback",
    scope: ['email'],
    profileFields: ['email', 'city', 'bdate']
};

module.exports = {
    config
}