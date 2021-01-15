import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'image-text-reversed',
    label: 'sw-cms.blocks.imageText.imageTextReversed.label',
    category: 'text-image',
    component: 'sw-cms-block-image-text-reversed',
    previewComponent: 'sw-cms-preview-image-text-reversed',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        left: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: `
                                <p class="headline-uppercase"><span class="color-yellow">+</span> HANDGESCHMIEDETE SEELENSTÜCKE</p>
                                <h2>Messerschmied Martin Huber</h2>
                                <p>Ich habe mich auf die Herstellung handgemachter Küchenmesser, Jagdmesser und Outdoormesser spezialisiert.
                                    Mein Team und ich schmieden alle Klingen selbst - von der Herstellung aufwändiger Damaststähle über die Formgebung bis hin zur Detailarbeit findet der ganze Prozess in meiner Werkstatt in Garsten in Oberösterreich statt.
                                    Der Großteil unserer Arbeiten sind auf Kundenwunsch hin gefertigte Einzelstücke. Gerne fertigen wir auch für Sie ein Unikat nach Ihren Wunschvorstellungen.
                                    Ich freue mich auf Ihre Anfrage!</p>
                                <a href="#">Erfahre mehr <span class="color-yellow"> > </span></a>
                        `.trim()
                    }
                }
            }
        },
        right: {
            type: 'image',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'standard' }
                },
                data: {
                    media: {
                        url: '/huberknives/static/img/cms/person.jpg'
                    }
                }
            }
        }
    }
});
