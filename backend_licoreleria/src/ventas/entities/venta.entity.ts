import { Producto } from 'src/productos/entities/producto.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn('identity', { name: 'id_venta' })
  id: number;
  @Column('integer', { name: 'id_usuario' })
  idUsuario: number;
  @Column('integer', { name: 'id_producto' })
  idProducto: number;
  @Column('date', { name: 'fecha_venta ' })
  fechaVenta: Date;
  @Column('decimal', { name: 'monto_total' })
  montoTotal: number;
  @Column('decimal', { name: 'metodo_pago' })
  metodoPago: number;

  @ManyToOne(() => Producto, (producto) => producto.ventas)
  @JoinColumn({ name: 'id_producto', referencedColumnName: 'id' })
  producto: Producto;

  @ManyToOne(() => Usuario, (usuario) => usuario.ventas)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  usuario: Usuario;
}
