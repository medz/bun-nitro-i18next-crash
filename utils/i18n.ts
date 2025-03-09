import { H3Event } from "h3";
import i18next from "i18next";

declare module "h3" {
    interface H3Event {
        i18n: typeof i18next;
    }
}

declare module "nitropack/types" {
    interface NitroApp {
        lngI18nInstances: Map<string, typeof i18next>;
    }
}

export const useI18N = async (event: H3Event, lng: string) => {
    if (event.i18n && event.i18n.language === lng) {
        return event.i18n;
    }

    const nitro = useNitroApp();
    if (!nitro.lngI18nInstances) {
        nitro.lngI18nInstances = new Map();
    }

    let i18n = nitro.lngI18nInstances.get(lng);
    if (i18n) {
        event.i18n = i18n;
        nitro.lngI18nInstances.set(lng, i18n);
        return i18n;
    }

    i18n = nitro.i18n.cloneInstance({lng});
    await i18n.changeLanguage(lng);

    event.i18n = i18n;
    nitro.lngI18nInstances.set(lng, i18n);
    return i18n;
};