import { useContext } from "react";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { langContext } from "@/lib/contexts";

export default function LangSwitch() {

    const ctx = useContext(langContext);

    if (!ctx) return <p>Missing language context!</p>;


    return <div className="flex flex-row gap-2">
        <Label htmlFor="language">EN</Label>
        <Switch id="language" defaultChecked={ctx.lang === "pl_PL"} onCheckedChange={(checked) => {
            if (checked) {
                ctx.setLang("pl_PL");
            } else {
                ctx.setLang("en_UK");
            }
        }} />
        <Label htmlFor="language">PL</Label>
    </div>
}
