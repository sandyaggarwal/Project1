var searchResult = function (searchText){
}

//console.log("regionProperty: " + regionProperty + " for " + currentNodePath, layout);


var templateText =
        "{{#unless layout}}" +
        "    <div class=\"container CardBandaLargaDefault\">" +
        "        <div class=\"card__container\">" +
        "            <div class=\"card__content-wrapper\" >" +
        "                {{#each products as |aProduct pKey|}}" +
        "" +
        "                {{#if aProduct.offerstatus}}" +
        "                <div class='card__card-container pink-orange'>" +
        "                {{else}}  " +
        "                <div class='card__card-container' >" +
        "                {{/if}}" +
        "                    <div class=\"card__background\">" +
        "                        <div class=\"card__gradient-container\"></div>" +
        "                    </div>" +
        "                    <div class=\"card__card-content-wrapper\">" +
        "                        <div>" +
        "                            <div class=\"__hideOnlyOnMobile\">" +
        "                                <div class=\"card__header_content\">" +
        "                                    <span class=\"card__header_flag\">{{aProduct.offertext1}}</span>" +
        "                                    <p>" +
        "                                        <span> {{aProduct.[jcr:title]}}</span>" +
        "                                    </p>" +
        "                                    <span class=\"card__header_subtitle\">{{aProduct.offertext2}}</span>" +
        "                                </div>" +
        "                                <div class=\"card__body_content\">" +
        "                                    <ul class=\"card__list-container __hideToEnableDropdown\">" +
        "                                    {{#each add_ons as |anAddOn addOnKey|}}" +
        "                                        <li class=\"card__list-item \" style=\"background-image: url(&quot;{{anAddOn.icon}}&quot;);\" >" +
        "                                            <strong class=\"\"  >{{anAddOn.label}}</strong>" +
        "                                            <span >{{anAddOn.sub_text}}</span>" +
        "                                            <div class=\"card__icons-wrapper large-up\">" +
        "                                                {{#each subs as |subAddOn subAddOnKey|}}" +
        "" +
        "                                                    <img class=\"colecao-oi\" src=\"{{subAddOn.icon}}\"  >" +
        "                                                {{/each}}" +
        "                                            </div>" +
        "                                        </li>" +
        "                                        {{/each}}" +
        "                                    </ul>" +
        "                                    <div class=\"card__price_container\">" +
        "                                        <div class=\"price price--small\">" +
        "                                            <span class=\"interger\">{{aProduct.price_int}}</span><span class=\"side-wrapper\"><span class=\"cents\">,{{aProduct.price_dec}}</span>" +
        "                                                <span class=\"suffix\">/MÊS</span>" +
        "                                            </span>" +
        "                                        </div>" +
        "                                    </div>" +
        "                                    <a class=\"card__cta-button\">Selecione</a>" +
        "                                    <div class=\"card__combo_text\">" +
        "                                        <span>{{aProduct.subtext1}}</span>" +
        "                                    </div>" +
        "                                    <div class=\"card__bandwidth_text __hideToEnableDropdown\">" +
        "                                        <span class=\"__download\">{{aProduct.subtext2}}</span>" +
        "                                    </div>" +
        "                                    <div id=\"__WRAPPER__\" class=\"__showToEnableDropdown\">" +
        "                                        <div class=\"card__dropdown-container card__show-more-wrapper\">" +
        "                                            <div class=\"card__bg_dropdown\">" +
        "                                                <div class=\"card__bandwidth_text\">" +
        "                                                    <span class=\"__download\">{{aProduct.subtext2}}</span>" +
        "                                                </div>" +
        "                                                <ul class=\"card__list-container __hideToEnableDropdown\">" +
        "                                                {{#each add_ons as |anAddOn addOnKey|}}" +
        "                                                    <li class=\"card__list-item \" style=\"background-image: url(&quot;{{anAddOn.icon}}&quot;);\" >" +
        "                                                        <strong class=\"\"  >{{anAddOn.label}}</strong>" +
        "                                                        <span >{{anAddOn.sub_text}}</span>" +
        "                                                        <div class=\"card__icons-wrapper large-up\">" +
        "                                                            {{#each subs as |subAddOn subAddOnKey|}}" +
        "" +
        "                                                                <img class=\"colecao-oi\" src=\"{{subAddOn.icon}}\"  >" +
        "                                                            {{/each}}" +
        "                                                        </div>" +
        "                                                    </li>" +
        "                                                    {{/each}}" +
        "                                                </ul>" +
        "                                            </div>" +
        "                                        </div>" +
        "                                        <div id=\"card__show-less-button-desktop\" class=\"card__show-less-button\">" +
        "                                        </div>" +
        "                                        <div id=\"card__show-more-button-desktop\" class=\"card__show-more-button\">Mais detalhes</div>" +
        "                                    </div>" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class=\"__showOnlyOnMobile card__click-handler-relative-wrapper\">" +
        "                                <div class=\"card__mobile-flag\">" +
        "                                    <div>" +
        "                                        <span>{{aProduct.offertext1}}</span>" +
        "                                        <span>{{aProduct.offertext2}}</span>" +
        "                                    </div>" +
        "                                </div>" +
        "                                <div class=\"card__mobile-row\">" +
        "                                    <p class=\"card__plan-label\">" +
        "                                        <span>${aProduct[\"jcr:title\"]}</span>" +
        "                                    </p>" +
        "                                    <div class=\"card__price_container\">" +
        "                                        <div class=\"price price--small\">" +
        "                                            <span class=\"interger\">{{aProduct.price_int }}</span>" +
        "                                            <span class=\"side-wrapper\">" +
        "                                                <span class=\"cents\">,{{aProduct.price_dec}}</span>" +
        "                                                <span class=\"suffix\">" +
        "                                                    /MÊS" +
        "                                                </span>" +
        "                                            </span>" +
        "                                        </div>" +
        "                                    </div>" +
        "                                </div>" +
        "                                <div class=\"card__mobile-row\">" +
        "                                    <div class=\"card__logos_channel_text\">" +
        "                                        <div class=\"card__list-item\">" +
        "                                        {{#each add_ons as |anAddOn anAddOnKey|}}" +
        "                                            <strong>" +
        "                                                {{anAddOn.label}}" +
        "                                            </strong>" +
        "                                            <span>{{anAddOn.sub_text}}</span>" +
        "                                        {{/each}}" +
        "                                        </div>" +
        "                                    </div>" +
        "                                    <div class=\"card__cta_wrapper\">" +
        "                                        <a class=\"card__cta-button\">Selecione</a>" +
        "                                    </div>" +
        "                                </div>" +
        "                                <div class=\"card__mobile-row column\">" +
        "                                    <div class=\"card__combo_text\">" +
        "                                        <span>${aProduct.subtext1}</span>" +
        "                                    </div>" +
        "                                    <div class=\"card__bandwidth_text\">" +
        "                                        <span class=\"__download\">${aProduct.subtext2}</span>" +
        "                                    </div>" +
        "                                </div>" +
        "                            </div>" +
        "                            <a class=\"card__click-handler\">Selecione</a>" +
        "                        </div>" +
        "                    </div>" +
        "                </div>" +
        "              {{/each}}" +
        "            </div>" +
        "            </div>" +
        "        </div>" +
        "    </div>" +
        "    {{/unless}}" +
        "    {{#if layout}}" +
        "    <div class=\"product wrap wrap--loaded\">" +
        "        <div class=\"product-content\">" +
        "            <div class=\"main\">" +
        "                <div class=\"table\">" +
        "                    <div class=\"container\">" +
        "                    {{#each products as |aProduct prodKey|}}" +
        "                        <div class=\"table__product table--internet-movel\">" +
        "                            <div class=\"table__overs\">" +
        "                            </div>" +
        "                            <div class=\"table__aside\">" +
        "                                <div class=\"table__aside__head-title medium-up\"><span class=\"\">Dispositivo e plano</span>" +
        "                                </div>" +
        "                                <div class=\"table__aside__content\">" +
        "                                    <div class=\"table__aside__icons\">" +
        "                                        {{#each icons as |icon iconKey|}}" +
        "" +
        "                                        <img src=\"{{icon.path}}\" width=\"30\" height=\"40\"/>                                                            " +
        "" +
        "                                        {{/each}}" +
        "                                    </div>" +
        "                                    <div class=\"table__aside__title\">" +
        "                                        <span class=\"\">" +
        "                                            <span class=\"small-only\">{{aProduct.[jcr:title]}}</span>" +
        "                                            <span class=\"medium-up\">{{aProduct.[jcr:title]}}</span>" +
        "" +
        "                                        </span>" +
        "                                    </div>" +
        "                                    <div class=\"table__aside__subtitle\">" +
        "                                        <span>" +
        "                                            <p class=\"medium-up\">{{aProduct.desc}}</p>" +
        "                                        </span>" +
        "                                    </div>" +
        "                                </div>" +
        "                                <div class=\"table__aside__bracer medium-up\">" +
        "                                </div>" +
        "                            </div>" +
        "                            <div class=\"table__scroll\">" +
        "                                <table>" +
        "                                    <colgroup>" +
        "                                        <col class=\"table__scroll__col-0\">" +
        "                                        <col class=\"table__scroll__col-1\">" +
        "                                        <col class=\"table__scroll__col-2\">" +
        "                                    </colgroup>" +
        "                                    <thead>" +
        "                                        <tr>" +
        "                                            <th>" +
        "                                            </th>" +
        "                                            <th><span class=\"\">Franquia</span>" +
        "                                            </th>" +
        "                                            <th class=\"large-up\">" +
        "                                            </th>" +
        "                                        </tr>" +
        "                                    </thead>" +
        "                                    <tbody>" +
        "                                    {{#each variants as |aVariant variantKey|}}" +
        "                                        <tr class=\"table--internet-movel\">" +
        "                                            <td>" +
        "                                                <div class=\"price price--free\"><span class=\"price__integer\">{{aVariant.price_int}} </span>" +
        "                                                    <span class=\"price__side-wrapper\"><span class=\"price__cents\">,{{aVariant.price_dec}}</span><span class=\"price__suffix\">/mês</span>" +
        "                                                    </span>" +
        "                                                </div><span>" +
        "                                                </span>" +
        "                                            </td>" +
        "                                            <td><span class=\"\">{{aVariant.offertext1}}<br>" +
        "                                                    <small>{{aVariant.offertext2_1}}<br><span class=\"medium-up\">{{aVariant.offertext2_2}}</span>" +
        "                                                    </small>" +
        "                                                </span></td>" +
        "                                            <td class=\"large-up\"><span class=\"button button--thin\">Selecione</span>" +
        "                                                <small>{{aVariant.subtext1}}</small>" +
        "                                            </td>" +
        "                                        </tr>" +
        "                                        {{/each}}" +
        "                                    </tbody>" +
        "                                </table>" +
        "                            </div>" +
        "                            <div class=\"table__expansor\">" +
        "                                <button class=\"table__expansor__button\"><span class=\"\"><span class=\"medium-down\">View More</span><span class=\"large-up\"></span>" +
        "                                    </span><span class=\"isvg loaded table__expansor__button__arrow medium-up\">" +
        "                                        <svg enable-background=\"new 0 0 100 100\" id=\"arrow___-1769842003\" version=\"1.1\" viewBox=\"0 0 100 100\" x=\"0px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" y=\"0px\">" +
        "                                        <g>" +
        "                                        <path d=\"M97.9,24.4c-3.3-3.3-7.8-2.2-11.1,0L50.3,58.7L13.7,25.5c-3.3-3.3-7.8-4.4-11.1-1.1c-3.3,2.2-3.3,7.8-1.1,11.1l43.2,41  c2.2,1.1,3.3,1.1,5.5,1.1s3.3-1.1,4.4-2.2l43.2-41C101.2,31,100.1,26.6,97.9,24.4z\">" +
        "                                        </path>" +
        "                                        </g>" +
        "                                        </svg>" +
        "                                    </span>" +
        "                                </button>" +
        "                            </div>" +
        "                            <div class=\"table__selector\" style=\"visibility: hidden;\">" +
        "                            </div><span></span>" +
        "                        </div>" +
        "                    {{/each}}" +
        "                    </div>" +
        "                </div>" +
        "            </div>" +
        "        </div>" +
        "    </div>" +
        "    {{/if}}";

