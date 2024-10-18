import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { storeCustomer } from '../../../shared/models/storeCustomer';
import { CustomerService } from '../../../shared/services/customer.service';

@Component({
  selector: 'app-create-customers',
  templateUrl: './create-customers.component.html',
  styleUrl: './create-customers.component.css'
})

export class CreateCustomersComponent {
  formCustomer: FormGroup;
  constructor(private formBuilder: FormBuilder, private customerService: CustomerService) {
    this.formCustomer = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      paternal_surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      maternal_surname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      date_of_birth: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]], // Validación de email
      prefix: [null, Validators.required],
      phone: [null, [Validators.required]], // Hacer requerido el teléfono
      type_document: [null, [Validators.required]], // Hacer requerido el tipo de documento
      n_document: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]], // Se usa string para validar longitud
      country: ['', Validators.required],
      region: ['', Validators.required],
      province: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
    })
  }

  formatDate(date: Date | null): string {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses empiezan en 0
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

onSubmit() {
    if (this.formCustomer.valid) {
        const rawValue = this.formCustomer.value;        
        const formattedDate = this.formatDate(rawValue.date_of_birth);
        const result = {
            ...rawValue,
            date_of_birth: formattedDate
        };

        this.customerService.storeCustomer(result).subscribe(
            (response) => {
                console.log(response.message);
            },
            (error) => {
                console.error('Error al crear el cliente:', error);
            }
        );
    } else {
        console.log('Formulario no válido');
    }
  }
}
