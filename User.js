class UserRepo{
    constructor(db){
        this._db = db;
    }

    getUsers(){
        return this._db.query('SELECT * FROM users');
    }
}