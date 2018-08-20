"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var appSettings = require("application-settings");
var PersonalComponent = /** @class */ (function () {
    function PersonalComponent(page, router) {
        this.page = page;
        this.router = router;
        // Use the component constructor to inject providers.
        page.actionBarHidden = true;
    }
    PersonalComponent.prototype.ngOnInit = function () {
        this.companyName = appSettings.getString("companyName", "");
        this.companyType = appSettings.getString("companyType", "");
        this.firstName = appSettings.getString("firstName", "");
        this.lastName = appSettings.getString("lastName", "");
        this.email = appSettings.getString("email", "");
        this.al1 = appSettings.getString("al1", "");
        this.al2 = appSettings.getString("al2", "");
        this.city = appSettings.getString("city", "");
        this.postal = appSettings.getString("postal", 0);
        this.country = appSettings.getString("country", "");
        this.state = appSettings.getString("state", "");
        this.FirstCheckBox.nativeElement.checked = "true";
        this.countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas",
            "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands",
            "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica",
            "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
            "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
            "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
            "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia",
            "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania",
            "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia",
            "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
            "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
            "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan",
            "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia",
            "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay",
            "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
    };
    PersonalComponent.prototype.step3 = function () {
        // if (this.firstName == "" ||
        // 	this.lastName == "" ||
        // 	this.email == "" ||
        // 	this.al1 == "" ||
        // 	this.al2 == "" ||
        // 	this.city == "" ||
        // 	this.postal == 0 ||
        // 	this.country == "" ||
        // 	this.state == "") {
        // 		alert("please complete the entire form");
        // 		return;
        // 	}
        appSettings.setString("firstName", this.firstName);
        appSettings.setString("lastName", this.lastName);
        appSettings.setString("email", this.email);
        appSettings.setString("al1", this.al1);
        appSettings.setString("al2", this.al2);
        appSettings.setString("city", this.city);
        appSettings.setString("postal", this.postal);
        appSettings.setString("country", this.country);
        appSettings.setString("state", this.state);
        appSettings.setString("addToDirectors", String(this.FirstCheckBox.nativeElement.checked));
        if (this.FirstCheckBox.nativeElement.checked == true) {
            appSettings.setString("directors", JSON.stringify([{
                    "firstName": this.firstName,
                    "lastName": this.lastName,
                    "email": this.email,
                    "al1": this.al1,
                    "al2": this.al2,
                    "city": this.city,
                    "postal": this.postal,
                    "country": this.country,
                    "state": this.state
                }]));
        }
        else {
            appSettings.setString("directors", JSON.stringify([{}]));
        }
        this.router.navigate(["/review"]);
    };
    PersonalComponent.prototype.cancelFilterableList = function () {
        console.log('canceled');
    };
    PersonalComponent.prototype.itemTapped = function (args) {
        alert(args.selectedItem);
    };
    PersonalComponent.prototype.showPicker = function () {
        this.myfilter.nativeElement.show();
    };
    __decorate([
        core_1.ViewChild("CB1"),
        __metadata("design:type", core_1.ElementRef)
    ], PersonalComponent.prototype, "FirstCheckBox", void 0);
    __decorate([
        core_1.ViewChild('myfilter'),
        __metadata("design:type", core_1.ElementRef)
    ], PersonalComponent.prototype, "myfilter", void 0);
    PersonalComponent = __decorate([
        core_1.Component({
            selector: "Personal",
            moduleId: module.id,
            templateUrl: "./personal.component.html",
            styleUrls: ['./personal.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], PersonalComponent);
    return PersonalComponent;
}());
exports.PersonalComponent = PersonalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyc29uYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdFO0FBQ3hFLGdDQUE2QjtBQUc3QiwwQ0FBeUM7QUFDekMsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFTbEQ7SUFtQkksMkJBQXFCLElBQVUsRUFBVSxNQUFjO1FBQWxDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pELHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMs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O0FBcEhZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtLZXlib2FyZFR5cGV9IGZyb20gXCJ1aS9lbnVtc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG52YXIgYXBwU2V0dGluZ3MgPSByZXF1aXJlKFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIik7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJQZXJzb25hbFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogXCIuL3BlcnNvbmFsLmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vcGVyc29uYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQZXJzb25hbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cdEBWaWV3Q2hpbGQoXCJDQjFcIikgRmlyc3RDaGVja0JveDogRWxlbWVudFJlZjtcclxuXHJcblx0Zmlyc3ROYW1lIDpzdHJpbmc7XHJcblx0bGFzdE5hbWUgOnN0cmluZztcclxuXHRlbWFpbCA6c3RyaW5nO1xyXG5cdGFsMSA6c3RyaW5nO1xyXG5cdGFsMiA6c3RyaW5nO1xyXG5cdGNpdHkgOnN0cmluZztcclxuXHRwb3N0YWwgOm51bWJlcjtcclxuXHRjb3VudHJ5IDpzdHJpbmc7XHJcblx0c3RhdGUgOnN0cmluZztcclxuXHRjb21wYW55TmFtZTogc3RyaW5nO1xyXG5cdGNvbXBhbnlUeXBlIDpzdHJpbmc7XHJcblx0ZGlyZWN0b3JzIDpzdHJpbmc7XHJcblx0Y291bnRyeUxpc3QgOkFycmF5PFN0cmluZz47XHJcblx0XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cdFx0Ly8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuXHRcdHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuY29tcGFueU5hbWUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55TmFtZVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuY29tcGFueVR5cGUgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJjb21wYW55VHlwZVwiLCBcIlwiKTtcclxuXHRcdHRoaXMuZmlyc3ROYW1lID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwiZmlyc3ROYW1lXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5sYXN0TmFtZSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImxhc3ROYW1lXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5lbWFpbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImVtYWlsXCIsIFwiXCIpO1xyXG5cdFx0dGhpcy5hbDEgPSBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoXCJhbDFcIiwgXCJcIik7XHJcblx0XHR0aGlzLmFsMiA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImFsMlwiLCBcIlwiKTtcclxuXHRcdHRoaXMuY2l0eSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNpdHlcIiwgXCJcIik7XHJcblx0XHR0aGlzLnBvc3RhbCA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcInBvc3RhbFwiLCAwKTtcclxuXHRcdHRoaXMuY291bnRyeSA9IGFwcFNldHRpbmdzLmdldFN0cmluZyhcImNvdW50cnlcIiwgXCJcIik7XHJcblx0XHR0aGlzLnN0YXRlID0gYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwic3RhdGVcIiwgXCJcIik7XHJcblx0XHR0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkID0gXCJ0cnVlXCI7XHJcblx0XHR0aGlzLmNvdW50cnlMaXN0ID0gW1wiQWZnaGFuaXN0YW5cIixcIkFsYmFuaWFcIixcIkFsZ2VyaWFcIixcIkFuZG9ycmFcIixcIkFuZ29sYVwiLFwiQW5ndWlsbGFcIixcIkFudGlndWEgJmFtcDsgQmFyYnVkYVwiLFwiQXJnZW50aW5hXCIsXCJBcm1lbmlhXCIsXCJBcnViYVwiLFwiQXVzdHJhbGlhXCIsXCJBdXN0cmlhXCIsXCJBemVyYmFpamFuXCIsXCJCYWhhbWFzXCJcclxuXHRcdCxcIkJhaHJhaW5cIixcIkJhbmdsYWRlc2hcIixcIkJhcmJhZG9zXCIsXCJCZWxhcnVzXCIsXCJCZWxnaXVtXCIsXCJCZWxpemVcIixcIkJlbmluXCIsXCJCZXJtdWRhXCIsXCJCaHV0YW5cIixcIkJvbGl2aWFcIixcIkJvc25pYSAmYW1wOyBIZXJ6ZWdvdmluYVwiLFwiQm90c3dhbmFcIixcIkJyYXppbFwiLFwiQnJpdGlzaCBWaXJnaW4gSXNsYW5kc1wiXHJcblx0XHQsXCJCcnVuZWlcIixcIkJ1bGdhcmlhXCIsXCJCdXJraW5hIEZhc29cIixcIkJ1cnVuZGlcIixcIkNhbWJvZGlhXCIsXCJDYW1lcm9vblwiLFwiQ2FuYWRhXCIsXCJDYXBlIFZlcmRlXCIsXCJDYXltYW4gSXNsYW5kc1wiLFwiQ2hhZFwiLFwiQ2hpbGVcIixcIkNoaW5hXCIsXCJDb2xvbWJpYVwiLFwiQ29uZ29cIixcIkNvb2sgSXNsYW5kc1wiLFwiQ29zdGEgUmljYVwiXHJcblx0XHQsXCJDb3RlIEQgSXZvaXJlXCIsXCJDcm9hdGlhXCIsXCJDcnVpc2UgU2hpcFwiLFwiQ3ViYVwiLFwiQ3lwcnVzXCIsXCJDemVjaCBSZXB1YmxpY1wiLFwiRGVubWFya1wiLFwiRGppYm91dGlcIixcIkRvbWluaWNhXCIsXCJEb21pbmljYW4gUmVwdWJsaWNcIixcIkVjdWFkb3JcIixcIkVneXB0XCIsXCJFbCBTYWx2YWRvclwiLFwiRXF1YXRvcmlhbCBHdWluZWFcIlxyXG5cdFx0LFwiRXN0b25pYVwiLFwiRXRoaW9waWFcIixcIkZhbGtsYW5kIElzbGFuZHNcIixcIkZhcm9lIElzbGFuZHNcIixcIkZpamlcIixcIkZpbmxhbmRcIixcIkZyYW5jZVwiLFwiRnJlbmNoIFBvbHluZXNpYVwiLFwiRnJlbmNoIFdlc3QgSW5kaWVzXCIsXCJHYWJvblwiLFwiR2FtYmlhXCIsXCJHZW9yZ2lhXCIsXCJHZXJtYW55XCIsXCJHaGFuYVwiXHJcblx0XHQsXCJHaWJyYWx0YXJcIixcIkdyZWVjZVwiLFwiR3JlZW5sYW5kXCIsXCJHcmVuYWRhXCIsXCJHdWFtXCIsXCJHdWF0ZW1hbGFcIixcIkd1ZXJuc2V5XCIsXCJHdWluZWFcIixcIkd1aW5lYSBCaXNzYXVcIixcIkd1eWFuYVwiLFwiSGFpdGlcIixcIkhvbmR1cmFzXCIsXCJIb25nIEtvbmdcIixcIkh1bmdhcnlcIixcIkljZWxhbmRcIixcIkluZGlhXCJcclxuXHRcdCxcIkluZG9uZXNpYVwiLFwiSXJhblwiLFwiSXJhcVwiLFwiSXJlbGFuZFwiLFwiSXNsZSBvZiBNYW5cIixcIklzcmFlbFwiLFwiSXRhbHlcIixcIkphbWFpY2FcIixcIkphcGFuXCIsXCJKZXJzZXlcIixcIkpvcmRhblwiLFwiS2F6YWtoc3RhblwiLFwiS2VueWFcIixcIkt1d2FpdFwiLFwiS3lyZ3l6IFJlcHVibGljXCIsXCJMYW9zXCIsXCJMYXR2aWFcIlxyXG5cdFx0LFwiTGViYW5vblwiLFwiTGVzb3Rob1wiLFwiTGliZXJpYVwiLFwiTGlieWFcIixcIkxpZWNodGVuc3RlaW5cIixcIkxpdGh1YW5pYVwiLFwiTHV4ZW1ib3VyZ1wiLFwiTWFjYXVcIixcIk1hY2Vkb25pYVwiLFwiTWFkYWdhc2NhclwiLFwiTWFsYXdpXCIsXCJNYWxheXNpYVwiLFwiTWFsZGl2ZXNcIixcIk1hbGlcIixcIk1hbHRhXCIsXCJNYXVyaXRhbmlhXCJcclxuXHRcdCxcIk1hdXJpdGl1c1wiLFwiTWV4aWNvXCIsXCJNb2xkb3ZhXCIsXCJNb25hY29cIixcIk1vbmdvbGlhXCIsXCJNb250ZW5lZ3JvXCIsXCJNb250c2VycmF0XCIsXCJNb3JvY2NvXCIsXCJNb3phbWJpcXVlXCIsXCJOYW1pYmlhXCIsXCJOZXBhbFwiLFwiTmV0aGVybGFuZHNcIixcIk5ldGhlcmxhbmRzIEFudGlsbGVzXCIsXCJOZXcgQ2FsZWRvbmlhXCJcclxuXHRcdCxcIk5ldyBaZWFsYW5kXCIsXCJOaWNhcmFndWFcIixcIk5pZ2VyXCIsXCJOaWdlcmlhXCIsXCJOb3J3YXlcIixcIk9tYW5cIixcIlBha2lzdGFuXCIsXCJQYWxlc3RpbmVcIixcIlBhbmFtYVwiLFwiUGFwdWEgTmV3IEd1aW5lYVwiLFwiUGFyYWd1YXlcIixcIlBlcnVcIixcIlBoaWxpcHBpbmVzXCIsXCJQb2xhbmRcIixcIlBvcnR1Z2FsXCJcclxuXHRcdCxcIlB1ZXJ0byBSaWNvXCIsXCJRYXRhclwiLFwiUmV1bmlvblwiLFwiUm9tYW5pYVwiLFwiUnVzc2lhXCIsXCJSd2FuZGFcIixcIlNhaW50IFBpZXJyZSAmYW1wOyBNaXF1ZWxvblwiLFwiU2Ftb2FcIixcIlNhbiBNYXJpbm9cIixcIlNhdGVsbGl0ZVwiLFwiU2F1ZGkgQXJhYmlhXCIsXCJTZW5lZ2FsXCIsXCJTZXJiaWFcIixcIlNleWNoZWxsZXNcIlxyXG5cdFx0LFwiU2llcnJhIExlb25lXCIsXCJTaW5nYXBvcmVcIixcIlNsb3Zha2lhXCIsXCJTbG92ZW5pYVwiLFwiU291dGggQWZyaWNhXCIsXCJTb3V0aCBLb3JlYVwiLFwiU3BhaW5cIixcIlNyaSBMYW5rYVwiLFwiU3QgS2l0dHMgJmFtcDsgTmV2aXNcIixcIlN0IEx1Y2lhXCIsXCJTdCBWaW5jZW50XCIsXCJTdC4gTHVjaWFcIixcIlN1ZGFuXCJcclxuXHRcdCxcIlN1cmluYW1lXCIsXCJTd2F6aWxhbmRcIixcIlN3ZWRlblwiLFwiU3dpdHplcmxhbmRcIixcIlN5cmlhXCIsXCJUYWl3YW5cIixcIlRhamlraXN0YW5cIixcIlRhbnphbmlhXCIsXCJUaGFpbGFuZFwiLFwiVGltb3IgTCdFc3RlXCIsXCJUb2dvXCIsXCJUb25nYVwiLFwiVHJpbmlkYWQgJmFtcDsgVG9iYWdvXCIsXCJUdW5pc2lhXCJcclxuXHRcdCxcIlR1cmtleVwiLFwiVHVya21lbmlzdGFuXCIsXCJUdXJrcyAmYW1wOyBDYWljb3NcIixcIlVnYW5kYVwiLFwiVWtyYWluZVwiLFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIixcIlVuaXRlZCBLaW5nZG9tXCIsXCJVbml0ZWQgU3RhdGVzXCIsXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIixcIlVydWd1YXlcIlxyXG5cdFx0LFwiVXpiZWtpc3RhblwiLFwiVmVuZXp1ZWxhXCIsXCJWaWV0bmFtXCIsXCJWaXJnaW4gSXNsYW5kcyAoVVMpXCIsXCJZZW1lblwiLFwiWmFtYmlhXCIsXCJaaW1iYWJ3ZVwiXTtcclxuXHRcclxuXHR9XHJcblxyXG5cclxuXHRzdGVwMygpIHtcclxuXHRcclxuXHRcdC8vIGlmICh0aGlzLmZpcnN0TmFtZSA9PSBcIlwiIHx8XHJcblx0XHQvLyBcdHRoaXMubGFzdE5hbWUgPT0gXCJcIiB8fFxyXG5cdFx0Ly8gXHR0aGlzLmVtYWlsID09IFwiXCIgfHxcclxuXHRcdC8vIFx0dGhpcy5hbDEgPT0gXCJcIiB8fFxyXG5cdFx0Ly8gXHR0aGlzLmFsMiA9PSBcIlwiIHx8XHJcblx0XHQvLyBcdHRoaXMuY2l0eSA9PSBcIlwiIHx8XHJcblx0XHQvLyBcdHRoaXMucG9zdGFsID09IDAgfHxcclxuXHRcdC8vIFx0dGhpcy5jb3VudHJ5ID09IFwiXCIgfHxcclxuXHRcdC8vIFx0dGhpcy5zdGF0ZSA9PSBcIlwiKSB7XHJcblx0XHQvLyBcdFx0YWxlcnQoXCJwbGVhc2UgY29tcGxldGUgdGhlIGVudGlyZSBmb3JtXCIpO1xyXG5cdFx0Ly8gXHRcdHJldHVybjtcclxuXHRcdC8vIFx0fVxyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZmlyc3ROYW1lXCIsIHRoaXMuZmlyc3ROYW1lKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImxhc3ROYW1lXCIsIHRoaXMubGFzdE5hbWUpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZW1haWxcIiwgdGhpcy5lbWFpbCk7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhbDFcIiwgdGhpcy5hbDEpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWwyXCIsIHRoaXMuYWwyKTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyhcImNpdHlcIiwgdGhpcy5jaXR5KTtcclxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZyAoXCJwb3N0YWxcIiwgdGhpcy5wb3N0YWwpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiY291bnRyeVwiLCB0aGlzLmNvdW50cnkpO1xyXG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwic3RhdGVcIiwgdGhpcy5zdGF0ZSk7XHJcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJhZGRUb0RpcmVjdG9yc1wiLCBTdHJpbmcodGhpcy5GaXJzdENoZWNrQm94Lm5hdGl2ZUVsZW1lbnQuY2hlY2tlZCkpO1xyXG5cclxuXHRcdGlmICh0aGlzLkZpcnN0Q2hlY2tCb3gubmF0aXZlRWxlbWVudC5jaGVja2VkID09IHRydWUpIHtcclxuXHRcdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwiZGlyZWN0b3JzXCIsIEpTT04uc3RyaW5naWZ5KFt7IFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJmaXJzdE5hbWVcIjogdGhpcy5maXJzdE5hbWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXCJsYXN0TmFtZVwiOiB0aGlzLmxhc3ROYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFwiZW1haWxcIjogdGhpcy5lbWFpbCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcImFsMVwiOiB0aGlzLmFsMSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcImFsMlwiOiB0aGlzLmFsMixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcImNpdHlcIjogdGhpcy5jaXR5LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFwicG9zdGFsXCI6IHRoaXMucG9zdGFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFwiY291bnRyeVwiOiB0aGlzLmNvdW50cnksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXCJzdGF0ZVwiOiB0aGlzLnN0YXRlXHJcblx0XHRcdH1dKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoXCJkaXJlY3RvcnNcIiwgSlNPTi5zdHJpbmdpZnkoW3t9XSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yZXZpZXdcIl0pO1xyXG5cdH1cclxuXHJcblxyXG5cdEBWaWV3Q2hpbGQoJ215ZmlsdGVyJykgbXlmaWx0ZXI6IEVsZW1lbnRSZWY7XHJcblx0XHJcblx0Y2FuY2VsRmlsdGVyYWJsZUxpc3QoKSB7XHJcblx0XHRjb25zb2xlLmxvZygnY2FuY2VsZWQnKTtcclxuXHR9XHJcblx0XHJcblx0aXRlbVRhcHBlZChhcmdzKSB7XHJcblx0XHRhbGVydChhcmdzLnNlbGVjdGVkSXRlbSlcclxuXHR9XHJcblx0XHJcblx0c2hvd1BpY2tlcigpIHtcclxuXHRcdHRoaXMubXlmaWx0ZXIubmF0aXZlRWxlbWVudC5zaG93KCk7XHJcblx0fVxyXG5cdFxyXG5cclxufVxyXG4iXX0=