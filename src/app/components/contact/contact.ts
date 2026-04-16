import { Component, OnDestroy, computed, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ContactFormModel } from '../../Interfaces/contact.interface';
import { RouterLink } from "@angular/router";
import { LanguageService } from '../../services/language.service';

type ContactContent = {
  sectionTitle: string;
  sectionHeadlineLineOne: string;
  sectionHeadlineLineTwo: string;
  problemHeadline: string;
  introductionText: string;
  frontendPromptText: string;
  frontendPromptHighlight: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  privacyLabelPrefix: string;
  privacyPolicyLabel: string;
  privacyLabelSuffix: string;
  sendingButtonText: string;
  submitButtonText: string;
  successMessage: string;
  nameMissingError: string;
  namePatternError: string;
  emailMissingError: string;
  emailFormatError: string;
  emailInvalidError: string;
  messageMissingError: string;
  privacyMissingError: string;
};

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnDestroy {
  private languageService = inject(LanguageService);

  content = computed(() => {
    return this.languageService.getTranslationByLanguage<ContactContent>('contact');
  });

  isSending = false;
  isSubmitAttempted = false;
  isSuccessOverlayVisible = false;
  formModel: ContactFormModel = this.createInitialFormModel();
  private successOverlayTimerId: ReturnType<typeof setTimeout> | null = null;

  ngOnDestroy(): void {
    this.clearSuccessOverlayTimer();
  }

  async handleSubmit(contactForm: NgForm): Promise<void> {
    this.isSubmitAttempted = true;
    if (this.isBlockedSubmission(contactForm)) {
      return;
    }
    this.isSending = true;
    await this.submitFormSafely(contactForm);
    this.isSending = false;
  }

  private isBlockedSubmission(contactForm: NgForm): boolean {
    if (this.isSending) {
      return true;
    }
    if (contactForm.invalid) {
      this.touchAllFields(contactForm);
      return true;
    }
    return false;
  }

  showValidationError(control: NgModel | null): boolean {
    if (!control || !control.invalid) {
      return false;
    }
    return control.touched || this.isSubmitAttempted;
  }

  getNameErrorMessage(control: NgModel | null): string {
    let content = this.content();
    if (!this.showValidationError(control)) {
      return '';
    }
    if (control?.errors?.['required']) {
      return content.nameMissingError;
    }
    if (control?.errors?.['pattern']) {
      return content.namePatternError;
    }
    return content.nameMissingError;
  }

  getEmailErrorMessage(control: NgModel | null): string {
    let content = this.content();
    if (!this.showValidationError(control)) {
      return '';
    }
    if (control?.errors?.['required']) {
      return content.emailMissingError;
    }
    if (control?.errors?.['email']) {
      return content.emailFormatError;
    }
    return content.emailInvalidError;
  }

  getMessageErrorMessage(control: NgModel | null): string {
    let content = this.content();
    if (!this.showValidationError(control)) {
      return '';
    }
    return content.messageMissingError;
  }

  getPrivacyErrorMessage(control: NgModel | null): string {
    let content = this.content();
    if (!this.showValidationError(control)) {
      return '';
    }
    return content.privacyMissingError;
  }

  getSubmitButtonLabel(): string {
    let content = this.content();
    if (this.isSending) {
      return content.sendingButtonText;
    }
    return content.submitButtonText;
  }

  private async sendContactMessage(): Promise<void> {
    let response = await fetch(
      'https://formsubmit.co/ajax/hasekevin21@googlemail.com',
      this.buildRequestOptions()
    );
    if (!response.ok) {
      throw new Error('Contact form could not be sent.');
    }
  }

  private async submitFormSafely(contactForm: NgForm): Promise<void> {
    try {
      await this.sendContactMessage();
      this.resetFormState(contactForm);
      this.showSuccessOverlay();
    } catch (error) {
      console.error('Contact form send failed.', error);
    }
  }

  private buildRequestOptions(): RequestInit {
    return {
      method: 'POST',
      headers: this.getRequestHeaders(),
      body: JSON.stringify(this.createPayload())
    };
  }

  private getRequestHeaders(): HeadersInit {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    };
  }

  private createPayload(): Record<string, string> {
    return {
      name: this.formModel.name,
      email: this.formModel.email,
      message: this.formModel.message,
      _subject: `Portfolio contact request from ${this.formModel.name}`,
      _captcha: 'false',
      _template: 'table'
    };
  }

  private resetFormState(contactForm: NgForm): void {
    let initialModel = this.createInitialFormModel();
    contactForm.resetForm(initialModel);
    this.formModel = initialModel;
    this.isSubmitAttempted = false;
  }

  private touchAllFields(contactForm: NgForm): void {
    contactForm.control.markAllAsTouched();
  }

  private showSuccessOverlay(): void {
    this.clearSuccessOverlayTimer();
    this.isSuccessOverlayVisible = true;
    this.successOverlayTimerId = setTimeout(() => {
      this.isSuccessOverlayVisible = false;
    }, 3000);
  }

  private clearSuccessOverlayTimer(): void {
    if (!this.successOverlayTimerId) {
      return;
    }
    clearTimeout(this.successOverlayTimerId);
    this.successOverlayTimerId = null;
  }

  private createInitialFormModel(): ContactFormModel {
    return {
      name: '',
      email: '',
      message: '',
      privacy: false
    };
  }

}
