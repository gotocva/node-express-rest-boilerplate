import * as User from "../../models/user"




export const storeUser = async (req, res) => {

    await User.store(req.body)
    .then((user) => {
        res.Response(200, 'New user created', user);
    })
    .catch((error) => {
        res.Error(500, error);
    })
}

export const getAllUsers = async (req, res) => {

    await User.list(req.body)
    .then((user) => {
        res.Response(200, 'Users list', user);
    })
    .catch((error) => {
        res.Error(500, error);
    })
}
