import { Venta } from 'src/ventas/entities/venta.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn('identity', { name: 'id_producto ' })
  id: number;
  @Column('varchar', { length: 60, name: 'nombre_producto' })
  nombre: string;
  @Column('varchar', { length: 60 })
  tipo: string;
  @Column('varchar', { length: 60 })
  marca: string;
  @Column('decimal')
  precio: number;
  @Column('varchar', { length: 60 })
  rol: string;
  @Column('int')
  stock: number;
  @Column('varchar', { length: 80 })
  descripcion: string;
  @Column('varchar', { length: 150, name: 'imagen_url ' })
  imagen: string;

  @OneToMany(() => Venta, (Venta) => Venta.producto)
  ventas: Venta[];
}
