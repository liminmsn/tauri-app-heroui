import { Label } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router";

export default function () {
    const navigate = useNavigate()

    return <div className="top_bar_btn flex">
        <Label onClick={() => navigate('/', {})}>
            <Icon className=" cursor-pointer active:scale-95" icon="ic:round-home" height="24" />
        </Label>
        <Label onClick={() => navigate(-1)}>
            <Icon className=" cursor-pointer active:scale-95" icon="ic:baseline-arrow-circle-left" height="24" />
        </Label>
        <Label onClick={() => navigate(1)}>
            <Icon className=" cursor-pointer active:scale-95" icon="ic:baseline-arrow-circle-right" height="24" />
        </Label>
    </div>
}