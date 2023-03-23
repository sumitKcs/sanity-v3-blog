import type { DefaultDocumentNodeResolver } from "sanity/desk";
import  iframe from "sanity-plugin-iframe-pane"


export const getDefaultdocumentNode: DefaultDocumentNodeResolver = (
    S,
    { schemaType } 
    ) => {
        if(schemaType == "post") {
            return S.document().views([
                S.view.form(),
                S.view
                    .component(iframe)
                    .options({
                        url: `${
                            process.env.NEXT_PUBLIC_VERCEL_URL || 
                            "http://localhost:3000"
                        }/api/preview`,
                        //optional: set the default size
                        defaultSize: `desktop`,//default `desktop` 
                        //optional: add a reload button or reload a new document revisions
                        reload: {
                            button: true, //default `undefined
                        },
                        //optional: pass arguments to the underlying `iframe` element
                        //see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
                        attributes: {},

                    })
                    .title("Preview")
            ])
        }
    }
   
