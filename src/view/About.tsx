import { useActionData } from "react-router";

export default function () {
    let actionData = useActionData();
    return <div className="about">
        {actionData}
    </div>
}