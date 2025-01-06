import { ReactElement } from "react";

export default function CardNegocios({ title, text, icon, color }: { title: string, text: string, icon: ReactElement, color: string }) {
    return (
        <div>
            <div className={`p-2 w-[50px] h-[50px] bg-${color}-600 flex items-center justify-center`}>
                {icon}
            </div>
            <h3 className="font-bold text-[1.1rem] mt-3">{title}</h3>
            <hr className={`h-[8px] bg-purple-600 w-[90px]`} />
            <p className="w-[230px] mt-5">
                {text}
            </p>
        </div>
    )
}