var veProduct={};veProduct.product_id="",veProduct.product_attribute=[],veProduct.product_detail=[],veProduct.variantValue=[],veProduct.currency={},veProduct.maxPrice="",veProduct.minPrice="",veProduct.init=function(encoded_options){var options=eval("("+$.base64Decode(encoded_options)+")");this.product_id=options.product_id,this.product_attribute=options.product_attribute,this.currency=options.product_currency,this.maxPrice=options.product_max_price,this.minPrice=options.product_min_price,this.product_detail=options.product_detail,veProduct.initElement()},veProduct.initElement=function(){veProduct.initLightbox(),veProduct.updateQty(),veProduct.bindVariantSelector(),veProduct.checkStock(1)},veProduct.initLightbox=function(){lightbox.option({resizeDuration:200,alwaysShowNavOnTouchDevices:!0,wrapAround:!0})},veProduct.updateQty=function(){var a=$("#product-variant-selector-container");$(".product-description-area .product-detail-bottom .icon-minus-qty").bind("click",function(){var b=veProduct.decreaseQty($(".product-description-area .product-detail-bottom .input-qty"));b>0&&veProduct.changeProductQuantity(b),a.length>0?veProduct.changeQtyProductVariantData():veProduct.checkStock(b)}),$(".product-description-area .product-detail-bottom .icon-plus-qty").bind("click",function(){var b=veProduct.increaseQty($(".product-description-area .product-detail-bottom .input-qty"));a.length>0?veProduct.changeQtyProductVariantData():(veProduct.changeProductQuantity(b),veProduct.checkStock(b))}),$(".product-description-area .product-detail-bottom .input-qty").bind("change",function(){var b=$(".product-description-area .product-detail-bottom .input-qty").val();a.length>0?veProduct.changeQtyProductVariantData():(veProduct.changeProductQuantity(b),veProduct.checkStock(b))}),$(".product-description-area .product-detail-bottom .input-qty").bind("keypress",function(a){var b=$(".product-description-area .product-detail-bottom .input-qty").val();veProduct.checkNumber(a,b)}),$(".product-description-area .product-detail-bottom .input-qty").bind("blur",function(){var a=$(".product-description-area .product-detail-bottom .input-qty");a.val()&&0!=a.val()||a.val(1)})},veProduct.decreaseQty=function(a){var b=a.val(),c=parseInt(b)-1;return c>=1&&a.val(c),c},veProduct.increaseQty=function(a){var b=a.val(),c=parseInt(b)+1;return a.val(c),c},veProduct.bindVariantSelector=function(){$("#product-variant-selector-container").length>0&&(veProduct.initProductVariantData(),$("#product-variant-selector-container .product-variant-attr-value").bind("change",function(){var a=veProduct.setProductVariantSelected();veProduct.removeProductVariantPleaseSelectOption($(this)),veProduct.changeProductVariantData(a)}))},veProduct.initProductVariantData=function(){veProduct.initProductAttributeOptions(),veProduct.initProductVariantPrice(),veProduct.changeProductVariantData(veProduct.setProductVariantSelected()),veProduct.initProductVariantAddToCart()},veProduct.initProductVariantPrice=function(){var a=$("#product-variant-selector-container .product-variant-price .product-detail-price");veProduct.minPrice!=veProduct.maxPrice?(a.hide(),$("#product-variant-selector-container .product-variant-price .product-detail-price-original").addClass("no-special-price").text(veProduct.currencyFilter(veProduct.numberPriceFormat(veProduct.minPrice)+" - "+veProduct.numberPriceFormat(veProduct.maxPrice)))):(a.hide(),$("#product-variant-selector-container .product-variant-price .product-detail-price-original").addClass("no-special-price").text(veProduct.currencyFilter(veProduct.minPrice)))},veProduct.setProductVariantSelected=function(){var a=[];return $.each(veProduct.product_attribute,function(b){var c=$('select[name="attr-'+b+"-"+veProduct.product_id+'"]').val();a.push(c)}),a},veProduct.changeProductQuantity=function(a){veProduct.changeProductTotalPrice(a),$(".product-description-area .product-detail-button rp-cart-form").attr("product-quantity",a),$(".product-description-area .product-detail-button add-to-cart").attr("product-quantity",a)},veProduct.changeProductTotalPrice=function(a){var b=$("#product-detail-selector-container .product-detail-total-price-value");null!=veProduct.product_detail.member_price||null!=veProduct.product_detail.special_price?veProduct.readCookie("member[id]")&&null!=veProduct.product_detail.member_price?b.text(veProduct.currencyFilter(veProduct.product_detail.member_price*parseInt(a))):null!=veProduct.product_detail.special_price?b.text(veProduct.currencyFilter(veProduct.product_detail.special_price*parseInt(a))):b.text(veProduct.currencyFilter(veProduct.product_detail.normal_price*parseInt(a))):b.text(veProduct.currencyFilter(veProduct.product_detail.normal_price*parseInt(a)))},veProduct.changeProductVariantPrices=function(){var a=$("#product-variant-selector-container .input-qty").val(),b=$("#product-variant-selector-container .product-variant-price .product-detail-price"),c=veProduct.variantValue;"undefined"==typeof a&&(a=1),null!=c.member_price||null!=c.special_price?(b.show(),veProduct.readCookie("member[id]")&&null!=c.member_price?($("#product-variant-selector-container .product-variant-price .product-detail-price").text(c.member_price_currency),$("#product-variant-selector-container .product-variant-price .product-detail-price-original").removeClass("no-special-price"),$("#product-variant-selector-container .product-variant-total-price-value").text(veProduct.currencyFilter(c.member_price*parseInt(a)))):null!=c.special_price?($("#product-variant-selector-container .product-variant-price .product-detail-price").text(c.special_price_currency),$("#product-variant-selector-container .product-variant-price .product-detail-price-original").removeClass("no-special-price"),$("#product-variant-selector-container .product-variant-total-price-value").text(veProduct.currencyFilter(c.special_price*parseInt(a)))):(b.hide(),$("#product-variant-selector-container .product-variant-price .product-detail-price-original").addClass("no-special-price"),$("#product-variant-selector-container .product-variant-total-price-value").text(veProduct.currencyFilter(c.normal_price*parseInt(a))))):(b.hide(),$("#product-variant-selector-container .product-variant-price .product-detail-price-original").addClass("no-special-price"),$("#product-variant-selector-container .product-variant-total-price-value").text(veProduct.currencyFilter(c.normal_price*parseInt(a))))},veProduct.removeProductVariantPleaseSelectOption=function(a){a.find('option[value=""]').remove()},veProduct.changeProductVariantData=function(a){var b=$("#product-variant-selector-container .input-qty").val(),c=$("#product-variant-selector-container .input-qty"),d=$(".product-description-area .product-detail-bottom .product-variant-out-of-stock"),e=$(".product-description-area .product-detail-bottom .product-detail-stock-have-not-enough .stock-have-not-enough"),f=$(".product-detail-section-loader .product-detail-buy-now-component"),g=$("#product-variant-selector-container .product-variant-image"),h=$("#product-variant-selector-container .product-variant-not-found"),i=$("#product-variant-selector-container .product-variant-price-container"),j=($("#product-variant-selector-container .product-variant-price .product-detail-price"),$("#product-variant-selector-container .product-variant-quantity")),k=$("#product-variant-selector-container .product-variant-price .product-detail-price-original"),l=$("#product-variant-selector-container .product-variant-loading"),m=$("#product-variant-selector-container .product-variant-total-price"),n=!1,o=a,p=new Object,q=!0;$.each(veProduct.product_attribute,function(a,b){p[encodeURIComponent(b.name).replace(/\'/g,"%27")]=o[a],""==encodeURIComponent(o[a])&&(q=!1)}),q===!0?$.ajax({url:"/modules/flexi/controllers/rpshop-process-controller.php",type:"POST",data:{task:"get_product_variant",product_id:veProduct.product_id,attr:p},dataType:"json",async:!1,beforeSend:function(){l.show()},success:function(a){var l=a.product_variant;null!==l?(veProduct.variantValue=l,"hide"!=l.status&&l.status?(g.show(),h.hide(),i.show(),1==a.use_stock&&c.attr("max",l.stock),k.show(),l.image_path?$("#hidable-main .product-images-area .image-wrapper:first img").attr("src",l.image_path):$("#hidable-main .product-images-area .image-wrapper:first img").attr("src","/modules/flexi/images/no-image-square.jpg"),veProduct.changeProductVariantPrices(),$("#product-variant-selector-container .product-variant-price .product-detail-price-original").text(l.normal_price_currency),$("#product-variant-selector-container .input-qty").val()||$("#product-variant-selector-container .input-qty").val(1),1==veProduct.product_detail.use_na_price?m.hide():m.show(),"show"!=l.status?(d.show(),e.hide(),f.hide(),j.hide()):l.stock>0&&null!=l.stock&&l.stock-b<0?(d.hide(),e.show(),f.hide(),j.show()):0==l.stock?(d.show(),e.hide(),f.hide(),j.hide()):(d.hide(),e.hide(),f.show(),j.show()),$(".product-description-area .product-detail-button rp-cart-form").attr("product-sku",l.sku),$(".product-description-area .product-detail-button add-to-cart").attr("product-sku",encodeURIComponent(l.sku).replace(/\'/g,"%27")),$(".product-description-area .product-detail-button rp-cart-form").attr("product-variant-selected","1"),$(".product-description-area .product-detail-button add-to-cart").attr("product-variant-selected","1"),n=!0):(l.status||k.hide(),d.hide(),e.hide(),f.show(),g.hide(),h.show(),i.hide(),j.hide(),m.hide(),$(".product-description-area .product-detail-button rp-cart-form").attr("product-variant-selected","0"),$(".product-description-area .product-detail-button add-to-cart").attr("product-variant-selected","0"))):(k.hide(),d.hide(),e.hide(),f.show(),g.hide(),h.show(),i.hide(),j.hide(),m.hide())},complete:function(){l.hide()}}):(k.show(),d.hide(),e.hide(),f.show(),g.hide(),h.hide(),i.show(),j.show(),l.hide(),m.hide())},veProduct.changeQtyProductVariantData=function(){{var a=$("#product-variant-selector-container .input-qty").val(),b=$("#product-variant-selector-container .input-qty"),c=$("#product-variant-selector-container .product-variant-out-of-stock"),d=$(".product-description-area .product-detail-bottom .product-detail-stock-have-not-enough .stock-have-not-enough"),e=$(".product-detail-section-loader .product-detail-buy-now-component"),f=$("#product-variant-selector-container .product-variant-quantity");$("#product-variant-selector-container .product-variant-total-price-value")}b.attr("max")&&(parseInt(a)>parseInt(b.attr("max"))?(c.hide(),d.show(),e.hide(),f.show()):(c.hide(),d.hide(),e.show(),f.show())),$(".product-description-area .product-detail-button rp-cart-form").attr("product-quantity",a),$(".product-description-area .product-detail-button add-to-cart").attr("product-quantity",a),veProduct.changeProductVariantPrices()},veProduct.readCookie=function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return null},veProduct.initProductAttributeOptions=function(){var a="";a+="<table>",$.each(veProduct.product_attribute,function(b,c){a+="<tr>",a+='<td class="product-variant-attr-label">',a+='<span class="product-variant-attr">'+c.name+" </span>",a+="</td>",a+='<td class="product-variant-attr-value-label">',a+='<select class="product-variant-attr-value" name="attr-'+b+"-"+veProduct.product_id+'">',a+='<option value="">'+_T("__product__กรุณาเลือก")+"</option>",$.each(c.value,function(b,c){a+='<option value="'+encodeURIComponent(c).replace(/\'/g,"%27")+'">'+c+"</option>"}),a+="</select>",a+="</td>",a+="</tr>"}),a+="</table>",$("#product-variant-selector-container .product-variant-attr-container").html(a)},veProduct.initProductVariantAddToCart=function(){$(".product-variant-buy-now button").click(function(){$("#cboxClose").click()}),$(".product-variant-add-to-cart button").click(function(){$("#cboxClose").click()})},veProduct.checkStock=function(a){var b=$(".product-description-area .product-detail-bottom .product-detail-stock-have-not-enough .stock-have-not-enough"),c=$(".product-description-area .product-detail-bottom .product-detail-button"),d=$(".product-description-area .product-detail-bottom .input-qty").attr("max");"contact"!=veProduct.product_detail.order_style&&(d?parseInt(a)>parseInt(d)?(c.hide(),b.show()):(c.show(),b.hide()):b.hide())},veProduct.checkNumber=function(a,b){var c=a;c||(c=window.event);var d=c.which?c.which:c.keyCode;if(d>31&&(48>d||d>57))c.preventDefault();else{if(b||48!=d)return!0;c.preventDefault()}},veProduct.currencyFilter=function(a){if("-"===a)return a;var b="";return b="iso"===veProduct.currency.display?veProduct.currency.code:"symbol"===veProduct.currency.display?veProduct.currency.symbol:"th"===veMain.language.toLowerCase()?veProduct.currency.name_th:veProduct.currency.name_en,"prefix"===veProduct.currency.position?b+" "+veProduct.numberPriceFormat(a):veProduct.numberPriceFormat(a)+" "+b},veProduct.numberPriceFormat=function(a){if(a.toString().indexOf("-")>=0)return a;a=parseFloat(a).toFixed(2);var b=a.toString().split(".");return b[0]=b[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),b.join(".")};