import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import languages from "../../../../assets/configurations/i18n/languages.json";
import * as _ from "lodash";
import { CoreConfigService } from "@core/services/config.service";

@Component({
  selector: "app-select-language",
  templateUrl: "./select-language.component.html",
  styleUrls: ["./select-language.component.scss"],
})
export class SelectLanguageComponent {
  public languageOptions: any;
  public selectedLanguage: any;

  constructor(
    public _translateService: TranslateService,
    private _coreConfigService: CoreConfigService
  ) {}

  ngOnInit() {
    this.languageOptions = languages;
    // Set the selected language from default languageOptions
    this.selectedLanguage = _.find(this.languageOptions, {
      id: this._translateService.currentLang,
    });
  }

  setLanguage(language): void {
    // Set the selected language for the navbar on change
    this.selectedLanguage = language;

    // Use the selected language id for translations
    this._translateService.use(language);
    this._translateService.setDefaultLang(language);

    this._coreConfigService.setConfig(
      {
        app: { appLanguage: language },
        layout: {
          enableLocalStorage: true,
          footer: { hidden: false },
          menu: { hidden: false },
          navbar: { hidden: false },
        },
      },
      { emitEvent: false }
    );
  }
}
