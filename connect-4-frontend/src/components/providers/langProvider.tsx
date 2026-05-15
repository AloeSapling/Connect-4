import { DEFAULT_LANGUAGE } from "@/lib/config";
import { langContext } from "@/lib/contexts";
import { textsMap, type Languages } from "@/lib/lang";
import React, { useState } from "react"

export default function LangProvider({ children }: React.PropsWithChildren) {
    const storedLanguage = sessionStorage.getItem("language") as Languages | null;

    const [language, setLanguage] = useState<Languages>(storedLanguage || DEFAULT_LANGUAGE);

    const setLanguageAndStorage = (lang: Languages) => {
        sessionStorage.setItem("language", lang);
        setLanguage(lang);
    }

    return <langContext.Provider value={{
        texts: textsMap[language],
        lang: language,
        setLang: setLanguageAndStorage
    }}>
        {children}
    </langContext.Provider>
}
