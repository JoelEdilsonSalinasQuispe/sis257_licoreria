import { Producto } from 'src/productos/entities/producto.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
export declare class Venta {
    id: number;
    idUsuario: number;
    idProducto: number;
    fechaVenta: Date;
    montoTotal: number;
    metodoPago: number;
    producto: Producto;
    usuario: Usuario;
}
