import { BackendModule, ReadCallback, ResourceKey } from "i18next";

export class TranslationsLoader implements BackendModule {
    readonly type = "backend" as const;
    init(): void {}
    async read(locale: string, ns: string, callback: ReadCallback) {
        try {
            const translations = await prisma.translation.findMany({
                where: { ns, locale },
                select: { key: true, value: true },
            });
            const result: ResourceKey = {};
            for (const translation of translations) {
                result[translation.key] = translation.value;
            }

            callback(null, result);
        } catch (error) {
            callback(error, null);
        }
    }
}

// @ts-expect-error
TranslationsLoader.type = 'backend';