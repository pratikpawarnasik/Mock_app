import { Component, OnInit } from '@angular/core';
import formJson from '../../../../core/data/formValue.json';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
  export class SharedComponent implements OnInit{
    selectedLanguage = localStorage.getItem('selectedLanguage') || 'EN';
    constructor(private http: HttpClient,
      private sharedService: SharedService) { }
    formData: any;
  
    ngOnInit(): void {
      this.sharedService.languageChange.subscribe((language: string) => {
        this.selectedLanguage = language;
        // Handle the language change logic here
        console.log("language changed to ", language);
        this.fetchFormData(this.selectedLanguage);
      });
      this.fetchFormData(this.selectedLanguage);
    }
    fetchFormData(_val: string): Promise<void> {
      console.log(_val);
      
      return new Promise<void>((resolve, reject) => {
        this.http.get<any>('/assets/user-'+_val+'.json').subscribe(
          (data) => {
            this.formData = data;
            resolve();
          },
          (error) => {
            console.error('Failed to fetch form data:', error);
            reject();
          }
        );
      });
    }
  
    onRadioButtonChange(language: string) {
      alert(language);
      // Update the selectedLanguage variable and store it in local storage
      this.selectedLanguage = language;
      localStorage.setItem('selectedLanguage', this.selectedLanguage);
  
      // Perform any other actions based on the selected language
    }
    handleFormSubmitted(response: any) {

      if (this.formData) {
        // Update the form JSON object with the form data values
        for (const group of this.formData.formGroups) {
          for (const field of group.fields) {
            if (field.name in response) {
              field.value = response[field.name];
            }
          }
        }
      }
    
      // Convert the updated form JSON object to a JSON string
      const updatedFormJson = JSON.stringify(this.formData);
    
      // Save the updated form JSON object in local storage
      localStorage.setItem('formJson', updatedFormJson);
    
      console.log('Updated form JSON:', this.formData);
    }
  
  
  }
