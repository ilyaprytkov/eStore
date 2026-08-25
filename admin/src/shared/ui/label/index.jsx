import { View } from "@/features/view";
import { cn } from "@/shared/lib/utils";

export default function Label({className, required, children}) {
    return (
        <div className={cn("text-sm lg:text-base h-fit", className)}>
            <label>{children}</label>
            <View.Condition if={required}>
                <span className="text-red-500">*</span>
            </View.Condition>
        </div>
    )
}