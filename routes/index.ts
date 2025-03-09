export default defineEventHandler(async (event) => {
    const {lng = 'en'} = getQuery(event);
    const i18n = await useI18N(event, lng as string);

    return {
        name: i18n.t('name'),
        lng: i18n.language,
        bio: i18n.t('bio'),
    };
});