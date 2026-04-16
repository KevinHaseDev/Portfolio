import { Component, OnDestroy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

type ContactFormModel = {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
};

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnDestroy {
  isSending = false;
  isSuccessOverlayVisible = false;
  formModel: ContactFormModel = this.createInitialFormModel();
  private successOverlayTimerId: ReturnType<typeof setTimeout> | null = null;

  ngOnDestroy(): void {
    this.clearSuccessOverlayTimer();
  }

  async handleSubmit(contactForm: NgForm): Promise<void> {
    if (this.isBlockedSubmission(contactForm)) {
      return;
    }
    this.isSending = true;
    await this.submitFormSafely(contactForm);
    this.isSending = false;
  }

  private isBlockedSubmission(contactForm: NgForm): boolean {
    if (this.isSending || contactForm.invalid) {
      contactForm.control.markAllAsTouched();
      return true;
    }
    return false;
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
