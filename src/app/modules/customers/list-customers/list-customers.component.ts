import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { customers, Datum, Meta } from '../../../shared/models/customer';
import { CustomerService } from '../../../shared/services/customer.service';
import { Data, showCustomer } from '../../../shared/models/showCustomer';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  customersList: Datum[] = [];
  meta: Meta | undefined;
  env = environment;
  totalRecords: number = 0;
  loading: boolean = false;
  visible: boolean = false;
  selectedCustomers: Data | null = null;

  // Agregar propiedades para almacenar el estado de paginación
  currentFirst: number = 0;
  rows: number = 15;

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers({ first: this.currentFirst, rows: this.rows });
  }

  loadCustomers(event: any) {
    if (this.loading) return;

    this.loading = true;

    const page = event.first / event.rows + 1;
    const perPage = event.rows;

    this.customerService
      .indexCustomer(page, perPage)
      .subscribe((data: customers) => {
        this.customersList = data.data;
        this.totalRecords = data.meta.total;
        this.loading = false;

        // Actualiza el estado de paginación
        this.currentFirst = event.first; // Guardar el índice actual
        this.rows = event.rows; // Guardar el número de filas por página
      },
      error => {
        console.error("Error al cargar a los clientes", error);
        this.loading = false;
      });
  }

  showDialog(id: number) {
    this.customerService.showCustomer(id).subscribe((data: showCustomer) => {
      this.visible = true;
      this.selectedCustomers = data.data;
    });
  }

  deleteCustomer(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este cliente?')) {
      this.customerService.deleteCustomer(id).subscribe(
        (response) => {
          console.log(response.message); // Mensaje de éxito
          // Llamar a loadCustomers con el estado de paginación actual
          this.loadCustomers({ first: this.currentFirst, rows: this.rows });
        },
        (error) => {
          console.error('Error al eliminar el cliente:', error);
          // Manejo de errores aquí
        }
      );
    }
  }
}