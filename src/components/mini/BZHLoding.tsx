import { Label } from "@heroui/react";
import { ClimbingBoxLoader } from 'react-spinners'

type BZHLoding = { loding: boolean; lodingLabel?: string; children: React.ReactNode }
export default function ({ loding, lodingLabel = "载入中..", children }: BZHLoding) {
    return <>
        {loding ?
            <div className="flex flex-col justify-center items-center h-full w-full">
                <ClimbingBoxLoader color="var(--accent)" />
                {/* <Label className="text-accent text-center">{lodingLabel}</Label> */}
            </div> :
            children
        }
    </>
}