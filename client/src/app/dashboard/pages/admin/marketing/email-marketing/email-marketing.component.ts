import { Component, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { DialogConfirmComponent } from "app/common/dialog-confirm/dialog-confirm.component";
import { DialogComponent } from "app/common/dialog/dialog.component";
import { FormConfig } from "app/common/dynamic-component/dynamic-forms/models/form-config";
import { ToastrComponent } from "app/common/toastr/toastr.component";
import { CallApiService } from "app/services/call-api.service";
import { ConfigurationService } from "app/services/configuration.service";

@Component({
  selector: "app-email-marketing",
  templateUrl: "./email-marketing.component.html",
  styleUrls: ["./email-marketing.component.scss"],
  standalone: false,
})
export class EmailMarketingComponent {
  @ViewChild("modal") modal!: DialogComponent;
  @ViewChild("dialogConfirm") dialogConfirm!: DialogConfirmComponent;
  @ViewChild("modalSaveCampaign") modalSaveCampaign!: DialogComponent;
  public filteredUsers: any;
  public data: any = {
    campaign_name: "",
    city: "",
    from_birthday: "",
    id: "",
    man: "",
    message: "",
    to_birthday: "",
    undefined: "",
    woman: "",
    zip: "",
  };
  public sending = false;
  public savedCampaigns = [];
  public loading = false;
  public config: any;
  public path = "forms";
  public file = "email-marketing.json";
  public campaignName = "";
  public selectedCampaign = {
    item: null,
    index: null,
  };
  allSelected = false;
  anySelected = false;

  constructor(
    private _service: CallApiService,
    private _configurationService: ConfigurationService,
    private _toastr: ToastrComponent,
    private _translate: TranslateService
  ) {}

  ngOnInit() {
    this.getMyConfiguration();
    this.getMySavedEmailCampaign();
  }

  get selectedCount(): number {
    return this.filteredUsers
      ? this.filteredUsers.filter((u) => u.selected).length
      : 0;
  }

  getMySavedEmailCampaign() {
    this._service
      .callGetMethod("/api/email-marketing/getMySavedEmailCampaigns")
      .subscribe((data: any[]) => {
        this.savedCampaigns = data;
      });
  }

  getMyConfiguration() {
    this.loading = true;
    this._configurationService
      .getConfiguration(this.path, this.file)
      .subscribe((data) => {
        this.config = data as FormConfig;
        this.loading = false;
      });
  }

  submit(event: any) {
    this.data = event;
    if (!this.data.campaign_name) {
      this.data.campaign_name = "";
    }
    if (this.data.subject && this.data.message) {
      this._service
        .callPostMethod("/api/email-marketing/getFilteredUsers", event)
        .subscribe((data) => {
          console.log(data);
          this.filteredUsers = data;
          this.selectedAll();
          this.modal.showModal();
        });
    } else {
      this._toastr.showWarningCustom(
        this._translate.instant("emailMarketing.messageAndSubjectIsNecessary")
      );
    }
  }

  onChange(event: any) {
    this.data = event;
  }

  send() {
    // Filtered just selected users
    const selectedUsers = this.filteredUsers.filter((u) => u.selected);

    if (!selectedUsers.length) {
      this._toastr.showErrorCustom(
        this._translate.instant("emailMarketing.noUsersSelected")
      );
      return;
    }

    this.sending = true;

    this._service
      .callPostMethod("/api/email-marketing/send", {
        users: this.filteredUsers,
        subject: this.data.subject,
        message: this.data.message,
      })
      .subscribe((data) => {
        if (data) {
          if (!this.data.id) {
            this.modalSaveCampaign.showModal();
          }
        }
        this._toastr.showSuccess();
        this.modal.closeModal();
        this.sending = false;
      });
  }

  saveCampaign() {
    if (this.data.campaign_name || this.campaignName) {
      if (!this.data.campaign_name) {
        this.data.campaign_name = this.campaignName;
      }
      this._service
        .callPostMethod("/api/email-marketing/saveEmailCampaign", this.data)
        .subscribe((data) => {
          this._toastr.showSuccess();
          this.modalSaveCampaign.closeModal();
          this.ngOnInit();
        });
    } else {
      this._toastr.showWarningCustom(
        this._translate.instant("emailMarketing.campaignNameIsNecessary")
      );
    }
  }

  removeSavedCampaign(item, index) {
    this.dialogConfirm.showQuestionModal();
    this.selectedCampaign = {
      item: item,
      index: index,
    };
  }

  removeSavedCampaignConfirm() {
    this._service
      .callPostMethod(
        "/api/email-marketing/removeSavedCampaign",
        this.selectedCampaign.item
      )
      .subscribe((data) => {
        if (data) {
          this.savedCampaigns.splice(this.selectedCampaign.index, 1);
        }
      });
  }

  openSavedCampaign(item: any) {
    this.loading = true;
    setTimeout(() => {
      this.data = item;
      this.loading = false;
    }, 10);
  }

  selectedAll() {
    this.filteredUsers = this.filteredUsers.map((u) => ({
      ...u,
      selected: true,
    }));
    this.allSelected = true;
    this.anySelected = true;
  }

  toggleSelectAll(checked: boolean) {
    this.allSelected = checked;
    this.filteredUsers.forEach((u) => (u.selected = checked));
    this.checkIfAnySelected();
  }

  checkIfAllSelected() {
    this.allSelected = this.filteredUsers.every((u) => u.selected);
    this.checkIfAnySelected();
  }

  checkIfAnySelected() {
    this.anySelected = this.filteredUsers.some((u) => u.selected);
  }
}
