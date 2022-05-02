import Airplane from "../Assets/Airplane.svg";
import Backpack from "../Assets/Backpack.svg";
import BBQ from "../Assets/BBQ.svg";
import Ball from "../Assets/Beach Ball.svg";
import Toys from "../Assets/Beach Toys.svg";
import Shorts from "../Assets/Board Shorts.svg";
import Camera from "../Assets/Camera.svg";
import Trailer from "../Assets/Camper Trailer.svg";
import Van from "../Assets/Camper Van.svg";
import Crab from "../Assets/Crab.svg";
import Island from "../Assets/Destination.svg";
import Dolphin from "../Assets/Dolphin.svg";
import Drink from "../Assets/Drink.svg";
import Fan from "../Assets/Fan.svg";
import Fire from "../Assets/Fire.svg";
import Cart from "../Assets/Food Cart.svg";
import Football from "../Assets/Football.svg";
import Feet from "../Assets/Foot Prints.svg";
import Hat from "../Assets/Hat.svg";
import Hotel from "../Assets/Hotel.svg";
import Cone from "../Assets/Ice Cream.svg";
import Kayak from  "../Assets/Kayaking.svg";
import Lifesaver from  "../Assets/Life Preserver.svg";

const generateCardData = () => {
    const obj = [
        { name: Airplane, id: "id-01", desc: "Airplane", selected: false },
        { name: Backpack, id: "id-02", desc: "Backpack", selected: false },
        { name: BBQ, id: "id-03", desc: "Barbeque", selected: false },
        { name: Ball, id: "id-04", desc: "Ball", selected: false },
        { name: Toys, id: "id-05", desc: "Toys", selected: false },
        { name: Shorts, id: "id-06", desc: "Shorts", selected: false },
        { name: Camera, id: "id-07", desc: "Camera", selected: false },
        { name: Trailer, id: "id-08", desc: "Trailer", selected: false },
        { name: Van, id: "id-09", desc: "Van", selected: false },
        { name: Crab, id: "id-10", desc: "Crab", selected: false },
        { name: Island, id: "id-11", desc: "Island", selected: false },
        { name: Dolphin, id: "id-12", desc: "Dophin", selected: false },
        { name: Drink, id: "id-13", desc: "Drink", selected: false },
        { name: Fan, id: "id-14", desc: "Fan", selected: false },
        { name: Fire, id: "id-15", desc: "Fire", selected: false },
        { name: Cart, id: "id-16", desc: "Cart", selected: false },
        { name: Football, id: "id-17", desc: "Football", selected: false },
        { name: Feet, id: "id-18", desc: "Foot prints", selected: false },
        { name: Hat, id: "id-19", desc: "Hat", selected: false },
        { name: Hotel, id: "id-20", desc: "Hotel", selected: false },
        { name: Cone, id: "id-21", desc: "Ice cream", selected: false },
        { name: Kayak, id: "id-22", desc: "Kayak", selected: false },
        { name: Lifesaver, id: "id-23", desc: "Lifesaver", selected: false },
    ];
    return obj;
};

export default generateCardData;