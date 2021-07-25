function define(name: string, value: object) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}
define("queryStrings", {
    getUserList: "SELECT * FROM `MVC_test`.`Users`",
    insertUser: "INSERT INTO `MVC_test`.`Users` (`id`, `age`, `name`) VALUES (?, ?, ?)",
    deleteUser: "DELETE FROM `MVC_test`.`Users` WHERE (`id` = ?)",
    patchUser: "UPDATE `MVC_test`.`Users` SET `age` = ? WHERE (`id` = ?);"
});

define("mapperStrings",{
    getUserList: "getUserList",
    insertUser: "insertUser",
    deleteUser: "deleteUser",
    patchUser: "patchUser"

});