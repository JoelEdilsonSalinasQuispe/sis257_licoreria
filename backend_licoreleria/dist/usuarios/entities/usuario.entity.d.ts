import { Venta } from 'src/ventas/entities/venta.entity';
export declare class Usuario {
    id: number;
    nombre: string;
    correo: string;
    contraseña: string;
    rol: string;
    fechaResgistro: Date;
    ventas: Venta[];
}
