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
                                <div class="top-text">
                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="162" viewBox="0 0 42 162">
                                  <text id="_" data-name="„" transform="translate(0 126)" fill="#fff" font-size="135" font-family="LeagueGothic-Regular, League Gothic" letter-spacing="0.027em" opacity="0.902"><tspan x="0" y="0">„</tspan></text>
                                </svg>
                                </div>
                                <h2>Unser Ziel ist es, Tiernahrung zu entwickeln, die ohne Wenn und Aber die tatsächlichen Bedürfnisse der Tiere in den Mittelpunkt stellt.</h2>
                                <p>- Leitsatz von Claus und Jörg Lefers</p>
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
                        url: '/doger/static/img/cms/dog.jpg'
                    }
                }
            }
        }
    }
});
