"use strict";(self.webpackChunktermmy=self.webpackChunktermmy||[]).push([[735],{9274:(E,P,c)=>{c.d(P,{Q:()=>L});var t=c(4650),e=c(7436),y=c(2340),p=c(4006),T=c(8262),C=c(3681),Z=c(5048),f=c(7296),S=c(4329),b=c(6895),A=c(2248),M=c(3955);function l(_,O){1&_&&(t.TgZ(0,"div"),t._UZ(1,"app-loader"),t.qZA())}function x(_,O){1&_&&(t.TgZ(0,"div",15),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&_&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"paymentProcessing.needAcceptTermsAndPrivacyPolicy")," "))}function o(_,O){1&_&&t._UZ(0,"app-loader-small")}function g(_,O){if(1&_){const s=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"ngx-stripe-elements",4),t._UZ(3,"ngx-stripe-payment",5),t.qZA()(),t.TgZ(4,"div",6)(5,"input",7),t.NdJ("ngModelChange",function(d){t.CHM(s);const v=t.oxw();return t.KtG(v.accept=d)}),t.qZA(),t.TgZ(6,"label",8),t._uU(7),t.ALo(8,"translate"),t.TgZ(9,"a",9),t._uU(10),t.ALo(11,"translate"),t.qZA(),t._uU(12),t.ALo(13,"translate"),t.TgZ(14,"a",10),t._uU(15),t.ALo(16,"translate"),t.qZA(),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.YNc(19,x,3,3,"div",11),t.qZA(),t.TgZ(20,"div",12)(21,"button",13),t.NdJ("click",function(){t.CHM(s);const d=t.oxw();return t.KtG(d.pay())}),t.YNc(22,o,1,0,"app-loader-small",0),t._UZ(23,"span",14),t._uU(24),t.ALo(25,"translate"),t.qZA()()()}if(2&_){const s=t.oxw();t.xp6(2),t.Q6J("stripe",s.stripe)("elementsOptions",s.elementsOptions),t.xp6(1),t.Q6J("appearance",s.appearance),t.xp6(2),t.Q6J("ngModel",s.accept),t.xp6(2),t.hij(" ",t.lcZ(8,13,"paymentProcessing.acceptTermsAndPrivacyPolicyOne")," "),t.xp6(3),t.Oqu(t.lcZ(11,15,"paymentProcessing.acceptTermsAndPrivacyPolicyTerms")),t.xp6(2),t.hij(" ",t.lcZ(13,17,"paymentProcessing.acceptTermsAndPrivacyPolicyTermsAnd")," "),t.xp6(3),t.Oqu(t.lcZ(16,19,"paymentProcessing.acceptTermsAndPrivacyPolicyPrivacyPolicy")),t.xp6(2),t.hij(" ",t.lcZ(18,21,"paymentProcessing.acceptTermsAndPrivacyPolicyTwo")," "),t.xp6(2),t.Q6J("ngIf",s.submitted&&!s.accept),t.xp6(2),t.Q6J("disabled",!(s.accept&&!s.paying)),t.xp6(1),t.Q6J("ngIf",s.paying),t.xp6(2),t.hij("\xa0 ",s.buttonText?s.buttonText:s._helpService.replaceText(t.lcZ(25,23,"paymentProcessing.buttonText"),"#amount",s.amount),"")}}let L=(()=>{class _{constructor(s,u,d,v,I){this._service=s,this._helpService=u,this._storageService=d,this._translate=v,this._toastr=I,this.executeMethodEmitter=new t.vpe,this.elementsOptions={locale:"en"},this.stripe=this.stripeAccount?(0,e.kv)(y.N.STRIPE_KEY,{stripeAccount:this.stripeAccount}):(0,e.kv)(y.N.STRIPE_KEY),this.appearance={theme:"stripe",labels:"floating",variables:{colorPrimary:"#673ab7"}},this.paying=!1,this.accept=!1,this.clientData=new p.cw({firstname:new p.NI("",p.kI.required),lastname:new p.NI("",p.kI.required),email:new p.NI("",[p.kI.required,p.kI.email]),telephone:new p.NI("",[p.kI.required])})}ngOnInit(){this.setPaymentProcessingLanguage()}ngOnChanges(s){this.getProfileInfo(),this.createPaymentIntent()}setPaymentProcessingLanguage(){this.elementsOptions.locale="sr-Latn"===this._storageService.getSelectedLanguage(!0)?"hr":this._storageService.getSelectedLanguage(!0),this._translate.onLangChange.subscribe(s=>{this.elementsOptions.locale="sr-Latn"===s.lang?"hr":this._storageService.getSelectedLanguage(!0)})}getProfileInfo(){this._service.callGetMethod("/api/getProfileInfo","").subscribe(s=>{if(s.length){const u=s[0];this.clientData.setValue({firstname:u.firstname,lastname:u.lastname,email:u.email,telephone:null})}})}createPaymentIntent(){this._service.callPostMethod("api/payment/stripe/createPaymentIntent",{amount:Number(this.amount),stripeAccount:this.stripeAccount}).subscribe(s=>{this.elementsOptions.clientSecret=s})}pay(){this.paying=!0,this.stripe.confirmPayment({elements:this.paymentElement.elements,confirmParams:{payment_method_data:{billing_details:{name:this.clientData.value.firstname+" "+this.clientData.value.lastname,email:this.clientData.value.email,phone:this.clientData.value.telephone}}},redirect:"if_required"}).subscribe({next:s=>{console.log(s),s.error||!this.accept?(this._toastr.showErrorCustom(this._translate.instant("paymentProcessing.errorPayment")),this.paying=!1):"succeeded"===s.paymentIntent.status&&(this.paying=!1,this.executeMethodEmitter.emit())},error:s=>{console.log(s),this.paying=!1}})}static#e=this.\u0275fac=function(u){return new(u||_)(t.Y36(T.f),t.Y36(C.s),t.Y36(Z.V),t.Y36(f.sK),t.Y36(S.l))};static#t=this.\u0275cmp=t.Xpm({type:_,selectors:[["app-payment-processing"]],viewQuery:function(u,d){if(1&u&&t.Gf(e._$,5),2&u){let v;t.iGM(v=t.CRH())&&(d.paymentElement=v.first)}},inputs:{amount:"amount",buttonText:"buttonText",stripeAccount:"stripeAccount"},outputs:{executeMethodEmitter:"executeMethodEmitter"},features:[t.TTD],decls:2,vars:2,consts:[[4,"ngIf"],["style","margin-bottom: 10px",4,"ngIf"],[2,"margin-bottom","10px"],[1,"mb-2"],[3,"stripe","elementsOptions"],[3,"appearance"],[1,"custom-control","custom-checkbox"],["type","checkbox","id","accept",1,"custom-control-input",3,"ngModel","ngModelChange"],["for","accept",1,"custom-control-label"],["href","https://termmy.com/terms","target","_blank"],["href","https://termmy.com/privacy-policy","target","_blank"],["class","error",4,"ngIf"],[1,"pt-2","text-center"],[1,"btn","btn-primary","w-50","payment",3,"disabled","click"],[1,"fa","fa-shopping-cart"],[1,"error"]],template:function(u,d){1&u&&(t.YNc(0,l,2,0,"div",0),t.YNc(1,g,26,25,"div",1)),2&u&&(t.Q6J("ngIf",!d.elementsOptions.clientSecret),t.xp6(1),t.Q6J("ngIf",d.elementsOptions.clientSecret))},dependencies:[b.O5,e._$,e.Ec,p.Wl,p.JJ,p.On,A.R,M.T,f.X$]})}return _})()},2735:(E,P,c)=>{c.d(P,{C:()=>D});var t=(()=>{return(i=t||(t={})).Basic="d24f35e2-dd3c-11ee-9965-960002791003",i.Standard="9b152453-dd36-11ee-9965-960002791003",t;var i})(),e=c(4650),y=c(8262),p=c(3681),T=c(5048),C=c(4329),Z=c(7296),f=c(6895),S=c(9274),b=c(3233),A=c(8723),M=c(9604);const l=["dialogConfirm"];function x(i,h){1&i&&(e.TgZ(0,"span")(1,"b"),e._uU(2),e.ALo(3,"translate"),e.qZA()()),2&i&&(e.xp6(2),e.hij("(",e.lcZ(3,1,"licenseStatus.expired"),")"))}function o(i,h){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"date"),e.YNc(3,x,4,3,"span",0),e.qZA()),2&i){const n=e.oxw(3);e.xp6(1),e.Oqu(e.xi3(2,2,n.license.expiry_date,"dd.MM.YYYY HH:mm")),e.xp6(2),e.Q6J("ngIf",0===n.diffDays)}}function g(i,h){1&i&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"licenseStatus.forever")))}function L(i,h){1&i&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&i&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"licenseStatus.notifyBeforeExpired")))}const _=function(i){return{width:i}};function O(i,h){if(1&i&&(e.TgZ(0,"div",20),e._UZ(1,"div",21),e.qZA()),2&i){const n=e.oxw(4);e.xp6(1),e.MT6("progress-bar ",n.diffDays<=10?"progress-bar-error":""," ",n.diffDays>10&&n.diffDays<=30?"progress-bar-warning":"",""),e.Q6J("ngStyle",e.VKq(5,_,n.expiryPercentage))}}function s(i,h){if(1&i&&(e.TgZ(0,"div",15)(1,"div",16)(2,"h5",17),e._uU(3),e.ALo(4,"translate"),e.qZA(),e.TgZ(5,"h5",17),e._uU(6),e.qZA()(),e.YNc(7,O,2,7,"div",18),e.TgZ(8,"p",19),e._uU(9),e.ALo(10,"translate"),e.qZA()()),2&i){const n=e.oxw(3);e.xp6(3),e.Oqu(e.lcZ(4,5,"licenseStatus.days")),e.xp6(3),e.Oqu(n.diffDays),e.xp6(1),e.Q6J("ngIf",n.expiryPercentage),e.xp6(2),e.AsE("",n.diffDays," ",e.lcZ(10,7,"licenseStatus.daysReminder"),"")}}function u(i,h){if(1&i){const n=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(){e.CHM(n),e.oxw(3);const a=e.MAs(2);return e.KtG(a.showQuestionModal())}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&i&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"licenseStatus.cancelSubscription")))}function d(i,h){if(1&i&&(e.TgZ(0,"div",5)(1,"div",6)(2,"h4",7),e._uU(3),e.ALo(4,"translate"),e.qZA()(),e.TgZ(5,"div",8)(6,"div",5)(7,"div",9)(8,"div",10)(9,"h5"),e._uU(10),e.ALo(11,"translate"),e.TgZ(12,"strong"),e._uU(13),e.qZA()(),e.TgZ(14,"span"),e._uU(15),e.ALo(16,"translate"),e.qZA()(),e.TgZ(17,"div",10)(18,"h5"),e._uU(19),e.ALo(20,"translate"),e.YNc(21,o,4,5,"span",0),e.YNc(22,g,3,3,"span",0),e.qZA(),e.YNc(23,L,3,3,"span",0),e.qZA(),e.TgZ(24,"div",11)(25,"h5"),e._uU(26),e.ALo(27,"translate"),e.qZA(),e.TgZ(28,"span"),e._uU(29),e.ALo(30,"translate"),e.qZA()()(),e.TgZ(31,"div",9),e.YNc(32,s,11,9,"div",12),e._UZ(33,"app-sms-counter"),e.qZA(),e.TgZ(34,"div",6)(35,"a",13),e._uU(36),e.ALo(37,"translate"),e.qZA(),e.YNc(38,u,3,3,"button",14),e.qZA()()()()),2&i){const n=e.oxw(2);e.xp6(3),e.Oqu(e.lcZ(4,14,"licenseStatus.currentPlan")),e.xp6(7),e.hij("",e.lcZ(11,16,"licenseStatus.yourCurrentPlan")," "),e.xp6(3),e.Oqu(n.license.name),e.xp6(2),e.Oqu(e.lcZ(16,18,"licenseStatus.simpleStartForEveryone")),e.xp6(4),e.hij("",e.lcZ(20,20,"licenseStatus.activeUntil")," "),e.xp6(2),e.Q6J("ngIf",n.license.expiry_date),e.xp6(1),e.Q6J("ngIf",!n.license.expiry_date),e.xp6(1),e.Q6J("ngIf",n.license.expiry_date),e.xp6(3),e.AsE("",n.license.monthly_price," ",e.lcZ(27,22,"licenseStatus.perMonth")," "),e.xp6(3),e.Oqu(e.lcZ(30,24,"licenseStatus.planDescription")),e.xp6(3),e.Q6J("ngIf",n.license.expiry_date),e.xp6(4),e.hij(" ",e.lcZ(37,26,"licenseStatus.updatePlan")," "),e.xp6(2),e.Q6J("ngIf",n.license.license_id!==n.getBasicLicenseType())}}function v(i,h){if(1&i){const n=e.EpF();e.TgZ(0,"app-payment-processing",40),e.NdJ("executeMethodEmitter",function(a){e.CHM(n);const m=e.oxw(3);return e.KtG(m.executeMethod(a))}),e.ALo(1,"translate"),e.qZA()}if(2&i){const n=e.oxw(3);e.Q6J("amount",n.licenseSubscription.price)("buttonText",e.lcZ(1,2,"licenseStatus.payForLicense"))}}function I(i,h){if(1&i){const n=e.EpF();e.TgZ(0,"div",23)(1,"div",24)(2,"h4",25),e._uU(3),e.ALo(4,"translate"),e.qZA()(),e.TgZ(5,"div",8)(6,"div",26)(7,"div",27)(8,"input",28),e.NdJ("ngModelChange",function(a){e.CHM(n);const m=e.oxw(2);return e.KtG(m.annualSubscription=a)})("click",function(){e.CHM(n);const a=e.oxw(2);return a.annualSubscription="monthly",e.KtG(a.selectPackage(a.license.monthly_price,1))}),e.qZA(),e.TgZ(9,"label",29),e._uU(10),e.ALo(11,"translate"),e.TgZ(12,"span",30),e._uU(13),e.qZA()()(),e.TgZ(14,"div",31)(15,"input",32),e.NdJ("ngModelChange",function(a){e.CHM(n);const m=e.oxw(2);return e.KtG(m.annualSubscription=a)})("click",function(){e.CHM(n);const a=e.oxw(2);return a.annualSubscription="monthly",e.KtG(a.selectPackage(a.licensePriceFor3Months,3))}),e.qZA(),e.TgZ(16,"label",33),e._uU(17),e.ALo(18,"translate"),e.TgZ(19,"span",30),e._uU(20),e.qZA()()(),e.TgZ(21,"div",31)(22,"input",34),e.NdJ("ngModelChange",function(a){e.CHM(n);const m=e.oxw(2);return e.KtG(m.annualSubscription=a)})("click",function(){e.CHM(n);const a=e.oxw(2);return a.annualSubscription="monthly",e.KtG(a.selectPackage(a.licensePriceFor6Months,6))}),e.qZA(),e.TgZ(23,"label",35),e._uU(24),e.ALo(25,"translate"),e.TgZ(26,"span",30),e._uU(27),e.qZA()(),e._uU(28," \xa0 "),e.TgZ(29,"span",36),e._uU(30),e.ALo(31,"translate"),e.qZA()(),e.TgZ(32,"div",31)(33,"input",37),e.NdJ("ngModelChange",function(a){e.CHM(n);const m=e.oxw(2);return e.KtG(m.annualSubscription=a)})("click",function(){e.CHM(n);const a=e.oxw(2);return a.annualSubscription="annual",e.KtG(a.selectPackage(a.licensePriceFor12Months,12))}),e.qZA(),e.TgZ(34,"label",38),e._uU(35),e.ALo(36,"translate"),e.TgZ(37,"span",30),e._uU(38),e.qZA(),e._uU(39," \xa0 "),e.TgZ(40,"span",36),e._uU(41),e.ALo(42,"translate"),e.qZA()()()(),e.YNc(43,v,2,4,"app-payment-processing",39),e.qZA()()}if(2&i){const n=e.oxw(2);e.xp6(3),e.Oqu(e.lcZ(4,20,"licenseStatus.extendCurrentPlan")),e.xp6(5),e.Q6J("checked",!n.annualSubscription)("ngModel",n.annualSubscription),e.xp6(2),e.hij(" ",e.lcZ(11,22,"licenseStatus.monthlySubscription")," "),e.xp6(3),e.hij(" (\u20ac",n.license.monthly_price,")"),e.xp6(2),e.Q6J("checked",!n.annualSubscription)("ngModel",n.annualSubscription),e.xp6(2),e.hij(" ",e.lcZ(18,24,"licenseStatus.threeMonthSubscription")," "),e.xp6(3),e.hij(" (\u20ac",n.licensePriceFor3Months," )"),e.xp6(2),e.Q6J("checked",!n.annualSubscription)("ngModel",n.annualSubscription),e.xp6(2),e.hij(" ",e.lcZ(25,26,"licenseStatus.sixMonthSubscription")," "),e.xp6(3),e.hij(" (\u20ac",n.licensePriceFor6Months," )"),e.xp6(3),e.Oqu(e.lcZ(31,28,"licenseStatus.discount5")),e.xp6(3),e.Q6J("checked",!!n.annualSubscription)("ngModel",n.annualSubscription),e.xp6(2),e.hij(" ",e.lcZ(36,30,"licenseStatus.annualSubscription")," "),e.xp6(3),e.hij(" (\u20ac",n.licensePriceFor12Months,") "),e.xp6(3),e.Oqu(e.lcZ(42,32,"licenseStatus.discount10")),e.xp6(2),e.Q6J("ngIf",n.licenseSubscription.price)}}function U(i,h){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,d,39,28,"div",3),e.YNc(2,I,44,34,"div",4),e.qZA()),2&i){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.currentStatus),e.xp6(1),e.Q6J("ngIf",n.license.monthly_price)}}let D=(()=>{class i{constructor(n,r,a,m,q){this._service=n,this._helpService=r,this._storageService=a,this._toastr=m,this._translate=q,this.currentStatus=!0,this.licenseSubscription={price:null,duration:null},this.annualSubscription="annual"}ngOnInit(){this.data?(this.license=this.data,this.additionalCalculate(),this.setInitializePrice()):this._service.callGetMethod("/api/getMyLicense","").subscribe(n=>{this.license=n[0],this.additionalCalculate(),this.setInitializePrice()})}ngOnChanges(n){n.data&&(this.license=n.data.currentValue),this.setInitializePrice()}setInitializePrice(){this.licenseSubscription.duration=12,this.licensePriceFor3Months=(3*this.license.monthly_price).toFixed(2),this.licensePriceFor6Months=(6*this.license.monthly_price*.95).toFixed(2),this.licensePriceFor12Months=(12*this.license.monthly_price*.9).toFixed(2),this.licenseSubscription.price=this.licensePriceFor12Months}additionalCalculate(){this.calculateDiffDays(),this.getSubscriptionPeriod(),this.calculatePercentage()}calculateDiffDays(){this.diffDays=this._helpService.calculateDiffInDays(this.license.expiry_date)}getSubscriptionPeriod(){this.subscriptionPeriod=this.license.annual_subscription?this._helpService.daysInYear((new Date).getFullYear()):this._helpService.daysInMonth((new Date).getMonth(),(new Date).getFullYear())}calculatePercentage(){this.expiryPercentage=this.diffDays+"%"}selectPackage(n,r){this.licenseSubscription.price=null,this.licenseSubscription.duration=r,setTimeout(()=>{this.licenseSubscription.price=n.toString()},20)}cancelSubscription(){this._service.callPostMethod("api/cancelSubscription",{license_id:t.Basic}).subscribe(n=>{this._toastr.showSuccessCustom(this._translate.instant("licenseStatus.successfullyPaidLicense")),this.ngOnInit()})}confirmCancelSubscription(){}getBasicLicenseType(){return t.Basic}executeMethod(n){this.license.expiry_date=this._helpService.addMonthsToCurrentDate(this.license.expiry_date,this.licenseSubscription.duration),this._service.callPostMethod("/api/updateLicense",{value:this._storageService.encrypt({id:this.license.id,license_id:this.license.license_id,expiry_date:this.license.expiry_date})}).subscribe(a=>{a&&(this.calculateDiffDays(),this._toastr.showSuccessCustom(this._translate.instant("licenseStatus.successfullyPaidLicense")))})}static#e=this.\u0275fac=function(r){return new(r||i)(e.Y36(y.f),e.Y36(p.s),e.Y36(T.V),e.Y36(C.l),e.Y36(Z.sK))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-license-status"]],viewQuery:function(r,a){if(1&r&&e.Gf(l,5),2&r){let m;e.iGM(m=e.CRH())&&(a.dialogConfirm=m.first)}},inputs:{data:"data",currentStatus:"currentStatus"},features:[e.TTD],decls:4,vars:4,consts:[[4,"ngIf"],[3,"content","confirm"],["dialogConfirm",""],["class","row",4,"ngIf"],["class","card",4,"ngIf"],[1,"row"],[1,"col-12"],[1,"ml-75","card-title","full-width","border-bottom"],[1,"card-body"],[1,"col-md-6"],[1,"mb-2","pb-50"],[1,"mb-2","mb-md-1"],["class","plan-statistics pt-1",4,"ngIf"],["routerLink","/dashboard/admin/payment/license-packages",1,"btn","btn-primary","me-1","mt-1","mr-1","waves-effect","waves-float","waves-light"],["class","btn btn-outline-danger cancel-subscription mt-1 waves-effect",3,"click",4,"ngIf"],[1,"plan-statistics","pt-1"],[1,"d-flex","justify-content-between"],[1,"fw-bolder"],["class","progress",4,"ngIf"],[1,"mt-50"],[1,"progress"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",3,"ngStyle"],[1,"btn","btn-outline-danger","cancel-subscription","mt-1","waves-effect",3,"click"],[1,"card"],[1,"card-header"],[1,"card-title","full-width","border-bottom"],[1,"mb-3"],[1,"custom-control","custom-radio"],["type","radio","name","subscription","id","monthly","value","monthly",1,"custom-control-input",3,"checked","ngModel","ngModelChange","click"],["for","monthly",1,"custom-control-label"],[1,"price"],[1,"custom-control","custom-radio","mt-1"],["type","radio","name","subscription","id","3monthly","value","monthly",1,"custom-control-input",3,"checked","ngModel","ngModelChange","click"],["for","3monthly",1,"custom-control-label"],["type","radio","name","subscription","id","6monthly","value","monthly",1,"custom-control-input",3,"checked","ngModel","ngModelChange","click"],["for","6monthly",1,"custom-control-label"],[1,"badge","badge-light-primary"],["type","radio","name","subscription","id","annual","value","annual",1,"custom-control-input",3,"checked","ngModel","ngModelChange","click"],["for","annual",1,"custom-control-label"],[3,"amount","buttonText","executeMethodEmitter",4,"ngIf"],[3,"amount","buttonText","executeMethodEmitter"]],template:function(r,a){1&r&&(e.YNc(0,U,3,2,"div",0),e.TgZ(1,"app-dialog-confirm",1,2),e.NdJ("confirm",function(){return a.cancelSubscription()}),e.ALo(3,"translate"),e.qZA()),2&r&&(e.Q6J("ngIf",a.license),e.xp6(1),e.Q6J("content",e.lcZ(3,2,"licenseStatus.cancelSubscriptionQuestion")))},dependencies:[f.O5,f.PC,S.Q,b.p,A.rH,M.q,f.uU,Z.X$],styles:[".price[_ngcontent-%COMP%]{font-weight:700;color:var(--primary);font-size:16px}.progress-bar-error[_ngcontent-%COMP%]{background:#ef0000!important}.progress-bar-warning[_ngcontent-%COMP%]{background:#d3be04!important}"]})}return i})()},9604:(E,P,c)=>{c.d(P,{q:()=>M});var t=c(4650),e=c(3681),y=c(8262),p=c(6895),T=c(8723),C=c(7296);const Z=function(l){return{width:l}};function f(l,x){if(1&l&&(t.TgZ(0,"div",12),t._UZ(1,"div",13),t.qZA()),2&l){const o=t.oxw(3);t.xp6(1),t.MT6("progress-bar ",o.smsCount.count<=40?"progress-bar-error":""," ",o.smsCount.count>40&&o.smsCount.count<=70?"progress-bar-warning":"",""),t.Q6J("ngStyle",t.VKq(5,Z,o.generateProgressBar()))}}function S(l,x){1&l&&(t.TgZ(0,"span",14),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&l&&(t.xp6(1),t.Oqu(t.lcZ(2,1,"smsReminder.pleaseBuySmsOnTime")))}function b(l,x){if(1&l&&(t.TgZ(0,"div",6)(1,"div",7)(2,"h5",8),t._uU(3),t.ALo(4,"translate"),t.qZA(),t.TgZ(5,"h5",8),t._uU(6),t.ALo(7,"translate"),t.qZA()(),t.YNc(8,f,2,7,"div",9),t.TgZ(9,"p",10),t._uU(10),t.ALo(11,"translate"),t.YNc(12,S,3,3,"span",11),t.qZA()()),2&l){const o=t.oxw(2);t.xp6(3),t.Oqu(t.lcZ(4,6,"smsReminder.leftMessage")),t.xp6(3),t.AsE("",o.smsCount.count," ",t.lcZ(7,8,"smsReminder.sms"),""),t.xp6(2),t.Q6J("ngIf",o.smsCount),t.xp6(2),t.hij("",o._helpService.replaceText(t.lcZ(11,10,"smsReminder.leftMessageText"),"{numberOfLeftMessage}",o.smsCount.count)," "),t.xp6(2),t.Q6J("ngIf",o.smsCount.count<=40)}}function A(l,x){if(1&l&&(t.TgZ(0,"div",1)(1,"div"),t.YNc(2,b,13,12,"div",2),t.qZA(),t.TgZ(3,"div",3)(4,"a",4),t._UZ(5,"span",5),t._uU(6),t.ALo(7,"translate"),t.qZA()()()),2&l){const o=t.oxw();t.xp6(2),t.Q6J("ngIf",o.smsCount),t.xp6(4),t.hij(" \xa0 ",t.lcZ(7,2,"smsReminder.buyMoreSMS"),"")}}let M=(()=>{class l{constructor(o,g){this._helpService=o,this._service=g,this.smsCount={count:0},this.loader=!0}ngOnInit(){this.getNumberOfSms()}getNumberOfSms(){this.loader=!0,this._service.callGetMethod("/api/getNumberOfSms","").subscribe(o=>{o.length&&(this.smsCount=o[0],this.loader=!1)})}generateProgressBar(){return this.smsCount.count+"%"}static#e=this.\u0275fac=function(g){return new(g||l)(t.Y36(e.s),t.Y36(y.f))};static#t=this.\u0275cmp=t.Xpm({type:l,selectors:[["app-sms-counter"]],decls:1,vars:1,consts:[["class","card",4,"ngIf"],[1,"card"],["class","plan-statistics pt-1",4,"ngIf"],[1,"text-right"],["routerLink","/dashboard/admin/payment/buy-more-sms",1,"btn","btn-primary"],[1,"fa","fa-shopping-cart"],[1,"plan-statistics","pt-1"],[1,"d-flex","justify-content-between"],[1,"fw-bolder"],["class","progress",4,"ngIf"],[1,"mt-50"],["class","text-danger",4,"ngIf"],[1,"progress"],["role","progressbar","aria-valuenow","12","aria-valuemin","0","aria-valuemax","100",3,"ngStyle"],[1,"text-danger"]],template:function(g,L){1&g&&t.YNc(0,A,8,4,"div",0),2&g&&t.Q6J("ngIf",!L.loader)},dependencies:[p.O5,p.PC,T.rH,C.X$],styles:[".progress-bar-error[_ngcontent-%COMP%]{background:#ef0000!important}.progress-bar-warning[_ngcontent-%COMP%]{background:#d3be04!important}.recommended[_ngcontent-%COMP%]{font-size:10px}"]})}return l})()}}]);