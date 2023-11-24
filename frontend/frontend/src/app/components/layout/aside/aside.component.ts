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
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/clientes',
        style: {backgroundColor:"#BC8179"},
        items: [
          {
            label: 'Crear clientes',
            icon: 'pi pi-user-plus',
            routerLink: '/crearcliente',
            style: {backgroundColor:"#BC8179"},
          },
          {
            label: 'Mostrar clientes',
            icon: 'pi pi-users',
            routerLink: '/mostrarcliente',
            style: {backgroundColor:"#BC8179"},
          },
          {
            label: 'Actualizar clientes',
            icon: 'pi pi-user-edit',
            routerLink: '/actualizarcliente',
            style: {backgroundColor:"#BC8179"},
          },
          {
            label: 'Eliminar clientes',
            icon: 'pi pi-user-minus',
            routerLink: '/eliminarcliente',
            style: {backgroundColor:"#BC8179"},
          },
        
        ]
      },
      {
        label: 'Tipo Productos',
        icon: 'pi pi-fw pi-users',
        routerLink: '/tipoProductos',
        style: {backgroundColor:"#BC8179"},
        items: [
          {
            label: 'Crear tipo productos',
            icon: 'pi pi-user-plus',
            routerLink: '/creartipoproducto',
            style: {backgroundColor:"#BC8179"},
          },
          {
            label: 'Mostrar tipo productos',
            icon: 'pi pi-users',
            routerLink: '/mostrartipoproducto',
            style: {backgroundColor:"#BC8179"},
          },
          {
            label: 'Actualizar tipo productos',
            icon: 'pi pi-user-edit',
            routerLink: '/actualizartipoproducto',
            style: {backgroundColor:"#BC8179"},
          },
          {
            label: 'Eliminar tipo productos',
            icon: 'pi pi-user-minus',
            routerLink: '/eliminartipoproducto',
            style: {backgroundColor:"#BC8179"},
          }
        ]
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-users',
        routerLink: '/productos',
        style: {backgroundColor:"#BC8179"},
        items: [

          {
          label: 'Crear productos',
          icon: 'pi pi-fw pi-users',
          routerLink: '/crearproducto',
          style: {backgroundColor:"#BC8179"},
          },
          {
          label: 'Mostar productos',
          icon: 'pi pi-fw pi-users',
          routerLink: '/mostrarproducto',
          style: {backgroundColor:"#BC8179"},
          },
          {
          label: 'Actualizar productos',
          icon: 'pi pi-fw pi-users',
          routerLink: '/actualizarproducto',
          style: {backgroundColor:"#BC8179"},
          },
          {
          label: 'Eliminar productos',
          icon: 'pi pi-fw pi-users',
          routerLink: 'eliminarproducto',
          style: {backgroundColor:"#BC8179"},
          }
        ]

      },
      {
        label: 'Ventas',
        icon: 'pi pi-fw pi-users',
        routerLink: '/ventas',
        style: {backgroundColor:"#BC8179"},
        items: [

          {
            label: 'Crear ventas',
            icon: 'pi pi-fw pi-users',
            routerLink: '/crearventas',
            style: {backgroundColor:"#BC8179"},
          },
          {
            label: 'Mostrar ventas',
            icon: 'pi pi-fw pi-users',
            routerLink: '/mostrarventas',
            style: {backgroundColor:"#BC8179"},
          },
          {
            label: 'Actualizar ventas',
            icon: 'pi pi-fw pi-users',
            routerLink: '/actualizarventas',
            style: {backgroundColor:"#BC8179"},
          },
          {
            label: 'Eliminar ventas',
            icon: 'pi pi-fw pi-users',
            routerLink: '/eliminarventas',
            style: {backgroundColor:"#BC8179"},
          }

        ]
      }
    ]
  }
}
