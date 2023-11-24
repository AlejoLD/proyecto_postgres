import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  opc: MenuItem[] = [];
  ngOnInit(): void {
    this.opc = [
      {
        label: 'Usuarios',
        icon: 'pi pi-fw pi-users',
        routerLink: '/usuarios',
        style: {background:"black"},
        
        items: [
          {
            label: 'Crear usuarios',
            icon: 'pi pi-user-plus',
            routerLink: '/addusuarios',
            style: {backgroundColor:"#CDEDF6"},
          },
          {
            label: 'Mostrar usuarios',
            icon: 'pi pi-users',
            routerLink: '/mostrarusuarios',
            style: {backgroundColor:"#CDEDF6"},
          },
          {
            label: 'Actualizar usuarios',
            icon: 'pi pi-user-edit',
            routerLink: '/actualizarusuarios',
            style: {backgroundColor:"#CDEDF6"},
          },
          {
            label: 'Eliminar usuarios',
            icon: 'pi pi-user-minus',
            routerLink: '/eliminarusuario',
            style: {backgroundColor:"#CDEDF6"},
          },
        
        ]
      },
      {
        label: 'Prestamos',
        icon: 'pi pi-fw pi-users',
        routerLink: '/prestamo',
        items: [
          {
            label: 'añadir prestamo',
            icon: 'pi pi-user-plus',
            routerLink: '/addprestamo',
            style: {backgroundColor:"#CDEDF6"},
          },
          {
            label: 'Mostrar prestamo',
            icon: 'pi pi-users',
            routerLink: '/mostrarprestamo',
            style: {backgroundColor:"#CDEDF6"},
          },
          {
            label: 'Actualizar prestamo',
            icon: 'pi pi-user-edit',
            routerLink: '/actualizarprestamo',
            style: {backgroundColor:"#CDEDF6"},
          },
          {
            label: 'Eliminar prestamo',
            icon: 'pi pi-user-minus',
            routerLink: '/eliminarprestamo',
            style: {backgroundColor:"#CDEDF6"},
          }
        ]
      },
      {
        label: 'Ejemplares',
        icon: 'pi pi-fw pi-users',
        routerLink: '/ejemplares',
        style: {backgroundColor:"#CDEDF6"},
        items: [

          {
          label: 'Crear ejemplares',
          icon: 'pi pi-fw pi-users',
          routerLink: '/addejemplares',
          style: {backgroundColor:"#CDEDF6"},
          },
          {
          label: 'Mostar ejemplares',
          icon: 'pi pi-fw pi-users',
          routerLink: '/mostrarejemplares',
          style: {backgroundColor:"#CDEDF6"},
          },
          {
          label: 'Actualizar ejemplares',
          icon: 'pi pi-fw pi-users',
          routerLink: '/actualizarejemplares',
          style: {backgroundColor:"#CDEDF6"},
          },
          {
          label: 'Eliminar ejemplares',
          icon: 'pi pi-fw pi-users',
          routerLink: 'eliminarejemplares',
          style: {backgroundColor:"#CDEDF6"},
          }
        ]

      },
      {
        label: 'libros',
        icon: 'pi pi-fw pi-users',
        routerLink: '/libros',
        items: [

          {
            label: 'añadir libro',
            icon: 'pi pi-fw pi-users',
            routerLink: '/addlibro',
            style: {backgroundColor:"#CDEDF6"},
          },
          {
            label: 'Mostrar libro',
            icon: 'pi pi-fw pi-users',
            routerLink: '/mostrarlibro',
            style: {backgroundColor:"#CDEDF6"},
          },
          {
            label: 'Actualizar ventas',
            icon: 'pi pi-fw pi-users',
            routerLink: '/actualizarlibro',
            style: {backgroundColor:"#CDEDF6"},
          },
          {
            label: 'Eliminar libro',
            icon: 'pi pi-fw pi-users',
            routerLink: '/eliminarlibro',
            style: {backgroundColor:"#CDEDF6"},
          }

        ]
      },
       {
          label: 'escritor',
          icon: 'pi pi-fw pi-users',
          routerLink: '/escritor',
          items: [
  
            {
              label: 'añadir escritor',
              icon: 'pi pi-fw pi-users',
              routerLink: '/addescritor',
              style: {backgroundColor:"#CDEDF6"},
            },
            {
              label: 'Mostrar libro',
              icon: 'pi pi-fw pi-users',
              routerLink: '/mostrarescritor',
              style: {backgroundColor:"#CDEDF6"},
            },
            {
              label: 'Actualizar escritor',
              icon: 'pi pi-fw pi-users',
              routerLink: '/actualizarescritor',
              style: {backgroundColor:"#CDEDF6"},
            },
            {
              label: 'Eliminar escritor',
              icon: 'pi pi-fw pi-users',
              routerLink: '/eliminarescritor',
              style: {backgroundColor:"#CDEDF6"},
            }
  
          ]
        },
          {
            label: 'autor',
            icon: 'pi pi-fw pi-users',
            routerLink: '/autor',
            items: [
    
              {
                label: 'añadir autor',
                icon: 'pi pi-fw pi-users',
                routerLink: '/addautor',
                style: {backgroundColor:"#CDEDF6"},
              },
              {
                label: 'Mostrar autor',
                icon: 'pi pi-fw pi-users',
                routerLink: '/mostrarautor',
                style: {backgroundColor:"#CDEDF6"},
              },
              {
                label: 'Actualizar autor',
                icon: 'pi pi-fw pi-users',
                routerLink: '/actualizarautor',
                style: {backgroundColor:"#CDEDF6"},
              },
              {
                label: 'Eliminar autor',
                icon: 'pi pi-fw pi-users',
                routerLink: '/eliminarautor',
                style: {backgroundColor:"#CDEDF6"},
              }
    
            ]
      } 
    
    ]
  }
}

