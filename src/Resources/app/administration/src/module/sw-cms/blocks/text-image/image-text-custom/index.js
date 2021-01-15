import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'image-text-custom',
    label: 'sw-cms.blocks.imageText.imageTextCustom.label',
    category: 'text-image',
    component: 'sw-cms-block-image-text-custom',
    previewComponent: 'sw-cms-preview-image-text-custom',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        left: {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'standard' }
                },
                data: {
                    media: {
                        url: '/doger/static/img/cms/about.jpg'
                    }
                }
            }
        },
        right: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                                <h2>Tiernahrung mit Leidenschaft und Know-how.</h2>
                                <p>Das Fundament von ALLCO und unserem Erfolg ist unsere Produktqualität. Unser Versprechen: Ob Hund, Katze, Pferd, Fisch oder Nager - unser Futter entspricht den Bedürfnissen der jeweiligen Tierart, abgestimmt auf ihr Alter und ihre Lebensbedingungen. Unsere 30 tierbegeisterten Mitarbeiter geben dabei täglich alles, für gesunde Tiere und zufriedene Kunden. Seit Dezember 2017 gehört ALLCO zur tschechischen VAFO-Gruppe und bietet exklusiv für den deutschen Markt die Flagship-Marke BRIT sowie Carnilove Hund & Katze an.</p>
                                <a class="btn btn-primary" href="#">MEHR ÜBER UNS</a>
                        `.trim()
                    }
                }
            }
        }
    }
});