var loader = function (rP, lO, cNP, nN) {
//    var source = $("#list-template").html();
    var template = Handlebars.compile(templateText);
    var regionProperty = rP;//"${properties.collectionpath @ context='scriptString'}";
    var layout = lO;//"${properties.rowlayout @ context='scriptString'}";
    var currentNodePath = cNP;// "${currentNode.path @ context='scriptString'}";

    $.ajax({
        url: regionProperty + '.-1.json',
        cache: false
    }).done(function (data) {
        // console.log("collection ", data);
        var products = [];
        var deferreds = [];

        var processProduct = function (product_details) {
            var aProduct = {};

            if (product_details.price !== undefined && product_details.price !== "") {
                aProduct.add_ons = {};

                for (var product_attrib in product_details) {

                    if ((typeof product_details[product_attrib]) !== 'object'
                            && (typeof product_details[product_attrib]) !== 'function'
                            /* && product_attrib.indexOf("jcr:") < 0
                             && product_attrib.indexOf("sling:") < 0
                             && product_attrib.indexOf("cq:") < 0 //*/
                            ) {

                        if (product_attrib.indexOf("addon") >= 0)
                        {

                            var vals = product_details[product_attrib].split("::");

                            //this is product addon

                            var addon_type = product_attrib.replace("addon_", "");

                            var addon_subs = addon_type.split("_");

                            //   console.log(addon_type, addon_subs);

                            if (addon_subs.length > 1)
                            {
                                //this is sub add on

                                if (aProduct.add_ons[addon_subs[0]] === undefined)
                                {
                                    aProduct.add_ons[addon_subs[0]] = {subs: {}};
                                } else if (aProduct.add_ons[addon_subs[0]].subs === undefined)
                                {
                                    aProduct.add_ons[addon_subs[0]].subs = {};
                                }

                                aProduct.add_ons[addon_subs[0]]["subs"][addon_subs[1]] = {
                                    icon: vals[0],
                                    label: vals[1],
                                    sub_text: vals[2]
                                };
                            } else {
                                aProduct.add_ons[addon_type] = {
                                    icon: vals[0],
                                    label: vals[1],
                                    sub_text: vals[2]
                                };
                            }

                        } else {

                            aProduct[product_attrib] = product_details[product_attrib];

                        }
                    }
                }

                aProduct.price_int = aProduct.price.split('.')[0];
                aProduct.price_dec = aProduct.price.split('.')[1];
            } else
            {
                //this is variant
                //get ICON CSVs
                //iterate OBJECT types

                aProduct["jcr:title"] = product_details["jcr:title"];
                aProduct["jcr:description"] = product_details["jcr:description"];

                // console.log(aProduct["jcr:description"]);
                aProduct.variants = [];

                var icons = product_details.subtext2.split(",");
                aProduct.icons = [];

                for (var i in icons) {
                    aProduct.icons[aProduct.icons.length] = {
                        "id": i,
                        "path": "/content/dam/zagatti-oi/" + icons[i] + ".svg"
                    };
                }

                for (var product_attrib in product_details) {
                    if ((typeof product_details[product_attrib]) === 'object' && product_details[product_attrib]["cq:commerceType"] === "variant") {
                        //this is another product variant

                        aProduct.variants[aProduct.variants.length] = {
                            price: product_details[product_attrib].price,
                            price_int: product_details[product_attrib].price.split('.')[0],
                            price_dec: product_details[product_attrib].price.split('.')[1],
                            offertext1: product_details[product_attrib].offertext1,
                            offertext2_1: product_details[product_attrib].offertext2.split("::")[0],
                            offertext2_2: product_details[product_attrib].offertext2.split("::")[1],
                            subtext1: product_details[product_attrib].subtext1
                        };

                    }
                }

            }


            return aProduct;

        };

        $.each(data['sling:members']['sling:resources'], function (index, productPath) {
            deferreds.push(
                    $.ajax({
                        url: productPath + ".-1.json",
                        cache: false
                    }).done(function (product) {

                var processedProd = processProduct(product);

                products.push(processedProd);
            })
                    );
        });
        $.when.apply($, deferreds).always(function () {
            //   console.log('products ', products);
            var context = layout == "true" ? {layout: true, "products": products} : {"products": products};
            //   console.log("context ", context);
            var html = template(context);
            //console.log("HTML: ", html);
            $("#mainDiv-" + nN).replaceWith(html);
        });
    });
};
