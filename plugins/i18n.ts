import i18next from "i18next";


declare module "nitropack/types" {
    interface NitroApp {
        i18n: typeof i18next;
    }
}

export default defineNitroPlugin(async nitro => {
    if (nitro.i18n) return nitro.i18n;

    const i18n = i18next.createInstance({
        ns: 'demo',
        defaultNS: "demo",
        fallbackLng: "en",
        supportedLngs: ['en', 'zh'],
    });
    await i18n.use(TranslationsLoader).init();
    nitro.i18n = i18n;
});