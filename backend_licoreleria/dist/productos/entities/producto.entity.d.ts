import { Venta } from 'src/ventas/entities/venta.entity';
export declare class Producto {
    id: number;
    nombre: string;
    tipo: string;
    marca: string;
    precio: number;
    rol: string;
    stock: number;
    descripcion: string;
    imagen: string;
    ventas: Venta[];
}
