//1차 에러-> queryStrings의 키가 암시적으로 any, 오류
export class queryStrings{
    public static readonly getUserList: "SELECT * FROM `MVC_test`.`Users`";
    public static readonly insertUser: "INSERT INTO `MVC_test`.`Users` (`id`, `age`, `name`) VALUES (?, ?, ?)";
    public static readonly deleteUser: "DELETE FROM `MVC_test`.`Users` WHERE (`id` = ?)";
    public static readonly patchUser: "UPDATE `MVC_test`.`Users` SET `age` = ? WHERE (`id` = ?);";

}
export class mapperStrings{
    public static readonly getUserList: "getUserList";
    public static readonly insertUser: "insertUser";
    public static readonly deleteUser: "deleteUser";
    public static readonly patchUser: "patchUser";

}
//2차
export const queryString = {
	getUserList: "SELECT * FROM `MVC_test`.`Users`",
	insertUser: "INSERT INTO `MVC_test`.`Users` (`id`, `age`, `name`) VALUES (?, ?, ?)",
	deleteUser: "DELETE FROM `MVC_test`.`Users` WHERE (`id` = ?)",
	patchUser: "UPDATE `MVC_test`.`Users` SET `age` = ? WHERE (`id` = ?);"
} as const;

type queryID = keyof typeof queryString;
export const queryID = Object.keys(queryString) as queryID[];


//3차 정착
export enum query {
	getUserList= "SELECT * FROM `MVC_test`.`Users`",
	insertUser= "INSERT INTO `MVC_test`.`Users` (`id`, `age`, `name`) VALUES (?, ?, ?)",
	deleteUser= "DELETE FROM `MVC_test`.`Users` WHERE (`id` = ?)",
	patchUser= "UPDATE `MVC_test`.`Users` SET `age` = ? WHERE (`id` = ?);"
}