import ClassRoom from "./0-classroom";

function initializeRooms(){
    const class1 = new ClassRoom(19)
    const class2 = new ClassRoom(20)
    const class3 = new ClassRoom(34)

    const classes = [class1, class2, class3]

    return classes

}