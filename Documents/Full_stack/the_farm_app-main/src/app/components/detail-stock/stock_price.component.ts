import { Component, OnInit } from '@angular/core';
import { FinnhubService } from './finnhub.service';
import { Router } from '@angular/router'; // Import Router
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-patents',
  templateUrl: './patent_welcome.html',
  styleUrls: ['./stock-patents.component.css']
})
export class StockPatentsComponent implements OnInit {
  isFormVisible = false;
   isListVisible = false;
     isLoading = true;


  patentForm!: FormGroup<any>;
data: JSON | undefined;
displayForm() {
 this.isFormVisible = !this.isFormVisible;
 console.log(this.isFormVisible)




}
     patents: any[] = [];
  loading: boolean = true;
  error: string | null = null;
  Symbol: string | null |any= ""; 
  From_date: string | null | any = ""; 
  To_date: string | null | any = "";

    form;


  constructor(private finnhubService: FinnhubService, private router: Router, private fb: FormBuilder) {
    this.form = this.createForm();
  }

createForm() {
  return this.fb.group({
    Symbol: ['', [Validators.required, Validators.pattern('[A-Z]*')]],
    From_date: ['', Validators.required],
    To_date: ['', Validators.required]
  });


  
}

  async ngOnInit(): Promise<void> {
    try {
      this.patents = await this.finnhubService.getStockPatents(this.Symbol, this.From_date, this.To_date);
      this.loading = false;
    } catch (error) {
      console.error(error);
      this.error = 'Failed to load data';
      this.loading = false;
    }
  }
  loadData() {
    // Your data loading logic here
    // When data is loaded, set isLoading to false
    this.isLoading = false;
  }
  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      const { Symbol, From_date, To_date } = this.form.value;
      this.Symbol = Symbol;
      this.From_date = From_date;
      this.To_date = To_date;

      // call ngOnInit or extract its contents into a separate method and call it here
      await this.ngOnInit();
    }
  }
}